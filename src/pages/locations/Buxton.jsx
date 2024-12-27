import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GetInTouch from '../../components/GetInTouch';

const Buxton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Buxton location page mounted');
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
        <title>Professional Removal Services in Buxton | Derbyshire Removals</title>
        <meta name="description" content="Expert removal services in Buxton. Local knowledge, competitive rates, and professional moving solutions for homes and businesses across Buxton and surrounding areas." />
        <meta name="keywords" content="removals buxton, house moves buxton, office relocations buxton, moving company buxton, storage solutions buxton" />
        <link rel="canonical" href="https://derbyshireremovals.com/#/locations/buxton" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Derbyshire Removals - Buxton",
              "image": "https://derbyshireremovals.com/images/van.jpg",
              "description": "Professional removal services in Buxton",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buxton",
                "addressRegion": "Derbyshire",
                "addressCountry": "GB"
              },
              "url": "https://derbyshireremovals.com/#/locations/buxton",
              "telephone": "+441298912345",
              "areaServed": "Buxton"
            }
          `}
        </script>
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 pt-44 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 text-[#071059] mr-2" />
            <h1 className="text-4xl font-bold text-[#071059]">Removal Services in Buxton</h1>
          </div>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Local Buxton Removal Company</h2>
            <p className="text-gray-700 mb-6">
              As Buxton's trusted removal company, we provide comprehensive moving services throughout the town and surrounding areas. 
              With our extensive local knowledge and expertise, we ensure a smooth and efficient moving experience for all our Buxton customers.
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
            <h2 className="text-2xl font-semibold mb-4">Areas We Cover in Buxton</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Fairfield", "Burbage", "Harpur Hill", "Peak Dale", "Dove Holes",
                "Chapel-en-le-Frith", "Whaley Bridge", "New Mills", "Chinley", "Hayfield"
              ].map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#071059]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#071059] text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Your Buxton Move?</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>Expert knowledge of Buxton's unique geography and access requirements</span>
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

export default Buxton;