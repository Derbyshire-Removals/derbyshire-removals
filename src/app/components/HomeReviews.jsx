import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: "James Thompson",
    review: "Great guys, great service. Gave support at a very problematic time.",
  },
  {
    name: "Emily Parker",
    review: "The firm did everything they said they would do on the phone before coming with no stress at all. Excellent job.",
  },
  {
    name: "Oliver Wright",
    review: "A firm that lives up to its reputation as being a truly Trusted Trader. Professional, friendly, genuinely took the pressure off a very emotional move.",
  }
];

const HomeReviews = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              itemScope 
              itemType="https://schema.org/Review"
            >
              <div 
                itemProp="itemReviewed" 
                itemScope 
                itemType="https://schema.org/MovingCompany"
              >
                <meta itemProp="name" content="Derbyshire Removals" />
                <meta itemProp="address" content="48 Farmhouse Road, Derby, DE24 3DB" />
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic" itemProp="reviewBody">"{review.review}"</p>
              <div 
                itemProp="author" 
                itemScope 
                itemType="https://schema.org/Person"
              >
                <p className="font-semibold text-right" itemProp="name">{review.name}</p>
              </div>
              <meta itemProp="datePublished" content="2024-01-01" />
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600 inline-block">
            Check out our reviews on: {' '}
            <a 
              href="https://www.google.com/search?q=derbyshrie+removals#lrd=0x48798e96bb172501:0x823e3a1119d6cc3c,1,,,," 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary-dark underline inline-flex items-center gap-1"
            >
              Google <ExternalLink className="h-3 w-3" />
            </a>{' '}and{' '}
            <a 
              href="https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary-dark underline inline-flex items-center gap-1"
            >
              Trusted Trader <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;