
export const metadata = {
  title: "House Moving Checklist | Derbyshire Removals",
  description: "Comprehensive moving house checklist to ensure a stress-free move. Get organised with our expert tips for before, during, and after your move.",
  keywords: "moving checklist, house move timeline, moving preparation, moving day tips, derbyshire removals checklist",
  alternates: {
    canonical: "https://derbyshireremovals.com/move-checklist",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "House Moving Checklist",
    description: "A comprehensive guide to help you prepare for your house move",
    step: [
      {
        "@type": "HowToStep",
        name: "Two Months Before",
        text: "Start decluttering and organize your belongings"
      },
      {
        "@type": "HowToStep",
        name: "One Month Before",
        text: "Start packing non-essential items and notify service providers"
      },
      {
        "@type": "HowToStep",
        name: "Moving Day",
        text: "Final preparations and coordination with your removal team"
      }
    ]
  }
};

export default function MoveChecklistLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
