import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    // Add timestamp to force cache invalidation
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
        // Add build timestamp to force cache refresh
        manualChunks: undefined
      }
    },
    // Ensure clean builds
    emptyOutDir: true,
    // Add source maps for debugging
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __VERSION__: JSON.stringify(Date.now().toString()),
  },
  server: {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
        silenceDeprecations: ["import", "global-builtin"],
      },
    },
  },
});
