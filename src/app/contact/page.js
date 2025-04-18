"use client"

import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button"
import { Form } from "../components/ui/form"
import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram } from "lucide-react"
import ContactFormFields from '../components/ContactFormFields';
import { getContactPageSchema } from '../lib/schema';

const schema = z.object({
  access_key: z.string().optional(),
  botcheck: z.boolean().optional(),
  page: z.string().optional(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  preferred_callback_time: z.string({ required_error: "Please select a preferred time." }),
  moving_from: z.string().min(1, { message: "Moving From address is required." }),
  moving_to: z.string().optional(),
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
      page: "Contact Us",
      name: "",
      email: "",
      phone: "",
      preferred_callback_time: "anytime",
      moving_from: "",
      moving_to: ""
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
        To help assess the move, we may need to visit your house/office. Alternatively, you can send us your videos via{' '}
        <a href="https://wa.me/447425557000?text=Hi!%20I'm%20interested%20in%20your%20removal%20services.%20Can%20you%20help%20me%20with%20a%20move?%20Here%20are%20some%20details:%0A-%20Pickup%20location:%20%5BEnter%20here%5D%0A-%20Delivery%20location:%20%5BEnter%20here%5D%0A-%20Preferred%20date:%20%5BEnter%20here%5D%0A-%20Additional%20information:%20%5BEnter%20here%5D%0ALooking%20forward%20to%20your%20reply!" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          WhatsApp
        </a>
        .
      </p>
    </Form>
  );
};

const Contact = () => {
  const contactPageSchema = getContactPageSchema();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div dangerouslySetInnerHTML={{ __html: `
        <script type="application/ld+json">
          ${JSON.stringify(contactPageSchema)}
        </script>
      `}} />
      <Header />
      <main className="container mx-auto px-4 py-8 pt-52">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  <p><strong>National: 0333 567 7001</strong></p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  <p>Derby: 01332 314312</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  <p>Chesterfield: 01246 922192</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  <p>Mob: 07425557000</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  <p>Email: info@derbyshireremovals.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  <p>Address: 48 Farmhouse Road, Derby, DE24 3DB</p>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="mr-2" size={20} />
                  <a href="https://wa.me/447425557000?text=Hi!%20I'm%20interested%20in%20your%20removal%20services.%20Can%20you%20help%20me%20with%20a%20move?%20Here%20are%20some%20details:%0A-%20Pickup%20location:%20%5BEnter%20here%5D%0A-%20Delivery%20location:%20%5BEnter%20here%5D%0A-%20Preferred%20date:%20%5BEnter%20here%5D%0A-%20Additional%20information:%20%5BEnter%20here%5D%0ALooking%20forward%20to%20your%20reply!" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    WhatsApp Us
                  </a>
                </div>
                <div className="flex items-center">
                  <Facebook className="mr-2" size={20} />
                  <a href="https://www.facebook.com/profile.php?id=61572796415223" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Facebook
                  </a>
                </div>
                <div className="flex items-center">
                  <Instagram className="mr-2" size={20} />
                  <a href="https://www.instagram.com/derbyshireremovals/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
