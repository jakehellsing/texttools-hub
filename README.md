# TextTools Hub

Free, privacy-friendly text utilities built with Next.js (App Router),
TypeScript, and Tailwind CSS. All processing runs locally in the browser —
no text is ever sent to a server.

## Tools

| Tool | URL |
| --- | --- |
| Word Counter | `/tools/word-counter` |
| Character Counter | `/tools/character-counter` |
| Sentence & Paragraph Counter | `/tools/sentence-counter` |
| Reading Time Calculator | `/tools/reading-time-calculator` |
| Case Converter | `/tools/case-converter` |
| Title Case Converter | `/tools/title-case-converter` |
| Remove Duplicate Lines | `/tools/remove-duplicate-lines` |
| Remove Extra Spaces | `/tools/remove-extra-spaces` |
| Text to Slug | `/tools/text-to-slug` |
| Lorem Ipsum Generator | `/tools/lorem-ipsum-generator` |

## Getting started

```bash
npm install
cp env.example .env.local   # then edit values
npm run dev                 # http://localhost:3000
```

> **Note:** `.npmrc` points at `registry.npmmirror.com` because
> `registry.npmjs.org` was unreachable/extremely slow from this network.
> Delete that file to use the default registry.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Unit tests (Vitest) for all text functions |
| `npm run test:e2e` | Playwright end-to-end tests (desktop/tablet/mobile) |

E2E tests need browsers once: `npx playwright install chromium`.

## Environment variables

See `env.example`. In production (Vercel project settings → Environment
Variables):

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical origin for metadata, sitemap, robots |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Yes | Shown on contact page / privacy policy |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | After approval | `ca-pub-*` publisher ID — gates ALL ad code |
| `NEXT_PUBLIC_ADSENSE_SLOT_*` | After approval | Ad unit slot IDs per placement |

No ad code is emitted unless `NEXT_PUBLIC_ADSENSE_CLIENT` is a real
`ca-pub-` ID, so the site ships "ads off" by default.

## AdSense setup checklist (manual, after approval)

1. Apply for AdSense with the production domain; wait for approval.
2. Set `NEXT_PUBLIC_ADSENSE_CLIENT` to your `ca-pub-*` ID and redeploy —
   this activates the loader script **and** generates `/ads.txt` with the
   matching publisher ID automatically.
3. Create ad units → copy slot IDs into `NEXT_PUBLIC_ADSENSE_SLOT_*` env
   vars; redeploy. (Or enable "Auto ads" in the AdSense dashboard and skip
   slot IDs entirely.)
4. Configure consent messaging (AdSense → Privacy & messaging) if serving
   EEA/UK traffic.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel (framework preset: Next.js — detected
   automatically).
3. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL`.
4. Deploy. Verify `https://<domain>/sitemap.xml` and `/robots.txt`, then
   submit the domain in Google Search Console.

## Project structure

```
src/
  app/                 # routes: /, /tools/[slug], legal pages, sitemap,
                       # robots, manifest, icon, opengraph-image
  components/          # header, footer, cards, ad slot, shared tool page
  components/tools/    # per-tool client components + shared UI
  lib/text/            # pure text-processing functions (unit-tested)
  lib/tools.ts         # tool registry: slugs, copy, FAQs, related links
e2e/                   # Playwright specs
```
