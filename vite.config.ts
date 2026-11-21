import { defineConfig } from 'vite-plus';

// Vite+ config used only for `vp check` / `vp lint` / `vp fmt` / `vp staged`;
// Astro keeps its own build config in astro.config.mjs.
export default defineConfig({
  fmt: { singleQuote: true, printWidth: 120 },
  lint: {},
  staged: {
    '*': 'vp check --fix',
  },
});
