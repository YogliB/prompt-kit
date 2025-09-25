# Copilot Instructions for prompt-kit

## Project Overview

- **prompt-kit** is a TypeScript toolkit for working with AI assistants (Copilot, Claude, Gemini).
- Main features: structured prompt templates, sensible instructions, CLI tools for initialization and help.
- Key directories: `src/` (CLI logic), `templates/` (prompts/instructions), `docs/` (guides/API), `memory/` (alt memory), `tests` co-located with source files.

## Architecture & Patterns

- CLI entry: `src/index.ts` dispatches to `init` and `help` commands.
- Each command is a separate module in `src/commands/` (e.g., `init.ts`, `help.ts`).
- Output is written directly to stdout/stderr; exit codes are used for success/failure.
- Templates for prompts/instructions are organized by assistant and type in `templates/`.
- Tests use [Vitest](https://vitest.dev/) and are located next to their source files.

## Developer Workflows

- **Build:** `npm run build` (TypeScript → `dist/`)
- **Test:** `npm test` (runs Vitest in one-shot mode)
- **Lint:** `npm run lint` (uses ESLint + Prettier)
- **Dev:** `npm run dev` (runs CLI from source)
- **CLI Usage:**
    - `npx prompt-kit init` → prints `Initialized` and exits 0
    - `npx prompt-kit help` → prints usage info and exits 0
    - Unknown commands print error and exit 1
- **Never run tests or commands in watch/interactive mode.**

## Conventions

- Code must be clean, minimal, and without duplication.
- Clarity comes from naming, structure, and formatting only.
- Tests must include realistic inputs, edge cases, minimal mocking, and full coverage.
- Provide test updates separately after code unless explicitly asked to combine.
- Use conventional commit messages (see `templates/copilot/instructions/git-commit-instructions.md`).

## Integration Points

- External AI tools may require API keys or permissions (see `README.md` Security Considerations).
- See `docs/` for integration guides and API references.

## Examples

- See `src/index.ts` for CLI dispatch pattern.
- See `templates/` for prompt/instruction structure.
- See `src/commands/*.test.ts` for test patterns.

---

If any section is unclear or missing, please provide feedback to improve these instructions.
