
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-6 md:px-12">
      {/* NYC Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=2070&auto=format&fit=crop")', 
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Home for engineers in NYC building startups
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl">
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
