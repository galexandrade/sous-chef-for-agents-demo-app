# Sous Chef for Agents

A React + TypeScript demo app built on the [Sous Chef](https://github.com/7shifts/sous-chef) design system (`@7shifts/sous-chef`).

## Stack

- **React 19** with React Router v6
- **TypeScript**
- **Vite**
- **@7shifts/sous-chef** — the 7shifts design system component library

## Running the app

```
yarn start
```

## Sous Chef UI Library

Our internal component library (`@7shifts/sous-chef`).

- Verify Sous Chef components using the `7shifts MCP server`
    - If the 7shifts MCP server is not installed or there are no tools related to Sous Chef, ask the user to connect to the Sous Chef MCP server.
- Categories: `layout`, `lists`, `forms`, `actions`, `controls`, `feedback`, `overlay`, `media`, `icons`, `typography`, `navigation`, `empty_states`, `core`
- Never guess component props — always verify from type definitions
- **Never use raw HTML heading elements** (`<h1>` through `<h6>`) — ESLint forbids them. Use `<Text as="h3">` etc. from sous-chef instead.
- Prefer sous-chef layout components (`Stack`, `Inline`, `Card`, `Page`, etc.) and `<div>` over semantic HTML elements — the design system handles semantics
- Check the 7shifts MCP Server (`sous-chef_get_composition_patterns_reference` tool) for guidelines on how to compose components together (forms, lists, and others).
