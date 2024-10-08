import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    "Over 30 years of experience",
    "Fully insured and licensed",
    "Customized moving plans",
    "Competitive pricing",
    "High-quality packing materials",
    "Excellent customer service",
  ];

  return (
    <section id="why-us" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-start">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start w-full max-w-xs">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
