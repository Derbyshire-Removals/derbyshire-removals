import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking your move at least 4-6 weeks in advance, especially during peak moving seasons (summer months and end of the month). However, we'll do our best to accommodate last-minute bookings when possible."
    },
    {
      question: "Do you provide packing services?",
      answer: "Yes, we offer full packing services. Our professional team can pack your entire home or just specific items. We use high-quality packing materials to ensure the safety of your belongings during the move."
    },
    {
      question: "Are my belongings insured during the move?",
      answer: "Yes, we provide basic insurance coverage for all moves. We also offer additional insurance options for valuable items. Please ask our team for more details on insurance coverage."
    },
    {
      question: "How do you handle fragile or valuable items?",
      answer: "We take extra care with fragile and valuable items. Our movers are trained in proper packing techniques for delicate items. For extremely valuable or irreplaceable items, we recommend special crating services or personal transport."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, bank transfers, and cash."
    },
    {
      question: "Do you provide storage solutions?",
      answer: "Yes, we offer secure storage solutions for both short-term and long-term needs. Our storage facilities are clean, dry, and monitored 24/7 to ensure the safety of your belongings."
    },
    {
      question: "What areas do you cover?",
      answer: "We primarily serve Derby, Chesterfield, and surrounding areas in the East Midlands. However, we can accommodate moves throughout the UK. Contact us for specific coverage information."
    },
    {
      question: "Do you move pianos and other special items?",
      answer: "Yes, we have experience in moving pianos, antiques, and other special items. Our team is trained in proper handling techniques for these delicate items, and we use specialized equipment when necessary."
    },
    {
      question: "What should I do with items you cannot transport?",
      answer: "Certain items like hazardous materials, perishables, and plants cannot be transported. We'll provide you with a list of prohibited items during the quote process and can advise on alternative arrangements."
    },
    {
      question: "Can you provide boxes and packing materials?",
      answer: "Yes, we supply a full range of packing materials including boxes, bubble wrap, tape, and protective covers. These can be purchased separately or included as part of our packing service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Frequently Asked Questions | Derbyshire Removals</title>
        <meta name="description" content="Find answers to common questions about our removal services, booking process, packing services, and insurance coverage. Professional moving services in Derby and surrounding areas." />
        <meta name="keywords" content="removal services FAQ, moving company questions, Derby removals FAQ, packing services questions, furniture removal FAQ" />
        <link rel="canonical" href="https://derbyshireremovals.com/#/faq" />
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 py-8 pt-44">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;