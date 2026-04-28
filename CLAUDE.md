# Sous Chef for Agents — Claude Code Rules

## What this project is
A prototype sandbox that replicates the 7shifts webapp shell.
Each page in src/pages/ is a mockup screen built with Sous Chef components.
The shell (Root.tsx) is already set up — never modify it unless adding nav items.

## CRITICAL: Always use Sous Chef components
Before writing ANY UI code:
1. Call storybook-mcp tools to find the right component
2. Use only props returned by the MCP — never guess or invent props
3. Never write custom CSS for spacing, color, or typography
4. Always import from '@7shifts/sous-chef' only

## Adding a new prototype page
Always follow this exact pattern:

### 1. Create the page file
src/pages/MyPage.tsx:
\`\`\`tsx
import { Page } from '@7shifts/sous-chef';

const MyPage = () => {
    return (
        <Page title="Page Title" subtitle="Optional subtitle">
            {/* Sous Chef components go here */}
        </Page>
    );
};

export default MyPage;
\`\`\`

### 2. Add the route in App.tsx
\`\`\`tsx
import MyPage from './pages/MyPage';
// add inside children array:
{ path: '/my-page', element: <MyPage /> }
\`\`\`

### 3. Add nav item in Root.tsx
\`\`\`tsx
import { IconTachometer } from '@7shifts/sous-chef'; // pick the right icon
{
    label: 'My Page',
    isActive: false,
    isShowing: true,
    url: '/my-page',
    icon: IconTachometer
}
\`\`\`

## Layout rules
- Every page MUST be wrapped in <Page> from '@7shifts/sous-chef'
- Use <Stack> for vertical spacing — never margin or padding on page children
- Use <Inline> for horizontal layouts — never flexbox directly
- Use <Card> to group related content sections

## What NOT to do
- Never write style={{}} with hardcoded values
- Never use <div> for layout — use Stack, Inline, Card, Page
- Never install a new component library
- Never recreate a component that exists in Sous Chef
- Never import from relative paths inside sous-chef — always '@7shifts/sous-chef'

## Available layout shell props (Root.tsx / LayoutFrame)
- navItems: NavBarItems — add new pages here
- Each NavBarItem needs: label, icon, url, isActive, isShowing
- Icons come from '@7shifts/sous-chef' — search with storybook-mcp

## Run the app
yarn dev        # development server
yarn storybook  # component browser + MCP server
