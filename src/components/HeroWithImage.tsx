'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, ArrowRight, Target } from 'lucide-react'
import { useEffect, useState } from 'react'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'

export default function HeroWithImage() {
  const [locale, setLocale] = useState<Locale>('de')
  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mobile-hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute left-0 right-0 bottom-0 top-0 md:inset-0 z-0">
        <Image
          src="/images/hero/hero-medical.jpg"
          alt={t(locale, 'home_hero_alt')}
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 modern-container text-center text-white pt-10 sm:pt-12 md:pt-16 lg:pt-18">
        
        
        {/* Main Headline */}
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-5 sm:mb-7 md:mb-9 modern-heading leading-tight modern-animate-fade-in-up">
              <span className="block text-white">{t(locale, 'home_hero_l1')}</span>
              <span className="block text-white">{t(locale, 'home_hero_l2')}</span>
              <span className="block text-white">{t(locale, 'home_hero_l3')}</span>
            </h1>
        
        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
          <span className="font-semibold text-white">{t(locale, 'home_hero_sub_bold')}</span><br />
          {t(locale, 'home_hero_sub_rest')}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-10 sm:mb-14 modern-animate-fade-in-up">
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0395A6] hover:bg-[#027686] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-colors duration-200 flex items-center justify-center space-x-3 group shadow-lg"
            >
            <MessageCircle className="w-5 h-5" />
            <span>{t(locale, 'home_hero_cta_primary')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/coaching"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 hover:border-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-3 group"
          >
            <span>{t(locale, 'home_hero_cta_secondary')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto modern-animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">94%</div>
            <p className="text-white/90 font-semibold text-base">{t(locale, 'home_trust_97_label')}</p>
            <p className="text-white/70 text-sm hidden md:block">{t(locale, 'home_trust_97_desc')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
            <p className="text-white/90 font-semibold text-base">{t(locale, 'home_trust_500_label')}</p>
            <p className="text-white/70 text-sm hidden md:block">{t(locale, 'home_trust_500_desc')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hidden md:block">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">6+</div>
            <p className="text-white/90 font-semibold text-base">{t(locale, 'home_trust_6_label')}</p>
            <p className="text-white/70 text-sm">{t(locale, 'home_trust_6_desc')}</p>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-12 mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl mx-auto modern-animate-fade-in-up hidden md:block">
          <div className="flex items-center justify-center space-x-2 text-white font-bold text-lg">
            <Target className="w-6 h-6" />
            <span>{t(locale, 'home_trust_banner_title')}</span>
          </div>
          <p className="text-white/90 text-base mt-3">
            {t(locale, 'home_trust_banner_desc')}
          </p>
        </div>
      </div>

      {/* Scroll Indicator removed on mobile for better UX */}
    </section>
  )
}
