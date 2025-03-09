
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [router.pathname]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      <TopBar />
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Derbyshire Removals Logo"
              className="h-14 md:h-16"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#071059] focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/" 
              className={`text-[#071059] hover:text-blue-700 font-medium ${router.pathname === '/' ? 'border-b-2 border-[#071059]' : ''}`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center text-[#071059] hover:text-blue-700 font-medium ${
                  ['/services/home-removals', '/services/packing-services', '/services/office-removals', 
                   '/services/last-minute-removals', '/services/antique-and-fine-arts'].includes(router.pathname) 
                  ? 'border-b-2 border-[#071059]' : ''
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)} 
                className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg z-20 transition-all duration-300 ${
                  servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  <Link 
                    href="/services/home-removals" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Home Removals
                  </Link>
                  <Link 
                    href="/services/packing-services" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Packing Services
                  </Link>
                  <Link 
                    href="/services/office-removals" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Office Removals
                  </Link>
                  <Link 
                    href="/services/last-minute-removals" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Last Minute Removals
                  </Link>
                  <Link 
                    href="/services/antique-and-fine-arts" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Antique and Fine Arts
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                onMouseEnter={() => setLocationsDropdownOpen(true)}
                className={`flex items-center text-[#071059] hover:text-blue-700 font-medium ${
                  ['/locations/derby', '/locations/mansfield', '/locations/chesterfield', 
                   '/locations/buxton', '/locations/loughborough'].includes(router.pathname) 
                  ? 'border-b-2 border-[#071059]' : ''
                }`}
              >
                Locations <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div 
                onMouseLeave={() => setLocationsDropdownOpen(false)}
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 transition-all duration-300 ${
                  locationsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  <Link 
                    href="/locations/derby" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Derby
                  </Link>
                  <Link 
                    href="/locations/mansfield" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mansfield
                  </Link>
                  <Link 
                    href="/locations/chesterfield" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Chesterfield
                  </Link>
                  <Link 
                    href="/locations/buxton" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Buxton
                  </Link>
                  <Link 
                    href="/locations/loughborough" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Loughborough
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              href="/storage" 
              className={`text-[#071059] hover:text-blue-700 font-medium ${router.pathname === '/storage' ? 'border-b-2 border-[#071059]' : ''}`}
            >
              Storage
            </Link>
            
            <Link 
              href="/packaging-material" 
              className={`text-[#071059] hover:text-blue-700 font-medium ${router.pathname === '/packaging-material' ? 'border-b-2 border-[#071059]' : ''}`}
            >
              Packaging Material
            </Link>
            
            <Link 
              href="/move-checklist" 
              className={`text-[#071059] hover:text-blue-700 font-medium ${router.pathname === '/move-checklist' ? 'border-b-2 border-[#071059]' : ''}`}
            >
              Move Checklist
            </Link>
            
            <Link 
              href="/contact" 
              className={`text-[#071059] hover:text-blue-700 font-medium ${router.pathname === '/contact' ? 'border-b-2 border-[#071059]' : ''}`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/"
                className={`px-3 py-2 rounded-md ${router.pathname === '/' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                Home
              </Link>
              
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center justify-between px-3 py-2 text-left text-gray-700 rounded-md"
              >
                <span className={`${
                  ['/services/home-removals', '/services/packing-services', '/services/office-removals', 
                  '/services/last-minute-removals', '/services/antique-and-fine-arts'].includes(router.pathname) 
                  ? 'font-medium text-[#071059]' : ''
                }`}>Services</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${servicesDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="pl-6 space-y-2">
                  <Link 
                    href="/services/home-removals" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/services/home-removals' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Home Removals
                  </Link>
                  <Link 
                    href="/services/packing-services" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/services/packing-services' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Packing Services
                  </Link>
                  <Link 
                    href="/services/office-removals" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/services/office-removals' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Office Removals
                  </Link>
                  <Link 
                    href="/services/last-minute-removals" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/services/last-minute-removals' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Last Minute Removals
                  </Link>
                  <Link 
                    href="/services/antique-and-fine-arts" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/services/antique-and-fine-arts' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Antique and Fine Arts
                  </Link>
                </div>
              )}
              
              <button 
                onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                className="flex items-center justify-between px-3 py-2 text-left text-gray-700 rounded-md"
              >
                <span className={`${
                  ['/locations/derby', '/locations/mansfield', '/locations/chesterfield', 
                  '/locations/buxton', '/locations/loughborough'].includes(router.pathname) 
                  ? 'font-medium text-[#071059]' : ''
                }`}>Locations</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${locationsDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {locationsDropdownOpen && (
                <div className="pl-6 space-y-2">
                  <Link 
                    href="/locations/derby" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/locations/derby' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Derby
                  </Link>
                  <Link 
                    href="/locations/mansfield" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/locations/mansfield' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Mansfield
                  </Link>
                  <Link 
                    href="/locations/chesterfield" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/locations/chesterfield' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Chesterfield
                  </Link>
                  <Link 
                    href="/locations/buxton" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/locations/buxton' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Buxton
                  </Link>
                  <Link 
                    href="/locations/loughborough" 
                    className={`block px-3 py-1 rounded-md ${router.pathname === '/locations/loughborough' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-600'}`}
                  >
                    Loughborough
                  </Link>
                </div>
              )}
              
              <Link 
                href="/storage" 
                className={`px-3 py-2 rounded-md ${router.pathname === '/storage' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                Storage
              </Link>
              
              <Link 
                href="/packaging-material" 
                className={`px-3 py-2 rounded-md ${router.pathname === '/packaging-material' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                Packaging Material
              </Link>
              
              <Link 
                href="/move-checklist" 
                className={`px-3 py-2 rounded-md ${router.pathname === '/move-checklist' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                Move Checklist
              </Link>
              
              <Link 
                href="/contact" 
                className={`px-3 py-2 rounded-md ${router.pathname === '/contact' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                Contact
              </Link>

              <Link 
                href="/testimonials" 
                className={`px-3 py-2 rounded-md ${router.pathname === '/testimonials' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                Testimonials
              </Link>

              <Link 
                href="/about-us" 
                className={`px-3 py-2 rounded-md ${router.pathname === '/about-us' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                About Us
              </Link>

              <Link 
                href="/areas-we-cover" 
                className={`px-3 py-2 rounded-md ${router.pathname === '/areas-we-cover' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                Areas We Cover
              </Link>

              <Link 
                href="/faq" 
                className={`px-3 py-2 rounded-md ${router.pathname === '/faq' ? 'bg-blue-50 text-[#071059] font-medium' : 'text-gray-700'}`}
              >
                FAQ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
