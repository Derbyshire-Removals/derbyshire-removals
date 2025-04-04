
export const metadata = {
  title: "Professional Removal Services in Mansfield | Derbyshire Removals",
  description: "Professional house and business removal services in Mansfield. Local expertise, competitive rates, and reliable moving solutions you can trust.",
  keywords: "removals mansfield, house moves mansfield, office relocations mansfield, moving company mansfield, storage solutions mansfield",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/mansfield",
  },
  openGraph: {
    title: "Professional Removal Services in Mansfield | Derbyshire Removals",
    description: "Professional house and business removal services in Mansfield. Local expertise, competitive rates, and reliable moving solutions you can trust.",
    url: "https://derbyshireremovals.com/locations/mansfield",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Mansfield",
    provider: {
      "@type": "MovingCompany",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Mansfield"
    },
    description: "Professional house and business removal services in Mansfield. Local expertise, competitive rates, and reliable moving solutions you can trust."
  }
};

export default function MansfieldLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
