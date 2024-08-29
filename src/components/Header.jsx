import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Derbyshire Removals</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/move-checklist" className="text-gray-600 hover:text-blue-600">Move Checklist</Link></li>
            <li><Link to="/storage" className="text-gray-600 hover:text-blue-600">Storage</Link></li>
            <li><Link to="/packaging-material" className="text-gray-600 hover:text-blue-600">Packaging Material</Link></li>
            <li><Link to="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
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
