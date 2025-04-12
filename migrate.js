/**
 * Migration helper script for Next.js to Eleventy conversion
 * 
 * This script helps with:
 * 1. Setting up the initial Eleventy project structure
 * 2. Copying and renaming files from Next.js to Eleventy format
 * 3. Moving assets to the correct locations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  nextjsDir: './', // Current directory with Next.js project
  eleventyDir: './eleventy-site', // Target directory for Eleventy project
  directories: [
    'src',
    'src/_data',
    'src/_includes',
    'src/_includes/partials',
    'src/_includes/components',
    'src/_layouts',
    'src/js',
    'src/styles',
    'src/about-us',
    'src/contact',
    'src/services',
    'src/locations',
    'src/storage',
    'src/move-checklist',
    'src/testimonials',
    'src/areas-we-cover',
  ]
};

// Create directory structure
function createDirectories() {
  console.log('Creating directory structure...');
  
  if (!fs.existsSync(config.eleventyDir)) {
    fs.mkdirSync(config.eleventyDir);
  }
  
  config.directories.forEach(dir => {
    const fullPath = path.join(config.eleventyDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Created: ${fullPath}`);
    }
  });
}

// Copy configuration files
function copyConfigFiles() {
  console.log('Copying configuration files...');
  
  // Copy .eleventy.js
  fs.copyFileSync(
    path.join(config.nextjsDir, '.eleventy.js'),
    path.join(config.eleventyDir, '.eleventy.js')
  );
  
  // Copy package.json (renamed from package.11ty.json)
  fs.copyFileSync(
    path.join(config.nextjsDir, 'package.11ty.json'),
    path.join(config.eleventyDir, 'package.json')
  );
  
  // Copy tailwind config
  fs.copyFileSync(
    path.join(config.nextjsDir, 'tailwind.11ty.config.js'),
    path.join(config.eleventyDir, 'tailwind.config.js')
  );
  
  // Copy README
  fs.copyFileSync(
    path.join(config.nextjsDir, 'README.11ty.md'),
    path.join(config.eleventyDir, 'README.md')
  );
}

// Copy source files
function copySourceFiles() {
  console.log('Copying source files...');
  
  // Copy base layout
  fs.copyFileSync(
    path.join(config.nextjsDir, 'src/_layouts/base.njk'),
    path.join(config.eleventyDir, 'src/_layouts/base.njk')
  );
  
  // Copy partials
  fs.copyFileSync(
    path.join(config.nextjsDir, 'src/_includes/partials/header.njk'),
    path.join(config.eleventyDir, 'src/_includes/partials/header.njk')
  );
  
  fs.copyFileSync(
    path.join(config.nextjsDir, 'src/_includes/partials/footer.njk'),
    path.join(config.eleventyDir, 'src/_includes/partials/footer.njk')
  );
  
  // Copy components
  const componentsDir = path.join(config.nextjsDir, 'src/_includes/components');
  const targetComponentsDir = path.join(config.eleventyDir, 'src/_includes/components');
  
  fs.readdirSync(componentsDir).forEach(file => {
    fs.copyFileSync(
      path.join(componentsDir, file),
      path.join(targetComponentsDir, file)
    );
  });
  
  // Copy pages
  fs.copyFileSync(
    path.join(config.nextjsDir, 'src/index.njk'),
    path.join(config.eleventyDir, 'src/index.njk')
  );
  
  fs.copyFileSync(
    path.join(config.nextjsDir, 'src/about-us/index.njk'),
    path.join(config.eleventyDir, 'src/about-us/index.njk')
  );
  
  // Copy styles
  fs.copyFileSync(
    path.join(config.nextjsDir, 'src/styles/tailwind.css'),
    path.join(config.eleventyDir, 'src/styles/tailwind.css')
  );
  
  // Copy JavaScript
  fs.copyFileSync(
    path.join(config.nextjsDir, 'src/js/main.js'),
    path.join(config.eleventyDir, 'src/js/main.js')
  );
}

// Copy public assets
function copyPublicAssets() {
  console.log('Copying public assets...');
  
  // Create public directory
  const publicDir = path.join(config.eleventyDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  // Copy all files from Next.js public directory
  const nextPublicDir = path.join(config.nextjsDir, 'public');
  
  if (fs.existsSync(nextPublicDir)) {
    execSync(`cp -R ${nextPublicDir}/* ${publicDir}`);
    console.log('Copied public assets');
  } else {
    console.log('No public directory found in Next.js project');
  }
}

// Initialize npm
function initializeNpm() {
  console.log('Installing dependencies...');
  
  try {
    execSync('cd ' + config.eleventyDir + ' && npm install', { stdio: 'inherit' });
    console.log('Dependencies installed successfully');
  } catch (error) {
    console.error('Error installing dependencies:', error);
  }
}

// Main function
function main() {
  console.log('Starting migration from Next.js to Eleventy...');
  
  createDirectories();
  copyConfigFiles();
  copySourceFiles();
  copyPublicAssets();
  initializeNpm();
  
  console.log('\nMigration completed!');
  console.log(`\nTo start the Eleventy development server, run:
  cd ${config.eleventyDir}
  npm start
  `);
}

// Run the script
main();
