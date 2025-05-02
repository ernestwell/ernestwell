import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ernestwell/", 
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
