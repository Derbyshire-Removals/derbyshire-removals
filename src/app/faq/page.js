import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { generateSchemaScript, getOrganizationSchema } from '../lib/schema';

const FAQ = () => {
  const faqs = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking at least 4-6 weeks in advance to secure your preferred date, especially during peak moving seasons (spring and summer). However, we do offer last-minute removal services when available."
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes, we offer a complete range of professional packing materials including boxes, bubble wrap, packing paper, wardrobe cartons, and tape. These can be purchased separately or included as part of our full packing service."
    },
    {
      question: "What's included in your basic removal service?",
      answer: "Our standard service includes loading, transportation, and unloading of your belongings. Our team will disassemble and reassemble basic furniture items and place boxes and furniture in your designated rooms."
    },
    {
      question: "Do you offer storage solutions?",
      answer: "Yes, we provide short and long-term storage options in our secure facilities. Our storage services are perfect if there's a gap between moving out and moving in, or if you need to store items during home renovations."
    },
    {
      question: "Are my belongings insured during the move?",
      answer: "Yes, we have comprehensive goods-in-transit and public liability insurance. For additional peace of mind, we can arrange extended coverage for high-value items. Please inform us about any items of exceptional value before your move."
    },
    {
      question: "How do you handle delicate or valuable items?",
      answer: "We take extra precautions with delicate items, using specialized packing materials and techniques. For particularly valuable or antique items, we offer our specialized antique and fine art removal service."
    },
    {
      question: "What happens if bad weather is forecast on my moving day?",
      answer: "We monitor weather forecasts and will communicate with you if severe weather is expected. Our teams are equipped to handle most weather conditions, but in extreme cases, we may suggest rescheduling for safety reasons."
    },
    {
      question: "Do I need to empty my drawers and cabinets?",
      answer: "Yes, we recommend emptying all furniture before moving day. Drawers and cabinets should be empty to reduce weight, prevent damage to the furniture, and avoid items shifting during transport."
    },
    {
      question: "Can you move pets?",
      answer: "We recommend transporting pets yourself where possible as pets may become stressed during the moving process. If this isn't possible, please discuss your specific requirements with us beforehand."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept bank transfers, credit/debit cards, and cash payments. For removals, a deposit is required to secure your booking, with the balance due before completion of the move."
    }
  ];

  // Generate FAQ schema
  const faqItems = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const faqSchema = generateSchemaScript([
    getOrganizationSchema(),
    {
      "@type": "FAQPage",
      "mainEntity": faqItems
    }
  ]);

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <main className="container mx-auto px-4 pt-52 pb-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-[#071059]">Frequently Asked Questions</h1>
          
          <p className="text-lg mb-8">
            Find answers to common questions about our removal services. If you can't find what you're looking for, 
            please don't hesitate to contact us directly.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-semibold hover:text-[#071059]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-8 bg-[#071059] text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6">
              Our friendly team is ready to help with any questions you might have about our services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+443335677001" 
                className="bg-white text-[#071059] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center"
              >
                Call Us: 0333 567 7001
              </a>
              <a 
                href="mailto:info@derbyshireremovals.com" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#071059] transition-colors font-medium text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </section>
  );
};

export default FAQ;
