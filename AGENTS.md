# AGENTS.md — Willy's Links

Instructions for AI coding agents working in **`shahzebqazi/links`**.

## What this repo is

- **Willy's Links**: static GitHub Pages site (`index.html` only today).
- **Audience copy**: family, friends, clients, customers (placeholders in the table — replace with real URLs).
- **Domains**: **shahzeb.me** (this repo's Pages custom domain); account user site may use **sqazi.sh** — do not overwrite the other repo's Pages domain by mistake.

## What to do

1. Read `.cursor/rules/willy-links.mdc` and load `.cursor/skills/willy-links-manage/SKILL.md` when editing deploy or content.
2. Edit **`index.html`** for links, descriptions, and styling. Preserve: black background, three-font setup, Matcha row colors, mobile vs widescreen behavior.
3. **Commit** with clear messages; **push** `main` to `origin` when the user wants GitHub updated.
4. Prefer **no secrets** in the repo (no analytics tokens in plain HTML unless user approves).

## What not to do

- Do not add dependencies or build tools without explicit user request.
- Do not remove or rewrite DNS-critical guidance in `docs/PLAYBOOK.md` without reason.
- Do not rotate or revoke the user's GitHub or DNS credentials.

## Docs map

| Doc | Use |
|-----|-----|
| `docs/PLAYBOOK.md` | Human operations (DNS, Pages, rollback) |
| `docs/CURSOR.md` | Where rules and skills live |
| `docs/AGENTS.md` | Longer agent notes |

## Phase 2 behavior

- **Plausible**: `data-domain="shahzeb.me"` — owner must add the domain in Plausible.
- **Formspree**: Replace placeholder form id in `index.html` (`myzglw` → your id).
- **Scheduling**: `data-from` / `data-until` on `<tr>`; see `js/schedule.js` — not a security boundary.

## Quick verify

```bash
git status && git remote -v
# After push: curl -sI https://shahzeb.me/
```
