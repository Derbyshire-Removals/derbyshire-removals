
export const metadata = {
  title: "Terms and Conditions for Removals | Derbyshire Removals",
  description: "Read our comprehensive terms and conditions for removal services, storage solutions, and business operations at Derbyshire Removals.",
  keywords: "removal terms, storage conditions, business terms, Derbyshire Removals terms",
  alternates: {
    canonical: "https://derbyshireremovals.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Derbyshire Removals",
    description: "Our comprehensive terms and conditions for removal services, storage solutions, and business operations.",
    url: "https://derbyshireremovals.com/terms-and-conditions",
    type: "website",
    images: ["/images/business/2.jpg"],
  },
};

export default function TermsAndConditionsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
