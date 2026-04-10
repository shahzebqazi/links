# Willy's Links — operational playbook

## Purpose

Static **link hub** for family, friends, clients, and customers. Primary entry: **shahzeb.me** (DNS + GitHub Pages on repo `shahzebqazi/links`).

## Roles

| Role | Responsibility |
|------|----------------|
| Owner | Content, DNS at registrar, GitHub custom domain, HTTPS |
| Contributor | Edit `index.html`, open PR or push per branch policy |

## Routine: change a link or copy

1. Pull `main`: `git pull origin main`
2. Edit `index.html` (table rows: URL column + description column).
3. Preview locally (open file or simple HTTP server).
4. Commit: `git commit -am "Update links: short reason"`
5. Push: `git push origin main`
6. Wait ~1–2 minutes for Pages; hard-refresh browser or `curl -sI https://shahzeb.me/`

## DNS (Squarespace or other host)

- **Apex**: four **A** records `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **www**: **CNAME** `www` → `shahzebqazi.github.io`
- Preserve **email** records (MX, SPF, DKIM, DMARC) when editing.

## GitHub

- **Repo**: `shahzebqazi/links`
- **Pages**: Settings → Pages → Branch `main`, folder `/`
- **Custom domain**: `shahzeb.me` on **this** repo; enable **Enforce HTTPS** after certificate active
- **User site** (`shahzebqazi.github.io`) uses **sqazi.sh** — do not conflate settings unless intentionally migrating

## Incident: site down or wrong content

1. `curl -sI https://shahzeb.me` — HTTP status and redirects
2. `dig +short shahzeb.me A` — expect four GitHub IPs
3. GitHub → **links** → **Actions** (if workflows exist) or **Pages** build status
4. Compare last commit on `main` to expected content

## Rollback

```bash
git revert HEAD   # or specific SHA
git push origin main
```

## References

- `AGENTS.md` — agent-oriented steps
- `.cursor/skills/willy-links-manage/SKILL.md` — condensed automation-oriented flow
