
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Zap } from 'lucide-react';
const Navbar = () => {
  return <nav className="py-4 px-6 md:px-12 flex justify-between items-center bg-slate-900/95 backdrop-blur-md sticky top-0 shadow-md z-50">
      <div className="flex items-center gap-2">
        <Code className="text-indigo-400" size={24} />
        <h1 className="text-xl font-bold text-white">Engineer <span className="text-indigo-400">Village</span></h1>
        <Zap className="text-yellow-400" size={16} />
      </div>
      <div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/20" asChild>
          <a href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </div>
    </nav>;
};
export default Navbar;
