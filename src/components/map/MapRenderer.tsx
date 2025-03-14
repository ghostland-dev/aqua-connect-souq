
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Button } from '@/components/ui/button';

// Fix for Leaflet default icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface WaterPoint {
  id: number;
  lat: number;
  lng: number;
  type: 'well' | 'tap' | 'reservoir';
  status: 'active' | 'inactive' | 'maintenance';
  name: string;
}

interface MapRendererProps {
  filteredPoints: WaterPoint[];
  selectedPoint: number | null;
  setSelectedPoint: (id: number | null) => void;
}

const MapRenderer: React.FC<MapRendererProps> = ({ 
  filteredPoints, 
  selectedPoint, 
  setSelectedPoint 
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Ensure client-side rendering only
  useEffect(() => {
    setMapLoaded(true);
  }, []);

  // Custom marker colors based on type and status
  const getMarkerColor = (type: string, status: string) => {
    if (status === 'inactive') return "#777";
    if (status === 'maintenance') return "#F59E0B";
    
    switch (type) {
      case 'well': return "#1A96B7";
      case 'tap': return "#10B981";
      case 'reservoir': return "#6366F1";
      default: return "#1A96B7";
    }
  };

  // Custom Moroccan-themed map style
  const mapStyle = {
    height: "500px",
    width: "100%",
    borderRadius: "0.5rem",
    border: "2px solid #E9DAC4",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
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

  return (
    <motion.div
      variants={itemVariants}
      className="relative"
    >
      {/* Leaflet Map with Moroccan styling */}
      <div className="relative bg-morocco-sand/10 rounded-2xl overflow-hidden shadow-md mb-4">
        {/* Top decorative border - Moroccan pattern */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-morocco-terracotta via-morocco-sand to-morocco-blue z-10"></div>
        
        {mapLoaded && (
          <MapContainer 
            center={[31.3, -7.6]} 
            zoom={9} 
            style={mapStyle} 
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Water points markers */}
            {filteredPoints.map((point) => (
              <CircleMarker 
                key={point.id}
                center={[point.lat, point.lng]}
                radius={8}
                pathOptions={{
                  fillColor: getMarkerColor(point.type, point.status),
                  color: '#fff',
                  weight: 2,
                  opacity: 1,
                  fillOpacity: 0.8
                }}
                eventHandlers={{
                  click: () => {
                    setSelectedPoint(selectedPoint === point.id ? null : point.id);
                  }
                }}
              >
                <Popup className="leaflet-popup-morocco">
                  <div className="p-1">
                    <h3 className="font-bold text-morocco-blue text-lg border-b border-morocco-sand pb-1 mb-2">{point.name}</h3>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">النوع:</span> 
                      <span>{point.type === 'well' ? 'بئر' : point.type === 'tap' ? 'صنبور' : 'خزان'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">الحالة:</span> 
                      <span className={
                        point.status === 'active' ? 'text-green-600' : 
                        point.status === 'maintenance' ? 'text-yellow-600' : 
                        'text-red-600'
                      }>
                        {point.status === 'active' ? 'نشط' : 
                         point.status === 'maintenance' ? 'صيانة' : 
                         'غير نشط'}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-2 flex items-center justify-center gap-1 text-xs h-7"
                    >
                      <Info size={12} />
                      <span>تفاصيل أكثر</span>
                    </Button>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        )}
        
        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-morocco-blue via-morocco-sand to-morocco-terracotta"></div>
      </div>
    </motion.div>
  );
};

export default MapRenderer;
