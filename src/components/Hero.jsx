import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Professional Home Removals in Yorkshire</h1>
          <p className="text-xl mb-8">Stress-free moving services for your peace of mind</p>
          <Button variant="secondary" size="lg">Get a Free Quote</Button>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <Input type="text" placeholder="Name" className="mb-4" />
            <Input type="email" placeholder="Email" className="mb-4" />
            <Input type="tel" placeholder="Phone" className="mb-4" />
            <Textarea placeholder="Message" className="mb-4" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;