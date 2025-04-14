import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap } from 'lucide-react';
const Hero = () => {
  return <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* NYC Skyline Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("/lovable-uploads/6b84298e-8ffa-4a02-b3bf-3b4a02c42024.png")',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }} aria-hidden="true">
        {/* Dark gradient overlay with tech pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-indigo-900/60"></div>
        
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0tNCAwSDJ2LTRoMzB2NHptMCA0aC0ydjRoMnYtNHptLTQgMEgydjRoMzB2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-up">
          {/* Tech Element */}
          <div className="flex items-center gap-2 mb-4 text-indigo-400">
            
            
            
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Feel stuck working on your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">startup</span> solo?
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl">Join a weekly founder co-working day with other engineering founders</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 text-lg px-8 py-6 group" asChild>
            <a href="https://airtable.com/app4khX3IgMNZTinP/pag6OUaSXYUHWqRbK/form" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          {/* Tech decorative elements */}
          <div className="absolute bottom-[-20px] right-[-50px] text-indigo-800/20 text-[120px] font-mono rotate-12 hidden md:block">{`{ }`}</div>
        </div>
      </div>
    </section>;
};
export default Hero;