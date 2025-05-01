
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
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

const Companies = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-techstars-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-techstars-white text-center mb-12">
          Engineers from top companies are building their next ventures with us
        </h2>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {companies.map((company, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div 
                  className={cn(
                    "h-24 flex items-center justify-center rounded-lg border border-techstars-slate/20", 
                    company.logoClass
                  )}
                >
                  <span className="font-semibold text-techstars-white/90">{company.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Companies;
