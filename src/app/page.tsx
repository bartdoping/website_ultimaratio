import Link from 'next/link'
import { cookies } from 'next/headers'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'
import { CheckCircle, Users, Target, BookOpen, Brain, Award, ArrowRight, MessageCircle } from 'lucide-react'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import HeroWithImage from '../components/HeroWithImage'
import ProblemVisual from '../components/ProblemVisual'
import SolutionVisual from '../components/SolutionVisual'
import StatsCounter from '../components/StatsCounter'
import UrgencyBanner from '../components/UrgencyBanner'
import StickyWhatsAppCTA from '../components/StickyWhatsAppCTA'

export default async function HomePage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)
  return (
    <div className="min-h-screen">
      {/* New Hero with Image */}
      <HeroWithImage />

      {/* New Problem Section with Visuals */}
      <ProblemVisual />

      {/* New Solution Section with Visuals */}
      <SolutionVisual />

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Der ultima-rat.io Ansatz */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 modern-heading modern-animate-fade-in-up">
              {t(locale, 'home_ansatz_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'home_ansatz_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-2 gap-12">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Brain className="w-16 h-16 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'home_approach_science_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text break-words mobile-readable-text">
                {t(locale, 'home_approach_science_text')}
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Target className="w-16 h-16 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'home_approach_structured_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text break-words mobile-readable-text">
                {t(locale, 'home_approach_structured_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 modern-heading modern-animate-fade-in-up">
              {t(locale, 'home_success_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'home_success_sub')}
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* Transparente Preise */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 modern-heading modern-animate-fade-in-up">
              {t(locale, 'home_prices_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'home_prices_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-2 gap-12">
            <div className="modern-card p-16 text-center modern-animate-fade-in-up price-card-mobile-extend">
              <div className="mb-10">
                <Award className="w-20 h-20 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-8 modern-heading">{t(locale, 'home_singlecoaching')}</h3>
              <div className="text-6xl font-bold text-[#0395A6] mb-8 price-mobile"><span className="text-base">ab </span>49€</div>
              <p className="text-lg text-gray-600 mb-10 modern-text price-text-mobile">
                {t(locale, 'home_price_single_desc')}
              </p>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-6 rounded-lg text-lg font-semibold modern-focus group price-button-mobile"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                {t(locale, 'home_book_now')}
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="modern-card p-16 text-center modern-animate-fade-in-up">
              <div className="mb-10">
                <Users className="w-20 h-20 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-8 modern-heading">{t(locale, 'home_groupcoaching')}</h3>
              <div className="text-6xl font-bold text-[#0395A6] mb-8 price-mobile"><span className="text-base">ab </span>35€</div>
              <p className="text-lg text-gray-600 mb-10 modern-text">
                {t(locale, 'home_price_group_desc')}
              </p>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-6 rounded-lg text-lg font-semibold modern-focus group"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                {t(locale, 'home_book_now')}
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <UrgencyBanner />

      {/* FAQ Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 modern-heading modern-animate-fade-in-up">
              {t(locale, 'home_faq_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'home_faq_sub')}
            </p>
          </div>
          
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="modern-section bg-[#0395A6] text-white">
        <div className="modern-container">
          <div className="text-center modern-animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 modern-heading">
              {t(locale, 'home_final_title')}
            </h2>
            <p className="text-lg text-white mb-16 max-w-4xl mx-auto">
              {t(locale, 'home_final_sub')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0395A6] hover:bg-[#028A9A] text-white px-16 py-8 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-4"
              >
                <MessageCircle className="w-8 h-8" />
                <span>{t(locale, 'home_cta_primary')}</span>
              </a>
              <Link
                href="/coaching"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 hover:border-white px-16 py-8 rounded-lg text-lg font-bold transition-all duration-300 inline-flex items-center justify-center space-x-4"
              >
                <BookOpen className="w-8 h-8" />
                <span>{t(locale, 'home_cta_secondary')}</span>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-4">{t(locale, 'home_final_feature1_title')}</h3>
                <p className="text-white/80 text-base hidden md:block">{t(locale, 'home_final_feature1_desc')}</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-4">{t(locale, 'home_final_feature2_title')}</h3>
                <p className="text-white/80 text-base hidden md:block">{t(locale, 'home_final_feature2_desc')}</p>
              </div>
              <div className="text-center hidden md:block">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-4">{t(locale, 'home_final_feature3_title')}</h3>
                <p className="text-white/80 text-base">{t(locale, 'home_final_feature3_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp CTA */}
      <StickyWhatsAppCTA />
    </div>
  )
}