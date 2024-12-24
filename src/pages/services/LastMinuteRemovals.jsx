import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const LastMinuteRemovals = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 pt-44">
        <h1 className="text-4xl font-bold mb-8">Last Minute Removals</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            Need a quick move? We understand that sometimes circumstances require immediate action. Our last-minute removal service is designed to help you move at short notice without compromising on quality.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">We Offer:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Quick response times</li>
            <li>Same-day service when available</li>
            <li>Efficient packing and moving</li>
            <li>Flexible scheduling</li>
            <li>Professional and experienced team</li>
            <li>Full insurance coverage</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LastMinuteRemovals;