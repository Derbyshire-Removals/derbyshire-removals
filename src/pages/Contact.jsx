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
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  preferred_callback_date: z.date({ required_error: "Please select a date." }),
  move_date: z.date({ required_error: "Please select a move date." }),
  address: z.string().min(1, { message: "Address is required." }),
});

const ContactForm = () => {
  const [submissionMessage, setSubmissionMessage] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferred_callback_date: undefined,
      move_date: undefined,
      address: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setSubmissionMessage("Thank you for contacting us! We've received your message and appreciate your interest. A member of our team will reach out to you shortly to address your inquiry.");
    setIsSubmitted(true);
  };

  const formFields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your Phone Number' },
    { name: 'preferred_callback_date', label: 'Preferred Callback Date', type: 'date' },
    { name: 'move_date', label: 'Move Date', type: 'date' },
    { name: 'address', label: 'Address', type: 'text', placeholder: 'Your Address' },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <input type="hidden" name="access_key" value="a76a98d9-1d8e-419f-85b6-34407a6e50a8" />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...formField}
                    value={field.type === 'date' && formField.value ? formField.value.toISOString().split('T')[0] : formField.value}
                    onChange={(e) => field.type === 'date' ? formField.onChange(new Date(e.target.value)) : formField.onChange(e)}
                    min={field.type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {submissionMessage && (
          <p className="text-green-600 text-sm mb-4">{submissionMessage}</p>
        )}
        <Button type="submit" className="w-full" disabled={isSubmitted}>Send Message</Button>
      </form>
      <p className="text-sm mt-4">
        To help plan the move, we may need to visit your home. Alternatively, you can send us your videos via{' '}
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