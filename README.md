# FerrisOxide Site

Public website repository for FerrisOxide.

This repository currently uses a dependency-free static website. No frontend framework, package manager, deployment configuration, or CI workflow has been selected yet.

GitHub remote:

```text
https://github.com/kota-wilson/ferrisoxide-site
```

## Source Relationship

FerrisOxide implementation facts come from the source repository:

```text
/Users/kota/Desktop/codexprojects/softwaredev/projects/ferrisoxide
```

That repository is read-only for website work. Website content may summarize or link to source material, but source files must not be edited from this repository.

## Current Website Goals

- Present FerrisOxide clearly and accurately.
- Keep public claims source-verified.
- Prioritize documentation, examples, status, and contribution readiness.
- Keep dependencies minimal.
- Verify builds before finalizing implementation changes.

## Current Pages

- `index.html`: modern landing page.
- `about.html`: project purpose, naming, maturity, and boundaries.
- `docs.html`: documentation map and source-backed examples.
- `contributors.html`: contributor orientation and boundaries.

## Not Yet Added

- Frontend framework.
- Package manager files.
- Build scripts.
- Deployment configuration.
- CI workflows.
- Visual brand assets.

## Local Verification

Because the site is static, local verification can be done with:

```text
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Repository state can be checked with:

```text
git status --short
```
