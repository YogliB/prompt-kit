import { build } from 'esbuild';
import { chmodSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outfile = resolve(__dirname, '../dist/index.js');

await build({
	entryPoints: ['src/index.ts'],
	outfile,
	bundle: true,
	platform: 'node',
	format: 'esm',
	target: 'node18',
	minify: true,
	sourcemap: true,
	banner: { js: '#!/usr/bin/env node' },
});

chmodSync(outfile, 0o755); // make it executable on POSIX
// eslint-disable-next-line no-undef
console.log('Built', outfile);
