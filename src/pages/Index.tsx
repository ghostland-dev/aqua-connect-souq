
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import FeatureSection from '@/components/home/FeatureSection';
import Stats from '@/components/home/Stats';
import Footer from '@/components/layout/Footer';
import { Language } from '@/lib/i18n';

const Index = () => {
  const [language, setLanguage] = useState<Language>('ar');

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <Stats language={language} />
        <FeatureSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
