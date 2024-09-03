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
  { description: "Medium/short (book box)", dimensions: "18x13x13        BOOK BOX", price: "£3.30ea" },
  { description: "Large box", dimensions: "18x18x20        GLASS/CHINA LINEN ETC", price: "£3.80ea" },
  { description: "Extra large box", dimensions: "18x18x30", price: "£4.80" },
  { description: "Linen box", dimensions: "18x36x10        LINEN CLOTHES ETC", price: "£4.80" },
  { description: "Cd/dvd box", dimensions: "", price: "£3.20" },
  { description: "Wine box", dimensions: "", price: "£4.45" },
  { description: "Movers Pack", dimensions: "10 x lg box,10 x sm box,10 metres bubble wrap,2.5 kg paper,5 x blue bags,1 x cd/dvd box,1 x blitz box,2 x tape,1 x fragile tape,1x marker pen,2 x seat covers,1 x sofa cover,1 x 6ft mattress cover, 1 x re usable bag.", price: "£85.00" },
  { description: "Wardrobe Cartons", dimensions: "", price: "£8.99" },
  { description: "(Rental)", dimensions: "", price: "£5.00" },
  { description: "Tape (brown)", dimensions: "", price: "£2" },
  { description: "Tape (fragile)", dimensions: "", price: "£2" },
  { description: "Tape gun", dimensions: "", price: "£6.00" },
  { description: "Paper Ream", dimensions: "", price: "£13.50" },
  { description: "Tissue Paper per ream", dimensions: "", price: "£9.50" },
  { description: "Bubble wrap", dimensions: "750mmx25mtrs   ,     also available 100/200 metre rolls", price: "£15.45" },
  { description: "Cushion Wrap per metre", dimensions: "", price: "£2.50" },
  { description: "Webbing per roll", dimensions: "", price: "£10.00" },
  { description: "Blankets", dimensions: "", price: "£4.00" },
  { description: "Sofa Cover", dimensions: "", price: "£3.50" },
  { description: "Chair Cover x2", dimensions: "", price: "£3.50" },
  { description: "king size mattress cover", dimensions: "Plastic", price: "£4.95" },
  { description: "Double mattress cover", dimensions: "Plastic", price: "£4.95" },
  { description: "Single mattress cover", dimensions: "Plastic", price: "£3.95" },
];

const PackagingMaterial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-48">
        <h1 className="text-3xl font-bold mb-6">Packaging Material</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Dimensions</TableHead>
              <TableHead>Price</TableHead>
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