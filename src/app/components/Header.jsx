
"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import TopBar from './TopBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect for scroll detection to optimize header rendering
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <TopBar />
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Derbyshire Removals Company Logo - Professional Moving Services Since 1988" 
                className="h-20 w-auto" 
                loading="eager" // Logo is critical content
                width="240"
                height="80"
              />
            </Link>
            
            <div className="flex items-center">
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li><Link href="/move-checklist" className="text-gray-600 hover:text-[#071059]">Move Checklist</Link></li>
                  <li><Link href="/storage" className="text-gray-600 hover:text-[#071059]">Storage</Link></li>
                  <li><Link href="/packaging-material" className="text-gray-600 hover:text-[#071059]">Packaging Material</Link></li>
                  <li><Link href="/testimonials" className="text-gray-600 hover:text-[#071059]">Testimonials</Link></li>
                  <li><Link href="/faq" className="text-gray-600 hover:text-[#071059]">FAQ</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-[#071059]">Contact</Link></li>
                </ul>
              </nav>
              
              <button 
                onClick={toggleMenu} 
                className="mobile-menu md:hidden"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {isMenuOpen && (
            <nav className="mt-4 md:hidden">
              <ul className="flex flex-col space-y-2">
                <li><Link href="/move-checklist" className="block py-2 text-gray-600 hover:text-[#071059]">Move Checklist</Link></li>
                <li><Link href="/storage" className="block py-2 text-gray-600 hover:text-[#071059]">Storage</Link></li>
                <li><Link href="/packaging-material" className="block py-2 text-gray-600 hover:text-[#071059]">Packaging Material</Link></li>
                <li><Link href="/testimonials" className="block py-2 text-gray-600 hover:text-[#071059]">Testimonials</Link></li>
                <li><Link href="/faq" className="block py-2 text-gray-600 hover:text-[#071059]">FAQ</Link></li>
                <li><Link href="/contact" className="block py-2 text-gray-600 hover:text-[#071059]">Contact</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
