import React, { useState } from 'react';
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

const ContactForm = ({ fields, buttonText }) => {
  const [date, setDate] = useState()

  return (
    <form className="space-y-4">
      {fields.map((field, index) => {
        if (field.type === 'textarea') {
          return <Textarea key={index} placeholder={field.placeholder} className="text-black" />
        } else if (field.type === 'date') {
          return (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                  {date ? (
                    <span className="text-black">{format(date, "PPP")}</span>
                  ) : (
                    <span className="text-gray-500">{field.placeholder}</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
              </PopoverContent>
            </Popover>
          )
        } else {
          return <Input key={index} type={field.type} placeholder={field.placeholder} className="text-black" />
        }
      })}
      <Button type="submit" className="w-full">{buttonText}</Button>
    </form>
  )
};

const Contact = () => {
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
