import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, cpSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

console.log('📦 Bundling CLI...');

// 读取所有编译后的文件并合并
function getAllFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  files.forEach(file => {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

try {
  // 简单方案：直接复制 cli/index.js 作为入口
  const cliIndexPath = join(distDir, 'cli', 'index.js');
  const outputPath = join(distDir, 'cli.js');

  if (!statSync(cliIndexPath).isFile()) {
    throw new Error('CLI index.js not found');
  }

  let content = readFileSync(cliIndexPath, 'utf-8');

  // 确保有 shebang
  if (!content.startsWith('#!')) {
    content = '#!/usr/bin/env node\n' + content;
  }

  writeFileSync(outputPath, content, 'utf-8');

  console.log('✅ Bundle created: dist/cli.js');
} catch (error) {
  console.error('❌ Bundle failed:', error.message);
  process.exit(1);
}
