
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 shadow-sm z-10">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-village-darkBlue">Engineering Village</h1>
      </div>
      <div>
        <Button 
          className="bg-village-blue hover:bg-village-darkBlue transition-colors"
          asChild
        >
          <a 
            href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
