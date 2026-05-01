# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

A demo app for prototyping 7shifts UI using Sous Chef components with AI. It mirrors the Webapp's layout structure so prototypes look realistic.

## Commands

```bash
yarn install     # install dependencies
yarn dev         # start dev server
yarn build       # tsc -b && vite build
yarn lint        # eslint .
yarn preview     # preview production build
```

There are no tests in this project.

## Architecture

**Entry:** `main.tsx` wraps the app in `SousChefProvider` and imports both `app-layout-frame/dist/index.css` and `@7shifts/sous-chef/dist/index.css` — these must stay there.

**Layout shell:** `Root.tsx` renders `LayoutFrame` from `app-layout-frame` with a nav sidebar. `NAV_ITEMS` drives the sidebar — add an entry here when adding a new page. Routes are defined as children of `Root` in `App.tsx`.

**Pages:** Drop new page components into `src/pages/`, register the route in `App.tsx`, and add the nav item in `Root.tsx`.

## Sous Chef Component Library

Always use `@7shifts/sous-chef` components — no raw HTML elements or third-party UI libraries for anything the design system covers.

**Before writing UI code, fetch the reference docs to understando how to use the Sous Chef design system:**

https://7shifts.github.io/sous-chef/llms.md

**Import rules:**

- Always import from `@7shifts/sous-chef` — never from sub-paths like `@7shifts/sous-chef/dist/...`
- `verbatimModuleSyntax` is enabled: type-only imports must use `import type { Foo }` syntax
- Never hardcode hex colors or px values — use design tokens:

## Figma-to-code workflow

1. Fetch `llms.md` for the component list
2. Map each Figma element to a Sous Chef component using `llms-components.md`
3. Match Figma colors/spacing to tokens via `llms-tokens.md`
4. Build layout with `Stack` (vertical), `Inline` (horizontal), `Card`, `Page`/`PageLayout` — avoid custom CSS where possible

## Code style

Prettier config: 4-space indent, single quotes, no trailing commas, 80-char line width.
