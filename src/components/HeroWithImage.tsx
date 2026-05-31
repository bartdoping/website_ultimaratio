'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, ArrowRight, ShieldCheck, Star } from 'lucide-react'
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

  const stats = [
    { value: '94%', label: t(locale, 'home_trust_97_label') },
    { value: '100+', label: t(locale, 'home_trust_500_label') },
    { value: '6+', label: t(locale, 'home_trust_6_label') },
  ]

  return (
    <section className="modern-hero modern-section overflow-hidden">
      <div className="modern-container">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div className="modern-animate-fade-in-up">
            <span className="kicker mb-6">
              <ShieldCheck className="w-4 h-4" />
              {t(locale, 'home_scientifically_proven')}
            </span>

            <h1 className="mt-5 text-[2.6rem] sm:text-6xl lg:text-[4.25rem] leading-[1.04] tracking-tight text-[var(--ink)]">
              <span className="block">{t(locale, 'home_hero_l1')}</span>
              <span className="block italic text-[var(--brand-dark)]">{t(locale, 'home_hero_l2')}</span>
              <span className="block">{t(locale, 'home_hero_l3')}</span>
            </h1>

            <p className="mt-7 text-base sm:text-lg text-[var(--body)] max-w-xl leading-relaxed">
              <span className="font-semibold text-[var(--ink)]">{t(locale, 'home_hero_sub_bold')}</span>{' '}
              {t(locale, 'home_hero_sub_rest')}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-7 py-4 text-base group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t(locale, 'home_hero_cta_primary')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link href="/coaching" className="modern-button-secondary px-7 py-4 text-base">
                {t(locale, 'home_hero_cta_secondary')}
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
              {stats.map((s, i) => (
                <div key={i} className="flex items-baseline gap-2.5">
                  <span className="text-3xl font-semibold text-[var(--ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {s.value}
                  </span>
                  <span className="text-sm text-[var(--muted)] max-w-[8rem] leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative modern-animate-fade-in">
            <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-xl)] ring-1 ring-black/5">
              <Image
                src="/images/hero/hero-medical.jpg"
                alt={t(locale, 'home_hero_alt')}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute -bottom-5 left-5 sm:left-8 bg-white rounded-2xl shadow-[var(--shadow-lg)] border border-[var(--border)] px-5 py-4 flex items-center gap-3 max-w-[16rem]">
              <div className="icon-chip flex-shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-[var(--ink)] leading-tight">
                  {t(locale, 'home_trust_97_label')}
                </div>
                <div className="text-xs text-[var(--muted)] leading-tight truncate">
                  {t(locale, 'home_trust_97_desc')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
