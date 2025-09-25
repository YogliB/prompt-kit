import { describe, it, expect } from 'vitest';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

describe('cli', () => {
	it('prints Initialized for init', () => {
		const result = spawnSync('node', [join(__dirname, 'index.ts'), 'init']);
		expect(result.stdout.toString()).toBe('Initialized\n');
		expect(result.status).toBe(0);
	});

	it('prints error for unknown command', () => {
		const result = spawnSync('node', [join(__dirname, 'index.ts'), 'foo']);
		expect(result.stderr.toString()).toBe('Unknown command\n');
		expect(result.status).toBe(1);
	});

	it('prints help for help', () => {
		const result = spawnSync('node', [join(__dirname, 'index.ts'), 'help']);
		expect(result.stdout.toString()).toContain(
			'Usage: prompt-kit <command>',
		);
		expect(result.stdout.toString()).toContain('Commands:');
		expect(result.status).toBe(0);
	});
});
