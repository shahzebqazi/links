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

## Phase 2 — analytics, email, scheduling, assets

### Plausible Analytics

1. Create an account at [Plausible](https://plausible.io) and add site **`shahzeb.me`**.
2. The page already loads `https://plausible.io/js/script.js` with `data-domain="shahzeb.me"`. Stats appear after the domain is added and DNS/HTTPS work.
3. To disable temporarily, remove that `<script>` line from `index.html`.

### Email (Formspree)

1. Create a form at [Formspree](https://formspree.io) and copy the form id from the endpoint URL (`/f/xxxxxxx`).
2. In `index.html`, set the form `action` to `https://formspree.io/f/YOUR_ID` (replace the placeholder id **`myzglw`**).
3. Remove or shorten the hint paragraph under the form once submissions work.

### Scheduled links

- Optional attributes on each **`<tr class="link-row">`**: `data-from="YYYY-MM-DD"` and/or `data-until="YYYY-MM-DD"` (local calendar day).
- Logic is in `js/schedule.js` (client-side only). **Do not rely on this to hide sensitive URLs** — the link still exists in HTML source.
- Remove the example “Holiday hours” row or adjust dates when done testing.

### Favicon & social preview

- `favicon.svg` — Matcha-style icon; linked from `index.html`.
- Open Graph uses `https://shahzeb.me/favicon.svg` as `og:image`; swap for a 1200×630 PNG later if you want richer share cards.

### Paths note

- Assets use **relative** paths (`favicon.svg`, `js/schedule.js`) so the site works both on **`shahzeb.me`** and **`username.github.io/repo/`**.

## References

- `AGENTS.md` — agent-oriented steps
- `.cursor/skills/willy-links-manage/SKILL.md` — condensed automation-oriented flow
