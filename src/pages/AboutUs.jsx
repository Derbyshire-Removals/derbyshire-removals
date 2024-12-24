import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <h1 className="text-4xl font-bold mb-8 text-[#071059]">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#071059]">Our Story</h2>
            <p className="text-gray-700">
              Derbyshire Removals is a family-run business with over 30 years of experience in the removals industry. 
              We take pride in providing professional and reliable removal services to customers throughout Derbyshire and beyond.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#071059]">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Professional and reliable service</li>
              <li>Customer satisfaction is our priority</li>
              <li>Careful handling of your belongings</li>
              <li>Transparent pricing with no hidden costs</li>
              <li>Fully insured for your peace of mind</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#071059]">Why Choose Us</h2>
            <p className="text-gray-700">
              As a trusted name in Derbyshire, we combine years of experience with a commitment to excellence. 
              Our team of skilled professionals ensures that your move is handled with the utmost care and attention to detail. 
              Whether you're moving locally or nationally, we have the expertise to make your move stress-free.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;