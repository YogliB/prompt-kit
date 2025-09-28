<!--
Sync Impact Report

Version change: 0.0.0 -> 0.1.0
Modified principles:
- (new) Code Quality & Maintainability
- (new) Testing Standards (TDD & Quality Gates)
- (new) User Experience Consistency
- (new) Performance Requirements
- (added) Simplicity & Observability (renamed/expanded)
Added sections: Development Constraints, Development Workflow & Quality Gates
Removed sections: none
Templates requiring updates:
- .specify/templates/plan-template.md ✅ (Constitution Check aligns with principles)
- .specify/templates/spec-template.md ✅ (Mandatory sections align)
- .specify/templates/tasks-template.md ✅ (Task rules align with TDD requirement)
- .specify/templates/agent-file-template.md ⚠ pending manual review (/specify/templates/agent-file-template.md)
Follow-up TODOs:
- TODO(RATIFICATION_DATE): confirm historical ratification date if earlier adoption exists
- Manual review: agent-file-template.md to ensure example placeholders meet new Principle language
-->

# prompt-kit Constitution

## Core Principles

### Code Quality & Maintainability

All source code MUST be clear, modular, and maintainable. Developers MUST prefer explicitness over cleverness. Code MUST be documented at the module and public-function level, and every public API or exported function MUST include a short usage example or reference in the repository docs. Pull requests that add or modify behavior MUST include targeted unit tests and a changelog entry when behavior changes.

Rationale: High-quality code reduces onboarding time, prevents regressions, and makes future changes tractable.

### Testing Standards (Test-First, Non-Negotiable)

Testing is mandatory. Feature development MUST follow a test-first workflow: write failing tests that express the expected behavior, then implement to make tests pass. The repository MUST include unit tests for logic-heavy code, integration tests for interactions between modules or external systems, and contract tests for public interfaces. All tests MUST run deterministically in CI and MUST be part of the pre-merge checks.

Rationale: Tests provide a safety net for refactoring and ensure the product behaves as expected across changes.

### User Experience Consistency

All user-facing behavior (CLI output, error messages, configuration semantics) MUST be consistent and discoverable. CLI commands MUST follow the established style: clear descriptions, consistent flag naming, machine-friendly output (JSON) behind a flag, and human-friendly defaults. Error messages MUST explain the cause and, where actionable, a remediation step.

Rationale: Consistent UX reduces user errors and support burden and improves automation and integration.

### Performance Requirements

Performance targets for features MUST be stated in the spec and validated with a lightweight benchmark or performance test where applicable. Non-functional requirements (latency, memory, throughput) MUST be specified in acceptance criteria for features that impact runtime behavior. Changes that degrade performance beyond stated thresholds MUST include a justification and a mitigation plan.

Rationale: Measured performance goals prevent regressions and ensure the project meets practical usage constraints.

### Simplicity & Observability

Design choices MUST favor simplicity. YAGNI applies: avoid building unrequested abstractions. Systems MUST be observable: logging, structured where practical, and errors MUST be recorded with context sufficient for diagnosis. New features MUST include a short observability checklist (logs, metrics, basic traces) in their spec when they affect runtime behavior.

Rationale: Simplicity minimizes maintenance cost; observability reduces time-to-diagnose production issues.

<!--
Sync Impact Report

Version change: 0.0.0 -> 0.1.0
Modified principles:
- (new) Code Quality & Maintainability
- (new) Testing Standards (TDD & Quality Gates)
- (new) User Experience Consistency
- (new) Performance Requirements
- (added) Simplicity & Observability (renamed/expanded)
Added sections: Development Constraints, Development Workflow & Quality Gates
Removed sections: none
Templates requiring updates:
- .specify/templates/plan-template.md ✅ (Constitution Check aligns with principles)
- .specify/templates/spec-template.md ✅ (Mandatory sections align)
- .specify/templates/tasks-template.md ✅ (Task rules align with TDD requirement)
- .specify/templates/agent-file-template.md ⚠ pending manual review (/specify/templates/agent-file-template.md)
Follow-up TODOs:
- TODO(RATIFICATION_DATE): confirm historical ratification date if earlier adoption exists
- Manual review: agent-file-template.md to ensure example placeholders meet new Principle language
-->

# prompt-kit Constitution

## Core Principles

### Code Quality & Maintainability

All source code MUST be clear, modular, and maintainable. Developers MUST prefer explicitness over cleverness. Code MUST be documented at the module and public-function level, and every public API or exported function MUST include a short usage example or reference in the repository docs. Pull requests that add or modify behavior MUST include targeted unit tests and a changelog entry when behavior changes.

Rationale: High-quality code reduces onboarding time, prevents regressions, and makes future changes tractable.

### Testing Standards (Test-First, Non-Negotiable)

Testing is mandatory. Feature development MUST follow a test-first workflow: write failing tests that express the expected behavior, then implement to make tests pass. The repository MUST include unit tests for logic-heavy code, integration tests for interactions between modules or external systems, and contract tests for public interfaces. All tests MUST run deterministically in CI and MUST be part of the pre-merge checks.

Rationale: Tests provide a safety net for refactoring and ensure the product behaves as expected across changes.

### User Experience Consistency

All user-facing behavior (CLI output, error messages, configuration semantics) MUST be consistent and discoverable. CLI commands MUST follow the established style: clear descriptions, consistent flag naming, machine-friendly output (JSON) behind a flag, and human-friendly defaults. Error messages MUST explain the cause and, where actionable, a remediation step.

Rationale: Consistent UX reduces user errors and support burden and improves automation and integration.

### Performance Requirements

Performance targets for features MUST be stated in the spec and validated with a lightweight benchmark or performance test where applicable. Non-functional requirements (latency, memory, throughput) MUST be specified in acceptance criteria for features that impact runtime behavior. Changes that degrade performance beyond stated thresholds MUST include a justification and a mitigation plan.

Rationale: Measured performance goals prevent regressions and ensure the project meets practical usage constraints.

### Simplicity & Observability

Design choices MUST favor simplicity. YAGNI applies: avoid building unrequested abstractions. Systems MUST be observable: logging, structured where practical, and errors MUST be recorded with context sufficient for diagnosis. New features MUST include a short observability checklist (logs, metrics, basic traces) in their spec when they affect runtime behavior.

Rationale: Simplicity minimizes maintenance cost; observability reduces time-to-diagnose production issues.

<!--
Sync Impact Report

Version change: 0.0.0 -> 0.1.0
Modified principles:
- (new) Code Quality & Maintainability
- (new) Testing Standards (TDD & Quality Gates)
- (new) User Experience Consistency
- (new) Performance Requirements
- (added) Simplicity & Observability (renamed/expanded)
Added sections: Development Constraints, Development Workflow & Quality Gates
Removed sections: none
Templates requiring updates:
- .specify/templates/plan-template.md ✅ (Constitution Check aligns with principles)
- .specify/templates/spec-template.md ✅ (Mandatory sections align)
- .specify/templates/tasks-template.md ✅ (Task rules align with TDD requirement)
- .specify/templates/agent-file-template.md ⚠ pending manual review (.specify/templates/agent-file-template.md)
Follow-up TODOs:
- TODO(RATIFICATION_DATE): confirm historical ratification date if earlier adoption exists
- Manual review: agent-file-template.md to ensure example placeholders meet new Principle language
-->

# prompt-kit Constitution

## Core Principles

### Code Quality & Maintainability

All source code MUST be clear, modular, and maintainable. Developers MUST prefer explicitness over cleverness. Code MUST be documented at the module and public-function level, and every public API or exported function MUST include a short usage example or reference in the repository docs. Pull requests that add or modify behavior MUST include targeted unit tests and a changelog entry when behavior changes.

Rationale: High-quality code reduces onboarding time, prevents regressions, and makes future changes tractable.

### Testing Standards (Test-First, Non-Negotiable)

Testing is mandatory. Feature development MUST follow a test-first workflow: write failing tests that express the expected behavior, then implement to make tests pass. The repository MUST include unit tests for logic-heavy code, integration tests for interactions between modules or external systems, and contract tests for public interfaces. All tests MUST run deterministically in CI and MUST be part of the pre-merge checks.

Rationale: Tests provide a safety net for refactoring and ensure the product behaves as expected across changes.

### User Experience Consistency

All user-facing behavior (CLI output, error messages, configuration semantics) MUST be consistent and discoverable. CLI commands MUST follow the established style: clear descriptions, consistent flag naming, machine-friendly output (JSON) behind a flag, and human-friendly defaults. Error messages MUST explain the cause and, where actionable, a remediation step.

Rationale: Consistent UX reduces user errors and support burden and improves automation and integration.

### Performance Requirements

Performance targets for features MUST be stated in the spec and validated with a lightweight benchmark or performance test where applicable. Non-functional requirements (latency, memory, throughput) MUST be specified in acceptance criteria for features that impact runtime behavior. Changes that degrade performance beyond stated thresholds MUST include a justification and a mitigation plan.

Rationale: Measured performance goals prevent regressions and ensure the project meets practical usage constraints.

### Simplicity & Observability

Design choices MUST favor simplicity. YAGNI applies: avoid building unrequested abstractions. Systems MUST be observable: logging, structured where practical, and errors MUST be recorded with context sufficient for diagnosis. New features MUST include a short observability checklist (logs, metrics, basic traces) in their spec when they affect runtime behavior.

Rationale: Simplicity minimizes maintenance cost; observability reduces time-to-diagnose production issues.

## Development Constraints

- Supported Node.js range MUST match `package.json.engines` and CI environments.
- Formatting and linting tools defined in `package.json` (Prettier, ESLint) MUST run as part of CI and pre-commit hooks via `lint-staged` and `husky`.
- Security-sensitive changes (deps, auth, data-handling) MUST include a short threat model and at least one security-focused test or review note.

## Development Workflow & Quality Gates

- All work MUST be done on feature branches. Each PR MUST target the default branch and include a descriptive title and a short testing checklist.
- CI gates MUST enforce: linting, unit tests, integration tests (where present), and contract tests for any changed public interfaces.
- PRs that change public behavior MUST include a migration note in the changelog and an updated quickstart or README example where applicable.

## Governance

Amendments to this constitution MUST be proposed as a pull request against `.specify/memory/constitution.md` with the following artifacts: the proposed text, a short rationale, and a migration plan for any changes that affect existing code or automation. A constitution amendment MUST be approved by at least one maintainer and one additional reviewer (2 approvals) and merged during a non-emergency window.

Versioning policy:

- The constitution uses semantic versioning in the form MAJOR.MINOR.PATCH.
- MAJOR increases when principles are removed or redefined in a backward-incompatible way.
- MINOR increases when a new principle or substantive section is added.
- PATCH increases for clarifications, wording fixes, and non-substantive edits.

Compliance and reviews:

- Every PR MUST include a brief line indicating which constitution principles the change touches (e.g., "Principles: Testing Standards, UX Consistency").
- The repository's `/plan` and `/tasks` generation commands MUST include a Constitution Check step; violations MUST be documented and justified in the plan's Complexity Tracking section.

**Version**: 0.1.0 | **Ratified**: 2025-09-28 | **Last Amended**: 2025-09-28
