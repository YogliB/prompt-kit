# Planning Rules

## Purpose

Create structured, verifiable plans that can later be executed through Cline.  
All plans must adhere to **ai/templates/plan.template.md** and transition cleanly into executable Cline rule files.

---

## Clarifying Questions & Alternatives

Before proposing a plan:

- Ask clarifying questions until ambiguity is <10% or user explicitly approves assumptions.
- Present up to **3 alternatives** for implementation (0–3 allowed).

Each **Alternative** must include:

- A one-line summary.
- Optional minimal code or command snippet with language label (e.g., ts, bash, py).
- A clear note on which parts rely on **official documentation** vs **model knowledge**.

Once all alternatives are presented:

- The user must **select exactly one** before proceeding.
- Only the **selected alternative** is expanded into a full plan.

---

## Workflow

### 1. Plan Creation

- Every plan is generated based on **ai/templates/plan.template.md**.
- Each section (Goal, Scope, Risks, etc.) must follow the template structure.
- Remove unused sections before finalizing.

### 2. Plan ID

- Start every plan with a unique ID:
    - Format: `#plan-YYYY-MM-wordA-wordB[-wordC]`
    - Examples:
        - `#plan-2025-10-cleanup-api-tests`
        - `#plan-2025-10-add-user-auth`

### 3. Documentation Research

- Always prioritize **official documentation** over model knowledge.
- Use available tools to retrieve up-to-date references, e.g., `web_fetch`, `browser_action`, or any other active retrieval tool.
- Clearly mark which parts of the plan rely on official docs vs model knowledge.

### 4. Plan-to-Execution Transition

After a plan is finalized and the **user starts execution mode**, the plan must be:

- Written **by Cline**, **not programmatically**, into a **Cline rules file**.
- The rule file must be stored in:
  .clinerules/plans/[plan-id].md
- The file must follow **exactly the same structure** and section order defined in  
  `.ai/templates/plan.template.md`.
- This ensures the plan and its execution logic remain synchronized.

---

### 5. Plan-to-File Step After Plan Mode

**Purpose:** Ensure that every plan generated in Plan Mode is written to a `.clinerules` markdown file **before any execution begins**.

**Trigger Rule:**

1. After the plan is finalized in Plan Mode, **Cline must write the plan** to `.clinerules/plans/[plan-id].md` immediately.
2. The plan file must follow **exactly the same structure** and section order as `.ai/templates/plan.template.md`.
3. Internal TODOs may be more detailed, but only the high-level tasks from the finalized plan are included in the file.
4. No Act Mode execution occurs until the plan file exists on disk.

**Workflow Integration:**

- Step 1: User approves plan in Plan Mode.
- Step 2: Cline writes plan to `.clinerules/plans/[plan-id].md`.
- Step 3: User switches to Act Mode (⌘⇧A) to begin task execution.

**Notes:**

- Ensures a **persistent record of the approved plan** exists, separate from internal execution tracking.
- Manual edits to the `.clinerules` file must remain consistent with the plan template structure.
- Optional: Add a confirmation log stating the file was created successfully.

---

### 6. Context & Expansion

- If no alternatives were given, use the simplest viable approach.
- If alternatives exist, expand **only** the selected option into the plan and later into the `.clinerules` rule file.

## Detailed TODO List Guidelines

The plan must end with a **Detailed TODO List** section that serves as the execution checklist.  
This list becomes the actionable portion of the `.clinerules` plan.

**Checklist Requirements:**

- Markdown checkbox format (`- [ ]`, `- [x]`).
- Logical dependency order.
- Each task = one clear, atomic action.
- Include file paths or responsible roles when relevant.
- Include time estimates (`est: 30m`, etc.).
- Link related docs or issues.
- End with final acceptance and validation tasks.

---

## Testing & Documentation Impact

Each plan should explicitly define:

- Which tests must be updated or added.
- Which docs need revision or extension.
- Any security or coverage implications.

---

## Execution Notes

Once the plan is converted to `.clinerules/plans/[plan-id].md`, Cline:

- Interprets and enforces the rules automatically.
- Updates TODO states in real-time.
- Marks completion when all acceptance criteria are met.

Manual edits to `.clinerules` plan files are allowed but must remain consistent with  
the source structure in `.ai/templates/plan.template.md`.

---

### Reference

- Plan Template: **.ai/templates/plan.template.md**
- Execution Destination: **.clinerules/plans/[plan-id].md**
