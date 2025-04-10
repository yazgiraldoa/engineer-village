
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-village-darkBlue text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Engineering Village</h2>
            <p className="text-sm text-gray-300">NYC's community for engineer founders</p>
          </div>
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Engineering Village. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
