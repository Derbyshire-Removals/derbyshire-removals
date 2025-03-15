
export const metadata = {
  title: "Frequently Asked Questions | Derbyshire Removals",
  description: "Find answers to common questions about our removal services, booking process, packing services, and insurance coverage. Professional moving services in Midlands.",
  keywords: "removal services FAQ, moving company questions, Derby removals FAQ, packing services questions, furniture removal FAQ",
  alternates: {
    canonical: "https://derbyshireremovals.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Derbyshire Removals",
    description: "Find answers to common questions about our removal services, booking process, and packing services.",
    url: "https://derbyshireremovals.com/faq",
    type: "website",
  },
};

export default function FAQLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
