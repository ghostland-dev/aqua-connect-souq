
import React from 'react';
import { motion } from 'framer-motion';

const MapLegend: React.FC = () => {
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

  return (
    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-morocco-blue"></div>
        <span className="text-sm text-gray-600">آبار نشطة</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
        <span className="text-sm text-gray-600">صنابير نشطة</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
        <span className="text-sm text-gray-600">خزانات نشطة</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
        <span className="text-sm text-gray-600">تحت الصيانة</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-400"></div>
        <span className="text-sm text-gray-600">غير نشط</span>
      </div>
    </motion.div>
  );
};

export default MapLegend;
