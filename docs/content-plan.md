# FerrisOxide Site Content Plan

Status: Draft

## Purpose

Define the first public website content shape before selecting or installing frontend tooling.

## Source Files

Use the source map at:

```text
/Users/kota/Desktop/codexprojects/websitedev/docs/content-source-map.md
```

Primary source repository:

```text
/Users/kota/Desktop/codexprojects/softwaredev/projects/ferrisoxide
```

The source repository is read-only for website work.

## Initial Sitemap

| Page | Purpose | Primary Source |
|---|---|---|
| Home | Introduce FerrisOxide and FerrisOxide Signal with accurate maturity boundaries. | Source `README.md`, `project-state.md`, brand ADRs |
| Docs | Provide an entry point to architecture, rules, measurements, reports, and examples. | Source `docs/` |
| Status And Scope | Explain implemented capabilities, planned work, and non-goals. | Source `project-state.md`, `project-charter.md`, source `AGENTS.md` |
| Examples | Show source-backed workflows such as the heated actuator example and rule packages. | Source `tests/e2e/heated_actuator/`, `examples/`, `validation/` |
| Contributing | Point users to contribution, security, license, and conduct information. | Source `CONTRIBUTING.md`, `SECURITY.md`, `LICENSE`, `CODE_OF_CONDUCT.md` |

## Content Acceptance Criteria

- Claims are verified against source docs.
- Future items are labeled as future/planned.
- Non-goals remain visible.
- The source repo is never edited.
- Build verification is added after frontend tooling exists.

