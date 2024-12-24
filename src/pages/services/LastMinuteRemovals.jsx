import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const LastMinuteRemovals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">Last Minute Removals</h1>
          <p className="text-gray-700 mb-6">
            Need to move quickly? We understand that sometimes circumstances require immediate action. 
            Our last-minute removal service is designed to help you move at short notice without compromising on quality.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Emergency Moving Solutions:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Quick response times</li>
            <li>Same-day service when available</li>
            <li>Efficient packing and loading</li>
            <li>Flexible scheduling</li>
            <li>Professional and experienced team</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
            <h3 className="text-xl font-semibold text-red-800 mb-2">Emergency Moving Support</h3>
            <p className="text-gray-700">
              Whether you're facing an unexpected situation or need to move quickly, our team is ready 
              to help with professional last-minute removal services. Contact us immediately for urgent 
              moving assistance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LastMinuteRemovals;