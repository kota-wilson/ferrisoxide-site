# ADR-002: Static Cloudflare Pages Website

Date: 2026-06-01

Status: Accepted

## Context

The site should be hosted for free on Cloudflare Pages and should explain FerrisOxide thoroughly with a modern landing page, about page, documentation page, and contributor page.

The site does not currently need a frontend framework, package manager, build pipeline, server runtime, or dynamic behavior.

## Decision

Use a dependency-free static website for the first public pass.

The site uses:

- Root-level HTML pages.
- Shared CSS in `assets/styles.css`.
- Shared progressive enhancement JavaScript in `assets/site.js`.
- An interactive landing-page signal canvas.
- Cloudflare Pages deployment notes in `docs/cloudflare-pages.md`.

Cloudflare Pages can serve the repository directly with:

- Production branch: `main`.
- Build command: blank.
- Build output directory: `/`.

## Rationale

- Keeps hosting simple and compatible with a free Cloudflare Pages setup.
- Avoids adding Node.js dependencies, lockfiles, and framework maintenance before they are needed.
- Makes the site easy to inspect and modify.
- Keeps public claims source-verifiable because content is written directly and reviewed against source docs.

## Consequences

Positive:

- No dependency install is required.
- No build step is required.
- Cloudflare setup is straightforward.
- Future migration to Astro or another static framework remains possible.

Negative:

- Shared HTML such as navigation and footer is duplicated across pages.
- Larger documentation expansion may eventually benefit from generated navigation, Markdown/MDX, or templates.
- Visual verification currently depends on manual/browser review rather than automated screenshot tests.

## Verification

Checks run:

```text
node --check assets/site.js
python3 -m http.server 4173
curl --max-time 5 -I http://127.0.0.1:4173/
curl --max-time 5 -I http://127.0.0.1:4173/about.html
curl --max-time 5 -I http://127.0.0.1:4173/docs.html
curl --max-time 5 -I http://127.0.0.1:4173/contributors.html
curl --max-time 5 -I http://127.0.0.1:4173/assets/site.js
git diff --check
```

Computer Use browser verification was attempted, but macOS Accessibility and Screen Recording permissions were still pending.

