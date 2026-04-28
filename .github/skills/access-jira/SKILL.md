---
name: access-jira
description: 'How to gather context from Jira when you encounter ticket keys (e.g.: VIBES-123), or want to understand acceptance criteria, requirements, and related work.'
---

# Access Jira

How to access Jira to gather context from work items, tickets, and linked resources.

## When to use this skill

- You need context that is located in Jira.
- You need more information about work being tracked in Jira.
- You are searching for relevant related information in comments or linked issues/resources.

## How to use this skill

### 0. Provided Jira tools (highest priority)

If a `jira-get-issue` tool (or similar) has been provided by the calling workflow or environment, **use it instead of curl or the MCP server**. These tools handle authentication internally — `ATLASSIAN_MCP_TOKEN` is not available as a shell environment variable in those contexts.

### 1. REST API (preferred when no tool is provided)

Use the Jira REST API directly when `ATLASSIAN_MCP_TOKEN` is available as an environment variable. `ATLASSIAN_MCP_TOKEN` is the same OAuth Bearer token used by the Atlassian MCP Server. The Jira base URL is always `https://7shifts.atlassian.net`.

```sh
# View a single issue
curl -s \
  -H "Authorization: Bearer ${ATLASSIAN_MCP_TOKEN}" \
  -H "Accept: application/json" \
  "https://7shifts.atlassian.net/rest/api/3/issue/VIBES-123"

# Search issues by JQL
curl -s \
  -H "Authorization: Bearer ${ATLASSIAN_MCP_TOKEN}" \
  -H "Accept: application/json" \
  "https://7shifts.atlassian.net/rest/api/3/issue/search?jql=project%3DVIBES%20AND%20text%20~%20%22login%20crash%22"

# Issues linked to a given issue
curl -s \
  -H "Authorization: Bearer ${ATLASSIAN_MCP_TOKEN}" \
  -H "Accept: application/json" \
  "https://7shifts.atlassian.net/rest/api/3/issue/search?jql=issue%20in%20linkedIssues(VIBES-123)"

# Subtasks of a parent issue
curl -s \
  -H "Authorization: Bearer ${ATLASSIAN_MCP_TOKEN}" \
  -H "Accept: application/json" \
  "https://7shifts.atlassian.net/rest/api/3/issue/search?jql=parent%3DVIBES-123"
```

Key fields to extract from issue responses:
- `fields.summary` — ticket title
- `fields.description` — description and acceptance criteria
- `fields.customfield_10154` — Figma design URL

### 2. Atlassian MCP Server (fallback)

If `ATLASSIAN_MCP_TOKEN` or the other env vars are not available, fall back to the remote Atlassian MCP Server and its available tools.

### 3. acli CLI tool (fallback)

If neither the REST API nor the MCP Server are available, use the official `acli` (Atlassian CLI) tool if installed.

```sh
# View a single issue with key fields + comments
acli jira workitem view VIBES-123 --fields "key,summary,status,assignee,comment"

# Search issues by text/JQL
acli jira workitem search --jql 'project = VIBES AND text ~ "login crash"'

# Issues linked to a given issue
acli jira workitem search --jql 'issue in linkedIssues(VIBES-123)'

# Subtasks of a parent issue
acli jira workitem search --jql 'parent = VIBES-123'
```

If you need to understand other available options, use `acli --help`.

## Safety and constraints

- You MUST NOT run commands that create, update, or delete resources without explicit approval from the user.
