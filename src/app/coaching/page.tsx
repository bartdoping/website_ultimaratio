import { CheckCircle, Users, Target, BookOpen, Clock, Zap, MessageCircle, Award, ArrowRight, Brain, Shield } from 'lucide-react'
import { cookies } from 'next/headers'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'

export default async function CoachingPage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section academic-section">
        <div className="academic-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0395A6] text-white font-semibold mb-8 animate-fade-in-up">
              <Award className="w-5 h-5 mr-2" />
              {t(locale, 'coach_badge')}
            </div>
            
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black mb-4 sm:mb-6 md:mb-8 premium-heading leading-tight animate-fade-in-up px-2 sm:px-4 whitespace-pre-line">
              {t(locale, 'coach_hero_heading')}
            </h1>
            
            <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-5xl mx-auto leading-relaxed premium-text animate-fade-in-up px-2 sm:px-4">
              {t(locale, 'coach_hero_p')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center animate-fade-in-up px-4">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-6 sm:px-12 py-3 sm:py-5 rounded-lg text-sm sm:text-lg font-semibold modern-focus group cursor-pointer w-full sm:w-auto whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 inline-block group-hover:animate-pulse" />
                <span className="hidden xs:inline">{t(locale, 'cta_intro_call')}</span>
                <span className="xs:hidden">{t(locale, 'cta_intro_call')}</span>
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#mehr-erfahren"
                className="modern-button-secondary px-6 sm:px-12 py-3 sm:py-5 rounded-lg text-sm sm:text-lg font-semibold modern-focus group cursor-pointer w-full sm:w-auto whitespace-nowrap"
              >
                {t(locale, 'coach_learn_more')}
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Student Problems Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'coach_challenges_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'coach_challenges_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_challenges_anatomy_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_challenges_anatomy_text')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_challenges_time_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_challenges_time_text')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_challenges_anxiety_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_challenges_anxiety_text')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up hidden md:block">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <BookOpen className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_challenges_inefficient_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_challenges_inefficient_text')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up hidden md:block">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_challenges_structure_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_challenges_structure_text')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up hidden lg:block">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_challenges_isolation_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_challenges_isolation_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="mehr-erfahren" className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'coach_problem_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'coach_problem_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_problem_bulimia_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_problem_bulimia_text')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_problem_timewaste_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_problem_timewaste_text')}</p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up hidden md:block">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_problem_nostrategy_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_problem_nostrategy_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Effective Learning Methods Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'coach_methods_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'coach_methods_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="mb-3 md:mb-8">
                <Brain className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'coach_effective_retrieval_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6">{t(locale, 'coach_effective_retrieval_text')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'coach_effective_retrieval_item1'),
                  t(locale, 'coach_effective_retrieval_item2'),
                  t(locale, 'coach_effective_retrieval_item3'),
                  t(locale, 'coach_effective_retrieval_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-start md:items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                    <span className="flex-1 min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="mb-3 md:mb-8">
                <Clock className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'coach_effective_spaced_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6">{t(locale, 'coach_effective_spaced_text')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'coach_effective_spaced_item1'),
                  t(locale, 'coach_effective_spaced_item2'),
                  t(locale, 'coach_effective_spaced_item3'),
                  t(locale, 'coach_effective_spaced_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-start md:items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                    <span className="flex-1 min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="mb-3 md:mb-8">
                <Target className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'coach_effective_interleaving_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6">{t(locale, 'coach_effective_interleaving_text')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'coach_effective_interleaving_item1'),
                  t(locale, 'coach_effective_interleaving_item2'),
                  t(locale, 'coach_effective_interleaving_item3'),
                  t(locale, 'coach_effective_interleaving_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-start md:items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                    <span className="flex-1 min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset hidden md:block">
              <div className="mb-3 md:mb-8">
                <BookOpen className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'coach_effective_elaboration_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6">{t(locale, 'coach_effective_elaboration_text')}</p>
              <ul className="space-y-3">
                {[
                  t(locale, 'coach_effective_elaboration_item1'),
                  t(locale, 'coach_effective_elaboration_item2'),
                  t(locale, 'coach_effective_elaboration_item3'),
                  t(locale, 'coach_effective_elaboration_item4')
                ].map((item, index) => (
                  <li key={index} className="flex items-start md:items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                    <span className="flex-1 min-w-0">{item}</span>
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
              {t(locale, 'coach_solution_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'coach_solution_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Users className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_solution_1on1_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_solution_1on1_text')}</p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Brain className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_solution_scientific_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_solution_scientific_text')}</p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <BookOpen className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_solution_plans_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_solution_plans_text')}</p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up hidden md:block">
              <div className="mb-8">
                <Target className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_solution_exam_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_solution_exam_text')}</p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up hidden md:block">
              <div className="mb-8">
                <Zap className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_solution_time_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_solution_time_text')}</p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up hidden lg:block">
              <div className="mb-8">
                <Shield className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">{t(locale, 'coach_solution_support_title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'coach_solution_support_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'coach_success_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'coach_success_sub')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up">
              <div className="text-center mb-12">
                <p className="text-lg text-[#0395A6] font-semibold italic">{t(locale, 'coach_success_quote')}</p>
              </div>
              
              <div className="modern-grid modern-grid-2">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'coach_success_scientific_title')}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">{t(locale, 'coach_success_scientific_text')}</p>
                  <ul className="space-y-3">
                    {[
                      t(locale, 'coach_success_scientific_item1'),
                      t(locale, 'coach_success_scientific_item2'),
                      t(locale, 'coach_success_scientific_item3'),
                      t(locale, 'coach_success_scientific_item4')
                    ].map((item, index) => (
                      <li key={index} className="flex items-start md:items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                        <span className="flex-1 min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'coach_success_structured_title')}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">{t(locale, 'coach_success_structured_text')}</p>
                  <ul className="space-y-3">
                    {[
                      t(locale, 'coach_success_structured_item1'),
                      t(locale, 'coach_success_structured_item2'),
                      t(locale, 'coach_success_structured_item3'),
                      t(locale, 'coach_success_structured_item4')
                    ].map((item, index) => (
                      <li key={index} className="flex items-start md:items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                        <span className="flex-1 min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="academic-section bg-white">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 premium-heading">{t(locale, 'coach_process_title')}</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto premium-text">{t(locale, 'coach_process_sub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-black mb-4">{t(locale, 'coach_process_step1_title')}</h3>
              <p className="text-gray-600 leading-relaxed premium-text">{t(locale, 'coach_process_step1_text')}</p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-black mb-4">{t(locale, 'coach_process_step2_title')}</h3>
              <p className="text-gray-600 leading-relaxed premium-text">{t(locale, 'coach_process_step2_text')}</p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-black mb-4">{t(locale, 'coach_process_step3_title')}</h3>
              <p className="text-gray-600 leading-relaxed premium-text">{t(locale, 'coach_process_step3_text')}</p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-black mb-4">{t(locale, 'coach_process_step4_title')}</h3>
              <p className="text-gray-600 leading-relaxed premium-text">{t(locale, 'coach_process_step4_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
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

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  M
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Marcel M.</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">&ldquo;{t(locale, 'home_testimonial_marcel_text')}&rdquo;</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">{t(locale, 'home_testimonial_marcel_result')}</p>
                <p className="text-sm text-gray-600">{t(locale, 'coach_testimonial_marcel_label')}</p>
              </div>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  V
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Victoria G.</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">&ldquo;{t(locale, 'home_testimonial_victoria_text')}&rdquo;</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">{t(locale, 'home_testimonial_victoria_result')}</p>
                <p className="text-sm text-gray-600">{t(locale, 'coach_testimonial_victoria_label')}</p>
              </div>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  A
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Angelina P.</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">&ldquo;{t(locale, 'home_testimonial_angelina_text')}&rdquo;</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">{t(locale, 'home_testimonial_angelina_result')}</p>
                <p className="text-sm text-gray-600">{t(locale, 'coach_testimonial_angelina_label')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'coach_prices_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'coach_prices_sub')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up price-card-mobile-extend">
              <div className="text-center mb-12">
                <div className="text-4xl md:text-6xl font-bold text-[#0395A6] mb-4 price-mobile"><span className="text-base">ab </span>49€</div>
                <p className="text-lg text-gray-600 mb-8">{t(locale, 'coaching_price_line1')}</p>
                <p className="text-lg text-gray-500">{t(locale, 'coaching_price_line2')}</p>
              </div>

              <div className="modern-grid modern-grid-2 mb-12">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'coaching_pricing_what_you_get_title')}</h3>
                  <ul className="space-y-4">
                    {[
                      t(locale, 'coaching_pricing_what_you_get_item1'),
                      t(locale, 'coaching_pricing_what_you_get_item2'),
                      t(locale, 'coaching_pricing_what_you_get_item3'),
                      t(locale, 'coaching_pricing_what_you_get_item4'),
                      t(locale, 'coaching_pricing_what_you_get_item5'),
                      t(locale, 'coaching_pricing_what_you_get_item6'),
                      t(locale, 'coaching_pricing_what_you_get_item7'),
                      t(locale, 'coaching_pricing_what_you_get_item8')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-lg text-gray-700">
                        <CheckCircle className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'coaching_pricing_flexible_booking_title')}</h3>
                  <ul className="space-y-4">
                    {[
                      t(locale, 'coaching_pricing_flexible_booking_item1'),
                      t(locale, 'coaching_pricing_flexible_booking_item2'),
                      t(locale, 'coaching_pricing_flexible_booking_item3'),
                      t(locale, 'coaching_pricing_flexible_booking_item4')
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
                <p className="text-lg text-gray-600 mb-8 leading-relaxed modern-text price-text-mobile">{t(locale, 'coaching_pricing_info')}</p>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg button-text modern-focus group price-button-mobile"
                >
                  <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                  {t(locale, 'coaching_pricing_cta_book_now')}
                  <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section academic-section">
        <div className="academic-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 premium-heading animate-fade-in-up">
            {t(locale, 'coach_cta_title')}
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 animate-fade-in-up">
            {t(locale, 'coach_cta_sub1')}
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            {t(locale, 'coach_cta_sub2')}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up">
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all focus-ring inline-block group"
            >
              <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
              Kostenloses Erstgespräch
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}