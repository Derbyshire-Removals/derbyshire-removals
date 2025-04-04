
export const metadata = {
  title: "Professional Removal Services in Chesterfield | Derbyshire Removals",
  description: "Expert removal services in Chesterfield. Local knowledge, competitive rates, and professional moving solutions for houses and businesses across Chesterfield.",
  keywords: "removals chesterfield, house moves chesterfield, office relocations chesterfield, moving company chesterfield, storage solutions chesterfield",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/chesterfield",
  },
  openGraph: {
    title: "Professional Removal Services in Chesterfield | Derbyshire Removals",
    description: "Expert local movers with comprehensive knowledge of Chesterfield. Residential and commercial moving services with competitive rates.",
    url: "https://derbyshireremovals.com/locations/chesterfield",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Chesterfield",
    provider: {
      "@type": "MovingCompany",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Chesterfield"
    },
    description: "Expert removal services in Chesterfield with local knowledge, competitive rates, and professional moving solutions for houses and businesses."
  }
};

export default function ChesterfieldLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
