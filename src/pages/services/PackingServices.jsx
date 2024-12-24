import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PackingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <h1 className="text-4xl font-bold mb-8 text-[#071059]">Packing Services</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <p className="text-gray-700">
            Our professional packing service takes the stress out of preparing for your move. 
            Our experienced team uses high-quality materials and proven techniques to ensure your belongings are protected.
          </p>

          <h2 className="text-2xl font-semibold text-[#071059] mt-6">Our Packing Services Include</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Full packing service for entire homes</li>
            <li>Partial packing for selected items</li>
            <li>Special care for fragile items</li>
            <li>Professional packing materials</li>
            <li>Systematic labeling system</li>
          </ul>

          <p className="text-gray-700 mt-6">
            Let our expert packers handle your belongings with care. Contact us to learn more about our packing services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackingServices;