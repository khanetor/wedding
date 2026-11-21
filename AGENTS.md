# AGENTS.md - Development Guidelines

## Project Overview

This is an Astro-based wedding website for Kha & Linh. It supports English and Vietnamese localization (`/` and `/vi/` routes). The site includes a home page with hero background, event details with live countdowns, our story with photo gallery, photo album, RSVP form, and gift information.

Built on the [astro-photo-folio](https://github.com/XD-QIN/astro-photo-folio) theme.

## Build Commands

```bash
bun run dev       # Start development server with hot reload
bun run build     # Build for production
bun run preview   # Preview production build locally
```

**Always use `bun` and `bunx` — never npm, npx, pnpm, yarn, or node directly.**

No tests exist in this project. Run `bunx tsc --noEmit` for type checking.

## Architecture

```
photos/                 # Photo originals (not in git) — uploaded to the bucket
├── digital/            # Gallery photos — ordered via galleries.ts
└── blog/               # Story photos (the-wish, sup, cruise, etc.)

src/
├── assets/             # Seal logos only
├── components/         # Sidebar, PhotoGrid, Photo, Lightbox, Logo, Icon,
│                       #   Countdown, BaseSchema
├── data/
│   ├── content.ts      # All i18n strings (EN + VI) — the single source of locale content
│   └── galleries.ts    # Gallery photo display order
├── lib/photos.ts       # photo URL from PHOTO_BASE
├── layouts/Layout.astro
├── pages/              # index, events, story, gallery, rsvp, gifts (+ vi/ mirrors)
├── styles/global.css   # Theme styles (sidebar layout, lightbox, prose, etc.)
└── config.ts           # Site name, nav (EN + VI), social links
public/
├── hero.webp           # Home page background image
├── momo.webp            # Momo QR on gifts page
└── _headers             # CSP + security headers (applied by static host)
```

### Internationalization

There is no i18n framework — locale is path-based. Pages under `/vi/` are Vietnamese; everything else is English. The `localeFromPath()` helper in `src/data/content.ts` picks the locale from `Astro.url.pathname`. Each page exists in two copies (`src/pages/X.astro` and `src/pages/vi/X.astro`) that share the same logic and differ only by import paths; all user-facing strings come from `content.ts`.

The Sidebar has a language toggle (EN ⇄ VI) that swaps the `/vi` prefix while preserving the rest of the path.

### Images

Photos are **not in this repo**. Originals live in `photos/` and are uploaded as-is to the public-read `my-wedding` bucket under `photos/<dir>/<filename>`. The site serves them directly (`PHOTO_BASE` in `src/config.ts`) — one plain `<img>` per photo, no build-time processing and no renditions.

- **Gallery:** `photos/digital/`, ordered by `src/data/galleries.ts`; tiles are cropped to 3:2 by CSS.
- **Story:** `photos/blog/`, referenced by filename via `<Photo>`.
- `public/hero.webp` is the home page background (gradient overlay; darker in dark mode).

### Components

- `Countdown.astro` — counts down to (or up from) a wedding date; locale-aware labels. Server-renders initial values, ticks client-side.
- `PhotoGrid.astro` — the gallery grid with lightbox; lists `galleries.ts` filenames from the bucket.
- `Photo.astro` — a single in-story photo with lightbox; one bucket filename.
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

**Adding a gallery photo:** put it in `photos/digital/`, add its filename to `src/data/galleries.ts`, upload it with `rc put`.

**Adding a story photo:** put it in `photos/blog/`, reference it by filename in the story section's `images` array in `content.ts`, upload it the same way.

### Resources

- Astro Docs: https://docs.astro.build
- Theme: https://github.com/XD-QIN/astro-photo-folio
