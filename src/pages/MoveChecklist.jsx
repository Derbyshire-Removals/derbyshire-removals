import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Printer } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChecklistSection from '../components/checklist/ChecklistSection';
import ImportantContacts from '../components/checklist/ImportantContacts';

const MoveChecklist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Move Checklist page mounted');
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const twoMonthsTasks = [
    "Begin decluttering and decide what to keep, sell, donate or dispose",
    "Start collecting boxes and packing materials",
    "Research your new area (schools, GPs, amenities)",
    "Start taking photos of valuable items for insurance purposes"
  ];

  const oneMonthTasks = [
    "Book Derbyshire Removals for your moving date",
    "Notify your landlord if renting",
    "Begin packing non-essential items",
    "Arrange home insurance for your new property",
    "Schedule utility readings and transfers (gas, electric, water)",
    "Register to vote at your new address",
    "Arrange for parking permits or suspended bay parking if needed",
    "Book time off work for moving day",
    "Start using up frozen food and cleaning supplies"
  ];

  const twoWeeksTasks = [
    "Confirm moving date and details with Derbyshire Removals",
    "Notify important contacts of your move (bank, DVLA, council tax)",
    "Arrange Royal Mail redirection service - visit https://www.royalmail.com/personal/receiving-mail/redirection",
    "Begin packing room by room",
    "Label boxes clearly with contents and destination room",
    "Book professional cleaners if required",
    "Arrange childcare/pet care for moving day if needed",
    "Create an inventory of your packed items"
  ];

  const movingDayTasks = [
    "Take final meter readings and photographs",
    "Keep important documents and valuables with you",
    "Pack a box of essentials (kettle, cups, toilet paper, etc.)",
    "Check all windows are secure and utilities are switched off",
    "Lock all doors and windows",
    "Hand over all sets of keys",
    "Take photos of empty rooms for proof of condition",
    "Ensure removal team has contact details and new address"
  ];

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
                "name": "Two Months Before",
                "text": "Start planning, research removal companies, begin decluttering"
              },
              {
                "@type": "HowToStep",
                "name": "One Month Before",
                "text": "Book removals, arrange utilities, start packing non-essentials"
              },
              {
                "@type": "HowToStep",
                "name": "Two Weeks Before",
                "text": "Notify important contacts, arrange parking permits, continue packing"
              },
              {
                "@type": "HowToStep",
                "name": "Moving Day",
                "text": "Final checks, supervise loading, handle documentation"
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 py-8 pt-44">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-[#071059]">Moving House Checklist</h1>
          <button 
            onClick={handlePrint} 
            className="flex items-center bg-[#071059] text-white px-4 py-2 rounded hover:bg-[#0a1875] transition-colors"
            aria-label="Print Moving Checklist"
          >
            <Printer className="mr-2" size={20} /> Print Checklist
          </button>
        </div>

        <style>
          {`
            @media print {
              .no-print {
                display: none;
              }
              body {
                font-size: 12px;
              }
              .print-header {
                display: block !important;
                text-align: center;
                margin-bottom: 20px;
                font-size: 24px;
                font-weight: bold;
              }
            }
          `}
        </style>

        <p className="mb-8 text-lg text-gray-700">
          Stay organised throughout your move with our comprehensive UK moving checklist. 
          We've included all essential tasks and important considerations specific to moving within the UK.
        </p>

        <ChecklistSection title="Two Months Before Moving" items={twoMonthsTasks} />
        <ChecklistSection title="One Month Before Moving" items={oneMonthTasks} />
        <ChecklistSection title="Two Weeks Before Moving" items={twoWeeksTasks} />
        <ChecklistSection title="Moving Day" items={movingDayTasks} />
        <ImportantContacts />

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
