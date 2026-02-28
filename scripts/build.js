import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// 创建 dist 目录
mkdirSync(join(rootDir, 'dist'), { recursive: true });

// 读取编译后的文件
const cliPath = join(rootDir, 'dist', 'cli', 'index.js');
const outputPath = join(rootDir, 'dist', 'cli.js');

try {
  const content = readFileSync(cliPath, 'utf-8');

  // 添加 shebang
  const finalContent = '#!/usr/bin/env node\n' + content;

  // 写入最终文件
  writeFileSync(outputPath, finalContent, 'utf-8');

  console.log('✅ Build successful: dist/cli.js');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
