import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-32"> {/* Add padding-top to account for fixed header */}
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p>Here you can add your contact information and form.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
