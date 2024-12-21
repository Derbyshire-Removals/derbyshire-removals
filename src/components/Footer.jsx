import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { navItems } from '../nav-items';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Derbyshire Removals</h3>
            <p>Matlock: 01629 584953</p>
            <p>Mob: 07774422561</p>
            <p>Email: info@derbyshireremovals.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="hover:text-blue-400">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex items-center">
              <a 
                href="https://wa.me/441332314312" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-white hover:text-green-400 transition-colors duration-300"
              >
                <MessageCircle className="mr-2" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; 2024 Derbyshire Removals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;