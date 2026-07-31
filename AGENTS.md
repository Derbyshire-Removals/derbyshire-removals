# Repository Guidelines

## Project Structure & Module Organization

This Eleventy 2 site uses Nunjucks and Tailwind CSS. Pages follow `src/<route>/index.njk`, with locations under `src/locations/`. Reusable markup belongs in `src/_includes/`, the shared layout in `src/_layouts/base.njk`, and global values in `src/_data/`. JavaScript and Tailwind input are in `src/js/` and `src/styles/`; static assets go in `public/`. Never edit generated `dist/`.

## Build, Test, and Development Commands

- `npm ci` installs locked dependencies.
- `npm start` runs Eleventy at `http://localhost:8080` and watches Tailwind.
- `npm run build` generates `dist/`; run it before every PR.
- `npm run build-minified` matches the Netlify production build.
- `npm run clean` removes generated output; `npm run pdf:terms` regenerates the terms PDF (Pandoc and Tectonic required).

Use `npm run deploy` only when intentionally publishing to GitHub Pages.

## Coding Style & Naming Conventions

Use two-space indentation, JavaScript semicolons and single quotes, and lowercase kebab-case paths such as `src/locations/castle-donington/`. Extract repeated markup into includes. Prefer Tailwind and semantic HTML. Preserve labels and descriptive image `alt` text.

## SEO Requirements

Every indexable page needs a unique, accurate `title` and `description`, one descriptive `<h1>`, logical headings, useful copy, and contextual internal links. Location pages need genuinely local, customer-helpful information; never create near-duplicates by replacing only a town name. Avoid keyword stuffing, fabricated reviews, hidden content, and doorway pages.

Keep business details, claims, and URLs consistent with `src/_data/site.js`. Preserve canonical/Open Graph tags, `src/sitemap.njk`, and `public/robots.txt`. JSON-LD from `src/_data/schema.js` must match visible content; validate schema changes with Google's Rich Results Test. Published URL changes require a 301 in `netlify.toml` and updated links.

Use sized images (prefer WebP), meaningful filenames/alt text, and lazy-load below-the-fold media. Avoid unnecessary JavaScript and layout shifts. After major releases, review Search Console indexing and Core Web Vitals; rankings are never guaranteed by keyword placement.

## Testing Guidelines

There is no automated test suite. Require a clean production build, then inspect affected routes on mobile and desktop. Check navigation, forms, images, metadata, canonicals, JSON-LD, and links. Exercise JavaScript success and error paths.

## Commit & Pull Request Guidelines

Use specific imperative subjects, for example `Improve Derby location metadata`, and keep commits focused. PRs must explain user-visible and SEO impact, list validation, link issues, and include screenshots for visual work. Flag redirects, schema, analytics, forms, or deployment changes.

## Security & Configuration

Never commit `.env` files, credentials, or customer data. Carefully review changes to `netlify.toml`, external endpoints, analytics, and security headers.
