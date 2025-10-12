# 📐 Template System

Comprehensive guide to Prompt Kit's template system for AI-assisted development workflows.

## 🏗️ Template Overview

Prompt Kit provides a structured template system designed to enhance AI-assisted development workflows. Templates help standardize development planning, code organization, and documentation practices across different domains.

### What Are Templates?

Templates in Prompt Kit are pre-structured documents that provide:

- **Consistent frameworks** for common development tasks
- **Standardized approaches** to problem-solving and planning
- **Reusable patterns** for documentation and configuration
- **AI agent guidelines** for structured interactions

### Template Organization

The template system is organized into logical categories based on their primary use case:

```
templates/
├── rules/           # AI agent behavior and planning guidelines
├── planning/        # Project and feature planning frameworks
├── config/          # Development environment configurations
├── docs/           # Documentation and specification templates
└── examples/       # Code examples and implementation patterns
```

### When to Use Different Template Types

| Template Type     | Best Used For                       | Example Scenarios                               |
| ----------------- | ----------------------------------- | ----------------------------------------------- |
| **Rules**         | AI agent behavior, coding standards | Setting planning guidelines, code quality rules |
| **Planning**      | Project structure, task breakdown   | Feature development, system architecture        |
| **Config**        | Development environment setup       | VSCode settings, tool configurations            |
| **Documentation** | API specs, user guides              | README files, API documentation                 |
| **Examples**      | Code patterns, implementations      | React components, API integrations              |

## 📁 Template Structure

### Current Templates

```
templates/
└── rules/
    └── planning.md    # AI agent planning guidelines
```

### Template Categories

#### 1. AI Templates for Structured Planning

**Purpose**: Provide structured frameworks for AI agents to break down and execute complex coding tasks systematically.

**Current Templates**:

- `templates/rules/planning.md` - Comprehensive AI agent planning guidelines

**Core Features**:

- **Task decomposition** - Breaking complex tasks into manageable steps
- **Risk assessment** - Identifying potential blockers and uncertainties
- **Clarifying questions** - Structured approach to gather requirements
- **Alternative analysis** - Evaluating different implementation approaches
- **TODO list generation** - Creating detailed, executable task lists

**Real-World Usage**:

```markdown
# E-commerce Platform - User Authentication Feature

## Plan Overview

**Goal**: Implement secure user authentication with social login options
**Scope**: Frontend and backend authentication, OAuth integration
**Timeline**: 2-week sprint

## Technical Requirements

- React frontend with TypeScript
- Node.js/Express backend
- JWT token management
- OAuth integration (Google, GitHub)
- Password hashing with bcrypt

## Implementation Steps

- [ ] Set up authentication routes and middleware
- [ ] Implement JWT token generation and validation
- [ ] Create login/register forms with validation
- [ ] Add OAuth provider configurations
- [ ] Implement password reset functionality
- [ ] Add session management and logout
- [ ] Write unit and integration tests

## Success Criteria

- [ ] Users can register and login successfully
- [ ] Social login works with Google and GitHub
- [ ] Password reset emails are sent correctly
- [ ] All tests pass with >90% coverage
```

#### 2. Rule Files for Coding Standards

**Purpose**: Define coding standards, AI agent behavior guidelines, and development best practices.

**Features**:

- Code quality standards and linting rules
- AI agent interaction guidelines and protocols
- Documentation requirements and formats
- Best practice recommendations for specific technologies

**Template Structure**:

```markdown
# Technology-Specific Rules Template

## Code Quality Standards

- **Formatting**: [Prettier/Black configuration]
- **Linting**: [ESLint/Ruff rules]
- **Type Checking**: [TypeScript/Flow settings]
- **Testing**: [Jest/Mocha configuration]

## AI Agent Guidelines

- **Planning Thresholds**: <10% ambiguity before planning
- **Clarifying Questions**: Structured format required
- **Code Generation**: Follow established patterns
- **Documentation**: Auto-generate where applicable

## Development Workflow

1. **Plan**: Use planning template for task breakdown
2. **Implement**: Follow coding standards strictly
3. **Review**: Automated linting and type checking
4. **Test**: Comprehensive test coverage required
5. **Document**: Update README and API docs

## File Organization
```

src/
├── components/ # React/Vue/Svelte components
├── hooks/ # Custom React hooks
├── utils/ # Utility functions
├── types/ # TypeScript type definitions
├── styles/ # CSS/SCSS modules
└── tests/ # Test files

```

## Best Practices
- **Component Design**: Single responsibility principle
- **State Management**: [Redux/Context/Zustand] patterns
- **API Integration**: Consistent error handling
- **Performance**: Lazy loading and memoization
- **Accessibility**: WCAG 2.1 AA compliance
```

#### 3. MCP Configuration Templates

**Purpose**: Ready-to-use configurations for development tools, external API integrations, and custom MCP server setups.

**Examples**:

- VSCode workspace settings and extensions
- ESLint and Prettier configurations
- Development environment setups
- External API access configurations
- Custom MCP server boilerplates

**MCP Server Integration Template**:

```json
{
	"mcp_server_template": {
		"name": "api-integration-server",
		"description": "Template for API integration MCP server",
		"version": "1.0.0",
		"capabilities": {
			"tools": [
				{
					"name": "fetch_api_data",
					"description": "Fetch data from external APIs",
					"parameters": {
						"url": {
							"type": "string",
							"description": "API endpoint URL"
						},
						"method": {
							"type": "string",
							"enum": ["GET", "POST"],
							"default": "GET"
						},
						"headers": {
							"type": "object",
							"description": "HTTP headers"
						}
					}
				}
			],
			"resources": [
				{
					"uri": "api://docs",
					"name": "API Documentation",
					"description": "Access to API documentation and schemas"
				}
			]
		},
		"configuration": {
			"api_keys": {
				"required": ["OPENAI_API_KEY", "DATABASE_URL"],
				"optional": ["REDIS_URL", "LOG_LEVEL"]
			},
			"rate_limiting": {
				"requests_per_minute": 60,
				"burst_limit": 10
			}
		}
	}
}
```

**VSCode Configuration Template**:

```json
{
	"template": "vscode-workspace",
	"description": "Optimized VSCode configuration for AI-assisted development",
	"settings": {
		"editor.formatOnSave": true,
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"typescript.preferences.quoteStyle": "double",
		"emmet.includeLanguages": {
			"typescript": "typescriptreact",
			"javascript": "javascriptreact"
		},
		"ai.completion.enabled": true,
		"ai.suggestions.inline": true,
		"files.associations": {
			"*.md": "markdown",
			"*.mdx": "markdown"
		}
	},
	"extensions": {
		"recommended": [
			"ms-vscode.vscode-typescript-next",
			"esbenp.prettier-vscode",
			"dbaeumer.vscode-eslint",
			"bradlc.vscode-tailwindcss",
			"ms-vscode.vscode-json",
			"yzhang.markdown-all-in-one"
		],
		"ai-powered": ["github.copilot", "ms-vscode.vscode-openai"]
	},
	"launch": {
		"version": "0.2.0",
		"configurations": [
			{
				"type": "node",
				"request": "launch",
				"name": "Debug Current File",
				"program": "${file}",
				"skipFiles": ["<node_internals>/**"]
			}
		]
	}
}
```

## 📋 Using Templates

### Basic Template Usage

1. **Copy a template**:

    ```bash
    cp templates/rules/planning.md my-feature-plan.md
    ```

2. **Customize for your needs**:
    - Replace placeholder content
    - Add project-specific requirements
    - Modify structure as needed

3. **Use in development**:
    - Reference during AI-assisted coding
    - Share with team members
    - Version control your customized templates

### Template Customization

Templates are designed to be customized for your specific use cases:

```markdown
# My Custom Feature Plan

**Project**: [Your Project Name]
**Feature**: [Feature Description]
**AI Agent**: [Agent Name]

## Objectives

[Copy and customize from template]

## Implementation Plan

[Adapt template structure to your needs]
```

## 🔧 Template Customization Guide

### How to Modify Existing Templates

Templates are designed to be customized for specific projects and use cases. Here's how to effectively customize them:

#### 1. Start with the Planning Template

The planning template (`templates/rules/planning.md`) provides a comprehensive framework for AI-assisted development:

```markdown
# Custom Project Plan

## Project Context

- **Project**: E-commerce Platform
- **Feature**: User Authentication System
- **Timeline**: 2-week sprint
- **Team**: 2 developers, 1 designer

## Technical Stack

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Backend**: Node.js, Express, PostgreSQL
- **Authentication**: JWT, OAuth 2.0
- **State Management**: Zustand
- **Testing**: Jest, React Testing Library

## Implementation Plan

1. **Week 1**: Backend API development
    - [ ] Set up Express server with authentication routes
    - [ ] Implement JWT token generation and validation
    - [ ] Create user registration and login endpoints
    - [ ] Add password hashing with bcrypt
    - [ ] Implement OAuth integration (Google, GitHub)

2. **Week 2**: Frontend implementation
    - [ ] Create login/register forms with validation
    - [ ] Implement protected routes and auth guards
    - [ ] Add OAuth login buttons and handlers
    - [ ] Create user profile management
    - [ ] Add logout functionality

## Risk Assessment

- **High Risk**: OAuth provider API changes
- **Medium Risk**: Database schema conflicts
- **Low Risk**: Frontend styling inconsistencies

## Dependencies

- [ ] OAuth provider documentation review
- [ ] Database schema approval
- [ ] UI/UX design approval
- [ ] Security review for JWT implementation

## Success Metrics

- [ ] User registration flow < 30 seconds
- [ ] Social login success rate > 95%
- [ ] Password reset functionality working
- [ ] All tests passing with >90% coverage
```

#### 2. Create Project-Specific Rule Templates

Customize coding standards for your technology stack:

```markdown
# React + TypeScript Project Rules

## Code Quality Standards

- **Imports**: Group by external libraries, internal modules, types
- **Components**: Use functional components with hooks
- **Props**: Define proper TypeScript interfaces
- **Styling**: Use CSS modules or styled-components

## File Structure Conventions
```

src/
├── components/
│ ├── common/ # Reusable UI components
│ ├── features/ # Feature-specific components
│ └── layout/ # Layout and navigation
├── hooks/ # Custom React hooks
├── services/ # API and external service calls
├── types/ # TypeScript type definitions
├── utils/ # Helper functions
└── styles/ # Global styles and themes

```

## AI Agent Guidelines
- **Component Generation**: Follow established patterns
- **State Management**: Use Zustand for global state
- **API Integration**: Use React Query for server state
- **Testing**: Generate tests for every component
```

### Creating New Templates

#### 1. Template Structure Guidelines

When creating new templates, follow this structure:

```
templates/
└── [category]/
    └── [descriptive-name].md
```

**Template Categories**:

- `rules/` - AI agent behavior and coding standards
- `planning/` - Project and feature planning frameworks
- `config/` - Development environment configurations
- `docs/` - Documentation and specification templates
- `examples/` - Code examples and implementation patterns

#### 2. Template Content Structure

Every template should include:

```markdown
# Template Name

## Purpose

Clear explanation of what this template is for and when to use it.

## Template Content

The actual template content with placeholders.

## Customization Guide

How to adapt this template for specific use cases.

## Usage Examples

Real examples of how this template is used in practice.

## Related Templates

Links to related templates that work well together.
```

#### 3. Template Variables and Placeholders

Use consistent placeholder patterns:

```markdown
# {{PROJECT_NAME}} - {{FEATURE_NAME}}

**Created**: {{DATE}}
**Author**: {{AUTHOR}}
**Technologies**: {{TECH_STACK}}
**Timeline**: {{TIMELINE}}

## Project Context

This template is customized for {{PROJECT_NAME}}'s {{FEATURE_NAME}} implementation.

## Technical Requirements

- **Frontend**: {{FRONTEND_TECH}}
- **Backend**: {{BACKEND_TECH}}
- **Database**: {{DATABASE}}
- **External APIs**: {{EXTERNAL_APIS}}
```

### Template Organization Strategies

#### 1. Project-Based Organization

For large projects, organize templates by project phase:

```
templates/
├── discovery/           # Initial project planning
├── planning/           # Detailed implementation planning
├── development/        # Active development templates
├── testing/           # Testing and QA templates
└── deployment/        # Deployment and maintenance
```

#### 2. Technology-Based Organization

For multi-technology projects:

```
templates/
├── frontend/
│   ├── react/         # React-specific templates
│   ├── vue/           # Vue.js templates
│   └── vanilla/       # Vanilla JS templates
├── backend/
│   ├── nodejs/        # Node.js templates
│   ├── python/        # Python templates
│   └── go/            # Go templates
└── mobile/
    ├── react-native/  # React Native templates
    └── flutter/       # Flutter templates
```

### Template Categories

**Planning Templates** (`templates/planning/`):

- Project planning frameworks
- Feature development guides
- Task breakdown structures

**Rule Templates** (`templates/rules/`):

- AI agent behavior guidelines
- Code quality standards
- Documentation templates

**Configuration Templates** (`templates/config/`):

- Tool configurations
- Environment setups
- Workspace settings

## 📚 Template Examples

### Planning Template Example

```markdown
# AI Agent Planning Template

## Project Context

- **Project**: [Project Name]
- **Scope**: [Feature/Task Scope]
- **Timeline**: [Expected Timeline]

## Technical Requirements

- **Technologies**: [Tech Stack]
- **Constraints**: [Limitations/Constraints]
- **Dependencies**: [Dependencies]

## Implementation Approach

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Success Criteria

- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
```

### Configuration Template Example

```json
{
	"template": "vscode-config",
	"description": "VSCode configuration for AI-assisted development",
	"settings": {
		"editor.formatOnSave": true,
		"typescript.preferences.quoteStyle": "double",
		"emmet.includeLanguages": {
			"typescript": "typescriptreact"
		}
	}
}
```

## 🚀 Advanced Template Features

### Template Variables

Templates support variable substitution for dynamic content:

```markdown
# {{PROJECT_NAME}} - {{FEATURE_NAME}}

**Created**: {{DATE}}
**Author**: {{AUTHOR}}
**AI Agent**: {{AGENT_NAME}}

## Overview

This template is customized for {{PROJECT_NAME}}'s {{FEATURE_NAME}} implementation.
```

### Template Inheritance

Templates can build upon other templates:

```markdown
<!-- extends: base-planning-template.md -->

<!-- override: objectives -->

## Custom Objectives

[Project-specific objectives]
```

## 📖 Template Best Practices

### For Template Users

#### 1. Template Selection Strategy

- **Start with existing templates** - Don't reinvent the wheel
- **Choose the right template** - Match template purpose to your specific need
- **Evaluate complexity** - Use simpler templates for smaller tasks
- **Consider team experience** - Choose templates that match team skill levels

#### 2. Customization Best Practices

- **Preserve structure** - Keep the original template organization
- **Add context** - Include project-specific details and constraints
- **Update placeholders** - Replace all template variables with actual values
- **Document changes** - Note why you modified the original template

#### 3. Template Management

- **Version control templates** - Track your customizations in git
- **Organize custom templates** - Create a dedicated folder for project templates
- **Share improvements** - Contribute useful modifications back to the project
- **Regular reviews** - Update templates as project requirements evolve

#### 4. AI Agent Integration

- **Clear instructions** - Provide specific context for AI agents using templates
- **Task decomposition** - Break complex templates into manageable AI tasks
- **Progress tracking** - Use template TODO lists to monitor AI progress
- **Quality validation** - Review AI-generated code against template standards

### For Template Authors

#### 1. Template Design Principles

- **Understand your audience** - Know who will use the template and their skill level
- **Solve real problems** - Address common pain points in development workflows
- **Provide clear instructions** - Make customization process obvious and simple
- **Use consistent structure** - Follow established patterns and conventions

#### 2. Content Quality Standards

- **Actionable content** - Every section should provide clear, executable guidance
- **Comprehensive coverage** - Address common scenarios and edge cases
- **Progressive disclosure** - Present information from simple to complex
- **Include examples** - Show how to use the template in real scenarios

#### 3. Template Structure Guidelines

```markdown
# [Descriptive Template Name]

## Purpose

What problem does this solve? When should it be used?

## Prerequisites

What knowledge or setup is required to use this template?

## Template Content

[The actual template with clear placeholders]

## Customization Guide

Step-by-step instructions for adapting the template

## Usage Examples

Real examples showing before/after or completed templates

## Troubleshooting

Common issues and their solutions

## Related Templates

Links to complementary templates
```

### Template Maintenance

#### 1. Version Management

- **Semantic versioning** - Use MAJOR.MINOR.PATCH for template updates
- **Change documentation** - Document what changed and why in each version
- **Migration guides** - Provide upgrade instructions for breaking changes
- **Backward compatibility** - Consider existing users when making changes

#### 2. Community Engagement

- **Gather feedback** - Actively seek input from template users
- **Monitor usage patterns** - Track which templates are most/least used
- **Community contributions** - Encourage and review user-submitted improvements
- **Regular updates** - Keep templates current with technology changes

#### 3. Quality Assurance

- **Template validation** - Ensure templates work as advertised
- **User testing** - Test templates with real users before release
- **Performance impact** - Consider how templates affect development speed
- **Accessibility** - Ensure templates support diverse development environments

#### 4. Documentation Maintenance

- **Update documentation** - Keep template docs current with code changes
- **Example maintenance** - Ensure all examples still work
- **Link validation** - Check that all referenced resources are still available
- **Screenshot updates** - Keep visual examples current

### Advanced Template Patterns

#### 1. Template Composition

Templates can be designed to work together:

```markdown
<!-- Base Template -->
<!-- extends: base-planning-template.md -->

<!-- Specialized Sections -->
<!-- include: security-considerations.md -->
<!-- include: api-integration-patterns.md -->
```

#### 2. Conditional Template Sections

For templates that need different content based on technology choices:

```markdown
# {{PROJECT_NAME}}

## Architecture Decision Record

### Technology Selection

{{#if REACT}}
**Frontend**: React with TypeScript
**State Management**: Redux Toolkit
**Styling**: CSS Modules
{{/if}}

{{#if VUE}}
**Frontend**: Vue 3 with Composition API
**State Management**: Pinia
**Styling**: Scoped CSS
{{/if}}

{{#if NODE}}
**Backend**: Node.js with Express
**Database**: PostgreSQL with Prisma
**Authentication**: JWT tokens
{{/if}}
```

#### 3. Template Metadata

Include metadata for better template discovery and management:

```yaml
---
template:
    name: 'api-integration-plan'
    version: '1.2.0'
    category: 'planning'
    technology: ['nodejs', 'typescript', 'rest']
    difficulty: 'intermediate'
    estimated_time: '2-3 hours'
    last_updated: '2024-01-15'
    author: 'Prompt Kit Team'
---
```

This metadata helps with:

- **Template discovery** - Finding the right template for your needs
- **Version management** - Tracking template evolution
- **Skill matching** - Choosing appropriate complexity levels
- **Time estimation** - Planning development schedules

## 🔗 Integration with AI Agents

### AI Agent Guidelines

Templates include specific guidance for AI agents:

- **Context awareness** - Understanding project context
- **Task decomposition** - Breaking down complex tasks
- **Progress tracking** - Monitoring implementation progress
- **Quality assurance** - Ensuring code quality standards

### Agent Interaction Patterns

1. **Planning Phase**:
    - Use templates to structure initial planning
    - Break down tasks systematically
    - Establish clear success criteria

2. **Implementation Phase**:
    - Follow template structures
    - Maintain consistency with project standards
    - Document decisions and rationale

3. **Review Phase**:
    - Use templates for code reviews
    - Ensure compliance with standards
    - Document lessons learned

## 📋 Template Roadmap

### Planned Template Categories

- **API Documentation Templates**
- **Testing Strategy Templates**
- **Deployment Configuration Templates**
- **Security Guidelines Templates**
- **Performance Optimization Templates**

### Template System Enhancements

- **Interactive Template Generation**
- **Template Versioning and History**
- **Template Validation and Testing**
- **Template Sharing and Distribution**

## 🚦 Template Validation

### Quality Checks

Templates should pass these quality checks:

- [ ] Clear, actionable content
- [ ] Consistent formatting and structure
- [ ] Appropriate level of detail
- [ ] Customizable for different use cases
- [ ] Well-documented usage instructions

### User Testing

Before finalizing templates:

1. **Internal testing** - Test with development team
2. **User feedback** - Gather input from potential users
3. **Documentation** - Ensure clear usage instructions
4. **Examples** - Provide concrete examples

## 📚 Related Documentation

- **[Main README](../../README.md)** - Project overview
- **[Documentation Index](./README.md)** - Back to documentation home
- **[Examples](./EXAMPLES.md)** - Template usage examples
- **[Development](./DEVELOPMENT.md)** - Development setup
- **[Contributing](./CONTRIBUTING.md)** - How to contribute templates

---

_Templates are the foundation of structured AI-assisted development. Well-designed templates make complex tasks manageable and ensure consistent quality across projects._
