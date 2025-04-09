
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
export const getLocationMovingCompanySchema = (location, phone, options = {}) => {
  // Use the main business address but indicate service area
  const mainAddress = {
    "@type": "PostalAddress",
    "streetAddress": "48 Farmhouse Road",
    "addressLocality": "Derby",
    "addressRegion": "Derbyshire",
    "postalCode": "DE24 3DB",
    "addressCountry": "GB"
  };
  
  // Build the schema with appropriate location-specific data
  return {
    "@type": "MovingCompany",
    "name": `Derbyshire Removals - ${location}`,
    "image": "https://derbyshireremovals.com/images/van.jpg",
    "description": `Professional removal services in ${location}`,
    "priceRange": "££",
    "address": mainAddress,
    "url": `https://derbyshireremovals.com/locations/${location.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": phone || "+443335677001",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": options.latitude || 52.9225, // Default to Derby
        "longitude": options.longitude || -1.4746
      },
      "geoRadius": "40 mi" // Service radius from location
    },
    "areaServed": {
      "@type": "City",
      "name": location,
      ...(options.region && { "containedIn": options.region })
    }
  };
};

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

// For contact page schema
export const getContactPageSchema = () => {
  const organization = getOrganizationSchema();
  
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://derbyshireremovals.com/contact",
    "name": "Contact - Derbyshire Removals",
    "mainEntity": {
      "@type": "Organization",
      "name": organization.name,
      "legalName": "Nexus Deliveries Ltd trading as Derbyshire Removals",
      "url": organization.url,
      "image": organization.image,
      "logo": organization.logo,
      "email": organization.email,
      "telephone": organization.telephone[0],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+443335677001",
          "contactType": "customer service",
          "areaServed": "GB"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+441332314312",
          "contactType": "Derby",
          "areaServed": "GB"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+441246922192",
          "contactType": "Chesterfield",
          "areaServed": "GB"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+447425557000",
          "contactType": "mobile",
          "areaServed": "GB"
        }
      ],
      "address": organization.address,
      "sameAs": organization.sameAs
    }
  };
};

// Helper function to generate complete schema with context and graph
export const generateSchemaScript = (schemaObjects) => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": Array.isArray(schemaObjects) ? schemaObjects : [schemaObjects]
  };
  
  return JSON.stringify(schema);
};
