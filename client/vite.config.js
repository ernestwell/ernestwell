import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ernestwell/", // 👈 Add this if deploying to a subdirectory
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
