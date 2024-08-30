import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
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
  const { toast } = useToast()
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
    toast({
      title: "Thank you for your submission!",
      description: "We appreciate your interest. One of our team members will be in touch with you shortly to discuss your request.",
      duration: 5000,
    })
    form.reset();
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
      </form>
    </Form>
  );
};

const Hero = () => {
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
    <section className="relative bg-cover bg-center py-20 mt-[88px]" style={{ backgroundImage: "url('http://derbyshireremovals.com/wp-content/uploads/2017/11/41.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center relative z-10">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Professional removals in Derbyshire</h1>
          <p className="text-xl mb-6">Handling with care since 1988</p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get Free Quote</h3>
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
