import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

console.log('📦 Building with esbuild...');

build({
  entryPoints: [join(rootDir, 'src', 'cli', 'index.ts')],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'cjs', // 改为 CommonJS 格式
  outfile: join(rootDir, 'dist', 'cli.js'),
  external: [
    // 不打包这些 node 内置模块
    'fs',
    'path',
    'url',
    'util',
    'events',
    'stream',
    'child_process',
    'os',
    'crypto'
  ],
  minify: false,
  sourcemap: false,
  logLevel: 'info'
}).then(() => {
  // 读取生成的文件并添加 shebang
  const outputPath = join(rootDir, 'dist', 'cli.js');
  let content = readFileSync(outputPath, 'utf-8');

  // 添加 shebang 到文件开头
  content = '#!/usr/bin/env node\n' + content;

  writeFileSync(outputPath, content, 'utf-8');

  console.log('✅ Build successful!');
  console.log('📁 Output: dist/cli.js');
}).catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
