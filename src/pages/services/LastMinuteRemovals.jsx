import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Clock, CheckCircle, PhoneCall } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LastMinuteRemovals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Emergency & Last Minute Removals Services | Derbyshire Removals</title>
        <meta name="description" content="Need urgent removal services in Derby and surrounding areas? Our last-minute removal service provides quick, reliable solutions for unexpected moves. Available 24/7." />
        <meta name="keywords" content="emergency removals derby, urgent house move, last minute moving service, quick removal company derby, same day removals derbyshire" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Last Minute Removals",
              "provider": {
                "@type": "MovingCompany",
                "name": "Derbyshire Removals",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "48 Farmhouse Road",
                  "addressLocality": "Derby",
                  "postalCode": "DE24 3DB",
                  "addressCountry": "GB"
                }
              },
              "description": "Emergency and last-minute removal services for unexpected moves, available 24/7 across Derby and surrounding areas.",
              "areaServed": ["Derby", "Derbyshire", "East Midlands"],
              "serviceType": "Emergency Removals",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://derbyshireremovals.com/services/last-minute-removals",
                "servicePhone": "+441332314312"
              }
            }
          `}
        </script>
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-44">
        <h1 className="text-4xl font-bold mb-8 text-center">Last Minute & Emergency Removals</h1>
        
        <div className="mb-8">
          <img 
            src="/images/business/6.jpg"
            alt="Quick response moving team ready for emergency relocations"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Response for Urgent Moves</h2>
          <p className="text-gray-700 mb-6">
            Life doesn't always go according to plan. When you need to move quickly, our last-minute removal service is here to help. We understand the stress of unexpected moves and provide rapid, reliable solutions to get you relocated efficiently.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">24/7 Availability</h3>
                <p className="text-gray-600">Ready to respond to urgent removal needs</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Quick Response Time</h3>
                <p className="text-gray-600">Fast service deployment when you need it most</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Professional Team</h3>
                <p className="text-gray-600">Experienced in handling urgent relocations</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Emergency Service Includes</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Rapid response times for urgent moves</span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Same-day service when available</span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Full packing service option</span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Flexible payment options</span>
            </li>
          </ul>
        </section>

        <section className="bg-[#071059] text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Urgent Removal Services?</h2>
          <p className="mb-6">Contact us now for immediate assistance with your emergency move</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" className="w-full sm:w-auto">
                <PhoneCall className="mr-2 h-4 w-4" />
                Contact Us Now
              </Button>
            </Link>
            <a 
              href="https://wa.me/441332314312?text=Hi!%20I%20need%20urgent%20removal%20services.%20Can%20you%20help?" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full sm:w-auto bg-white">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LastMinuteRemovals;