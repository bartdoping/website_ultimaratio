import { Metadata } from 'next'
import { 
  BookOpen, 
  Brain, 
  Target, 
  Users, 
  CheckCircle, 
  Clock, 
  Zap,
  Lightbulb,
  MessageCircle,
  ArrowRight,
  FileText,
  Mic,
  Award,
  Shield,
  TrendingUp
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import { cookies } from 'next/headers'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'

export const metadata: Metadata = {
  title: 'Examensvorbereitung – alle Staatsexamina | ultima-rat.io',
  description:
    'Individuelle Prüfungsvorbereitung für sämtliche Staatsexamina des Human- und Zahnmedizinstudiums mit 1:1 Betreuung durch approbierte Ärzte.',
  keywords:
    'Examensvorbereitung, Staatsexamen, M1, M2, M3, Z1, Z2, Z3, Prüfungsvorbereitung, IMPP, mündliches Examen, schriftliches Examen',
}

export default async function ExamenskursePage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t(locale, 'ek_benefit1_title'),
      description: t(locale, 'ek_benefit1_desc'),
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t(locale, 'ek_benefit2_title'),
      description: t(locale, 'ek_benefit2_desc'),
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t(locale, 'ek_benefit3_title'),
      description: t(locale, 'ek_benefit3_desc'),
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: t(locale, 'ek_benefit4_title'),
      description: t(locale, 'ek_benefit4_desc'),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t(locale, 'ek_benefit5_title'),
      description: t(locale, 'ek_benefit5_desc'),
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t(locale, 'ek_benefit6_title'),
      description: t(locale, 'ek_benefit6_desc'),
    },
  ]

  const writtenFeatures = [
    t(locale, 'ek_format_written_feature1'),
    t(locale, 'ek_format_written_feature2'),
    t(locale, 'ek_format_written_feature3'),
    t(locale, 'ek_format_written_feature4'),
    t(locale, 'ek_format_written_feature5'),
  ]

  const oralFeatures = [
    t(locale, 'ek_format_oral_feature1'),
    t(locale, 'ek_format_oral_feature2'),
    t(locale, 'ek_format_oral_feature3'),
    t(locale, 'ek_format_oral_feature4'),
    t(locale, 'ek_format_oral_feature5'),
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold modern-heading leading-tight mb-6">
              <span className="text-black">{t(locale, 'ek_hero_title1')}</span>
              <br />
              <span className="text-[#0395A6]">{t(locale, 'ek_hero_title2')}</span>
            </h1>
            <p className="modern-text text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{t(locale, 'ek_hero_sub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block" />
                {t(locale, 'home_cta_primary')}
              </a>
              <a
                href="#formats"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                {t(locale, 'kp_learn_more')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'ek_intro_title')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'ek_intro_sub')}</p>
          </div>
        </div>
      </section>

      {/* Format: Schriftliches Examen */}
      <section id="formats" className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="max-w-5xl mx-auto">
            <div className="modern-card p-8 md:p-12 modern-animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8" />
                </div>
                <h2 className="modern-heading text-3xl md:text-4xl mb-4">
                  {t(locale, 'ek_format_written_title')}
                </h2>
                <p className="text-lg text-[#0395A6] font-semibold mb-6">
                  {t(locale, 'ek_format_written_sub')}
                </p>
                <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
                  {t(locale, 'ek_format_written_desc')}
                </p>
              </div>

              <div className="space-y-4">
                {writtenFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0395A6] text-white rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="modern-text text-gray-700 pt-1">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format: Mündliches Examen */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="max-w-5xl mx-auto">
            <div className="modern-card p-8 md:p-12 modern-animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-8 h-8" />
                </div>
                <h2 className="modern-heading text-3xl md:text-4xl mb-4">
                  {t(locale, 'ek_format_oral_title')}
                </h2>
                <p className="text-lg text-[#0395A6] font-semibold mb-6">
                  {t(locale, 'ek_format_oral_sub')}
                </p>
                <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
                  {t(locale, 'ek_format_oral_desc')}
                </p>
              </div>

              <div className="space-y-4">
                {oralFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-[#F8FAFC] rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0395A6] text-white rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="modern-text text-gray-700 pt-1">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'ek_benefits_title')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'ek_benefits_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`modern-card p-8 text-center modern-animate-fade-in-up ${index >= 3 ? 'hidden md:block' : ''} ${index >= 5 ? 'hidden lg:block' : ''}`}>
                <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="modern-heading text-xl mb-4">{benefit.title}</h3>
                <p className="modern-text text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'ek_price_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'ek_price_sub')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up price-card-mobile-extend">
              <div className="text-center mb-12">
                <div className="text-4xl md:text-6xl font-bold text-[#0395A6] mb-4 price-mobile">
                  <span className="text-base">ab </span>49€
                </div>
                <p className="text-lg text-gray-500">{t(locale, 'ek_price_line2')}</p>
              </div>

              <div className="modern-grid modern-grid-2 mb-12">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'ek_price_what_title')}</h3>
                  <ul className="space-y-4">
                    {[
                      t(locale, 'ek_price_what_item1'),
                      t(locale, 'ek_price_what_item2'),
                      t(locale, 'ek_price_what_item3'),
                      t(locale, 'ek_price_what_item4'),
                      t(locale, 'ek_price_what_item5'),
                      t(locale, 'ek_price_what_item6'),
                      t(locale, 'ek_price_what_item7'),
                      t(locale, 'ek_price_what_item8')
                    ].map((item, index) => (
                      <li key={index} className="flex items-start md:items-center text-lg text-gray-700">
                        <CheckCircle className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                        <span className="flex-1 min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'ek_price_flex_title')}</h3>
                  <ul className="space-y-4">
                    {[
                      t(locale, 'ek_price_flex_item1'),
                      t(locale, 'ek_price_flex_item2'),
                      t(locale, 'ek_price_flex_item3'),
                      t(locale, 'ek_price_flex_item4')
                    ].map((item, index) => (
                      <li key={index} className="flex items-start md:items-center text-lg text-gray-700">
                        <Zap className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                        <span className="flex-1 min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed modern-text price-text-mobile">{t(locale, 'ek_price_info')}</p>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg button-text modern-focus group price-button-mobile"
                >
                  <MessageCircle className="w-6 h-6 mr-3 inline-block" />
                  {t(locale, 'ek_price_cta_book_now')}
                  <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'coach_testimonials_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'coach_testimonials_sub')}
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section academic-section">
        <div className="academic-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 premium-heading animate-fade-in-up">
            {t(locale, 'ek_cta_ready_title')}
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 animate-fade-in-up">
            {t(locale, 'ek_cta_ready_sub1')}
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            {t(locale, 'ek_cta_ready_sub2')}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up">
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all focus-ring inline-block group"
            >
              <MessageCircle className="w-6 h-6 mr-3 inline-block" />
              {t(locale, 'cta_intro_call')}
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

