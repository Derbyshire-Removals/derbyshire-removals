import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <article 
      className="bg-white p-6 rounded-lg shadow-md"
      itemScope 
      itemType="https://schema.org/Review"
    >
      <p className="text-gray-600 mb-4" itemProp="reviewBody">"{testimonial.review}"</p>
      <p className="font-semibold text-right" itemProp="author">{testimonial.name}</p>
    </article>
  );
};

export default TestimonialCard;