import React, { useEffect } from 'react';
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
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div>
        <Hero />
        <Authority />
        <Services />
        <WhyUs />
        <GetInTouch />
        <AreasCovered />
        <HowWeWork />
      </div>
      <Footer />
    </div>
  );
};

export default Index;