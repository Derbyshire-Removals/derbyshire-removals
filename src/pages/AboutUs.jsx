import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Building2, Users, Globe, Handshake } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('About Us page mounted');
  }, []);

  const companyFeatures = [
    {
      icon: <Building2 className="h-8 w-8 text-[#071059]" />,
      title: "Family Business Since 1988",
      description: "Over three decades of trusted removal services in Derbyshire and beyond."
    },
    {
      icon: <Users className="h-8 w-8 text-[#071059]" />,
      title: "Expert Team",
      description: "Highly trained professionals dedicated to making your move stress-free."
    },
    {
      icon: <Globe className="h-8 w-8 text-[#071059]" />,
      title: "Wide Coverage",
      description: "Serving the East & West Midlands with nationwide moving capabilities."
    },
    {
      icon: <Handshake className="h-8 w-8 text-[#071059]" />,
      title: "Trusted Partner",
      description: "Proud member of Derbyshire's Trusted Trader scheme."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>About Derbyshire Removals | Professional Moving Services Since 1988</title>
        <meta name="description" content="Learn about Derbyshire Removals, a family-run business providing trusted removal services since 1988. Discover our commitment to excellence, expert team, and comprehensive coverage across the Midlands." />
        <meta name="keywords" content="about derbyshire removals, removal company history, trusted removals derby, family run removals business, professional movers derbyshire" />
        <link rel="canonical" href="https://derbyshireremovals.com/about-us" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About Derbyshire Removals | Professional Moving Services Since 1988" />
        <meta property="og:description" content="Learn about Derbyshire Removals, a family-run business providing trusted removal services since 1988. Discover our commitment to excellence, expert team, and comprehensive coverage across the Midlands." />
        <meta property="og:url" content="https://derbyshireremovals.com/about-us" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 pt-44 pb-24">
        <article>
          <h1 className="text-4xl font-bold mb-8 text-[#071059]">About Derbyshire Removals</h1>
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#071059]">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Since 1988, Derbyshire Removals has been the trusted name in professional moving services across the Midlands. 
              As a family-run business, we take immense pride in providing reliable, efficient, and caring removal services 
              to both residential and commercial clients.
            </p>
            <p className="text-gray-700">
              Our journey began with a simple mission: to make moving day as stress-free as possible for our customers. 
              Today, we continue to uphold this commitment while expanding our services and coverage area to meet the 
              growing needs of our clients.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {companyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#071059]">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Professional and reliable service delivery</li>
              <li>Customer satisfaction as our top priority</li>
              <li>Careful handling of your belongings</li>
              <li>Transparent pricing with no hidden costs</li>
              <li>Fully insured for your peace of mind</li>
              <li>Environmental responsibility in our operations</li>
            </ul>
          </section>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;