import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const testimonials = [
  {
    name: "James Thompson",
    review: "Great guys, great service. Gave support at a very problematic time."
  },
  {
    name: "Emily Parker",
    review: "The firm did everything they said they would do on the phone before coming with no stress at all. Excellent job."
  },
  {
    name: "Oliver Wright",
    review: "A firm that lives up to its reputation as being a truly Trusted Trader. Professional, friendly, genuinely took the pressure off a very emotional move."
  },
  {
    name: "Sophie Bennett",
    review: "Very prompt, professional service. Care taken with items transported from storage. Very polite and courteous throughout process."
  },
  {
    name: "William Turner",
    review: "Considerate, efficient, careful. Definitely recommend."
  },
  {
    name: "Charlotte Davies",
    review: "You have been fabulous. Very courteous and extremely professional, wouldn't hesitate to recommend your services."
  },
  {
    name: "George Harrison",
    review: "Excellent professional service - polite. Superb customer service."
  },
  {
    name: "Emma Woodhouse",
    review: "This is the 2nd time we have used Derbyshire Removals. Brilliant both times."
  },
  {
    name: "Henry Fitzwilliam",
    review: "On time and very professional."
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
              <p className="font-semibold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
