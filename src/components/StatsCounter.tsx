'use client'

import { useState, useEffect, useRef } from 'react'
import { TrendingUp, Users, Award, Target } from 'lucide-react'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'
import { whatsappHref } from '@/lib/links'

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [locale, setLocale] = useState<Locale>('de')
  const [counts, setCounts] = useState({
    success: 0,
    students: 0,
    years: 0,
    improvement: 0
  })
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true
          setIsVisible(true)
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) {
      return
    }

    const targets = {
      success: 94,
      students: 100,
      years: 6,
      improvement: 1.3
    }

    const duration = 1500 // a bit faster for mobile
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        success: Math.floor(targets.success * progress),
        students: Math.floor(targets.students * progress),
        years: Math.floor(targets.years * progress),
        improvement: Math.floor(targets.improvement * progress * 10) / 10
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: `${counts.success}%`,
      label: t(locale, 'stats_label_success'),
      description: t(locale, 'stats_desc_success')
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: `${counts.students}+`,
      label: t(locale, 'stats_label_students'),
      description: t(locale, 'stats_desc_students')
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: `${counts.years}+`,
      label: t(locale, 'stats_label_years'),
      description: t(locale, 'stats_desc_years')
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: `+${counts.improvement}`,
      label: t(locale, 'stats_label_improvement'),
      description: t(locale, 'stats_desc_improvement')
    }
  ]

  return (
    <section ref={sectionRef} className="modern-section bg-[#F8FAFC] text-black">
      <div className="modern-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 modern-heading modern-animate-fade-in-up">
            {t(locale, 'stats_title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
            {t(locale, 'stats_sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="modern-card bg-white border border-gray-200 text-center modern-animate-fade-in-up">
              <div className="p-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0395A6] rounded-full flex items-center justify-center text-white mx-auto mb-8">
                  {stat.icon}
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-[#0395A6] mb-6">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 text-base">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 modern-animate-fade-in-up hidden md:block">
          <a
            href={whatsappHref('home')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0395A6] hover:bg-[#027686] text-white px-16 py-8 rounded-lg text-lg font-bold transition-colors duration-200 shadow-lg inline-flex items-center space-x-4"
          >
            <Users className="w-8 h-8" />
            <span>{t(locale, 'stats_cta_join')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
