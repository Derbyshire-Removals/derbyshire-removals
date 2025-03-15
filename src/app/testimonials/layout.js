
export const metadata = {
  title: "Customer Reviews & Testimonials | Derbyshire Removals",
  description: "Read genuine customer reviews and testimonials about Derbyshire Removals. Trusted moving services across Derby, Matlock, Chesterfield, and surrounding areas.",
  keywords: "derbyshire removals reviews, customer testimonials derby, moving company reviews, removal company feedback, derby movers testimonials",
  alternates: {
    canonical: "https://derbyshireremovals.com/testimonials",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What do customers say about Derbyshire Removals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our customers consistently rate us 5 stars for our professional, friendly, and efficient removal services."
        }
      }
    ]
  }
};

export default function TestimonialsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
