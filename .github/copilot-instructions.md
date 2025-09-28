### Quick context

This repository is a minimal oclif-based CLI named `prompt-kit`. It is TypeScript-first, compiled to `dist/`, and exposes the CLI binary via `bin/run.js`. Commands live under `src/commands/*` and tests under `test/**` using `@oclif/test` + `mocha` + `chai`.

### Big picture (what to know fast)

- Entry points: `src/index.ts` re-exports `run` from `@oclif/core`. The published binary is `bin/run.js` (development helper: `bin/dev.js`).
- Commands: each command is a default export class extending `Command` in `src/commands/<topic>/<name>.ts` (examples: `src/commands/hello/index.ts`, `src/commands/hello/world.ts`).
- Build pipeline: `npm run build` -> `shx rm -rf dist && tsc -b`. Compiled code lives in `dist/` and `oclif` reads commands from `dist/commands` (see `package.json:oclif.commands`).

### Developer workflows & concrete commands

- Install dev deps: `npm install`
- Build: `npm run build` (produces `dist/`)
- Run locally as published CLI: `node ./bin/run.js <command>` or after `npm link` use `prompt-kit <command>`
- Dev mode (runs TS directly): `node ./bin/dev.js <command>` (uses `ts-node/esm` loader)
- Test: `npm test` (runs Mocha on `test/**/*.test.ts`). Lint runs automatically after tests via `posttest`.

### Conventions & patterns to follow

- Command shape: class extends `Command`, static `args`, `flags`, `description`, `examples`, and an async `run()` that calls `this.parse(MyCmd)` and `this.log(...)`. Follow the hello command patterns when adding commands.
- Files->distribution mapping: edit `src/` TypeScript files; CI/pack will run `tsc -b` into `dist/`. Don't edit files in `dist/` directly.
- Tests: use `runCommand('...')` from `@oclif/test` and assert against `stdout`. See `test/commands/hello/*.test.ts` for examples.

### Integration points & external deps

- Main framework: `@oclif/core`, plus `@oclif/plugin-help` and `@oclif/plugin-plugins`. Prefer using oclif helpers for parsing, flags, and help text.
- Publishing and manifest: packaging uses `oclif manifest` and `oclif readme` in `prepack`/`version` scripts. Be careful modifying package.json fields referenced by oclif.

### Common change patterns

- Adding a command: create `src/commands/<topic>/<name>.ts` with default export class. Add tests in `test/commands/<topic>/<name>.test.ts` using `runCommand`.
- Adding flags/args: use `Flags` and `Args` from `@oclif/core` to match existing usage.
- Changing build/test scripts: update `package.json` scripts and ensure `npm run build` still produces `dist/` that mirrors `src/` layout.

### Files to inspect when debugging

- `package.json` (scripts, oclif config)
- `bin/run.js` and `bin/dev.js` (how CLI is executed in prod vs dev)
- `src/commands/**` (command implementations)
- `test/**` (how commands are exercised in CI)

If anything here is missing or you want more detail (CI, publishing flow, or contributor conventions), say which area and I will expand this file.
