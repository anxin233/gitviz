# Changelog

All notable changes to GitViz will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-28

### Added
- Initial release of GitViz
- Interactive commit timeline visualization
- Top contributors analysis with commit and line counts
- File change heatmap showing most frequently modified files
- CLI with `analyze` and `quick` commands
- HTML export functionality with embedded D3.js visualizations
- Support for custom output paths and commit limits
- Beautiful gradient UI with responsive design
- Hover tooltips for detailed information
- Repository statistics summary
- Cross-platform support (Windows, macOS, Linux)

### Features
- Fast Git history parsing using simple-git
- Intelligent data aggregation and analysis
- Standalone HTML reports (no external dependencies)
- Configurable commit limits for large repositories
- Automatic repository detection
- Color-coded visualizations with smooth transitions

### Technical
- Built with TypeScript for type safety
- Powered by Bun for optimal performance
- Uses D3.js v7 for data visualization
- Modular architecture for easy extension
- Clean separation of concerns (parser, analyzer, visualizer)

## [Unreleased]

### Planned
- Branch comparison feature
- Network graph visualization
- Export to PDF and PNG formats
- Custom theme support
- GitHub/GitLab API integration
- Real-time repository monitoring
- Plugin system for custom analyzers
- Multi-language support
- Performance optimizations for very large repositories
