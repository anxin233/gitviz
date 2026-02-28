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
  format: 'esm',
  outfile: join(rootDir, 'dist', 'cli.js'),
  banner: {
    js: '#!/usr/bin/env node'
  },
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
  minify: false, // 保持可读性，方便调试
  sourcemap: false,
  logLevel: 'info'
}).then(() => {
  console.log('✅ Build successful!');
  console.log('📁 Output: dist/cli.js');
}).catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
