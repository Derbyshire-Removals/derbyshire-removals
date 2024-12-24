import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const OfficeRemovals = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 pt-44">
        <h1 className="text-4xl font-bold mb-8">Office Removals</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our office removal service is designed to minimize disruption to your business operations. We understand that time is money, and we work efficiently to get you back up and running as quickly as possible.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Office Removal Services Include:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Pre-move planning and consultation</li>
            <li>IT and equipment relocation</li>
            <li>Furniture dismantling and reassembly</li>
            <li>Weekend and out-of-hours moves available</li>
            <li>Secure document and file transportation</li>
            <li>Full insurance coverage</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfficeRemovals;