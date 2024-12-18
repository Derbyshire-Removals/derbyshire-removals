import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const packagingMaterials = [
  { 
    description: "Medium box",
    dimensions: "18x13x13 inch - Book Box",
    price: "£2.95"
  },
  {
    description: "Large box",
    dimensions: "18x18x20 inch - Glass/China Linen etc",
    price: "£3.95"
  },
  {
    description: "Wardrobe Cartons (Rental)",
    dimensions: "",
    price: "£7.50"
  },
  {
    description: "Tape (brown)",
    dimensions: "",
    price: "£1.50 per roll"
  },
  {
    description: "Tape (fragile)",
    dimensions: "",
    price: "£1.50 per roll"
  },
  {
    description: "Packing White Paper",
    dimensions: "20 x 30 inch - 5kg",
    price: "£16.25"
  },
  {
    description: "Bubble wrap",
    dimensions: "750mm x 25meters - Green BIO",
    price: "£16.25"
  },
  {
    description: "Black Marker Pen",
    dimensions: "",
    price: "£1.60"
  },
  {
    description: "Shrink Wrap",
    dimensions: "400mmx300mtr - Medium Duty",
    price: "£9.95"
  }
];

const PackagingMaterial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-44">
        <h1 className="text-3xl font-bold mb-2">Packaging Material</h1>
        <p className="text-sm text-gray-600 mb-6 italic">All prices +VAT</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagingMaterials.map((item, index) => (
            <Card key={index} className="flex flex-col p-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-lg">{item.description}</h3>
                {item.dimensions && (
                  <p className="text-sm text-gray-600">{item.dimensions}</p>
                )}
                <p className="text-primary font-semibold mt-2">{item.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackagingMaterial;