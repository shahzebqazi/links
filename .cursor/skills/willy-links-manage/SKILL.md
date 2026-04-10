---
name: willy-links-manage
description: Manages the Willy's Links GitHub repo (static Pages site), edits index.html, git workflow, push to origin, and GitHub Pages / custom-domain checks. Use when working in shahzebqazi/links, Willy's Links, shahzeb.me links page, or deploying the links hub.
---

# Willy's Links — manage & deploy

## Repository

- **GitHub**: `https://github.com/shahzebqazi/links`
- **Local**: Clone to `~/Projects/links` (or your chosen path). Remote: `origin` → `git@github.com:shahzebqazi/links.git` (SSH).

## Edit workflow

1. Open `index.html` only for content/design unless adding assets (e.g. `favicon.ico`, `images/`).
2. Prefer **local preview**: open `index.html` in a browser or `python3 -m http.server` from repo root.
3. **Commit**: `git add -A && git commit -m "Describe change"`  
4. **Push**: `git push origin main`

## GitHub Pages

- **Source**: `main` / `/` (classic Pages).
- **Live URLs**: May include `https://shahzebqazi.github.io/links/` (often redirects) and `https://sqazi.sh/links/` depending on account Pages config; **custom domain** `shahzeb.me` is set on **this** repo under Settings → Pages.

## Custom domain (shahzeb.me)

- DNS at registrar (e.g. Squarespace): apex **A** records → GitHub Pages IPs; **www** **CNAME** → `shahzebqazi.github.io`.
- In GitHub: **links** repo → Settings → Pages → Custom domain → `shahzeb.me` → verify DNS → Enforce HTTPS when ready.

## Do not

- Change `shahzebqazi.github.io` user-site repo for this domain unless migrating intentionally.
- Add tokens or private keys to the repo.

## Verification after deploy

- `curl -sI https://shahzeb.me/` (or `/links/` path if applicable to your setup)
- Spot-check mobile vs wide layout in browser devtools.
