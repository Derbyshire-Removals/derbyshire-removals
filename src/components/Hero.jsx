import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
    setSubmissionMessage("Thank you for your submission! We appreciate your interest. One of our team members will be in touch with you shortly to discuss your request.");
    setIsSubmitted(true);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <input type="hidden" name="access_key" value="a76a98d9-1d8e-419f-85b6-34407a6e50a8" />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
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
              <FormLabel>Move Date</FormLabel>
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
        <Button type="submit" className="w-full" disabled={isSubmitted}>Get Free Quote</Button>
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

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center py-20 mt-[88px]" style={{ backgroundImage: "url('images/van.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center relative z-10">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Professional removals in Derbyshire</h1>
          <p className="text-xl mb-6">Handling with care since 1988</p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get Free Quote</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;