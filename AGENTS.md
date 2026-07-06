# AGENTS.md - Development Guidelines

## Project Overview

This is an Astro-based wedding website for Kha & Linh. It supports English and Vietnamese localization (`/` and `/vi/` routes). The site includes a home page with hero background, event details with live countdowns, our story with photo gallery, photo album, RSVP form, and gift information.

Built on the [astro-photo-folio](https://github.com/XD-QIN/astro-photo-folio) theme.

## Build Commands

```bash
bun run dev       # Start development server with hot reload
bun run build     # Build for production (also strips orphaned image sources)
bun run preview   # Preview production build locally
```

**Always use `bun` and `bunx` — never npm, npx, pnpm, yarn, or node directly.**

No tests exist in this project. Run `bunx tsc --noEmit` for type checking.

## Architecture

```
src/
├── assets/
│   ├── digital/        # Gallery photos (wedding album) — ordered via galleries.ts
│   └── blog/           # Story-page photos (the-wish, sup, cruise, etc.)
├── components/         # Sidebar, PhotoGrid, Photo, Lightbox, Logo, Icon,
│                       #   Countdown, BaseSchema
├── data/
│   ├── content.ts      # All i18n strings (EN + VI) — the single source of locale content
│   └── galleries.ts    # Gallery photo display order
├── lib/photos.ts       # web-resolution image rendering (responsive WebP, MAX_WEB=3840)
├── layouts/Layout.astro
├── pages/              # index, events, story, gallery, rsvp, gifts (+ vi/ mirrors)
├── styles/global.css   # Theme styles (sidebar layout, lightbox, prose, etc.)
└── config.ts           # Site name, nav (EN + VI), social links
public/
├── hero.jpeg           # Home page background image
├── momo.webp            # Momo QR on gifts page
└── _headers             # CSP + security headers (applied by static host)
scripts/
└── strip-unreferenced-assets.mjs  # post-build: removes orphaned image originals
```

### Internationalization

There is no i18n framework — locale is path-based. Pages under `/vi/` are Vietnamese; everything else is English. The `localeFromPath()` helper in `src/data/content.ts` picks the locale from `Astro.url.pathname`. Each page exists in two copies (`src/pages/X.astro` and `src/pages/vi/X.astro`) that share the same logic and differ only by import paths; all user-facing strings come from `content.ts`.

The Sidebar has a language toggle (EN ⇄ VI) that swaps the `/vi` prefix while preserving the rest of the path.

### Images

- **Gallery photos** go in `src/assets/digital/`. Display order is defined by the `order` field in `src/data/galleries.ts` (matching the original VitePress gallery order). Photos are rendered as responsive WebP via `renderPhoto()`, capped at 3840px.
- **Story photos** go in `src/assets/blog/` and are referenced by filename via the `<Photo>` component.
- The build never ships full-resolution originals — `scripts/strip-unreferenced-assets.mjs` deletes orphaned sources after build.
- `public/hero.jpeg` is the home page background (with a gradient overlay; darker overlay in dark mode).

### Components

- `Countdown.astro` — counts down to (or up from) a wedding date; locale-aware labels. Server-renders initial values, ticks client-side.
- `PhotoGrid.astro` — the gallery grid with lightbox; reads from `src/assets/digital/`.
- `Photo.astro` — a single in-story photo with lightbox; reads from `src/assets/blog/`.
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

**Adding a gallery photo:** Drop the file in `src/assets/digital/`, then add an entry with the next `order` number in `src/data/galleries.ts`.

**Adding a story photo:** Drop the file in `src/assets/blog/`, then reference it by filename in the `images` array of the relevant story section in `content.ts`.

### Resources

- Astro Docs: https://docs.astro.build
- Theme: https://github.com/XD-QIN/astro-photo-folio
