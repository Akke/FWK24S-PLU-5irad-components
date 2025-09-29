/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    dedupe: ["react", "react-dom", "@akkelw/5irad-board-ctx"],
  },
  optimizeDeps: {
    include: ["5irad-components", "@akkelw/5irad-board-ctx"]
  },
  ssr: {
    noExternal: ["5irad-components", "@akkelw/5irad-board-ctx"]
  },
  build: {
    lib: {
      entry: "src/index.jsx",
      name: "FiveIradComponents",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-router",
        "react-router-dom",
        "@akkelw/5irad-board-ctx",
      ],
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [storybookTest({ configDir: path.join(dirname, ".storybook") })],
      test: {
        name: "storybook",
        browser: { enabled: true, headless: true, provider: "playwright", instances: [{ browser: "chromium" }] },
        setupFiles: [".storybook/vitest.setup.js"]
      }
    }]
  }
});
