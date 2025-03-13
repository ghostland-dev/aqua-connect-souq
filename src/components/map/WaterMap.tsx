
import React from 'react';
import { motion } from 'framer-motion';
import { getTranslation, Language } from '@/lib/i18n';

interface WaterMapProps {
  language: Language;
}

const WaterMap: React.FC<WaterMapProps> = ({ language }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Placeholder for water points data
  const waterPoints = [
    { id: 1, x: "30%", y: "40%", type: "well", status: "active" },
    { id: 2, x: "45%", y: "30%", type: "tap", status: "active" },
    { id: 3, x: "60%", y: "50%", type: "well", status: "inactive" },
    { id: 4, x: "25%", y: "65%", type: "tap", status: "active" },
    { id: 5, x: "70%", y: "35%", type: "well", status: "active" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block bg-morocco-blue/10 text-morocco-blue rounded-full px-4 py-1 text-sm font-semibold mb-4"
          >
            خريطة تفاعلية
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="section-title max-w-xl mx-auto text-center after:right-1/2 after:translate-x-1/2"
          >
            {getTranslation(language, 'mapTitle')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            {getTranslation(language, 'mapDesc')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="relative"
        >
          <div className="aspect-[16/9] bg-morocco-sand/20 rounded-2xl overflow-hidden shadow-md relative mb-4">
            {/* Map Background - In a real implementation, this would be a real map */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231A96B7' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
                backgroundSize: "cover"
              }}
            ></div>
            
            {/* Map Overlay with Path and Rivers */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M20,80 Q40,70 60,85 Q80,70 100,90 Q120,80 140,95 Q160,85 180,90" 
                fill="none" 
                stroke="#1A96B7" 
                strokeWidth="3" 
                strokeDasharray="1 3"
                strokeLinecap="round"
              />
              <path 
                d="M30,30 Q50,40 70,25 Q90,35 110,20 Q130,30 150,25 Q170,35 190,30" 
                fill="none" 
                stroke="#1A96B7" 
                strokeWidth="3"
                strokeOpacity="0.6"
                strokeLinecap="round"
              />
            </svg>
            
            {/* Water Points */}
            {waterPoints.map((point) => (
              <motion.div
                key={point.id}
                className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 ${
                  point.status === 'active' ? 'text-morocco-blue' : 'text-gray-400'
                }`}
                style={{ left: point.x, top: point.y }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.5 + Math.random() * 0.5
                }}
                whileHover={{ scale: 1.2 }}
              >
                {point.type === 'well' ? (
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="white" />
                    <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                ) : (
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" fill="white" />
                    <path d="M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 15V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-morocco-blue"></div>
              <span className="text-sm text-gray-600">نقاط مياه نشطة</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              <span className="text-sm text-gray-600">نقاط مياه غير نشطة</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaterMap;
