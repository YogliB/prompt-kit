import { runInit } from './commands/init.js';
import { runHelp } from './commands/help.js';

const ascii = `
 ____                        _     _ _ _ _   _ _   _ _   _
|  _ _ __ ___  _ __   ___| |__ (_) | | |_(_) |_(_) |_(_) ___
| |_) | '__/ _ | '_ / __| '_ | | | | __| | __| | __| |/ _
|  __/| | | (_) | | | | (__| | | | | | | |_| | |_| | |_| |  __/
|_|   |_|  ___/|_| |_|___|_| |_|_|_|__|_|__|_|__|_|___|
`;
console.log(ascii);

if (process.argv[2] === 'init') {
	runInit();
}
if (process.argv[2] === 'help') {
	runHelp();
}
process.stderr.write('Unknown command. Run `prompt-kit help` for usage.\n');
process.exit(1);
