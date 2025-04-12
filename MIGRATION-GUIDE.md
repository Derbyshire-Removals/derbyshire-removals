# Next.js to Eleventy Migration Guide

This document outlines the steps to complete the migration from the Next.js/React codebase to Eleventy.

## Migration Steps

### 1. Setup and Configuration

- [x] Create Eleventy configuration file (.eleventy.js)
- [x] Set up Tailwind CSS integration
- [x] Configure build scripts in package.json
- [x] Create base layout template

### 2. Component Migration

- [x] Convert Header component to Nunjucks partial
- [x] Convert Footer component to Nunjucks partial
- [x] Convert Hero component to Nunjucks partial
- [x] Convert Services component to Nunjucks partial
- [x] Convert other homepage components
- [ ] Convert remaining page-specific components

### 3. Page Migration

- [x] Migrate Homepage
- [x] Migrate About Us page
- [ ] Migrate Services pages
  - [x] House Removals
  - [x] Office Removals
  - [ ] Packing Services
  - [x] Last Minute Removals
  - [ ] Antique and Fine Arts
- [ ] Migrate Location pages
  - [x] Derby
  - [ ] Other locations
- [x] Migrate Contact page
- [x] Migrate Storage page
- [x] Migrate Move Checklist page
- [x] Migrate Areas We Cover page
- [x] Migrate Testimonials page
- [x] Migrate FAQ page
- [ ] Migrate Terms and Conditions page
- [ ] Migrate Privacy Policy page

### 4. JavaScript Functionality

- [x] Implement mobile menu toggle
- [x] Implement form validation and submission
- [ ] Implement any other interactive elements

### 5. SEO and Metadata

- [x] Implement page metadata
- [x] Implement OpenGraph tags
- [x] Implement schema.org structured data
- [ ] Implement canonical URLs
- [ ] Implement sitemap.xml

### 6. Assets and Media

- [ ] Copy and optimize all images
- [ ] Ensure proper loading attributes
- [ ] Implement responsive images where needed

### 7. Testing and Optimization

- [ ] Test all pages on desktop and mobile
- [ ] Validate HTML
- [ ] Run Lighthouse audits
- [ ] Optimize for Core Web Vitals
- [ ] Test form submissions

### 8. Deployment

- [ ] Configure deployment settings
- [ ] Set up redirects for any changed URLs
- [ ] Test on staging environment
- [ ] Deploy to production

## File Structure Mapping

| Next.js Structure | Eleventy Structure |
|-------------------|-------------------|
| src/app/page.js | src/index.njk |
| src/app/about-us/page.js | src/about-us/index.njk |
| src/app/contact/page.js | src/contact/index.njk |
| src/app/storage/page.js | src/storage/index.njk |
| src/app/move-checklist/page.js | src/move-checklist/index.njk |
| src/app/areas-we-cover/page.js | src/areas-we-cover/index.njk |
| src/app/services/house-removals/page.js | src/services/house-removals/index.njk |
| src/app/components/Header.jsx | src/_includes/partials/header.njk |
| src/app/components/Footer.jsx | src/_includes/partials/footer.njk |
| src/app/components/Hero.jsx | src/_includes/components/hero.njk |
| src/app/components/Services.jsx | src/_includes/components/services.njk |
| src/app/layout.js | src/_layouts/base.njk |
| public/ | public/ |

## JavaScript Conversion Notes

### React State to Vanilla JS

For components that used React state:

```jsx
// React version
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
```

Converted to:

```javascript
// Vanilla JS version
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
});
```

### Form Handling

For forms that used React Hook Form:

```jsx
// React version with React Hook Form
const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: {
    name: "",
    email: "",
    // ...
  },
});

const onSubmit = async (data) => {
  // Submit logic
};
```

Converted to:

```javascript
// Vanilla JS version
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  // Validation logic
  const name = document.getElementById('name').value;
  // ...

  // Submit logic
});
```

## CSS/Tailwind Notes

Tailwind classes remain largely the same between the Next.js and Eleventy versions. The main difference is in how the CSS is processed and included in the build.

## Content Management

In the Next.js version, content was hardcoded in JSX. In the Eleventy version:

- Page content is in Markdown or Nunjucks templates
- Reusable components are in the `_includes` directory
- Global data can be stored in the `_data` directory

## Next Steps

After completing this migration, consider:

1. Setting up a headless CMS for easier content management
2. Implementing image optimization with Eleventy Image plugin
3. Adding more advanced performance optimizations
4. Setting up automated testing
