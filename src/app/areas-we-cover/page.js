
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { generateSchemaScript, getOrganizationSchema } from '../lib/schema';

const AreasWeCover = () => {
  const locations = [
    {
      name: "Derby",
      description: "Our headquarters, providing extensive removal services across the city and surrounding areas.",
      link: "/locations/derby"
    },
    {
      name: "Matlock",
      description: "Specialised removal services in Matlock, accommodating the unique terrain and properties.",
      link: "/locations/matlock"
    },
    {
      name: "Chesterfield",
      description: "Full-service house and office removals throughout Chesterfield and neighboring towns.",
      link: "/locations/chesterfield"
    },
    {
      name: "Buxton",
      description: "Professional removal solutions tailored to Buxton's residential and commercial needs.",
      link: "/locations/buxton"
    },
    {
      name: "Alfreton",
      description: "Local expertise for seamless relocations in Alfreton and the surrounding area.",
      link: "/locations/alfreton"
    },
    {
      name: "Mansfield",
      description: "Comprehensive moving services covering all aspects of Mansfield relocations.",
      link: "/locations/mansfield"
    },
    {
      name: "Loughborough",
      description: "Reliable and efficient removal services for Loughborough residents and businesses.",
      link: "/locations/loughborough"
    }
  ];

  const areasSchema = generateSchemaScript([
    getOrganizationSchema(),
    {
      "@type": "WebPage",
      "name": "Areas We Cover | Derbyshire Removals",
      "description": "Explore the areas we service including Derby, Matlock, Chesterfield, Buxton and throughout the East and West Midlands.",
      "url": "https://derbyshireremovals.com/areas-we-cover"
    }
  ]);

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: areasSchema }}
      />
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <main className="container mx-auto px-4 pt-52 pb-16">
          <h1 className="text-4xl font-bold mb-8 text-[#071059]">Areas We Cover</h1>
          
          <p className="text-lg mb-8">
            Derbyshire Removals provides professional moving services across the East and West Midlands. 
            With local expertise in key locations, we ensure a smooth and efficient moving experience
            wherever you're relocating to or from.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {locations.map((location, index) => (
              <Link href={location.link} key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-[#071059] mr-2" />
                    <h2 className="text-xl font-semibold">{location.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="text-[#071059] font-medium">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Additional Coverage Areas</h2>
            
            <p className="mb-6">
              Beyond our primary service locations, we also offer removal services to many other areas including:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Nottingham", "Leicester", "Sheffield", "Birmingham", 
                "Stoke-on-Trent", "Stafford", "Wolverhampton", "Coventry",
                "Walsall", "Telford", "Ashbourne", "Belper",
                "Ripley", "Long Eaton", "Ilkeston", "Swadlincote"
              ].map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#071059]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="mb-4">
                Don't see your location listed? We likely still cover it!
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Contact Us to Confirm
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </section>
  );
};

export default AreasWeCover;
