
export const metadata = {
  title: "Derbyshire Removals: Trusted Moving Services Since 1988",
  description: "Professional house and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
  keywords: "about derbyshire removals, removal company history, trusted removals derby, family run removals business, professional movers derbyshire",
  alternates: {
    canonical: "https://derbyshireremovals.com/about-us",
  },
  openGraph: {
    title: "Derbyshire Removals: Trusted Moving Services Since 1988",
    description: "Professional house and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
    url: "https://derbyshireremovals.com/about-us",
    type: "website",
    images: ["/images/business/12.jpg"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "url": "https://derbyshireremovals.com/about-us",
        "name": "About Derbyshire Removals",
        "mainEntity": {
          "@id": "https://derbyshireremovals.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://derbyshireremovals.com/#organization",
        "name": "Derbyshire Removals",
        "url": "https://derbyshireremovals.com/",
        "foundingDate": "1988",
        "description": "Since 1988, Derbyshire Removals has been the trusted name in professional moving services across the Midlands. As a family-run business, they provide reliable, efficient and caring removal services to both residential and commercial clients.",
        "areaServed": [
          "East Midlands",
          "West Midlands",
          "Nationwide"
        ],
        "memberOf": {
          "@type": "Organization",
          "name": "Derbyshire's Trusted Trader scheme",
          "url": "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236"
        }
      }
    ]
  }
};

export default function AboutUsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
