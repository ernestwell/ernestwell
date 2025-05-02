import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",

    // ✅ Custom chunking to split vendor files
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split each top-level dependency into its own chunk
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },

    // ✅ Optional: Increase the warning threshold
    chunkSizeWarningLimit: 1000, // in kB, increase if needed
  },
});
