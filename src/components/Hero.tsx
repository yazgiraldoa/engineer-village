
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-village-gray">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-village-darkBlue mb-6 leading-tight">
            Home for engineers in NYC building startups
          </h1>
          <p className="text-xl md:text-2xl text-village-darkGray mb-10 max-w-3xl">
            Engineering Village is a community for any engineer in NYC about to go full time on working on their startup.
          </p>
          <Button 
            className="bg-village-blue hover:bg-village-darkBlue transition-colors text-lg px-8 py-6"
            asChild
          >
            <a 
              href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Apply Now <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
