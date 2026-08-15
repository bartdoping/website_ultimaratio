import Image from 'next/image'
import { Award, GraduationCap, Heart, Users, Star, MessageCircle, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'
import { buildMetadata } from '@/i18n/seo'
import { whatsappHref } from '@/lib/links'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const locale = normalizeLocale(cookieStore.get('lang')?.value)
  return buildMetadata('team', locale)
}

export default async function TeamPage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <Users className="w-5 h-5 mr-2" />
              {t(locale, 'team_badge')}
            </div>
            
                    <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
                      {t(locale, 'team_hero_heading')}
                    </h1>
            
            <p className="text-base text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up">
              {t(locale, 'team_hero_p')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'team_coaches_title')}
            </h2>
            <p className="text-base text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'team_coaches_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            {/* Mustafa Eid */}
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="text-center mb-4 md:mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 md:mb-6 shadow-xl">
                  <Image
                    src="/images/team/mustafa-eid.jpg"
                    alt="Mustafa Eid"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                        <h3 className="text-sm md:text-xl font-bold text-black mb-1 md:mb-2 modern-heading">Mustafa Eid</h3>
                <p className="text-xs md:text-lg text-[#0395A6] font-semibold mb-2 md:mb-4">{t(locale, 'team_role_doctor')}</p>
              </div>
              
              <div className="space-y-3 md:space-y-6">
                <div className="flex items-start">
                  <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1 md:mb-2 text-xs md:text-base">{t(locale, 'team_mustafa_edu_title')}</h4>
                    <p className="text-gray-600 modern-text text-xs md:text-base">{t(locale, 'team_mustafa_edu_text')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-4 h-4 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1 md:mb-2 text-xs md:text-base">{t(locale, 'team_mustafa_exp_title')}</h4>
                    <p className="text-gray-600 modern-text text-xs md:text-base">{t(locale, 'team_mustafa_exp_text')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1 md:mb-2 text-xs md:text-base">{t(locale, 'team_mustafa_spec_title')}</h4>
                    <p className="text-gray-600 modern-text text-xs md:text-base">{t(locale, 'team_mustafa_spec_text')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ahkash Thavarajasingam */}
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="text-center mb-3 md:mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-2 md:mb-6 shadow-xl">
                  <Image
                    src="/images/team/ahkash-thavarajasingam.jpg"
                    alt="Ahkash Thavarajasingam"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-black mb-1 md:mb-2 modern-heading">Ahkash Thavarajasingam</h3>
                <p className="text-xs md:text-lg text-[#0395A6] font-semibold mb-2 md:mb-4">{t(locale, 'team_role_doctor')}</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <GraduationCap className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">{t(locale, 'team_ahkash_edu_title')}</h4>
                    <p className="text-gray-600 modern-text">{t(locale, 'team_ahkash_edu_text')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">{t(locale, 'team_ahkash_exp_title')}</h4>
                    <p className="text-gray-600 modern-text">{t(locale, 'team_ahkash_exp_text')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">{t(locale, 'team_ahkash_spec_title')}</h4>
                    <p className="text-gray-600 modern-text">{t(locale, 'team_ahkash_spec_text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'team_why_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">{t(locale, 'team_why_sub')}</p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-8 md:p-12 text-center modern-animate-fade-in-up">
              <div className="mb-6 md:mb-8">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-black mb-4 md:mb-6 modern-heading">{t(locale, 'team_why_card1_title')}</h3>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'team_why_card1_text')}</p>
            </div>

            <div className="modern-card p-8 md:p-12 text-center modern-animate-fade-in-up">
              <div className="mb-6 md:mb-8">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-black mb-4 md:mb-6 modern-heading">{t(locale, 'team_why_card2_title')}</h3>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'team_why_card2_text')}</p>
            </div>

            <div className="modern-card p-8 md:p-12 text-center modern-animate-fade-in-up">
              <div className="mb-6 md:mb-8">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-black mb-4 md:mb-6 modern-heading">{t(locale, 'team_why_card3_title')}</h3>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed modern-text">{t(locale, 'team_why_card3_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'team_testimonials_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'team_testimonials_sub')}
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed modern-text mb-6">{t(locale, 'team_testimonial1_text')}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">{t(locale, 'team_testimonial1_name')}</p>
                <p className="text-sm text-gray-600">{t(locale, 'team_testimonial1_meta')}</p>
              </div>
            </div>

            <div className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed modern-text mb-6">{t(locale, 'team_testimonial2_text')}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">{t(locale, 'team_testimonial2_name')}</p>
                <p className="text-sm text-gray-600">{t(locale, 'team_testimonial2_meta')}</p>
              </div>
            </div>

            <div className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed modern-text mb-6">{t(locale, 'team_testimonial3_text')}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">{t(locale, 'team_testimonial3_name')}</p>
                <p className="text-sm text-gray-600">{t(locale, 'team_testimonial3_meta')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            {t(locale, 'team_cta_title')}
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            {t(locale, 'team_cta_sub1')}
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            {t(locale, 'team_cta_sub2')}
          </p>
          <a
            href={whatsappHref('team')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
          >
            <MessageCircle className="w-6 h-6 mr-3 inline-block" />
            {t(locale, 'contact_cta_button')}
            <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}