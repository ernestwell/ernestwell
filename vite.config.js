import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/ernestwell1/client/',
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure Vercel picks up this folder
  },
});
