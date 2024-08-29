import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MoveChecklist = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Move Checklist</h1>
        <p>Here you can add your move checklist content.</p>
      </main>
      <Footer />
    </div>
  );
};

export default MoveChecklist;