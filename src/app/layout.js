
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Derbyshire Removals",
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
    title: "Derbyshire Removals",
    description:
      "Professional home and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
    images: "/og-image.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derbyshire Removals - Trusted Moving Services",
    description:
      "Professional home and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
    images: ["https://derbyshireremovals.com/og-image.svg"],
  },
  other: {
    "geo.region": "GB-DBY",
    "geo.placename": "Derby",
    "robots": "index, follow",
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://derbyshireremovals.com/#organization",
      "name": "Derbyshire Removals",
      "url": "https://derbyshireremovals.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://derbyshireremovals.com/images/logo.png"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61572796415223",
        "https://www.instagram.com/derbyshireremovals/",
        "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://derbyshireremovals.com/#business",
      "name": "Derbyshire Removals",
      "url": "https://derbyshireremovals.com",
      "telephone": ["+441332314312", "+441246922192", "+447425557000"],
      "email": "info@derbyshireremovals.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "48 Farmhouse Road",
        "addressLocality": "Derby",
        "postalCode": "DE24 3QL",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.9225",
        "longitude": "-1.4746"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "52.9225",
          "longitude": "-1.4746"
        },
        "geoRadius": "100000"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "priceRange": "££",
      "description":
        "Trusted removal services across East & West Midlands, including Derby, Matlock, Chesterfield, Ashbourne, Nottingham, Birmingham, Leicester, and surrounding areas. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions.",
      "foundingDate": "1988"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Removal Services",
      "provider": {
        "@id": "https://derbyshireremovals.com/#organization"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "52.9225",
          "longitude": "-1.4746"
        },
        "geoRadius": "100000",
        "description": "Derby, Matlock, Chesterfield, Nottingham, Birmingham, Leicester and surrounding areas"
      },
      "description": "Professional home and office removals with packing and storage solutions.",
      "offers": {
        "@type": "Offer",
        "description": "Professional removal services for homes and businesses",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "itemReviewed": {
        "@id": "https://derbyshireremovals.com/#business"
      },
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "86"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://derbyshireremovals.com/#website",
      "url": "https://derbyshireremovals.com",
      "name": "Derbyshire Removals",
      "description": "Professional home and office removals across the Midlands",
      "publisher": {
        "@id": "https://derbyshireremovals.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://derbyshireremovals.com/#webpage",
      "url": "https://derbyshireremovals.com",
      "name": "Derbyshire Removals - Professional Moving Services",
      "isPartOf": {
        "@id": "https://derbyshireremovals.com/#website"
      },
      "about": {
        "@id": "https://derbyshireremovals.com/#organization"
      },
      "description": "Professional home and office removals across the Midlands."
    }
  ]
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
