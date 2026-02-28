import simpleGit, { SimpleGit, LogResult } from 'simple-git';
import type { GitCommit, BranchInfo } from './types.js';

export class GitParser {
  private git: SimpleGit;
  private repoPath: string;

  constructor(repoPath: string = '.') {
    this.repoPath = repoPath;
    this.git = simpleGit(repoPath);
  }

  async isGitRepository(): Promise<boolean> {
    try {
      await this.git.status();
      return true;
    } catch {
      return false;
    }
  }

  async getBranches(): Promise<BranchInfo[]> {
    try {
      const branchSummary = await this.git.branch(['-a']);
      const branches: BranchInfo[] = [];
      const seenBranches = new Set<string>();

      for (const branchName of branchSummary.all) {
        // 跳过远程分支的 HEAD 指针
        if (branchName.includes('remotes/origin/HEAD')) continue;

        // 清理分支名
        const cleanName = branchName.replace('remotes/origin/', '').replace(/^\*\s*/, '');

        // 跳过已经处理过的分支（避免本地和远程重复）
        if (seenBranches.has(cleanName)) continue;
        seenBranches.add(cleanName);

        try {
          const log = await this.git.log({ maxCount: 1, [branchName]: null });
          if (log.latest) {
            const commitCount = await this.git.raw(['rev-list', '--count', branchName]);
            branches.push({
              name: cleanName,
              commits: parseInt(commitCount.trim()),
              lastCommit: new Date(log.latest.date)
            });
          }
        } catch {
          // 跳过无法访问的分支
        }
      }

      return branches;
    } catch {
      return [];
    }
  }

  async parseCommits(limit: number = 1000, branch?: string): Promise<GitCommit[]> {
    const logOptions: any = {
      maxCount: limit,
      '--numstat': null,
      '--pretty': 'format:%H|%an|%ae|%ai|%s'
    };

    if (branch) {
      logOptions[branch] = null;
    }

    const log: LogResult = await this.git.log(logOptions);

    const commits: GitCommit[] = [];

    for (const commit of log.all) {
      let diffSummary;

      try {
        // 尝试获取 diff，对于第一个提交使用特殊处理
        diffSummary = await this.git.diffSummary([`${commit.hash}^`, commit.hash]);
      } catch {
        // 如果是第一个提交（root commit），使用空树对比
        try {
          diffSummary = await this.git.diffSummary(['4b825dc642cb6eb9a060e54bf8d69288fbee4904', commit.hash]);
        } catch {
          // 如果还是失败，使用默认值
          diffSummary = {
            files: [],
            insertions: 0,
            deletions: 0,
            changed: 0
          };
        }
      }

      commits.push({
        hash: commit.hash,
        author: commit.author_name || 'Unknown',
        email: commit.author_email || '',
        date: new Date(commit.date),
        message: commit.message,
        files: diffSummary.files.map(f => f.file),
        insertions: diffSummary.insertions,
        deletions: diffSummary.deletions,
        branch: branch
      });
    }

    return commits;
  }

  async getBranchName(): Promise<string> {
    const branch = await this.git.branch();
    return branch.current;
  }

  async getRemoteUrl(): Promise<string | null> {
    try {
      const remotes = await this.git.getRemotes(true);
      return remotes[0]?.refs?.fetch || null;
    } catch {
      return null;
    }
  }
}
