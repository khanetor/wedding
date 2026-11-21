import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Site is a project page served at a subpath:
  // https://khanetor.github.io/wedding
  base: "/wedding",

  // Generate sitemap-index.xml + sitemap-0.xml (referenced from robots.txt).
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/robots.txt"),
    }),
  ],
  // Content-Security-Policy is delivered as an HTTP header from public/_headers
  // (not an Astro <meta>) so that `frame-ancestors` takes effect. The policy uses
  // script-src/style-src 'unsafe-inline' for the few small inline scripts this
  // site ships — notably the pre-paint theme toggle in Layout.astro, which must
  // run inline before the bundle loads.
  // Your production domain — used for canonical URLs, Open Graph tags, the
  // sitemap, robots.txt, and the JSON-LD. CHANGE THIS to your own domain;
  // everything URL-bound is derived from it.
  site: "https://khanetor.github.io/wedding",

  // Fully static output — deploy the generated dist/ to any static host.
  // Images are optimized at build time with sharp.
  build: {
    // Inline ALL stylesheets into the HTML so the first paint already matches
    // the final sidebar layout (no unstyled flash).
    // ponytail: inlining all CSS avoids FOUC. Switch to 'auto' (above-the-fold
    // only) if page count grows past ~20 and total CSS transfer becomes a concern.
    inlineStylesheets: "always",
  },
});
