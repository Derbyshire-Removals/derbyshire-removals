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
    "width": 512,
    "height": 180
  },
  "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
  "email": "info@derbyshireremovals.com",
  "foundingDate": "1988",
  "description": "Professional removal services in Derbyshire since 1988, offering house and office removals, packing, and storage solutions.",
  "areaServed": [
    { "@type": "City", "name": "Derby" },
    { "@type": "City", "name": "Matlock" },
    { "@type": "City", "name": "Bakewell" },
    { "@type": "City", "name": "Chesterfield" },
    { "@type": "City", "name": "Alfreton" },
    { "@type": "City", "name": "Buxton" },
    { "@type": "City", "name": "Mansfield" },
    { "@type": "City", "name": "Loughborough" },
    { "@type": "State", "name": "East Midlands" },
    { "@type": "State", "name": "West Midlands" },
    { "@type": "Country", "name": "UK" },
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
    "name": location === "Derby" ? `Derbyshire Removals - ${location}` : `Derbyshire Removals - ${location} Service Area`,
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
      "geoRadius": 16093.4// Service radius from location
    },
    "areaServed": {
      "@type": "City",
      "name": location
    },
    "branchOf": {
        "@type": "Organization",
        "@id": "https://derbyshireremovals.com/#organization"
      }
  };
}

// For service pages
function getServiceSchema(serviceName, serviceType, description, url) {
  return {
    "@type": "Service",
    "name": serviceName,
    "@id": `https://derbyshireremovals.com/services/${url}`,
    "url": `https://derbyshireremovals.com/services/${url}`,
    "category": "Moving & Relocation",
    "image": "https://derbyshireremovals.com/images/van.jpg",
    "provider": {
      "@type": "Organization",
      "@id": "https://derbyshireremovals.com/#organization"
    },
    "description": description,
    "areaServed": organization.areaServed,
    "serviceType": serviceType,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "From 99.00",
      "eligibleRegion": {
        "@type": "Place",
        "name": "UK"
      },
      "availability": "https://schema.org/InStock"
    }
  };
}

// For contact page schema
function getContactPageSchema() {
  return {
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
function getServicePageSchema(serviceName, serviceType, description, url, offerCatalog = null) {
  const schemas = [
    getServiceSchema(serviceName, serviceType, description, url),
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

// Specific function for testimonials page with testimonials data
function getTestimonialsPageSchema(testimonials) {
  // Create the aggregate rating
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": testimonials.length,
    "bestRating": "5",
    "worstRating": "1"
  };

  // Create the reviews array (limit to 10 for performance)
  const reviews = testimonials.slice(0, 10).map(testimonial => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewBody": testimonial.review,
    "datePublished": "2024-01-01"
  }));

  // Create the FAQ page schema
  const faqPage = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What do customers say about Derbyshire Removals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our customers consistently rate us 5 stars for our professional, friendly, and efficient removal services."
        }
      }
    ]
  };

  return [
    {
      "@type": "MovingCompany",
      "name": organization.name,
      "image": organization.image,
      "address": organization.address,
      "telephone": organization.telephone,
      "url": organization.url,
      "priceRange": "££",
      "aggregateRating": aggregateRating,
      "review": reviews
    },
    faqPage,
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

// For move checklist page schema
function getMoveChecklistSchema() {
  const howToSchema = {
    "@type": "HowTo",
    "name": "Complete House Moving Checklist",
    "description": "A comprehensive guide for a stress-free home move with steps to take before, during, and after moving day.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "8 Weeks Before Moving",
        "text": "Start planning your move, research removal companies, and create an inventory"
      },
      {
        "@type": "HowToStep",
        "name": "4-6 Weeks Before Moving",
        "text": "Book your removal company, start decluttering, and notify relevant parties of your change of address"
      },
      {
        "@type": "HowToStep",
        "name": "2-3 Weeks Before Moving",
        "text": "Start packing non-essential items and arrange for utility disconnections/connections"
      },
      {
        "@type": "HowToStep",
        "name": "1 Week Before Moving",
        "text": "Finalize packing, prepare essential boxes, and confirm details with your removal company"
      },
      {
        "@type": "HowToStep",
        "name": "Moving Day",
        "text": "Supervise the loading process, conduct final checks, and ensure safe transport of your belongings"
      },
      {
        "@type": "HowToStep",
        "name": "After Moving",
        "text": "Unpack systematically, check for damages, and settle into your new home"
      }
    ]
  };

  // Return both the HowTo schema and the organization schema in a graph array
  return [organization, howToSchema];
}

// For storage page schema
function getStoragePageSchema() {
  return [
    organization,
    {
      "@type": "Service",
      "name": "Secure Storage Solutions",
      "serviceType": "Storage Service",
      "description": "Professional storage solutions with 24/7 security, climate control, and flexible terms for both short and long-term needs.",
      "provider": {
        "@type": "Organization",
        "@id": "https://derbyshireremovals.com/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "Derbyshire"
      }
    }
  ];
}

// For areas we cover page schema
function getAreasPageSchema() {
  return [
    {
      "@type": "WebPage",
      "name": "Areas We Cover | Derbyshire Removals",
      "description": "Explore the areas we service including Derby, Matlock, Chesterfield, Buxton and throughout the East and West Midlands.",
      "url": "https://derbyshireremovals.com/areas-we-cover"
    },
    organization
  ];
}

// For about page schema
function getAboutPageSchema() {
  return [
    {
      "@type": "AboutPage",
      "url": "https://derbyshireremovals.com/about-us/",
      "name": "About Derbyshire Removals",
      "mainEntity": {
        "@id": "https://derbyshireremovals.com/#organization"
      }
    },
    organization
  ];
}

// For home page schema
function getHomePageSchema() {
  return [
    organization,
    {
      "@type": "MovingCompany",
      "@id": "https://derbyshireremovals.com/#movingcompany",
      "name": "Derbyshire Removals",
      "url": "https://derbyshireremovals.com",
      "image": "https://derbyshireremovals.com/images/van.jpg",
      "priceRange": "££",
      "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
      "email": "info@derbyshireremovals.com",
      "address": organization.address,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.8744186998816",
        "longitude": "-1.487168677909595"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00",
        "areaServed": [
          "Derby",
          "Matlock",
          "Bakewell",
          "Alfreton",
          "Chesterfield",
          "Buxton",
          "Mansfield",
          "Loughborough",
          "East Midlands",
          "West Midlands",
          "Nationwide"
        ]
      }
    },
    {
      "@type": "Service",
      "name": "Removal Services",
      "provider": {
        "@type": "MovingCompany",
        "name": "Derbyshire Removals",
        "image": "https://derbyshireremovals.com/images/van.jpg",
        "priceRange": "££",
        "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
        "address": organization.address
      },
      "areaServed": {
        "@type": "State",
        "name": "Derbyshire"
      },
      "description": "Professional removal services for houses and businesses across Derbyshire.",
      "serviceType": "Removal Services",
      "provider": {
        "@id": "https://derbyshireremovals.com/#movingcompany"
      }
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "124",
      "bestRating": "5",
      "worstRating": "1",
      "itemReviewed": {
        "@type": "MovingCompany",
        "name": "Derbyshire Removals",
        "image": "https://derbyshireremovals.com/images/van.jpg",
        "priceRange": "££",
        "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
        "url": "https://derbyshireremovals.com",
        "address": organization.address
      }
    },
    {
      "@type": "WebSite",
      "name": "Derbyshire Removals",
      "url": "https://derbyshireremovals.com",
      "description": "Professional removal services in Derbyshire since 1988."
    }
  ];
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
  getTestimonialsPageSchema,
  getArticlePageSchema,
  getBreadcrumbSchema,
  getHomePageSchema,
  getAboutPageSchema,
  getAreasPageSchema,
  getStoragePageSchema,
  getMoveChecklistSchema
};
