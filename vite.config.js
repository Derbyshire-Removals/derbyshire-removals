
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy";
import ssr from 'vite-plugin-ssr/plugin';

// Import routes directly (no React components)
import { routesToPrerender } from './src/utils/routes';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: "8080",
    historyApiFallback: true,
  },
  plugins: [
    react({
      // Enable server-side rendering for pre-rendering
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          '@babel/plugin-transform-react-jsx'
        ]
      }
    }),
    mode === 'development' && componentTagger(),
    mode === 'production' && ssr({
      // Configure static-site generation
      prerender: {
        routes: routesToPrerender,
        noExtraDir: true,
        parallel: true
      }
    }),
    mode === 'production' && viteStaticCopy({
      targets: [
        {
          src: 'public/*',
          dest: 'dist'
        }
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@/components",
        replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
      },
      {
        find: "@/lib",
        replacement: fileURLToPath(new URL("./src/lib", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },
    ],
  },
  build: {
    // Improve SSR build output
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'query-vendor': ['@tanstack/react-query'],
        }
      }
    },
    chunkSizeWarningLimit: 500,
    // Pre-rendering configuration
    ssr: {
      noExternal: ['react-helmet']
    }
  }
}));
