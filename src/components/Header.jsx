import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">Derbyshire Removals</Link>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto`}>
            <ul className="md:flex md:space-x-6 mb-4 md:mb-0">
              <li><Link to="/move-checklist" className="block py-2 text-gray-600 hover:text-blue-600">Move Checklist</Link></li>
              <li><Link to="/storage" className="block py-2 text-gray-600 hover:text-blue-600">Storage</Link></li>
              <li><Link to="/packaging-material" className="block py-2 text-gray-600 hover:text-blue-600">Packaging Material</Link></li>
              <li><Link to="/testimonials" className="block py-2 text-gray-600 hover:text-blue-600">Testimonials</Link></li>
              <li><Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
            <div className="flex items-center text-blue-600">
              <Phone size={18} className="mr-2" />
              <span>01234 567890</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
