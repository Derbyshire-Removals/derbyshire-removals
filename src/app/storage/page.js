
import React from 'react';
import { Shield, Clock, Building2, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';

const Storage = () => {
  const storageFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Secure Facilities",
      description: "24/7 monitored storage units with advanced security systems"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Flexible Access",
      description: "Convenient access hours to suit your schedule"
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Various Unit Sizes",
      description: "From small lockers to large units for entire households"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Climate Control",
      description: "Temperature-controlled units to protect sensitive items"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Script id="storage-service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Storage Service",
          "provider": {
            "@type": "MovingCompany",
            "name": "Derbyshire Removals",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Derby",
              "addressRegion": "Derbyshire",
              "addressCountry": "UK"
            }
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "52.9225",
              "longitude": "-1.4746"
            },
            "geoRadius": "50000"
          },
          "description": "Professional storage solutions offering secure, climate-controlled units in various sizes for both short and long-term storage needs."
        })}
      </Script>
      
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <h1 className="text-4xl font-bold mb-8 text-[#071059]">Professional Storage Solutions</h1>
        
        <div className="mb-8">
          <img 
            src="/images/business/storage.jpg"
            alt="Modern, secure storage facility with climate-controlled units"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#071059] mb-4">Secure Storage for Every Need</h2>
            <p className="text-gray-700 mb-4">
              Whether you're moving home, renovating, or need extra space for your business, our storage solutions 
              provide the perfect answer. With state-of-the-art security and flexible access options, you can trust 
              us to keep your belongings safe and accessible.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6 mb-8">
            {storageFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                {feature.icon}
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#071059] mb-4">Storage Options</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Short-term storage during house moves</li>
              <li>Long-term storage for decluttering</li>
              <li>Business document and inventory storage</li>
              <li>Student storage during holidays</li>
              <li>Seasonal item storage (garden furniture, sports equipment)</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#071059] mb-4">Why Choose Our Storage Service?</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Competitive rates with flexible terms</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Professional advice on storage solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Clean and well-maintained facilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Easy access and loading areas</span>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#071059]">Ready to Store Your Items?</h2>
            <p className="mb-6">
              Contact us today to discuss your storage requirements and find the perfect solution for your needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#071059] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Storage;
