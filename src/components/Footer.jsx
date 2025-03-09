
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#071059] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/images/logo-white.jpg"
              alt="Derbyshire Removals Logo"
              className="h-16 mb-6"
            />
            <p className="mb-4 text-gray-300 max-w-xs">
              Professional removal services across the East & West Midlands since 1988. Family-run business dedicated to making your move stress-free.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" aria-label="Facebook" className="text-white hover:text-blue-300 transition-colors">
                <Facebook />
              </a>
              <a href="https://instagram.com/" aria-label="Instagram" className="text-white hover:text-blue-300 transition-colors">
                <Instagram />
              </a>
              <a href="https://twitter.com/" aria-label="Twitter" className="text-white hover:text-blue-300 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/home-removals" className="text-gray-300 hover:text-white transition-colors">
                  Home Removals
                </Link>
              </li>
              <li>
                <Link href="/services/office-removals" className="text-gray-300 hover:text-white transition-colors">
                  Office Removals
                </Link>
              </li>
              <li>
                <Link href="/storage" className="text-gray-300 hover:text-white transition-colors">
                  Storage Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/packing-services" className="text-gray-300 hover:text-white transition-colors">
                  Packing Services
                </Link>
              </li>
              <li>
                <Link href="/packaging-material" className="text-gray-300 hover:text-white transition-colors">
                  Packaging Materials
                </Link>
              </li>
              <li>
                <Link href="/move-checklist" className="text-gray-300 hover:text-white transition-colors">
                  Moving Checklist
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/areas-we-cover" className="text-gray-300 hover:text-white transition-colors">
                  Areas We Cover
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Removal Street, Derby, Derbyshire, DE1 2AB</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:01332123456" className="text-gray-300 hover:text-white transition-colors">01332 123 456</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@derbyshireremovals.com" className="text-gray-300 hover:text-white transition-colors">info@derbyshireremovals.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Fri: 8:00 - 18:00</p>
                  <p className="text-gray-300">Sat: 9:00 - 15:00</p>
                  <p className="text-gray-300">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-900 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Derbyshire Removals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
