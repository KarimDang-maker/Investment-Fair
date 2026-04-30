import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Lightbulb, CheckCircle, ArrowRight, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { SectionContainer } from './ui/section-container';
import { AnimatedCard } from './ui/animated-card';
import { GradientText } from './ui/gradient-text';
import { IconBadge } from './ui/icon-badge';
import { HeroPorteurs } from './ui/hero-section';
import { useLanguage } from '../contexts/LanguageContext';

export default function EntrepreneursPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section avec image de fond */}
      <HeroPorteurs>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-md border border-white/30 shadow-lg mb-8"
          >
            <Rocket className="h-5 w-5 text-yellow-300" />
            <span className="font-semibold">{t('hero.entrepreneurs.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            {t('hero.entrepreneurs.title').split(' ')[0]} <span className="underline decoration-yellow-300 decoration-4">{t('hero.entrepreneurs.title').split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl mb-10 text-emerald-50 max-w-3xl mx-auto font-light"
          >
            {t('hero.entrepreneurs.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/inscription?type=entrepreneur">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50 hover:scale-105 transition-all duration-300 shadow-2xl group">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t('hero.cta.entrepreneur')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </HeroPorteurs>

      {/* Why Participate */}
      <SectionContainer className="-mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            {t('entrepreneurs.why.title').split(' ')[0]} <GradientText variant="primary">{t('entrepreneurs.why.title').split(' ').slice(1).join(' ')}</GradientText>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('entrepreneurs.why.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatedCard variant="emerald" delay={0} className="group">
            <div className="mb-6">
              <IconBadge icon={<TrendingUp />} variant="emerald" size="lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
              {t('entrepreneurs.growth.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('entrepreneurs.growth.desc')}
            </p>
          </AnimatedCard>

          <AnimatedCard variant="blue" delay={0.1} className="group">
            <div className="mb-6">
              <IconBadge icon={<Users />} variant="blue" size="lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
              {t('entrepreneurs.ecosystem.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('entrepreneurs.ecosystem.desc')}
            </p>
          </AnimatedCard>

          <AnimatedCard variant="emerald" delay={0.2} className="group">
            <div className="mb-6">
              <IconBadge icon={<Target />} variant="emerald" size="lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
              {t('entrepreneurs.solutions.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('entrepreneurs.solutions.desc')}
            </p>
          </AnimatedCard>

          <AnimatedCard variant="blue" delay={0.3} className="group">
            <div className="mb-6">
              <IconBadge icon={<Lightbulb />} variant="blue" size="lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
              {t('entrepreneurs.visibility.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('entrepreneurs.visibility.desc')}
            </p>
          </AnimatedCard>
        </div>
      </SectionContainer>

      {/* Opportunities */}
      <SectionContainer variant="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t('entrepreneurs.benefits.title').split(' ').slice(0, 3).join(' ')} <GradientText variant="primary">{t('entrepreneurs.benefits.title').split(' ').slice(3).join(' ')}</GradientText>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('entrepreneurs.benefits.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'entrepreneurs.benefits.pitch',
            'entrepreneurs.benefits.investors',
            'entrepreneurs.benefits.networking',
            'entrepreneurs.benefits.expertise',
            'entrepreneurs.benefits.services',
            'entrepreneurs.benefits.visibility'
          ].map((itemKey, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <p className="text-gray-700 font-medium">{t(itemKey)}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-emerald-50 opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-900">{t('cta.limited')}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            {t('entrepreneurs.cta.title').split(' ').slice(0, 5).join(' ')} <GradientText variant="primary">{t('entrepreneurs.cta.title').split(' ').slice(5).join(' ')}</GradientText>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-light">
            {t('entrepreneurs.cta.subtitle')}
          </p>

          <Link to="/inscription?type=entrepreneur">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <Rocket className="mr-2 h-5 w-5 group-hover:-rotate-12 transition-transform" />
              {t('entrepreneurs.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <p className="text-sm text-gray-500 mt-6">
            {t('entrepreneurs.cta.features')}
          </p>
        </motion.div>
      </SectionContainer>
    </div>
  );
}
