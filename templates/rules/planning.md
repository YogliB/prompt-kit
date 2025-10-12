# Planning Rules

## Purpose

Create **highly actionable and detailed plans** that can be executed by an agent without ambiguity, even if the planning and execution models differ.

Each plan must include a **comprehensive TODO list** representing all major and minor implementation steps.

## Clarifying Questions

Ask clarifying questions until **ambiguity is under 10%**, based on:

- Missing details or edge cases.

- Conflicting or unclear assumptions.

- Unspecified goals, constraints, or dependencies.

Questions should be structured, concise, and grouped logically (e.g., by scope, risk, dependencies).

## Alternatives

- Provide **0–3 viable and distinct alternatives** before generating a plan.

- Each alternative must be **realistic, actionable, and aligned with the overall goal**.

- The user must **explicitly select one alternative** before plan expansion begins.

## Post-Selection Clarifying Questions

After an alternative is chosen, ask additional clarifying questions until **ambiguity is below 5%**.

Focus on technical specifics, edge behaviors, and validation requirements.

## Plan Template

1. **Plan ID / Version** – Unique identifier or version number for traceability.

2. **Goal** – Clear and measurable end objective of the plan.

3. **Scope** – Define what is included and excluded from the plan.

4. **Risks** – Identify uncertainties, potential blockers, or fragile assumptions.

5. **Dependencies / Constraints** – Specify external resources, APIs, data, environments, or time limits.

6. **Priority / Ordering** – Logical sequencing of tasks; indicate any parallelizable items.

7. **TODO List (Detailed Implementation Steps)** –

- Provide a **step-by-step breakdown** of all actions required to achieve the goal.

- Each item should be **atomic, testable, and self-explanatory**.

- Use nested checkboxes (`- [ ]` for subtasks) when appropriate.

- Include both implementation and validation tasks.

- Tasks must be detailed enough that another model could execute them without reinterpreting the intent.

8. **Testing / Docs / Acceptance** – Define verification steps, documentation updates, and acceptance criteria for completion.

9. **Fallback / Contingency** – Describe fallback options, mitigation steps, or alternatives. If none, explicitly state “No fallback needed.”

10. **References** – Include links to official documentation, prior plans, issues, or specs. If none, explicitly state “None.”

**Important:** The agent may mark any section as irrelevant **only if** a concise explanation is provided stating _why_ it does not apply.

## Agent Behavior Notes

- Always enforce clarifying question thresholds (<10% before selection, <5% after).

- Prioritize **official or authoritative documentation** over model knowledge.

- Never skip clarifications, alternative selection, or plan validation steps.

- Ensure **every section of the plan is complete, coherent, and internally consistent** before execution.

- Maintain **consistent Markdown formatting** with proper headings, numbered sections, and checkbox-based TODO lists.

- The **TODO list serves as the execution contract** — execution agents must follow it exactly unless instructed otherwise.

- If a section is marked “irrelevant,” include the rationale directly in the plan.

- Plans should be optimized for **traceability, reproducibility, and autonomy** during execution.

## Output Format Notes

When presenting the plan:

- Use clear Markdown hierarchy (`##`, `###`, etc.).

- Use bullet points, checkboxes, and numbering consistently.

- Preserve whitespace and indentation for nested tasks.

- Each plan must be **self-contained** — readable and executable without referring back to prior conversation.
