import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const OfficeRemovals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">Office Removals</h1>
          <p className="text-gray-700 mb-6">
            We understand that moving an office requires minimal disruption to your business operations. 
            Our specialized office removal service ensures a smooth transition to your new premises.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Office Removal Services Include:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Detailed planning and project management</li>
            <li>IT equipment and sensitive document handling</li>
            <li>Furniture dismantling and reassembly</li>
            <li>Weekend and out-of-hours moves available</li>
            <li>Professional packing and labeling</li>
            <li>Storage solutions if required</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Minimize Business Downtime</h3>
            <p className="text-gray-700">
              Our efficient office removal service is designed to minimize disruption to your business. 
              We can work outside of business hours to ensure your team can resume work as quickly as possible 
              in the new location.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeRemovals;