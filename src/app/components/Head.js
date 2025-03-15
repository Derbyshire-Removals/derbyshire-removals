
import React from 'react';
import Head from 'next/head';

const CustomHead = ({ children }) => {
  return (
    <Head>
      {children}
    </Head>
  );
};

export default CustomHead;
