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
  format: 'cjs',
  outfile: join(rootDir, 'dist', 'cli.cjs'),
  external: [
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
  // 读取生成的文件
  const outputPath = join(rootDir, 'dist', 'cli.cjs');
  let content = readFileSync(outputPath, 'utf-8');

  // 检查是否已有 shebang，如果没有才添加
  if (!content.startsWith('#!/usr/bin/env node')) {
    content = '#!/usr/bin/env node\n' + content;
    writeFileSync(outputPath, content, 'utf-8');
  }

  console.log('✅ Build successful!');
  console.log('📁 Output: dist/cli.cjs');
}).catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
