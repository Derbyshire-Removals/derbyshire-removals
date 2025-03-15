import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Building2, Clock, CheckCircle, Package, Truck, Shield } from 'lucide-react';
import Link from 'next/link';

const OfficeRemovals = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Minimal Disruption",
      description: "Out-of-hours and weekend moves to minimize business impact"
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Complete Office Solutions",
      description: "From single items to entire office buildings"
    },
    {
      icon: <Package className="w-6 h-6 text-blue-600" />,
      title: "IT Equipment Handling",
      description: "Specialist packing and transportation of sensitive equipment"
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Flexible Moving Schedule",
      description: "Tailored moving plans to suit your business timeline"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Full Insurance Coverage",
      description: "Comprehensive insurance for peace of mind"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Project Management",
      description: "Dedicated move coordinator for seamless relocation"
    }
  ];

  const officeRemovalsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Office Removals Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Derbyshire Removals",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Derbyshire",
            "addressCountry": "UK"
          }
        },
        "description": "Professional office relocation services with minimal business disruption",
        "areaServed": "Derbyshire and surrounding areas",
        "serviceType": "Office Removals"
      }
    ]
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(officeRemovalsSchema) }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 pt-44 pb-24">
          <div className="">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Professional Office Removals Services</h1>
            
            <div className="mb-8">
              <img 
                src="/images/business/8.jpg"
                alt="Professional office relocation with organized packing and moving"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Relocating your office requires careful planning and execution to minimize business disruption. 
              Our specialized office removal service ensures a smooth transition to your new premises, 
              handling everything from IT equipment to furniture with the utmost care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Office Moving Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Initial consultation and site survey to assess requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Detailed moving plan development with timeline and resource allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Specialized packing of IT equipment, documents, and furniture</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Coordinated moving schedule to minimize business downtime</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">5.</span>
                  <span>Professional setup at the new location including furniture assembly</span>
                </li>
              </ol>
            </div>

            <div className="bg-[#071059] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Plan Your Office Move?</h2>
              <p className="mb-6">
                Contact us today for a free consultation and quote. We'll help you plan a smooth office 
                relocation that minimizes disruption to your business operations.
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

export default OfficeRemovals;
