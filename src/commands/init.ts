export function runInit(args?: string[]) {
	let ai: string | undefined;
	if (args) {
		for (let i = 0; i < args.length; i++) {
			if (args[i] === '--ai' && args[i + 1]) {
				ai = args[i + 1].toLowerCase();
				break;
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

	process.stdout.write('Initialized\n');
	process.exit(0);
}
