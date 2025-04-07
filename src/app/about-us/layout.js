
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
  }
};

export default function AboutUsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
