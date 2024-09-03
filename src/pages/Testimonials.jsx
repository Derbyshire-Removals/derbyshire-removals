import React, { useEffect } from 'react';
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
  },
  {
    name: "Alice Greenwood",
    review: "Extremely happy with Derbyshire Removals ltd. Helpful, careful, friendly, a smooth fast removal to Anglesey. Would highly recommend to friends."
  },
  {
    name: "Robert Blackburn",
    review: "Mike and Alan were extremely helpful and carried out our move carefully and efficiently. First class."
  },
  {
    name: "Sarah Hawthorne",
    review: "Worked hard, non-stop, to get the move done. Very efficient - obviously knew what they were doing."
  },
  {
    name: "Thomas Evergreen",
    review: "This is the third time we have used Derbyshire Removals. A super job and a super team to do business with. Thank you again. Would always recommend them. Happy 30th anniversary!"
  },
  {
    name: "Elizabeth Redwood",
    review: "Great service - nothing too much trouble. I would recommend. Thank you so much for making a stressful move go smoothly."
  },
  {
    name: "Daniel Oakley",
    review: "I found the guys really helpful, efficient and cheerful. That positivity has been a great help in circumstances which haven't been easy. Thank you."
  },
  {
    name: "Victoria Maple",
    review: "I was really impressed by them and their care in taking the furniture to deliver on moving day. Much appreciated."
  },
  {
    name: "Christopher Birch",
    review: "We used this trader to store furniture then deliver from Chesterfield to Ayr. The traders were polite, efficient and prompt and there was no damage. Excellent service!"
  },
  {
    name: "Olivia Willow",
    review: "Very accommodating - we needed them at very short notice and everything was done to facilitate our move. Friendly approachable staff."
  },
  {
    name: "Andrew Sycamore",
    review: "A very professional appraisal of the house contents when quoting, and excellent time in doing the jobs. The staff were very careful with our goods and furniture and particularly pleasant to have around. They all worked very hard on a particularly hot day."
  },
  {
    name: "Sophia Elm",
    review: "Excellent service. They just got on with the job, emptying our house quickly and professionally and fitted our new house up in the same manner. Very impressed, will use again if we ever move house again!"
  },
  {
    name: "Matthew Ash",
    review: "Both guys worked like troopers, never complained about the numerous flights of stairs they had to deal with. Really nice guys and wouldn't hesitate to recommend or use again."
  },
  {
    name: "Isabella Cedar",
    review: "Excellent professional service. Arrived on time and handled everything with care. This is the second time we have used Derbyshire Removals - would definitely recommend them."
  },
  {
    name: "Penelope Fawcett",
    review: "Two day move to a penthouse with 25 steps up to it. Both Mike and colleague were exceptional. So good, careful and cheerful that we tipped them well!"
  },
  {
    name: "Gregory Lakeside",
    review: "Derbyshire Removals did an outstanding job moving us to the lakes. I cannot say enough how much easier they made it for us - well done!"
  },
  {
    name: "Amelia Thornton",
    review: "Very professional and helpful people. Thank you for making a daunting task easy."
  },
  {
    name: "Benjamin Archer",
    review: "Excellent service, very satisfied & would definitely recommend to anyone."
  },
  {
    name: "Harriet Sinclair",
    review: "Mike and his team were extremely polite & professional & fitted us in at late notice. Fantastic service."
  },
  {
    name: "Frederick Weston",
    review: "Excellent workers who got on with their job, were respectful of my furniture and were pleasant and helpful at all times."
  },
  {
    name: "Beatrice Holloway",
    review: "Very good and professional service. Would use again."
  },
  {
    name: "Rupert Grayson",
    review: "Excellent job done. The team worked very hard and were extremely efficient, friendly & nothing was too much trouble."
  },
  {
    name: "Imogen Fairfax",
    review: "Very punctual, very polite and helpful. Very careful with the furniture."
  },
  {
    name: "Nathaniel Blackwood",
    review: "The removal men were very friendly and provided an excellent service. Thank you."
  },
  {
    name: "Cordelia Ashworth",
    review: "A very professional service carried out by two very pleasant gentlemen."
  },
  {
    name: "Jasper Whitfield",
    review: "Arrived promptly! Worked through packing contents of our large house, friendly, very efficient, nothing too much trouble for them. We would recommend Derbyshire removals."
  },
  {
    name: "Evangeline Sutton",
    review: "Outstanding: took the time to understand specific needs of the removal, careful and experienced move, helpful guidance and friendly at all times. Strong recommendation."
  }
];

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-48">
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