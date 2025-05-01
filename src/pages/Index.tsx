
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Companies from '@/components/Companies';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-techstars-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Companies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
