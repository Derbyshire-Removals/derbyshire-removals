import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MoveChecklist = () => {
  // Schema.org data for move checklist
  const moveChecklistSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": "House Moving Checklist",
        "description": "A comprehensive guide to help you prepare for your house move",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Two Months Before",
            "text": "Start decluttering and organize your belongings",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Sort through your belongings and decide what to keep, donate, or discard"
              },
              {
                "@type": "HowToDirection",
                "text": "Begin researching removal companies and request quotes"
              }
            ]
          },
          {
            "@type": "HowToStep",
            "name": "One Month Before",
            "text": "Start packing non-essential items and notify service providers",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Begin packing items you won't need before the move"
              },
              {
                "@type": "HowToDirection",
                "text": "Notify utility companies, banks, and other services of your change of address"
              }
            ]
          },
          {
            "@type": "HowToStep",
            "name": "Moving Day",
            "text": "Final preparations and coordination with your removal team",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "text": "Ensure all items are packed and ready for transport"
              },
              {
                "@type": "HowToDirection",
                "text": "Coordinate with your removal team for a smooth moving process"
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moveChecklistSchema) }}
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-52">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-[#071059]">Moving House Checklist</h1>
            
            <p className="mb-6 text-gray-700">
              Moving to a new home can be both exciting and stressful. To help make your move as smooth as possible, 
              we've created this comprehensive checklist of tasks to complete before, during, and after your move.
            </p>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-[#071059]">Two Months Before Moving</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Create a moving folder or digital document to keep track of quotes, receipts, and important information</li>
                <li>Research and book a removal company (the earlier the better, especially for peak times)</li>
                <li>Begin decluttering - sort through belongings and decide what to keep, donate, sell, or discard</li>
                <li>Start collecting free packing materials or purchase moving supplies</li>
                <li>If renting, give notice to your landlord</li>
                <li>If necessary, arrange for storage solutions</li>
                <li>Create an inventory of valuable items and consider taking photos for insurance purposes</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-[#071059]">One Month Before Moving</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Begin packing non-essential items and seasonal belongings</li>
                <li>Notify important parties of your change of address:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Electoral register</li>
                    <li>DVLA (for driving license)</li>
                    <li>Car insurance provider</li>
                    <li>Home insurance provider</li>
                    <li>Bank and credit card companies</li>
                    <li>Employer</li>
                    <li>Schools</li>
                    <li>Doctor, dentist, and other healthcare providers</li>
                  </ul>
                </li>
                <li>Arrange for mail redirection with Royal Mail</li>
                <li>Schedule disconnection/connection of utilities at old and new properties:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Electricity</li>
                    <li>Gas</li>
                    <li>Water</li>
                    <li>Internet and phone</li>
                    <li>TV license</li>
                  </ul>
                </li>
                <li>Confirm moving date with your removal company and verify details</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-[#071059]">Two Weeks Before Moving</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Continue packing, labeling boxes clearly with contents and destination room</li>
                <li>Create a floor plan of your new home to help movers place furniture correctly</li>
                <li>Arrange for professional cleaning of your new home if needed</li>
                <li>Use up food from the freezer and refrigerator</li>
                <li>Confirm details with your removal company</li>
                <li>Arrange for pet and plant transportation</li>
                <li>Organize important documents in a secure, easily accessible place</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-[#071059]">One Week Before Moving</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pack a "first night" box with essentials you'll need immediately</li>
                <li>Disassemble furniture that requires it</li>
                <li>Confirm key collection arrangements for your new property</li>
                <li>Take meter readings at both properties</li>
                <li>Arrange for children and pets to be looked after on moving day if possible</li>
                <li>Clean your current home</li>
                <li>Prepare a moving day kit with important items:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Important documents and IDs</li>
                    <li>Medication</li>
                    <li>Phone chargers</li>
                    <li>Toiletries</li>
                    <li>Change of clothes</li>
                    <li>Snacks and drinks</li>
                    <li>Basic tools</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-[#071059]">Moving Day</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Take final meter readings and photos for proof</li>
                <li>Check all rooms, cupboards, loft, garden, and shed to ensure nothing is left behind</li>
                <li>Lock all windows and doors</li>
                <li>Hand over keys as arranged</li>
                <li>At your new home, check that all utilities are working</li>
                <li>Direct movers where to place furniture and boxes</li>
                <li>Unpack essentials and make up beds for the first night</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-[#071059]">After Moving</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Register with local services:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Doctor</li>
                    <li>Dentist</li>
                    <li>Schools</li>
                  </ul>
                </li>
                <li>Register for council tax</li>
                <li>Locate water stopcock, fuse box, and gas shut-off valve</li>
                <li>Test smoke and carbon monoxide detectors</li>
                <li>Change locks if desired</li>
                <li>Meet your neighbors</li>
                <li>Explore your new area</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-[#071059]">Need Help With Your Move?</h2>
              <p className="text-gray-700">
                At Derbyshire Removals, we're here to make your move as stress-free as possible. 
                Contact us today to discuss your moving requirements and how we can help.
              </p>
              <a 
                href="/contact" 
                className="inline-block mt-4 bg-[#071059] text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
};

export default MoveChecklist;
