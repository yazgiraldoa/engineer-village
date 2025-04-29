
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-techstars-black/95">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
