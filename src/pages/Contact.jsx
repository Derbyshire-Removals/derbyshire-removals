import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Phone, Mail } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  date: z.date({ required_error: "Please select a date." }),
  address: z.string().min(1, { message: "Address is required." }),
});

const ContactForm = ({ fields, buttonText }) => {
  const [submissionMessage, setSubmissionMessage] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: undefined,
      address: "",
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
        body: JSON.stringify({
          access_key: "a76a98d9-1d8e-419f-85b6-34407a6e50a8",
          ...data,
          date: data.date ? format(data.date, "yyyy-MM-dd") : undefined,
        }),
      });
      
      if (response.ok) {
        setSubmissionMessage("Thank you for contacting us! We've received your message and appreciate your interest. A member of our team will reach out to you shortly to address your inquiry.");
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionMessage("There was an error submitting your form. Please try again later.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <input type="hidden" name="access_key" value="a76a98d9-1d8e-419f-85b6-34407a6e50a8" />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === 'textarea' ? (
                    <Textarea {...formField} placeholder={field.placeholder} className="text-black" readOnly={isSubmitted} />
                  ) : field.type === 'date' ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formField.value && "text-muted-foreground"
                          )}
                          disabled={isSubmitted}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                          {formField.value ? (
                            <span className="text-black">{format(formField.value, "PPP")}</span>
                          ) : (
                            <span className="text-gray-500">{field.placeholder}</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formField.value}
                          onSelect={formField.onChange}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0)) || isSubmitted}
                        />
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Input {...formField} type={field.type} placeholder={field.placeholder} className="text-black" readOnly={isSubmitted} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {submissionMessage && (
          <p className="text-green-600 text-sm mb-4">{submissionMessage}</p>
        )}
        <Button type="submit" className="w-full" disabled={isSubmitted}>{buttonText}</Button>
      </form>
    </Form>
  );
};

const Contact = () => {
  const callbackFields = [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Your Name' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Your Email' },
    { name: 'phone', type: 'tel', label: 'Phone', placeholder: 'Your Phone Number' },
    { name: 'date', type: 'date', label: 'Preferred Callback Date', placeholder: 'Select Date' },
  ];

  const visitFields = [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Your Name' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Your Email' },
    { name: 'phone', type: 'tel', label: 'Phone', placeholder: 'Your Phone Number' },
    { name: 'date', type: 'date', label: 'Preferred Visit Date', placeholder: 'Select Date' },
    { name: 'address', type: 'textarea', label: 'Address', placeholder: 'Your Address (required)' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
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
