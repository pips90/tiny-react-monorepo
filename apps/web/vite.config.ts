import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@pips90/ui": path.resolve(__dirname, "../..", "packages", "ui", "src"),
      react: path.resolve(__dirname, "../..", "node_modules", "react"),
      "react-dom": path.resolve(__dirname, "../..", "node_modules", "react-dom"),
      "styled-components": path.resolve(
        __dirname,
        "../..",
        "node_modules",
        "styled-components",
      ),
    },
  },
});
