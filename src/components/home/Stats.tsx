
import React from 'react';
import { motion } from 'framer-motion';
import { getTranslation, Language } from '@/lib/i18n';
import { useCounterAnimation } from '@/lib/animations';

interface StatsProps {
  language: Language;
}

const Stats: React.FC<StatsProps> = ({ language }) => {
  const communities = useCounterAnimation(142);
  const accessImproved = useCounterAnimation(65, 2, 0.2, (val) => `${Math.round(val)}%`);
  const waterSaved = useCounterAnimation(2500, 2.5, 0.4, (val) => `${Math.round(val / 100) / 10}M`);

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

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-100 to-transparent"></div>
      
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
            الإحصائيات
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="section-title max-w-xl mx-auto text-center after:right-1/2 after:translate-x-1/2"
          >
            {getTranslation(language, 'statsTitle')}
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Stat 1 */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-xl p-8 text-center relative overflow-hidden group card-hover"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-morocco-blue/10 rounded-full mx-auto mb-6">
                <svg className="w-8 h-8 text-morocco-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.9999 11C19.9999 15.9706 16.4179 20 11.9999 20C7.58187 20 3.99994 15.9706 3.99994 11C3.99994 6.02944 7.58187 2 11.9999 2C16.4179 2 19.9999 6.02944 19.9999 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <motion.span
                ref={communities.ref}
                className="text-4xl font-bold text-gray-900 mb-2 block"
              >
                {communities.displayValue}
              </motion.span>
              <p className="text-gray-600 text-lg">{getTranslation(language, 'communitiesServed')}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-morocco-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-xl p-8 text-center relative overflow-hidden group card-hover"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-morocco-blue/10 rounded-full mx-auto mb-6">
                <svg className="w-8 h-8 text-morocco-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <motion.span
                ref={accessImproved.ref}
                className="text-4xl font-bold text-gray-900 mb-2 block"
              >
                {accessImproved.displayValue}
              </motion.span>
              <p className="text-gray-600 text-lg">{getTranslation(language, 'waterAccessImproved')}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-morocco-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-xl p-8 text-center relative overflow-hidden group card-hover"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-morocco-blue/10 rounded-full mx-auto mb-6">
                <svg className="w-8 h-8 text-morocco-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C10 22 8.50005 21 8.00005 20.5C7.50005 20 6.00001 17.5 6.00001 17.5C6.00001 17.5 3 17.5 2 16.5C1 15.5 1 14 2 13C3 12 5.99999 12 5.99999 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C14 22 15.5 21 16 20.5C16.5 20 18 17.5 18 17.5C18 17.5 21 17.5 22 16.5C23 15.5 23 14 22 13C21 12 18 12 18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12C6 12 6 3 12 3C18 3 18 12 18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <motion.span
                ref={waterSaved.ref}
                className="text-4xl font-bold text-gray-900 mb-2 block"
              >
                {waterSaved.displayValue}
              </motion.span>
              <p className="text-gray-600 text-lg">{getTranslation(language, 'waterSaved')}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-morocco-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
