
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-morocco-blue to-morocco-blue-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {getTranslation(language, 'educationResourcesTitle')}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {language === 'ar' ? 'موارد تعليمية وتوعوية حول قضايا المياه للمجتمعات المحلية' : 
                 language === 'fr' ? 'Ressources éducatives et de sensibilisation sur les questions d\'eau pour les communautés locales' :
                 'Educational and awareness resources on water issues for local communities'}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-white shadow-sm">
                  {categories.map((category) => {
                    const CategoryIcon = category.icon;
                    return (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className="px-5 py-2"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
