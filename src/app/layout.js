
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Derbyshire Removals: Trusted House & Office Moving Experts",
  description:
    "Professional house and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
  keywords: "removals derby, house removals derbyshire, office removals derby, storage solutions derby, packing services derbyshire",
  metadataBase: new URL("https://derbyshireremovals.com"),
  alternates: {
    canonical: "https://derbyshireremovals.com/",
  },
  openGraph: {
    type: "website",
    url: "https://derbyshireremovals.com/",
    title: "Derbyshire Removals: Trusted House & Office Moving Experts",
    description:
      "Professional house and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derbyshire Removals: Trusted House & Office Moving Experts",
    description:
      "Professional house and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
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
      <head>
        {/* Preconnect to Google domains to speed up analytics loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body>
        {children}
        
        {/* Google tag (gtag.js) - using inline script for static export compatibility */}
        {/* This script is conditionally loaded only in production environment */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hostname === 'derbyshireremovals.com') {
                const gtagScript = document.createElement('script');
                gtagScript.async = true;
                gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-TGVG5CNLD4';
                document.head.appendChild(gtagScript);

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TGVG5CNLD4', {
                  'page_path': window.location.pathname,
                  'send_page_view': true
                });
              } else {
                console.log('Google Analytics disabled in development');
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
