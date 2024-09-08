import React from 'react';
import { Link } from 'react-router-dom';

const AreasCovered = () => {
  const regions = [
    {
      name: "East Midlands",
      shires: ["Derbyshire", "Leicestershire", "Lincolnshire", "Northamptonshire", "Nottinghamshire", "Rutland"]
    },
    {
      name: "West Midlands",
      shires: ["Herefordshire", "Shropshire", "Staffordshire", "Warwickshire", "West Midlands", "Worcestershire"]
    }
  ];

  return (
    <section id="areas" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Areas We Cover</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{region.name}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {region.shires.map((shire, shireIndex) => (
                  <li key={shireIndex} className="text-lg">{shire}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-lg">
          While we specialize in the East and West Midlands, our services extend nationwide. 
          Our extensive network allows us to provide professional removal services across the entire UK. 
          Whether you're moving within the Midlands or to any other part of the country, we've got you covered. 
          For a detailed list of towns we serve, please visit our  <Link to="/areas-we-cover" className="text-blue-600 hover:underline">areas we cover</Link> page.
          Contact us for more information about our coverage in your specific area.
        </p>
      </div>
    </section>
  );
};

export default AreasCovered;
