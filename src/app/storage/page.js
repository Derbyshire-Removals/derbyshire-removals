
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Clock, Lock, Building } from 'lucide-react';
import Link from 'next/link';
import { generateSchemaScript, getServiceSchema, getOrganizationSchema } from '../lib/schema';

const Storage = () => {
  const storageFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-[#071059]" />,
      title: "Secure Facilities",
      description: "24/7 monitored facilities with advanced security systems"
    },
    {
      icon: <Clock className="h-6 w-6 text-[#071059]" />,
      title: "Flexible Options",
      description: "Short and long-term storage solutions to suit your needs"
    },
    {
      icon: <Lock className="h-6 w-6 text-[#071059]" />,
      title: "Climate Controlled",
      description: "Protection from temperature and humidity fluctuations"
    },
    {
      icon: <Building className="h-6 w-6 text-[#071059]" />,
      title: "Various Unit Sizes",
      description: "From small personal items to large furniture collections"
    }
  ];

  const storageSchema = generateSchemaScript([
    getOrganizationSchema(),
    getServiceSchema(
      "Secure Storage Solutions",
      "Storage Service",
      "Professional storage solutions with 24/7 security, climate control, and flexible terms for both short and long-term needs."
    )
  ]);

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: storageSchema }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <main className="container mx-auto px-4 pt-52 pb-16">
          <h1 className="text-4xl font-bold mb-8 text-[#071059]">Secure Storage Solutions</h1>
          
          <div className="mb-8">
            <img 
              src="/images/business/storage.jpg"
              alt="Secure storage facility with organized units and modern security features"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          
          <p className="text-lg mb-8">
            Whether you need temporary storage during a move or long-term solutions for excess items, 
            our secure storage facilities offer the perfect solution. With flexible options and competitive rates, 
            we ensure your belongings are safe and accessible when you need them.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {storageFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Storage Options</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Short-Term Storage</h3>
                  <p className="text-gray-600">Ideal for temporary needs during home moves or renovations</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Long-Term Storage</h3>
                  <p className="text-gray-600">Perfect for seasonal items, business inventory, or downsizing</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Specialized Storage</h3>
                  <p className="text-gray-600">Climate-controlled units for sensitive items like antiques, artwork, and electronics</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Storage Solutions?</h2>
            <p className="mb-6">
              Contact us today to discuss your storage requirements and find the perfect solution 
              tailored to your needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#071059] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    </section>
  );
};

export default Storage;
