'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { t } from '@/i18n/dictionaries'
import { Menu, X, MessageCircle, Settings, ChevronDown, Globe } from 'lucide-react'
import { useCookies } from '../contexts/CookieContext'

const WHATSAPP = 'http://wa.me/491639347633'

type SubItem = { nameKey: string; href: string }
type NavItem = { nameKey: string; href: string; submenu?: SubItem[] }

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)
  const { openCookieSettings } = useCookies()
  const [locale, setLocale] = useState<'de' | 'en' | 'ar'>('de')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      if (v === 'de' || v === 'en' || v === 'ar') setLocale(v)
    } catch {}
  }, [])

  const setLang = (v: 'de' | 'en' | 'ar') => {
    try {
      document.cookie = `lang=${v}; path=/; max-age=${60 * 60 * 24 * 365}`
      setLocale(v)
      window.location.reload()
    } catch {}
  }

  const navigation: NavItem[] = [
    { nameKey: 'nav_methods', href: '/methoden' },
    {
      nameKey: 'nav_coaching',
      href: '/coaching',
      submenu: [
        { nameKey: 'nav_overview', href: '/coaching' },
        { nameKey: 'nav_vorklinik', href: '/vorklinik' },
        { nameKey: 'nav_klinik', href: '/klinik' },
        { nameKey: 'nav_medical_skills', href: '/medicalskills' },
        { nameKey: 'nav_zahnmedizin', href: '/zahnmedizin' },
      ],
    },
    { nameKey: 'nav_examenskurse', href: '/examenskurse' },
    {
      nameKey: 'nav_approbation',
      href: '/kenntnispruefung',
      submenu: [
        { nameKey: 'nav_knowledge_exam', href: '/kenntnispruefung' },
        { nameKey: 'nav_fachsprachpruefung', href: '/fachsprachpruefung' },
      ],
    },
    { nameKey: 'nav_team', href: '/team' },
    { nameKey: 'nav_contact', href: '/kontakt' },
  ]

  return (
    <div className="site-header sticky top-0 left-0 right-0 z-50" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="modern-container">
        <div className="flex items-center justify-between h-16 lg:h-18 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="h-9 w-9 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/images/logo/logo.png"
                alt="ultima-rat.io Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="leading-tight min-w-0">
              <span className="block text-[15px] font-semibold text-[var(--ink)] truncate" style={{ fontFamily: 'var(--font-display)' }}>
                ultima-rat.io
              </span>
              <span className="hidden sm:block text-[11px] text-[var(--muted)] truncate">Medizin-Nachhilfe</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.nameKey}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.nameKey)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium text-[var(--body)] hover:text-[var(--brand-dark)] rounded-lg transition-colors"
                    >
                      {t(locale, item.nameKey)}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </Link>
                    {openDropdown === item.nameKey && (
                      <div className="absolute top-full left-0 pt-2 w-60">
                        <div className="bg-white rounded-2xl shadow-[var(--shadow-lg)] border border-[var(--border)] p-2">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-3.5 py-2.5 text-sm text-[var(--body)] hover:bg-[var(--surface)] hover:text-[var(--brand-dark)] rounded-xl transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {t(locale, sub.nameKey)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-[13.5px] font-medium text-[var(--body)] hover:text-[var(--brand-dark)] rounded-lg transition-colors"
                  >
                    {t(locale, item.nameKey)}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Language */}
            <div
              ref={langRef}
              className="relative hidden sm:block"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-[var(--body)] hover:text-[var(--brand-dark)] rounded-lg transition-colors"
                title="Sprache wählen"
              >
                <Globe className="w-4 h-4" />
                <span>{locale.toUpperCase()}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 top-full pt-2 w-28">
                  <div className="bg-white rounded-xl shadow-[var(--shadow-lg)] border border-[var(--border)] p-1.5">
                    {(['de', 'en', 'ar'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => { setIsLangOpen(false); setLang(l) }}
                        className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${locale === l ? 'text-[var(--brand-dark)] font-semibold bg-[var(--surface)]' : 'text-[var(--body)] hover:bg-[var(--surface)]'}`}
                      >
                        {l.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cookie settings */}
            <button
              onClick={openCookieSettings}
              className="hidden sm:inline-flex p-2 text-[var(--muted)] hover:text-[var(--brand-dark)] rounded-lg transition-colors"
              title="Cookie-Einstellungen"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-[var(--brand-dark)] text-white rounded-full px-4 py-2 text-[13px] font-semibold hover:bg-[var(--brand-deep)] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t(locale, 'cta_intro_call')}
            </a>

            {/* Mobile controls */}
            <select
              value={locale}
              onChange={(e) => setLang(e.target.value as 'de' | 'en' | 'ar')}
              className="lg:hidden border border-[var(--border)] rounded-lg text-xs px-2 py-1.5 bg-white"
              aria-label="Sprache wählen"
            >
              <option value="de">DE</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--ink)] hover:bg-[var(--surface)] transition-colors"
              aria-label="Menü"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--border)] shadow-[var(--shadow-lg)] max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="modern-container py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.nameKey}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setMobileOpen(mobileOpen === item.nameKey ? null : item.nameKey)}
                      className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-medium text-[var(--ink)] rounded-lg hover:bg-[var(--surface)] transition-colors"
                    >
                      {t(locale, item.nameKey)}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpen === item.nameKey ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileOpen === item.nameKey && (
                      <div className="pl-3 pb-1 space-y-0.5">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-3 py-2.5 text-sm text-[var(--body)] rounded-lg hover:bg-[var(--surface)] hover:text-[var(--brand-dark)] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {t(locale, sub.nameKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-[15px] font-medium text-[var(--ink)] rounded-lg hover:bg-[var(--surface)] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(locale, item.nameKey)}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 mt-2 border-t border-[var(--border)] space-y-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[var(--brand-dark)] text-white rounded-full px-4 py-3 text-sm font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                {t(locale, 'cta_intro_call')}
              </a>
              <button
                onClick={() => { openCookieSettings(); setIsMenuOpen(false) }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--body)] hover:bg-[var(--surface)] transition-colors"
              >
                <Settings className="w-4 h-4" />
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
