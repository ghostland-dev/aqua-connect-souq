
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/lib/i18n';
import { waterPoints } from './WaterPoints';
import MapFilters from './MapFilters';
import MapRenderer from './MapRenderer';
import MapLegend from './MapLegend';
import MapStats from './MapStats';

interface WaterMapProps {
  language: Language;
}

const WaterMap: React.FC<WaterMapProps> = ({ language }) => {
  const [activeLayer, setActiveLayer] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Fonction de filtrage des points d'eau
  const getFilteredPoints = () => {
    return waterPoints.filter(point => {
      const typeMatch = activeLayer === 'all' || point.type === activeLayer;
      const statusMatch = filterStatus === 'all' || point.status === filterStatus;
      return typeMatch && statusMatch;
    });
  };

  const filteredPoints = getFilteredPoints();
  
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Filters component */}
          <MapFilters 
            activeLayer={activeLayer}
            setActiveLayer={setActiveLayer}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />

          {/* Map renderer component */}
          <MapRenderer 
            filteredPoints={filteredPoints}
            selectedPoint={selectedPoint}
            setSelectedPoint={setSelectedPoint}
          />
          
          {/* Legend component */}
          <MapLegend />
          
          {/* Stats component */}
          <MapStats 
            filteredCount={filteredPoints.length}
            totalCount={waterPoints.length}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WaterMap;
