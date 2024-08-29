import React from 'react';

const AreasCovered = () => {
  const areas = [
    "Leeds", "York", "Sheffield", "Bradford", "Huddersfield", "Wakefield",
    "Halifax", "Harrogate", "Doncaster", "Rotherham", "Barnsley", "Scarborough"
  ];

  return (
    <section id="areas" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Areas We Cover</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded text-center">
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasCovered;