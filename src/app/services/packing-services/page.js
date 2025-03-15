import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Package, Shield, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const PackingServices = () => {
  const packingFeatures = [
    {
      icon: <Package className="w-6 h-6 text-[#071059]" />,
      title: "Professional Packing Materials",
      description: "High-quality boxes, bubble wrap, and protective materials"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#071059]" />,
      title: "Secure Handling",
      description: "Expert care for fragile and valuable items"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#071059]" />,
      title: "Time-Efficient",
      description: "Swift and organized packing process"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#071059]" />,
      title: "Full Insurance",
      description: "Complete coverage for your peace of mind"
    }
  ];

  const packingServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Packing Service",
        "provider": {
          "@type": "MovingCompany",
          "name": "Derbyshire Removals",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "48 Farmhouse Road",
            "addressLocality": "Derby",
            "postalCode": "DE24 3DB",
            "addressCountry": "GB"
          }
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "52.8744186998816",
            "longitude": "-1.487168677909595"
          },
          "geoRadius": "50000"
        },
        "description": "Professional packing services including high-quality materials, secure handling, and full insurance coverage for all your valuable items.",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "GBP"
          }
        }
      }
    ]
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packingServicesSchema) }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 pt-44 pb-24">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-[#071059]">Professional Packing Services</h1>
            
            <div className="mb-8">
              <img 
                src="/images/business/packaging.jpg"
                alt="Professional packing materials and boxes being prepared for a move"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            <p className="text-lg mb-8 text-gray-700">
              Trust our expert packers to carefully handle and protect your belongings during your move. 
              We use premium packing materials and proven techniques to ensure everything arrives safely at your new location.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {packingFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-2xl font-bold mb-4 text-[#071059]">Our Packing Process</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Initial assessment of items to be packed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Selection of appropriate packing materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Systematic packing room by room</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Clear labeling and inventory management</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#071059] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get a Free Packing Quote</h2>
              <p className="mb-6">
                Contact us today to discuss your packing needs and receive a comprehensive quote 
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
        </main>
        <Footer />
      </div>
    </section>
  );
};

export default PackingServices;
