
export const metadata = {
  title: "Professional Office Removals Services | Derbyshire Removals",
  description: "Minimize business disruption with our professional office removals team. Specialized in IT equipment handling and complete workspace moves.",
  keywords: "office removals derby, business relocation derbyshire, commercial moving services, office furniture removals, IT equipment moving, workspace relocation",
  alternates: {
    canonical: "https://derbyshireremovals.com/services/office-removals",
  },
  openGraph: {
    title: "Professional Office Removals Services | Derbyshire Removals",
    description: "Professional office relocation services with minimal business disruption",
    url: "https://derbyshireremovals.com/services/office-removals",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Office Removal Services",
    provider: {
      "@type": "MovingCompany",
      name: "Derbyshire Removals"
    },
    serviceType: "Office Relocation",
    areaServed: "Derbyshire and East Midlands",
    description: "Professional office relocation services with minimal business disruption. Specialized in IT equipment handling and complete workspace moves.",
    offers: {
      "@type": "Offer",
      price: "1.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock"
    }
  }
};

export default function OfficeRemovalsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
