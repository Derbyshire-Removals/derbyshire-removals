import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

const ContactForm = ({ fields, buttonText }) => {
  const [date, setDate] = React.useState()

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
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span className="text-black">{field.placeholder}</span>}
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
          <h1 className="text-4xl font-bold mb-4">Professional Removals in Derbyshire</h1>
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
