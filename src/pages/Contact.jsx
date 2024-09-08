import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const schema = z.object({
  access_key: z.string().optional(),
  botcheck: z.boolean().optional(),
  page: z.string().optional(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  preferred_callback_date: z.date({ required_error: "Please select a date." }),
  move_date: z.date().optional(),
  address: z.string().min(1, { message: "Address is required." }),
});

const ContactForm = () => {
  const [submissionMessage, setSubmissionMessage] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      access_key: "a76a98d9-1d8e-419f-85b6-34407a6e50a8",
      botcheck: undefined,
      page: "Contact Us",
      name: "",
      email: "",
      phone: "",
      preferred_callback_date: undefined,
      move_date: undefined,
      address: ""
    },
  });

  const onSubmit = async (data, event) => {
    console.log(data);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
    .then(async (response) => {
      let json = await response.json();

      if (json.success) {
        setSubmissionMessage("Thank you for your submission! We appreciate your interest. One of our team members will be in touch with you shortly to discuss your request.");
        setIsSubmitted(true);
      } else {
        setIsSubmitted(false);
      }
    })
    .catch((error) => {
      // setIsSuccess(false);
      // setMessage("Client Error. Please check the console.log for more info");
      console.log(error);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="access_key"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="botcheck"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="checkbox" className="hidden" style={{ display: 'none' }} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="page"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Your Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferred_callback_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Callback Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  {...field}
                  value={field.value ? field.value.toISOString().split('T')[0] : ''}
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="move_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Move Date (if known)</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  {...field}
                  value={field.value ? field.value.toISOString().split('T')[0] : ''}
                  onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : undefined)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Your Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submissionMessage && (
          <p className="text-green-600 text-sm mb-4">{submissionMessage}</p>
        )}
        <Button type="submit" className="w-full" disabled={isSubmitted}>Submit Enquiry</Button>
      </form>
      <p className="text-sm mt-4">
        To help assess the move, we may need to visit your home/office. Alternatively, you can send us your videos via{' '}
        <a href="https://wa.me/447774422561" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          WhatsApp
        </a>
        .
      </p>
    </Form>
  );
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-44">
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
                  <p>Matlock: 01629 584953</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  <p>Mob: 07774422561</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  <p>Email: derbyshireremovals@yahoo.co.uk</p>
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