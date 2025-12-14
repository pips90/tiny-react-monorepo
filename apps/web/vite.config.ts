/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirname = __dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@pips90/ui": path.resolve(__dirname, "../..", "packages", "ui", "src"),
      react: path.resolve(__dirname, "../..", "node_modules", "react"),
      "react-dom": path.resolve(__dirname, "../..", "node_modules", "react-dom"),
      "styled-components": path.resolve(__dirname, "../..", "node_modules", "styled-components")
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});
