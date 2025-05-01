
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type CompanyData = {
  name: string;
  logoClass: string; // Using text as logos for simplicity
};

const companies: CompanyData[] = [
  { name: 'Coinbase', logoClass: 'bg-white/5' },
  { name: 'Doordash', logoClass: 'bg-white/5' },
  { name: 'Protocol Labs', logoClass: 'bg-white/5' },
  { name: 'Amazon', logoClass: 'bg-white/5' },
  { name: 'Meta', logoClass: 'bg-white/5' },
  { name: 'Moonhub', logoClass: 'bg-white/5' },
  { name: 'Palantir', logoClass: 'bg-white/5' },
  { name: 'Square', logoClass: 'bg-white/5' },
  { name: 'Pinwheel', logoClass: 'bg-white/5' },
  { name: 'Google', logoClass: 'bg-white/5' },
  { name: 'Apple', logoClass: 'bg-white/5' },
  { name: 'Asana', logoClass: 'bg-white/5' },
  { name: 'Oracle', logoClass: 'bg-white/5' },
];

// Duplicate companies for continuous scrolling effect
const scrollingCompanies = [...companies, ...companies];

const Companies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Calculate the scroll animation
    const animateScroll = () => {
      if (!scrollContainer) return;
      
      // When halfway through the original items, reset to beginning without visual jump
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1; // Slow scroll speed
      }
    };
    
    // Set interval for smooth scrolling effect
    const scrollInterval = setInterval(animateScroll, 30);
    
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

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
          
          {/* Scrolling content */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 py-2"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            {scrollingCompanies.map((company, index) => (
              <div 
                key={index} 
                className="flex-none w-40" // Fixed width for each item
              >
                <div 
                  className={cn(
                    "h-24 flex items-center justify-center rounded-lg border border-techstars-slate/20", 
                    company.logoClass
                  )}
                >
                  <span className="font-semibold text-techstars-white/90">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
          
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
