import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { InfiniteSlider } from './ui/infinite-slider';

import type { SVGProps } from "react";


type CompanyData = {
  name: string;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
};

const companies: CompanyData[] = [
  { name: 'Coinbase' },
  { name: 'Doordash' },
  { name: 'Protocol Labs' },
  { name: 'Amazon' },
  { name: 'Meta' },
  { name: 'Moonhub' },
  { name: 'Palantir' },
  { name: 'Square' },
  { name: 'Pinwheel' },
  { name: 'Google' },
  { name: 'Apple' },
  { name: 'Asana' },
  { name: 'Oracle' },
];

const Companies = () => {

  return (
    <section className="py-16 px-6 md:px-12 bg-techstars-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-techstars-white text-center mb-12">
          Engineers from top companies are building their next ventures with us
        </h2>

        {/* Carousel container with mask gradients */}
        <div className="relative w-full overflow-hidden">
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-techstars-black to-transparent" />
          

    <InfiniteSlider gap={8} speed={40}>
      {companies.map((company) => (
        <div key={company.name} className="flex items-center justify-center h-24 flex items-center px-10 rounded-lg border border-techstars-slate/20">
          {company.icon && <company.icon className="w-12 h-12" />}
          <span className="text-techstars-white">{company.name}</span>
        </div>
      ))}
    </InfiniteSlider>


          
          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-techstars-black to-transparent" />
        </div>
        
        {/* Hide scrollbar from all browsers */}
        <style>
          {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
        </style>
      </div>
    </section>
  );
};

export default Companies;
