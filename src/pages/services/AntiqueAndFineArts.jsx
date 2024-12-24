import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AntiqueAndFineArts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">Antique and Fine Arts Removal</h1>
          <p className="text-gray-700 mb-6">
            Your precious antiques and fine art pieces deserve special care during transportation. 
            Our specialized handling service ensures your valuable items are moved with the utmost care and attention.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Specialized Services Include:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Custom crating and packaging</li>
            <li>Climate-controlled transportation</li>
            <li>Insurance coverage for valuable items</li>
            <li>Expert handling by trained professionals</li>
            <li>Detailed inventory management</li>
            <li>White glove service</li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Expert Care for Valuable Items</h3>
            <p className="text-gray-700">
              We understand the irreplaceable nature of antiques and fine art. Our team is specially 
              trained in handling delicate and valuable items, ensuring they arrive at their destination 
              in perfect condition.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AntiqueAndFineArts;