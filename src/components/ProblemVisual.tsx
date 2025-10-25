'use client'

import Image from 'next/image'
import { Brain, AlertTriangle, TrendingDown, Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'

export default function ProblemVisual() {
  const [locale, setLocale] = useState<Locale>('de')
  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
  }, [])

  const problems = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: t(locale, 'home_prob1_title'),
      description: t(locale, 'home_prob1_desc'),
      image: "/images/problems/problem1.jpg",
      stats: t(locale, 'home_prob1_stats'),
      color: "red",
      emotionalImpact: [
        t(locale, 'home_prob1_e1'),
        t(locale, 'home_prob1_e2'),
        t(locale, 'home_prob1_e3'),
        t(locale, 'home_prob1_e4')
      ],
      solutionText: t(locale, 'home_prob1_solution')
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: t(locale, 'home_prob2_title'),
      description: t(locale, 'home_prob2_desc'),
      image: "/images/problems/problem2.jpg", 
      stats: t(locale, 'home_prob2_stats'),
      color: "red",
      emotionalImpact: [
        t(locale, 'home_prob2_e1'),
        t(locale, 'home_prob2_e2'),
        t(locale, 'home_prob2_e3'),
        t(locale, 'home_prob2_e4')
      ],
      solutionText: t(locale, 'home_prob2_solution')
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: t(locale, 'home_prob3_title'),
      description: t(locale, 'home_prob3_desc'),
      image: "/images/problems/problem3.jpg",
      stats: t(locale, 'home_prob3_stats'),
      color: "red",
      emotionalImpact: [
        t(locale, 'home_prob3_e1'),
        t(locale, 'home_prob3_e2'),
        t(locale, 'home_prob3_e3'),
        t(locale, 'home_prob3_e4')
      ],
      solutionText: t(locale, 'home_prob3_solution')
    }
  ]

  return (
    <section className="modern-section bg-white">
      <div className="modern-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 modern-heading modern-animate-fade-in-up">
            {t(locale, 'home_problem_title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto modern-text modern-animate-fade-in-up">
            {t(locale, 'home_problem_sub')}
          </p>
        </div>

        <div className="modern-grid modern-grid-1 gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="modern-card bg-white border-l-4 border-red-500 shadow-xl modern-animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{problem.title}</h3>
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-lg text-sm font-semibold">
                        {problem.stats}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {problem.description}
                  </p>

                  {/* Emotional Impact */}
                  <div className="bg-red-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 text-red-800">
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold">{t(locale, 'home_emotional_impact')}</span>
                    </div>
                    <ul className="mt-2 text-red-700 text-sm space-y-1">
                      {problem.emotionalImpact.map((impact, impactIndex) => (
                        <li key={impactIndex}>{impact}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Mini CTA */}
                  <div className="bg-[#0395A6] text-white p-4 rounded-lg">
                    <p className="font-bold text-center">
                      {problem.solutionText}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={problem.image}
                    alt={`${problem.title} - Medizinstudent in schwieriger Situation`}
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

        {/* Transition CTA */}
            <div className="text-center mt-16 modern-animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              {t(locale, 'home_transition_title')}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {t(locale, 'home_transition_text')}
            </p>
            <a
              href="#solution"
              className="hidden sm:inline-flex bg-[#0395A6] hover:bg-[#028A9A] text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              → {t(locale, 'home_transition_cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
