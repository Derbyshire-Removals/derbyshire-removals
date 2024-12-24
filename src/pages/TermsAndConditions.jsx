import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p>Welcome to Derbyshire Removals. These terms and conditions outline the rules and regulations for the use of our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Services</h2>
            <p>We provide removal, packing, and storage services. All services are subject to availability and our professional assessment of feasibility.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Booking and Cancellation</h2>
            <p>Bookings are confirmed upon receipt of a deposit. Cancellation terms vary depending on notice period provided.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Insurance</h2>
            <p>We maintain comprehensive insurance coverage for goods in transit. Additional insurance options are available upon request.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Liability</h2>
            <p>Our liability is limited to the terms specified in our insurance policy and applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Privacy</h2>
            <p>We respect your privacy and handle all personal information in accordance with UK data protection laws.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;