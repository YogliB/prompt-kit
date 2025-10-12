# 🤝 Contributing to Prompt Kit

We welcome contributions from the community! This comprehensive guide will help you get started with contributing to Prompt Kit, whether you're a first-time contributor or an experienced developer.

## 🚀 Getting Started as a Contributor

### Prerequisites for Contributing

Before you begin contributing, ensure you have the following installed on your system:

**Required:**

- **Node.js 22.20.0+** - The project uses modern JavaScript features
- **Git** - For version control and collaboration
- **GitHub Account** - To fork repositories and create pull requests

**Recommended:**

- **Volta** - For managing Node.js versions (`curl https://get.volta.sh | bash`)
- **Visual Studio Code** - The recommended editor with included workspace settings

**Optional but Helpful:**

- **GitHub Desktop** - For easier Git operations
- **Command Line Terminal** - For running npm scripts and Git commands

### Development Environment Setup

#### Step 1: Fork and Clone the Repository

1. **Fork the repository** on GitHub by clicking the "Fork" button
2. **Clone your fork** to your local machine:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git clone https://github.com/YOUR_USERNAME/prompt-kit.git
cd prompt-kit
```

3. **Set up the upstream remote** to keep your fork synchronized:

```bash
# Add the original repository as upstream
git remote add upstream https://github.com/YogliB/prompt-kit.git

# Verify your remotes
git remote -v
```

#### Step 2: Install Dependencies and Set Up the Project

```bash
# Install all dependencies
npm install

# Build the project to ensure everything works
npm run build

# Set up Git hooks (runs automatically via prepare script)
npm run prepare

# Verify your setup by running the CLI
npm run start
```

**Expected Output:**

```
Hello, World! Welcome to Prompt Kit - your developer prompt utilities toolkit.
```

#### Step 3: Understand the Project Structure

Take time to explore the codebase:

```bash
# Look at the main entry point
cat src/index.ts

# Check available scripts
npm run

# Look at existing templates
find templates/ -type f -name "*.md" | head -5
```

### Understanding the Codebase Structure

Prompt Kit is a **CLI tool for developer prompt utilities** built with:

- **TypeScript** - For type safety and better developer experience
- **Node.js ESM** - Using ES modules (`"type": "module"` in package.json)
- **Template System** - Markdown-based templates in the `templates/` directory
- **Git Hooks** - Automated linting and formatting via Husky

#### Project Architecture Overview

```
prompt-kit/
├── src/                    # Source code
│   └── index.ts           # Main CLI entry point
├── templates/             # Template system
│   └── rules/             # Rule templates
│       └── planning.md    # AI agent planning template
├── docs/                  # Documentation
│   ├── README.md         # Main documentation
│   ├── ARCHITECTURE.md   # System architecture
│   ├── DEVELOPMENT.md    # Development guide
│   └── TEMPLATES.md      # Template documentation
├── .github/              # GitHub workflows and templates
├── .vscode/              # VSCode settings and recommendations
├── .husky/               # Git hooks
└── Root configuration files
    ├── package.json      # Dependencies and scripts
    ├── tsconfig.json     # TypeScript configuration
    ├── eslint.config.mjs # Linting rules
    └── .prettierrc       # Code formatting
```

#### Key Components Explained

**Core CLI (`src/index.ts`):**

- Command-line argument parsing
- Help and version display
- Greeting generation with customizable names
- Error handling and exit codes

**Template System (`templates/`):**

- Markdown-based templates for AI agents
- Organized by category (rules, prompts, etc.)
- Extensible structure for new template types

**Development Tools:**

- **ESLint + Prettier** - Code quality and formatting
- **Husky** - Git hooks for pre-commit quality checks
- **TypeScript** - Static type checking
- **Volta** - Node.js version management

## 💻 Contribution Workflow

### Development Workflow Steps

#### Step 1: Create Your Feature Branch

Always create a dedicated branch for your work:

```bash
# Create and switch to a new feature branch
git checkout -b feature/amazing-feature

# Or for bug fixes
git checkout -b fix/bug-fix

# Or for documentation
git checkout -b docs/update-documentation

# Or for refactoring
git checkout -b refactor/cli-improvements
```

**Branch Naming Conventions:**

- `feature/feature-name` - For new features (e.g., `feature/template-system`)
- `fix/bug-description` - For bug fixes (e.g., `fix/argument-parsing`)
- `docs/description` - For documentation updates (e.g., `docs/add-examples`)
- `refactor/component-name` - For code refactoring (e.g., `refactor/cli-handler`)
- `test/test-description` - For adding tests (e.g., `test/cli-commands`)
- `chore/maintenance-task` - For maintenance tasks (e.g., `chore/update-deps`)

#### Step 2: Make Your Changes

1. **Start development mode** for immediate feedback:

```bash
npm run dev      # Watch mode with TypeScript compilation
```

2. **Make your code changes** following these standards:
    - Use **TypeScript** for all new code
    - Follow **ES modules** syntax (`import`/`export`)
    - Add **JSDoc comments** for functions and classes
    - Handle **errors gracefully** with proper try-catch blocks
    - Use **descriptive variable and function names**

3. **Example: Adding a new CLI command**:

```typescript
// In src/index.ts - Adding a new command
private static handleNewCommand(command: string): void {
  switch (command) {
    case 'greet':
      console.log(`Hello! Prompt Kit is ready.`);
      break;
    // Add more cases here
  }
}
```

#### Step 3: Test Your Changes

**Automated Testing:**

```bash
# Build to check for TypeScript errors
npm run build

# Run linting to check code quality
npm run lint

# Format code automatically
npm run format
```

**Manual Testing Checklist:**

- [ ] **CLI Help**: `npm run start -- --help` displays correctly
- [ ] **Version**: `npm run start -- --version` shows correct version
- [ ] **Basic Functionality**: `npm run start` works as expected
- [ ] **Custom Arguments**: `npm run start "YourName"` produces correct greeting
- [ ] **Error Handling**: Invalid arguments show helpful error messages
- [ ] **Build Success**: `npm run build` completes without errors

**Example Test Session:**

```bash
# Test basic functionality
npm run start
# Expected: "Hello, World! Welcome to Prompt Kit..."

# Test custom name
npm run start "Alice"
# Expected: "Hello, Alice! Welcome to Prompt Kit..."

# Test help
npm run start -- --help
# Should show usage information

# Test version
npm run start -- --version
# Should show "v0.0.0"
```

#### Step 4: Code Quality and Standards

**Code Style Requirements:**

- **Indentation**: 1 tab (not spaces)
- **Line Length**: Max 100 characters
- **Quotes**: Single quotes for strings
- **Semicolons**: Required for all statements
- **Braces**: Required for all blocks (including single-line)

**TypeScript Best Practices:**

- Use **strict type annotations** for function parameters and return types
- Prefer **interfaces** over types for object shapes
- Use **union types** (`|`) for values that can be multiple types
- Avoid `any` type - use `unknown` when type cannot be determined

**Error Handling Standards:**

```typescript
// Good: Proper error handling
try {
  // Your code here
} catch (error) {
  console.error("Error:", error instanceof Error ? error.message : "Unknown error");
  process.exit(1);
}

// Avoid: Generic error handling
catch (error) {
  throw error; // Too generic
}
```

**Commit Message Conventions:**

Follow the **Conventional Commits** specification:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat` - New feature (correlates to MINOR version bump)
- `fix` - Bug fix (correlates to PATCH version bump)
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

**Examples:**

```
feat(cli): add new template command for generating prompts

fix(parser): resolve issue with quoted argument handling in CLI

docs: add comprehensive contributing guidelines with examples

refactor(cli): extract argument parsing logic into separate class

test: add unit tests for CLI command parsing

chore(deps): update TypeScript to latest version
```

**Pre-commit Hooks:**

- **ESLint** runs on all staged `.ts` and `.js` files
- **Prettier** formats code automatically
- **TypeScript** checks for type errors
- Commits are **blocked** if any quality checks fail

**Fixing Quality Issues:**

```bash
# Auto-fix linting issues
npm run lint:fix

# Format all code
npm run format

# Check for any remaining issues
npm run lint
```

## 🔄 Development Process

### Creating Feature Branches

#### Step 1: Keep Your Branch Updated

Before starting work, ensure your branch is up to date with the main branch:

```bash
# Switch to main branch
git checkout main

# Pull latest changes from upstream
git pull upstream main

# Push updates to your fork
git push origin main

# Switch back to your feature branch
git checkout feature/your-feature

# Rebase your changes on top of latest main
git rebase main
```

#### Step 2: Make Small, Focused Commits

**Good Commit Strategy:**

```bash
# Make incremental changes with meaningful commits
git add src/cli.ts
git commit -m "feat(cli): add argument validation for user names"

# Add error handling
git add src/error-handler.ts
git commit -m "feat(cli): add comprehensive error handling"

# Update tests
git add src/cli.test.ts
git commit -m "test: add unit tests for CLI argument parsing"
```

**Avoid:**

- One massive commit with all changes
- Unrelated changes in the same commit
- Commit messages like "fix stuff" or "update"

### Code Review Process

#### Before Submitting Your Pull Request

1. **Self-Review Checklist:**
    - [ ] Code builds without errors (`npm run build`)
    - [ ] All linting checks pass (`npm run lint`)
    - [ ] Code is properly formatted (`npm run format`)
    - [ ] Manual testing works as expected
    - [ ] Commit messages follow conventions
    - [ ] Branch is rebased on latest main

2. **Run Full Test Suite:**

```bash
# Build and test everything
npm run build && npm run lint && echo "All checks passed!"
```

#### Pull Request Guidelines

**Creating Your Pull Request:**

1. **Push your feature branch:**

```bash
git push origin feature/your-feature-name
```

2. **Create the Pull Request:**
    - Go to the **original repository** (not your fork)
    - Click **"Compare & pull request"**
    - **Base:** `main` | **Compare:** `feature/your-feature-name`
    - Fill out the **Pull Request template** completely

**Pull Request Template Requirements:**

```markdown
## Description

[Clear description of what this PR does]

## Changes Made

- [List specific changes]
- [Be specific about files modified]

## Testing Performed

- [How you tested the changes]
- [Include command examples]

## Related Issues

- Closes #[issue-number]
- Relates to #[issue-number]

## Breaking Changes

- [Note any breaking changes or state "None"]

## Screenshots/Examples

[If applicable, add examples of the new functionality]
```

**Pull Request Requirements:**

- [ ] **Clear title** following conventional commit format
- [ ] **Detailed description** of changes and motivation
- [ ] **Testing evidence** (manual testing results, build logs)
- [ ] **Related issues** linked if applicable
- [ ] **Breaking changes** clearly noted
- [ ] **Screenshots/examples** for UI or output changes

### Review Process

**What Maintainers Look For:**

- **Code quality** - Following style guidelines
- **Functionality** - Does it work as intended?
- **Testing** - Adequate test coverage
- **Documentation** - Updated docs if needed
- **Security** - No security vulnerabilities
- **Performance** - No performance regressions

**Addressing Review Feedback:**

```bash
# Make requested changes
git add .
git commit -m "fix: address review feedback on error handling"

# If significant changes needed, request re-review
git push origin feature/your-feature

# Comment on the PR: "Updated based on feedback"
```

**After Approval:**

- Maintainers will merge your PR
- Your branch will be deleted
- You'll be added to the contributors list
- Consider updating your fork:

```bash
git checkout main
git pull upstream main
git push origin main
```

## 📝 Template and Documentation Contributions

### Adding New Templates

#### Template Structure and Guidelines

**Template File Organization:**

```
templates/
├── rules/           # AI agent behavior rules
├── prompts/         # Reusable prompt templates
├── examples/        # Usage examples
└── docs/           # Template documentation
```

**Template File Naming:**

- Use **descriptive names**: `code-review.md`, `project-planning.md`
- Use **kebab-case** for multi-word names
- Include **category prefix** when helpful: `cli-help.md`, `api-testing.md`

#### Creating a New Template: Step-by-Step

**Step 1: Choose Template Location**

```bash
# Create appropriate directory if needed
mkdir -p templates/prompts

# Create your template file
touch templates/prompts/code-review.md
```

**Step 2: Template Content Structure**

```markdown
# Template Name

## Purpose

[Clear description of what this template helps with]

## Usage Context

[When and why to use this template]

## Template Variables

- `{{variable}}` - Description of what to replace

## Template Content
```

[Your actual template content here]
Replace {{variable}} with specific values.

```

## Examples
### Example 1: Basic Usage
[Show how to use the template]

### Example 2: Advanced Usage
[Show more complex usage if applicable]

## Best Practices
- [Usage tip 1]
- [Usage tip 2]
- [Usage tip 3]
```

**Step 3: Test Your Template**

```bash
# Test template integration (when template system is available)
npm run build
npm run start -- --template test
```

**Step 4: Add Template Documentation**

- Update `docs/TEMPLATES.md` with your new template
- Include usage examples and best practices
- Add to the template index if it exists

#### Template Testing Procedures

**Manual Testing Checklist:**

- [ ] Template loads without syntax errors
- [ ] Variables are properly documented
- [ ] Examples work as described
- [ ] Template integrates with existing CLI commands
- [ ] Documentation is clear and complete

**Example Template Contribution:**

```markdown
# Code Review Assistant

## Purpose

Generate structured code review checklists for different types of projects.

## Template Variables

- `{{language}}` - Programming language (javascript, typescript, python)
- `{{project_type}}` - Type of project (cli, web, library)

## Template Content
```

Code Review Checklist for {{language}} {{project_type}}

## Code Quality

- [ ] Code follows {{language}} style guidelines
- [ ] Proper error handling implemented
- [ ] Input validation is comprehensive
- [ ] No hardcoded credentials or secrets

## Documentation

- [ ] README is up to date
- [ ] Code comments are clear and accurate
- [ ] API documentation is complete

```

```

### Documentation Contributions

#### Documentation Standards

**Writing Style Guidelines:**

- Use **clear, concise language** appropriate for developers
- Include **practical examples** with actual commands
- Use **consistent formatting** (backticks for commands, bold for emphasis)
- Test **code blocks** to ensure they work

**Documentation File Structure:**

```markdown
# Page Title

## Overview/Introduction

[Brief description of the topic]

## Prerequisites

[What readers need to know or have installed]

## Step-by-Step Instructions

[Numbered steps with code examples]

## Examples

[Real-world usage examples]

## Troubleshooting

[Common issues and solutions]

## Related Documentation

[Links to related docs]
```

#### Updating Documentation

**Step 1: Identify What Needs Updating**

- Check for **outdated information**
- Look for **missing examples**
- Identify **unclear explanations**

**Step 2: Make Your Changes**

```bash
# Edit the relevant documentation file
# For example, updating the README
# Follow the style guidelines above
```

**Step 3: Test Documentation Changes**

- [ ] **Links work** - Click all internal and external links
- [ ] **Code examples run** - Copy and test command examples
- [ ] **Instructions are clear** - Can someone follow them without asking questions?
- [ ] **Formatting is consistent** - Check markdown rendering

**Step 4: Submit Documentation PR**

- Use branch name: `docs/update-[description]`
- Include before/after examples if significant changes
- Note what prompted the documentation update

## 🚦 Testing Guidelines

### Running Tests

**Automated Testing Setup:**

```bash
# Build the project (includes TypeScript checking)
npm run build

# Run linting checks
npm run lint

# Run the application
npm run start

# Test CLI functionality
npm run start -- --help
npm run start -- --version
```

**Manual Testing Procedures:**

#### Basic Functionality Testing

```bash
# Test 1: Basic greeting
npm run start
# Expected: "Hello, World! Welcome to Prompt Kit..."

# Test 2: Custom name greeting
npm run start "Alice"
# Expected: "Hello, Alice! Welcome to Prompt Kit..."

# Test 3: Help display
npm run start -- --help
# Should show usage information

# Test 4: Version information
npm run start -- --version
# Should show current version
```

#### Error Handling Testing

```bash
# Test invalid arguments (should handle gracefully)
npm run start -- --invalid-flag

# Test with various name formats
npm run start "John Doe"
npm run start "test@example.com"
```

### Manual Testing Checklist

**Core Functionality:**

- [ ] **Default greeting** displays correctly
- [ ] **Custom name greeting** works with various inputs
- [ ] **Help command** (`--help`) shows comprehensive usage information
- [ ] **Version command** (`--version`) displays current version
- [ ] **Error handling** provides helpful messages for invalid input

**Code Quality:**

- [ ] **Build process** completes without errors (`npm run build`)
- [ ] **Linting** passes all checks (`npm run lint`)
- [ ] **TypeScript compilation** succeeds without type errors
- [ ] **Git hooks** run successfully on commit

**Edge Cases:**

- [ ] Empty string handling
- [ ] Special characters in names
- [ ] Very long names
- [ ] Unicode characters
- [ ] Numbers and symbols

## 🔧 Development Tools

### Required Tools

**Core Development:**

- **Node.js 22.20.0+** (specified in `package.json` engines)
- **npm** (comes with Node.js) for package management
- **Git** for version control
- **TypeScript 5.0+** for type checking

**Code Quality:**

- **ESLint 9.37.0** - JavaScript/TypeScript linting
- **Prettier 3.6.2** - Code formatting
- **Husky 9.1.7** - Git hooks management

### Recommended IDE Setup

**Visual Studio Code (Recommended):**

```bash
# Install recommended extensions
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
```

**VSCode Workspace Settings:**
The project includes `.vscode/settings.json` with:

- **Format on Save**: Enabled
- **Default Formatter**: Prettier
- **TypeScript Preferences**: Configured for project standards

### Optional but Recommended Tools

**Version Management:**

- **Volta** - JavaScript tool manager (`curl https://get.volta.sh | bash`)
    ```bash
    # Install and pin Node.js version
    volta install node@22.20.0
    volta pin node@22.20.0
    ```

**Git Workflow:**

- **GitHub Desktop** - GUI for Git operations
- **Git Lens** (VSCode extension) - Enhanced Git capabilities

**Development Utilities:**

- **Terminal** - Modern terminal emulator (iTerm2, Windows Terminal, etc.)
- **Oh My Zsh** - Enhanced shell experience (for macOS/Linux)

## 📚 Learning Resources

### Understanding the Codebase

**Start Here - Essential Files:**

1. **Main Entry Point** (`src/index.ts`):

    ```bash
    # Read the main CLI implementation
    cat src/index.ts
    ```

    - Command-line argument parsing
    - Help and version display logic
    - Greeting generation

2. **Package Configuration** (`package.json`):

    ```bash
    # Understand project dependencies and scripts
    cat package.json
    ```

    - Available npm scripts
    - Development dependencies
    - Project metadata

3. **Template System** (`templates/`):

    ```bash
    # Explore available templates
    find templates/ -name "*.md" | xargs ls -la

    # Read a specific template
    cat templates/rules/planning.md
    ```

### Key Files to Understand

| File/Directory                | Purpose                  | Why It's Important                                     |
| ----------------------------- | ------------------------ | ------------------------------------------------------ |
| `src/index.ts`                | Main CLI entry point     | Core functionality, argument parsing, command handling |
| `package.json`                | Project configuration    | Dependencies, scripts, metadata                        |
| `tsconfig.json`               | TypeScript configuration | Compiler options, module resolution                    |
| `eslint.config.mjs`           | Linting rules            | Code quality standards                                 |
| `.prettierrc`                 | Code formatting          | Consistent code style                                  |
| `templates/rules/planning.md` | AI planning template     | Example of template system                             |
| `docs/ARCHITECTURE.md`        | System architecture      | High-level design decisions                            |
| `docs/DEVELOPMENT.md`         | Development guide        | Detailed development instructions                      |
| `.vscode/settings.json`       | Editor configuration     | Consistent development environment                     |

### Quick Start Commands

**For New Contributors:**

```bash
# 1. Clone and setup
git clone <your-fork-url>
cd prompt-kit
npm install

# 2. Understand the codebase
npm run build
cat src/index.ts
cat package.json

# 3. Make a test change
npm run dev  # Start development mode

# 4. Test your changes
npm run start
npm run start "YourName"
```

**For Template Contributors:**

```bash
# Explore existing templates
find templates/ -type f -name "*.md"

# Read template structure
cat templates/rules/planning.md

# Create new template
mkdir -p templates/prompts
touch templates/prompts/my-template.md
```

## 🐛 Reporting Issues

### Bug Reports

**Creating Effective Bug Reports:**

1. **Use the Bug Report Template**

    ```bash
    # Navigate to GitHub Issues and click "New Issue"
    # Select "Bug Report" template
    ```

2. **Essential Information to Include:**
    - **Description**: Clear, concise description of the bug
    - **Steps to Reproduce**: Numbered steps to reproduce the issue
    - **Expected Behavior**: What should happen
    - **Actual Behavior**: What actually happens
    - **Environment Details**:
        - Node.js version (`node --version`)
        - Operating System (macOS, Windows, Linux)
        - npm version (`npm --version`)
    - **Error Messages**: Copy and paste any error output
    - **Minimal Example**: Smallest code sample that reproduces the issue

**Bug Report Example:**

```markdown
## Description

When running `npm run start` with special characters in the name, the CLI crashes.

## Steps to Reproduce

1. Clone the repository
2. Run `npm install`
3. Run `npm run start "John@Doe"`

## Expected Behavior

Should display: "Hello, John@Doe! Welcome to Prompt Kit..."

## Actual Behavior

Error: TypeError: Invalid character in name

## Environment

- Node.js: v22.20.0
- OS: macOS Sequoia
- npm: 10.9.0

## Error Output
```

TypeError: Invalid character in name
at generateGreeting (/path/to/src/index.ts:89:15)

```

```

### Feature Requests

**Creating Effective Feature Requests:**

1. **Use the Feature Request Template**
2. **Clearly Define the Problem**
3. **Propose a Solution**
4. **Consider Alternatives**

**Feature Request Structure:**

- **Problem Statement**: What issue does this solve?
- **Proposed Solution**: How should it work?
- **Use Cases**: Specific scenarios where this would be helpful
- **Implementation Ideas**: High-level technical approach
- **Alternatives Considered**: Other solutions you've thought about
- **Additional Context**: Screenshots, examples, related projects

## 💬 Getting Help

### Community Support Channels

**Primary Channels:**

- **GitHub Issues**: Bug reports, feature requests, technical issues
- **GitHub Discussions**: Q&A, general discussions, community support
- **Email**: `hello@promptkit.dev` for private inquiries

**Secondary Channels:**

- **Project Chat**: [Discord/Server Link] (when available)
- **Social Media**: [@promptkit on Twitter] (when available)

### Getting Development Help

**Self-Service Resources:**

1. **Read the Documentation**:
    - [Development Guide](./DEVELOPMENT.md)
    - [Architecture Documentation](./ARCHITECTURE.md)
    - [Template Guide](./TEMPLATES.md)

2. **Search Existing Issues**:

    ```bash
    # Check if your issue has been reported
    # Go to GitHub Issues and use search/filter
    ```

3. **Review Similar Projects**:
    - [Commander.js](https://github.com/tj/commander.js) - CLI framework patterns
    - [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Interactive CLI patterns

**Getting Community Help:**

**For Development Setup Issues:**

```bash
# 1. Verify your environment
node --version
npm --version

# 2. Check the setup guide
cat docs/DEVELOPMENT.md

# 3. Ask in GitHub Discussions with:
# - Your operating system
# - Node.js version
# - Exact error messages
# - Steps you've already tried
```

**For Code-Related Questions:**

- Include **relevant code snippets**
- Explain **what you've tried**
- Share **error messages**
- Describe **expected vs actual behavior**

## 🎉 Recognition

### How Contributors Are Recognized

**Automatic Recognition:**

- **Contributors List**: All contributors automatically added to README
- **GitHub Statistics**: Contribution graphs and statistics
- **Release Notes**: Featured in changelog for significant contributions

**Special Recognition:**

- **Major Contributors**: Featured prominently in README
- **Code Reviewers**: Recognition for helpful code reviews
- **Documentation Heroes**: Special mention for documentation improvements
- **Community Helpers**: Recognition for helping other contributors

**Contribution Impact Levels:**

- **⭐ Small Fixes**: Typos, small bug fixes, minor improvements
- **⭐⭐ Medium Contributions**: New features, significant bug fixes, documentation overhauls
- **⭐⭐⭐ Major Contributions**: New template categories, architectural improvements, major features

### Contributor Spotlight

**Example Recognition:**

```markdown
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<table>
  <tr>
    <td align="center"><a href="https://github.com/alice"><img src="https://avatars.githubusercontent.com/u/alice" width="100px;" alt=""/><br /><sub><b>Alice</b></sub></a><br /><a href="#code" title="Code">💻</a> <a href="#ideas" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/bob"><img src="https://avatars.githubusercontent.com/u/bob" width="100px;" alt=""/><br /><sub><b>Bob</b></sub></a><br /><a href="#doc" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
```

## 📋 Community Guidelines

### Code of Conduct

**Our Pledge:**
We are committed to providing a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

**Our Standards:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable Behavior:**

- Harassment, intimidation, or discrimination
- Offensive comments or personal attacks
- Publishing private information without consent
- Other conduct that could reasonably be considered inappropriate

**Enforcement:**

- Violations may result in temporary or permanent bans
- Report violations to maintainers
- All reports will be kept confidential

### Communication Guidelines

**In Issues and Pull Requests:**

- Use clear, descriptive titles
- Provide context and examples
- Be patient with responses
- Assume good intent

**In Documentation:**

- Write for your audience (developers)
- Include practical examples
- Test your instructions
- Update related documentation

**In Code Reviews:**

- Be constructive and specific
- Suggest improvements, don't just criticize
- Accept that there may be multiple ways to solve a problem
- Use "I" statements: "I think this could be improved by..."

### Getting Help as a Contributor

**Before Asking:**

1. Check if it's in the documentation
2. Search existing issues/discussions
3. Try to solve it yourself first
4. Prepare a minimal reproduction case

**When Asking:**

- Be specific about what you're trying to accomplish
- Include what you've already tried
- Provide error messages and relevant code
- Mention your environment (OS, Node.js version, etc.)

**Example Help Request:**

```markdown
## Problem

I'm trying to add a new CLI command but getting TypeScript errors.

## What I've Tried

1. Added the command to `src/index.ts`
2. Ran `npm run build` - getting type errors
3. Checked the TypeScript config

## Error Message
```

src/index.ts:45:12 - error TS2345: Type 'string' is not assignable to type 'CliOptions'

````

## Environment
- Node.js v22.20.0
- TypeScript 5.0.0
- macOS Sequoia

## Code Snippet
```typescript
// My new code that's causing the error
const command = args[i];
// Error happens here: options.command = command;
````

````

## 🚀 Project Structure for Contributors

### Key Files and Directories Explained

#### Root Level Files

| File | Purpose | When to Modify |
|------|---------|----------------|
| `package.json` | Project metadata, dependencies, scripts | Adding dependencies, updating scripts |
| `tsconfig.json` | TypeScript compiler configuration | Changing build settings, module resolution |
| `eslint.config.mjs` | ESLint rules and configuration | Updating linting rules, adding plugins |
| `.prettierrc` | Prettier formatting configuration | Changing code formatting rules |
| `README.md` | Main project documentation | Major feature additions, setup changes |

#### Source Code (`src/`)

| File | Purpose | Modification Guidelines |
|------|---------|------------------------|
| `index.ts` | Main CLI entry point | Adding new commands, changing argument parsing |
| `*.ts` | Additional source files | Following TypeScript best practices, adding JSDoc |

#### Templates (`templates/`)

| Directory | Purpose | Contribution Guidelines |
|-----------|---------|------------------------|
| `rules/` | AI agent behavior templates | Follow template structure, include examples |
| `prompts/` | Reusable prompt templates | Clear variable documentation, test usage |
| `examples/` | Usage examples | Real-world scenarios, working code |

#### Documentation (`docs/`)

| File | Purpose | When to Update |
|------|---------|----------------|
| `README.md` | Main documentation | Major changes, new features |
| `ARCHITECTURE.md` | System design | Architectural changes |
| `DEVELOPMENT.md` | Development setup | Environment changes, new tools |
| `TEMPLATES.md` | Template system | New template categories, usage changes |
| `CONTRIBUTING.md` | This file | Major workflow changes |

#### Development Tools

| File/Directory | Purpose | Modification Notes |
|---------------|---------|-------------------|
| `.vscode/` | VSCode workspace settings | Team-wide editor configuration |
| `.husky/` | Git hooks | Pre-commit, pre-push hooks |
| `.github/` | GitHub workflows and templates | CI/CD changes, PR templates |

### Development Scripts Reference

**Build and Quality:**
```bash
npm run build     # Compile TypeScript to JavaScript
npm run lint      # Check code quality
npm run lint:fix  # Auto-fix linting issues
npm run format    # Format code with Prettier
````

**Development and Testing:**

```bash
npm run dev       # Watch mode for development
npm run start     # Run the compiled CLI
npm run prepare   # Set up Git hooks
```

**Exploration:**

```bash
npm run           # Show all available scripts
find . -name "*.md" | head -10  # Find documentation files
find src/ -name "*.ts"          # Find source files
```

---

## 🎯 Contributing Checklist

**Before Submitting Your First Contribution:**

- [ ] **Read this entire guide** - Understand the project and processes
- [ ] **Set up your development environment** - Follow all setup steps
- [ ] **Explore the codebase** - Understand how it works
- [ ] **Check existing issues** - See if your idea is already being discussed
- [ ] **Start small** - Begin with documentation or small bug fixes

**For Every Contribution:**

- [ ] **Follow code standards** - TypeScript, ESLint, Prettier
- [ ] **Test thoroughly** - Manual and automated testing
- [ ] **Update documentation** - Keep docs in sync with code
- [ ] **Use conventional commits** - Follow commit message standards
- [ ] **Create comprehensive PR** - Include description, testing, examples

**Thank you for contributing to Prompt Kit! Your help makes this project better for everyone. 🚀**
