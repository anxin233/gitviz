export interface GitCommit {
  hash: string;
  author: string;
  email: string;
  date: Date;
  message: string;
  files: string[];
  insertions: number;
  deletions: number;
}

export interface ContributorStats {
  name: string;
  email: string;
  commits: number;
  insertions: number;
  deletions: number;
  firstCommit: Date;
  lastCommit: Date;
}

export interface FileChange {
  path: string;
  changes: number;
  lastModified: Date;
  contributors: Set<string>;
}

export interface RepositoryAnalysis {
  commits: GitCommit[];
  contributors: Map<string, ContributorStats>;
  files: Map<string, FileChange>;
  totalCommits: number;
  totalContributors: number;
  dateRange: {
    start: Date;
    end: Date;
  };
}

export interface VisualizationData {
  timeline: TimelineData[];
  contributors: ContributorData[];
  heatmap: HeatmapData[];
}

export interface TimelineData {
  date: string;
  commits: number;
  insertions: number;
  deletions: number;
}

export interface ContributorData {
  name: string;
  commits: number;
  lines: number;
}

export interface HeatmapData {
  file: string;
  changes: number;
  heat: number;
}
