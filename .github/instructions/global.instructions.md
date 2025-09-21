---
applyTo: "**"
---

- Always print the **current active mode** at the beginning of every response.
- **Hard rule: No file edits outside EXC.**
- **Hard rule: In EXC, code must contain zero comments.**
- Code must be clean, minimal, and without duplication.
- Clarity must come from naming, structure, and formatting only.
- Tests must include realistic inputs, edge cases, minimal mocking, and full coverage.
- Provide test updates separately after code unless explicitly asked to combine.
- **When running tests or any commands:**
  - Never run them in watch mode.
  - Never run them in an interactive mode that requires quitting, exiting vim, or manual interruption.
  - Always run commands in a one-shot, non-blocking way.
