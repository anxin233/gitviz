import type {
  GitCommit,
  RepositoryAnalysis,
  ContributorStats,
  FileChange,
  VisualizationData,
  TimelineData,
  ContributorData,
  HeatmapData,
  BranchInfo,
  BranchData
} from './types.js';

export class Analyzer {
  analyze(commits: GitCommit[]): RepositoryAnalysis {
    const contributors = new Map<string, ContributorStats>();
    const files = new Map<string, FileChange>();

    for (const commit of commits) {
      const key = commit.email || commit.author;

      if (!contributors.has(key)) {
        contributors.set(key, {
          name: commit.author,
          email: commit.email,
          commits: 0,
          insertions: 0,
          deletions: 0,
          firstCommit: commit.date,
          lastCommit: commit.date
        });
      }

      const contributor = contributors.get(key)!;
      contributor.commits++;
      contributor.insertions += commit.insertions;
      contributor.deletions += commit.deletions;
      contributor.lastCommit = commit.date;

      for (const file of commit.files) {
        if (!files.has(file)) {
          files.set(file, {
            path: file,
            changes: 0,
            lastModified: commit.date,
            contributors: new Set()
          });
        }

        const fileChange = files.get(file)!;
        fileChange.changes++;
        fileChange.lastModified = commit.date;
        fileChange.contributors.add(commit.author);
      }
    }

    const dates = commits.map(c => c.date);

    return {
      commits,
      contributors,
      files,
      totalCommits: commits.length,
      totalContributors: contributors.size,
      dateRange: {
        start: new Date(Math.min(...dates.map(d => d.getTime()))),
        end: new Date(Math.max(...dates.map(d => d.getTime())))
      }
    };
  }

  generateVisualizationData(analysis: RepositoryAnalysis): VisualizationData {
    return {
      timeline: this.generateTimelineData(analysis.commits),
      contributors: this.generateContributorData(analysis.contributors),
      heatmap: this.generateHeatmapData(analysis.files),
      branches: this.generateBranchData(analysis.branches || [])
    };
  }

  private generateTimelineData(commits: GitCommit[]): TimelineData[] {
    const dailyStats = new Map<string, { commits: number; insertions: number; deletions: number }>();

    for (const commit of commits) {
      const dateKey = commit.date.toISOString().split('T')[0];

      if (!dailyStats.has(dateKey)) {
        dailyStats.set(dateKey, { commits: 0, insertions: 0, deletions: 0 });
      }

      const stats = dailyStats.get(dateKey)!;
      stats.commits++;
      stats.insertions += commit.insertions;
      stats.deletions += commit.deletions;
    }

    return Array.from(dailyStats.entries())
      .map(([date, stats]) => ({
        date,
        ...stats
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  private generateContributorData(contributors: Map<string, ContributorStats>): ContributorData[] {
    return Array.from(contributors.values())
      .map(c => ({
        name: c.name,
        commits: c.commits,
        lines: c.insertions + c.deletions
      }))
      .sort((a, b) => b.commits - a.commits)
      .slice(0, 20);
  }

  private generateHeatmapData(files: Map<string, FileChange>): HeatmapData[] {
    const fileArray = Array.from(files.values());
    const maxChanges = Math.max(...fileArray.map(f => f.changes));

    return fileArray
      .map(f => ({
        file: f.path,
        changes: f.changes,
        heat: f.changes / maxChanges
      }))
      .sort((a, b) => b.changes - a.changes)
      .slice(0, 50);
  }

  private generateBranchData(branches: BranchInfo[]): BranchData[] {
    return branches
      .map(b => ({
        name: b.name,
        commits: b.commits,
        lastCommit: b.lastCommit.toISOString().split('T')[0]
      }))
      .sort((a, b) => b.commits - a.commits);
  }
}
