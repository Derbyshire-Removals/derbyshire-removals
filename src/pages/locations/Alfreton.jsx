import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GetInTouch from '../../components/GetInTouch';

const Alfreton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Alfreton location page mounted');
  }, []);

  const services = [
    "Home Removals",
    "Office Relocations",
    "Packing Services",
    "Storage Solutions",
    "Student Moves",
    "Single Item Delivery"
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Professional Removal Services in Alfreton | Derbyshire Removals</title>
        <meta name="description" content="Expert removal services in Alfreton. Local knowledge, competitive rates, and professional moving solutions for homes and businesses across Alfreton and surrounding areas." />
        <meta name="keywords" content="removals alfreton, house moves alfreton, office relocations alfreton, moving company alfreton, storage solutions alfreton" />
        <link rel="canonical" href="https://derbyshireremovals.com/#/locations/alfreton" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Derbyshire Removals - Alfreton",
              "image": "https://derbyshireremovals.com/images/van.jpg",
              "description": "Professional removal services in Alfreton",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Alfreton",
                "addressRegion": "Derbyshire",
                "addressCountry": "GB"
              },
              "url": "https://derbyshireremovals.com/#/locations/alfreton",
              "telephone": "+441773912345",
              "areaServed": "Alfreton"
            }
          `}
        </script>
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 pt-44 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 text-[#071059] mr-2" />
            <h1 className="text-4xl font-bold text-[#071059]">Removal Services in Alfreton</h1>
          </div>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Local Alfreton Removal Company</h2>
            <p className="text-gray-700 mb-6">
              As Alfreton's trusted removal company, we provide comprehensive moving services throughout the town and surrounding areas. 
              With our extensive local knowledge and expertise, we ensure a smooth and efficient moving experience for all our Alfreton customers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Areas We Cover in Alfreton</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Somercotes", "Riddings", "Swanwick", "South Normanton", "Pinxton",
                "South Wingfield", "Oakerthorpe", "Shirland", "Stonebroom", "Tibshelf"
              ].map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#071059]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#071059] text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Your Alfreton Move?</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>Expert knowledge of Alfreton's unique geography and access requirements</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>Fully insured and professionally trained removal team</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>Competitive rates with no hidden charges</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>Flexible scheduling to suit your needs</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Alfreton;