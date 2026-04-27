import { Clock, MapPin, Users, Lightbulb, Utensils, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProgrammePage() {
  const { t } = useLanguage();

  const schedule = [
    {
      time: '08:00 - 09:00',
      titleKey: 'programme.schedule.welcome',
      descKey: 'programme.schedule.welcome.desc',
      icon: Users,
      color: 'emerald'
    },
    {
      time: '09:00 - 09:30',
      titleKey: 'programme.schedule.opening',
      descKey: 'programme.schedule.opening.desc',
      icon: Lightbulb,
      color: 'blue'
    },
    {
      time: '09:30 - 12:00',
      titleKey: 'programme.schedule.pitch.morning',
      descKey: 'programme.schedule.pitch.morning.desc',
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      time: '12:00 - 13:30',
      titleKey: 'programme.schedule.lunch',
      descKey: 'programme.schedule.lunch.desc',
      icon: Utensils,
      color: 'blue'
    },
    {
      time: '13:30 - 16:00',
      titleKey: 'programme.schedule.pitch.afternoon',
      descKey: 'programme.schedule.pitch.afternoon.desc',
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      time: '16:00 - 17:00',
      titleKey: 'programme.schedule.b2b',
      descKey: 'programme.schedule.b2b.desc',
      icon: Users,
      color: 'blue'
    },
    {
      time: '17:00 - 18:00',
      titleKey: 'programme.schedule.closing',
      descKey: 'programme.schedule.closing.desc',
      icon: Lightbulb,
      color: 'emerald'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-blue-600 to-emerald-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('programme.hero.title')}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6" />
              <span>{t('programme.hero.date')}</span>
            </div>
            <div className="hidden sm:block w-1 h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              <span>{t('programme.hero.location')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              const isEmerald = item.color === 'emerald';

              return (
                <div
                  key={index}
                  className="flex gap-6 bg-white p-6 rounded-xl shadow-sm border-l-4 hover:shadow-md transition-shadow"
                  style={{
                    borderColor: isEmerald ? '#059669' : '#2563eb'
                  }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        isEmerald ? 'bg-emerald-100' : 'bg-blue-100'
                      }`}
                    >
                      <Icon className={`h-8 w-8 ${isEmerald ? 'text-emerald-600' : 'text-blue-600'}`} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{t(item.titleKey)}</h3>
                      <span className={`text-sm font-medium mt-1 sm:mt-0 ${
                        isEmerald ? 'text-emerald-600' : 'text-blue-600'
                      }`}>
                        {item.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{t(item.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('programme.info.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('programme.info.venue')}</h3>
              <p className="text-gray-600 mb-2">
                {t('programme.info.venue.name')}
              </p>
              <p className="text-gray-600">
                {t('programme.info.venue.location')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('programme.info.hours')}</h3>
              <p className="text-gray-600 mb-2">
                {t('programme.info.hours.start')}
              </p>
              <p className="text-gray-600">
                {t('programme.info.hours.end')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('programme.info.catering')}</h3>
              <p className="text-gray-600">
                {t('programme.info.catering.desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('programme.info.dress')}</h3>
              <p className="text-gray-600">
                {t('programme.info.dress.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-emerald-50 to-blue-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            {t('programme.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('programme.cta.subtitle')}
          </p>
          <a
            href="/inscription"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
          >
            {t('programme.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
