import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AntiqueAndFineArts = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 pt-44">
        <h1 className="text-4xl font-bold mb-8">Antique and Fine Arts Removal</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            Our specialized antique and fine arts removal service ensures your valuable items are handled with the utmost care and expertise. We understand the unique requirements of transporting precious and delicate items.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Specialist Services Include:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Custom crating and packaging</li>
            <li>Climate-controlled transportation</li>
            <li>Specialist handling equipment</li>
            <li>Experienced fine art handlers</li>
            <li>Additional insurance options</li>
            <li>Condition reporting</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AntiqueAndFineArts;