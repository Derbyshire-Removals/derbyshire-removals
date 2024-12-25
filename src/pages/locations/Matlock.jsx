import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GetInTouch from '../../components/GetInTouch';
import { MapPin, CheckCircle } from 'lucide-react';

const Matlock = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Matlock location page mounted');
  }, []);

  const services = [
    "Home Removals",
    "Office Relocations",
    "Packing Services",
    "Storage Solutions",
    "Antique Moving",
    "Single Item Delivery"
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Professional Removal Services in Matlock | Derbyshire Removals</title>
        <meta name="description" content="Expert removal services in Matlock. Local knowledge, competitive rates, and professional moving solutions for homes and businesses across Matlock and surrounding areas." />
        <meta name="keywords" content="removals matlock, house moves matlock, office relocations matlock, moving company matlock, storage solutions matlock" />
        <link rel="canonical" href="https://derbyshireremovals.com/#/locations/matlock" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Derbyshire Removals - Matlock",
              "image": "https://derbyshireremovals.com/images/van.jpg",
              "description": "Professional removal services in Matlock",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Matlock",
                "addressRegion": "Derbyshire",
                "addressCountry": "GB"
              },
              "url": "https://derbyshireremovals.com/#/locations/matlock",
              "telephone": "+441629584953",
              "areaServed": "Matlock"
            }
          `}
        </script>
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 pt-44 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 text-[#071059] mr-2" />
            <h1 className="text-4xl font-bold text-[#071059]">Removal Services in Matlock</h1>
          </div>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Local Matlock Removal Company</h2>
            <p className="text-gray-700 mb-6">
              As Matlock's trusted removal company, we provide comprehensive moving services throughout the town and surrounding areas. 
              With our local knowledge and expertise, we ensure a smooth and efficient moving experience for all our Matlock customers.
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
            <h2 className="text-2xl font-semibold mb-4">Areas We Cover in Matlock</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Matlock Bath", "Cromford", "Darley Dale", "Tansley", "Wirksworth",
                "Bonsall", "Rowsley", "Matlock Green", "Starkholmes", "Hackney"
              ].map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#071059]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#071059] text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Your Matlock Move?</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>Expert knowledge of Matlock's unique geography and access requirements</span>
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

export default Matlock;