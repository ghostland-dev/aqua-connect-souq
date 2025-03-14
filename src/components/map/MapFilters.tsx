
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Layers, Filter } from 'lucide-react';

interface MapFiltersProps {
  activeLayer: string;
  setActiveLayer: (layer: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
}

const MapFilters: React.FC<MapFiltersProps> = ({ 
  activeLayer, 
  setActiveLayer, 
  filterStatus, 
  setFilterStatus 
}) => {
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
  );
};

export default MapFilters;
