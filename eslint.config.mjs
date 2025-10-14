import { includeIgnoreFile } from '@eslint/compat';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const gitignorePath = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	'.gitignore',
);

const prettierIntegration = {
	plugins: { prettier: prettierPlugin?.default ?? prettierPlugin },
	rules: { 'prettier/prettier': 'error' },
};

export default [
	includeIgnoreFile(gitignorePath),
	prettierIntegration,
	prettier,
];
