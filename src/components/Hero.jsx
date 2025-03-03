import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import ContactFormFields from './ContactFormFields';

const schema = z.object({
  access_key: z.string().optional(),
  botcheck: z.boolean().optional(),
  page: z.string().optional(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  preferred_callback_time: z.string({ required_error: "Please select a preferred time." }),
  address: z.string().min(1, { message: "Address is required." }),
});

const ContactForm = () => {
  const [submissionMessage, setSubmissionMessage] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      access_key: "0d86da93-9d03-48c0-a530-5992b2e26a1b",
      botcheck: undefined,
      page: "Homepage",
      name: "",
      email: "",
      phone: "",
      preferred_callback_time: "anytime",
      address: ""
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });

      const json = await response.json();

      if (json.success) {
        setSubmissionMessage("Thank you for your submission! We appreciate your interest. One of our team members will be in touch with you shortly to discuss your request.");
        setIsSubmitted(true);
        setIsError(false);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setIsError(true);
      setSubmissionMessage("An error has occurred submitting the form. Please contact us directly by calling us or emailing us at info@derbyshireremovals.com");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <ContactFormFields form={form} />
        {submissionMessage && (
          <p className={`text-sm mb-4 ${isError ? 'text-red-600' : 'text-green-600'}`}>{submissionMessage}</p>
        )}
        <Button type="submit" className="w-full" disabled={isSubmitted}>Submit Enquiry</Button>
      </form>
      <p className="text-sm mt-4">
        To help assess the move, we may need to visit your home/office. Alternatively, you can send us your videos via{' '}
        <a href="https://wa.me/447425557000?text=Hi!%20I'm%20interested%20in%20your%20removal%20services.%20Can%20you%20help%20me%20with%20a%20move?%20Here%20are%20some%20details:%0A-%20Pickup%20location:%20%5BEnter%20here%5D%0A-%20Delivery%20location:%20%5BEnter%20here%5D%0A-%20Preferred%20date:%20%5BEnter%20here%5D%0A-%20Additional%20information:%20%5BEnter%20here%5D%0ALooking%20forward%20to%20your%20reply!" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          WhatsApp
        </a>
        .
      </p>
    </Form>
  );
};

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-20 mt-[88px]" 
      style={{ backgroundImage: "url('images/van.jpg')" }}
      role="banner"
      aria-label="Professional removals in Derbyshire banner"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center relative z-10">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Professional removals in Derbyshire</h1>
          <p className="text-xl mb-6">Handling with care since 1988</p>
          <div className="flex justify-center items-center mt-8">
            <a href="https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=56236">
              <img
                src="images/derbyshire-trusted-trader-logo.gif" 
                alt="Derbyshire County Council Trusted Trader Certification Badge" 
                className="h-24 w-auto"
              />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div 
            className="bg-white p-6 rounded-lg shadow-md"
            role="region"
            aria-label="Get free quote form"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Free Quote</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
