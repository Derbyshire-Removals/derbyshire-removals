
import React from 'react';
import Link from 'next/link';
import { MessageCircle, Facebook, Instagram } from 'lucide-react';
import { navItems } from './nav-items';

const Footer = () => {
  // Group navigation items by category
  const mainLinks = navItems.filter(item => 
    ['/', '/about-us', '/contact', '/areas-we-cover', '/testimonials', '/faq'].includes(item.to)
  );
  
  const serviceLinks = navItems.filter(item => 
    item.to.startsWith('/services/')
  );
  
  const locationLinks = navItems.filter(item => 
    item.to.startsWith('/locations/')
  );
  
  const resourceLinks = navItems.filter(item => 
    ['/move-checklist', '/storage', '/packaging-material', '/terms-and-conditions', '/privacy-policy'].includes(item.to)
  );

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Derbyshire Removals</h3>
            <p>National: 0333 567 7001</p>
            <p>Derby: 01332 314312</p>
            <p>Chesterfield: 01246 922192</p>
            <p>Mob: 07425557000</p>
            <p>Email: info@derbyshireremovals.com</p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572796415223" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-white hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/derbyshireremovals/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-white hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Main Links</h4>
            <ul className="space-y-2">
              {mainLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.to} className="hover:text-blue-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.to} className="hover:text-blue-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <ul className="space-y-2">
              {locationLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.to} className="hover:text-blue-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.to} className="hover:text-blue-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/447425557000?text=Hi!%20I'm%20interested%20in%20your%20removal%20services.%20Can%20you%20help%20me%20with%20a%20move?%20Here%20are%20some%20details:%0A-%20Pickup%20location:%20%5BEnter%20here%5D%0A-%20Delivery%20location:%20%5BEnter%20here%5D%0A-%20Preferred%20date:%20%5BEnter%20here%5D%0A-%20Additional%20information:%20%5BEnter%20here%5D%0ALooking%20forward%20to%20your%20reply!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-white hover:text-green-400 transition-colors duration-300"
                >
                  <MessageCircle className="mr-2" />
                  <span>WhatsApp Us</span>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61572796415223" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <Facebook className="mr-2" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/derbyshireremovals/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-white hover:text-pink-400 transition-colors duration-300"
                >
                  <Instagram className="mr-2" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Nexus Deliveries Ltd trading as Derbyshire Removals</p>
          <p>Company No: 15060349 | VAT No: GB 446566171</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
