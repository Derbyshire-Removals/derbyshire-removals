
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: "8080",
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'generate-html-for-routes',
      closeBundle: async () => {
        if (mode === 'production') {
          console.log('Generating HTML files for SEO...');
          // Get all routes from the nav-items.jsx
          // This is a very simple implementation that copies index.html to each route
          
          const mainHtml = fs.readFileSync('./dist/index.html', 'utf-8');
          
          // Routes hardcoded based on nav-items.jsx
          const routes = [
            '/move-checklist',
            '/storage',
            '/packaging-material',
            '/areas-we-cover',
            '/about-us',
            '/testimonials',
            '/faq',
            '/contact',
            '/terms-and-conditions',
            '/services/home-removals',
            '/services/packing-services',
            '/services/office-removals',
            '/services/last-minute-removals',
            '/services/antique-and-fine-arts',
            '/locations/derby',
            '/locations/mansfield',
            '/locations/chesterfield',
            '/locations/buxton',
            '/locations/loughborough',
            '/privacy-policy'
          ];
          
          for (const route of routes) {
            const folderPath = `./dist${route}`;
            
            // Create folder if it doesn't exist
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
            }
            
            // Create HTML file for the route
            fs.writeFileSync(`${folderPath}/index.html`, mainHtml);
            console.log(`Generated HTML for ${route}`);
          }
        }
      }
    }
  ].filter(Boolean),
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
      }
    },
    chunkSizeWarningLimit: 500
  }
}));
