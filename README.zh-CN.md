# 🎨 GitViz

> 将你的 Git 历史转换为令人惊艳的可视化故事

[English](README.md) | 简体中文

[![npm version](https://img.shields.io/npm/v/@anxin233/gitviz.svg)](https://www.npmjs.com/package/@anxin233/gitviz)
[![npm downloads](https://img.shields.io/npm/dm/@anxin233/gitviz.svg)](https://www.npmjs.com/package/@anxin233/gitviz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![GitHub stars](https://img.shields.io/github/stars/anxin233/gitviz?style=social)](https://github.com/anxin233/gitviz)
[![GitHub issues](https://img.shields.io/github/issues/anxin233/gitviz)](https://github.com/anxin233/gitviz/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

GitViz 是一个强大的命令行工具，可以分析你的 Git 仓库并生成精美的交互式可视化图表。一目了然地理解项目历史、贡献者模式和代码演化过程。

![演示](https://via.placeholder.com/800x400/667eea/ffffff?text=GitViz+Demo+Coming+Soon)

[📖 快速开始](QUICKSTART.md) • [🎨 演示](DEMO.md) • [📚 示例](EXAMPLES.md) • [🤝 贡献指南](CONTRIBUTING.md)

## ✨ 特性

- 📊 **交互式时间线** - 可视化提交活动随时间的变化
- 👥 **贡献者分析** - 查看谁在贡献以及贡献了多少
- 🔥 **文件热力图** - 识别代码库中的热点区域
- 🚀 **极速性能** - 基于 Bun 实现最佳性能
- 📦 **零配置** - 开箱即用，适用于任何 Git 仓库
- 🎨 **精美输出** - 导出为独立的 HTML 文件
- 💻 **跨平台** - 支持 macOS、Linux 和 Windows

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install -g @anxin233/gitviz

# 使用 Bun（推荐）
bun install -g @anxin233/gitviz

# 使用 yarn
yarn global add @anxin233/gitviz
```

### 使用方法

```bash
# 分析当前仓库
gitviz analyze

# 分析指定仓库
gitviz analyze --path /path/to/repo

# 自定义输出
gitviz analyze --output my-report.html --limit 500

# 快速分析
gitviz quick
```

## 📊 你将获得什么

GitViz 会生成一份全面的 HTML 报告，包含：

### 1. 提交时间线
查看项目随时间的活动模式。识别繁忙期、平静期和开发趋势。

### 2. 顶级贡献者
了解谁在推动项目前进。查看提交次数和贡献的代码行数。

### 3. 文件变更热力图
发现哪些文件变更最频繁。非常适合识别技术债务和重构机会。

## 🎯 使用场景

- **项目健康检查** - 快速评估仓库活跃度
- **团队分析** - 理解贡献模式
- **文档编写** - 为 README 添加可视化洞察
- **代码审查** - 识别频繁变更的文件
- **新人入职** - 帮助新团队成员理解项目历史

## 🛠️ 命令行选项

```
gitviz analyze [选项]

选项:
  -p, --path <path>      Git 仓库路径（默认: "."）
  -o, --output <file>    输出 HTML 文件（默认: "gitviz-report.html"）
  -l, --limit <number>   限制分析的提交数量（默认: "1000"）
  -h, --help            显示帮助信息
```

## 📖 示例

### 基础分析
```bash
gitviz analyze
```

### 分析大型仓库
```bash
gitviz analyze --limit 5000 --output full-history.html
```

### 分析多个项目
```bash
gitviz analyze --path ~/projects/app1 --output app1-viz.html
gitviz analyze --path ~/projects/app2 --output app2-viz.html
```

## 🏗️ 工作原理

1. **解析** - GitViz 使用 `simple-git` 读取 Git 历史
2. **分析** - 处理提交、贡献者和文件变更
3. **可视化** - 生成交互式 D3.js 图表
4. **导出** - 创建可分享的独立 HTML 文件

## 🤝 贡献

欢迎贡献！你可以这样帮助我们：

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交你的更改（`git commit -m '添加某个很棒的特性'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 开启一个 Pull Request

## 📝 开发

```bash
# 克隆仓库
git clone https://github.com/anxin233/gitviz.git
cd gitviz

# 安装依赖
bun install

# 开发模式运行
bun run dev analyze

# 构建
bun run build

# 类型检查
bun run type-check
```

## 🐛 已知问题

- 超大型仓库（>10k 提交）可能需要几秒钟处理
- 二进制文件会被包含在变更统计中

## 🗺️ 路线图

- [ ] 添加更多可视化类型（网络图、代码频率）
- [ ] 支持多分支对比
- [ ] 导出为 PDF 和 PNG 格式
- [ ] 实时模式监控活跃仓库
- [ ] 集成 GitHub/GitLab API
- [ ] 自定义主题和配色方案
- [ ] 插件系统支持自定义分析器

## 📄 许可证

MIT © 2026 GitViz 贡献者

## 🌟 支持我们

如果你觉得 GitViz 有用，请考虑：
- ⭐ 给仓库点个星
- 🐦 在社交媒体上分享
- 🐛 报告 bug
- 💡 提出新功能建议

## 📬 联系方式

- Issues: [GitHub Issues](https://github.com/anxin233/gitviz/issues)
- Discussions: [GitHub Discussions](https://github.com/anxin233/gitviz/discussions)

---

用 ❤️ 由开发者为开发者打造
