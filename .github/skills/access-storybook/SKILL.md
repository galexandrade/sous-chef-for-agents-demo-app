---
name: access-storybook
description: 'How to access Storybook to view and interact with UI components.'
---

# Access Storybook

How to access Storybook to view and interact with UI components.

## When to use this skill

- You need to view existing UI components.
- You want to interact with components to understand their behavior.
- You are searching for components that can be reused in your project.

## How to use this skill

When you need to find and validate the correct component usage from our design system, use this read-only workflow.

### 1. Connect through Storybook MCP

Use the storybook MCP server to connect to our Storybook instance. This will allow you to query for components and view them directly from the MCP environment.

### 2. Discover components first

Start with `list-all-documentation` to find the correct component IDs.

- Use `withStoryIds: true` if you will preview stories next.
- Do not guess IDs. Always copy IDs directly from tool output.

### 3. Read component docs before coding

Use `get-documentation` with the component ID returned from step 2.

- Confirm supported props, defaults, and examples.
- If a prop is not documented, do not assume it exists.

If you need details for a specific story variant, use `get-documentation-for-story`.

### 4. Preview existing stories for verification

Use `preview-stories` to visually confirm how documented variants look.

- Prefer preview by `storyId` when available.
- Use `absoluteStoryPath + exportName` only if you already have story-file context.

### 5. Keep this workflow read-only

- Do not create or edit stories through this skill.
- Do not run test/fix loops through this skill.
- Use this skill only to discover components, read docs, and preview existing stories.

## Quick workflow summary

1. `list-all-documentation`
2. `get-documentation`
3. `get-documentation-for-story` (if needed)
4. `preview-stories`

## Practical prompts to use

- "Find the Button component and show available variants."
- "Get docs for actions-button and summarize allowed props."
- "Show preview links for actions-button--primary and actions-button--danger."

## Safety and constraints

- You MUST NOT run commands that create, update, or delete resources without explicit approval from the user.
