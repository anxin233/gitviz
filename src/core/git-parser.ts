import simpleGit, { SimpleGit, LogResult } from 'simple-git';
import type { GitCommit } from './types.js';

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

  async parseCommits(limit: number = 1000): Promise<GitCommit[]> {
    const log: LogResult = await this.git.log({
      maxCount: limit,
      '--numstat': null,
      '--pretty': 'format:%H|%an|%ae|%ai|%s'
    });

    const commits: GitCommit[] = [];

    for (const commit of log.all) {
      const diffSummary = await this.git.diffSummary([`${commit.hash}^`, commit.hash]);

      commits.push({
        hash: commit.hash,
        author: commit.author_name || 'Unknown',
        email: commit.author_email || '',
        date: new Date(commit.date),
        message: commit.message,
        files: diffSummary.files.map(f => f.file),
        insertions: diffSummary.insertions,
        deletions: diffSummary.deletions
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
