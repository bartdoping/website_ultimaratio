'use client'

import Image from 'next/image'
import { CheckCircle, Users, Award, TrendingUp, Brain, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { whatsappHref } from '@/lib/links'

export default function SolutionVisual() {
  const [locale, setLocale] = useState<Locale>('de')
  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
  }, [])

  const solutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: t(locale, 'home_sol1_title'),
      description: t(locale, 'home_sol1_desc'),
      image: "/images/process/erfolg1.jpg",
      benefits: [
        t(locale, 'home_sol1_b1'),
        t(locale, 'home_sol1_b2'),
        t(locale, 'home_sol1_b3')
      ],
      color: "blue",
      successText: t(locale, 'home_sol1_success')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t(locale, 'home_sol2_title'),
      description: t(locale, 'home_sol2_desc'),
      image: "/images/process/erfolg2.jpg",
      benefits: [
        t(locale, 'home_sol2_b1'),
        t(locale, 'home_sol2_b2'),
        t(locale, 'home_sol2_b3')
      ],
      color: "green",
      successText: t(locale, 'home_sol2_success')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t(locale, 'home_sol3_title'),
      description: t(locale, 'home_sol3_desc'),
      image: "/images/process/erfolg3.jpg",
      benefits: [
        t(locale, 'home_sol3_b1'),
        t(locale, 'home_sol3_b2'),
        t(locale, 'home_sol3_b3')
      ],
      color: "purple",
      successText: t(locale, 'home_sol3_success')
    }
  ]

  return (
    <section id="solution" className="modern-section bg-[#F8FAFC]">
      <div className="modern-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 modern-heading modern-animate-fade-in-up">
            {t(locale, 'home_solution_title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto modern-text modern-animate-fade-in-up">
            {t(locale, 'home_solution_sub')}
          </p>
        </div>

        <div className="modern-grid modern-grid-1 gap-0 md:gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-transparent md:modern-card md:bg-white md:border-l-4 md:border-[#0395A6] md:shadow-xl modern-animate-fade-in-up">
              {/* Mobile: Kompakte Ansicht ohne Container */}
              <div className="md:hidden py-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#0395A6] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-black mb-1">{solution.title}</h3>
                    <p className="text-xs text-[#0395A6] font-semibold">{t(locale, 'home_scientifically_proven')}</p>
                  </div>
                </div>
              </div>

              {/* Desktop: Vollständige Ansicht */}
              <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-[#0395A6] rounded-full flex items-center justify-center text-white">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{solution.title}</h3>
                      <div className="bg-[#E6F4F6] text-[#027686] px-3 py-1 rounded-lg text-sm font-semibold">
                        {t(locale, 'home_scientifically_proven')}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="bg-[#E6F4F6] rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 text-[#027686] mb-3">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">{t(locale, 'home_benefits_title')}</span>
                    </div>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#0395A6]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Success Indicator */}
                  <div className="bg-[#0395A6] text-white p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-bold">{solution.successText}</span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={`${solution.title} - Erfolgreiche Medizinstudenten`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-16 modern-animate-fade-in-up hidden md:block">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#0395A6]">
            <h3 className="text-2xl font-bold text-center text-black mb-8">
              {t(locale, 'home_process_title')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0395A6] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{t(locale, 'home_process_step1_title')}</h4>
                <p className="text-gray-600">{t(locale, 'home_process_step1_text')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0395A6] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{t(locale, 'home_process_step2_title')}</h4>
                <p className="text-gray-600">{t(locale, 'home_process_step2_text')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0395A6] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{t(locale, 'home_process_step3_title')}</h4>
                <p className="text-gray-600">{t(locale, 'home_process_step3_text')}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <a
                href={whatsappHref('home')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0395A6] hover:bg-[#027686] text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 shadow-lg inline-flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>{t(locale, 'home_hero_cta_primary')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
