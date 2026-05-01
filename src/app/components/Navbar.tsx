import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import LanguageSwitcher, { LanguageSwitcherMobile } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/porteurs', label: t('nav.porteurs') },
    { path: '/entrepreneurs', label: t('nav.pme') },
    { path: '/investisseurs', label: t('nav.investisseurs') },
    { path: '/programme', label: t('nav.programme') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
            >
              <img 
                src="/src/app/assets/images/logo7.png" 
                alt="Logo SI" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-bold text-gray-900 text-lg group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                Salon de l'Investisseur
              </span>
              <p className="text-xs text-gray-500">Yaoundé 2026</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 rounded-xl transition-all group"
              >
                <span
                  className={`relative z-10 ${
                    isActive(link.path)
                      ? 'font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent'
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {!isActive(link.path) && (
                  <div className="absolute inset-0 bg-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link to="/inscription">
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                {t('nav.register')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-emerald-50 to-blue-50 font-semibold text-emerald-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Language Switcher Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2"
                >
                  <LanguageSwitcherMobile />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                  className="pt-2"
                >
                  <Link to="/inscription" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                      <Sparkles className="mr-2 h-4 w-4" />
                      {t('nav.register')}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
