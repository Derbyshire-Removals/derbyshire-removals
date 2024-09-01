import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MoveChecklist = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-40"> {/* Updated pt-32 to pt-40 */}
        <h1 className="text-3xl font-bold mb-6">Move Checklist</h1>
        <p className="mb-8">Follow our checklist to ensure your move is as stress free as possible.</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">One Month Before You Move (or as Soon as You Have a Moving Date)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contact Derbyshire Removals and arrange for a free inventory and quote.</li>
            <li>Tell your phone company that you are moving. Give them the date to close your account and arrange reconnection at your new home. Give your solicitor your new telephone number.</li>
            <li>Arrange meter readings and disconnection at your present address.</li>
            <li>Confirm that you are taking over gas and electricity at the new address.</li>
            <li>Start to plan your packing and what you will need. Click on <Link to="/packaging-material" className="text-blue-600 hover:underline">Packaging Material</Link> on our home page for help and advice.</li>
            <li>Redirect your mail.</li>
            <li>Check that your home and contents insurers know about your move make sure that cover will continue and that they have your new contact address.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">One Week Before You Move</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Confirm the details of your move with Derbyshire Removals.</li>
            <li>Start to organise your packing.</li>
            <li>Pay any outstanding milk, newspaper, window cleaner bills and so on.</li>
            <li>Post your change of address cards.</li>
            <li>Find the mains water supply stop valve.</li>
            <li>If you have pets, arrange for them to be looked after on the day of the move.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">One Day Before You Move</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Finish off your packing apart from your overnight essentials.</li>
            <li>Put all your valuables and documents away safely where you can find them later!</li>
            <li>Keep dust sheets handy to protect the carpets while the boxes and packing cases are being carried out to the van.</li>
            <li>Keep a supply of light bulbs and a telephone ready for use at your new address.</li>
            <li>Make sure you have cash and your chequebook handy.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">On the Day Itself</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Supervise the loading and tell our removal supervisor of the order you would like your items at the new address.</li>
            <li>Make sure that nothing is left behind!</li>
            <li>Securely lock the property you are leaving.</li>
            <li>Double check that we have your new address and a contact phone number.</li>
            <li>Collect the keys to your new property and hand over your old keys.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Useful Numbers</h2>
          <ul className="space-y-2">
            <li><strong>Gas:</strong> 08459 60 50 40</li>
            <li><strong>Telephone:</strong> 150</li>
            <li><strong>Water:</strong> 0845 750 0500</li>
            <li><strong>Royal Mail:</strong> 0845 774 0740</li>
            <li><strong>Derbyshire Removals and Storage:</strong> 01629 582762</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MoveChecklist;