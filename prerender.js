import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from './src/entry-server.jsx';
import { navItems } from './src/nav-items.jsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  // Ensure dist directory exists
  const distPath = path.resolve(__dirname, 'dist/client');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  console.log('Starting prerender process...');

  // Prerender each route from navItems
  for (const route of navItems) {
    try {
      console.log(`Prerendering route: ${route.to}`);
      const { html } = render(route.to);
      
      // Create the directory structure if it doesn't exist
      const routePath = path.join(distPath, route.to === '/' ? 'index.html' : `${route.to}/index.html`);
      fs.mkdirSync(path.dirname(routePath), { recursive: true });
      
      // Write the HTML file
      const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
      fs.writeFileSync(routePath, finalHtml);
      
      console.log(`Successfully prerendered: ${route.to}`);
    } catch (error) {
      console.error(`Error prerendering route ${route.to}:`, error);
    }
  }

  console.log('Prerender complete!');
}

prerender().catch(console.error);