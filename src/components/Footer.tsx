
import React from 'react';
import { Code, Zap, Github, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="py-10 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0tNCAwSDJ2LTRoMzB2NHptMCA0aC0ydjRoMnYtNHptLTQgMEgydjRoMzB2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Code className="text-indigo-400" size={20} />
              <h2 className="text-xl font-bold">Engineer <span className="text-indigo-400">Village</span></h2>
              <Zap className="text-yellow-400" size={14} />
            </div>
            <p className="text-sm text-indigo-200">NYC's community for engineer founders</p>
          </div>
          
          <div className="flex flex-col items-end">
            
            <p className="text-sm text-indigo-300/80">&copy; {new Date().getFullYear()} Engineering Village. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
