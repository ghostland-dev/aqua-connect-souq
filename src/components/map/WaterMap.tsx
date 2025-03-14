
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getTranslation, Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Layers, Filter, MapPin, Info } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet default icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface WaterMapProps {
  language: Language;
}

interface WaterPoint {
  id: number;
  lat: number;
  lng: number;
  type: 'well' | 'tap' | 'reservoir';
  status: 'active' | 'inactive' | 'maintenance';
  name: string;
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

  // Données des points d'eau avec coordonnées géographiques pour le Maroc
  const waterPoints: WaterPoint[] = [
    { id: 1, lat: 31.63, lng: -8.0, type: "well", status: "active", name: "بئر القرية المركزي" },
    { id: 2, lat: 31.2, lng: -7.9, type: "tap", status: "active", name: "صنبور مدرسة تافراوت" },
    { id: 3, lat: 30.9, lng: -7.8, type: "well", status: "inactive", name: "بئر الوادي القديم" },
    { id: 4, lat: 31.3, lng: -7.7, type: "tap", status: "active", name: "نقطة مياه المستشفى" },
    { id: 5, lat: 31.5, lng: -7.5, type: "well", status: "active", name: "بئر الجبل الشرقي" },
    { id: 6, lat: 31.7, lng: -7.6, type: "reservoir", status: "active", name: "خزان المياه الرئيسي" },
    { id: 7, lat: 31.4, lng: -7.4, type: "tap", status: "maintenance", name: "صنبور الساحة العامة" },
    { id: 8, lat: 31.1, lng: -7.3, type: "reservoir", status: "maintenance", name: "خزان المياه الاحتياطي" },
  ];

  // Fonction de filtrage des points d'eau
  const getFilteredPoints = () => {
    return waterPoints.filter(point => {
      const typeMatch = activeLayer === 'all' || point.type === activeLayer;
      const statusMatch = filterStatus === 'all' || point.status === filterStatus;
      return typeMatch && statusMatch;
    });
  };

  const filteredPoints = getFilteredPoints();
  
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
  
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Controls for the map */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Layers size={16} />
                  <span>
                    {activeLayer === 'all' ? 'كل الطبقات' : 
                     activeLayer === 'well' ? 'الآبار' : 
                     activeLayer === 'tap' ? 'الصنابير' : 'الخزانات'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setActiveLayer('all')}>كل الطبقات</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveLayer('well')}>الآبار</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveLayer('tap')}>الصنابير</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveLayer('reservoir')}>الخزانات</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span>
                    {filterStatus === 'all' ? 'كل الحالات' :
                     filterStatus === 'active' ? 'نشط' :
                     filterStatus === 'inactive' ? 'غير نشط' : 'صيانة'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterStatus('all')}>كل الحالات</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus('active')}>نشط</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus('inactive')}>غير نشط</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus('maintenance')}>صيانة</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Leaflet Map with Moroccan styling */}
            <div className="relative bg-morocco-sand/10 rounded-2xl overflow-hidden shadow-md mb-4">
              {/* Top decorative border - Moroccan pattern */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-morocco-terracotta via-morocco-sand to-morocco-blue z-10"></div>
              
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
              
              {/* Bottom decorative border */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-morocco-blue via-morocco-sand to-morocco-terracotta"></div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
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
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-3">إجمالي نقاط المياه: {filteredPoints.length} من {waterPoints.length}</p>
              <Button className="bg-morocco-blue hover:bg-morocco-blue-dark text-white">
                <MapPin size={16} className="mr-2" /> تقرير عن نقطة مياه جديدة
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaterMap;
