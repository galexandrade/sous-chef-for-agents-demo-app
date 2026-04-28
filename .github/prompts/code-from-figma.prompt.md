---
agent: Senior Developer
description: 'Create implementation-ready code from a Figma design using existing Sous Chef components whenever possible.'
argument-hint: 'Provide a Jira ticket key (e.g. XD-123) or a Figma file URL'
---

Create implementation-ready code from a Figma design using existing Sous Chef components whenever possible.

## Inputs

- Jira URL,
- Figma URL,
- Tech stack constraints (if any)

## Required workflow

0. Read the Jira design context first (if provided). If there is a Figma file linked, open it and review the design. The Figma design is in a custom field called design and should be accessible as 'customfield_10154'.
1. Read the Figma design context and identify which components are tied to a Library. Figma is the source of truth and should be complementary to the Jira ticket. If the Figma design is not clear or you cannot find it, ask for clarification or a direct link to the Figma design before proceeding. Do not assume you can find the design on your own or that it is not necessary for the task.
2. Review the existing code to determine the necessary changes needed to implement the design. This will help you understand which components and patterns are already in place and which ones you can reuse.
3. Discover available Storybook components and docs.
4. Map each UI element in Figma to an existing Sous Chef component if one exists. Figma components tied to a library indicate they most likely have a corresponding story in Storybook.
5. For uncomponentized Figma text, map it to the Sous Chef Text component using the closest documented size/emphasis/alignment variant inferred from Figma typography styles.
6. Use stories and documentation to compare against the Figma component and its properties/variants to find the best match. If there is no exact match, find the closest one and present it as an option before proceeding.
7. For each mapped component, confirm the exact import symbol name and package source used by the target project.
8. Provide a mapping report of Figma elements (include link to node) -> Storybook component IDs (provide link to docs) -> chosen props. Get user approval on the proposed component mapping and any assumptions made before generating code.
9. Generate code that matches project conventions.
10. Run a typecheck or build validation step after code generation and fix any component import/prop mismatches before final output.

## Tooling rules

### Figma

- Use Figma MCP to gather design context from the provided URL.
- Prefer extracting structure, spacing, typography, hierarchy, and state requirements.
- Check how Figma components are tied to their Libraries, since that indicates they likely map to a Sous Chef component and corresponding Storybook story.
- If the design has ambiguity, list assumptions explicitly.
- Treat uncomponentized Figma text that IS NOT within another component as a candidate for the Text component. Use Figma typography styles to determine the closest documented Text variant.
- When autolayout is used to achieve spacing or positioning, consider the use of the Stack or Inline components which can provide similar layout capabilities while respecting existing code patterns.

### Storybook (read-only)

- Use `list-all-documentation` first to find candidate components.
- Use `get-documentation` for each chosen component to validate props and usage.
- Use `get-documentation-for-story` when variant-specific behavior is needed.
- Use `preview-stories` to validate visual fit of selected components.
- Do not create or modify Storybook stories in this workflow.
- Do not assume component APIs from memory. If a prop is not documented, do not use it.

## Component selection policy

- Reuse existing Sous Chef components before creating custom UI.
- If no exact match exists, choose the closest documented component and explain tradeoffs and verify with user.
- Find the exact imported symbol for the chosen component and confirm it exists in the project package exports before generating code.
- For Figma text nodes that are not within another component, prefer the Text component instead of raw heading/paragraph tags when a documented Text variant can satisfy the design intent.
- Allow the user to override component choices when you ask to verify the mapping, do not proceed without explicit approval.
- Never invent undocumented props.

## Output format

Return results in this order:

1. **Component mapping table**
	- Columns: Figma element (linked to node), Storybook component name (linked to docs), chosen variant/story, exact import symbol name to be used in code, package source, props used, notes
	- For uncomponentized text rows that are not within another component, include Figma typography style and selected Text variant rationale.
	- Only map items that are being added or updated to implement the design. Do not include components that are already correctly implemented in the existing code unless they need to be changed.
2. **Implementation plan**
	- Short, ordered steps
3. **Code**
	- Final code for {{TARGET_FILE_OR_FOLDER}}
4. **Validation notes**
	- Which Storybook docs/stories were used to verify choices
	- Which typecheck/build command was run and whether imports/props were validated successfully
5. **Assumptions and gaps**
	- Any unresolved design or API ambiguity

## Quality bar

- Match spacing/layout intent from Figma while respecting existing codebase patterns.
- Keep changes minimal and review-friendly.
- Ensure generated code is coherent, compilable, and readable.
- Prefer composition over custom styling when a Sous Chef component already solves the need.
- There should never be loose text nodes or raw HTML elements when a Text component variant or another appropriate component can be used.
- Layout matches design, if the components themselves have variants for spacing or layout, use that, otherwise use Stack/Inline to achieve the correct layout without adding custom CSS.

## Guardrails

- Do not modify business logic unless explicitly requested.
- Do not invent design tokens; use existing project tokens/variables.
- Do not claim a prop exists unless confirmed via Storybook documentation.
- Do not proceed to code generation without user approval of the mapping table.
- Do not use a component import symbol unless it is verified to exist in the target package exports.
