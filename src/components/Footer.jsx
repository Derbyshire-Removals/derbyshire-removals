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
            <p>Derby: 01332 314312</p>
            <p>Matlock: 01629 584953</p>
            <p>Mob: 07774422561</p>
            <p>Email: info@derbyshireremovals.com</p>
            <div className="mt-4 text-sm">
              <p>Trading Name: Derbyshire Removals</p>
              <p>Registered Company: Nexus Deliveries Ltd</p>
              <p>Company Number: 15060349</p>
              <p>VAT Number: GB 446566171</p>
            </div>
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
                href="https://wa.me/441332314312?text=Hi!%20I'm%20interested%20in%20your%20removal%20services.%20Can%20you%20help%20me%20with%20a%20move?%20Here%20are%20some%20details:%0A-%20Pickup%20location:%20%5BEnter%20here%5D%0A-%20Delivery%20location:%20%5BEnter%20here%5D%0A-%20Preferred%20date:%20%5BEnter%20here%5D%0A-%20Additional%20information:%20%5BEnter%20here%5D%0ALooking%20forward%20to%20your%20reply!" 
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