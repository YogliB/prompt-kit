if (process.argv[2] === 'init') {
	process.stdout.write('Initialized\n');
	process.exit(0);
}
process.stderr.write('Unknown command\n');
process.exit(1);
