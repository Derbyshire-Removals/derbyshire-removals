import React from 'react';

const Authority = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Trusted by Industry Leaders</h2>
        <div className="flex justify-center items-center space-x-12">
          <img src="/placeholder.svg" alt="BAR Logo" className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/placeholder.svg" alt="NGRS Logo" className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/placeholder.svg" alt="FSB Logo" className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Authority;