
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
      className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-morocco-sand"
      whileHover={{ y: -5 }}
    >
      {/* Moroccan-style decorative border */}
      <div className="relative h-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-morocco-terracotta to-morocco-blue z-10"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Decorative Berber-inspired corner element */}
        <div className="absolute top-2 right-2 w-8 h-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-morocco-sand opacity-80">
            <path fill="currentColor" d="M12 2L2 12h3v8h14v-8h3L12 2zm-1 15h2v-5h-2v5zm0-7h2V8h-2v2z"/>
          </svg>
        </div>
        
        {/* Category badge with moroccan style */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-block bg-morocco-terracotta/90 text-white text-xs py-1 px-3 rounded-full font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 bg-white">
        <h3 className="text-lg font-semibold mb-2 text-morocco-terracotta">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Moroccan-style link button */}
        <a 
          href={link}
          className="inline-flex items-center text-morocco-blue font-medium hover:text-morocco-blue-dark transition-colors group/link"
        >
          اقرأ المزيد
          <svg 
            className="w-5 h-5 inline-block mr-1 rtl:transform rtl:rotate-180 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        
        {/* Decorative Moroccan pattern element at bottom */}
        <div className="w-full h-1 mt-4 bg-gradient-to-r from-morocco-sand via-morocco-olive to-morocco-sand rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
