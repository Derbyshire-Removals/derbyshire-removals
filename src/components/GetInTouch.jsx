import React from 'react';
import { Button } from "@/components/ui/button"

const GetInTouch = () => {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Move?</h2>
        <p className="text-xl mb-8">Contact us today for a free, no-obligation quote</p>
        <Button variant="secondary" size="lg">Get in Touch</Button>
      </div>
    </section>
  );
};

export default GetInTouch;