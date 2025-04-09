
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Clock } from 'lucide-react';
import { generateSchemaScript, getOrganizationSchema } from '../lib/schema';

const MoveChecklist = () => {
  // Define schema for move checklist page
  const organizationSchema = getOrganizationSchema();
  
  const checklistSchema = {
    "@type": "HowTo",
    "name": "Complete House Moving Checklist",
    "description": "A comprehensive guide for a stress-free home move with steps to take before, during, and after moving day.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "8 Weeks Before Moving",
        "text": "Start planning your move, research removal companies, and create an inventory"
      },
      {
        "@type": "HowToStep",
        "name": "4-6 Weeks Before Moving",
        "text": "Book your removal company, start decluttering, and notify relevant parties of your change of address"
      },
      {
        "@type": "HowToStep",
        "name": "2-3 Weeks Before Moving",
        "text": "Start packing non-essential items and arrange for utility disconnections/connections"
      },
      {
        "@type": "HowToStep",
        "name": "1 Week Before Moving",
        "text": "Finalize packing, prepare essential boxes, and confirm details with your removal company"
      },
      {
        "@type": "HowToStep",
        "name": "Moving Day",
        "text": "Supervise the loading process, conduct final checks, and ensure safe transport of your belongings"
      },
      {
        "@type": "HowToStep",
        "name": "After Moving",
        "text": "Unpack systematically, check for damages, and settle into your new home"
      }
    ]
  };
  
  const jsonLdString = generateSchemaScript([
    organizationSchema,
    checklistSchema
  ]);

  const beforeMovingTasks = [
    {
      period: "8 Weeks Before",
      tasks: [
        "Create a moving budget",
        "Research and compare removal companies",
        "Start taking inventory of your belongings",
        "Research your new area (schools, doctors, etc.)",
        "Begin gathering free packing materials"
      ]
    },
    {
      period: "6 Weeks Before",
      tasks: [
        "Book your removal company",
        "Start decluttering unwanted items",
        "Arrange for storage if needed",
        "Notify your landlord if you're renting",
        "Start collecting important documents"
      ]
    },
    {
      period: "4 Weeks Before",
      tasks: [
        "Start packing non-essential items",
        "Notify relevant parties of your change of address",
        "Arrange time off work for moving day",
        "Begin using up frozen food",
        "Measure furniture and doorways at new property"
      ]
    },
    {
      period: "2 Weeks Before",
      tasks: [
        "Confirm removal company details",
        "Arrange utility disconnections/connections",
        "Organize pet and plant transportation",
        "Pack most of your items",
        "Begin cleaning your current property"
      ]
    },
    {
      period: "1 Week Before",
      tasks: [
        "Pack essential items box",
        "Disassemble furniture that needs it",
        "Defrost freezer",
        "Confirm key collection for new property",
        "Withdraw cash for moving day expenses"
      ]
    }
  ];

  const movingDayTasks = [
    "Check all rooms, cupboards, and storage spaces before leaving",
    "Record utility meter readings",
    "Keep important documents and valuables with you",
    "Ensure removal team has correct address and contact details",
    "Lock all windows and doors before leaving"
  ];

  const afterMovingTasks = [
    "Check for any damages to your belongings",
    "Prioritize unpacking essential rooms first",
    "Test smoke alarms and locate stopcock",
    "Introduce yourself to neighbors",
    "Update your address on remaining accounts"
  ];

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 pt-52 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-[#071059]">Complete House Moving Checklist</h1>
            
            <p className="text-lg mb-8">
              Moving house can be overwhelming, but with proper planning, you can ensure a smooth transition to your new home. 
              Follow our comprehensive checklist to stay organized throughout your move.
            </p>
            
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Before Moving Day</h2>
              
              {beforeMovingTasks.map((period, index) => (
                <div key={index} className="mb-8">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-[#071059] mr-2" />
                    <h3 className="text-xl font-medium">{period.period}</h3>
                  </div>
                  <ul className="space-y-3">
                    {period.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
            
            <section className="bg-[#071059] text-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Moving Day</h2>
              <ul className="space-y-3">
                {movingDayTasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">After Moving</h2>
              <ul className="space-y-3">
                {afterMovingTasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
};

export default MoveChecklist;
