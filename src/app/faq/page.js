
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import Script from 'next/script';

export const metadata = {
  title: "Frequently Asked Questions on Moving | Derbyshire Removals",
  description: "Discover answers to FAQs on booking, packing, and insurance for Derbyshire Removals. Plan your move with expert guidance today.",
  keywords: "removal services FAQ, moving company questions, Derby removals FAQ, packing services questions, furniture removal FAQ",
  alternates: {
    canonical: "https://derbyshireremovals.com/faq",
  },
};

const FAQ = () => {
  const faqItems = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking your move at least 4-6 weeks in advance, especially during peak moving seasons (summer months and end of the month). However, we'll do our best to accommodate last-minute bookings when possible. Please note that cancellations or postponements made 11 working days or more before the start of work incur no charge, while cancellations 8-10 working days before incur a 25% charge, and 7 working days or less incur a 50% charge of the removal fee."
    },
    {
      question: "Do you provide packing services?",
      answer: "Yes, we offer full or partial packing services tailored to your needs. Our professional team can pack your entire house, or just specific items or rooms. We use high-quality packing materials to ensure the safety of your belongings during the move. Please note that our estimates don't include taking down or putting up unit furniture, disconnecting appliances, or laying floor coverings unless specifically agreed in writing."
    },
    {
      question: "Are my belongings insured during the move?",
      answer: "Yes, we provide basic insurance coverage for all moves. For additional protection against fire risk, you can provide written instructions and a declared value at least three days before the removal starts, and we will arrange insurance against this risk in your name. We also offer additional insurance options for valuable items. Please note that we cannot accept liability for jewelry, watches, precious stones, money, deeds, securities, stamps, coins, or similar collections, nor for livestock, plants, or animals."
    },
    {
      question: "How do you handle fragile or valuable items?",
      answer: "We take extra care with fragile and valuable items. Our movers are trained in proper packing techniques for delicate items. For extremely valuable or irreplaceable items, we recommend special crating services or personal transport. Please be aware that we have specific limitations of liability for damages, and we cannot be liable for items in wardrobes or drawers or in any container not both packed and unpacked by our employees."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers and cash. Unless agreed otherwise in writing, payment for removals is required in advance. For storage services, payment is required four weeks in advance."
    },
    {
      question: "Do you offer storage services?",
      answer: "Yes, we provide secure storage solutions. Storage charges are subject to annual revision, and the minimum period for storage is one week. We require 14 clear working days' notice in writing for termination of storage. Our storage insurance covers all risks up to the value insured, with specific exclusions including jewelry and valuable collections."
    },
    {
      question: "What if I need to cancel or reschedule my move?",
      answer: "If you need to cancel, our cancellation policy states that cancellations made 11 working days or more before the scheduled move date incur no charge, cancellations 8-10 working days before incur a 25% charge of the removal fee, and cancellations 7 working days or less before incur a 50% charge of the removal fee."
    },
    {
      question: "Can you move self-assembly furniture?",
      answer: "Yes, we can move self-assembly furniture, but please note that we cannot be liable for any damage to or reduction in quality of furniture that is unsuitable for removal or carriage (particularly system furniture sold in the form of dismantled kits). If we dismantle such furniture at your instruction, we will not be responsible for its quality or state upon reassembly."
    },
    {
      question: "What about moving deep freezers?",
      answer: "We can move deep freezers, but please be aware that our estimates do not include moving deep freezers loaded with goods unless specifically agreed. Additionally, we are not liable for damage to any deep freeze, loss or damage to its contents, or for death, injury, sickness, or disease arising from the removal or warehousing of any deep freezer."
    },
    {
      question: "How do you handle claims for loss or damage?",
      answer: "You must notify us in writing of any loss or damage within specific time limits: immediately when goods are removed from our warehouse by anyone except us, within 7 days after delivery for damaged goods, and within 7 days after the expected delivery date for lost goods or goods we fail to produce. Our liability is limited to the cost of repairing or replacing the damaged or missing article, or up to £20 for any one article, whichever is smaller."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}
      </Script>
      
      <Header />
      <main className="container mx-auto px-4 py-8 pt-52">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="mb-8 text-gray-700">
          Find comprehensive answers to common questions about our removal services, booking process, 
          insurance coverage, and more. If you don't find the information you're looking for, 
          please don't hesitate to <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="mb-4">
            Our team is here to help answer any additional questions you may have about our removal services.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
