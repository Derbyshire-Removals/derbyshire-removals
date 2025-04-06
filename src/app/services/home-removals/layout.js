
export const metadata = {
  title: "Professional House Removals Services | Derbyshire Removals",
  description: "Expert house removal services in Derby, Matlock, and across the Midlands. Professional movers, competitive rates, and stress-free moving experience guaranteed.",
  keywords: "house removals derby, house moving services, residential relocation, furniture removals, house movers derbyshire",
  alternates: {
    canonical: "https://derbyshireremovals.com/services/home-removals",
  },
  openGraph: {
    title: "Professional House Removals Services | Derbyshire Removals",
    description: "Expert house removal services across the Midlands with comprehensive moving solutions for houses and apartments.",
    url: "https://derbyshireremovals.com/services/home-removals",
    type: "website",
    images: ["/images/business/1.jpg"],
  },
};

export default function HomeRemovalsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
