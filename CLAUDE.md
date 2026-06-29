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
- **Never use** signs for buttons, like '+' or '-'. Instead use a Sous Chef Button with a Sous Chef icon. If it is an action on a page, use the `actions` prop on the Sous Chef `Page` component.
- **Never use** a hex color. Instead use a Sous Chef semantic color token.

### Toolbars

When using toolbars, use the `filterBar` prop on the Sous Chef page `Page` component. Here is an example:

```
const EmployeesFilterBar = () => {
    return (
        <Inline>
            <div style={{ width: 300 }}>
                <TextField prefix={<IconSearch />} name="search" />
            </div>
            <SelectField
                placeholder="All locations"
                prefix={<IconSitemap />}
                name="locations"
                options={[]}
            />
        </Inline>
    );
};

<BrowserRouter>
    <Page
        actions={
            <Button theme="primary">
                <IconUserPlus />
                Add employee
            </Button>
        }
        banner={<InlineBanner>Something to show</InlineBanner>}
        filterBar={<EmployeesFilterBar />}
    >
        <DataTable
            columns={COLUMNS}
            items={ITEMS}
            itemComponent={EmployeeRow}
            showActionMenu
        />
    </Page>
</BrowserRouter>
```

It is highly recomended to use icons as preffix on all the filters (medium size).

### Insights

Whenever you want to display stats Cards for a page (list page or dashbord), you can do so by using the following approach:

```

<Card>
    <Inline flex={[1, 1, 1, 1]}>
        <Stack space={8}>
            <Text as="h4">Open</Text>
            <Text as="insight">37</Text>
        </Stack>
        <Stack space={8}>
            <Text as="h4">Overdue</Text>
            <Text as="insight">6</Text>
        </Stack>
        <Stack space={8}>
            <Text as="h4">Due today</Text>
            <Text as="insight">1</Text>
        </Stack>
        <Stack space={8}>
            <Text as="h4">Done</Text>
            <Text as="insight">74</Text>
        </Stack>
    </Inline>
</Card>
```

### Inline and Stack

It uses the `space` prop which is a multiple of 4px. Example `<Inline space={4} />`.

### Avatars

Most of the time you will be using the `size="medium"` which is the default. In DataTable rows, always use the default size="medium" — never small.
When using initials, just use 1 character.

### Inputs

When using icons in inputs, always preffer using the `size="medium"` on the icon.

`Inline` uses the `flex` prop to set flex style to each element, for example, `<Inline flex={[1,1,1,1]}>...</Inline>` will make all the 4 items to grow evenly.

## Validation

Run `yarn typecheck` to see if all the props are correct.

Validate if the UI looks good by using the Chrome Devtools MCP server. The app should be running on http://localhost:5173/, if not then run `yarn start`.

Make sure alignment, spacing are right.

Avoid using raw CSS. Use only if there is no Sous Chef component to use.
