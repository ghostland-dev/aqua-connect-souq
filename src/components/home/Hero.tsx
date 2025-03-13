
import React from 'react';
import { motion } from 'framer-motion';
import { getTranslation, Language } from '@/lib/i18n';
import { useWaterRipple } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Droplet } from 'lucide-react';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const handleRipple = useWaterRipple();

  return (
    <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden moroccan-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/80 z-0"></div>
      
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.3,36.6l0,-36.6l11.4,0l0,36.6l36.6,0l0,11.4l-36.6,0l0,36.6l-11.4,0l0,-36.6l-36.6,0l0,-11.4l36.6,0Z' fill='%231A96B7' fill-opacity='0.1'/%3E%3C/svg%3E')",
          backgroundSize: "120px 120px"
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block bg-morocco-blue/10 text-morocco-blue rounded-full px-4 py-1 text-sm font-semibold mb-6">
              منصة إدارة المياه للمناطق النائية
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6"
          >
            {getTranslation(language, 'heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            {getTranslation(language, 'heroSubtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="btn-water group relative overflow-hidden bg-morocco-blue text-white px-8 py-6 rounded-md transition-all duration-300 hover:bg-morocco-blue-dark text-base"
              onClick={handleRipple}
            >
              <Droplet className="w-5 h-5 inline-block ml-2 transition-transform group-hover:-translate-y-1" />
              {getTranslation(language, 'getStarted')}
            </Button>
            <Button
              variant="outline"
              className="border-morocco-blue text-morocco-blue px-8 py-6 rounded-md hover:bg-morocco-blue/10 transition-all duration-300 text-base"
            >
              {getTranslation(language, 'learnMore')}
            </Button>
          </motion.div>
        </div>

        {/* Animated Water Drop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1,
            type: "spring",
            stiffness: 100
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
        >
          <div className="relative">
            <svg
              width="400"
              height="120"
              viewBox="0 0 500 140"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse-gentle"
            >
              <path
                d="M0,100 C150,180 350,0 500,100 L500,140 L0,140 Z"
                fill="#1A96B7"
                fillOpacity="0.1"
              />
              <path
                d="M0,120 C150,190 350,30 500,120 L500,140 L0,140 Z"
                fill="#1A96B7"
                fillOpacity="0.15"
              />
            </svg>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Droplet className="w-12 h-12 text-morocco-blue" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
