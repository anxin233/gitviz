# Contributing to GitViz

Thank you for your interest in contributing to GitViz! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/gitviz.git`
3. Install dependencies: `bun install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## 💻 Development Setup

### Prerequisites
- Bun 1.0 or higher
- Git
- Node.js 18+ (for compatibility testing)

### Running Locally
```bash
# Run the CLI in development mode
bun run dev analyze --path /path/to/test/repo

# Type checking
bun run type-check

# Build
bun run build
```

## 📝 Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## 🧪 Testing

Before submitting a PR:
1. Test your changes with multiple repositories
2. Ensure type checking passes: `bun run type-check`
3. Test the built version: `bun run build && node dist/cli.js analyze`

## 📋 Pull Request Process

1. Update README.md if you're adding new features
2. Update CHANGELOG.md with your changes
3. Ensure your code follows the existing style
4. Write clear commit messages
5. Reference any related issues in your PR description

## 🐛 Bug Reports

When filing a bug report, please include:
- GitViz version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Error messages or screenshots

## 💡 Feature Requests

We love new ideas! When suggesting a feature:
- Explain the use case
- Describe the expected behavior
- Consider implementation complexity
- Check if it aligns with project goals

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## 🎯 Areas for Contribution

- **Visualizations**: New chart types or improvements
- **Performance**: Optimization for large repositories
- **Documentation**: Tutorials, examples, translations
- **Testing**: Test coverage and edge cases
- **Features**: See the roadmap in README.md

## 📞 Questions?

Feel free to open a discussion or reach out to maintainers.

Thank you for contributing! 🎉
