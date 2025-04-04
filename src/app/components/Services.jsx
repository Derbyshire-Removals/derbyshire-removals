
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Truck, Package, Home, Building2, Clock, Frame, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description, to }) => (
  <Link href={to} aria-label={`Learn more about ${title}`}>
    <Card className="transition-all duration-300 hover:shadow-lg group cursor-pointer">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            {React.cloneElement(icon, { 'aria-hidden': 'true' })}
            <span className="ml-2">{title}</span>
          </div>
          <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </Link>
);

const Services = () => {
  const services = [
    { 
      icon: <Truck size={24} />, 
      title: "House Removals", 
      description: "Full service house moving solutions",
      to: "/services/home-removals"
    },
    { 
      icon: <Package size={24} />, 
      title: "Packing Services", 
      description: "Professional packing for a stress-free move",
      to: "/services/packing-services"
    },
    { 
      icon: <Home size={24} />, 
      title: "Storage Solutions", 
      description: "Secure storage options for your belongings",
      to: "/storage"
    },
    { 
      icon: <Building2 size={24} />, 
      title: "Office Removals", 
      description: "Efficient relocation services for businesses",
      to: "/services/office-removals"
    },
    { 
      icon: <Clock size={24} />, 
      title: "Last Minute Removals", 
      description: "Quick and reliable moving solutions for urgent needs",
      to: "/services/last-minute-removals"
    },
    { 
      icon: <Frame size={24} />, 
      title: "Antique and Fine Arts", 
      description: "Specialized handling for valuable and delicate items",
      to: "/services/antique-and-fine-arts"
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Our services"
        >
          {services.map((service, index) => (
            <div key={index} role="listitem">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
