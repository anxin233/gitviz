#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { GitParser } from '../core/git-parser.js';
import { Analyzer } from '../core/analyzer.js';
import { generateHTML } from '../visualizers/html-generator.js';

const program = new Command();

program
  .name('gitviz')
  .description('🎨 Beautiful, interactive Git repository visualizations')
  .version('1.0.0');

program
  .command('analyze')
  .description('Analyze a Git repository and generate visualizations')
  .option('-p, --path <path>', 'Path to Git repository', '.')
  .option('-o, --output <file>', 'Output HTML file', 'gitviz-report.html')
  .option('-l, --limit <number>', 'Limit number of commits to analyze', '1000')
  .action(async (options) => {
    const spinner = ora('Initializing GitViz...').start();

    try {
      const parser = new GitParser(options.path);

      spinner.text = 'Checking if directory is a Git repository...';
      const isRepo = await parser.isGitRepository();

      if (!isRepo) {
        spinner.fail(chalk.red('Error: Not a Git repository'));
        process.exit(1);
      }

      spinner.text = 'Parsing Git commits...';
      const commits = await parser.parseCommits(parseInt(options.limit));

      if (commits.length === 0) {
        spinner.fail(chalk.red('Error: No commits found'));
        process.exit(1);
      }

      spinner.text = `Analyzing ${commits.length} commits...`;
      const analyzer = new Analyzer();
      const analysis = analyzer.analyze(commits);

      spinner.text = 'Generating visualization data...';
      const vizData = analyzer.generateVisualizationData(analysis);

      spinner.text = 'Creating HTML report...';
      const repoName = options.path === '.' ? 'Current Repository' : options.path;
      const html = generateHTML(vizData, repoName);

      const outputPath = join(process.cwd(), options.output);
      writeFileSync(outputPath, html, 'utf-8');

      spinner.succeed(chalk.green('✨ Visualization generated successfully!'));

      console.log('\n' + chalk.bold('📊 Repository Statistics:'));
      console.log(chalk.cyan(`  Total Commits: ${analysis.totalCommits}`));
      console.log(chalk.cyan(`  Contributors: ${analysis.totalContributors}`));
      console.log(chalk.cyan(`  Files Changed: ${analysis.files.size}`));
      console.log(chalk.cyan(`  Date Range: ${analysis.dateRange.start.toLocaleDateString()} - ${analysis.dateRange.end.toLocaleDateString()}`));
      console.log('\n' + chalk.bold(`📁 Output: ${outputPath}`));
      console.log(chalk.gray(`\nOpen the file in your browser to view the interactive visualization.\n`));

    } catch (error) {
      spinner.fail(chalk.red('Error: ' + (error as Error).message));
      process.exit(1);
    }
  });

program
  .command('quick')
  .description('Quick analysis of current directory')
  .action(async () => {
    program.parse(['node', 'gitviz', 'analyze']);
  });

program.parse();
