
import React from 'react';
import { motion } from 'framer-motion';

interface ResourceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  imageSrc,
  category,
  link,
}) => {
  return (
    <motion.div
      className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 card-hover border border-gray-100"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-3 right-3">
          <span className="inline-block bg-morocco-blue/90 text-white text-xs py-1 px-2 rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <a 
          href={link}
          className="inline-block text-morocco-blue font-medium hover:text-morocco-blue-dark transition-colors"
        >
          اقرأ المزيد
          <svg 
            className="w-4 h-4 inline-block mr-1 rtl:transform rtl:rotate-180" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
