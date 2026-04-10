# Cursor setup for Willy's Links

This repo includes **project-local** Cursor configuration so agents and contributors follow the same workflow.

## Rules (`.cursor/rules/`)

| File | Purpose |
|------|---------|
| `willy-links.mdc` | Applies when editing HTML/CSS/MD: stack, design constraints, Git/Pages notes. |

Rules use `globs` for `**/*.{html,css,md}`. Open or edit matching files so the rule is active, or rely on agent retrieval.

## Skills (`.cursor/skills/`)

| Skill | Purpose |
|-------|---------|
| `willy-links-manage` | Clone path, edit `index.html`, commit/push, Pages and `shahzeb.me` checks. |

**Using skills**: Cursor loads skills by description. Mention "Willy's Links", `shahzebqazi/links`, or "deploy the links page" to trigger. You can also `@`-reference the skill if your Cursor version supports it.

## Related docs

- `AGENTS.md` (root) — primary instructions for AI agents.
- `docs/AGENTS.md` — extended agent notes (DNS, redirects).
- `docs/PLAYBOOK.md` — human-run operational playbook.

Keep `docs/CURSOR.md` updated when adding new rules or skills.
