import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import GetInTouch from './components/GetInTouch';
import AreasCovered from './components/AreasCovered';
import HowWeWork from './components/HowWeWork';
import Footer from './components/Footer';
import HomeReviews from './components/HomeReviews';

export default function Home() {
  // Define schema.org JSON-LD data
  const organizationSchema = {
    "@type": "Organization",
    "name": "Derbyshire Removals",
    "url": "https://derbyshireremovals.com",
    "logo": "https://derbyshireremovals.com/images/logo.png",
    "image": "https://derbyshireremovals.com/images/van.png",
    "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
    "email": "info@derbyshireremovals.com",
    "foundingDate": "1988",
    "description": "Professional removal services in Derbyshire since 1988, offering house and office removals, packing, and storage solutions.",
    "areaServed": [
          "Derby",
          "Matlock",
          "Alfreton",
          "Chesterfield",
          "Buxton",
          "Mansfield",
          "Loughborough",
          "East Midlands",
          "West Midlands",
          "Nationwide"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 Farmhouse Road",
      "addressLocality": "Derby",
      "addressRegion": "Derbyshire",
      "postalCode": "DE24 3DB",
      "addressCountry": "GB"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Derbyshire's Trusted Trader scheme",
      "url": "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236"
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61572796415223",
      "https://www.instagram.com/derbyshireremovals/",
      "https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236",
    ],
  };

  const localBusinessSchema = {
    "@type": "MovingCompany",
    "name": "Derbyshire Removals",
    "image": "https://derbyshireremovals.com/images/van.jpg",
    "priceRange": "££",
    "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
    "email": "info@derbyshireremovals.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 Farmhouse Road",
      "addressLocality": "Derby",
      "addressRegion": "Derbyshire",
      "postalCode": "DE24 3DB",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.8744186998816",
      "longitude": "-1.487168677909595"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "08:00",
      "closes": "18:00",
    },
  };

  const serviceSchema = {
    "@type": "Service",
    "name": "Removal Services",
    "provider": {
      "@type": "MovingCompany",
      "name": "Derbyshire Removals",
      "image": "https://derbyshireremovals.com/images/van.jpg",
      "priceRange": "££",
      "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "48 Farmhouse Road",
        "addressLocality": "Derby",
        "addressRegion": "Derbyshire",
        "postalCode": "DE24 3DB",
        "addressCountry": "GB"
      },
    },
    "areaServed": {
      "@type": "State",
      "name": "Derbyshire"
    },
    "description": "Professional removal services for houses and businesses across Derbyshire.",
    "serviceType": "Removal Services"
  };

  const ratingSchema = {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "124",
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "MovingCompany",
      "name": "Derbyshire Removals",
      "image": "https://derbyshireremovals.com/images/van.jpg",
      "priceRange": "££",
      "telephone": ["+441332314312", "+441246922192", "+443335677001", "+447425557000"],
      "url": "https://derbyshireremovals.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "48 Farmhouse Road",
        "addressLocality": "Derby",
        "addressRegion": "Derbyshire",
        "postalCode": "DE24 3DB",
        "addressCountry": "GB"
      },
    }
  };

  const websiteSchema = {
    "@type": "WebSite",
    "name": "Derbyshire Removals",
    "url": "https://derbyshireremovals.com",
    "description": "Professional removal services in Derbyshire since 1988."
  };

  // Combine all schemas using @graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      serviceSchema,
      ratingSchema,
      websiteSchema
    ]
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <HomeReviews />
          <ProfessionalMovingServices />
          <Services />
          <TrustedPartners />
          <WhyUs />
          <StorageSolutions />
          <HowWeWork />
          <AreasCovered />
          <GetInTouch />
        </main>
        <Footer />
      </div>
    </section>
  );
}

const ProfessionalMovingServices = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Professional Moving Services</h2>
          <p className="text-gray-600 mb-6">
            Our experienced team ensures your belongings are handled with the utmost care,
            making your move stress-free and efficient.
          </p>
        </div>
        <div>
          <img 
            src="/images/business/13.jpg"
            alt="Professional movers carefully packing items into boxes"
            className="rounded-lg shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

const TrustedPartners = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="/images/business/8.jpg"
            alt="Modern office space being prepared for relocation"
            className="rounded-lg shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Trusted by Businesses</h2>
          <p className="text-gray-600 mb-6">
            From small offices to large corporations, we provide reliable commercial moving
            services that minimize downtime and protect your valuable assets.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const StorageSolutions = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Secure Storage Solutions</h2>
          <p className="text-gray-600 mb-6">
            Need temporary storage? Our secure facilities provide the perfect solution
            for both short-term and long-term storage needs.
          </p>
        </div>
        <div>
          <img 
            src="/images/business/storage.jpg"
            alt="Clean and organized storage facility with modern security features"
            className="rounded-lg shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);
