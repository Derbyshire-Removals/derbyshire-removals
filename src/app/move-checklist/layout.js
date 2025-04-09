
import { generateSchemaScript, getOrganizationSchema } from '../lib/schema';

export const metadata = {
  title: "Complete House Moving Checklist | Derbyshire Removals Guide",
  description: "Comprehensive moving house checklist to ensure a stress-free move. Get organised with our expert tips for before, during, and after your move.",
  keywords: "moving checklist, house move timeline, moving preparation, moving day tips, derbyshire removals checklist",
  alternates: {
    canonical: "https://derbyshireremovals.com/move-checklist",
  },
  openGraph: {
    title: "Complete House Moving Checklist | Derbyshire Removals Guide",
    description: "Comprehensive moving house checklist with expert tips to ensure a stress-free move from start to finish.",
    url: "https://derbyshireremovals.com/move-checklist",
    type: "website",
    images: ["/images/business/13.jpg"],
  }
};

export default function MoveChecklistLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
