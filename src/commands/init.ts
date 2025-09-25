import fs from 'fs';
import path from 'path';

export function runInit(args?: string[]) {
	let ai: string | undefined;
	let override = false;
	if (args) {
		for (let i = 0; i < args.length; i++) {
			if (args[i] === '--ai' && args[i + 1]) {
				ai = args[i + 1].toLowerCase();
			}
			if (args[i] === '--override') {
				override = true;
			}
		}
	}

	if (ai) {
		if (ai !== 'copilot' && ai !== 'gemini') {
			process.stderr.write(
				`Error: Unsupported AI '${ai}'. Only 'copilot' and 'gemini' are allowed.\n`,
			);
			process.stderr.write('See: npx prompt-kit help\n');
			process.exit(1);
		}
	}

	if (ai === 'copilot') {
		const srcDir = path.resolve(__dirname, '../../templates/copilot');
		const destDir = path.resolve(process.cwd(), '.github');

		function copyRecursive(src: string, dest: string) {
			if (!fs.existsSync(dest)) {
				fs.mkdirSync(dest, { recursive: true });
			}
			const entries = fs.readdirSync(src, { withFileTypes: true });
			for (const entry of entries) {
				const srcPath = path.join(src, entry.name);
				const destPath = path.join(dest, entry.name);
				if (entry.isDirectory()) {
					copyRecursive(srcPath, destPath);
				} else {
					if (fs.existsSync(destPath)) {
						if (!override) {
							continue;
						}
						fs.copyFileSync(srcPath, destPath);
					} else {
						fs.copyFileSync(srcPath, destPath);
					}
				}
			}
		}

		copyRecursive(srcDir, destDir);
	}

	process.stdout.write('Initialized\n');
	process.exit(0);
}
