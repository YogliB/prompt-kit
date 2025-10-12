# 📋 Examples

Comprehensive examples showcasing how to use Prompt Kit effectively for AI-assisted development workflows.

## 🎯 Overview

This guide provides practical, real-world examples of using Prompt Kit to enhance your development process. From basic CLI usage to advanced template customization, you'll learn how to leverage Prompt Kit's features for more structured and efficient AI-assisted development.

## 📚 Table of Contents

- **[Basic Usage](#basic-usage)** - CLI commands and simple workflows
- **[Development Environment Setup](#development-environment-setup)** - VSCode configuration and workspace optimization
- **[Template Usage](#template-usage)** - Practical template applications with real scenarios
- **[Practical Workflows](#practical-workflows)** - Complete development workflows
- **[Template Demonstrations](#template-demonstrations)** - Before/after comparisons and best practices

---

## 🚀 Basic Usage

### CLI Commands

**Getting Started with Prompt Kit:**

```bash
# Check installation and version
prompt-kit --version
# Output: v0.0.0

# Display help information
prompt-kit --help
# Shows available commands and usage examples

# Basic greeting (demonstrates CLI functionality)
prompt-kit
# Output: Hello, World! Welcome to Prompt Kit - your developer prompt utilities toolkit.

# Custom greeting
prompt-kit "Your Name"
# Output: Hello, Your Name! Welcome to Prompt Kit - your developer prompt utilities toolkit.
```

**Common CLI Patterns:**

```bash
# Verify Prompt Kit is working
prompt-kit

# Get help for troubleshooting
prompt-kit --help

# Check for updates (when available)
prompt-kit --version
```

### Template Management

**Copying and customizing templates:**

```bash
# Copy the planning template for your project
cp templates/rules/planning.md my-project/docs/ai-planning-rules.md

# Make it project-specific by editing the copied file
# Add your project name, specific requirements, and team guidelines
```

**Template Organization:**

```
your-project/
├── docs/
│   └── ai-planning-rules.md    # Customized from Prompt Kit template
├── src/
│   └── [your source files]
└── README.md
```

---

## 🛠️ Development Environment Setup

### VSCode Configuration

**Basic VSCode Workspace Settings for AI Development:**

```json
// .vscode/settings.json
{
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"typescript.preferences.quoteStyle": "double",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit"
	},
	"files.associations": {
		"*.md": "markdown",
		"*.plan": "markdown"
	},
	"markdown.preview.breaks": true,
	"git.confirmSync": false,
	"explorer.fileNesting.enabled": true,
	"explorer.fileNesting.expand": false,
	"explorer.fileNesting.patterns": {
		"*.md": "${capture}.*.md",
		"planning.md": "rules.md, guidelines.md"
	}
}
```

**Recommended VSCode Extensions for Prompt Kit Users:**

```json
// .vscode/extensions.json
{
	"recommendations": [
		"ms-vscode.vscode-typescript-next",
		"esbenp.prettier-vscode",
		"dbaeumer.vscode-eslint",
		"ms-vscode.vscode-json",
		"yzhang.markdown-all-in-one",
		"bierner.markdown-preview-github-styles",
		"ms-vscode.powershell",
		"ms-vscode-remote.remote-containers",
		"github.copilot",
		"ms-vscode.vscode-ai"
	],
	"unwantedRecommendations": ["ms-vscode.vscode-typescript"]
}
```

### Workspace Optimization

**Project Structure for AI-Assisted Development:**

```
your-project/
├── .vscode/
│   ├── settings.json           # AI-optimized editor settings
│   ├── extensions.json         # Recommended extensions
│   ├── launch.json            # Debug configurations
│   └── tasks.json             # Build and automation tasks
├── docs/
│   ├── planning-template.md   # Customized planning rules
│   ├── development-guide.md   # Team development practices
│   └── ai-guidelines.md       # AI agent interaction rules
├── src/
│   ├── core/
│   ├── features/
│   └── utils/
├── templates/
│   ├── planning/              # Project-specific templates
│   └── rules/                 # Custom rule files
├── tests/
└── README.md
```

---

## 📝 Template Usage

### Planning Template in Action

**Scenario: Building a User Authentication System**

Here's how you'd use the planning template for a real feature:

```markdown
# User Authentication System - Planning Document

## Project Context

- **Project**: E-commerce Platform
- **Scope**: Complete user authentication with social login
- **Timeline**: 2 weeks (10 working days)
- **Team**: Frontend (2), Backend (2), QA (1)

## Technical Requirements

- **Technologies**: React, Node.js, MongoDB, JWT
- **Constraints**: Must support mobile and web, GDPR compliant
- **Dependencies**: Email service, SMS service, social OAuth providers

## Implementation Approach

1. **Setup & Architecture** (Days 1-2)
    - Design authentication flow diagrams
    - Set up project structure and dependencies
    - Configure development environment

2. **Backend API Development** (Days 3-7)
    - User model and database schema
    - Registration and login endpoints
    - JWT token generation and validation
    - Password reset functionality

3. **Frontend Integration** (Days 8-10)
    - Login/register UI components
    - API integration
    - Error handling and validation
    - Mobile responsiveness

4. **Testing & Documentation** (Days 11-12)
    - Unit tests for authentication functions
    - Integration tests for API endpoints
    - Security testing
    - User documentation

## Success Criteria

- [ ] Users can register with email/password
- [ ] Users can login and receive valid JWT tokens
- [ ] Password reset flow works end-to-end
- [ ] Social login integration functional
- [ ] Mobile-responsive design implemented
- [ ] All code passes security audit
- [ ] Documentation completed for users and developers

## Risks & Mitigations

- **OAuth provider downtime**: Implement fallback options
- **Database performance**: Add proper indexing and caching
- **Security vulnerabilities**: Regular security audits and updates

## Testing Strategy

- Unit tests for individual functions
- Integration tests for complete flows
- Security testing with common attack vectors
- User acceptance testing across devices

## Documentation Requirements

- API endpoint documentation
- User guide for authentication flows
- Developer setup instructions
- Security considerations and best practices

## References

- [OAuth 2.0 Specification](https://tools.ietf.org/html/rfc6749)
- [JWT Standards](https://tools.ietf.org/html/rfc7519)
- [Project Architecture Document](./ARCHITECTURE.md)
```

### Custom Rule Files

**Project-Specific AI Agent Rules:**

```markdown
# E-commerce Platform - AI Agent Rules

## Code Quality Standards

- Use TypeScript for all new code
- Maintain test coverage above 80%
- Follow conventional commit messages
- Maximum file size: 200 lines for components, 300 for services

## Development Workflow

1. **Planning**: Create detailed plan using planning template
2. **Implementation**: Follow TODO list exactly
3. **Review**: Self-review code before requesting human review
4. **Testing**: Write tests alongside implementation
5. **Documentation**: Update docs as features are completed

## File Organization
```

src/
├── components/ # Reusable UI components
│ ├── common/ # Shared across features
│ └── features/ # Feature-specific components
├── services/ # API and external service integrations
├── types/ # TypeScript type definitions
├── utils/ # Helper functions and constants
└── styles/ # Global styles and themes

```

## API Integration Patterns
- Use React Query for server state management
- Implement proper error handling for all API calls
- Include loading states for better UX
- Handle network errors gracefully

## Performance Requirements
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- First Input Delay < 100ms

## Security Guidelines
- Validate all user inputs on both client and server
- Implement proper CORS policies
- Use HTTPS for all API communications
- Regular dependency updates for security patches

## AI Agent Specific Instructions
- Ask clarifying questions when requirements are ambiguous
- Provide alternatives when multiple approaches are valid
- Break down complex tasks into manageable steps
- Include testing instructions for all new features
- Document any assumptions made during implementation
```

---

## 🔄 Practical Workflows

### Complete Feature Development Workflow

**Step 1: Project Initialization**

```bash
# Set up new project structure
mkdir my-new-project
cd my-new-project
npm init -y

# Copy relevant templates from Prompt Kit
cp ../path-to-prompt-kit/templates/rules/planning.md docs/ai-planning-rules.md
cp ../path-to-prompt-kit/templates/rules/planning.md docs/feature-planning-template.md
```

**Step 2: Planning Phase**

1. **Analyze Requirements**: Review feature requirements and break down into actionable tasks
2. **Create Feature Plan**: Use the planning template to structure the implementation
3. **Set Up Development Environment**: Configure VSCode with AI-friendly settings

**Step 3: Implementation Phase**

```typescript
// Example: User authentication service
// File: src/services/auth.service.ts
export class AuthService {
	private baseURL: string;

	constructor() {
		this.baseURL =
			process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
	}

	async login(email: string, password: string): Promise<AuthResponse> {
		try {
			const response = await fetch(`${this.baseURL}/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error('Login failed');
			}

			return await response.json();
		} catch (error) {
			console.error('Authentication error:', error);
			throw error;
		}
	}

	async register(userData: RegisterData): Promise<AuthResponse> {
		// Implementation following project patterns
	}

	async resetPassword(email: string): Promise<void> {
		// Implementation following project patterns
	}
}
```

**Step 4: Testing & Documentation**

```typescript
// Example: Auth service tests
// File: src/services/__tests__/auth.service.test.ts
import { AuthService } from '../auth.service';

describe('AuthService', () => {
	let authService: AuthService;

	beforeEach(() => {
		authService = new AuthService();
	});

	describe('login', () => {
		it('should successfully authenticate user', async () => {
			// Test implementation
		});

		it('should handle login failures gracefully', async () => {
			// Test error handling
		});
	});
});
```

### Documentation Creation Workflow

**Creating Project Documentation:**

```markdown
# Project Documentation Workflow

## 1. Setup Documentation Structure
```

docs/
├── README.md # Project overview
├── ARCHITECTURE.md # System architecture
├── DEVELOPMENT.md # Development setup
├── API.md # API documentation
├── ai-guidelines.md # AI agent rules
└── examples/ # Usage examples

```

## 2. Use Templates for Consistency
- Copy planning template for documentation planning
- Use rule templates for writing guidelines
- Create examples using established patterns

## 3. Documentation Standards
- Clear headings and structure
- Code examples for all APIs
- Screenshots for UI features
- Step-by-step instructions
- Regular updates as features evolve
```

### Code Quality Improvement Workflow

**Systematic Code Quality Enhancement:**

```markdown
# Code Quality Improvement Plan

## Assessment Phase

1. **Analyze Current Codebase**
    - Review existing code patterns
    - Identify inconsistencies
    - Check test coverage
    - Assess documentation completeness

2. **Set Quality Standards**
    - Define coding conventions
    - Establish testing requirements
    - Create documentation templates
    - Set up linting and formatting rules

## Implementation Phase

1. **Fix Critical Issues**
    - Security vulnerabilities
    - Performance bottlenecks
    - Broken functionality

2. **Improve Code Structure**
    - Refactor large files
    - Extract reusable components
    - Improve naming conventions
    - Add proper error handling

3. **Enhance Testing**
    - Add missing unit tests
    - Create integration tests
    - Implement end-to-end testing
    - Set up automated testing

4. **Update Documentation**
    - Document new features
    - Update API references
    - Add code examples
    - Create user guides

## Maintenance Phase

- Regular code reviews
- Automated quality checks
- Continuous integration setup
- Team training on standards
```

---

## 🎨 Template Demonstrations

### Before/After Template Usage

**Before Using Prompt Kit Templates:**

```
Unstructured development approach:
├── No clear planning process
├── Inconsistent code quality
├── Missing documentation
├── Unclear AI agent instructions
└── Repeated setup work for each feature
```

**After Using Prompt Kit Templates:**

```
Structured AI-assisted development:
├── ✅ Systematic planning with clear TODOs
├── ✅ Consistent code quality standards
├── ✅ Comprehensive documentation
├── ✅ Clear AI agent behavior guidelines
├── ✅ Reusable templates for common tasks
└── ✅ Faster, more predictable development cycles
```

### Template Customization Examples

**Custom Planning Template for API Development:**

```markdown
# API Development Plan - {{PROJECT_NAME}}

## API Overview

- **Purpose**: {{API_PURPOSE}}
- **Version**: v{{API_VERSION}}
- **Base URL**: {{BASE_URL}}

## Endpoints to Implement

### Authentication Endpoints

- [ ] POST /auth/login - User login
- [ ] POST /auth/register - User registration
- [ ] POST /auth/refresh - Token refresh
- [ ] POST /auth/logout - User logout

### Core Feature Endpoints

{{FEATURE_ENDPOINTS}}

## Implementation Checklist

- [ ] Database schema design
- [ ] API route definitions
- [ ] Request/response models
- [ ] Input validation middleware
- [ ] Error handling
- [ ] Authentication middleware
- [ ] Rate limiting
- [ ] API documentation
- [ ] Unit tests
- [ ] Integration tests

## Security Requirements

- JWT token authentication
- Password hashing with bcrypt
- Rate limiting (100 requests/minute)
- Input sanitization
- CORS configuration
- HTTPS enforcement

## Performance Targets

- Response time < 200ms for simple endpoints
- Database query optimization
- Caching strategy for frequently accessed data
- Proper indexing on database fields

## Documentation Deliverables

- OpenAPI/Swagger specification
- API endpoint documentation
- Authentication flow diagrams
- Error code reference
- SDK examples for common languages
```

**Custom Rule File for Team Collaboration:**

```markdown
# Team Development Rules - {{TEAM_NAME}}

## Communication Standards

- Use clear, descriptive commit messages
- Document all API changes in #api-changes channel
- Update team wiki for significant changes
- Use @mentions for urgent issues

## Code Review Process

1. **Self-Review**: Check your own code before requesting review
2. **Team Review**: Request review from at least 2 team members
3. **Quality Checks**: Ensure all tests pass and linting is clean
4. **Merge Requirements**: All review comments must be addressed

## Development Workflow

1. Create feature branch from main
2. Implement feature following planning template
3. Write tests and update documentation
4. Submit pull request with clear description
5. Address review feedback
6. Merge after approval

## File Naming Conventions

- Components: PascalCase (UserProfile.tsx)
- Services: camelCase (userService.ts)
- Utils: camelCase (stringUtils.ts)
- Tests: PascalCase.test.ts (UserService.test.ts)
- Documentation: kebab-case (api-documentation.md)

## AI Agent Guidelines for Team Projects

- Always ask for clarification on ambiguous requirements
- Provide multiple implementation approaches when applicable
- Follow existing code patterns and conventions
- Include comprehensive error handling
- Write tests for all new functionality
- Document complex business logic
- Consider edge cases and error scenarios

## Project-Specific Patterns

### Database Operations

- Use repository pattern for data access
- Implement proper transaction handling
- Include database indexes for performance
- Handle database connection errors gracefully

### API Design

- Use RESTful conventions
- Implement proper HTTP status codes
- Include detailed error messages
- Support pagination for list endpoints
- Use consistent request/response formats

### Error Handling

- Create custom error types for different scenarios
- Log errors with appropriate levels
- Return user-friendly error messages
- Implement proper error recovery mechanisms
```

### Best Practices for Template Usage

**1. Start Simple, Then Customize**

```bash
# Begin with basic template
cp templates/rules/planning.md docs/planning-template.md

# Use as-is for first few projects
# Then gradually customize for your team's needs
```

**2. Create Project-Specific Variants**

```
templates/
├── planning/
│   ├── basic-planning.md          # Simple projects
│   ├── api-planning.md           # API-focused projects
│   ├── frontend-planning.md      # Frontend projects
│   └── fullstack-planning.md     # Complete applications
└── rules/
    ├── basic-rules.md            # Simple projects
    ├── api-rules.md              # API development
    └── team-rules.md             # Team collaboration
```

**3. Regular Template Reviews**

- Review templates every sprint
- Update based on lessons learned
- Remove obsolete sections
- Add new best practices
- Share improvements with team

---

## 🔗 Related Documentation

- **[📖 Main Documentation](./README.md)** - Complete documentation overview
- **[🏗️ Architecture](./ARCHITECTURE.md)** - System design and technical details
- **[📐 Templates](./TEMPLATES.md)** - Template system guide
- **[💻 Development](./DEVELOPMENT.md)** - Development setup and guidelines
- **[🤝 Contributing](./CONTRIBUTING.md)** - How to contribute to Prompt Kit

## 🚀 Getting Started

Ready to start using Prompt Kit? Here's your quick start checklist:

- [ ] **Install Prompt Kit** and verify with `prompt-kit --version`
- [ ] **Copy templates** for your project type
- [ ] **Customize templates** for your specific needs
- [ ] **Set up VSCode** with recommended configurations
- [ ] **Create your first plan** using the planning template
- [ ] **Start implementing** following the structured approach

---

_Prompt Kit empowers AI-assisted development through structured templates and clear guidelines. Start with the examples above and customize them for your specific projects and team needs._
