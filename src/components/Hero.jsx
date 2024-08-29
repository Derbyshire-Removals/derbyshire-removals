import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ContactForm = ({ fields, buttonText }) => (
  <form className="space-y-4">
    {fields.map((field, index) => (
      field.type === 'textarea' ? (
        <Textarea key={index} placeholder={field.placeholder} />
      ) : (
        <Input key={index} type={field.type} placeholder={field.placeholder} />
      )
    ))}
    <Button type="submit" className="w-full">{buttonText}</Button>
  </form>
);

const Hero = () => {
  const callbackFields = [
    { type: 'text', placeholder: 'Name' },
    { type: 'email', placeholder: 'Email' },
    { type: 'tel', placeholder: 'Phone' },
    { type: 'date', placeholder: 'Preferred Callback Date' },
  ];

  const visitFields = [
    { type: 'text', placeholder: 'Name' },
    { type: 'email', placeholder: 'Email' },
    { type: 'tel', placeholder: 'Phone' },
    { type: 'date', placeholder: 'Preferred Visit Date' },
    { type: 'textarea', placeholder: 'Address' },
  ];

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Professional Home Removals in Yorkshire</h1>
          <p className="text-xl mb-8">Stress-free moving services for your peace of mind</p>
          <Button variant="secondary" size="lg">Get a Free Quote</Button>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <Tabs defaultValue="callback" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="callback">Request Callback</TabsTrigger>
                <TabsTrigger value="visit">Home Visit Request</TabsTrigger>
              </TabsList>
              <TabsContent value="callback">
                <ContactForm fields={callbackFields} buttonText="Request Callback" />
              </TabsContent>
              <TabsContent value="visit">
                <ContactForm fields={visitFields} buttonText="Request Home Visit" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
