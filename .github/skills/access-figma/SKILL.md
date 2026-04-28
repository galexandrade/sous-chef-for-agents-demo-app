---
name: access-figma
description: 'How to inspect Figma resources to understand designs, prototypes, and visual requirements.'
---

# Access Figma

How to access Figma to gather context for designs in the `7shifts` org.

## When to use this skill

- You need to gather context around a Figma prototype or page.
- You need to compare implemented code to design intent.
- You need to compare code tokens to the Figma tokens.

## How to use this skill

### 1. REST API (preferred)

Use the Figma REST API directly when `FIGMA_MCP_TOKEN` is available as an environment variable. This is the same token used by the Figma MCP Server.

Extract the **file key** from the Figma URL — it is the path segment after `/design/` or `/file/`:
`https://www.figma.com/design/{FILE_KEY}/...?node-id={NODE_ID}`

Also extract the **node ID** from the `node-id` query parameter if present. Replace `-` with `:` when passing it to API calls (e.g. `123-456` → `123:456`).

```sh
# Full file overview (pages, top-level frames) — useful when you don't have a node ID yet
curl -s \
  -H "X-Figma-Token: ${FIGMA_MCP_TOKEN}" \
  "https://api.figma.com/v1/files/${FIGMA_FILE_KEY}?depth=1"

# Node structure, variant definitions, and component descriptions
curl -s \
  -H "X-Figma-Token: ${FIGMA_MCP_TOKEN}" \
  "https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${NODE_ID}"

# Rendered screenshots — returns a map of node IDs to signed image URLs
curl -s \
  -H "X-Figma-Token: ${FIGMA_MCP_TOKEN}" \
  "https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${NODE_IDS}&format=png&scale=2"
# Download each returned URL to get the actual image bytes
```

**Parsing notes:**
- Variant data lives in `componentPropertyDefinitions` on the component set node.
- Descriptions map to `description` on each `COMPONENT` node.
- Size comes from `absoluteBoundingBox` (`width` / `height`) on each node.
- The node tree can be deeply nested — use `?depth=N` to limit traversal.

### 2. Figma MCP Server (fallback)

If `FIGMA_MCP_TOKEN` is not available or you need more context than can be provided by the REST API, fall back to the remote Figma MCP Server and its available tools if you have MCP access.

Ensure that you always set `disableCodeConnect: true` for `get_design_context` to avoid a TypeError.

### Guidance on how to inspect and understand Figma resources

- Figma files generally have the "ready for dev" frames or sections that are linked directly from Jira tickets. Things outside of this section may be unapproved, future iterations, or exploratory.
- Figma sections are often matched to specific use-cases or pieces of work that can align to a ticket or branch.
- You should try to get the design context to understand the states, structure, and tokens. You should use screenshots to understand the visuals.
- Use metadata as one means to check copy and understand the Figma prototypes further.
- Use notes, labels, and naming to try to understand what is intended for development.
- If you're unsure which node is correct to focus on, please ask.

## Safety and constraints

- You MUST NOT run commands that create, update, or delete resources without explicit approval from the user.
