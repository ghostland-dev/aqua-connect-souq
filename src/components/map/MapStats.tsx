
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface MapStatsProps {
  filteredCount: number;
  totalCount: number;
}

const MapStats: React.FC<MapStatsProps> = ({ filteredCount, totalCount }) => {
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
    <motion.div variants={itemVariants} className="mt-6 text-center">
      <p className="text-sm text-gray-500 mb-3">إجمالي نقاط المياه: {filteredCount} من {totalCount}</p>
      <Button className="bg-morocco-blue hover:bg-morocco-blue-dark text-white">
        <MapPin size={16} className="mr-2" /> تقرير عن نقطة مياه جديدة
      </Button>
    </motion.div>
  );
};

export default MapStats;
