import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { InfiniteSlider } from './ui/infinite-slider';

import type { SVGProps } from "react";
import { AmazonLogo, CoinbaseLogo, DoordashLogo, ProtocolLabsLogo, MetaLogo, PalantirLogo, SquareLogo, PinwheelLogo, GoogleLogo, AppleLogo, AsanaLogo, OracleLogo } from './ui/brand-logos';


type CompanyData = {
  name: string;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
};

const companies: CompanyData[] = [
  { name: 'Coinbase', icon: CoinbaseLogo },
  { name: 'Doordash', icon: DoordashLogo },
  { name: 'Protocol Labs', icon: ProtocolLabsLogo },
  { name: 'Amazon', icon: AmazonLogo },
  { name: 'Meta', icon: MetaLogo },
  { name: 'Palantir', icon: PalantirLogo },
  { name: 'Square', icon: SquareLogo },
  { name: 'Pinwheel', icon: PinwheelLogo },
  { name: 'Google', icon: GoogleLogo },
  { name: 'Apple', icon: AppleLogo },
  { name: 'Asana', icon: AsanaLogo },
  { name: 'Oracle', icon: OracleLogo },
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
        <div key={company.name} title={company.name} className="flex items-center justify-center h-24 flex items-center px-4 rounded-lg border border-techstars-slate/20">
          {company.icon && <company.icon className="w-12 h-12" />}
        </div>
      ))}
    </InfiniteSlider>


          
          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-techstars-black to-transparent" />
        </div>

   
     {/* Credit */}
        <div className="py-16 px-6 md:px-12 bg-techstars-black relative overflow-hidden text-m text-slate-400 hover:text-slate-300 transition-colors duration-200 "> 
           Founded by {' '}
          <a 
            href="https://www.linkedin.com/in/christineluhong/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100"
          >
               Christine Lu Hong
          </a>
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
