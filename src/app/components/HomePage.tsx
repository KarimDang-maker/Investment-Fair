import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Handshake, Calendar, MapPin, ArrowRight, Sparkles, Target, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import VideoSection from './VideoSection';
import PartnersSection from './PartnersSection';
import { HeroHome } from './ui/hero-section';
import { Modal } from './ui/modal';

import { Button } from './ui/button';
import { SectionContainer } from './ui/section-container';
import { AnimatedCard } from './ui/animated-card';
import { GradientText } from './ui/gradient-text';
import { IconBadge } from './ui/icon-badge';
import { StatsCounter } from './ui/stats-counter';

type ModalContent = 'pitch' | 'networking' | 'funding' | null;

export default function HomePage() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setModalContent(null), 300);
  };

  const renderModalContent = () => {
    if (!modalContent) return null;

    const contentMap = {
      pitch: {
        title: t('modal.pitch.title'),
        content: t('modal.pitch.content'),
        featuresTitle: t('modal.pitch.features.title'),
        features: [
          t('modal.pitch.feature1'),
          t('modal.pitch.feature2'),
          t('modal.pitch.feature3'),
          t('modal.pitch.feature4'),
        ],
      },
      networking: {
        title: t('modal.networking.title'),
        content: t('modal.networking.content'),
        featuresTitle: t('modal.networking.features.title'),
        features: [
          t('modal.networking.feature1'),
          t('modal.networking.feature2'),
          t('modal.networking.feature3'),
          t('modal.networking.feature4'),
        ],
      },
      funding: {
        title: t('modal.funding.title'),
        content: t('modal.funding.content'),
        featuresTitle: t('modal.funding.features.title'),
        features: [
          t('modal.funding.feature1'),
          t('modal.funding.feature2'),
          t('modal.funding.feature3'),
          t('modal.funding.feature4'),
        ],
      },
    };

    const data = contentMap[modalContent];

    return (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          {data.content}
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{data.featuresTitle}</h3>
          <ul className="space-y-3">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <Link to="/inscription" onClick={closeModal}>
            <Button size="lg" className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:shadow-xl">
              <Sparkles className="mr-2 h-5 w-5" />
              {t('modal.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section avec image de fond */}
      <HeroHome>
        <div className="max-w-6xl mx-auto text-center">
          {/* Date Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-md border border-white/30 shadow-lg">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <p className="font-semibold">{t('hero.date')} • {t('hero.location')}</p>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-emerald-50 max-w-3xl mx-auto font-light"
            dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 flex-wrap"
          >
            <Link to="/inscription?type=porteur" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto group">
                <TrendingUp className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t('hero.cta.porteur')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to="/inscription?type=entrepreneur" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300 w-full sm:w-auto group">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t('hero.cta.entrepreneur')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to="/inscription?type=investisseur" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto group">
                <Target className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t('hero.cta.investisseur')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Event Info Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">{t('hero.date')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">{t('hero.location')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">{t('hero.free')}</span>
            </div>
          </motion.div>
        </div>
      </HeroHome>

      {/* Stats Section */}
      <SectionContainer variant="gradient" className="-mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimatedCard variant="premium" delay={0} className="text-center group hover:border-emerald-500">
              <div className="mx-auto mb-6 flex justify-center">
                <IconBadge icon={<Users />} variant="emerald" size="lg" />
              </div>
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-3">
                <GradientText variant="primary">
                  <StatsCounter end={1000} suffix="+" />
                </GradientText>
              </h3>
              <p className="text-gray-600 font-medium">{t('stats.porteurs')}</p>
              <div className="h-1 w-16 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mt-4 rounded-full"></div>
            </AnimatedCard>

            <AnimatedCard variant="premium" delay={0.15} className="text-center group hover:border-blue-500">
              <div className="mx-auto mb-6 flex justify-center">
                <IconBadge icon={<TrendingUp />} variant="blue" size="lg" />
              </div>
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-3">
                <GradientText variant="secondary">
                  <StatsCounter end={500} suffix="+" />
                </GradientText>
              </h3>
              <p className="text-gray-600 font-medium">{t('stats.investisseurs')}</p>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
            </AnimatedCard>

            <AnimatedCard variant="premium" delay={0.3} className="text-center group hover:border-emerald-500">
              <div className="mx-auto mb-6 flex justify-center">
                <IconBadge icon={<Handshake />} variant="gradient" size="lg" />
              </div>
              <h3 className="text-5xl lg:text-6xl font-extrabold mb-3">
                <GradientText variant="premium">
                  <StatsCounter end={1} />
                </GradientText>
              </h3>
              <p className="text-gray-600 font-medium">{t('stats.journee')}</p>
              <div className="h-1 w-16 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 mx-auto mt-4 rounded-full"></div>
            </AnimatedCard>
          </div>
        </motion.div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            {t('benefits.title').split(' ')[0]} <GradientText variant="premium">{t('benefits.title').split(' ').slice(1).join(' ')}</GradientText>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <AnimatedCard variant="emerald" delay={0} className="text-center group">
            <div className="mx-auto mb-6 flex justify-center">
              <IconBadge icon={<TrendingUp />} variant="emerald" size="xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
              {t('benefits.pitch.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('benefits.pitch.desc')}
            </p>
            <button
              onClick={() => openModal('pitch')}
              className="mt-6 inline-flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all hover:underline"
            >
              <span>{t('benefits.learnMore')}</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedCard>

          <AnimatedCard variant="blue" delay={0.15} className="text-center group">
            <div className="mx-auto mb-6 flex justify-center">
              <IconBadge icon={<Handshake />} variant="blue" size="xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
              {t('benefits.networking.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('benefits.networking.desc')}
            </p>
            <button
              onClick={() => openModal('networking')}
              className="mt-6 inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all hover:underline"
            >
              <span>{t('benefits.learnMore')}</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedCard>

          <AnimatedCard variant="premium" delay={0.3} className="text-center group">
            <div className="mx-auto mb-6 flex justify-center">
              <IconBadge icon={<Users />} variant="gradient" size="xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
              {t('benefits.funding.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('benefits.funding.desc')}
            </p>
            <button
              onClick={() => openModal('funding')}
              className="mt-6 inline-flex items-center font-semibold group-hover:gap-2 transition-all bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent hover:underline"
            >
              <span>{t('benefits.learnMore')}</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedCard>
        </div>
      </SectionContainer>

      {/* Video Section */}
      <VideoSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <SectionContainer variant="dark" className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-semibold">{t('cta.limited')}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            {t('cta.title').split('?')[0]}<span className="underline decoration-yellow-300 decoration-4">{t('cta.title').includes('avenir') ? ' avenir' : ' future'}</span> ?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-emerald-50 max-w-2xl mx-auto font-light">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/porteurs" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto group">
                <Sparkles className="mr-2 h-5 w-5" />
                {t('cta.learnMore')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to="/inscription" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto group">
                <Zap className="mr-2 h-5 w-5" />
                {t('cta.registerNow')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-emerald-100">
            ✓ {t('cta.free')} · ✓ {t('cta.instant')} · ✓ {t('cta.ticket')}
          </p>
        </motion.div>
      </SectionContainer>

      {/* Quick Links */}
      <SectionContainer variant="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: '/porteurs', labelKey: 'quicklinks.porteurs', icon: TrendingUp, color: 'emerald' },
              { to: '/investisseurs', labelKey: 'quicklinks.investisseurs', icon: Target, color: 'blue' },
              { to: '/programme', labelKey: 'quicklinks.programme', icon: Calendar, color: 'emerald' },
              { to: '/inscription', labelKey: 'quicklinks.inscription', icon: Sparkles, color: 'blue' },
            ].map((link, index) => {
              const Icon = link.icon;
              return (
                <Link key={link.to} to={link.to}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group border-2 border-transparent hover:border-${link.color}-200`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br from-${link.color}-100 to-${link.color}-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 text-${link.color}-600`} />
                    </div>
                    <p className="font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {t(link.labelKey)}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </SectionContainer>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalContent ? t(`modal.${modalContent}.title`) : ''}
        size="lg"
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
