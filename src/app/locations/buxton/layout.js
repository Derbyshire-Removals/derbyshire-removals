
export const metadata = {
  title: "Expert Removal Services in Buxton | Derbyshire Removals",
  description: "Trusted removal services in Buxton. Local expertise and competitive rates for house and business moves. Professional and reliable solutions.",
  keywords: "removals buxton, house moves buxton, office relocations buxton, moving company buxton, storage solutions buxton",
  alternates: {
    canonical: "https://derbyshireremovals.com/locations/buxton",
  },
  openGraph: {
    title: "Expert Removal Services in Buxton | Derbyshire Removals",
    description: "Trusted removal services in Buxton. Local expertise and competitive rates for house and business moves. Professional and reliable solutions.",
    url: "https://derbyshireremovals.com/locations/buxton",
    type: "website",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Removal Services in Buxton",
    provider: {
      "@type": "MovingCompany",
      name: "Derbyshire Removals"
    },
    serviceType: "Moving Services",
    areaServed: {
      "@type": "City",
      name: "Buxton"
    },
    description: "Trusted removal services in Buxton. Local expertise and competitive rates for house and business moves. Professional and reliable solutions."
  }
};

export default function BuxtonLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
