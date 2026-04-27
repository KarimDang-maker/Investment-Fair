import { motion } from 'motion/react';
import { SectionContainer } from './ui/section-container';
import { GradientText } from './ui/gradient-text';
import { useLanguage } from '../contexts/LanguageContext';

// Logos partenaires (à remplacer par vos vrais logos)
const partners = [
  { name: 'Partner 1', logo: 'https://via.placeholder.com/200x80/059669/ffffff?text=Partner+1' },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/200x80/2563eb/ffffff?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/200x80/059669/ffffff?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/200x80/2563eb/ffffff?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/200x80/059669/ffffff?text=Partner+5' },
  { name: 'Partner 6', logo: 'https://via.placeholder.com/200x80/2563eb/ffffff?text=Partner+6' },
  { name: 'Partner 7', logo: 'https://via.placeholder.com/200x80/059669/ffffff?text=Partner+7' },
  { name: 'Partner 8', logo: 'https://via.placeholder.com/200x80/2563eb/ffffff?text=Partner+8' },
];

export default function PartnersSection() {
  const { t } = useLanguage();

  // Double les partenaires pour l'effet de boucle infinie
  const allPartners = [...partners, ...partners];

  return (
    <SectionContainer variant="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          <GradientText variant="premium">{t('partners.title')}</GradientText>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {t('partners.subtitle')}
        </p>
      </motion.div>

      {/* Scrolling Logos Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex gap-8 py-8 animate-scroll hover:pause-animation">
          {allPartners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </SectionContainer>
  );
}
