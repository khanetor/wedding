import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Serve web-optimized images only — never the full-resolution original.
// Every rendition is WebP, capped at MAX_WEB px on the long edge. MAX_WEB is 3840
// (4K) so galleries stay crisp on high-res / 5K / 6K / 8K displays while still
// being a downscaled, recompressed derivative (not your printable original).
// Raise it (e.g. 5120) for sharper 8K at the cost of larger files; lower it for
// more protection. Source originals that Astro emits while transforming are
// stripped after the build by scripts/strip-unreferenced-assets.mjs.
export const MAX_WEB = 3840;
const WIDTHS = [640, 1080, 1600, 2048, 2560, 3840];

// Responsive `sizes` for the 2-column 3:2 galleries. Desktop reserves the 300px
// sidebar; tablet and mobile are full width. This lets the browser fetch a
// rendition matched to each tile — sharp where needed, lean elsewhere — instead
// of over-fetching from a loose vw estimate.
//   desktop (>=1024): (100vw - sidebar 300 - padding 88 - gap 16) / 2  = 50vw - 202px
//   tablet  (>=641):  (100vw - padding ~56 - gap ~16) / 2              = 50vw - 36px
//   mobile  (1 col):   100vw - padding ~40                             = 100vw - 40px
export const GRID_SIZES =
  '(min-width: 1024px) calc(50vw - 202px), (min-width: 641px) calc(50vw - 36px), calc(100vw - 40px)';

// A single in-post <Photo> spans the readable ~64ch column (~680px).
export const POST_SIZES = '(min-width: 1024px) 680px, calc(100vw - 40px)';


export interface RenderedPhoto {
  // AVIF is the primary format (~50% smaller than WebP at similar quality);
  // WebP is the fallback for the few browsers without AVIF support.
  avifSrcset: string;
  webpSrcset: string;
  src: string; // largest WebP rendition (same as `largest`, kept for lightbox data-full)
  largest: string; // alias of src; exposes intent
  width: number;
  height: number;
}

// Turn a filename into a readable caption: "01-snowy-harbor.jpg" -> "Snowy harbor".
export function captionFromFilename(name: string, fallbackIndex = 0): string {
  const baseName = name.split('/').pop() ?? name;
  const stem = baseName.replace(/\.[^.]+$/, '');
  const words = stem.replace(/^[\s\d_-]+/, '').replace(/[-_]+/g, ' ').trim();
  if (!words) return `Photograph ${fallbackIndex + 1}`;
  return words.charAt(0).toUpperCase() + words.slice(1);
}

// Build responsive srcsets in both AVIF and WebP from explicit per-width
// renditions, so no image larger than the cap is ever generated. AVIF quality 60
// matches WebP quality 80 visually at roughly half the byte size.
export async function renderPhoto(src: ImageMetadata): Promise<RenderedPhoto> {
  const cap = Math.min(MAX_WEB, src.width || MAX_WEB);
  const widths = WIDTHS.filter((w) => w <= cap);
  if (!widths.includes(cap)) widths.push(cap);
  widths.sort((a, b) => a - b);

  const [avif, webp] = await Promise.all([
    Promise.all(widths.map((w) => getImage({ src, width: w, format: 'avif', quality: 60 }))),
    Promise.all(widths.map((w) => getImage({ src, width: w, format: 'webp', quality: 80 }))),
  ]);

  const avifSrcset = avif.map((r) => `${r.src} ${r.attributes.width}w`).join(', ');
  const webpSrcset = webp.map((r) => `${r.src} ${r.attributes.width}w`).join(', ');
  const largest = webp[webp.length - 1];

  return { avifSrcset, webpSrcset, src: largest.src, largest: largest.src, width: largest.attributes.width, height: largest.attributes.height };
}
