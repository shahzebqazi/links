# AI agents — extended notes

Canonical instructions: **`AGENTS.md`** at repository root.

## Additional context

- **Redirects**: `https://shahzebqazi.github.io/links/` may 301 to `https://sqazi.sh/links/` because of account-level Pages; **shahzeb.me** should still point at this repo once set under **links** → Settings → Pages.
- **Squarespace DNS**: Apex A + `www` CNAME to GitHub; keep Proton Mail records intact.
- **DigitalOcean**: A zone for `shahzeb.me` may exist but is irrelevant while registrar NS point elsewhere — **Squarespace (or current NS)** is source of truth for live DNS.

## When changing layout

- Test **375px** and **≥640px** widths; descriptions must hide on small screens.
- Keep table **thead** accessible (visually hidden, not `display:none` on the whole thead in a way that breaks SR — current pattern uses clip).
