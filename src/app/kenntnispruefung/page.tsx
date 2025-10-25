import { CheckCircle, Users, Target, BookOpen, Clock, Zap, MessageCircle, Award, ArrowRight, Brain, FileText, Calendar } from 'lucide-react'
import { cookies } from 'next/headers'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'

export default async function KenntnispruefungPage() {
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
              {t(locale, 'kp_badge')}
            </div>
            
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
              {t(locale, 'hero_kp_heading')}
            </h1>
            
            <p className="body-text-large text-gray-600 mb-16 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'hero_kp_sub')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center modern-animate-fade-in-up">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-lg font-semibold modern-focus group cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                {t(locale, 'cta_intro_call')}
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#mehr-erfahren"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold modern-focus group cursor-pointer"
              >
                {t(locale, 'kp_learn_more')}
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="mehr-erfahren" className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'kp_challenge_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'kp_challenge_subtitle')}
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_ch_card1_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_ch_card1_desc')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_ch_card2_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_ch_card2_desc')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_ch_card3_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_ch_card3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Structure Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'kp_detail_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'kp_detail_subtitle')}
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="mb-4 md:mb-8">
                <FileText className="w-8 h-8 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-black mb-3 md:mb-6 modern-heading">{t(locale, 'kp_exam_card1_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-3 md:mb-6">{t(locale, 'kp_exam_card1_duration')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_exam_card1_item1'),
                  t(locale, 'kp_exam_card1_item2'),
                  t(locale, 'kp_exam_card1_item3'),
                  t(locale, 'kp_exam_card1_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="mb-4 md:mb-8">
                <Users className="w-8 h-8 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-black mb-3 md:mb-6 modern-heading">{t(locale, 'kp_exam_card2_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-3 md:mb-6">{t(locale, 'kp_exam_card2_desc')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_exam_card2_item1'),
                  t(locale, 'kp_exam_card2_item2'),
                  t(locale, 'kp_exam_card2_item3'),
                  t(locale, 'kp_exam_card2_item4')
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
      </section>

      {/* Legal basis & prerequisites */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'kp_legal_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">{t(locale, 'kp_legal_intro')}</p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-8 modern-animate-fade-in-up">
              <div className="mb-6">
                <FileText className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">{t(locale, 'kp_legal_lang_title')}</h3>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_legal_lang_item1'),
                  t(locale, 'kp_legal_lang_item2'),
                  t(locale, 'kp_legal_lang_item3')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-8 modern-animate-fade-in-up">
              <div className="mb-6">
                <BookOpen className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">{t(locale, 'kp_legal_docs_title')}</h3>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_legal_docs_item1'),
                  t(locale, 'kp_legal_docs_item2'),
                  t(locale, 'kp_legal_docs_item3'),
                  t(locale, 'kp_legal_docs_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-8 modern-animate-fade-in-up">
              <div className="mb-6">
                <Award className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">{t(locale, 'kp_legal_result_title')}</h3>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_legal_result_item1'),
                  t(locale, 'kp_legal_result_item2'),
                  t(locale, 'kp_legal_result_item3')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'kp_solution_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">{t(locale, 'kp_solution_sub')}</p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Users className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_sol1_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">{t(locale, 'kp_sol1_desc')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_sol1_item1'),
                  t(locale, 'kp_sol1_item2'),
                  t(locale, 'kp_sol1_item3'),
                  t(locale, 'kp_sol1_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <FileText className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_sol2_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">{t(locale, 'kp_sol2_desc')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_sol2_item1'),
                  t(locale, 'kp_sol2_item2'),
                  t(locale, 'kp_sol2_item3'),
                  t(locale, 'kp_sol2_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Brain className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_sol3_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">{t(locale, 'kp_sol3_desc')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_sol3_item1'),
                  t(locale, 'kp_sol3_item2'),
                  t(locale, 'kp_sol3_item3'),
                  t(locale, 'kp_sol3_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Target className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_sol4_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">{t(locale, 'kp_sol4_desc')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_sol4_item1'),
                  t(locale, 'kp_sol4_item2'),
                  t(locale, 'kp_sol4_item3'),
                  t(locale, 'kp_sol4_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <BookOpen className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_sol5_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">{t(locale, 'kp_sol5_desc')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_sol5_item1'),
                  t(locale, 'kp_sol5_item2'),
                  t(locale, 'kp_sol5_item3'),
                  t(locale, 'kp_sol5_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Calendar className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'kp_sol6_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">{t(locale, 'kp_sol6_desc')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'kp_sol6_item1'),
                  t(locale, 'kp_sol6_item2'),
                  t(locale, 'kp_sol6_item3'),
                  t(locale, 'kp_sol6_item4')
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
      </section>

      {/* Recognition Procedure Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">{t(locale, 'kp_process_title')}</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">{t(locale, 'kp_process_sub')}</p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'kp_process_step1_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_process_step1_desc')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'kp_process_step2_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_process_step2_desc')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'kp_process_step3_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_process_step3_desc')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'kp_process_step4_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_process_step4_desc')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                05
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'kp_process_step5_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_process_step5_desc')}</p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                06
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">{t(locale, 'kp_process_step6_title')}</h3>
              <p className="text-gray-600 leading-relaxed modern-text">{t(locale, 'kp_process_step6_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'faq_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'faq_intro')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { q: t(locale, 'kp_faq_q1'), a: t(locale, 'kp_faq_a1') },
              { q: t(locale, 'kp_faq_q2'), a: t(locale, 'kp_faq_a2') },
              { q: t(locale, 'kp_faq_q3'), a: t(locale, 'kp_faq_a3') },
              { q: t(locale, 'kp_faq_q4'), a: t(locale, 'kp_faq_a4') },
              { q: t(locale, 'kp_faq_q5'), a: t(locale, 'kp_faq_a5') },
              { q: t(locale, 'kp_faq_q6'), a: t(locale, 'kp_faq_a6') },
              { q: t(locale, 'kp_faq_q7'), a: t(locale, 'kp_faq_a7') },
              { q: t(locale, 'kp_faq_q8'), a: t(locale, 'kp_faq_a8') }
            ].map((item, idx) => (
              <details key={idx} className="modern-faq">
                <summary className="modern-faq-question">
                  {item.q}
                </summary>
                <div className="modern-faq-answer open">
                  <p className="modern-text">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'pricing_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'pricing_subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="text-4xl md:text-6xl font-bold text-[#0395A6] mb-4 price-mobile">39€</div>
                <p className="text-lg text-gray-600 mb-8">{t(locale, 'kp_price_line1')}</p>
                <p className="text-lg text-gray-500">{t(locale, 'kp_price_line2')}</p>
              </div>

              <div className="modern-grid modern-grid-2 mb-12">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'kp_price_what_title')}</h3>
                  <ul className="space-y-4">
                    {[
                      t(locale, 'kp_price_what_item1'),
                      t(locale, 'kp_price_what_item2'),
                      t(locale, 'kp_price_what_item3'),
                      t(locale, 'kp_price_what_item4'),
                      t(locale, 'kp_price_what_item5'),
                      t(locale, 'kp_price_what_item6'),
                      t(locale, 'kp_price_what_item7'),
                      t(locale, 'kp_price_what_item8')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-lg text-gray-700">
                        <CheckCircle className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'kp_price_flex_title')}</h3>
                  <ul className="space-y-4">
                    {[
                      t(locale, 'kp_price_flex_item1'),
                      t(locale, 'kp_price_flex_item2'),
                      t(locale, 'kp_price_flex_item3'),
                      t(locale, 'kp_price_flex_item4')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-lg text-gray-700">
                        <Zap className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed modern-text price-text-mobile">
                  {t(locale, 'kp_price_info')}
                </p>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg text-lg font-semibold modern-focus group price-button-mobile"
                >
                  <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                  {t(locale, 'kp_price_cta_book_now')}
                  <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            {t(locale, 'cta_ready_title')}
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            {t(locale, 'cta_ready_sub1')}
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            {t(locale, 'cta_ready_sub2')}
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
          >
            <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
            Kostenloses Erstgespräch
            <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}