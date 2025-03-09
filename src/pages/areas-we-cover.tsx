
import React, { useEffect } from 'react';
import Head from 'next/head';
import { MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import CookieConsent from '../components/CookieConsent';

const AreasWeCover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Areas We Cover page mounted');
  }, []);

  const regions = [
    {
      name: "East Midlands",
      areas: [
        { shire: "Derbyshire", towns: ["Derby", "Chesterfield", "Swadlincote", "Ilkeston", "Long Eaton", "Buxton", "Glossop", "Belper", "Ripley", "Ashbourne", "Dronfield", "Matlock", "Staveley", "Heanor", "Clay Cross", "Bolsover", "Shirebrook", "Bakewell", "Wirksworth", "New Mills"] },
        { shire: "Leicestershire", towns: ["Leicester", "Loughborough", "Hinckley", "Melton Mowbray", "Coalville", "Wigston", "Market Harborough", "Oadby", "Ashby-de-la-Zouch", "Earl Shilton", "Shepshed", "Blaby", "Syston", "Broughton Astley", "Lutterworth", "Enderby", "Mountsorrel", "Barrow upon Soar", "Sileby", "Kibworth Harcourt"] },
        { shire: "Nottinghamshire", towns: ["Nottingham", "Mansfield", "Newark-on-Trent", "Worksop", "Sutton-in-Ashfield", "Kirkby-in-Ashfield", "Arnold", "Carlton", "Retford", "Beeston", "West Bridgford", "Hucknall", "Eastwood", "Stapleford", "Kimberley", "Ollerton", "Bingham", "Ruddington", "Cotgrave", "Southwell"] }
      ]
    },
    {
      name: "West Midlands",
      areas: [
        { shire: "Staffordshire", towns: ["Stoke-on-Trent", "Stafford", "Burton upon Trent", "Lichfield", "Newcastle-under-Lyme", "Cannock", "Tamworth", "Leek", "Burntwood", "Uttoxeter", "Rugeley", "Kidsgrove", "Stone", "Hednesford", "Biddulph", "Cheadle", "Penkridge", "Wombourne", "Codsall", "Eccleshall"] },
        { shire: "West Midlands", towns: ["Birmingham", "Coventry", "Wolverhampton", "Solihull", "Walsall", "Dudley", "West Bromwich", "Sutton Coldfield", "Stourbridge", "Halesowen", "Aldridge", "Tipton", "Wednesbury", "Brierley Hill", "Brownhills", "Rowley Regis", "Smethwick", "Bilston", "Willenhall", "Bloxwich"] },
        { shire: "Warwickshire", towns: ["Warwick", "Nuneaton", "Rugby", "Leamington Spa", "Bedworth", "Stratford-upon-Avon", "Atherstone", "Kenilworth", "Polesworth", "Alcester", "Coleshill", "Southam", "Bulkington", "Shipston-on-Stour", "Henley-in-Arden", "Studley", "Bidford-on-Avon", "Wellesbourne", "Kingsbury", "Whitnash"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Areas We Cover | Derbyshire Removals - Professional Moving Services</title>
        <meta name="description" content="Comprehensive removal services across East & West Midlands including Derby, Leicester, Nottingham, Birmingham, and surrounding areas. Local expertise with nationwide coverage." />
        <meta name="keywords" content="removal services east midlands, west midlands removals, derby house moves, leicester removals, nottingham movers, birmingham relocation services" />
        <link rel="canonical" href="https://derbyshireremovals.com/areas-we-cover" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-44">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-6">Areas We Cover</h1>
          <p className="text-lg text-gray-700 mb-8">
            With over 35 years of experience, Derbyshire Removals provides comprehensive moving services across the East and West Midlands, 
            with additional coverage extending nationwide. Our local expertise and knowledge ensure a smooth and efficient moving experience.
          </p>
        </section>

        {regions.map((region, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6 flex items-center">
              <MapPin className="mr-2" />
              {region.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {region.areas.map((area, areaIndex) => (
                <div key={areaIndex} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{area.shire}</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {area.towns.map((town, townIndex) => (
                      <li key={townIndex} className="text-gray-600">{town}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-white p-8 rounded-lg shadow-md mt-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Beyond Our Core Areas</h2>
          <p className="text-gray-700 mb-4">
            While we specialize in the East and West Midlands, our services extend nationwide. Whether you're moving within our core areas
            or planning a long-distance move, we have the expertise and resources to help you relocate smoothly and efficiently.
          </p>
          <p className="text-gray-700">
            Contact us today to discuss your specific requirements and learn how we can assist with your move, regardless of location.
          </p>
        </section>
      </main>

      <GetInTouch />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default AreasWeCover;
