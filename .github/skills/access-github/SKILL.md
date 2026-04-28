---
name: access-github
description: 'How to gather context from GitHub repositories, commits, and pull requests when you need code from related repos, linked PR details, or cross-platform implementation patterns.'
---

# Access GitHub

How to access GitHub to gather context from repositories, commits, and pull requests in the `7shifts` org.

## When to use this skill

- You need code context that is located in other repositories.
- You need more information about a Jira-linked PR or commit.
- You are reviewing code context before proposing changes.
- You need repository information to plan work.

## How to use this skill

### Using the GitHub MCP Server

You can use the remote GitHub MCP Server and its available tools to access GitHub.

### Using the gh CLI tool

Alternatively, you can use the official `gh` CLI tool, if that's available. Pick whichever tool is easier for you to use.

```sh
# View repo summary
gh repo view org/repo

# List and inspect issues
gh issue list
gh issue view 123

# List and inspect PRs
gh pr list
gh pr view 123

# Recent commit history
gh log -L 20

# Search commits, PRs, and code by text
gh search commits "login bug repo:org/repo"
gh search prs "login bug repo:org/repo"
gh search code "SomeType repo:org/repo path:Sources/"
```

If you need to understand other available options, use `gh --help`.

## Safety and constraints

- You MUST NOT run commands that create, update, or delete resources without explicit approval from the user.
