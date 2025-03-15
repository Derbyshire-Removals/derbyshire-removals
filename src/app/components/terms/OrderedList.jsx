import React from 'react';

const OrderedList = ({ items }) => (
  <ol className="list-[lower-alpha] pl-5 space-y-2">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ol>
);

export default OrderedList;