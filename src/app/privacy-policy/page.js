import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { generateSchemaScript } from '../lib/schema';

const PrivacyPolicy = () => {
  // Schema.org JSON-LD for Privacy Policy page
  const privacyPolicySchema = generateSchemaScript([
    {
      "@type": "WebPage",
      "url": "https://derbyshireremovals.com/privacy-policy",
      "name": "Privacy Policy",
      "description": "Learn how Derbyshire Removals uses cookies to enhance user experience, including details on analytics and essential cookies, as well as how to manage them.",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Derbyshire Removals",
        "url": "https://derbyshireremovals.com/",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "0333 567 7001",
          "email": "info@derbyshireremovals.com"
        }
      }
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: privacyPolicySchema }}
      />
      <Header />
      <main className="container mx-auto px-4 pt-52 pb-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Cookie Policy</h2>
            <p className="mb-4">
              Our website uses cookies to enhance your browsing experience and analyze site traffic. 
              This helps us understand how you use our site and improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">What are cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us recognize your device and provide a better user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">How we use cookies</h2>
            <p className="mb-2">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytics (Google Analytics) - To understand how visitors interact with our website</li>
              <li>Essential cookies - To remember your cookie consent preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Google Analytics</h2>
            <p className="mb-4">
              We use Google Analytics to understand how visitors interact with our website. 
              Google Analytics collects information such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pages you visit</li>
              <li>Time spent on each page</li>
              <li>Type of device used</li>
              <li>General location (country/city level)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Managing Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. 
              You can delete existing cookies and set your browser to prevent new ones from being set.
              However, disabling cookies might affect the functionality of our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p>
              If you have any questions about our cookie policy or privacy practices, please contact us at{' '}
              <a href="mailto:info@derbyshireremovals.com" className="text-blue-600 hover:underline">
                info@derbyshireremovals.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
