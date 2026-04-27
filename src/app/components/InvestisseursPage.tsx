import { Link } from 'react-router-dom';
import { TrendingUp, Target, Globe, Briefcase, CheckCircle, ArrowRight, Sparkles, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { SectionContainer } from './ui/section-container';
import { AnimatedCard } from './ui/animated-card';
import { GradientText } from './ui/gradient-text';
import { IconBadge } from './ui/icon-badge';
import { HeroInvestisseurs } from './ui/hero-section';
import { useLanguage } from '../contexts/LanguageContext';

export default function InvestisseursPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section avec image de fond */}
      <HeroInvestisseurs>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-md border border-white/30 shadow-lg mb-8"
          >
            <DollarSign className="h-5 w-5 text-yellow-300" />
            <span className="font-semibold">{t('hero.investisseurs.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            {t('hero.investisseurs.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl mb-10 text-blue-50 max-w-3xl mx-auto font-light"
          >
            {t('hero.investisseurs.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/inscription?type=investisseur">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-2xl group">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t('hero.cta.investisseur')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </HeroInvestisseurs>

      {/* Why Participate */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('investisseurs.why.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('investisseurs.dealflow.title')}</h3>
              <p className="text-gray-600">
                {t('investisseurs.dealflow.desc')}
              </p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-xl">
              <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('investisseurs.roi.title')}</h3>
              <p className="text-gray-600">
                {t('investisseurs.roi.desc')}
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('investisseurs.sectors.title')}</h3>
              <p className="text-gray-600">
                {t('investisseurs.sectors.desc')}
              </p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-xl">
              <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('investisseurs.networking.title')}</h3>
              <p className="text-gray-600">
                {t('investisseurs.networking.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('investisseurs.projects.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { titleKey: 'investisseurs.projects.tech', descKey: 'investisseurs.projects.tech.desc' },
              { titleKey: 'investisseurs.projects.agri', descKey: 'investisseurs.projects.agri.desc' },
              { titleKey: 'investisseurs.projects.health', descKey: 'investisseurs.projects.health.desc' },
              { titleKey: 'investisseurs.projects.education', descKey: 'investisseurs.projects.education.desc' },
              { titleKey: 'investisseurs.projects.energy', descKey: 'investisseurs.projects.energy.desc' },
              { titleKey: 'investisseurs.projects.b2b', descKey: 'investisseurs.projects.b2b.desc' }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 mb-2">{t(category.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(category.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('investisseurs.benefits.title')}
          </h2>

          <div className="space-y-4">
            {[
              'investisseurs.benefits.pitch',
              'investisseurs.benefits.files',
              'investisseurs.benefits.meetings',
              'investisseurs.benefits.analysis',
              'investisseurs.benefits.coinvest',
              'investisseurs.benefits.followup'
            ].map((itemKey, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{t(itemKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('investisseurs.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            {t('investisseurs.cta.subtitle')}
          </p>
          <Link to="/inscription?type=investisseur">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              {t('investisseurs.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
