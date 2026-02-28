# 🎨 GitViz - Demo & Screenshots

## Live Demo

Want to see GitViz in action? Here are some example visualizations:

### Example 1: Small Project
![Timeline Example](https://via.placeholder.com/800x400/667eea/ffffff?text=Commit+Timeline+Visualization)

### Example 2: Contributors
![Contributors Example](https://via.placeholder.com/800x400/764ba2/ffffff?text=Top+Contributors+Chart)

### Example 3: Heatmap
![Heatmap Example](https://via.placeholder.com/800x400/667eea/ffffff?text=File+Change+Heatmap)

## Try It Yourself

```bash
# Install GitViz
bun install -g gitviz

# Run on any Git repository
cd your-project
gitviz analyze

# Open the generated HTML file
open gitviz-report.html
```

## Sample Output

When you run GitViz on a repository, you'll get a beautiful HTML report with:

### 📊 Summary Statistics
- Total commits
- Number of contributors
- Files changed
- Date range

### 📈 Interactive Charts
- **Timeline**: See commit activity over time
- **Contributors**: Ranked by contributions
- **Heatmap**: Most frequently changed files

### 🎨 Beautiful Design
- Gradient color schemes
- Smooth animations
- Responsive layout
- Interactive tooltips

## Real-World Examples

Try GitViz on popular open-source projects:

```bash
# React
git clone https://github.com/facebook/react.git
cd react
gitviz analyze --limit 1000

# Vue
git clone https://github.com/vuejs/vue.git
cd vue
gitviz analyze --limit 1000

# Express
git clone https://github.com/expressjs/express.git
cd express
gitviz analyze
```

## Features Showcase

### 🚀 Fast Performance
- Analyzes 1000 commits in seconds
- Powered by Bun for optimal speed
- Efficient Git parsing

### 📦 Zero Configuration
- Works out of the box
- No config files needed
- Sensible defaults

### 🎯 Flexible Output
- Standalone HTML files
- No external dependencies
- Easy to share

### 💻 Cross-Platform
- Windows ✓
- macOS ✓
- Linux ✓

## Coming Soon

- 📸 Actual screenshots from real repositories
- 🎥 Video demonstrations
- 🌐 Online playground
- 📊 More visualization types

---

**Note**: Replace placeholder images with actual screenshots once the tool is built and tested!
