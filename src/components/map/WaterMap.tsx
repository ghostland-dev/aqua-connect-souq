
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

interface WaterMapProps {
  language: Language;
}

const WaterMap: React.FC<WaterMapProps> = ({ language }) => {
  const [activeLayer, setActiveLayer] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
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

  // Données des points d'eau (exemples)
  const waterPoints = [
    { id: 1, x: "30%", y: "40%", type: "well", status: "active", name: "بئر القرية المركزي" },
    { id: 2, x: "45%", y: "30%", type: "tap", status: "active", name: "صنبور مدرسة تافراوت" },
    { id: 3, x: "60%", y: "50%", type: "well", status: "inactive", name: "بئر الوادي القديم" },
    { id: 4, x: "25%", y: "65%", type: "tap", status: "active", name: "نقطة مياه المستشفى" },
    { id: 5, x: "70%", y: "35%", type: "well", status: "active", name: "بئر الجبل الشرقي" },
    { id: 6, x: "55%", y: "60%", type: "reservoir", status: "active", name: "خزان المياه الرئيسي" },
    { id: 7, x: "40%", y: "50%", type: "tap", status: "maintenance", name: "صنبور الساحة العامة" },
    { id: 8, x: "75%", y: "45%", type: "reservoir", status: "maintenance", name: "خزان المياه الاحتياطي" },
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
  
  // Information temporaire sur le point sélectionné
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  
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
              {filteredPoints.map((point) => (
                <motion.div
                  key={point.id}
                  className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 ${
                    point.status === 'active' ? 'text-morocco-blue' : 
                    point.status === 'maintenance' ? 'text-yellow-500' :
                    'text-gray-400'
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
                  onClick={() => setSelectedPoint(selectedPoint === point.id ? null : point.id)}
                >
                  {point.type === 'well' ? (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="white" />
                      <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  ) : point.type === 'tap' ? (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" fill="white" />
                      <path d="M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 15V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="white" />
                      <path d="M4 10H20" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 10V18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    </svg>
                  )}
                  
                  {/* Information tooltip */}
                  {selectedPoint === point.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-2 rounded-md shadow-lg z-10 w-48 text-gray-800 text-xs border border-morocco-blue/20">
                      <h3 className="font-bold text-morocco-blue mb-1">{point.name}</h3>
                      <div className="flex justify-between mb-1">
                        <span>النوع:</span> 
                        <span>{point.type === 'well' ? 'بئر' : point.type === 'tap' ? 'صنبور' : 'خزان'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الحالة:</span> 
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
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-morocco-blue"></div>
                <span className="text-sm text-gray-600">نقاط مياه نشطة</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-gray-600">تحت الصيانة</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span className="text-sm text-gray-600">نقاط مياه غير نشطة</span>
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
