/**
 * Centralized schema definitions for consistent SEO across the site
 */

// Core organization schema used as base for all pages
const organization = {
  "@type": "Organization",
  "@id": "https://derbyshireremovals.com/#organization",
  "name": "Derbyshire Removals",
  "url": "https://derbyshireremovals.com",
  "image": "https://derbyshireremovals.com/images/van.jpg",
  "logo": {
    "@type": "ImageObject",
    "url": "https://derbyshireremovals.com/images/logo.png",
    "width": 180,
    "height": 60
  },
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
    "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236"
  ]
};

// Helper function to get organization schema as a string
function getOrganizationSchema() {
  return JSON.stringify(organization);
}

// For location pages
function getLocationMovingCompanySchema(location, phone, options = {}) {
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
}

// For service pages
function getServiceSchema(serviceName, serviceType, description, areas = "Derbyshire and surrounding areas") {
  return {
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
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61572796415223",
        "https://www.instagram.com/derbyshireremovals/",
        "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236"
      ]
    },
    "description": description,
    "areaServed": areas,
    "serviceType": serviceType
  };
}

// For contact page schema
function getContactPageSchema() {
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
}

// Helper function to generate complete schema with context and graph
function generateSchemaScript(schemaObjects) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": Array.isArray(schemaObjects) ? schemaObjects : [schemaObjects]
  };

  return JSON.stringify(schema);
}

// Helper function to get a complete schema with organization included
function getFullSchema(additionalEntities = []) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [organization, ...additionalEntities]
  };
  return JSON.stringify(schema);
}

// For standard content pages
function getContentPageSchema(title, description, url, image = null) {
  return {
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `https://derbyshireremovals.com${url}`,
    "publisher": { "@id": "https://derbyshireremovals.com/#organization" },
    ...(image && { "image": `https://derbyshireremovals.com${image}` })
  };
}

// For location pages - complete schema with organization included
function getLocationPageSchema(location, phone, options = {}) {
  return [
    getLocationMovingCompanySchema(location, phone, options),
    organization
  ];
}

// For service pages - complete schema with organization included
function getServicePageSchema(serviceName, serviceType, description, areas, offerCatalog = null) {
  const schemas = [
    getServiceSchema(serviceName, serviceType, description, areas),
    organization
  ];

  if (offerCatalog) {
    schemas.push(offerCatalog);
  }

  return schemas;
}

// For FAQ page - complete schema
function getFAQPageSchema(faqItems) {
  return [
    {
      "@type": "FAQPage",
      "mainEntity": faqItems
    },
    organization
  ];
}

// For testimonials/review page
function getReviewPageSchema(aggregateRating, reviews = []) {
  return [
    {
      "@type": "LocalBusiness",
      "name": organization.name,
      "image": organization.image,
      "address": organization.address,
      "telephone": organization.telephone[0],
      "url": organization.url,
      "aggregateRating": aggregateRating,
      "review": reviews
    },
    organization
  ];
}

// For blog/article pages
function getArticlePageSchema(title, description, url, datePublished, dateModified, image, authorName) {
  return [
    {
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": `https://derbyshireremovals.com${image}`,
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "author": {
        "@type": "Person",
        "name": authorName
      },
      "publisher": {
        "@id": "https://derbyshireremovals.com/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://derbyshireremovals.com${url}`
      }
    },
    organization
  ];
}

// For breadcrumb schema
function getBreadcrumbSchema(breadcrumbItems) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://derbyshireremovals.com${item.url}`
    }))
  };
}

module.exports = {
  organization,
  getOrganizationSchema,
  getLocationMovingCompanySchema,
  getServiceSchema,
  getContactPageSchema,
  generateSchemaScript,
  getFullSchema,
  // New page-type specific schema generators
  getContentPageSchema,
  getLocationPageSchema,
  getServicePageSchema,
  getFAQPageSchema,
  getReviewPageSchema,
  getArticlePageSchema,
  getBreadcrumbSchema
};
