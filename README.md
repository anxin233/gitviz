# 🎨 GitViz

> Transform your Git history into stunning visual stories

English | [简体中文](README.zh-CN.md)

[![npm version](https://img.shields.io/npm/v/@anxin233/gitviz.svg)](https://www.npmjs.com/package/@anxin233/gitviz)
[![npm downloads](https://img.shields.io/npm/dm/@anxin233/gitviz.svg)](https://www.npmjs.com/package/@anxin233/gitviz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![GitHub stars](https://img.shields.io/github/stars/anxin233/gitviz?style=social)](https://github.com/anxin233/gitviz)
[![GitHub issues](https://img.shields.io/github/issues/anxin233/gitviz)](https://github.com/anxin233/gitviz/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

GitViz is a powerful CLI tool that analyzes your Git repositories and generates beautiful, interactive visualizations. Understand your project's history, contributor patterns, and code evolution at a glance.

![Demo](https://via.placeholder.com/800x400/667eea/ffffff?text=GitViz+Demo+Coming+Soon)

[📖 Quick Start](QUICKSTART.md) • [🎨 Demo](DEMO.md) • [📚 Examples](EXAMPLES.md) • [🤝 Contributing](CONTRIBUTING.md)

## ✨ Features

- 📊 **Interactive Timeline** - Visualize commit activity over time
- 👥 **Contributor Analytics** - See who's contributing and how much
- 🔥 **File Heatmap** - Identify hotspots in your codebase
- 🚀 **Lightning Fast** - Powered by Bun for maximum performance
- 📦 **Zero Config** - Works out of the box with any Git repository
- 🎨 **Beautiful Output** - Export as standalone HTML files
- 💻 **Cross-Platform** - Works on macOS, Linux, and Windows

## 🚀 Quick Start

### Installation

```bash
# Using npm
npm install -g @anxin233/gitviz

# Using Bun (recommended)
bun install -g @anxin233/gitviz

# Using yarn
yarn global add @anxin233/gitviz
```

### Usage

```bash
# Analyze current repository
gitviz analyze

# Analyze specific repository
gitviz analyze --path /path/to/repo

# Customize output
gitviz analyze --output my-report.html --limit 500

# Quick analysis
gitviz quick
```

## 📊 What You Get

GitViz generates a comprehensive HTML report with:

### 1. Commit Timeline
See your project's activity patterns over time. Identify busy periods, quiet phases, and development trends.

### 2. Top Contributors
Understand who's driving your project forward. See commit counts and lines of code contributed.

### 3. File Change Heatmap
Discover which files change most frequently. Perfect for identifying technical debt and refactoring opportunities.

## 🎯 Use Cases

- **Project Health Checks** - Quickly assess repository activity
- **Team Analytics** - Understand contribution patterns
- **Documentation** - Add visual insights to your README
- **Code Reviews** - Identify frequently changed files
- **Onboarding** - Help new team members understand project history

## 🛠️ CLI Options

```
gitviz analyze [options]

Options:
  -p, --path <path>      Path to Git repository (default: ".")
  -o, --output <file>    Output HTML file (default: "gitviz-report.html")
  -l, --limit <number>   Limit number of commits (default: "1000")
  -h, --help            Display help information
```

## 📖 Examples

### Basic Analysis
```bash
gitviz analyze
```

### Analyze Large Repository
```bash
gitviz analyze --limit 5000 --output full-history.html
```

### Analyze Multiple Projects
```bash
gitviz analyze --path ~/projects/app1 --output app1-viz.html
gitviz analyze --path ~/projects/app2 --output app2-viz.html
```

## 🏗️ How It Works

1. **Parse** - GitViz reads your Git history using `simple-git`
2. **Analyze** - Processes commits, contributors, and file changes
3. **Visualize** - Generates interactive D3.js charts
4. **Export** - Creates a standalone HTML file you can share

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development

```bash
# Clone the repository
git clone https://github.com/anxin233/gitviz.git
cd gitviz

# Install dependencies
bun install

# Run in development mode
bun run dev analyze

# Build
bun run build

# Type check
bun run type-check
```

## 🐛 Known Issues

- Very large repositories (>10k commits) may take a few seconds to process
- Binary files are included in change statistics

## 🗺️ Roadmap

- [ ] Add more visualization types (network graphs, code frequency)
- [ ] Support for multiple branches comparison
- [ ] Export to PDF and PNG
- [ ] Real-time mode for live repositories
- [ ] Integration with GitHub/GitLab APIs
- [ ] Custom themes and color schemes
- [ ] Plugin system for custom analyzers

## 📄 License

MIT © 2026 GitViz Contributors

## 🌟 Show Your Support

If you find GitViz useful, please consider:
- ⭐ Starring the repository
- 🐦 Sharing on social media
- 🐛 Reporting bugs
- 💡 Suggesting new features

## 📬 Contact

- Issues: [GitHub Issues](https://github.com/anxin233/gitviz/issues)
- Discussions: [GitHub Discussions](https://github.com/anxin233/gitviz/discussions)

---

Made with ❤️ by developers, for developers
