import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: "8080",
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },
    ],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        server: resolve(__dirname, 'src/entry-server.jsx')
      },
      output: {
        // Only keep TanStack Query in manual chunks
        manualChunks: {
          'query-vendor': ['@tanstack/react-query']
        }
      },
      external: ['react', 'react-dom', 'react-router-dom']
    },
    chunkSizeWarningLimit: 500,
    ssrManifest: true,
    ssr: resolve(__dirname, 'src/entry-server.jsx')
  }
});
