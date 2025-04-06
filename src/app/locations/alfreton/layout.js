
export const metadata = {
  title: "Removal Services in Alfreton | Derbyshire Removals",
  description: "Expert removal services in Alfreton. Local knowledge, competitive rates, and professional moving solutions for houses and businesses across Alfreton.",
  keywords: "removals alfreton, house moves alfreton, office relocations alfreton, moving company alfreton, storage solutions alfreton",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/alfreton",
  },
  openGraph: {
    title: "Removal Services in Alfreton | Derbyshire Removals",
    description: "Expert local movers with comprehensive knowledge of Alfreton. Residential and commercial moving services with competitive rates.",
    url: "https://derbyshireremovals.com/locations/alfreton",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Alfreton",
    provider: {
      "@type": "MovingCompany",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Alfreton"
    },
    description: "Expert removal services in Alfreton with local knowledge, competitive rates, and professional moving solutions for houses and businesses."
  }
};

export default function AlfretoneLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
