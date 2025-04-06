
export const metadata = {
  title: "Secure Storage Solutions in Derby | Derbyshire Removals",
  description: "Professional storage solutions in Derby. Climate-controlled, secure units available in various sizes. Short and long-term storage options with 24/7 security.",
  keywords: "storage solutions derby, secure storage derbyshire, climate controlled storage, furniture storage, business storage, household storage derby",
  alternates: {
    canonical: "https://derbyshireremovals.com/storage",
  },
  openGraph: {
    title: "Secure Storage Solutions in Derby | Derbyshire Removals",
    description: "Climate-controlled, secure storage units available in various sizes with 24/7 security for both short and long-term needs.",
    url: "https://derbyshireremovals.com/storage",
    type: "website",
    images: ["/images/business/storage.jpg"],
  },
};

export default function StorageLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
