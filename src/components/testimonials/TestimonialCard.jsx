import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <article 
      className="bg-white p-6 rounded-lg shadow-md"
      itemScope 
      itemType="https://schema.org/Review"
    >
      <div className="flex mb-3">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index}
            className="h-5 w-5 text-yellow-400 fill-current"
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4" itemProp="reviewBody">"{testimonial.review}"</p>
      <p className="font-semibold text-right" itemProp="author">{testimonial.name}</p>
    </article>
  );
};

export default TestimonialCard;