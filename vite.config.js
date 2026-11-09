import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const buildDate = new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" });

export default defineConfig({
  plugins: [react()],
  define: {
    // Shown in the footer as "Last updated <Mon YYYY>"; refreshed on every deploy.
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
  build: {
    outDir: "build",
    // Keep small images (icons, thumbnails) as separate cacheable files rather than inlining.
    assetsInlineLimit: 0,
  },
});
