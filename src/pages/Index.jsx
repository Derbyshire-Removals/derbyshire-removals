import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Authority from '../components/Authority';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import GetInTouch from '../components/GetInTouch';
import AreasCovered from '../components/AreasCovered';
import HowWeWork from '../components/HowWeWork';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Index page mounted');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Derbyshire Removals - Professional Moving Services Since 1988</title>
        <meta name="description" content="Trusted removal services across East & West Midlands. Family-run business since 1988 offering home removals, office relocations, packing & storage solutions. Free quotes available." />
        <meta name="keywords" content="removals derby, house removals derbyshire, office removals derby, storage solutions derby, packing services derbyshire" />
        <link rel="canonical" href="https://derbyshireremovals.com/" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Authority />
        <Services />
        <WhyUs />
        <HowWeWork />
        <AreasCovered />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;