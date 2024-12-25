import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

const HomeRemovals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Professional Home Removals Services | Derbyshire Removals</title>
        <meta name="description" content="Expert home removal services in Derby, Matlock, and across the Midlands. Professional movers, competitive rates, and stress-free moving experience guaranteed." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Home Removals",
              "provider": {
                "@type": "MovingCompany",
                "name": "Derbyshire Removals"
              },
              "areaServed": {
                "@type": "State",
                "name": ["Derbyshire", "East Midlands", "West Midlands"]
              },
              "description": "Professional home removal services across the Midlands, offering comprehensive moving solutions for houses and apartments."
            }
          `}
        </script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <h1 className="text-4xl font-bold mb-8 text-[#071059]">Professional Home Removals Services</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#071059] mb-4">Comprehensive Home Moving Solutions</h2>
            <p className="text-gray-700 mb-4">
              With over 30 years of experience, our professional home removal service ensures a smooth and stress-free moving experience. 
              Whether you're moving locally within Derby or across the Midlands, our expert team handles your belongings with the utmost care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#071059] mb-4">Why Choose Our Home Removal Service?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Experienced and fully trained removal teams</li>
              <li>Modern, well-maintained removal vehicles</li>
              <li>Comprehensive insurance coverage</li>
              <li>Flexible scheduling to suit your needs</li>
              <li>Professional packing and unpacking services</li>
              <li>Free, no-obligation quotes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#071059] mb-4">Our Home Moving Process</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Initial Consultation</h3>
                <p className="text-gray-700">We begin with a detailed discussion of your moving requirements, providing expert advice and a comprehensive quote.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Planning and Preparation</h3>
                <p className="text-gray-700">Our team creates a tailored moving plan, considering any special requirements or valuable items.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Moving Day</h3>
                <p className="text-gray-700">Our professional movers arrive on time, handling your belongings with care and efficiency throughout the entire process.</p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#071059] mb-4">Areas We Cover</h2>
            <p className="text-gray-700">
              We provide comprehensive home removal services across Derby, Matlock, Chesterfield, Ashbourne, 
              and throughout the East and West Midlands. Whether you're moving locally or within the region, 
              we ensure a professional and reliable service.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeRemovals;