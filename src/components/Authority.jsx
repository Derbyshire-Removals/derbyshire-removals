import React from 'react';

const Authority = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Derbyshire's Trusted Trader</h2>
        <div className="flex justify-center items-center">
          <a href="https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236">
            <img
              src="images/derbyshire-trusted-trader-logo.gif" 
              alt="Derbyshire's Trusted Trader Logo" 
              className="h-32 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Authority;
