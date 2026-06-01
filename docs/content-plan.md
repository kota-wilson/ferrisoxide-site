# FerrisOxide Site Content Plan

Status: Implemented as a static first pass

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
| Home | Introduce FerrisOxide and FerrisOxide Signal with accurate maturity boundaries. | `index.html`; source `README.md`, `project-state.md`, brand ADRs |
| About | Explain the project purpose, current maturity, product naming, and boundaries. | `about.html`; source `README.md`, `project-state.md`, `project-charter.md`, brand ADRs |
| Documentation | Provide an entry point to architecture, rules, measurements, reports, examples, and Cloudflare fit. | `docs.html`; source `README.md`, source `docs/` |
| Examples | Show source-backed workflows such as the heated actuator example and rule packages. | Section in `docs.html`; source `tests/e2e/heated_actuator/`, `examples/`, `validation/` |
| Contributors | Point users to contribution, security, license, and conduct information. | `contributors.html`; source `CONTRIBUTING.md`, `SECURITY.md`, `LICENSE`, `CODE_OF_CONDUCT.md` |

## Content Acceptance Criteria

- Claims are verified against source docs.
- Future items are labeled as future/planned.
- Non-goals remain visible.
- The source repo is never edited.
- Build verification is added after frontend tooling exists.

## Current Implementation

The first pass uses static root files:

- `index.html`
- `about.html`
- `docs.html`
- `contributors.html`
- `assets/styles.css`
- `assets/site.js`
- `docs/cloudflare-pages.md`

No frontend dependency, lockfile, CI workflow, Cloudflare project file, DNS setting, or deployment credential has been added.
