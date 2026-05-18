'use client';

import { useLanguage, type Language } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '/images/uk.png' }, // Ensure these assets exist
    { code: 'fr', label: 'Français', flag: '/images/france.png' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative">
      {/* Trigger Button based on image_2e7437.png */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 group focus:outline-none"
      >
        <div className="relative w-8 h-8 overflow-hidden rounded-full border border-gray-100 shadow-sm transition-transform group-hover:scale-105">
          <Image
            src={currentLang.flag}
            alt={currentLang.label}
            fill
            className="object-cover"
          />
        </div>
        <ChevronDown 
          size={18} 
          className={`text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-3 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-110"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-tight text-gray-700">
                  {lang.code}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;