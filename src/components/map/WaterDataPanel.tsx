
import React from 'react';
import { motion } from 'framer-motion';
import { getTranslation, Language } from '@/lib/i18n';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Filter, Search } from 'lucide-react';

interface WaterDataPanelProps {
  language: Language;
}

const WaterDataPanel: React.FC<WaterDataPanelProps> = ({ language }) => {
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

  // Exemples de données pour les rapports
  const waterStatusData = [
    { name: 'نشطة', value: 65, color: '#1A96B7' },
    { name: 'صيانة', value: 15, color: '#FFA500' },
    { name: 'غير نشطة', value: 20, color: '#FF6B6B' },
  ];

  const waterTypeData = [
    { name: 'آبار', value: 35, color: '#1A96B7' },
    { name: 'خزانات', value: 25, color: '#4CAF50' },
    { name: 'صنابير', value: 40, color: '#9C27B0' },
  ];

  const waterQualityData = [
    { name: 'يناير', quality: 85, quantity: 70 },
    { name: 'فبراير', quality: 82, quantity: 68 },
    { name: 'مارس', quality: 80, quantity: 65 },
    { name: 'أبريل', quality: 84, quantity: 67 },
    { name: 'مايو', quality: 87, quantity: 72 },
    { name: 'يونيو', quality: 85, quantity: 70 },
  ];

  // Données des points d'eau pour le tableau
  const waterPoints = [
    { id: 'WP001', name: 'البئر المركزي', type: 'بئر', status: 'نشط', quality: '90%', lastUpdate: '2023-08-10' },
    { id: 'WP002', name: 'خزان تيزنيت', type: 'خزان', status: 'نشط', quality: '85%', lastUpdate: '2023-08-12' },
    { id: 'WP003', name: 'صنبور القرية', type: 'صنبور', status: 'صيانة', quality: '60%', lastUpdate: '2023-08-01' },
    { id: 'WP004', name: 'بئر الشمال', type: 'بئر', status: 'غير نشط', quality: '0%', lastUpdate: '2023-07-15' },
    { id: 'WP005', name: 'خزان الجبل', type: 'خزان', status: 'نشط', quality: '95%', lastUpdate: '2023-08-14' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold text-gray-800 mb-4 md:mb-0"
        >
          {getTranslation(language, 'dataManagement')}
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="flex space-x-3"
        >
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter size={16} />
            <span>{getTranslation(language, 'filter')}</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Search size={16} />
            <span>{getTranslation(language, 'search')}</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download size={16} />
                <span>{getTranslation(language, 'download')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>PDF</DropdownMenuItem>
              <DropdownMenuItem>Excel</DropdownMenuItem>
              <DropdownMenuItem>CSV</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </div>

      <Tabs defaultValue="analytics">
        <TabsList className="mb-6">
          <TabsTrigger value="analytics">{getTranslation(language, 'analytics')}</TabsTrigger>
          <TabsTrigger value="data">{getTranslation(language, 'waterPoints')}</TabsTrigger>
          <TabsTrigger value="quality">{getTranslation(language, 'waterQuality')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="analytics">
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">حالة نقاط المياه</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={waterStatusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {waterStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">أنواع نقاط المياه</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={waterTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {waterTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">اتجاهات جودة وكمية المياه</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={waterQualityData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="quality" name="الجودة %" fill="#1A96B7" />
                  <Bar dataKey="quantity" name="الكمية %" fill="#FFA500" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="data">
          <motion.div variants={itemVariants}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>المعرف</TableHead>
                  <TableHead>الاسم</TableHead>
                  <TableHead>النوع</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الجودة</TableHead>
                  <TableHead>آخر تحديث</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {waterPoints.map((point) => (
                  <TableRow key={point.id}>
                    <TableCell>{point.id}</TableCell>
                    <TableCell>{point.name}</TableCell>
                    <TableCell>{point.type}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        point.status === 'نشط' ? 'bg-green-100 text-green-800' : 
                        point.status === 'صيانة' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {point.status}
                      </span>
                    </TableCell>
                    <TableCell>{point.quality}</TableCell>
                    <TableCell>{point.lastUpdate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="quality">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">تقرير جودة المياه الشهري</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={waterQualityData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quality" name="الجودة %" fill="#1A96B7" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="p-4 border border-morocco-blue-light rounded-lg bg-morocco-blue/5">
              <h3 className="text-lg font-semibold mb-2">نصائح لتحسين جودة المياه</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>تخزين المياه في أوعية نظيفة ومغطاة</li>
                <li>استخدام مرشحات المياه البسيطة للاستخدام المنزلي</li>
                <li>غلي المياه لمدة دقيقة واحدة على الأقل قبل الشرب</li>
                <li>تنظيف خزانات المياه المنزلية بانتظام</li>
                <li>الإبلاغ عن أي تغيير في لون أو رائحة المياه</li>
              </ul>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default WaterDataPanel;
