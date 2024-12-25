import React from 'react';

const TermsSection = ({ title, children }) => (
  <section className="space-y-8">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    {children}
  </section>
);

export default TermsSection;