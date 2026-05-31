'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { useEffect, useState } from 'react'

const WHATSAPP = 'http://wa.me/491639347633'

export default function Footer() {
  const [locale, setLocale] = useState<Locale>('de')

  useEffect(() => {
    try {
      const cookieLocale = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(cookieLocale))
    } catch {
      setLocale('de')
    }
  }, [])

  const nav = [
    { label: t(locale, 'nav_home'), href: '/' },
    { label: t(locale, 'nav_methods'), href: '/methoden' },
    { label: t(locale, 'nav_coaching'), href: '/coaching' },
    { label: t(locale, 'nav_examenskurse'), href: '/examenskurse' },
    { label: t(locale, 'nav_team'), href: '/team' },
    { label: t(locale, 'nav_contact'), href: '/kontakt' },
  ]

  const programs = [
    { label: t(locale, 'nav_vorklinik'), href: '/vorklinik' },
    { label: t(locale, 'nav_klinik'), href: '/klinik' },
    { label: t(locale, 'nav_zahnmedizin'), href: '/zahnmedizin' },
    { label: t(locale, 'nav_knowledge_exam'), href: '/kenntnispruefung' },
    { label: t(locale, 'nav_fachsprachpruefung'), href: '/fachsprachpruefung' },
  ]

  const legal = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
    { label: 'Widerruf', href: '/widerruf' },
    { label: 'Cookie-Richtlinie', href: '/cookie-richtlinie' },
  ]

  return (
    <footer className="section-ink relative overflow-hidden mt-24">
      {/* Top CTA band */}
      <div className="modern-container pt-20 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center border-b border-white/10 pb-16">
          <div>
            <span className="kicker text-white/70 mb-5">
              {t(locale, 'cta_intro_call')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.08] text-white tracking-tight">
              {t(locale, 'home_final_title')}
            </h2>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-lg leading-relaxed">
              {t(locale, 'home_final_sub')}
            </p>
          </div>
          <div className="lg:justify-self-end w-full lg:w-auto">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full lg:w-auto bg-white text-[var(--ink)] rounded-full px-8 py-4 text-base font-semibold hover:bg-white/90 transition-colors group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t(locale, 'home_hero_cta_primary')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12 pt-16">
          {/* Brand + contact */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="ultima-rat.io Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-semibold text-base" style={{ fontFamily: 'var(--font-display)' }}>ultima-rat.io</span>
                <span className="block text-white/50 text-xs">Medizin-Nachhilfe</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-7">
              {t(locale, 'footer_about')}
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-white/40 flex-shrink-0" />
                <span>Hallesche Straße 94a, 44143 Dortmund</span>
              </li>
              <li>
                <a href="mailto:info@ultima-rat.io" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                  <span>info@ultima-rat.io</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Clock className="w-4 h-4 text-white/40 flex-shrink-0" />
                <span>Mo–Fr: 9:00–18:00 Uhr</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50 mb-5" style={{ fontFamily: 'var(--font-sans)' }}>
              {t(locale, 'footer_nav')}
            </h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50 mb-5" style={{ fontFamily: 'var(--font-sans)' }}>
              {t(locale, 'footer_programs')}
            </h3>
            <ul className="space-y-3">
              {programs.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50 mb-5" style={{ fontFamily: 'var(--font-sans)' }}>
              {t(locale, 'footer_legal')}
            </h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('open-cookie-settings'))
                    }
                  }}
                  className="text-left text-white/70 hover:text-white transition-colors text-sm"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <p className="text-white/40 text-xs leading-relaxed max-w-4xl">
            {t(locale, 'legal_disclaimer')}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="modern-container py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/50 text-xs">© 2025 ultima-rat.io. Alle Rechte vorbehalten.</p>
          <p className="text-white/40 text-xs">Optimale Prüfungsvorbereitung für dein Medizinstudium.</p>
        </div>
      </div>
    </footer>
  )
}
