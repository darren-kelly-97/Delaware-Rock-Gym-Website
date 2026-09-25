# The Delaware Rock Gym website

Next.js 16 (App Router, TypeScript), Tailwind CSS v4, Motion, Phosphor icons.
Type: Archivo (condensed display) + Outfit (body), both self-hosted. Accent: cobalt `#2446F0`.
Light theme by default; the header toggle switches to dark and remembers the choice per visitor.
Built as a static site (`output: "export"`) for the existing Apache host.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build and deploy

```bash
npm run build        # writes the static site to ./out
```

Upload the **contents** of `./out` (including the hidden `.htaccess`) to the web root.

- Old `.php` URLs redirect permanently (301) to the new URLs; see `public/.htaccess`.
- `http://` and `derockgym.com` redirect to `https://www.derockgym.com`.
  If the host sits behind a CDN/proxy that terminates HTTPS, change the `%{HTTPS}` check to
  `%{HTTP:X-Forwarded-Proto} !https` to avoid a redirect loop.
- `covid-info.php`, `events.php`, `schedule.php`, `pricing-2023.php` are not part of the new site.
  If you upload without deleting old files they stay reachable as before; delete them when ready.
- The `.htaccess` puts `index.html` first in `DirectoryIndex`, so a leftover `index.php` is ignored.

## URL map

| Old | New |
|---|---|
| /index.php | / |
| /newto.php | /new-to-climbing/ |
| /overview.php | /climbing-overview/ |
| /FAQ.php | /faq/ |
| /pricing.php | /pricing/ (anchor `#Classes` kept) |
| /classes.php | /classes/ (anchors `#Intro`, `#Sport`, `#Outdoor` kept) |
| /party.php | /parties-and-groups/ |
| /location.php | /directions/ |
| /gal_pans.php | /panorama-gallery/ |
| /aboutus.php | /about-us/ |
| /contactus.php | /contact-us/ |
| /release.php | /release-forms/ |

## Where to edit

- Hours, phone, address, social links, nav: `src/lib/site.ts`
- Home page notices (closures etc.): `src/app/page.tsx`, "Notices" block
- Prices: `src/app/pricing/page.tsx` (home, classes and parties pages also show a few prices)
- Colours and type tokens (light and dark): `src/app/globals.css` (`:root` and `:root[data-theme="dark"]`)
- Logo lockup (mark tile + live-text wordmark): `src/components/Wordmark.tsx`
- Open/closed indicator hours: `src/components/OpenStatus.tsx` (keep in step with `src/lib/site.ts`)
- Photos: `public/images/` (new, higher-resolution photography will make the biggest visual difference)

## Client preview on GitHub Pages

The repo includes `.github/workflows/pages.yml`. It builds the site under `/<repo-name>/`, marks every page
`noindex` and serves a `robots.txt` that blocks crawlers, so the preview never competes with derockgym.com in search.

1. Create a **public** repository on GitHub (for example `drg-preview`) and push/upload this folder to its `main` branch.
2. In the repo: **Settings > Pages > Build and deployment > Source: GitHub Actions**.
3. Open the **Actions** tab and wait for "Deploy preview to GitHub Pages" to finish (about 2 minutes).
   The site is then at `https://<your-username>.github.io/<repo-name>/`.

Every push to `main` redeploys. The production build for Apache (`npm run build` with no env vars) is unaffected.
