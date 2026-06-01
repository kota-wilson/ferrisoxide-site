# Cloudflare Pages Deployment Notes

Status: Planning note

The current FerrisOxide site is plain static HTML, CSS, and JavaScript. It does not require a package install or build command.

## Initial Cloudflare Pages Settings

Use these settings when connecting the GitHub repository to Cloudflare Pages:

| Setting | Value |
|---|---|
| Repository | `kota-wilson/ferrisoxide-site` |
| Production branch | `main` |
| Framework preset | None / static |
| Build command | Leave blank |
| Build output directory | `/` |

## Why This Works

The site has root-level `index.html`, `about.html`, `docs.html`, and `contributors.html` files. Shared assets live under `assets/`. Cloudflare Pages can serve these files directly from the repository without a Node.js toolchain.

## Not Yet Configured

- No custom domain.
- No DNS records.
- No Cloudflare API token.
- No Pages project configuration file.
- No GitHub Actions workflow.
- No package manager or lockfile.

