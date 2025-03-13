
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { getTranslation, Language } from '@/lib/i18n';
import LanguageSelector from '@/components/common/LanguageSelector';
import { Droplet } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: getTranslation(language, 'home'), path: '/' },
    { label: getTranslation(language, 'map'), path: '/map' },
    { label: getTranslation(language, 'dashboard'), path: '/dashboard' },
    { label: getTranslation(language, 'education'), path: '/education' },
    { label: getTranslation(language, 'about'), path: '/about' },
    { label: getTranslation(language, 'contact'), path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300 px-6 md:px-10 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Droplet className="h-8 w-8 text-morocco-blue" />
          <span className={cn(
            'font-display text-xl md:text-2xl font-bold',
            isScrolled ? 'text-morocco-blue' : 'text-morocco-blue'
          )}>
            AquaConnect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1 ml-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                    isScrolled
                      ? 'text-gray-700 hover:text-morocco-blue hover:bg-gray-100'
                      : 'text-gray-700 hover:text-morocco-blue hover:bg-white/20'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSelector
            currentLang={language}
            onLanguageChange={onLanguageChange}
          />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <LanguageSelector
            currentLang={language}
            onLanguageChange={onLanguageChange}
          />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-2 p-2 rounded-md"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t mt-4"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-morocco-blue hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
