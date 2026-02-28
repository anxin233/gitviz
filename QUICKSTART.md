# 🚀 Quick Start Guide

Get started with GitViz in less than 5 minutes!

## Prerequisites

Before you begin, ensure you have:
- Git installed on your system
- Bun 1.0+ or Node.js 18+ installed
- A Git repository to analyze

## Installation

### Option 1: Using Bun (Recommended)
```bash
bun install -g gitviz
```

### Option 2: Using npm
```bash
npm install -g gitviz
```

### Option 3: Using yarn
```bash
yarn global add gitviz
```

### Option 4: From Source
```bash
git clone https://github.com/anxin233/gitviz.git
cd gitviz
bun install
bun run build
bun link
```

## Your First Visualization

### Step 1: Navigate to a Git Repository
```bash
cd /path/to/your/git/repository
```

### Step 2: Run GitViz
```bash
gitviz analyze
```

### Step 3: View the Results
```bash
# The output file will be created in the current directory
open gitviz-report.html  # macOS
xdg-open gitviz-report.html  # Linux
start gitviz-report.html  # Windows
```

That's it! 🎉

## Common Use Cases

### Analyze a Specific Repository
```bash
gitviz analyze --path ~/projects/my-app
```

### Limit the Number of Commits
```bash
gitviz analyze --limit 500
```

### Custom Output File
```bash
gitviz analyze --output my-analysis.html
```

### Combine Options
```bash
gitviz analyze --path ~/projects/my-app --limit 1000 --output app-viz.html
```

## Understanding the Output

### Timeline Chart
- **X-axis**: Dates
- **Y-axis**: Number of commits
- **Hover**: See insertions and deletions

### Contributors Chart
- **X-axis**: Contributor names
- **Y-axis**: Number of commits
- **Hover**: See total lines changed

### Heatmap
- **Color intensity**: Change frequency
- **Darker red**: More changes
- **Hover**: See exact change count

## Tips for Best Results

1. **Large Repositories**: Use `--limit` to speed up analysis
   ```bash
   gitviz analyze --limit 1000
   ```

2. **Regular Monitoring**: Run weekly to track trends
   ```bash
   gitviz analyze --output weekly-$(date +%Y%m%d).html
   ```

3. **Team Sharing**: HTML files are self-contained
   - Email them
   - Upload to cloud storage
   - Embed in documentation

4. **Multiple Projects**: Batch analyze
   ```bash
   for dir in ~/projects/*; do
     gitviz analyze --path "$dir" --output "$(basename $dir)-viz.html"
   done
   ```

## Troubleshooting

### "Not a Git repository" Error
Make sure you're in a directory with a `.git` folder:
```bash
git status  # Should show repository info
```

### "No commits found" Error
The repository might be empty:
```bash
git log  # Should show commit history
```

### Slow Performance
Try limiting the number of commits:
```bash
gitviz analyze --limit 500
```

### Permission Issues
On Unix systems, you might need to make the binary executable:
```bash
chmod +x $(which gitviz)
```

## Next Steps

- Read the [full documentation](README.md)
- Check out [examples](EXAMPLES.md)
- See [demo visualizations](DEMO.md)
- [Contribute](CONTRIBUTING.md) to the project

## Getting Help

- 📖 [Documentation](README.md)
- 🐛 [Report a bug](https://github.com/anxin233/gitviz/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/anxin233/gitviz/issues/new?template=feature_request.md)
- 💬 [Discussions](https://github.com/anxin233/gitviz/discussions)

---

Happy visualizing! 🎨
