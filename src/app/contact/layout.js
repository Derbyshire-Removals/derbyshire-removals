
export const metadata = {
  title: "Contact Us | Derbyshire Removals - Get Your Free Quote Today",
  description: "Contact Derbyshire Removals for professional moving services in Derbyshire and Midlands and discuss your moving needs with our expert team.",
  keywords: "contact removals derby, moving quote derby, removal company contact, furniture removals contact, derby movers contact",
  alternates: {
    canonical: "https://derbyshireremovals.com/contact",
  },
  openGraph: {
    title: "Contact Us | Derbyshire Removals - Get Your Free Quote Today",
    description: "Contact our expert team for professional moving services in Derbyshire and across the Midlands. Request your free quote today!",
    url: "https://derbyshireremovals.com/contact",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://derbyshireremovals.com/contact",
    "name": "Contact - Derbyshire Removals",
    "mainEntity": {
      "@type": "Organization",
      "name": "Derbyshire Removals",
      "legalName": "Nexus Deliveries Ltd trading as Derbyshire Removals",
      "url": "https://derbyshireremovals.com",
      "email": "info@derbyshireremovals.com",
      "telephone": "0333 567 7001",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "0333 567 7001",
          "contactType": "customer service",
          "areaServed": "GB"
        },
        {
          "@type": "ContactPoint",
          "telephone": "01332 314312",
          "contactType": "Derby",
          "areaServed": "GB"
        },
        {
          "@type": "ContactPoint",
          "telephone": "01246 922192",
          "contactType": "Chesterfield",
          "areaServed": "GB"
        },
        {
          "@type": "ContactPoint",
          "telephone": "07425557000",
          "contactType": "mobile",
          "areaServed": "GB"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "48 Farmhouse Road",
        "addressLocality": "Derby",
        "postalCode": "DE24 3DB",
        "addressCountry": "GB"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61572796415223",
        "https://www.instagram.com/derbyshireremovals/"
      ]
    }
  }
};

export default function ContactLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
