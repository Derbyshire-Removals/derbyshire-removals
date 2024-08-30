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
  address: z.string().optional(),
});

const ContactForm = ({ fields, buttonText }) => {
  const [submissionMessage, setSubmissionMessage] = React.useState('');
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

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
    setSubmissionMessage("Thank you for contacting us! We've received your message and appreciate your interest. A member of our team will reach out to you shortly to address your inquiry.");
    form.reset();
    // Clear the message after 5 seconds
    setTimeout(() => setSubmissionMessage(''), 5000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    <Textarea {...formField} placeholder={field.placeholder} className="text-black" />
                  ) : field.type === 'date' ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formField.value && "text-muted-foreground"
                          )}
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
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        />
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Input {...formField} type={field.type} placeholder={field.placeholder} className="text-black" />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full">{buttonText}</Button>
        {submissionMessage && (
          <p className="mt-4 text-green-600 text-sm">{submissionMessage}</p>
        )}
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
    { name: 'address', type: 'textarea', label: 'Address', placeholder: 'Your Address' },
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
