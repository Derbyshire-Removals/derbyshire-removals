import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Storage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-44">
        <h1 className="text-3xl font-bold mb-6">Storage Solutions</h1>
        
        <p className="font-bold mb-4">There are many reasons why you may need short term or longer term storage for your personal possessions.</p>
        
        <p className="mb-4">One of the most common being moving house which can be an exciting but stressful time, especially if you find yourself stranded between properties in a moving chain. If you need a temporary storage unit for your larger items and valuables until you move into your new home, we are on hand with safe, secure and clean spaces to rent for short or long term periods.</p>
        
        <p className="mb-4">Storage may also be needed when renovating a house or carrying out building work that may damage valuable items if left in the home. Give your builders a break and clear your house of any items you can manage without for a short time. Once your home is clean and ready, your possessions can be delivered or taken back home.</p>
        
        <p className="mb-4">When selling your home, consider de-cluttering to make your home look larger to buyers. Store kids larger toys to clear garden sheds and playrooms. Don't leave your garden furniture to the elements in winter or clutter up your house with camping equipment you only use twice a year, store them all safely with us.</p>
        
        <p className="mb-4">Various sizes of unit are available from a small space to the size of a large double garage; all clean dry and safe to store your personal possessions. We can supply clean safe storage for all of your home storage requirements.</p>
        
        <p className="mb-4">
          <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link> now for a competitive quote. Terms and Conditions available on request.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Storage;