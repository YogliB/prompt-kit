import { describe, it, expect } from 'vitest';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

describe('init command', () => {
	it('prints Initialized and exits 0', () => {
		const result = spawnSync('node', [join(__dirname, 'init.ts')]);
		expect(result.stdout.toString()).toBe('Initialized\n');
		expect(result.status).toBe(0);
	});
});
