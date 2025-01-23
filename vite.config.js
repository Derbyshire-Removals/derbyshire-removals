import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig({
  server: {
    host: "::",
    port: "8080",
  },
  plugins: [
    react(),
    ssr({ prerender: true })
  ],
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
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'query-vendor': ['@tanstack/react-query'],
        }
      },
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'public/about-us/index.html'),
        areas: resolve(__dirname, 'public/areas-we-cover/index.html'),
        contact: resolve(__dirname, 'public/contact/index.html'),
        storage: resolve(__dirname, 'public/storage/index.html'),
        testimonials: resolve(__dirname, 'public/testimonials/index.html'),
      },
    },
    chunkSizeWarningLimit: 500,
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
  }
});