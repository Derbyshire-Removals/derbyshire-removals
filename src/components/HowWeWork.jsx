import React from 'react';
import { PhoneCall, Truck, ClipboardCheck, Home, ArrowRight } from 'lucide-react';

const Step = ({ icon, title, description, isLast }) => (
  <div className="flex flex-col items-center text-center relative">
    <div className="bg-[#071059] text-white p-4 rounded-full mb-4 z-10">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
    {!isLast && (
      <div className="absolute top-8 left-1/2 w-full h-0.5 bg-[#071059] hidden lg:block">
        <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 text-[#071059]" size={24} />
      </div>
    )}
  </div>
);

const HowWeWork = () => {
  const steps = [
    { icon: <PhoneCall size={24} />, title: "Initial Contact", description: "Reach out to us for a free quote" },
    { icon: <ClipboardCheck size={24} />, title: "Plan Your Move", description: "We'll create a customized moving plan" },
    { icon: <Truck size={24} />, title: "Moving Day", description: "Our team arrives to handle your move" },
    { icon: <Home size={24} />, title: "Settle In", description: "Relax in your new home" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Step {...step} isLast={index === steps.length - 1} />
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#071059] z-0" style={{
                  left: `calc(${(index + 1) * 25}% - ${(index + 1) * 1}rem)`,
                  width: 'calc(25% + 2rem)'
                }}>
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 text-[#071059]" size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
