const ascii = `
 ____                        _     _ _ _ _   _ _   _ _   _
|  _ _ __ ___  _ __   ___| |__ (_) | | |_(_) |_(_) |_(_) ___
| |_) | '__/ _ | '_ / __| '_ | | | | __| | __| | __| |/ _
|  __/| | | (_) | | | | (__| | | | | | | |_| | |_| | |_| |  __/
|_|   |_|  ___/|_| |_|___|_| |_|_|_|_|__|_|__|_|__|_|___|
`;
console.log(ascii);

if (process.argv[2] === 'init') {
	process.stdout.write('Initialized\n');
	process.exit(0);
}
if (process.argv[2] === 'help') {
	process.stdout.write(
		'Usage: prompt-kit <command>\n\nCommands:\n  init   Initialize\n  help   Show this help message\n',
	);
	process.exit(0);
}
process.stderr.write('Unknown command\n');
process.exit(1);
