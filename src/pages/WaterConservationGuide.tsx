
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Language } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Droplet, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const WaterConservationGuide = () => {
  const [language, setLanguage] = useState<Language>('ar');

  // Content for the guide based on language
  const content = {
    ar: {
      title: 'الحفاظ على المياه: إرشادات للأسر',
      intro: 'دليل شامل للعائلات حول كيفية الحفاظ على المياه في المنزل وتقليل الاستهلاك',
      sections: [
        {
          title: 'لماذا يجب الحفاظ على المياه؟',
          content: 'المياه مورد ثمين ومحدود، خاصة في المناطق الجافة مثل جنوب شرق المغرب. من خلال الحفاظ على المياه، نساعد في ضمان توفر إمدادات كافية للجميع وللأجيال القادمة.'
        },
        {
          title: 'نصائح للحفاظ على المياه في المنزل',
          content: 'هناك طرق عديدة يمكن للأسر من خلالها توفير المياه في المنزل، بما في ذلك إصلاح الصنابير المتسربة، واستخدام أجهزة موفرة للمياه، وجمع مياه الأمطار للري.'
        },
        {
          title: 'كيفية إعادة استخدام المياه الرمادية',
          content: 'المياه الرمادية هي المياه المستعملة من الحمامات والمغاسل والغسالات. يمكن إعادة استخدام هذه المياه بأمان لري الحدائق أو تنظيف الأسطح الخارجية.'
        }
      ],
      tips: [
        'أغلق الصنبور أثناء غسل الأسنان',
        'استحم لفترة أقصر',
        'اغسل الملابس بأحمال كاملة فقط',
        'ضع دلوًا تحت الدش لجمع المياه أثناء انتظار تسخينها',
        'استخدم غسالة الصحون فقط عندما تكون ممتلئة'
      ],
      backToResources: 'العودة إلى الموارد التعليمية',
      downloadGuide: 'تحميل الدليل الكامل (PDF)'
    },
    fr: {
      title: 'Conservation de l\'eau: Guide pour les familles',
      intro: 'Un guide complet pour les familles sur comment économiser l\'eau à la maison et réduire la consommation',
      sections: [
        {
          title: 'Pourquoi économiser l\'eau?',
          content: 'L\'eau est une ressource précieuse et limitée, surtout dans les zones arides comme le sud-est du Maroc. En économisant l\'eau, nous contribuons à garantir des approvisionnements suffisants pour tous et pour les générations futures.'
        },
        {
          title: 'Conseils pour économiser l\'eau à la maison',
          content: 'Il existe de nombreuses façons pour les familles d\'économiser l\'eau à la maison, notamment en réparant les robinets qui fuient, en utilisant des appareils économes en eau et en collectant l\'eau de pluie pour l\'arrosage.'
        },
        {
          title: 'Comment réutiliser les eaux grises',
          content: 'Les eaux grises sont les eaux usées provenant des douches, des lavabos et des machines à laver. Ces eaux peuvent être réutilisées en toute sécurité pour arroser les jardins ou nettoyer les surfaces extérieures.'
        }
      ],
      tips: [
        'Fermez le robinet pendant le brossage des dents',
        'Prenez des douches plus courtes',
        'Ne faites fonctionner la machine à laver que lorsqu\'elle est pleine',
        'Placez un seau sous la douche pour recueillir l\'eau pendant qu\'elle chauffe',
        'N\'utilisez le lave-vaisselle que lorsqu\'il est plein'
      ],
      backToResources: 'Retour aux ressources éducatives',
      downloadGuide: 'Télécharger le guide complet (PDF)'
    },
    en: {
      title: 'Water Conservation: Guidelines for Families',
      intro: 'A comprehensive guide for families on how to conserve water at home and reduce consumption',
      sections: [
        {
          title: 'Why Conserve Water?',
          content: 'Water is a precious and limited resource, especially in arid regions like southeastern Morocco. By conserving water, we help ensure adequate supplies for everyone and for future generations.'
        },
        {
          title: 'Tips for Saving Water at Home',
          content: 'There are many ways families can save water at home, including fixing leaky faucets, using water-efficient appliances, and collecting rainwater for irrigation.'
        },
        {
          title: 'How to Reuse Greywater',
          content: 'Greywater is the used water from showers, sinks, and washing machines. This water can be safely reused for watering gardens or cleaning outdoor surfaces.'
        }
      ],
      tips: [
        'Turn off the tap while brushing teeth',
        'Take shorter showers',
        'Only wash clothes with full loads',
        'Put a bucket under the shower to collect water while waiting for it to heat up',
        'Only use the dishwasher when it\'s full'
      ],
      backToResources: 'Back to Education Resources',
      downloadGuide: 'Download Full Guide (PDF)'
    }
  };

  const langContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-morocco-blue to-morocco-blue-dark text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link to="/education" className="inline-flex items-center text-white hover:text-gray-200 transition-colors">
                  <ArrowLeft className={`h-5 w-5 ${language === 'ar' ? 'ml-2 transform rotate-180' : 'mr-2'}`} />
                  <span>{langContent.backToResources}</span>
                </Link>
              </div>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {langContent.title}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {langContent.intro}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    {langContent.sections.map((section, idx) => (
                      <div key={idx} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="md:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <Droplet className="h-6 w-6 text-morocco-blue mr-2" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          {language === 'ar' ? 'نصائح سريعة' : 
                           language === 'fr' ? 'Conseils rapides' : 'Quick Tips'}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {langContent.tips.map((tip, idx) => (
                          <li key={idx} className="flex">
                            <span className="text-morocco-blue mr-2">•</span>
                            <span className="text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <Button className="w-full bg-morocco-blue hover:bg-morocco-blue-dark">
                          <Download className="h-4 w-4 mr-2" />
                          {langContent.downloadGuide}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'ar' ? 'شارك هذا المورد' : 
                     language === 'fr' ? 'Partagez cette ressource' : 'Share this resource'}
                  </h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">WhatsApp</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default WaterConservationGuide;
