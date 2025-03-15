
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "../components/ui/card";
import { Package, Info } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

const packagingMaterials = [
  { 
    description: "Medium box",
    dimensions: "18x13x13 inch - Book Box",
    price: "£2.95",
    info: "Perfect for books, records, CDs, and other heavy items"
  },
  {
    description: "Large box",
    dimensions: "18x18x20 inch - Glass/China Linen etc",
    price: "£3.95",
    info: "Ideal for linens, glassware, and larger household items"
  },
  {
    description: "Bitz box",
    dimensions: "",
    price: "£2.10",
    info: "Small box ideal for miscellaneous items and small fragile objects"
  },
  {
    description: "Wardrobe Cartons (Rental)",
    dimensions: "",
    price: "£7.50",
    info: "Specially designed for hanging clothes, keeps garments wrinkle-free"
  },
  {
    description: "Wardrobe Cartons (Cardboard)",
    dimensions: "20\"x18\"x48\"",
    price: "£11.10",
    info: "Cardboard wardrobe boxes for purchase, perfect for moving hanging clothes"
  },
  {
    description: "Mattress cover",
    dimensions: "",
    price: "£3",
    info: "Protective cover to keep mattresses clean and dry during moving"
  },
  {
    description: "Tape (brown)",
    dimensions: "",
    price: "£1.50 per roll",
    info: "Strong adhesive tape for securing boxes"
  },
  {
    description: "Tape (fragile)",
    dimensions: "",
    price: "£1.50 per roll",
    info: "Warning tape to mark delicate items"
  },
  {
    description: "Packing White Paper",
    dimensions: "20 x 30 inch - 5kg",
    price: "£16.25",
    info: "Clean, ink-free paper for wrapping delicate items"
  },
  {
    description: "Bubble wrap",
    dimensions: "750mm x 25meters - Green BIO",
    price: "£16.25",
    info: "Eco-friendly protection for fragile items"
  },
  {
    description: "Black Marker Pen",
    dimensions: "",
    price: "£1.60",
    info: "For labeling boxes and contents"
  },
  {
    description: "Shrink Wrap",
    dimensions: "400mmx300mtr - Medium Duty",
    price: "£9.95",
    info: "Protects furniture and keeps items together"
  }
];

const PackagingMaterial = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Packing Materials",
          "description": "Professional packing materials for home and office moves",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "GBP",
            "offerCount": packagingMaterials.length,
            "lowPrice": "1.50",
            "highPrice": "16.25"
          },
          "brand": {
            "@type": "Brand",
            "name": "Derbyshire Removals"
          }
        })}
      </Script>
      
      <Header />
      <main className="container mx-auto px-4 pt-52 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-[#071059]">Professional Packing Materials</h1>
            <p className="text-lg text-gray-600 mb-4">
              High-quality packing materials to ensure your belongings are protected during the move.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Package className="w-4 h-4 mr-2" />
              <span>All prices subject to VAT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packagingMaterials.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.description}</h3>
                  {item.dimensions && (
                    <p className="text-sm text-gray-600 mb-2">{item.dimensions}</p>
                  )}
                  <p className="text-[#071059] font-bold text-lg mb-2">{item.price}</p>
                  <div className="flex items-start mt-2 text-sm text-gray-600">
                    <Info className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <p>{item.info}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#071059]">Need Help with Packing?</h2>
            <p className="text-gray-600 mb-4">
              We offer professional packing services to ensure your items are properly protected. 
              Our experienced team can handle everything from delicate items to bulky furniture.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#071059] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackagingMaterial;
