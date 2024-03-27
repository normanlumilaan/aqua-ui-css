import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import autoprefixer from "autoprefixer";
import data from "./data.ts";
import path from "node:path";

export default defineConfig({
  base: "aqua-ui-css",
  build: {
    outDir: "docs",
    cssMinify: false,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "aqua-ui-css",
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [pugPlugin(undefined, data)],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
});
