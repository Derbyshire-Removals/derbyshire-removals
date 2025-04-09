
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { generateSchemaScript } from '../lib/schema';

const TermsAndConditions = () => {
  const termsSchema = generateSchemaScript([
    {
      "@type": "WebPage",
      "name": "Terms and Conditions | Derbyshire Removals",
      "description": "Read our terms and conditions regarding our removal services, including booking conditions, cancellations, and liability information.",
      "url": "https://derbyshireremovals.com/terms-and-conditions"
    }
  ]);

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: termsSchema }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <main className="container mx-auto px-4 pt-52 pb-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. General Terms</h2>
              <p className="text-gray-700">
                These terms and conditions form the basis of the contract between Derbyshire Removals and the customer. 
                By booking our services, you agree to these terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Quotes and Prices</h2>
              <p className="text-gray-700 mb-3">
                All quotes provided are based on information supplied by the customer. Final prices may vary if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The information provided was incomplete or inaccurate</li>
                <li>Access conditions were not as described</li>
                <li>Additional items are added to the move</li>
                <li>The move takes longer than estimated due to factors outside our control</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Booking and Cancellation</h2>
              <p className="text-gray-700 mb-3">
                To secure your booking, a deposit is required. Cancellation fees apply as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>More than 14 days before the move: Deposit refunded minus £50 administration fee</li>
                <li>7-14 days before the move: 50% of deposit retained</li>
                <li>Less than 7 days before the move: Full deposit retained</li>
                <li>Within 24 hours of the move: Full payment may be required</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Insurance and Liability</h2>
              <p className="text-gray-700 mb-3">
                Derbyshire Removals has comprehensive insurance for goods in transit. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Items packed by the customer are not covered unless external damage to packaging is visible</li>
                <li>High-value items (over £500) must be declared in writing before the move</li>
                <li>Claims must be reported within 7 days of the delivery date</li>
                <li>We are not liable for delays caused by factors outside our control</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Customer Responsibilities</h2>
              <p className="text-gray-700 mb-3">
                The customer is responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Providing accurate information about the move</li>
                <li>Ensuring suitable access at both properties</li>
                <li>Obtaining any necessary parking permits or permissions</li>
                <li>Ensuring items are properly prepared for transport</li>
                <li>Being present at both collection and delivery locations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Complaints Procedure</h2>
              <p className="text-gray-700">
                Any complaints should be submitted in writing to info@derbyshireremovals.com within 7 days of the service completion.
                We aim to respond to all complaints within 14 working days.
              </p>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </section>
  );
};

export default TermsAndConditions;
