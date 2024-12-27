import React from 'react';

const ImportantContacts = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-[#071059]">Important UK Contacts</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <p><strong>Royal Mail Redirection:</strong> <a href="https://www.royalmail.com/personal/receiving-mail/redirection" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.royalmail.com/redirection</a></p>
          <p><strong>DVLA:</strong> <a href="tel:03007906801" className="text-blue-600 hover:underline">0300 790 6801</a></p>
          <p><strong>Council Tax:</strong> Contact your local council</p>
        </div>
        <div className="space-y-2">
          <p><strong>Electoral Register:</strong> <a href="https://www.gov.uk/register-to-vote" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.gov.uk/register-to-vote</a></p>
          <p><strong>Derbyshire Removals:</strong> <a href="tel:01332314312" className="text-blue-600 hover:underline">01332 314312</a></p>
        </div>
      </div>
    </section>
  );
};

export default ImportantContacts;