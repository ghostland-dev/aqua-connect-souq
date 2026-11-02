
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Language } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { 
  DropletIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  SettingsIcon,
  Droplet 
} from 'lucide-react';

const Dashboard = () => {
  const [language, setLanguage] = useState<Language>('ar');

  // Données pour les graphiques
  const waterConsumptionData = [
    { name: 'يناير', value: 120 },
    { name: 'فبراير', value: 135 },
    { name: 'مارس', value: 110 },
    { name: 'أبريل', value: 95 },
    { name: 'مايو', value: 140 },
    { name: 'يونيو', value: 160 },
  ];

  const waterQualityData = [
    { name: 'ممتاز', value: 65 },
    { name: 'جيد', value: 20 },
    { name: 'متوسط', value: 10 },
    { name: 'ضعيف', value: 5 },
  ];

  const COLORS = ['#1A96B7', '#27c4a8', '#FFC107', '#ef4444'];

  const statsData = [
    { 
      title: 'نقاط المياه النشطة',
      value: '128',
      icon: <Droplet className="h-8 w-8 text-morocco-blue" />,
      change: '+12%',
      trend: 'up'
    },
    { 
      title: 'تقارير الأعطال',
      value: '23',
      icon: <AlertTriangleIcon className="h-8 w-8 text-yellow-500" />,
      change: '-8%',
      trend: 'down'
    },
    { 
      title: 'معدل استهلاك المياه',
      value: '1,243 لتر',
      icon: <DropletIcon className="h-8 w-8 text-morocco-blue-dark" />,
      change: '+3%',
      trend: 'up'
    },
    { 
      title: 'جودة المياه',
      value: '92%',
      icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />,
      change: '+1%',
      trend: 'up'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-20 pb-16">
        {/* Hero Section with Moroccan Pattern Background */}
        <section className="bg-gradient-to-r from-morocco-blue to-morocco-blue-dark text-white py-12 relative overflow-hidden">
          {/* Decorative Berber-inspired pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '30px'
               }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                لوحة التحكم
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                تحليل بيانات استخدام المياه والإحصاءات المهمة
              </motion.p>
            </div>
          </div>
          
          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-6">
              <path fill="#F9FAFB" fillOpacity="1" d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,42.7C1120,43,1280,21,1360,10.7L1440,0L1440,50L1360,50C1280,50,1120,50,960,50C800,50,640,50,480,50C320,50,160,50,80,50L0,50Z"></path>
            </svg>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {statsData.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">
                        {stat.title}
                      </CardTitle>
                      {stat.icon}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <p className={`text-xs flex items-center ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.trend === 'up' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v3H7a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        )}
                        <span>{stat.change} منذ الشهر الماضي</span>
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Water Consumption Chart */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>استهلاك المياه الشهري</CardTitle>
                    <CardDescription>متوسط استهلاك المياه في اللتر خلال الأشهر الستة الماضية</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={waterConsumptionData}
                          margin={{
                            top: 20,
                            right: 10,
                            left: 10,
                            bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis 
                            axisLine={false}
                            tickLine={false}
                          />
                          <Tooltip />
                          <Bar dataKey="value" fill="#1A96B7" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Water Quality Chart */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>جودة المياه</CardTitle>
                    <CardDescription>تصنيف جودة المياه بناءً على التقارير الميدانية</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={waterQualityData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {waterQualityData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Action Items */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-t-4 border-morocco-blue shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <SettingsIcon className="w-5 h-5 mr-2 text-morocco-blue" />
                    الإجراءات المقترحة
                  </CardTitle>
                  <CardDescription>
                    إجراءات مقترحة بناءً على تحليل البيانات الحالية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>إرسال فريق صيانة إلى نقاط المياه التي تم الإبلاغ عن أعطال فيها (5 نقاط)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>فحص جودة المياه في المناطق التي سجلت انخفاضًا في معدلات الجودة خلال الشهر الماضي</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>تنظيم حملة توعية في منطقة تافراوت بسبب ارتفاع معدلات استهلاك المياه</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>تقييم حالة خزانات المياه وجدولة الصيانة الدورية</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Dashboard;
