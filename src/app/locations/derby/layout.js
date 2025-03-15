
export const metadata = {
  title: "Professional Removal Services in Derby | Derbyshire Removals",
  description: "Professional removal services in Derby with local expertise. Reliable moving solutions for homes and businesses at competitive rates.",
  keywords: "removals derby, house moves derby, office relocations derby, moving company derby, storage solutions derby",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/derby",
  },
  openGraph: {
    title: "Professional Removal Services in Derby | Derbyshire Removals",
    description: "Professional removal services in Derby with local expertise. Reliable moving solutions for homes and businesses at competitive rates.",
    url: "https://derbyshireremovals.com/locations/derby",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Derby",
    provider: {
      "@type": "MovingCompany",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Derby"
    },
    description: "Professional removal services in Derby with local expertise. Reliable moving solutions for homes and businesses at competitive rates."
  }
};

export default function DerbyLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
