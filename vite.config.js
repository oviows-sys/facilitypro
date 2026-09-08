import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Publishes into /docs so GitHub Pages can serve from "main branch /docs".
// `base` MUST match the repository name: https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: "/facilitypro/",
  build: { outDir: "docs", emptyOutDir: true },
});
