
export const metadata = {
  title: "Professional Removal Services in Derby | Derbyshire Removals",
  description: "Expert removal services in Derby. Local knowledge, competitive rates, and professional moving solutions for homes and businesses across Derby and surrounding areas.",
  keywords: "removals derby, house moves derby, office relocations derby, moving company derby, storage solutions derby",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/derby",
  },
  openGraph: {
    title: "Professional Removal Services in Derby | Derbyshire Removals",
    description: "Expert local movers with comprehensive knowledge of Derby. Residential and commercial moving services with competitive rates.",
    url: "https://derbyshireremovals.com/locations/derby",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Derby",
    provider: {
      "@type": "LocalBusiness",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Derby"
    },
    description: "Expert removal services in Derby with local knowledge, competitive rates, and professional moving solutions for homes and businesses."
  }
};

export default function DerbyLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
