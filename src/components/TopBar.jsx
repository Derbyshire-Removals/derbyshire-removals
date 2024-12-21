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
          <a href="tel:01629584953" className="flex items-center hover:text-gray-300">
            <Phone size={14} className="mr-1" />
            <span>Matlock: 01629 584953</span>
          </a>
          <a href="tel:07774422561" className="flex items-center hover:text-gray-300">
            <Phone size={14} className="mr-1" />
            <span>Mob: 07774422561</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;