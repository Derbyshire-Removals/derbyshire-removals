
export const metadata = {
  title: "Professional Removal Services in Mansfield | Derbyshire Removals",
  description: "Expert removal services in Mansfield. Local knowledge, competitive rates, and professional moving solutions for homes and businesses across Mansfield and surrounding areas.",
  keywords: "removals mansfield, house moves mansfield, office relocations mansfield, moving company mansfield, storage solutions mansfield",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/mansfield",
  },
  openGraph: {
    title: "Professional Removal Services in Mansfield | Derbyshire Removals",
    description: "Expert local movers with comprehensive knowledge of Mansfield. Residential and commercial moving services with competitive rates.",
    url: "https://derbyshireremovals.com/locations/mansfield",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Mansfield",
    provider: {
      "@type": "LocalBusiness",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Mansfield"
    },
    description: "Expert removal services in Mansfield with local knowledge, competitive rates, and professional moving solutions for homes and businesses."
  }
};

export default function MansfieldLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
