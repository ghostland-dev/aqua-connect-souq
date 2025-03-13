
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Language } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from '@/components/education/ResourceCard';
import { Book, Video, FileText, Users } from 'lucide-react';

// Categories and resources data
const categories = [
  { id: 'all', icon: Book },
  { id: 'waterConservation', icon: Video },
  { id: 'hygiene', icon: FileText },
  { id: 'community', icon: Users },
];

const resources = [
  {
    id: 1,
    title: 'الحفاظ على المياه: إرشادات للأسر',
    description: 'دليل شامل للعائلات حول كيفية الحفاظ على المياه في المنزل وتقليل الاستهلاك',
    category: 'waterConservation',
    imageSrc: 'https://images.unsplash.com/photo-1534009865085-4a5c7035fe8c?q=80&w=1974&auto=format&fit=crop',
    link: '/education/water-conservation-guide'
  },
  {
    id: 2,
    title: 'نظافة المياه وصحة الأسرة',
    description: 'معلومات أساسية حول كيفية الحفاظ على نظافة المياه لتحسين الصحة العامة للأسرة',
    category: 'hygiene',
    imageSrc: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2072&auto=format&fit=crop',
    link: '/education/water-hygiene'
  },
  {
    id: 3,
    title: 'مبادرات مجتمعية: كيفية تنظيم مشروع مائي',
    description: 'دليل خطوة بخطوة حول كيفية تنظيم وإدارة مشروع مجتمعي لتحسين الوصول إلى المياه',
    category: 'community',
    imageSrc: 'https://images.unsplash.com/photo-1594708767771-a5f97d21af11?q=80&w=2070&auto=format&fit=crop',
    link: '/education/community-project'
  },
  {
    id: 4,
    title: 'تقنيات الري الحديثة للمزارعين',
    description: 'نظرة عامة على تقنيات الري الحديثة التي تساعد على توفير المياه وزيادة المحاصيل',
    category: 'waterConservation',
    imageSrc: 'https://images.unsplash.com/photo-1500076898857-ad1ff4074429?q=80&w=2071&auto=format&fit=crop',
    link: '/education/irrigation-techniques'
  },
  {
    id: 5,
    title: 'المياه في المدارس: دليل المعلم',
    description: 'موارد تعليمية للمعلمين حول كيفية تثقيف الطلاب حول قضايا المياه',
    category: 'community',
    imageSrc: 'https://images.unsplash.com/photo-1610271340738-726e199f0258?q=80&w=2070&auto=format&fit=crop',
    link: '/education/school-water-guide'
  },
  {
    id: 6,
    title: 'معالجة المياه المنزلية البسيطة',
    description: 'طرق بسيطة وفعالة لمعالجة المياه في المنزل للاستخدام اليومي',
    category: 'hygiene',
    imageSrc: 'https://images.unsplash.com/photo-1581922814484-0b48460b7010?q=80&w=2070&auto=format&fit=crop',
    link: '/education/home-water-treatment'
  },
];

const Education = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-20 pb-16">
        {/* Hero Section with Moroccan Pattern Background */}
        <section className="relative py-16 overflow-hidden">
          {/* Moroccan Pattern Background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A96B7' fill-opacity='0.15'%3E%3Cpath d='M30 30h30v30H30z'/%3E%3Cpath d='M0 30h30v30H0z'/%3E%3Cpath d='M30 0h30v30H30z'/%3E%3Cpath d='M0 0h30v30H0z'/%3E%3C/g%3E%3Cg fill='%23C75F35' fill-opacity='0.1'%3E%3Cpath d='M15 15h30v30H15z'/%3E%3Cpath d='M0 15h15v30H0z'/%3E%3Cpath d='M45 15h15v30H45z'/%3E%3Cpath d='M15 0h30v15H15z'/%3E%3Cpath d='M15 45h30v15H15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              backgroundSize: "60px 60px"
            }}
          ></div>
          
          {/* Berber-inspired decorative elements */}
          <div className="absolute top-0 left-0 w-full h-6 bg-morocco-terracotta/30"></div>
          <div className="absolute top-6 left-0 w-full h-2 bg-morocco-olive/30"></div>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-morocco-terracotta/30"></div>
          <div className="absolute bottom-6 left-0 w-full h-2 bg-morocco-olive/30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="inline-block relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-morocco-terracotta"></div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-morocco-terracotta"></div>
                </div>
              </div>
              
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-6 text-morocco-terracotta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {getTranslation(language, 'educationResourcesTitle')}
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {language === 'ar' ? 'موارد تعليمية وتوعوية حول قضايا المياه للمجتمعات المحلية' : 
                 language === 'fr' ? 'Ressources éducatives et de sensibilisation sur les questions d\'eau pour les communautés locales' :
                 'Educational and awareness resources on water issues for local communities'}
              </motion.p>
              
              <div className="flex justify-center mt-8">
                <div className="w-24 h-1 bg-morocco-blue rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 relative">
          {/* Subtle background patterns */}
          <div 
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23C75F35' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')",
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-white shadow-md border border-morocco-sand rounded-lg p-1">
                  {categories.map((category) => {
                    const CategoryIcon = category.icon;
                    return (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className="px-5 py-3 data-[state=active]:bg-morocco-sand data-[state=active]:text-morocco-terracotta"
                      >
                        <CategoryIcon className="mr-2 h-4 w-4" />
                        <span className={`${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
                          {language === 'ar' ? 
                            category.id === 'all' ? 'الكل' : 
                            category.id === 'waterConservation' ? 'الحفاظ على المياه' :
                            category.id === 'hygiene' ? 'النظافة والصحة' : 'المبادرات المجتمعية' 
                          : language === 'fr' ?
                            category.id === 'all' ? 'Tout' : 
                            category.id === 'waterConservation' ? 'Conservation de l\'eau' :
                            category.id === 'hygiene' ? 'Hygiène' : 'Communauté'
                          :
                            category.id === 'all' ? 'All' : 
                            category.id === 'waterConservation' ? 'Water Conservation' :
                            category.id === 'hygiene' ? 'Hygiene' : 'Community'
                          }
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredResources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      title={resource.title}
                      description={resource.description}
                      imageSrc={resource.imageSrc}
                      category={language === 'ar' ? 
                        resource.category === 'waterConservation' ? 'الحفاظ على المياه' :
                        resource.category === 'hygiene' ? 'النظافة والصحة' : 'المبادرات المجتمعية'
                      : language === 'fr' ?
                        resource.category === 'waterConservation' ? 'Conservation de l\'eau' :
                        resource.category === 'hygiene' ? 'Hygiène' : 'Communauté'
                      :
                        resource.category === 'waterConservation' ? 'Water Conservation' :
                        resource.category === 'hygiene' ? 'Hygiene' : 'Community'
                      }
                      link={resource.link}
                    />
                  ))}
                </div>
              </TabsContent>

              {categories.filter(c => c.id !== 'all').map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map((resource) => (
                      <ResourceCard
                        key={resource.id}
                        title={resource.title}
                        description={resource.description}
                        imageSrc={resource.imageSrc}
                        category={language === 'ar' ? 
                          resource.category === 'waterConservation' ? 'الحفاظ على المياه' :
                          resource.category === 'hygiene' ? 'النظافة والصحة' : 'المبادرات المجتمعية'
                        : language === 'fr' ?
                          resource.category === 'waterConservation' ? 'Conservation de l\'eau' :
                          resource.category === 'hygiene' ? 'Hygiène' : 'Communauté'
                        :
                          resource.category === 'waterConservation' ? 'Water Conservation' :
                          resource.category === 'hygiene' ? 'Hygiene' : 'Community'
                        }
                        link={resource.link}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Education;
