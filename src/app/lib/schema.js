
/**
 * Centralized schema definitions for consistent SEO across the site
 */

// Core organization schema used as base for all pages
export const getOrganizationSchema = () => ({
  "@type": "Organization",
  "name": "Derbyshire Removals",
  "url": "https://derbyshireremovals.com",
  "logo": "https://derbyshireremovals.com/images/logo.png",
  "image": "https://derbyshireremovals.com/images/van.png",
  "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
  "email": "info@derbyshireremovals.com",
  "foundingDate": "1988",
  "description": "Professional removal services in Derbyshire since 1988, offering house and office removals, packing, and storage solutions.",
  "areaServed": [
    "Derby",
    "Matlock",
    "Alfreton",
    "Chesterfield",
    "Buxton",
    "Mansfield",
    "Loughborough",
    "East Midlands",
    "West Midlands",
    "Nationwide"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "48 Farmhouse Road",
    "addressLocality": "Derby",
    "addressRegion": "Derbyshire",
    "postalCode": "DE24 3DB",
    "addressCountry": "GB"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Derbyshire's Trusted Trader scheme",
    "url": "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61572796415223",
    "https://www.instagram.com/derbyshireremovals/",
    "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236",
  ],
});

// For location pages
export const getLocationMovingCompanySchema = (location, phone, addressData = {}) => ({
  "@type": "MovingCompany",
  "name": `Derbyshire Removals - ${location}`,
  "image": "https://derbyshireremovals.com/images/van.jpg",
  "description": `Professional removal services in ${location}`,
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": location,
    "addressRegion": addressData.region || "Derbyshire",
    "addressCountry": "GB",
    ...(addressData.streetAddress && { "streetAddress": addressData.streetAddress }),
    ...(addressData.postalCode && { "postalCode": addressData.postalCode })
  },
  ...(addressData.geo && { 
    "geo": addressData.geo
  }),
  "url": `https://derbyshireremovals.com/locations/${location.toLowerCase().replace(/\s+/g, '-')}`,
  "telephone": phone || "+443335677001",
  "areaServed": location
});

// For service pages
export const getServiceSchema = (serviceName, serviceType, description, areas = "Derbyshire and surrounding areas") => ({
  "@type": "Service",
  "name": serviceName,
  "provider": {
    "@type": "MovingCompany",
    "name": "Derbyshire Removals",
    "image": "https://derbyshireremovals.com/images/van.jpg",
    "priceRange": "££",
    "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 Farmhouse Road",
      "addressLocality": "Derby",
      "addressRegion": "Derbyshire",
      "postalCode": "DE24 3DB",
      "addressCountry": "GB"
    },
  },
  "description": description,
  "areaServed": areas,
  "serviceType": serviceType
});

// Helper function to generate complete schema with context and graph
export const generateSchemaScript = (schemaObjects) => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": Array.isArray(schemaObjects) ? schemaObjects : [schemaObjects]
  };
  
  return JSON.stringify(schema);
};
