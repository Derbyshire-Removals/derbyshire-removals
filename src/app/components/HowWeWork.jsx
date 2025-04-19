import React from 'react';
import { PhoneCall, Truck, ClipboardCheck, Home } from 'lucide-react';

const Step = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-primary text-white p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const HowWeWork = () => {
  const steps = [
    { icon: <PhoneCall size={24} />, title: "1. Initial Contact", description: "Reach out to us for a free quote" },
    { icon: <ClipboardCheck size={24} />, title: "2. Plan Your Move", description: "We'll create a customized moving plan" },
    { icon: <Truck size={24} />, title: "3. Moving Day", description: "Our team arrives to handle your move" },
    { icon: <Home size={24} />, title: "4. Settle In", description: "Relax in your new home" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
