import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const packagingMaterials = [
  // ... (packaging materials array remains unchanged)
];

const PackagingMaterial = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-[10.2rem]"> {/* Updated padding-top */}
        <h1 className="text-3xl font-bold mb-6">Packaging Material</h1>
        {/* Rest of the component remains unchanged */}
      </main>
      <Footer />
    </div>
  );
};

export default PackagingMaterial;