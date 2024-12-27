import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import GetInTouch from '../components/GetInTouch';
import AreasCovered from '../components/AreasCovered';
import HowWeWork from '../components/HowWeWork';
import Footer from '../components/Footer';
import HomeReviews from '../components/HomeReviews';

const ProfessionalMovingServices = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Professional Moving Services</h2>
          <p className="text-gray-600 mb-6">
            Our experienced team ensures your belongings are handled with the utmost care,
            making your move stress-free and efficient.
          </p>
        </div>
        <div>
          <img 
            src="/images/business/13.jpg"
            alt="Professional movers carefully packing items into boxes"
            className="rounded-lg shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

const TrustedPartners = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="/images/business/8.jpg"
            alt="Modern office space being prepared for relocation"
            className="rounded-lg shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Trusted by Businesses</h2>
          <p className="text-gray-600 mb-6">
            From small offices to large corporations, we provide reliable commercial moving
            services that minimize downtime and protect your valuable assets.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const StorageSolutions = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Secure Storage Solutions</h2>
          <p className="text-gray-600 mb-6">
            Need temporary storage? Our secure facilities provide the perfect solution
            for both short-term and long-term storage needs.
          </p>
        </div>
        <div>
          <img 
            src="/images/business/storage.jpg"
            alt="Clean and organized storage facility with modern security features"
            className="rounded-lg shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Index page mounted');
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Derbyshire Removals - Professional Moving Services Since 1988</title>
        <meta name="description" content="Trusted removal services across East & West Midlands. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions. Free quotes available." />
        <meta name="keywords" content="removals derby, house removals derbyshire, office removals derby, storage solutions derby, packing services derbyshire" />
        <link rel="canonical" href="https://derbyshireremovals.com/" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <HomeReviews />
        <ProfessionalMovingServices />
        <Services />
        <TrustedPartners />
        <WhyUs />
        <StorageSolutions />
        <HowWeWork />
        <AreasCovered />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;