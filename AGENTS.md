# FerrisOxide Site Repository Instructions

This repository contains the FerrisOxide public website.

It inherits the root website workspace instructions from:

```text
/Users/kota/Desktop/codexprojects/websitedev/AGENTS.md
```

## Scope

- Local repository path: `/Users/kota/Desktop/codexprojects/websitedev/projects/ferrisoxide-site`.
- Intended GitHub repository: `kota-wilson/ferrisoxide-site`.
- Purpose: public website and documentation surface for FerrisOxide.
- Current stage: repository setup only.

## Source Of Truth

The FerrisOxide product source repository is:

```text
/Users/kota/Desktop/codexprojects/softwaredev/projects/ferrisoxide
```

That repository is read-only for this website repository. Use it only to verify facts, links, status, project maturity, and brand language.

NEVER edit, format, generate files into, stage, commit, delete, or otherwise mutate anything under the FerrisOxide source repository while working in this website repo.

## Current Boundaries

- Do not add frontend dependencies or lockfiles until the frontend stack is approved.
- Do not add Astro, Vite, Next, or other framework scaffolding until the dependency/tooling gate passes.
- Do not add Cloudflare, CI, deployment, analytics, DNS, or third-party scripts until explicitly approved.
- Do not claim certification, hardware qualification, production controller readiness, live DAQ support, full GUI availability, or Rust Project affiliation.

## Required Workflow

Start requests with the root routing workflow:

```text
/Users/kota/Desktop/codexprojects/websitedev/workflows/chat-request-routing-pipeline.md
```

Then use the selected website role from:

```text
/Users/kota/Desktop/codexprojects/websitedev/roles/00-role-registry.md
```

## Verification

Until frontend tooling exists, verify repository setup with:

```text
git status --short
```

Once frontend tooling exists, add the project build command here and keep it current.

