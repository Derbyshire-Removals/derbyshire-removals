import React from 'react';
import { Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#071059] text-white py-1">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center">
          <Phone size={14} className="mr-2" />
          <span className="mr-4">Matlock: 01629 584953</span>
          <span className="mr-4">Chesterfield: 01246 381677</span>
          <span>Mob: 07774422561</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;