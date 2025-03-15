
import "./globals.css";

export const metadata = {
  title: "Derbyshire Removals | Professional Home & Office Moving Services Since 1988",
  description:
    "Professional home and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
  keywords: "removals derby, house removals derbyshire, office removals derby, storage solutions derby, packing services derbyshire",
  metadataBase: new URL("https://derbyshireremovals.com"),
  alternates: {
    canonical: "https://derbyshireremovals.com/",
  },
  openGraph: {
    type: "website",
    url: "https://derbyshireremovals.com/",
    title: "Derbyshire Removals | Professional Home & Office Moving Services Since 1988",
    description:
      "Professional home and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derbyshire Removals | Professional Home & Office Moving Services Since 1988",
    description:
      "Professional home and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
    images: ["https://derbyshireremovals.com/og-image.png"],
  },
  other: {
    "geo.region": "GB-DBY",
    "geo.placename": "Derby",
    "robots": "index, follow",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
