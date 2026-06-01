# ADR-001: FerrisOxide Site Repository Setup

Date: 2026-06-01

Status: Accepted

## Context

The `websitedev` workspace is the coordination layer for FerrisOxide website work. The actual website repository should live under a `projects/` folder so website source, future frontend dependencies, build configuration, and deployment files stay separate from workspace governance.

## Decision

Create the website repository at:

```text
/Users/kota/Desktop/codexprojects/websitedev/projects/ferrisoxide-site
```

Use the GitHub repository:

```text
kota-wilson/ferrisoxide-site
```

This repository starts documentation-first with no frontend framework or package manager files.

## Rationale

- Keeps the `websitedev` root as a lightweight coordination layer.
- Gives the public website its own Git history and future dependency boundary.
- Preserves a clean separation from the FerrisOxide source repository.
- Allows future frontend scaffolding after an explicit dependency/tooling gate.

## Consequences

Positive:

- Website implementation work has a clear repo root.
- Future dependencies and lockfiles will be contained in the website repo.
- GitHub remote setup can target the site repo directly.

Negative:

- Root workspace governance and site repo files must stay aligned.
- The website repo is intentionally minimal until the frontend stack is approved.

## Verification

Verify local setup with:

```text
git status --short
```

Verify remote setup with:

```text
gh repo view kota-wilson/ferrisoxide-site --json nameWithOwner,url,visibility
```

Remote setup verified:

```text
nameWithOwner: kota-wilson/ferrisoxide-site
url: https://github.com/kota-wilson/ferrisoxide-site
visibility: PUBLIC
default branch: main
```
