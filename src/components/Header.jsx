import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">Derbyshire Removals</Link>
          <div className="flex items-center">
            <div className="hidden md:flex items-center text-blue-600 mr-6">
              <Phone size={18} className="mr-2" />
              <span>01234 567890</span>
            </div>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <ul className="md:flex md:space-x-6">
            <li><Link to="/move-checklist" className="block py-2 text-gray-600 hover:text-blue-600">Move Checklist</Link></li>
            <li><Link to="/storage" className="block py-2 text-gray-600 hover:text-blue-600">Storage</Link></li>
            <li><Link to="/packaging-material" className="block py-2 text-gray-600 hover:text-blue-600">Packaging Material</Link></li>
            <li><Link to="/testimonials" className="block py-2 text-gray-600 hover:text-blue-600">Testimonials</Link></li>
            <li><Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
        <div className="md:hidden flex items-center text-blue-600 mt-4">
          <Phone size={18} className="mr-2" />
          <span>01234 567890</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
