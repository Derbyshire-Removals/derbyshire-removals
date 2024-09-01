import React from 'react';
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
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-[10.2rem]"> {/* Updated padding-top */}
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