import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Shield, Clock, Ruler } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';

const StorageFeature = ({ icon: Icon, title, description }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Storage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Storage page mounted');
  }, []);

  const features = [
    {
      icon: Package,
      title: "Secure Storage Units",
      description: "Climate-controlled, monitored storage units available in various sizes to suit your needs."
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock CCTV surveillance and advanced security systems to protect your belongings."
    },
    {
      icon: Clock,
      title: "Flexible Access",
      description: "Access your stored items during business hours, with extended access available upon request."
    },
    {
      icon: Ruler,
      title: "Multiple Unit Sizes",
      description: "From small lockers to large units, we have the perfect size for your storage requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Secure Storage Solutions in Derby | Derbyshire Removals</title>
        <meta name="description" content="Professional storage solutions in Derby. Climate-controlled, secure units with 24/7 surveillance. Short and long-term storage options available. Get a quote today!" />
        <meta name="keywords" content="storage derby, secure storage derbyshire, furniture storage derby, business storage solutions, climate controlled storage" />
        <link rel="canonical" href="https://derbyshireremovals.com/storage" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 pt-44 pb-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-6">Secure Storage Solutions</h1>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Whether you need short-term or long-term storage, our secure facilities offer the perfect solution for your belongings. With climate control and 24/7 security, you can trust us to keep your items safe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StorageFeature key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Storage Services</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Personal Storage</h3>
              <p className="text-gray-600">
                Perfect for storing household items, furniture, or seasonal belongings. Our units are clean, dry, and secure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Business Storage</h3>
              <p className="text-gray-600">
                Ideal for archive storage, excess stock, or office furniture. Flexible terms to suit your business needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Student Storage</h3>
              <p className="text-gray-600">
                Special rates for students during holiday periods. Safe storage for your belongings between terms.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold mb-6">Storage FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How secure is your storage facility?</h3>
              <p className="text-gray-600">
                Our facility is equipped with 24/7 CCTV surveillance, alarm systems, and secure access control. Only authorized personnel and customers have access to the storage areas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What size units are available?</h3>
              <p className="text-gray-600">
                We offer various unit sizes to accommodate different storage needs, from small lockers to large rooms. Contact us to discuss your specific requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How long can I store my items?</h3>
              <p className="text-gray-600">
                We offer flexible storage periods, from short-term solutions to long-term storage. You can extend your storage period as needed.
              </p>
            </div>
          </div>
        </section>
      </main>

      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Storage;