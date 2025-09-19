// CLI ראשי
const program = new Command();
program
	.name('specify')
	.description('Setup tool for Specify spec-driven development projects')
	.version('1.0.0');

program
	.command('init')
	.description('Initialize a new Specify project')
	.option('--ai <ai>', 'AI assistant to use')
	.option('--script <type>', 'Script type to use')
	.action(async (opts) => {
		console.log(chalk.cyan.bold('Specify Project Setup'));
		// בחירת AI
		let selectedAI = opts.ai;
		if (!selectedAI || !(selectedAI in AI_CHOICES)) {
			selectedAI = await selectWithPrompt(AI_CHOICES, 'בחר AI:', 'copilot');
		}
		// בחירת סוג סקריפט
		let selectedScript = opts.script;
		if (!selectedScript || !(selectedScript in SCRIPT_TYPE_CHOICES)) {
			selectedScript = await selectWithPrompt(SCRIPT_TYPE_CHOICES, 'בחר סוג סקריפט:', 'sh');
		}
		console.log(chalk.green(`נבחר AI: ${selectedAI}`));
		console.log(chalk.green(`נבחר סוג סקריפט: ${selectedScript}`));
		// כאן תתווסף לוגיקת יצירת פרויקט מלאה
	});

program.parseAsync(process.argv);
// פונקציה לבחירה אינטראקטיבית
export async function selectWithPrompt(options: Record<string, string>, promptText = 'בחר אפשרות', defaultKey?: string): Promise<string> {
	const choices = Object.entries(options).map(([key, desc]) => ({
		name: `${key}: ${desc}`,
		value: key,
		short: key,
	}));
	const { selected } = await inquirer.prompt([
		{
			type: 'list',
			name: 'selected',
			message: promptText,
			choices,
			default: defaultKey,
		},
	]);
	return selected;
}

// פונקציה להרצת פקודות shell
import { exec } from 'child_process';
export function runCommand(cmd: string, capture = false): Promise<string | void> {
	return new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				reject(stderr || error.message);
			} else {
				resolve(capture ? stdout.trim() : undefined);
			}
		});
	});
}
// Entry point for Specify CLI (TypeScript version)
// To be ממומש: CLI logic, interactive selection, file operations, shell commands

import chalk from 'chalk';
import inquirer from 'inquirer';
import axios from 'axios';
import { Command } from 'commander';

// קבועים מרכזיים
export const AI_CHOICES: Record<string, string> = {
	copilot: 'GitHub Copilot',
	claude: 'Claude Code',
	gemini: 'Gemini CLI',
	cursor: 'Cursor',
	qwen: 'Qwen Code',
	opencode: 'opencode',
};

export const SCRIPT_TYPE_CHOICES: Record<string, string> = {
	sh: 'POSIX Shell (bash/zsh)',
	ps: 'PowerShell',
};

export const TAGLINE = 'GitHub Spec Kit - Spec-Driven Development Toolkit';

// מחלקת StepTracker
export class StepTracker {
	title: string;
	steps: Array<{ key: string; label: string; status: string; detail: string }> = [];
	statusOrder: Record<string, number> = { pending: 0, running: 1, done: 2, error: 3, skipped: 4 };
	private refreshCb?: () => void;

	constructor(title: string) {
		this.title = title;
	}

	attachRefresh(cb: () => void) {
		this.refreshCb = cb;
	}

	add(key: string, label: string) {
		if (!this.steps.some(s => s.key === key)) {
			this.steps.push({ key, label, status: 'pending', detail: '' });
			this.maybeRefresh();
		}
	}

	start(key: string, detail = '') {
		this.update(key, 'running', detail);
	}

	complete(key: string, detail = '') {
		this.update(key, 'done', detail);
	}

	error(key: string, detail = '') {
		this.update(key, 'error', detail);
	}

	skip(key: string, detail = '') {
		this.update(key, 'skipped', detail);
	}

	private update(key: string, status: string, detail: string) {
		const step = this.steps.find(s => s.key === key);
		if (step) {
			step.status = status;
			if (detail) step.detail = detail;
			this.maybeRefresh();
		} else {
			this.steps.push({ key, label: key, status, detail });
			this.maybeRefresh();
		}
	}

	private maybeRefresh() {
		if (this.refreshCb) {
			try {
				this.refreshCb();
			} catch {}
		}
	}

	render(): string {
		// הצגה טקסטואלית פשוטה (ניתן לשדרג בהמשך)
		let output = chalk.cyan.bold(this.title) + '\n';
		for (const step of this.steps) {
			let symbol = ' ';
			switch (step.status) {
				case 'done': symbol = chalk.green('●'); break;
				case 'pending': symbol = chalk.gray('○'); break;
				case 'running': symbol = chalk.cyan('○'); break;
				case 'error': symbol = chalk.red('●'); break;
				case 'skipped': symbol = chalk.yellow('○'); break;
			}
			output += `${symbol} ${step.label}`;
			if (step.detail) output += chalk.gray(` (${step.detail})`);
			output += '\n';
		}
		return output;
	}
}
