import { CheckCircle, Target, Brain, Clock, Award, Shield, ArrowRight, MessageCircle } from 'lucide-react'
import { cookies } from 'next/headers'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'
import Testimonials from '../../components/Testimonials'

export default async function MethodenPage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <Award className="w-5 h-5 mr-2" />
              {t(locale, 'method_badge')}
            </div>
            
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
              {t(locale, 'method_hero_heading')}
            </h1>
            
            <p className="text-base text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up">
              {t(locale, 'method_hero_p')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'method_core_title')}
            </h2>
            <p className="text-base text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'method_core_sub')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-0">
            <div className="modern-grid modern-grid-2 gap-4 md:gap-8">
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <div className="mb-3 md:mb-8">
                <Brain className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'method_retrieval_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6 break-words mobile-readable-text">
                {t(locale, 'method_retrieval_text')}
              </p>
              <ul className="space-y-3 pr-0 mr-0">
                {[
                  t(locale, 'method_retrieval_item1'),
                  t(locale, 'method_retrieval_item2'),
                  t(locale, 'method_retrieval_item3'),
                  t(locale, 'method_retrieval_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <div className="mb-3 md:mb-8">
                <Clock className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'method_spaced_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6 break-words mobile-readable-text">
                {t(locale, 'method_spaced_text')}
              </p>
              <ul className="space-y-3 pr-0 mr-0">
                {[
                  t(locale, 'method_spaced_item1'),
                  t(locale, 'method_spaced_item2'),
                  t(locale, 'method_spaced_item3'),
                  t(locale, 'method_spaced_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <div className="mb-3 md:mb-8">
                <Target className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'method_interleaving_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6 break-words mobile-readable-text">
                {t(locale, 'method_interleaving_text')}
              </p>
              <ul className="space-y-3 pr-0 mr-0">
                {[
                  t(locale, 'method_interleaving_item1'),
                  t(locale, 'method_interleaving_item2'),
                  t(locale, 'method_interleaving_item3'),
                  t(locale, 'method_interleaving_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <div className="mb-3 md:mb-8">
                <Shield className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'method_errorlogs_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6 break-words mobile-readable-text">
                {t(locale, 'method_errorlogs_text')}
              </p>
              <ul className="space-y-3 pr-0 mr-0">
                {[
                  t(locale, 'method_errorlogs_item1'),
                  t(locale, 'method_errorlogs_item2'),
                  t(locale, 'method_errorlogs_item3'),
                  t(locale, 'method_errorlogs_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Foundation */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'method_science_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'method_science_sub')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up">
              <div className="text-center mb-12">
                <p className="text-lg text-[#0395A6] font-semibold italic">
                  {t(locale, 'method_science_quote')}
                </p>
              </div>
              
              <div className="modern-grid modern-grid-2">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'method_research_title')}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                    {t(locale, 'method_research_text1')}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text">
                    {t(locale, 'method_research_text2')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'method_practical_title')}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                    {t(locale, 'method_practical_text1')}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text">
                    {t(locale, 'method_practical_text2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'method_impl_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'method_impl_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-4">
            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'method_process_step1_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'method_process_step1_text')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'method_process_step2_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'method_process_step2_text')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">02</div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'method_process_step3_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'method_process_step3_text')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'method_process_step4_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'method_process_step4_text')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'method_process_step5_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'method_process_step5_text')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">04</div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'method_process_step6_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'method_process_step6_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <Testimonials />

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            {t(locale, 'method_cta_title')}
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            {t(locale, 'method_cta_sub1')}
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            {t(locale, 'method_cta_sub2')}
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
          >
            <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
            {t(locale, 'home_cta_primary')}
            <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}