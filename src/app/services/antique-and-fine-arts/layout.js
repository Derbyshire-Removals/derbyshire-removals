
export const metadata = {
  title: "Antique and Fine Arts Removal Services | Derbyshire Removals",
  description: "Specialized removal services for antiques and fine art across Derbyshire. Expert handling, custom crating, and climate-controlled transportation for valuable items.",
  keywords: "antique removals derby, fine art transportation, valuable item moving, specialist removal services, artwork shipping derbyshire, delicate item relocation",
  alternates: {
    canonical: "https://derbyshireremovals.com/services/antique-and-fine-arts",
  },
  openGraph: {
    title: "Antique and Fine Arts Removal Services | Derbyshire Removals",
    description: "Specialized handling service ensures your valuable antiques and fine art pieces are moved with the utmost care and attention.",
    url: "https://derbyshireremovals.com/services/antique-and-fine-arts",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antique and Fine Arts Removal",
    provider: {
      "@type": "LocalBusiness",
      name: "Derbyshire Removals"
    },
    serviceType: "Specialized Moving",
    areaServed: "Derbyshire and East Midlands",
    description: "Specialized removal services for antiques and fine art, including expert handling, custom crating, and climate-controlled transportation for valuable items.",
    offers: {
      "@type": "Offer",
      price: "1.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock"
    }
  }
};

export default function AntiqueAndFineArtsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
