import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, Home, ClipboardList, Building2, Clock, Frame } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    { icon: <Truck size={24} />, title: "Home Removals", description: "Full service home moving solutions" },
    { icon: <Package size={24} />, title: "Packing Services", description: "Professional packing for a stress-free move" },
    { icon: <Home size={24} />, title: "Storage Solutions", description: "Secure storage options for your belongings" },
    { icon: <ClipboardList size={24} />, title: "Move Planning", description: "Comprehensive move planning and management" },
    { icon: <Building2 size={24} />, title: "Office Removals", description: "Efficient relocation services for businesses" },
    { icon: <Clock size={24} />, title: "Last Minute Removals", description: "Quick and reliable moving solutions for urgent needs" },
    { icon: <Frame size={24} />, title: "Antique and Fine Arts", description: "Specialized handling for valuable and delicate items" },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
