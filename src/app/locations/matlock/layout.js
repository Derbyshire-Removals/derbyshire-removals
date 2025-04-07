
export const metadata = {
  title: "Expert Removal Services in Matlock | Derbyshire Removals",
  description: "Expert removal services in Matlock. Local knowledge, competitive rates, and professional moving solutions for houses and businesses across Matlock.",
  keywords: "removals matlock, house moves matlock, office relocations matlock, moving company matlock, storage solutions matlock",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/matlock",
  },
  openGraph: {
    title: "Expert Removal Services in Matlock | Derbyshire Removals",
    description: "Expert local movers with comprehensive knowledge of Matlock. Residential and commercial moving services with competitive rates.",
    url: "https://derbyshireremovals.com/locations/matlock",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Removal Services in Matlock",
    "provider": {
      "@type": "MovingCompany",
      "name": "Derbyshire Removals",
      "@id": "https://derbyshireremovals.com/#organization"
    },
    "serviceType": "Moving Services",
    "areaServed": {
      "@type": "City",
      "name": "Matlock"
    },
    "description": "Expert removal services in Matlock with local knowledge, competitive rates, and professional moving solutions for houses and businesses."
  }
};

export default function MatlockLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
