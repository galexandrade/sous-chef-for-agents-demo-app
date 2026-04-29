# UI Development with Sous Chef

This application uses `@7shifts/sous-chef` as its UI component library. When writing or modifying any UI code, always use Sous Chef components — do not reach for raw HTML elements or third-party UI libraries for anything the design system already covers.

## Documentation

Before writing any UI code involving components or tokens, fetch the reference material:

| Resource            | URL                                                     |
| ------------------- | ------------------------------------------------------- |
| Index (start here)  | https://7shifts.github.io/sous-chef/llms.txt            |
| Component reference | https://7shifts.github.io/sous-chef/llms-components.txt |
| Token reference     | https://7shifts.github.io/sous-chef/llms-tokens.txt     |

## Setup

```tsx
// Import components
import { Button, TextField } from '@7shifts/sous-chef';

// Import styles once in the app entry point (e.g. main.tsx or index.tsx)
import '@7shifts/sous-chef/dist/index.css';
```

## Rules

- Always import from `@7shifts/sous-chef` — never from sub-paths like `@7shifts/sous-chef/dist/...`
- Never hardcode hex colors or pixel values. Use design tokens:
    - In TSX inline styles: `COLORS['token-name']` (import `COLORS` from `@7shifts/sous-chef`)
    - In CSS/SCSS: `var(--color-token-name)`
    - For spacing in SCSS: `$space-Nx` variables (4px grid: `$space-1x` = 4px, `$space-2x` = 8px, …)
- Never invent a component name. If you're not sure a component exists, check `llms-components.txt` first
- Form fields (`TextField`, `SelectField`, etc.) integrate with Formik — wrap them in a `<Form>` context when building forms

## Figma to Code Workflow

When asked to prototype or implement UI from a Figma design:

1. **Read the index** — Fetch `llms.txt` to get the full component list organized by category
2. **Map the design to components** — For each element in the Figma frame, identify the matching Sous Chef component using `llms-components.txt`. Use the table below as a starting point
3. **Match Figma styles to tokens** — Figma fill colors and spacing correspond to design tokens. Fetch `llms-tokens.txt` and match by role (e.g. a primary action color maps to `--color-primary-color`)
4. **Compose structure with layout components** — Use `Stack` (vertical), `Inline` (horizontal), `Flex`, `Card`, and `Page`/`PageLayout` to reproduce the Figma layout without custom CSS where possible
5. **Check props before writing** — Look up the component entry in `llms-components.txt` for the exact prop names, types, and a usage example before writing JSX
6. **Ask before inventing** — If a Figma element has no clear equivalent in Sous Chef, say so and propose the closest composition rather than using a raw HTML element
