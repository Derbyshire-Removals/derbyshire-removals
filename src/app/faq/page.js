
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
      answer: "We recommend booking your move 4-6 weeks in advance to secure your preferred date, especially during summer and month-end periods when we're typically busier. This gives you plenty of time to prepare and allows us to arrange the perfect team for your specific needs. Of course, if you need a more urgent move, we'll always do our best to accommodate your schedule - just give us a call to discuss your requirements!"
    },
    {
      question: "What packing services do you offer?",
      answer: "We provide flexible packing options to suit your needs and budget! Our professional team can handle everything from full-service packing of your entire home to partial packing of just specific rooms or delicate items. We use only high-quality materials to ensure maximum protection for your belongings. Many customers find our packing service saves them valuable time and provides peace of mind knowing their possessions are expertly protected for transit."
    },
    {
      question: "How are my belongings protected during the move?",
      answer: "Your possessions' safety is our priority! We provide standard insurance coverage for all moves at no extra cost. For added protection, we offer additional coverage options for valuable items. Our experienced team uses professional packing techniques and high-quality materials to safeguard your belongings. We're proud of our excellent track record of safe, secure deliveries - that's why so many customers come back to us for their future moves!"
    },
    {
      question: "How do you handle delicate or valuable items?",
      answer: "We take extra special care with your precious possessions! Our team is specially trained in techniques for handling delicate items like artwork, antiques, and electronics. For particularly valuable or irreplaceable items, we can provide custom crating or specialized packing solutions. Just let us know about any items requiring special attention during your initial consultation, and we'll ensure they receive the appropriate care throughout your move."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We offer convenient payment options to make your move as stress-free as possible. We accept bank transfers and cash payments. For removals, payment is typically arranged in advance, and for storage services, we work on a simple 4-week advance payment schedule. If you have any specific requirements regarding payment timing or methods, please just ask - we're happy to discuss options that work best for you."
    },
    {
      question: "Do you offer storage solutions?",
      answer: "Yes! We provide secure, convenient storage options whether you need short-term storage between moves or longer-term solutions. Our facilities are clean, dry, and monitored for security, giving you peace of mind that your possessions are safe with us. Our storage solutions are flexible with a minimum period of just one week, and we include comprehensive insurance coverage for stored items. Many customers find our storage options incredibly helpful during transitional periods or when downsizing."
    },
    {
      question: "What if my moving plans change?",
      answer: "We understand that life can be unpredictable, and plans sometimes change! If you need to reschedule, we appreciate as much notice as possible so we can accommodate your new date. For schedule changes, simply contact our friendly team as soon as you know about the change, and we'll work with you to find a solution. The more notice you can provide, the more likely we'll be able to accommodate your preferred new date without any issues."
    },
    {
      question: "Can you move furniture that requires assembly/disassembly?",
      answer: "Absolutely! Our skilled team can disassemble and reassemble your furniture to ensure safe and efficient transport. We're experienced with all types of furniture, including beds, wardrobes, tables, and self-assembly items. We take photographs and make notes during disassembly to ensure everything goes back together perfectly at your new home. If you have particularly complex pieces, just let us know in advance so we can allocate sufficient time in our schedule."
    },
    {
      question: "Do you move appliances like freezers and washing machines?",
      answer: "Yes, we can move your appliances! For larger items like freezers, we recommend emptying and defrosting them before moving day. For washing machines, we suggest securing the drum with transit bolts if available. Our team is experienced in moving heavy appliances safely without causing damage to either the appliance or your property. We're happy to provide guidance on preparing your appliances for the move - just ask!"
    },
    {
      question: "What areas do you cover?",
      answer: "We proudly serve Derby, Matlock, Chesterfield, Alfreton, Buxton, Mansfield, Loughborough, and all surrounding areas throughout Derbyshire and the East Midlands. Whether you're moving locally or throughout the region, our experienced team can provide the same high-quality service. If you're moving to or from an area and aren't sure if we cover it, just give us a call - we're often able to accommodate moves beyond our core service areas."
    },
    {
      question: "How is the removal cost calculated?",
      answer: "We provide fair, transparent pricing based on several factors including the volume of items being moved, distance between locations, access at both properties, and any special requirements such as packing services or handling of particularly valuable items. We're happy to provide a free, no-obligation quote after understanding your specific needs. Many customers find our pricing competitive, especially considering the comprehensive service and peace of mind we provide!"
    },
    {
      question: "Do you provide packaging materials?",
      answer: "Yes! We offer a complete range of high-quality packaging materials including boxes of various sizes, bubble wrap, packing paper, tape, and specialized containers for items like clothing and dishes. Using professional-grade materials ensures better protection for your belongings. If you prefer to do your own packing, we can supply just the materials you need. We can also remove and recycle packaging materials after your move to make your settling-in process easier."
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
          We've compiled answers to the questions our customers ask most frequently about our removal services.
          Our goal is to make your move as smooth and stress-free as possible. If you don't find what you're looking for here,
          our friendly team is always happy to help - just <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
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
          <h2 className="text-xl font-semibold mb-4">Ready to Plan Your Move?</h2>
          <p className="mb-4">
            Our team is here to make your moving experience as smooth and stress-free as possible.
            Contact us today for a free, no-obligation quote or to discuss any special requirements for your move.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
