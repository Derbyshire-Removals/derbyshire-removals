import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from './src/entry-server.jsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get all routes from nav-items
import { navItems } from './src/nav-items.jsx';

async function prerender() {
  console.log('Starting prerender process...');

  // Create dist directory if it doesn't exist
  const distPath = path.resolve(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  // Prerender each route
  for (const route of navItems) {
    const url = route.to;
    const context = {};
    
    console.log(`Prerendering route: ${url}`);
    
    const appHtml = await render(url, context);
    
    const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Derbyshire Removals</title>
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

    // Create route directory
    const routePath = path.join(distPath, url.substring(1));
    fs.mkdirSync(routePath, { recursive: true });

    // Write the HTML file
    fs.writeFileSync(
      path.join(routePath, 'index.html'),
      html
    );
    
    console.log(`Successfully generated: ${url}`);
  }

  console.log('Prerender complete!');
}

prerender().catch(console.error);