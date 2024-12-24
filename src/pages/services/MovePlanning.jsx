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

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Moving Day Challenges</h3>
            <p className="text-gray-700">
              Moving day can be incredibly stressful, especially when you have strict time constraints. 
              Whether you're required to vacate your current property by a specific time or have a narrow window 
              for moving into your new home, the pressure can be overwhelming.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Coordinating precise move-out times</li>
              <li>Managing property handover deadlines</li>
              <li>Dealing with unexpected delays</li>
              <li>Ensuring all items are packed and loaded on time</li>
            </ul>
          </div>

          <p className="text-gray-700 mt-6">
            Let our expert planners take the stress out of your move. We'll help you navigate 
            the complexities of moving day, ensuring a smooth and timely transition.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MovePlanning;