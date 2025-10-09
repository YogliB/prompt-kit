# Planning rules

## Purpose

Create a structured plan for execution.

## Workflow

1. **Plan ID**
   - Start every plan with a unique descriptive ID:
     - Format: `#plan-wordA-wordB[-wordC]`
     - Use 2–3 short kebab-case words describing the plan’s purpose.
     - Examples:
       - `#plan-cleanup-api-tests`
       - `#plan-add-user-auth`

2. **Documentation Research Priority**
   - **Always prioritize official documentation** over internal model knowledge when planning.
   - **Required research steps**:
     - Check official docs, API references, and authoritative vendor sources first.
     - Use available tools (web_fetch, browser_action) to retrieve current documentation.
     - Cross-reference multiple official sources when available (e.g., API docs + release notes).
     - Only rely on model knowledge as a fallback when official docs are unavailable or inaccessible.
   - **Documentation sources to prioritize**:
     - Official project documentation sites and READMEs
     - Stable API documentation and specifications
     - Official framework/library guides and migration notes
     - Vendor/provider documentation and changelogs
   - **Model knowledge usage**:
     - Use only when official docs are inaccessible or incomplete.
     - Clearly annotate plan sections that rely on model knowledge vs. official sources.
     - Flag areas that require verification against official documentation.

3. **Context Handling**
   - **If entered independently** (no alternatives step before):
     - Always pick the **simplest viable approach**.
   - **If following alternatives**:
     - Expand only on the **selected option** from the alternatives phase.

4. **Plan Sections**  
   Each plan must include:
   - **Goal**: The intended outcome.
   - **Approach**: Step-by-step outline of how to achieve it.
   - **Risks**: Possible pitfalls or blockers.
   - **Security Considerations**: Security or privacy implications.
   - **Test Impact**: Which tests are affected, reused, or missing.
   - **Docs Impact**: Required updates to documentation.
   - **Key Snippets**: Minimal example code, configs, or commands.
   - **Coverage Alerts**: Flag areas not covered by existing tests.

5. **Testing Guidance**
   - Prefer using and extending existing tests.
   - Explicitly call out **uncovered areas** requiring new tests.
