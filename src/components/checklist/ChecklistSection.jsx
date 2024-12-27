import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

const ChecklistSection = ({ title, items }) => {
  return (
    <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-[#071059]">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Checkbox 
              id={`${title.toLowerCase().replace(/\s+/g, '')}-${index}`}
              disabled={true}
            />
            <label 
              htmlFor={`${title.toLowerCase().replace(/\s+/g, '')}-${index}`} 
              className="text-gray-700 leading-normal cursor-pointer"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChecklistSection;