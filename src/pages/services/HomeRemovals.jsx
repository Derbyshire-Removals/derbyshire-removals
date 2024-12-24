import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomeRemovals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <h1 className="text-4xl font-bold mb-8 text-[#071059]">Home Removals</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <p className="text-gray-700">
            Our comprehensive home removal service is designed to make your move as smooth and stress-free as possible. 
            We handle everything from small apartments to large family homes with the same level of care and attention to detail.
          </p>

          <h2 className="text-2xl font-semibold text-[#071059] mt-6">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Professional and experienced removal teams</li>
            <li>Fully equipped modern vehicles</li>
            <li>Comprehensive insurance coverage</li>
            <li>Flexible scheduling to suit your needs</li>
            <li>Careful handling of all your belongings</li>
            <li>Pre-move survey and planning</li>
          </ul>

          <p className="text-gray-700 mt-6">
            Contact us today to discuss your home removal needs and get a free quote.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeRemovals;