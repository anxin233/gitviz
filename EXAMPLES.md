# GitViz Examples

This directory contains example outputs and use cases for GitViz.

## Example Commands

### Basic Usage
```bash
# Analyze current repository
gitviz analyze

# Output: gitviz-report.html
```

### Custom Output
```bash
# Specify custom output file
gitviz analyze --output my-project-analysis.html

# Analyze with limited commits
gitviz analyze --limit 500 --output quick-analysis.html
```

### Multiple Projects
```bash
# Compare different projects
gitviz analyze --path ~/projects/frontend --output frontend-viz.html
gitviz analyze --path ~/projects/backend --output backend-viz.html
gitviz analyze --path ~/projects/mobile --output mobile-viz.html
```

## Sample Output

When you run GitViz, you'll get:

### Console Output
```
✔ Visualization generated successfully!

📊 Repository Statistics:
  Total Commits: 1,247
  Contributors: 12
  Files Changed: 342
  Date Range: 1/15/2024 - 2/28/2026

📁 Output: /path/to/gitviz-report.html

Open the file in your browser to view the interactive visualization.
```

### HTML Report Features

The generated HTML file includes:

1. **Header Section**
   - Repository name
   - Summary statistics cards
   - Gradient design

2. **Commit Timeline**
   - Bar chart showing daily commit activity
   - Hover to see insertions/deletions
   - Smooth animations

3. **Top Contributors**
   - Ranked by commit count
   - Shows total lines changed
   - Interactive tooltips

4. **File Heatmap**
   - Color-coded by change frequency
   - Top 50 most changed files
   - Easy identification of hotspots

## Use Case Examples

### 1. Project Health Check
```bash
gitviz analyze --path ~/my-project
# Review the timeline to see if development is active
# Check contributor distribution
```

### 2. Onboarding New Team Members
```bash
gitviz analyze --output team-onboarding.html
# Share the HTML file with new developers
# Helps them understand project history and key contributors
```

### 3. Identifying Technical Debt
```bash
gitviz analyze --limit 2000
# Look at the file heatmap
# Files with high change frequency may need refactoring
```

### 4. Sprint/Release Analysis
```bash
# Analyze specific time periods by limiting commits
gitviz analyze --limit 100 --output last-sprint.html
```

## Tips

- **Large Repositories**: Use `--limit` to speed up analysis
- **Sharing**: HTML files are self-contained and can be shared via email or cloud storage
- **Documentation**: Embed screenshots in your README or wiki
- **Regular Monitoring**: Run weekly to track project trends

## Sample Repositories to Try

Try GitViz on popular open-source projects:

```bash
# Clone and analyze
git clone https://github.com/facebook/react.git
cd react
gitviz analyze --limit 1000 --output react-analysis.html

git clone https://github.com/microsoft/vscode.git
cd vscode
gitviz analyze --limit 1000 --output vscode-analysis.html
```

## Interpreting Results

### Timeline Patterns
- **Steady activity**: Healthy, consistent development
- **Spikes**: Major releases or sprints
- **Gaps**: Holidays, planning phases, or inactive periods

### Contributor Distribution
- **Balanced**: Good team collaboration
- **Concentrated**: May indicate knowledge silos
- **Many small contributors**: Active open-source community

### File Heatmap
- **Hot files**: Core functionality or frequently buggy areas
- **Cold files**: Stable code or rarely used features
- **Patterns**: Can reveal architectural issues
