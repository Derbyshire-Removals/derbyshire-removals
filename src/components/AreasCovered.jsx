import React from 'react';

const AreasCovered = () => {
  const regions = [
    {
      name: "East Midlands",
      areas: [
        { shire: "Derbyshire", towns: ["Derby", "Chesterfield", "Swadlincote", "Ilkeston"] },
        { shire: "Leicestershire", towns: ["Leicester", "Loughborough", "Hinckley", "Melton Mowbray"] },
        { shire: "Lincolnshire", towns: ["Lincoln", "Boston", "Grantham", "Skegness"] },
        { shire: "Northamptonshire", towns: ["Northampton", "Kettering", "Corby", "Wellingborough"] },
        { shire: "Nottinghamshire", towns: ["Nottingham", "Mansfield", "Newark-on-Trent", "Worksop"] },
        { shire: "Rutland", towns: ["Oakham", "Uppingham"] }
      ]
    },
    {
      name: "West Midlands",
      areas: [
        { shire: "Herefordshire", towns: ["Hereford", "Leominster", "Ross-on-Wye", "Ledbury"] },
        { shire: "Shropshire", towns: ["Shrewsbury", "Telford", "Oswestry", "Bridgnorth"] },
        { shire: "Staffordshire", towns: ["Stoke-on-Trent", "Stafford", "Burton upon Trent", "Lichfield"] },
        { shire: "Warwickshire", towns: ["Warwick", "Nuneaton", "Rugby", "Leamington Spa"] },
        { shire: "West Midlands", towns: ["Birmingham", "Coventry", "Wolverhampton", "Solihull"] },
        { shire: "Worcestershire", towns: ["Worcester", "Redditch", "Bromsgrove", "Kidderminster"] }
      ]
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
              {region.areas.map((area, areaIndex) => (
                <div key={areaIndex} className="mb-4">
                  <h4 className="text-lg font-medium mb-2">{area.shire}</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {area.towns.map((town, townIndex) => (
                      <li key={townIndex} className="text-sm">{town}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-lg">
          While we specialize in the East and West Midlands, covering all the shires and major towns in these regions, 
          our services extend nationwide. Our extensive network allows us to provide professional 
          removal services across the entire UK. Whether you're moving within the Midlands or to any 
          other part of the country, we've got you covered. Contact us for more information about 
          our coverage in your specific area.
        </p>
      </div>
    </section>
  );
};

export default AreasCovered;
