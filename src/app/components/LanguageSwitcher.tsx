import { Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'fr'
            ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        FR
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </motion.button>
    </div>
  );
}

export function LanguageSwitcherMobile() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
      <Globe className="h-5 w-5 text-gray-600" />
      <div className="flex items-center gap-2 flex-1">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('fr')}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            language === 'fr'
              ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md'
              : 'bg-white text-gray-600 hover:text-gray-900'
          }`}
        >
          Français
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('en')}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md'
              : 'bg-white text-gray-600 hover:text-gray-900'
          }`}
        >
          English
        </motion.button>
      </div>
    </div>
  );
}
