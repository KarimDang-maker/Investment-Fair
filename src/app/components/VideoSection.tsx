import { Link } from 'react-router-dom';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { SectionContainer } from './ui/section-container';
import { GradientText } from './ui/gradient-text';
import { useLanguage } from '../contexts/LanguageContext';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const { t } = useLanguage();
  const videoRef = useRef<HTMLDivElement>(null);

  // Lazy load video avec Intersection Observer
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Charger la vidéo quand elle devient visible
            setShouldLoadVideo(true);
            observer.disconnect(); // Ne charger qu'une fois
          }
        });
      },
      {
        rootMargin: '100px', // Charger 100px avant que la section soit visible
        threshold: 0.1,
      }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);

    // Analytics optionnel
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'video_play', {
        event_category: 'engagement',
        event_label: 'Salon de l\'Investisseur Video',
      });
    }
  };

  return (
    <SectionContainer variant="gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          {t('video.title').split(' ')[0]} <GradientText variant="premium">{t('video.title').split(' ').slice(1).join(' ')}</GradientText>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {t('video.subtitle')}
        </p>
      </motion.div>

      <motion.div
        ref={videoRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          {/* Video Container */}
          <div className="relative aspect-video bg-gradient-to-br from-emerald-900 to-blue-900">
            {!isPlaying ? (
              <>
                {/* Poster Image avec lazy loading */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-blue-600/90 flex items-center justify-center">
                  {/* Image de fond optionnelle (lazy loaded) */}
                  {shouldLoadVideo && (
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80&fit=crop"
                      alt="Event background"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                      loading="lazy"
                      decoding="async"
                    />
                  )}

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white rounded-full opacity-50"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center text-white px-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className="mb-8"
                    >
                      <button
                        onClick={handlePlayClick}
                        className="group/btn w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-emerald-500/50 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
                        aria-label="Play video"
                      >
                        <Play className="h-10 w-10 md:h-12 md:w-12 text-emerald-600 ml-2 group-hover/btn:text-blue-600 transition-colors" fill="currentColor" />
                      </button>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-2xl md:text-4xl font-bold mb-4"
                    >
                      {t('hero.title')}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto"
                    >
                      {t('video.subtitle')}
                    </motion.p>
                  </div>
                </div>
              </>
            ) : (
              /* Video Player - Lazy loaded seulement quand nécessaire */
              shouldLoadVideo && (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                  title={t('video.title')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )
            )}
          </div>

          {/* Gradient Overlay on Hover */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          )}
        </div>

        {/* CTA Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link to="/inscription">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              {t('video.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
