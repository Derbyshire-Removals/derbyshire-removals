import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MovePlanning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <h1 className="text-4xl font-bold mb-8 text-[#071059]">Move Planning</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <p className="text-gray-700">
            Our comprehensive move planning service helps you organize and execute your move efficiently. 
            We take care of all the details so you can focus on settling into your new home.
          </p>

          <h2 className="text-2xl font-semibold text-[#071059] mt-6">Planning Services Include</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Pre-move consultation</li>
            <li>Customized moving timeline</li>
            <li>Resource allocation</li>
            <li>Logistics coordination</li>
            <li>Special items planning</li>
            <li>Move day scheduling</li>
          </ul>

          <p className="text-gray-700 mt-6">
            Let us help you plan your perfect move. Contact us to start planning today.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MovePlanning;