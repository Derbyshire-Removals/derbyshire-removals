import React, { useEffect } from 'react';
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
  { description: "Medium box", dimensions: "18x13x13 inch - Book Box", price: "£3.30" },
  { description: "Large box", dimensions: "18x18x20 inch - Glass/China Linen etc", price: "£4.20" },
  { description: "Wardrobe Cartons (Rental)", dimensions: "", price: "£7.50" },
  { description: "Tape (brown)", dimensions: "", price: "£1.60 per roll" },
  { description: "Tape (fragile)", dimensions: "", price: "£1.60 per roll" },
  { description: "Thick White Paper", dimensions: "20 x 30 inch - 5kg", price: "£15.95" },
  { description: "Bubble wrap", dimensions: "750mm x 25meters - Green BIO", price: "£16.95" },
  { description: "Black Marker Pen", dimensions: "", price: "£1.75" },
];

const PackagingMaterial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-44">
        <h1 className="text-3xl font-bold mb-6">Packaging Material</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Dimensions</TableHead>
              <TableHead>Price per item</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packagingMaterials.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.dimensions}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="mt-4 font-bold">All prices +VAT</p>
      </main>
      <Footer />
    </div>
  );
};

export default PackagingMaterial;