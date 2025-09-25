import { describe, it, expect } from 'vitest';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

describe('help command', () => {
	it('prints usage info and exits 0', () => {
		const result = spawnSync('node', [join(__dirname, 'help.ts')]);
		expect(result.stdout.toString()).toContain(
			'Usage: prompt-kit <command>',
		);
		expect(result.stdout.toString()).toContain('Commands:');
		expect(result.status).toBe(0);
	});
});
