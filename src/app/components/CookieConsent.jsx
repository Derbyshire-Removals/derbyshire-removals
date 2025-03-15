import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
    console.log('Cookie consent status:', consent);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    console.log('Cookies accepted');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            Learn more in our{' '}
            <Link href="/privacy-policy" className="underline hover:text-blue-300">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={acceptCookies}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="p-1 hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;