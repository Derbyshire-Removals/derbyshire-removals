import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ClipboardCheck, Calendar, Users, Truck } from 'lucide-react';

const MovePlanning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Move Planning page mounted');
  }, []);

  const planningFeatures = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-[#071059]" />,
      title: "Detailed Planning",
      description: "Comprehensive moving checklist and timeline creation"
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#071059]" />,
      title: "Flexible Scheduling",
      description: "Choose moving dates that work best for you"
    },
    {
      icon: <Users className="w-6 h-6 text-[#071059]" />,
      title: "Expert Team",
      description: "Professional move coordinators at your service"
    },
    {
      icon: <Truck className="w-6 h-6 text-[#071059]" />,
      title: "Resource Allocation",
      description: "Right-sized vehicles and equipment for your move"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Professional Move Planning Services Derby | Derbyshire Removals</title>
        <meta name="description" content="Expert move planning services in Derby and across the Midlands. Our professional team helps coordinate and execute your move efficiently. Get your personalized moving plan today!" />
        <meta name="keywords" content="move planning derby, moving coordinator derbyshire, house move planning, office relocation planning, moving timeline, moving checklist derby" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Move Planning",
            "provider": {
              "@type": "MovingCompany",
              "name": "Derbyshire Removals",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "48 Farmhouse Road",
                "addressLocality": "Derby",
                "postalCode": "DE24 3DB",
                "addressCountry": "GB"
              }
            },
            "areaServed": {
              "@type": "State",
              "name": ["Derbyshire", "East Midlands", "West Midlands"]
            },
            "description": "Professional move planning services including comprehensive timeline creation, resource allocation, and expert coordination for a stress-free moving experience."
          })}
        </script>
      </Helmet>
      
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-[#071059]">Professional Move Planning Services</h1>
          
          <p className="text-lg mb-8 text-gray-700">
            Our expert move planning service takes the stress out of your relocation. We create a 
            comprehensive moving strategy tailored to your specific needs, ensuring a smooth and 
            efficient move from start to finish.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {planningFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <section className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[#071059]">Our Planning Process</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Initial Consultation</h3>
                <p className="text-gray-700">We begin with a detailed discussion of your moving requirements, timeline, and any special considerations.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Custom Moving Plan</h3>
                <p className="text-gray-700">Our team creates a tailored moving plan including timeline, resource allocation, and specific requirements.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Coordination</h3>
                <p className="text-gray-700">We coordinate all aspects of your move, from packing services to transportation logistics.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Execution</h3>
                <p className="text-gray-700">On moving day, we follow the plan to ensure everything runs smoothly and efficiently.</p>
              </div>
            </div>
          </section>

          <div className="bg-[#071059] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get Your Moving Plan Started</h2>
            <p className="mb-6">
              Contact us today to discuss your move and receive a comprehensive moving plan 
              tailored to your needs.
            </p>
            <p className="font-semibold">
              Call us: 01332 314312 | Email: info@derbyshireremovals.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MovePlanning;