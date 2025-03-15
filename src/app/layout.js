
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
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derbyshire Removals - Trusted Moving Services",
    description:
      "Professional home and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
    images: ["https://derbyshireremovals.com/og-image.png"],
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
      name: "Derbyshire Removals",
      url: "https://derbyshireremovals.com",
      logo: "https://derbyshireremovals.com/images/logo.png",
      description: "Trusted removal services across East & West Midlands, including Derby, Matlock, Chesterfield, Ashbourne, Nottingham, Birmingham, Leicester, and surrounding areas. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions.",
      foundingDate: "1988",
      sameAs: [
        "https://www.facebook.com/derbyshireremovals",
        "https://twitter.com/derbyremovals",
        "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Moving Services",
      provider: {
        "@type": "MovingCompany",
        name: "Derbyshire Removals"
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
      description: "Professional removal services for homes and businesses, including packing, storage, and specialized antique handling.",
      offers: {
        "@type": "Offer",
        price: "1.00",
        priceCurrency: "GBP",
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/InStock",
        url: "https://derbyshireremovals.com/contact"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      itemReviewed: {
        "@type": "MovingCompany",
        name: "Derbyshire Removals",
        image: "https://derbyshireremovals.com/images/logo.png"
      },
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "120",
      reviewCount: "120"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Derbyshire Removals",
      url: "https://derbyshireremovals.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://derbyshireremovals.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Derbyshire Removals - Professional Removal Services",
      description: "Professional home and office removals across the Midlands. Serving Derby, Matlock, Chesterfield, Nottingham, Birmingham, and Leicester since 1988.",
      url: "https://derbyshireremovals.com",
      mainEntity: {
        "@type": "MovingCompany",
        name: "Derbyshire Removals"
      }
    }
  ]
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
