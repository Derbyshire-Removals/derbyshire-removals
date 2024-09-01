import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AreasWeCover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // ... (regions array remains unchanged)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-[10.2rem]"> {/* Updated padding-top */}
        <h1 className="text-3xl font-bold mb-6">Detailed Areas We Cover</h1>
        {/* Rest of the component remains unchanged */}
      </main>
      <Footer />
    </div>
  );
};

export default AreasWeCover;