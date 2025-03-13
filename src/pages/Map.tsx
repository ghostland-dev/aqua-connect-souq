
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Language } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import WaterMap from '@/components/map/WaterMap';
import WaterDataPanel from '@/components/map/WaterDataPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Map = () => {
  const [language, setLanguage] = useState<Language>('ar');

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-morocco-blue to-morocco-blue-dark text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {getTranslation(language, 'mapTitle')}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {getTranslation(language, 'mapDesc')}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Map and Data Tabs */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="map">{getTranslation(language, 'waterMap')}</TabsTrigger>
                <TabsTrigger value="data">{getTranslation(language, 'waterData')}</TabsTrigger>
              </TabsList>
              <TabsContent value="map" className="bg-white rounded-lg shadow-md overflow-hidden">
                <WaterMap language={language} />
              </TabsContent>
              <TabsContent value="data">
                <WaterDataPanel language={language} />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Map;
