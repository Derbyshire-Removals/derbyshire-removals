
export const metadata = {
  title: "Professional Removal Services in Buxton | Derbyshire Removals",
  description: "Expert removal services in Buxton. Local knowledge, competitive rates, and professional moving solutions for homes and businesses across Buxton and surrounding areas.",
  keywords: "removals buxton, house moves buxton, office relocations buxton, moving company buxton, storage solutions buxton",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/buxton",
  },
  openGraph: {
    title: "Professional Removal Services in Buxton | Derbyshire Removals",
    description: "Expert local movers with comprehensive knowledge of Buxton. Residential and commercial moving services with competitive rates.",
    url: "https://derbyshireremovals.com/locations/buxton",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Buxton",
    provider: {
      "@type": "LocalBusiness",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Buxton"
    },
    description: "Expert removal services in Buxton with local knowledge, competitive rates, and professional moving solutions for homes and businesses."
  }
};

export default function BuxtonLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
