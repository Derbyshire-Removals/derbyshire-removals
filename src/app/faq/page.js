
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export const metadata = {
  title: "Frequently Asked Questions | Derbyshire Removals",
  description: "Find answers to common questions about our removal services, booking process, packing services, and insurance coverage. Professional moving services in Derby and surrounding areas.",
  keywords: "removal services FAQ, moving company questions, Derby removals FAQ, packing services questions, furniture removal FAQ",
  alternates: {
    canonical: "https://derbyshireremovals.com/faq",
  },
};

const FAQ = () => {
  const faqItems = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking your move at least 4-6 weeks in advance, especially during peak moving seasons (summer months and end of the month). However, we'll do our best to accommodate last-minute bookings when possible."
    },
    {
      question: "Do you provide packing services?",
      answer: "Yes, we offer full or partial packing services tailored to your needs. Our professional team can pack your entire home, or just specific items or rooms. We use high-quality packing materials to ensure the safety of your belongings during the move."
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
      answer: "We accept bank transfers and cash."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-52">
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
