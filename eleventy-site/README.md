# Derbyshire Removals - Eleventy Website

This is the Eleventy (11ty) version of the Derbyshire Removals website, migrated from Next.js/React to improve performance and reduce JavaScript payload.

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Development

To run the development server:

```bash
npm start
```

This will start the Eleventy development server and Tailwind CSS watcher. The site will be available at [http://localhost:8080](http://localhost:8080).

### Building for Production

To build the site for production:

```bash
npm run build
```

This will generate the static site in the `dist` directory.

## Project Structure

- `src/`: Source files
  - `_data/`: Global data files
  - `_includes/`: Reusable components and partials
    - `components/`: Page components (hero, services, etc.)
    - `partials/`: Smaller reusable parts (header, footer)
  - `_layouts/`: Page layouts
  - `styles/`: CSS files (Tailwind)
  - `js/`: JavaScript files
  - Various content directories for pages

## Key Features

- **Static Site Generation**: All pages are pre-rendered at build time
- **Minimal JavaScript**: Only essential interactivity is handled with vanilla JS
- **Tailwind CSS**: For styling
- **Optimized Images**: Images are properly sized and include loading attributes
- **SEO Optimized**: Includes metadata, OpenGraph tags, and schema.org structured data

## Migrating from Next.js

This project was migrated from a Next.js/React application. The key changes include:

1. Replacing React components with Nunjucks templates
2. Converting client-side React state to vanilla JavaScript
3. Implementing forms without React Hook Form
4. Maintaining the same visual design and content structure
5. Preserving SEO elements and structured data

## Performance Benefits

The Eleventy version offers several performance improvements:

- Significantly reduced JavaScript payload
- Faster initial page load
- Improved Core Web Vitals scores
- Better user experience on slower connections
- Reduced bandwidth usage

## Deployment

The site can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

## License

This project is private and proprietary to Derbyshire Removals.


# TODO Schema.org
[x] Home
[x] /move-checklist
[x] /storage
[x] /privacy-policy
[x] /about-us (page is completely different)
[x] /faq (missing from menu)
[x] /contact
[x] /terms-and-conditions
[x] /services/house-removals
[x] /services/packing-services
[x] /services/office-removals
[x] /services/last-minute-removals
[x] /services/antique-and-fine-arts
[x] /locations/derby
[x] /locations/matlock
[x] /locations/chesterfield
[ ] /locations/alfreton
[ ] /locations/buxton
[ ] /locations/mansfield
[ ] /locations/loughborough

[ ] /packaging-material (Doesnt work at all)
[ ] /areas-we-cover (shouldn't be in the main nav?)
[ ] /testimonials


# TODO Webpage design
[ ] Home
[ ] /move-checklist
[ ] /storage
[ ] /packaging-material
[ ] /areas-we-cover
[ ] /about-us
[ ] /testimonials
[ ] /faq
[ ] /contact
[ ] /terms-and-conditions
[ ] /services/house-removals
[ ] /services/packing-services
[ ] /services/office-removals
[ ] /services/last-minute-removals
[ ] /services/antique-and-fine-arts
[ ] /locations/derby
[ ] /locations/alfreton
[ ] /locations/chesterfield
[ ] /locations/buxton
[ ] /locations/matlock
[ ] /locations/mansfield
[ ] /locations/loughborough
[ ] /privacy-policy