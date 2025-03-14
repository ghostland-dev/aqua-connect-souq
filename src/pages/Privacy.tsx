
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Language } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';
import { Shield, CheckSquare, AlertTriangle } from 'lucide-react';

const Privacy = () => {
  const [language, setLanguage] = useState<Language>('ar');

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
                سياسة الخصوصية
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                كيفية حماية بياناتك وخصوصيتك
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

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Introduction */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-morocco-blue ml-2" />
                    <h2 className="text-2xl font-bold text-gray-800">مقدمة</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    تلتزم منصة AquaConnect بحماية خصوصية وأمان البيانات الشخصية لمستخدميها. تم تصميم سياسة الخصوصية هذه لتوضيح كيفية جمع واستخدام وحماية المعلومات التي يتم جمعها من خلال استخدام التطبيق والخدمات المرتبطة به. نحن نأخذ خصوصيتك على محمل الجد ونلتزم بالامتثال لجميع قوانين ولوائح حماية البيانات المعمول بها.
                  </p>
                </motion.div>

                {/* Data Collection */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <CheckSquare className="h-6 w-6 text-morocco-blue ml-2" />
                    <h2 className="text-2xl font-bold text-gray-800">البيانات التي نجمعها</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    قد نقوم بجمع أنواع مختلفة من المعلومات عند استخدامك لمنصة AquaConnect، بما في ذلك:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mr-6">
                    <li>معلومات التسجيل: الاسم، البريد الإلكتروني، رقم الهاتف، والموقع الجغرافي</li>
                    <li>بيانات الموقع: لتحديد نقاط المياه القريبة وتوفير خدمات مخصصة</li>
                    <li>معلومات الاستخدام: كيفية تفاعلك مع التطبيق والخدمات</li>
                    <li>التقارير والملاحظات: المعلومات التي تقدمها عند الإبلاغ عن مشكلة في نقاط المياه</li>
                    <li>البيانات الفنية: معلومات الجهاز، المتصفح، ونظام التشغيل</li>
                  </ul>
                </motion.div>

                {/* How We Use Data */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <CheckSquare className="h-6 w-6 text-morocco-blue ml-2" />
                    <h2 className="text-2xl font-bold text-gray-800">كيفية استخدام البيانات</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    نستخدم المعلومات التي نجمعها للأغراض التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mr-6">
                    <li>توفير وتحسين خدمات إدارة المياه في المناطق المستهدفة</li>
                    <li>إرسال تحديثات وإشعارات مهمة حول نقاط المياه والصيانة</li>
                    <li>تحليل أنماط استخدام المياه لتحسين الإدارة واتخاذ قرارات أفضل</li>
                    <li>الاستجابة للاستفسارات والشكاوى المتعلقة بالخدمة</li>
                    <li>تطوير وتحسين المنصة والخدمات المقدمة</li>
                  </ul>
                </motion.div>

                {/* Data Security */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-morocco-blue ml-2" />
                    <h2 className="text-2xl font-bold text-gray-800">أمان البيانات</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    نحن نتخذ جميع التدابير المعقولة لحماية بياناتك من الوصول غير المصرح به أو الاستخدام غير المناسب. نستخدم تقنيات التشفير الحديثة وأفضل ممارسات الأمان الصناعية لضمان سرية وسلامة معلوماتك. ومع ذلك، لا يمكن ضمان أمان البيانات المرسلة عبر الإنترنت بشكل كامل، لذا فإن أي معلومات ترسلها تكون على مسؤوليتك الخاصة.
                  </p>
                </motion.div>

                {/* Data Sharing */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-morocco-blue ml-2" />
                    <h2 className="text-2xl font-bold text-gray-800">مشاركة البيانات</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة. قد نشارك بياناتك في الحالات التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mr-6">
                    <li>مع شركاء موثوقين يساعدوننا في تشغيل المنصة وتقديم الخدمات</li>
                    <li>مع السلطات المحلية المسؤولة عن إدارة المياه لتحسين الخدمات</li>
                    <li>عندما يكون ذلك مطلوباً بموجب القانون أو إجراء قانوني</li>
                    <li>لحماية حقوقنا أو ممتلكاتنا أو سلامة مستخدمينا</li>
                  </ul>
                </motion.div>

                {/* Contact Information */}
                <motion.div variants={itemVariants} className="border-t pt-6 mt-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">معلومات الاتصال</h2>
                  <p className="text-gray-600 leading-relaxed">
                    إذا كانت لديك أسئلة أو استفسارات حول سياسة الخصوصية أو ممارسات البيانات لدينا، يرجى التواصل معنا على:
                  </p>
                  <p className="mt-2 font-semibold">البريد الإلكتروني: privacy@aquaconnect.ma</p>
                </motion.div>

                {/* Last Updated */}
                <motion.div variants={itemVariants} className="text-sm text-gray-500 mt-8 text-center">
                  آخر تحديث: 1 يونيو 2023
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Privacy;
