import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
  overlayOpacity?: number;
  minHeight?: string;
}

/**
 * Composant Hero Section réutilisable avec support d'image de fond
 *
 * @param backgroundImage - URL de l'image de fond (optionnel)
 * @param gradientFrom - Couleur de départ du gradient (défaut: emerald-600)
 * @param gradientTo - Couleur de fin du gradient (défaut: blue-600)
 * @param overlayOpacity - Opacité de l'overlay (0-100, défaut: 90)
 * @param minHeight - Hauteur minimale (défaut: auto)
 * @param className - Classes CSS supplémentaires
 */
export function HeroSection({
  children,
  backgroundImage,
  gradientFrom = 'emerald-600',
  gradientTo = 'blue-600',
  className = '',
  overlayOpacity = 90,
  minHeight = 'auto',
}: HeroSectionProps) {
  return (
    <section
      className={`relative text-white py-16 md:py-24 lg:py-32 px-4 overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {/* Background Image (optionnel) */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'scroll', // Bon pour la performance mobile
          }}
        >
          {/* Lazy loading hint via CSS */}
          <img
            src={backgroundImage}
            alt=""
            className="sr-only"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, rgb(var(--color-from)), rgb(var(--color-to)))`,
          opacity: overlayOpacity / 100,
          // Gradient colors mapping
          '--color-from': gradientFrom === 'orange-600' ? '249, 115, 22' : gradientFrom === 'emerald-600' ? '5, 150, 105' : gradientFrom === 'blue-600' ? '37, 99, 235' : '5, 150, 105',
          '--color-to': gradientTo === 'orange-800' ? '146, 64, 14' : gradientTo === 'emerald-800' ? '4, 120, 87' : gradientTo === 'blue-800' ? '30, 58, 138' : '4, 120, 87',
        } as React.CSSProperties}
      ></div>

      {/* Pattern Overlay (optionnel - décoratif) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-2xl animate-spin-slow" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rotate-45 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-4 border-white rounded-lg animate-spin-slow" style={{ animationDuration: '15s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Wave Separator (bottom) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,100 1440,100 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

/**
 * Variantes prédéfinies de Hero
 */

// Hero pour la page Porteurs de projets
export function HeroPorteurs({ children }: { children: ReactNode }) {
  return (
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&fit=crop" // Photo d'équipe entrepreneuriale
      gradientFrom="emerald-600"
      gradientTo="emerald-800"
      overlayOpacity={85}
    >
      {children}
    </HeroSection>
  );
}

// Hero pour la page Entrepreneurs/PME
export function HeroEntrepreneurs({ children }: { children: ReactNode }) {
  return (
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&fit=crop" // Photo TPE/PME - small business workspace
      gradientFrom="blue-600"
      gradientTo="blue-800"
      overlayOpacity={90}
    >
      {children}
    </HeroSection>
  );
}

// Hero pour la page Investisseurs
export function HeroInvestisseurs({ children }: { children: ReactNode }) {
  return (
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80&fit=crop" // Photo business/finance
      gradientFrom="blue-600"
      gradientTo="blue-800"
      overlayOpacity={85}
    >
      {children}
    </HeroSection>
  );
}

// Hero pour la page d'accueil
export function HeroHome({ children }: { children: ReactNode }) {
  return (
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80&fit=crop" // Photo networking/événement
      gradientFrom="emerald-600"
      gradientTo="blue-600"
      overlayOpacity={90}
    >
      {children}
    </HeroSection>
  );
}
