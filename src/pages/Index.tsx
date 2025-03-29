
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SDG13Section from '@/components/SDG13Section';
import PoemSection from '@/components/PoemSection';
import RefugeesSection from '@/components/RefugeesSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <SDG13Section />
      <PoemSection />
      <RefugeesSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
