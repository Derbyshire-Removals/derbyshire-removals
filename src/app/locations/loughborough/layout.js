
export const metadata = {
  title: "Professional Removal Services in Loughborough | Derbyshire Removals",
  description: "Expert removal services in Loughborough. Local knowledge, competitive rates, and professional moving solutions for homes and businesses across Loughborough.",
  keywords: "removals loughborough, house moves loughborough, office relocations loughborough, moving company loughborough, storage solutions loughborough",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/loughborough",
  },
  openGraph: {
    title: "Professional Removal Services in Loughborough | Derbyshire Removals",
    description: "Expert local movers with comprehensive knowledge of Loughborough. Residential and commercial moving services with competitive rates.",
    url: "https://derbyshireremovals.com/locations/loughborough",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Loughborough",
    provider: {
      "@type": "MovingCompany",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Loughborough"
    },
    description: "Expert removal services in Loughborough with local knowledge, competitive rates, and professional moving solutions for homes and businesses."
  }
};

export default function LoughboroughLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
