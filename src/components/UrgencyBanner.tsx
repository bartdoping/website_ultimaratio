'use client'

import { useState, useEffect } from 'react'
import { Clock, Users, Zap, CheckCircle } from 'lucide-react'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { whatsappHref } from '@/lib/links'

export default function UrgencyBanner() {
  const [locale, setLocale] = useState<Locale>('de')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  // spotsLeft removed as unused

  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
    
    // Set end date (30 days from now)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="modern-section bg-[#0395A6] text-white">
      <div className="modern-container">
        <div className="modern-card bg-white/10 backdrop-blur-sm border border-white/20 text-center modern-animate-fade-in-up">
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <CheckCircle className="w-6 h-6 text-white" />
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                {t(locale, 'home_urgency_title')}
              </h2>
              <CheckCircle className="w-6 h-6 text-white" />
            </div>

            {/* Trust Message */}
            <div className="bg-white/20 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-black" />
                <span className="text-lg font-bold text-black">{t(locale, 'home_urgency_trust_title')}</span>
              </div>
              <p className="text-sm text-black">
                {t(locale, 'home_urgency_trust_sub')}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <Clock className="w-6 h-6 mx-auto mb-2 text-black" />
                <h3 className="font-bold mb-1 text-black">{t(locale, 'home_urgency_b1_title')}</h3>
                <p className="text-sm text-black">{t(locale, 'home_urgency_b1_sub')}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Zap className="w-6 h-6 mx-auto mb-2 text-black" />
                <h3 className="font-bold mb-1 text-black">{t(locale, 'home_urgency_b2_title')}</h3>
                <p className="text-sm text-black">{t(locale, 'home_urgency_b2_sub')}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Users className="w-6 h-6 mx-auto mb-2 text-black" />
                <h3 className="font-bold mb-1 text-black">{t(locale, 'home_urgency_b3_title')}</h3>
                <p className="text-sm text-black">{t(locale, 'home_urgency_b3_sub')}</p>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-8 hidden md:block">
              <h3 className="text-xl font-bold text-black mb-6">{t(locale, 'home_urgency_team_title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Mustafa Eid */}
                <div className="bg-white/20 rounded-lg p-6 flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/images/team/mustafa-eid.jpg" 
                      alt="Mustafa Eid - Gründer & Coach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-xl">Mustafa Eid</h4>
                    <p className="text-base text-black mb-2">{t(locale, 'home_urgency_mustafa_role')}</p>
                    <p className="text-sm text-black">{t(locale, 'home_urgency_mustafa_blurb')}</p>
                  </div>
                </div>

                {/* Ahkash Thavarajasingam */}
                <div className="bg-white/20 rounded-lg p-6 flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/images/team/ahkash-thavarajasingam.jpg" 
                      alt="Ahkash Thavarajasingam - Senior Coach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-xl">Ahkash Thavarajasingam</h4>
                    <p className="text-base text-black mb-2">{t(locale, 'home_urgency_ahkash_role')}</p>
                    <p className="text-sm text-black">{t(locale, 'home_urgency_ahkash_blurb')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a
                href={whatsappHref('home')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0395A6] hover:bg-gray-50 px-12 py-6 rounded-lg text-xl font-bold transition-colors duration-200 shadow-lg inline-flex items-center space-x-3"
              >
                <Zap className="w-6 h-6" />
                <span>{t(locale, 'home_urgency_cta')}</span>
              </a>
              
              <p className="text-sm text-white/90">
                {t(locale, 'home_urgency_tagline')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
