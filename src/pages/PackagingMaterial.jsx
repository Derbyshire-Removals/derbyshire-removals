import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const packagingMaterials = [
  { 
    description: "Medium box",
    dimensions: "18x13x13 inch - Book Box",
    price: "£2.95",
    image: "https://images.unsplash.com/photo-1635006459011-c29669c5d881?q=80&w=400&h=300&fit=crop"
  },
  {
    description: "Large box",
    dimensions: "18x18x20 inch - Glass/China Linen etc",
    price: "£3.95",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=400&h=300&fit=crop"
  },
  {
    description: "Wardrobe Cartons (Rental)",
    dimensions: "",
    price: "£7.50",
    image: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=400&h=300&fit=crop"
  },
  {
    description: "Tape (brown)",
    dimensions: "",
    price: "£1.50 per roll",
    image: "https://images.unsplash.com/photo-1627131623654-5044d3370d35?q=80&w=400&h=300&fit=crop"
  },
  {
    description: "Tape (fragile)",
    dimensions: "",
    price: "£1.50 per roll",
    image: "https://images.unsplash.com/photo-1627131624785-0a2a57a0cab3?q=80&w=400&h=300&fit=crop"
  },
  {
    description: "Thick White Paper",
    dimensions: "20 x 30 inch - 5kg",
    price: "£16.25",
    image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=400&h=300&fit=crop"
  },
  {
    description: "Bubble wrap",
    dimensions: "750mm x 25meters - Green BIO",
    price: "£16.25",
    image: "https://images.unsplash.com/photo-1625962933943-3c9520397ee4?q=80&w=400&h=300&fit=crop"
  },
  {
    description: "Black Marker Pen",
    dimensions: "",
    price: "£1.60",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=400&h=300&fit=crop"
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
        <h1 className="text-3xl font-bold mb-6">Packaging Material</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagingMaterials.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex justify-center items-center p-4">
                <img 
                  src={item.image} 
                  alt={item.description}
                  className="w-auto h-32 object-contain"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{item.description}</h3>
                {item.dimensions && (
                  <p className="text-gray-600 mb-2">{item.dimensions}</p>
                )}
                <p className="text-primary font-semibold">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="mt-8 font-bold text-lg text-center">All prices +VAT</p>
      </main>
      <Footer />
    </div>
  );
};

export default PackagingMaterial;