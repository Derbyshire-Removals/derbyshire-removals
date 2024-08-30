import React from 'react';

const AreasCovered = () => {
  const regions = [
    {
      name: "East Midlands",
      areas: ["Derby", "Nottingham", "Leicester", "Lincoln"]
    },
    {
      name: "West Midlands",
      areas: ["Birmingham", "Coventry", "Wolverhampton", "Stoke-on-Trent"]
    }
  ];

  return (
    <section id="areas" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Areas We Cover</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{region.name}</h3>
              <ul className="list-disc list-inside">
                {region.areas.map((area, areaIndex) => (
                  <li key={areaIndex}>{area}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-lg">
          While we specialize in the East and West Midlands, our services extend nationwide. 
          Our extensive network allows us to provide professional removal services across the entire UK. 
          Whether you're moving within the Midlands or to any other part of the country, we've got you covered. 
          Contact us for more information about our coverage in your specific area.
        </p>
      </div>
    </section>
  );
};

export default AreasCovered;
