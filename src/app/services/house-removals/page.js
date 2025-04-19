import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { generateSchemaScript, getServiceSchema } from '../../lib/schema';

const HouseRemovals = () => {
  const houseRemovalsSchema = generateSchemaScript([
    getServiceSchema(
      "House Removals Services", 
      "House Removals", 
      "Professional house removal services with experienced and fully trained teams", 
      "Derby, Matlock, Chesterfield, Ashbourne, and throughout the East and West Midlands"
    )
  ]);

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: houseRemovalsSchema }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 pt-52 pb-24">
          <h1 className="text-4xl font-bold mb-8 text-[#071059]">Professional House Removals Services</h1>
          
          <div className="mb-8">
            <img 
              src="/images/business/9.jpg"
              alt="Professional movers carefully handling furniture during a house move"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
              loading="lazy"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#071059] mb-4">Comprehensive House Moving Solutions</h2>
              <p className="text-gray-700 mb-4">
                With over 30 years of experience, our professional house removal service ensures a smooth and stress-free moving experience. 
                Whether you're moving locally within Derby or across the Midlands, our expert team handles your belongings with the utmost care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#071059] mb-4">Why Choose Our House Removal Service?</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Experienced and fully trained removal teams</li>
                <li>Modern, well-maintained removal vehicles</li>
                <li>Comprehensive insurance coverage</li>
                <li>Flexible scheduling to suit your needs</li>
                <li>Professional packing and unpacking services</li>
                <li>Free, no-obligation quotes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#071059] mb-4">Our House Moving Process</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Initial Consultation</h3>
                  <p className="text-gray-700">We begin with a detailed discussion of your moving requirements, providing expert advice and a comprehensive quote.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Planning and Preparation</h3>
                  <p className="text-gray-700">Our team creates a tailored moving plan, considering any special requirements or valuable items.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Moving Day</h3>
                  <p className="text-gray-700">Our professional movers arrive on time, handling your belongings with care and efficiency throughout the entire process.</p>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#071059] mb-4">Areas We Cover</h2>
              <p className="text-gray-700">
                We provide comprehensive house removal services across Derby, Matlock, Chesterfield, Ashbourne, 
                and throughout the East and West Midlands. Whether you're moving locally or within the region, 
                we ensure a professional and reliable service.
              </p>
            </section>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h2>
              <p className="mb-6">
                Contact us today to discuss your house removal needs and receive a comprehensive quote 
                tailored to your requirements.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-[#071059] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
};

export default HouseRemovals;
