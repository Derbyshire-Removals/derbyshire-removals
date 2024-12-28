import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <article 
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
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index}
            className="h-5 w-5 text-yellow-400 fill-current"
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4" itemProp="reviewBody">"{testimonial.review}"</p>
      <div 
        itemProp="author" 
        itemScope 
        itemType="https://schema.org/Person"
      >
        <p className="font-semibold text-right" itemProp="name">{testimonial.name}</p>
      </div>
      <meta itemProp="datePublished" content="2024-01-01" />
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content="5" />
        <meta itemProp="bestRating" content="5" />
      </div>
    </article>
  );
};

export default TestimonialCard;