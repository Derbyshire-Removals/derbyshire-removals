
export const metadata = {
  title: "Customer Reviews & Testimonials | Derbyshire Removals",
  description: "Read genuine customer reviews and testimonials about Derbyshire Removals. Trusted moving services across Derby, Matlock, Chesterfield, and surrounding areas.",
  keywords: "derbyshire removals reviews, customer testimonials derby, moving company reviews, removal company feedback, derby movers testimonials",
  alternates: {
    canonical: "https://derbyshireremovals.com/testimonials",
  },
  openGraph: {
    title: "Customer Reviews & Testimonials | Derbyshire Removals",
    description: "Read what our clients say about our trusted moving services across Derby, Matlock, Chesterfield, and surrounding areas.",
    url: "https://derbyshireremovals.com/testimonials",
    type: "website",
  },
};

export default function TestimonialsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
