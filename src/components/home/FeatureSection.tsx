
import React from 'react';
import { motion } from 'framer-motion';
import { getTranslation, Language } from '@/lib/i18n';

interface FeatureSectionProps {
  language: Language;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ language }) => {
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

  const features = [
    {
      title: getTranslation(language, 'dataManagement'),
      description: getTranslation(language, 'dataManagementDesc'),
      icon: (
        <svg className="w-8 h-8 text-morocco-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 17H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: getTranslation(language, 'education'),
      description: getTranslation(language, 'educationDesc'),
      icon: (
        <svg className="w-8 h-8 text-morocco-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: getTranslation(language, 'innovation'),
      description: getTranslation(language, 'innovationDesc'),
      icon: (
        <svg className="w-8 h-8 text-morocco-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.9965 11H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.9955 11H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.99451 11H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: getTranslation(language, 'community'),
      description: getTranslation(language, 'communityDesc'),
      icon: (
        <svg className="w-8 h-8 text-morocco-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21.25H7C3.5 21.25 2 19.75 2 16.25V7.75C2 4.25 3.5 2.75 7 2.75H17C20.5 2.75 22 4.25 22 7.75V16.25C22 19.75 20.5 21.25 17 21.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 8.25C15.1 8.25 16 7.35 16 6.25C16 5.15 15.1 4.25 14 4.25C12.9 4.25 12 5.15 12 6.25C12 7.35 12.9 8.25 14 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 19.25C11.1 19.25 12 18.35 12 17.25C12 16.15 11.1 15.25 10 15.25C8.9 15.25 8 16.15 8 17.25C8 18.35 8.9 19.25 10 19.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 13.25H17C16.59 13.25 16.25 12.91 16.25 12.5C16.25 12.09 16.59 11.75 17 11.75H18C18.41 11.75 18.75 12.09 18.75 12.5C18.75 12.91 18.41 13.25 18 13.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 13.25H6C5.59 13.25 5.25 12.91 5.25 12.5C5.25 12.09 5.59 11.75 6 11.75H7C7.41 11.75 7.75 12.09 7.75 12.5C7.75 12.91 7.41 13.25 7 13.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 8.25C15.1 8.25 16 7.35 16 6.25C16 5.15 15.1 4.25 14 4.25C12.9 4.25 12 5.15 12 6.25C12 7.35 12.9 8.25 14 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 19.25C11.1 19.25 12 18.35 12 17.25C12 16.15 11.1 15.25 10 15.25C8.9 15.25 8 16.15 8 17.25C8 18.35 8.9 19.25 10 19.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12.5H8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block bg-morocco-blue/10 text-morocco-blue rounded-full px-4 py-1 text-sm font-semibold mb-4"
          >
            خدماتنا
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="section-title max-w-xl mx-auto text-center after:right-1/2 after:translate-x-1/2"
          >
            {getTranslation(language, 'featuresTitle')}
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group card-hover"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-morocco-blue/10 rounded-full mb-6 group-hover:bg-morocco-blue/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
