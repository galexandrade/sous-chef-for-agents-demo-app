---
name: reference-api-specs
description: 'How to reference the 7shifts OpenAPI specs for endpoint contracts, request/response schemas, and API versioning when working on API integrations.'
---

# Reference API Specs

How to access the 7shifts OpenAPI specs in the `7shifts/webapp` repository to understand endpoint contracts, request/response schemas, and API versioning.

## When to use this skill

- You need to understand the request or response schema of a backend endpoint.
- You need to verify what parameters an endpoint accepts.
- You need to check which API version introduced or changed an endpoint.
- You are implementing or updating client code that consumes a backend endpoint.
- You need to compare spec differences between API versions.

## How to use this skill

### Repository and folder structure

The OpenAPI specs live in the `7shifts/webapp` repository under `api/`. Key locations:

- `api/openapi/`: source-of-truth YAML specs, organized by domain subdirectories. Each domain folder contains endpoint YAML files (defining operations, parameters, and response references) and a `schemas/` subfolder with request/response body schemas. The root entry point is `api/openapi/index.yaml`.
- `api/openapi-versions/`: compiled, fully resolved JSON specs named by date (e.g., `2026-02-01.json`). These are generated artifacts.
- `api/openapi-public-versions/`: same versioned JSON format, filtered to endpoints marked `x-public-api: true`.
- `api/config/current_api_version.txt`: the current active API version string.

Browse `api/openapi/` to discover available domain directories, then drill into the one relevant to your task.

#### Example: Knock to Join Signup endpoints

The listKnockToJoinSignupPaginated, approveKnockToJoinSignup, and rejectKnockToJoinSignup operations live under the growth domain:

```
api/openapi/growth/
├── knock_to_join_signup.yaml                        # Endpoint definitions (operations, parameters, responses)
└── schemas/
    ├── knock_to_join_signup_request.yaml            # Request body schema
    └── knock_to_join_signup_paginated_result.yaml   # Paginated response schema
```

### Browsing by domain

List the contents of `api/openapi/` in `7shifts/webapp` to discover the available domain directories. Then drill into a domain folder to see its endpoint YAML files, and into its `schemas/` subfolder for request/response body schemas.

Each endpoint YAML file defines one or more HTTP operations with an `operationId` (e.g., `listShift`), a `summary` (e.g., "List Shifts"), and a `tags` field indicating the domain (e.g., Shifts). These fields are searchable and are the best way to locate specific endpoints.

### Searching by name

Search for the operation name, resource name, or keyword within `api/openapi/` in the `7shifts/webapp` repository. For example, searching for `shifts` will surface endpoint files like `shifts.yaml` and `shift.yaml`, as well as schemas like `shift_v2.yaml`. Read the matching files to get the full definitions including parameters, request bodies, and response schemas.

### Following schema references

Endpoint YAML files reference their request/response schemas via `$ref` pointers (e.g., `$ref: '../../index.yaml#/components/schemas/ShiftV2'`). The schema name after `#/components/schemas/` maps to a YAML file in the domain's `schemas/` subfolder. Follow these references to find the full schema definition.

### Checking the current API version

Read `api/config/current_api_version.txt` in `7shifts/webapp`.

## Safety and constraints

- These specs are the source of truth for the backend API contracts. Do not assume endpoint behavior that differs from what the specs define.
