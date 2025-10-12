# Prompt Kit

> A CLI toolkit for scaffolding helper files for AI coding agents

[![npm version](https://img.shields.io/npm/v/prompt-kit)](https://www.npmjs.com/package/prompt-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Overview

**Prompt Kit** is a command-line interface (CLI) tool designed to help developers scaffold and manage helper files for AI coding agents. It provides a structured approach to creating essential configuration files like `AGENTS.md`, `cursorrules`, Copilot instructions, and other development environment files that enhance AI-assisted coding workflows.

## Key Features

### 🤖 AI Templates for Structured Planning

- **Plan Templates**: Pre-built templates for creating structured development plans
- **Task Organization**: Standardized formats for breaking down complex coding tasks
- **Documentation Standards**: Consistent templates for technical documentation

### 📋 Rule Files for Coding Standards

- **Coding Standards**: Templates for defining and maintaining code quality rules
- **Memory Management**: Guidelines for AI agents to maintain context across sessions
- **Best Practices**: Curated templates for common development scenarios

### 🔧 MCP Configuration for External Tools

- **Tool Integration**: Ready-to-use configurations for Model Context Protocol (MCP) servers
- **External API Access**: Templates for connecting AI agents to external tools and services
- **Custom Tool Setup**: Boilerplates for creating custom MCP server integrations

### ⚙️ VSCode Configuration

- **Development Environment**: Optimized VSCode settings for AI-assisted development
- **Workspace Configuration**: Templates for consistent development environments
- **Extension Recommendations**: Curated list of extensions for enhanced AI coding workflows

## Installation Instructions

### Prerequisites

- **Node.js**: Version 22.20.0 or higher (managed via Volta)
- **npm**: Latest stable version
- **Git**: For version control

### Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/YogliB/prompt-kit.git
    cd prompt-kit
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Build the project**

    ```bash
    npm run build
    ```

4. **Link globally (optional)**
    ```bash
    npm link
    ```

## Usage Guide

### Available Commands

The CLI currently supports basic functionality that will be expanded in future releases:

```bash
prompt-kit [name] [options]
```

### Options

- `-h, --help`: Show help message
- `-v, --version`: Show version information

### Examples

```bash
# Basic greeting (default: "World")
prompt-kit

# Greet with custom name
prompt-kit Alice

# Show help information
prompt-kit --help

# Show version
prompt-kit --version
```

## Project Structure

```
prompt-kit/
├── .ai/                    # AI-related templates and configurations
│   └── templates/          # Reusable AI prompt templates
│       └── plan.template.md # Structured planning template
├── .vscode/                # VSCode configuration
│   └── settings.json       # Workspace settings
├── .clinerules/            # Coding rules and guidelines
├── .github/                # GitHub-specific files
├── .husky/                 # Git hooks configuration
├── .roo/                   # Roo AI agent configuration
├── src/                    # Source code
│   └── index.ts            # Main CLI entry point
├── .eslint.config.mjs      # ESLint configuration
├── .prettierrc             # Prettier configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

### Directory Purposes

- **`.ai/`**: Contains AI-specific templates and prompt configurations
- **`.vscode/`**: VSCode workspace settings optimized for AI-assisted development
- **`.clinerules/`**: Project-specific coding rules and standards
- **`.github/`**: GitHub workflows, templates, and community files
- **`.husky/`**: Git hooks for code quality enforcement
- **`.roo/`**: Roo AI agent specific configuration and rules
- **`src/`**: Source TypeScript code for the CLI application

## Examples

### Creating a New Development Plan

While the CLI is still in early development, you can use the included templates to structure your development work:

```bash
# 1. Copy the plan template
cp .ai/templates/plan.template.md my-feature-plan.md

# 2. Fill in the template with your specific requirements
# 3. Use it to guide your AI-assisted development process
```

### Setting Up Development Environment

```bash
# 1. Copy VSCode settings
cp .vscode/settings.json ~/.vscode/settings.json

# 2. Install recommended extensions
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension esbenp.prettier-vscode
# ... other recommended extensions
```

## Development Info

### Development Setup

1. **Clone and setup**

    ```bash
    git clone https://github.com/YogliB/prompt-kit.git
    cd prompt-kit
    npm install
    ```

2. **Development commands**
    ```bash
    npm run dev      # Watch mode for development
    npm run build    # Build for production
    npm run lint     # Run linting
    npm run format   # Format code
    ```

### Project Scripts

- **`prepare`**: Sets up Volta and Husky for development
- **`format`**: Formats code using Prettier
- **`lint`**: Runs ESLint for code quality
- **`lint:fix`**: Automatically fixes linting issues
- **`build`**: Compiles TypeScript to JavaScript
- **`start`**: Runs the built application
- **`dev`**: Runs TypeScript compiler in watch mode

### Code Quality

This project uses:

- **TypeScript**: For type safety
- **ESLint**: For code linting
- **Prettier**: For code formatting
- **Husky**: For Git hooks
- **lint-staged**: For pre-commit linting

## Contributing Guidelines

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Workflow

- Use conventional commit messages
- Write tests for new features
- Update documentation as needed
- Ensure all linting and formatting checks pass

## Current Status

⚠️ **Pre-release (v0.0.0)**

This is an early-stage project with basic functionality. Current features include:

- ✅ Basic CLI structure with help and version commands
- ✅ Greeting functionality with custom names
- ✅ Project templates and configurations
- ✅ Development environment setup
- ✅ TypeScript support with modern tooling

### Planned Features

- 🔄 Advanced CLI commands for scaffolding
- 🔄 Interactive template selection
- 🔄 Custom rule file generation
- 🔄 MCP server integration templates
- 🔄 VSCode workspace configuration generation
- 🔄 Plugin system for extensibility

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/YogliB/prompt-kit/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YogliB/prompt-kit/discussions)
- **Author**: YogliB

---

**Prompt Kit** - Empowering AI-assisted development workflows 🚀
