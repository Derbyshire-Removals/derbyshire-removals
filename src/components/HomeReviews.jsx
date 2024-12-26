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
              <div className="flex mb-3">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic" itemProp="reviewBody">"{review.review}"</p>
              <p className="font-semibold text-right" itemProp="author">{review.name}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-8 space-y-2">
          <p className="text-gray-600">Check out our reviews on:</p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.google.com/search?q=derbyshrie+removals#lrd=0x48798e96bb172501:0x823e3a1119d6cc3c,1,,,," 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Google <ExternalLink className="h-3 w-3" />
            </a>
            <a 
              href="https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Trusted Trader <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;