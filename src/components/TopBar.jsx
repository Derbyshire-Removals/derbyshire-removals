
import React from 'react';
import { Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#071059] text-white py-1">
      <div className="container mx-auto px-4 flex justify-end items-center text-sm">
        <div className="flex items-center space-x-4">
          <a href="tel:01332314312" className="flex items-center hover:text-gray-300">
            <Phone size={14} className="mr-1" />
            <span>Derby: 01332 314312</span>
          </a>
          <a href="tel:01246922192" className="flex items-center hover:text-gray-300">
            <Phone size={14} className="mr-1" />
            <span>Chesterfield: 01246 922192</span>
          </a>
          <a 
            href="tel:03335677001" 
            className="flex items-center hover:text-gray-300 bg-[#E5DEFF]/20 px-2 py-0.5 rounded border border-[#E5DEFF]/30"
          >
            <Phone size={14} className="mr-1" />
            <span>National: 0333 567 7001</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
