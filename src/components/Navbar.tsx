
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Zap } from 'lucide-react';
const Navbar = () => {
  return <nav className="py-4 px-6 md:px-12 flex justify-between items-center bg-techstars-black/95 backdrop-blur-md sticky top-0 shadow-md z-50">
      <div className="flex items-center gap-2">
        <Code className="text-techstars-phosphor" size={24} />
        <h1 className="text-xl font-bold text-techstars-white">Techstars <span className="text-techstars-phosphor">Engineer Village</span></h1>
        <Zap className="text-techstars-slate" size={16} />
      </div>
      <div>
        <Button className="bg-techstars-phosphor hover:bg-techstars-phosphor/80 transition-all shadow-md shadow-techstars-phosphor/20" asChild>
          <a href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </div>
    </nav>;
};
export default Navbar;
