# 💻 Development Guide

Comprehensive guide for setting up and contributing to Prompt Kit development.

## 📋 Documentation Navigation

- **[🏠 Main README](../../README.md)** - Project overview and user guide
- **[📚 Documentation Index](./README.md)** - Back to documentation home
- **[🏗️ Architecture](./ARCHITECTURE.md)** - Technical architecture details
- **[🤝 Contributing](./CONTRIBUTING.md)** - Guidelines for contributors

---

## 🚀 Development Setup

### Prerequisites and Requirements

**Required Software:**

- **Node.js**: Version 22.20.0 or higher (managed via Volta)
- **npm**: Latest stable version (comes with Node.js)
- **Git**: For version control and cloning the repository
- **Volta** (optional but recommended): For seamless Node.js version management

**Recommended Development Environment:**

- **VSCode**: With recommended extensions
    - TypeScript Next
    - Prettier - Code formatter
    - ESLint
    - EditorConfig for VS Code

### Step-by-Step Setup Instructions

#### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/YogliB/prompt-kit.git
cd prompt-kit
```

#### 2. Install Dependencies

```bash
# Install all dependencies (including dev dependencies)
npm install
```

#### 3. Environment Configuration

```bash
# Set up development environment (Git hooks, Volta)
npm run prepare
```

#### 4. Build the Project

```bash
# Compile TypeScript to JavaScript
npm run build
```

#### 5. Verify Installation

```bash
# Test the build
npm run start

# Show help to verify everything works
prompt-kit --help
```

#### 6. Global Installation (Optional)

```bash
# Link globally for system-wide access
npm link

# Now you can use prompt-kit from anywhere
prompt-kit --version
```

### Development Environment Configuration

**VSCode Settings** (`.vscode/settings.json`):

```json
{
	"typescript.preferences.importModuleSpecifier": "relative",
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"eslint.workingDirectories": ["."],
	"typescript.suggest.autoImports": true
}
```

**EditorConfig** (`.editorconfig`):

- Consistent coding styles across different editors
- Automatic formatting for supported files
- Team collaboration made easier

---

## 📋 Project Scripts

### All npm Scripts with Descriptions

| Command            | Description                                             | When to Use                  |
| ------------------ | ------------------------------------------------------- | ---------------------------- |
| `npm run dev`      | Watch mode for development with automatic recompilation | During active development    |
| `npm run build`    | Build for production                                    | Before testing or deployment |
| `npm run start`    | Run the built application                               | Testing the compiled version |
| `npm run lint`     | Run ESLint for code quality checks                      | Manual quality checks        |
| `npm run lint:fix` | Automatically fix linting issues                        | Quick fixes for style issues |
| `npm run format`   | Format code using Prettier                              | Code formatting              |
| `npm run prepare`  | Set up Volta and Husky for development                  | Initial setup and CI/CD      |

### Development Workflow Commands

#### Daily Development Workflow

```bash
# 1. Start development with watch mode
npm run dev

# 2. In another terminal, test your changes
npm run build
npm run start

# 3. Check code quality
npm run lint
npm run format
```

#### Pre-commit Workflow (Automatic)

```bash
# Stage your files
git add .

# Commit - pre-commit hooks run automatically
git commit -m "feat: add new feature"

# The following happens automatically:
# - ESLint fixes on staged JS/TS files
# - Prettier formats all other files
# - Commits are blocked if issues remain
```

#### Production Build Workflow

```bash
# Full production build
npm run build

# Verify the build
npm run start

# Test CLI functionality
prompt-kit --help
prompt-kit --version
```

### Build and Testing Commands

#### Build Process

- **`npm run build`**: Compiles TypeScript from `src/` to `dist/`
- **`npm run start`**: Runs the compiled application from `dist/index.js`
- **`npm run dev`**: Runs TypeScript compiler in watch mode

#### Testing Commands

```bash
# Manual testing checklist
prompt-kit --help          # Should show help
prompt-kit --version       # Should show version
prompt-kit [name]          # Should greet with custom name
npm run build && npm run start  # Should build and run without errors
```

#### Quality Assurance Commands

```bash
# Run all quality checks
npm run lint              # ESLint checks
npm run format            # Prettier formatting

# Auto-fix issues
npm run lint:fix          # Fix ESLint issues
npm run format            # Apply Prettier formatting

# Check types without emitting files
npx tsc --noEmit
```

---

## 🔧 Code Quality

### Tools Used

**Core Development Tools:**

- **TypeScript** (^5.0.0): Type safety and modern JavaScript features
- **ESLint** (9.37.0): Code linting and error detection
- **Prettier** (3.6.2): Consistent code formatting
- **Husky** (9.1.7): Git hooks automation
- **lint-staged** (16.2.2): Pre-commit linting on staged files

**Version Management:**

- **Volta** (22.20.0): Node.js version management
- **npm**: Package management and script running

### Code Quality Standards and Practices

#### TypeScript Best Practices

```typescript
// ✅ DO: Use strict type annotations
interface User {
	name: string;
	age: number;
}

// ✅ DO: Use proper error handling
try {
	// Your code here
} catch (error) {
	console.error('Error:', error);
}

// ❌ AVOID: Using 'any' type
// const data: any = getData();
```

#### Code Style Guidelines

- **Semicolons**: Always use semicolons
- **Quotes**: Use single quotes for strings
- **Line Length**: 80-100 characters preferred
- **Indentation**: 2 spaces (Prettier enforced)
- **Trailing Commas**: ES5 style (no trailing commas)

#### Git Commit Standards

```bash
# ✅ Good commit messages
feat: add new CLI command for template generation
fix: resolve issue with argument parsing
docs: update installation instructions

# ❌ Poor commit messages
"update stuff"
"fix"
"add feature"
```

### Development Best Practices

#### Workflow Best Practices

1. **Branch Strategy**:
    - `feature/feature-name` for new features
    - `fix/bug-description` for bug fixes
    - `docs/description` for documentation

2. **Development Cycle**:

    ```bash
    # Always start with latest main
    git checkout main
    git pull origin main

    # Create feature branch
    git checkout -b feature/amazing-feature

    # Develop with watch mode
    npm run dev

    # Regular commits with proper messages
    git add .
    git commit -m "feat: implement core functionality"
    ```

3. **Quality Assurance**:
    - Run `npm run lint` before committing
    - Use `npm run format` for consistent formatting
    - Test with `npm run build && npm run start`

#### Code Organization Best Practices

- **Single Responsibility**: Each file should have one clear purpose
- **Clear Naming**: Use descriptive names for functions and variables
- **Error Handling**: Always handle potential errors gracefully
- **Documentation**: Comment complex logic and public APIs

---

## 🏗️ Project Structure

### Technical Overview of Key Directories

```
prompt-kit/
├── 📁 src/                 # Source code directory
│   └── index.ts           # Main CLI entry point
├── 📁 templates/          # AI agent templates
│   └── rules/
│       └── planning.md    # Planning guidelines template
├── 📁 docs/               # Documentation
│   ├── ARCHITECTURE.md    # System design details
│   ├── CONTRIBUTING.md    # Contribution guidelines
│   ├── DEVELOPMENT.md     # This file
│   ├── EXAMPLES.md        # Usage examples
│   └── TEMPLATES.md       # Template system guide
├── 📁 .vscode/            # VSCode configuration
│   └── settings.json      # Editor settings
├── 📁 .husky/             # Git hooks
│   └── pre-commit         # Pre-commit hook
└── 📁 .github/            # GitHub configuration
```

### Development-Specific File Explanations

#### Source Code Files

- **`src/index.ts`**: Main CLI application entry point
    - Command-line argument parsing
    - Template system integration
    - User interaction handling

#### Template System

- **`templates/rules/planning.md`**: AI agent planning template
    - Structured development planning guidelines
    - Best practices for AI-assisted development

#### Configuration Files

- **`tsconfig.json`**: TypeScript compiler configuration
    - Strict mode enabled
    - Output directory: `dist/`
    - Target: ES2022

- **`eslint.config.mjs`**: ESLint configuration
    - Extends recommended TypeScript rules
    - Custom rules for project needs

- **`.prettierrc`**: Prettier formatting configuration
    - Consistent code style enforcement
    - Print width and tab settings

- **`.npmrc`**: npm configuration
    - Package registry settings
    - Dependency resolution

#### Development Tools Configuration

- **`.vscode/settings.json`**: VSCode workspace settings
    - TypeScript preferences
    - Formatting on save enabled
    - ESLint integration

- **`.husky/pre-commit`**: Git pre-commit hook
    - Runs lint-staged automatically
    - Prevents commits with quality issues

#### Build and Distribution

- **`dist/`**: Compiled JavaScript output (generated)
    - `dist/index.js`: Main entry point for built application
    - Compiled from TypeScript source

---

## 🚀 Getting Started for Developers

### Quick Start Guide for Contributors

#### 1. Environment Setup (5 minutes)

```bash
# Clone and setup
git clone https://github.com/YogliB/prompt-kit.git
cd prompt-kit
npm install
npm run prepare

# Verify setup
npm run build
prompt-kit --help
```

#### 2. Development Workflow Overview

**Phase 1: Setup & Exploration**

- Read this development guide thoroughly
- Explore the codebase structure
- Understand the template system

**Phase 2: Active Development**

- Create a feature branch
- Use `npm run dev` for development
- Write clear, descriptive commit messages

**Phase 3: Quality Assurance**

- Run `npm run lint` and `npm run format`
- Test with `npm run build && npm run start`
- Ensure all quality checks pass

**Phase 4: Contribution**

- Push your feature branch
- Create a pull request
- Address review feedback

#### 3. First Contribution Example

**Adding a New CLI Command:**

```bash
# 1. Create feature branch
git checkout -b feature/new-command

# 2. Develop with watch mode
npm run dev

# 3. Add your code to src/index.ts
# ... implement your feature

# 4. Test your changes
npm run build
npm run start

# 5. Quality checks
npm run lint
npm run format

# 6. Commit with good message
git add .
git commit -m "feat: add new-command for enhanced functionality"

# 7. Push and create PR
git push origin feature/new-command
```

### Development Workflow Overview

#### Daily Development Routine

1. **Pull latest changes**: `git pull origin main`
2. **Create feature branch**: `git checkout -b feature/my-feature`
3. **Start development**: `npm run dev`
4. **Make changes**: Edit files as needed
5. **Test changes**: `npm run build && npm run start`
6. **Quality checks**: `npm run lint && npm run format`
7. **Commit changes**: `git commit -m "feat: description"`

#### Debugging Workflow

```bash
# Enable debug logging if needed
DEBUG=prompt-kit:* npm run dev

# Check TypeScript errors
npx tsc --noEmit

# Manual linting
npm run lint

# Format specific files
npx prettier --write src/specific-file.ts
```

#### Testing Workflow

```bash
# Build test
npm run build

# Integration test
npm run start

# CLI functionality test
prompt-kit --help
prompt-kit --version

# Template system test (if applicable)
# Test template generation and usage
```

---

## 🔧 Troubleshooting

### Common Development Issues

#### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clean and rebuild
npm run build
```

#### Linting Issues

```bash
# Auto-fix linting problems
npm run lint:fix

# Check specific files
npx eslint src/index.ts

# Format specific files
npx prettier --write src/index.ts
```

#### TypeScript Errors

```bash
# Check types without building
npx tsc --noEmit

# Check specific files
npx tsc --noEmit src/index.ts
```

#### Git Hook Issues

```bash
# Skip pre-commit hooks (use carefully)
git commit -m "message" --no-verify

# Reinstall hooks
npm run prepare
```

### Getting Help

1. **Check this documentation first**
2. **Review existing issues**: [GitHub Issues](https://github.com/YogliB/prompt-kit/issues)
3. **Search discussions**: [GitHub Discussions](https://github.com/YogliB/prompt-kit/discussions)
4. **Create detailed issue** if needed

---

## 📚 Additional Resources

- **[📖 Main README](../../README.md)** - Project overview and basic usage
- **[🏗️ Architecture](./ARCHITECTURE.md)** - Technical architecture and design decisions
- **[📋 Examples](./EXAMPLES.md)** - Usage examples and code samples
- **[📐 Templates](./TEMPLATES.md)** - Template system documentation
- **[🤝 Contributing](./CONTRIBUTING.md)** - Detailed contribution guidelines

---

_Happy coding! 🎉_
