
export const metadata = {
  title: "Privacy Policy: Cookie Use & Analytics | Derbyshire Removals",
  description: "Discover how Derbyshire Removals manages cookies and uses Google Analytics to boost your browsing experience. Read our privacy policy for full details.",
  keywords: "privacy policy, cookies policy, data handling, removals privacy, derbyshire removals data policy",
  alternates: {
    canonical: "https://derbyshireremovals.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Derbyshire Removals",
    description: "Learn how we use cookies and analytics to improve your browsing experience at Derbyshire Removals.",
    url: "https://derbyshireremovals.com/privacy-policy",
    type: "website",
    images: ["/images/business/1.jpg"],
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
