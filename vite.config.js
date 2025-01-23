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
    alias: {
      '@': resolve(__dirname, './src'),
      '$lib': resolve(__dirname, 'lib')
    }
  },
  build: {
    chunkSizeWarningLimit: 500,
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    assetsInlineLimit: 4096
  }
});