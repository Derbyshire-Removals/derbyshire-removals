import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Checkbox } from "@/components/ui/checkbox";

const MoveChecklist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Move Checklist page mounted');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Moving House Checklist | Derbyshire Removals</title>
        <meta name="description" content="Comprehensive moving house checklist to ensure a stress-free move. Get organized with our detailed timeline and expert tips for before, during, and after your move." />
        <meta name="keywords" content="moving checklist, house move timeline, moving preparation, moving day tips, derbyshire removals checklist" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Moving House Checklist",
            "description": "A comprehensive checklist for organizing your house move",
            "step": [
              {
                "@type": "HowToStep",
                "name": "One Month Before",
                "text": "Contact removals company, arrange utilities, start planning packing"
              },
              {
                "@type": "HowToStep",
                "name": "One Week Before",
                "text": "Confirm details, organize packing, settle bills"
              },
              {
                "@type": "HowToStep",
                "name": "Day Before",
                "text": "Final packing, prepare essentials, secure valuables"
              },
              {
                "@type": "HowToStep",
                "name": "Moving Day",
                "text": "Supervise loading, check property, handle keys"
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 py-8 pt-44">
        <h1 className="text-4xl font-bold mb-6 text-[#071059]">Moving House Checklist</h1>
        <p className="mb-8 text-lg text-gray-700">Follow our comprehensive checklist to ensure your move is as stress-free as possible. Each task is designed to help you stay organized and prepared throughout your moving journey.</p>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#071059]">One Month Before You Move</h2>
          <div className="space-y-4">
            {[
              "Contact Derbyshire Removals for a free inventory and quote",
              "Arrange phone company account closure and reconnection",
              "Schedule meter readings and utility disconnections",
              "Confirm gas and electricity setup at new address",
              "Begin packing plan and material assessment",
              "Set up mail redirection service",
              "Update home and contents insurance"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Checkbox id={`month-${index}`} />
                <label htmlFor={`month-${index}`} className="text-gray-700 leading-normal cursor-pointer">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#071059]">One Week Before You Move</h2>
          <div className="space-y-4">
            {[
              "Confirm moving details with Derbyshire Removals",
              "Start systematic packing of non-essential items",
              "Settle outstanding local service bills",
              "Send change of address notifications",
              "Locate main water supply valve",
              "Arrange pet care for moving day"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Checkbox id={`week-${index}`} />
                <label htmlFor={`week-${index}`} className="text-gray-700 leading-normal cursor-pointer">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#071059]">One Day Before You Move</h2>
          <div className="space-y-4">
            {[
              "Complete packing except for overnight essentials",
              "Secure important documents and valuables",
              "Prepare dust sheets for carpet protection",
              "Pack essential items box (light bulbs, basic tools)",
              "Ensure access to cash and payment methods"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Checkbox id={`day-${index}`} />
                <label htmlFor={`day-${index}`} className="text-gray-700 leading-normal cursor-pointer">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#071059]">Moving Day</h2>
          <div className="space-y-4">
            {[
              "Supervise loading and communicate preferences",
              "Double-check all rooms and storage spaces",
              "Secure the property before departure",
              "Provide contact details to removal team",
              "Handle key exchanges"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Checkbox id={`moving-${index}`} />
                <label htmlFor={`moving-${index}`} className="text-gray-700 leading-normal cursor-pointer">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#071059]">Important Contact Numbers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p><strong>Gas:</strong> <a href="tel:08459605040" className="text-blue-600 hover:underline">08459 60 50 40</a></p>
              <p><strong>Telephone:</strong> <a href="tel:150" className="text-blue-600 hover:underline">150</a></p>
              <p><strong>Water:</strong> <a href="tel:08457500500" className="text-blue-600 hover:underline">0845 750 0500</a></p>
            </div>
            <div className="space-y-2">
              <p><strong>Royal Mail:</strong> <a href="tel:08457740740" className="text-blue-600 hover:underline">0845 774 0740</a></p>
              <p><strong>Derbyshire Removals:</strong> <a href="tel:01332314312" className="text-blue-600 hover:underline">01332 314312</a></p>
            </div>
          </div>
        </section>

        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-4">Need packing materials for your move?</p>
          <Link 
            to="/packaging-material" 
            className="inline-block bg-[#071059] text-white px-6 py-3 rounded-lg hover:bg-[#0a1875] transition-colors"
          >
            View Our Packaging Materials
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MoveChecklist;