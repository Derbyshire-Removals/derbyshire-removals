
export const metadata = {
  title: "Antique and Fine Arts Removal Services | Derbyshire Removals",
  description: "Specialist antique and fine art removal services in Derbyshire. Expert handling and climate-controlled transportation for your valuable items.",
  keywords: "antique removals derby, fine art transportation, valuable item moving, specialist removal services, artwork shipping derbyshire, delicate item relocation",
  alternates: {
    canonical: "https://derbyshireremovals.com/services/antique-and-fine-arts",
  },
  openGraph: {
    title: "Antique and Fine Arts Removal Services | Derbyshire Removals",
    description: "Specialist antique and fine art removal services in Derbyshire. Expert handling and climate-controlled transportation for your valuable items.",
    url: "https://derbyshireremovals.com/services/antique-and-fine-arts",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Antique and Fine Arts Removal",
    provider: {
      "@type": "MovingCompany",
      name: "Derbyshire Removals"
    },
    serviceType: "Specialized Moving",
    areaServed: "Derbyshire and East Midlands",
    description: "Specialist antique and fine art removal services in Derbyshire. Expert handling and climate-controlled transportation for your valuable items.",
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
