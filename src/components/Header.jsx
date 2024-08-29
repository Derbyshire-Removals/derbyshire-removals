import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Yorkshire Home Removals</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#why-us" className="text-gray-600 hover:text-blue-600">Why Us</a></li>
            <li><a href="#areas" className="text-gray-600 hover:text-blue-600">Areas Covered</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            <li className="flex items-center text-blue-600">
              <Phone size={18} className="mr-2" />
              <span>01234 567890</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;