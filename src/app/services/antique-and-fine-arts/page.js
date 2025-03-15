import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const AntiqueAndFineArts = () => {
  // Schema.org data for antique and fine arts service
  const antiqueAndFineArtsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Antique and Fine Arts Removal",
        "provider": {
          "@type": "MovingCompany",
          "name": "Derbyshire Removals",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Derbyshire",
            "addressCountry": "UK"
          }
        },
        "description": "Specialized handling service for valuable antiques and fine art pieces, ensuring they are moved with the utmost care and attention.",
        "areaServed": "Derbyshire and surrounding areas",
        "serviceType": "Specialized Moving Service",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Antique Moving Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom crating and packaging"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Climate-controlled transportation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Insurance coverage for valuable items"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(antiqueAndFineArtsSchema) }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 pt-52 pb-16">
          <div className="">
            <div className="mb-8">
              <img 
                src="/images/business/4.jpg"
                alt="Carefully wrapped antique furniture being handled by specialists"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-6">Antique and Fine Arts Removal</h1>
              <p className="text-gray-700 mb-6">
                Your precious antiques and fine art pieces deserve special care during transportation. 
                Our specialized handling service ensures your valuable items are moved with the utmost care and attention.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Specialized Services Include:</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Custom crating and packaging</li>
                <li>Climate-controlled transportation</li>
                <li>Insurance coverage for valuable items</li>
                <li>Expert handling by trained professionals</li>
                <li>Detailed inventory management</li>
                <li>White glove service</li>
              </ul>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Expert Care for Valuable Items</h3>
                <p className="text-gray-700">
                  We understand the irreplaceable nature of antiques and fine art. Our team is specially 
                  trained in handling delicate and valuable items, ensuring they arrive at their destination 
                  in perfect condition.
                </p>
              </div>

              <div className="bg-[#071059] text-white p-8 rounded-lg mt-8">
                <h2 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h2>
                <p className="mb-6">
                  Contact us today to discuss your antique and fine art moving needs and receive a comprehensive quote 
                  tailored to your requirements.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-[#071059] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
};

export default AntiqueAndFineArts;
