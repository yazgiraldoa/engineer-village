
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* NYC Skyline Background Image - Optimized */}
      <div className="absolute inset-0 z-0">

          <img 
            src="/lovable-uploads/6b84298e-8ffa-4a02-b3bf-3b4a02c42024.png" 
            alt="NYC Skyline"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
            width="1200"
            height="675"
          />
          
          {/* Dark gradient overlay with tech pattern */}
          <div className="absolute inset-0 bg-techstars-black/60"></div>

      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-up">
          {/* Tech Element */}
          <div className="flex items-center gap-2 mb-4 text-techstars-phosphor">
            
            
            
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-techstars-white mb-6 leading-tight">
          Engineer <span className="bg-clip-text text-transparent bg-gradient-to-r from-techstars-phosphor to-techstars-slate">founder</span> with no office? We&apos;ve got a home for you
          </h1>
          <p className="text-xl md:text-2xl text-techstars-slate mb-10 max-w-3xl">Join a weekly co-working day with other engineer founders and engineers looking to join an early stage startup</p>
          <Button className="bg-techstars-phosphor hover:bg-techstars-phosphor/80 transition-all shadow-lg shadow-techstars-phosphor/20 text-lg px-8 py-6 group" asChild>
            <a href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          {/* Tech decorative elements */}
          <div className="absolute bottom-[-20px] right-[-50px] text-techstars-slate/20 text-[120px] font-mono rotate-12 hidden md:block">{`{ }`}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
