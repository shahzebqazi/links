# Branding audit tasks — shahzeb.me

**Status:** 2026-05-30 — P0 closed; live matches repo  
**Audit (historical):** [`social/linkedin/docs/audits/2026-05-28-branding-audit.md`](../../social/linkedin/docs/audits/2026-05-28-branding-audit.md)  
**Site:** https://shahzeb.me/

| Item | Live deploy | Repo `index.html` |
|------|-------------|-------------------|
| LinkedIn | `https://www.linkedin.com/in/lambdaqazi` | same |
| Mystic row (2026-05-28 audit) | **N/A** — no mystic-ai row on link hub | **N/A** |

## P0-1 — LinkedIn URL (closed 2026-05-30)

- **File:** `index.html` ~line 997 (social links table)
- **Verify:** `curl -sL https://shahzeb.me/ | grep -i linkedin` → `lambdaqazi`

**Acceptance:**

- [x] LinkedIn link resolves to profile
- [x] No Rick Roll URL in live HTML
- [x] Live deploy matches repo

## P0-2 — Mystic row (closed — obsolete)

2026-05-28 audit cited live “Mystic Labs” vs repo copy. The link table no longer includes a mystic-ai row; nothing to deploy.

- [x] No “Mystic Labs” string on live or in repo `index.html`

## P1 — CV / sqazi cross-links (closed 2026-05-30)

- Hub copy points résumé to [sqazi.sh CV](https://sqazi.sh/content.html?page=cv)
- sqazi.sh `content/cv.txt` deployed with `/in/lambdaqazi` (see `shahzebqazi.github.io` audit tasks)

**Acceptance:**

- [x] Footer and intro reference sqazi.sh accurately

## P2 — Plausible (open)

HTML comment: claim `shahzeb.me` at plausible.io — low priority.
