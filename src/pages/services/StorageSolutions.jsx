import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const StorageSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <h1 className="text-4xl font-bold mb-8 text-[#071059]">Storage Solutions</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <p className="text-gray-700">
            Our secure storage solutions provide flexible options for both short-term and long-term storage needs. 
            Whether you need temporary storage during a move or long-term storage for excess items, we have you covered.
          </p>

          <h2 className="text-2xl font-semibold text-[#071059] mt-6">Storage Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>24/7 security monitoring</li>
            <li>Climate-controlled units</li>
            <li>Various unit sizes available</li>
            <li>Flexible access options</li>
            <li>Short and long-term storage</li>
            <li>Competitive rates</li>
          </ul>

          <p className="text-gray-700 mt-6">
            Contact us to discuss your storage requirements and find the perfect solution for your needs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StorageSolutions;