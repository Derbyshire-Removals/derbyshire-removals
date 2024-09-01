import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopBar />
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-[#071059]">Derbyshire Removals</Link>
            
            <div className="flex items-center">
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li><Link to="/move-checklist" className="text-gray-600 hover:text-[#071059]">Move Checklist</Link></li>
                  <li><Link to="/storage" className="text-gray-600 hover:text-[#071059]">Storage</Link></li>
                  <li><Link to="/packaging-material" className="text-gray-600 hover:text-[#071059]">Packaging Material</Link></li>
                  <li><Link to="/testimonials" className="text-gray-600 hover:text-[#071059]">Testimonials</Link></li>
                  <li><Link to="/faq" className="text-gray-600 hover:text-[#071059]">FAQ</Link></li>
                  <li><Link to="/contact" className="text-gray-600 hover:text-[#071059]">Contact</Link></li>
                </ul>
              </nav>
              
              <button onClick={toggleMenu} className="ml-4 md:hidden">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {isMenuOpen && (
            <nav className="mt-4 md:hidden">
              <ul className="flex flex-col space-y-2">
                <li><Link to="/move-checklist" className="block py-2 text-gray-600 hover:text-[#071059]">Move Checklist</Link></li>
                <li><Link to="/storage" className="block py-2 text-gray-600 hover:text-[#071059]">Storage</Link></li>
                <li><Link to="/packaging-material" className="block py-2 text-gray-600 hover:text-[#071059]">Packaging Material</Link></li>
                <li><Link to="/testimonials" className="block py-2 text-gray-600 hover:text-[#071059]">Testimonials</Link></li>
                <li><Link to="/faq" className="block py-2 text-gray-600 hover:text-[#071059]">FAQ</Link></li>
                <li><Link to="/contact" className="block py-2 text-gray-600 hover:text-[#071059]">Contact</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
