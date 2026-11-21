# AGENTS.md - Development Guidelines

## Project Overview

This is an Astro-based wedding website for Kha & Linh. It supports English and Vietnamese localization (`/` and `/vi/` routes). The site includes a home page with hero background, event details with live countdowns, our story with photo gallery, photo album, RSVP form, and gift information.

Built on the [astro-photo-folio](https://github.com/XD-QIN/astro-photo-folio) theme.

## Build Commands

```bash
bun run dev       # Start development server with hot reload
bun run build     # Build for production (reads the committed photo manifest)
bun run preview   # Preview production build locally
```

**Always use `bun` and `bunx` — never npm, npx, pnpm, yarn, or node directly.**

No tests exist in this project. Run `bunx tsc --noEmit` for type checking.

## Architecture

```
photos/                 # ORIGINAL photos — gitignored, uploaded to the bucket
├── digital/            # Gallery photos (wedding album) — ordered via galleries.ts
└── blog/               # Story-page photos (the-wish, sup, cruise, etc.)

src/
├── assets/             # Only the seal logos; photos are not in the repo
├── components/         # Sidebar, PhotoGrid, Photo, Lightbox, Logo, Icon,
│                       #   Countdown, BaseSchema
├── data/
│   ├── content.ts      # All i18n strings (EN + VI) — the single source of locale content
│   └── galleries.ts    # Gallery photo display order (filenames in the bucket)
├── lib/photos.ts       # builds bucket URLs + srcsets from the manifest (MAX_WEB=3840)
├── layouts/Layout.astro
├── pages/              # index, events, story, gallery, rsvp, gifts (+ vi/ mirrors)
├── styles/global.css   # Theme styles (sidebar layout, lightbox, prose, etc.)
└── config.ts           # Site name, nav (EN + VI), social links
public/
├── hero.webp           # Home page background image
├── momo.webp            # Momo QR on gifts page
└── _headers             # CSP + security headers (applied by static host)
(no scripts/ — the one-time photo upload script is not kept in the repo)
```

### Internationalization

There is no i18n framework — locale is path-based. Pages under `/vi/` are Vietnamese; everything else is English. The `localeFromPath()` helper in `src/data/content.ts` picks the locale from `Astro.url.pathname`. Each page exists in two copies (`src/pages/X.astro` and `src/pages/vi/X.astro`) that share the same logic and differ only by import paths; all user-facing strings come from `content.ts`.

The Sidebar has a language toggle (EN ⇄ VI) that swaps the `/vi` prefix while preserving the rest of the path.

### Images

Photos are **not stored in this repo**. Originals live in `photos/` (gitignored) and are uploaded **as-is** to the public-read `my-wedding` bucket under `photos/<dir>/<filename>`. There is no build-time image processing and no rendition variants: each photo is a single plain `<img>` pointing at `PHOTO_BASE` (`src/config.ts`), so CI needs no bucket credentials and the deployed site is ~1.5 MB. Originals are uploaded with `Cache-Control: public, max-age=604800`, so replacing a photo takes up to a week to show up for repeat visitors.

- **Gallery photos** live in `photos/digital/`. Display order is defined by the ordered array in `src/data/galleries.ts`; tiles are cropped to 3:2 by CSS.
- **Story photos** live in `photos/blog/` and are referenced by filename via the `<Photo>` component.
- `public/hero.jpeg` is the home page background (with a gradient overlay; darker overlay in dark mode).

### Components

- `Countdown.astro` — counts down to (or up from) a wedding date; locale-aware labels. Server-renders initial values, ticks client-side.
- `PhotoGrid.astro` — the gallery grid with lightbox; reads the `digital/` entries of the photo manifest.
- `Photo.astro` — a single in-story photo with lightbox; reads the `blog/` entries of the photo manifest.
- `Lightbox.astro` — shared full-screen photo viewer.

### Styling

Global styles in `src/styles/global.css`. Uses CSS variables for theming (`--bg`, `--fg`, `--muted`, `--line`, `--brand`). Fonts: Cormorant Garamond (display) + EB Garamond (body), self-hosted via `@fontsource`. Light/dark theme toggle persisted in localStorage.

### Dependencies

- `astro` ^7 — static site generator (Rust compiler, Sätteri markdown)
- `@astrojs/sitemap` — sitemap generation
- `@fontsource/cormorant-garamond`, `@fontsource/eb-garamond` — self-hosted fonts
- `@astrojs/check`, `typescript` (dev) — type checking

### Common Tasks

**Editing content:** Edit strings in `src/data/content.ts` — both locales live there. The two page copies (`pages/` and `pages/vi/`) read from it automatically.

**Adding a gallery photo:** Drop the original in `photos/digital/`, add its filename to `src/data/galleries.ts`, and upload it with `rc put photos/digital/<file> public-buckets/my-wedding/photos/digital/<file>`.

**Adding a story photo:** Drop the original in `photos/blog/`, reference it by filename in the `images` array of the relevant story section in `content.ts`, and upload it the same way.

### Resources

- Astro Docs: https://docs.astro.build
- Theme: https://github.com/XD-QIN/astro-photo-folio
