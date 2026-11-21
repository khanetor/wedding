import { PHOTO_BASE } from "../config";

// Photos live in the `my-wedding` bucket, not in this repo; the originals in
// photos/ (gitignored) are uploaded as-is. The bucket is public-read, so the
// browser fetches each photo straight from the CDN-fronted endpoint — one
// plain <img> per photo, no build-time image processing and no renditions.
export const photosUrl = (dir: "digital" | "blog", file: string) => `${PHOTO_BASE}/${dir}/${file}`;

// Turn a filename into a readable caption: "01-snowy-harbor.jpg" -> "Snowy harbor".
export function captionFromFilename(name: string, fallbackIndex = 0): string {
  const baseName = name.split("/").pop() ?? name;
  const stem = baseName.replace(/\.[^.]+$/, "");
  const words = stem
    .replace(/^[\s\d_-]+/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!words) return `Photograph ${fallbackIndex + 1}`;
  return words.charAt(0).toUpperCase() + words.slice(1);
}
