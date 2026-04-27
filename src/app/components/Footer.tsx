import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
                >
                  <img 
                    src="/src/app/assets/images/logo7.png" 
                    alt="Logo SI" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
              <span className="font-bold">{t('hero.title')}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.about')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@gieaorg.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+237 677 166 859</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{t('hero.location')}</span>
              </div>
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.event')}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{t('footer.date')}</p>
              <p>{t('footer.location')}</p>
              <p>{t('footer.free')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 {t('hero.title')}. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
