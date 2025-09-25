export function runHelp() {
	process.stdout.write(
		'Usage: prompt-kit <command>\n\nCommands:\n  init   Initialize\n  help   Show this help message\n',
	);
	process.exit(0);
}
