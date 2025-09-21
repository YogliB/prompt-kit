# Conventional Commit Message Guidelines

## Format

[JIRA_TICKET_ID] type(scope): description

[optional body]

[optional footer(s)]

## Recommended Length

- **Title (header)**: **≤ 72 characters**
- **Body lines**: **≤ 72 characters per line**
- Keep the message concise and clear.

---

## Types

- **feat**: A new feature  
- **fix**: A bug fix  
- **docs**: Documentation only changes  
- **style**: Code style changes (formatting, no logic)  
- **refactor**: Code change that neither fixes a bug nor adds a feature  
- **perf**: Performance improvement  
- **test**: Adding or updating tests  
- **chore**: Maintenance tasks (build, tooling, dependencies)  

---

## Rules

1. Prefix every commit with the **JIRA ticket ID** in brackets, e.g., `[CP-1234]`.
2. Use **lowercase** for type and scope.
3. Keep the **description short and imperative**, no period at the end.
4. **Scope** is optional but recommended (e.g., `ui`, `api`).
5. **Body** (optional): Explain *what* and *why*, not *how*.
6. **Footer** (optional): For breaking changes or issue references.  
   - Breaking change:  
     ```
     BREAKING CHANGE: <description>
     ```
   - Issue reference:  
     ```
     Closes #123
     ```

---

## Examples

- [CP-1234] feat(auth): add JWT authentication  
- [CP-2345] fix(api): handle null values in response  
- [CP-3456] docs(readme): update installation instructions  
- [CP-4567] refactor(core): simplify data parsing logic  
