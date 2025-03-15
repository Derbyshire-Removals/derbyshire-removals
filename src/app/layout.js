
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Derbyshire Removals",
  description:
    "Trusted removal services across East & West Midlands, including Derby, Matlock, Chesterfield, Ashbourne, Nottingham, Birmingham, Leicester, and surrounding areas. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions. Free quotes available.",
  metadataBase: new URL("https://derbyshireremovals.com"),
  alternates: {
    canonical: "https://derbyshireremovals.com/",
  },
  openGraph: {
    type: "website",
    url: "https://derbyshireremovals.com/",
    title: "Derbyshire Removals",
    description:
      "Trusted removal services across East & West Midlands, including Derby, Matlock, Chesterfield, Ashbourne, Nottingham, Birmingham, Leicester, and surrounding areas. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions. Free quotes available.",
    images: "/og-image.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derbyshire Removals - Trusted Moving Services",
    description:
      "Trusted removal services across East & West Midlands. House removals, office relocations, packing & storage solutions. Family-run business since 1988.",
    images: ["https://derbyshireremovals.com/og-image.svg"],
  },
  other: {
    "geo.region": "GB-DBY",
    "geo.placename": "Derby",
    "robots": "index, follow",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (Only in Production) */}
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined" && window.location.hostname === "derbyshireremovals.com") {
                const script = document.createElement("script");
                script.async = true;
                script.src = "https://www.googletagmanager.com/gtag/js?id=G-TGVG5CNLD4";
                document.head.appendChild(script);
                
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TGVG5CNLD4');
              } else {
                console.log("Google Analytics disabled in development");
              }
            `,
          }}
        />

        {/* Schema.org markup for Local Business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Derbyshire Removals",
              url: "https://derbyshireremovals.com",
              telephone: ["+441332314312", "+441246922192", "+447425557557000"],
              email: "info@derbyshireremovals.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "48 Farmhouse Road",
                addressLocality: "Derby",
                postalCode: "DE24 3QL",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "52.9225",
                longitude: "-1.4746",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "52.9225",
                  longitude: "-1.4746",
                },
                geoRadius: "100000",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              priceRange: "££",
              servesCuisine: "Moving Services",
              sameAs: [
                "https://www.facebook.com/derbyshireremovals",
                "https://twitter.com/derbyremovals",
                "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236",
              ],
              description:
                "Trusted removal services across East & West Midlands, including Derby, Matlock, Chesterfield, Ashbourne, Nottingham, Birmingham, Leicester, and surrounding areas. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions.",
              foundingDate: "1988",
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}