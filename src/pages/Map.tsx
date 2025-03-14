
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
        {/* Hero Section with Moroccan Pattern Background */}
        <section className="bg-gradient-to-r from-morocco-blue to-morocco-blue-dark text-white py-12 relative overflow-hidden">
          {/* Decorative Berber-inspired pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '30px'
               }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
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
          
          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-6">
              <path fill="#ffffff" fillOpacity="1" d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,42.7C1120,43,1280,21,1360,10.7L1440,0L1440,50L1360,50C1280,50,1120,50,960,50C800,50,640,50,480,50C320,50,160,50,80,50L0,50Z"></path>
            </svg>
          </div>
        </section>

        {/* Map and Data Tabs with Moroccan Styling */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-morocco-sand/30 p-1 rounded-lg">
                <TabsTrigger 
                  value="map"
                  className="data-[state=active]:bg-morocco-blue data-[state=active]:text-white"
                >
                  {getTranslation(language, 'waterMap')}
                </TabsTrigger>
                <TabsTrigger 
                  value="data"
                  className="data-[state=active]:bg-morocco-blue data-[state=active]:text-white"
                >
                  {getTranslation(language, 'waterData')}
                </TabsTrigger>
              </TabsList>
              
              {/* Decorative top border for tab content */}
              <div className="h-2 bg-gradient-to-r from-morocco-terracotta via-morocco-sand to-morocco-blue rounded-t-lg mx-auto max-w-6xl"></div>
              
              <TabsContent value="map" className="bg-white rounded-b-lg rounded-tr-lg shadow-md overflow-hidden border border-morocco-sand border-t-0 max-w-6xl mx-auto">
                <WaterMap language={language} />
              </TabsContent>
              <TabsContent value="data" className="bg-white rounded-b-lg rounded-tr-lg shadow-md overflow-hidden border border-morocco-sand border-t-0 max-w-6xl mx-auto">
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
