'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { t } from '@/i18n/dictionaries'
import { Menu, X, MessageCircle, Mail, Settings, ChevronDown, Globe } from 'lucide-react'
import { useCookies } from '../contexts/CookieContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoachingOpen, setIsCoachingOpen] = useState(false)
  const [isHumanmedizinOpen, setIsHumanmedizinOpen] = useState(false)
  const [isApprobationOpen, setIsApprobationOpen] = useState(false)
  const { openCookieSettings } = useCookies()
  const [locale, setLocale] = useState<'de' | 'en' | 'ar'>('de')
  const [isLangOpen, setIsLangOpen] = useState(false)

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

  const navigation = [
    { nameKey: 'nav_home', fallback: 'Home', href: '/' },
    { nameKey: 'nav_methods', fallback: 'Unsere Methoden', href: '/methoden' },
    { 
      nameKey: 'nav_coaching', fallback: 'Coaching',
      href: '/coaching',
      submenu: [
        { nameKey: 'nav_overview', href: '/coaching', isOverview: true },
        { 
          nameKey: 'nav_humanmedizin', 
          href: '#',
          submenu: [
            { nameKey: 'nav_vorklinik', href: '/vorklinik' },
            { nameKey: 'nav_klinik', href: '/klinik' },
            { nameKey: 'nav_medical_skills', href: '/medicalskills' }
          ]
        },
        { nameKey: 'nav_zahnmedizin', href: '/zahnmedizin' }
      ]
    },
    { nameKey: 'nav_examenskurse', fallback: 'Examenskurse', href: '/examenskurse' },
    { 
      nameKey: 'nav_approbation', fallback: 'Approbation',
      href: '#',
      submenu: [
        { nameKey: 'nav_knowledge_exam', href: '/kenntnispruefung' },
        { nameKey: 'nav_fachsprachpruefung', href: '/fachsprachpruefung' }
      ]
    },
    { nameKey: 'nav_team', fallback: 'Team', href: '/team' },
    { nameKey: 'nav_contact', fallback: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      {/* Top Bar (visible on mobile) */}
      <div className="bg-[#0395A6] text-white mobile-top-bar w-full">
        <div className="modern-container px-4 h-full">
          <div className="flex flex-nowrap justify-between items-center text-sm gap-3 md:gap-6 lg:gap-10 h-full">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a 
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">WhatsApp</span>
                <span className="xs:hidden">WhatsApp</span>
              </a>
              <a 
                href="mailto:info@ultima-rat.io"
                className="flex items-center hover:text-white/90 transition-colors"
              >
                <Mail className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">info@ultima-rat.io</span>
                <span className="sm:hidden">E-Mail</span>
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-3">
              <span className="text-white/80">100+ Prüfungen</span>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-white/80">94% Erfolg</span>
            </div>
          </div>
        </div>
      </div>
 
      {/* Main Header (white) */}
      <header className="bg-white border-b border-gray-200 shadow-sm w-full">
        <div className="modern-container w-full">
          <div className="flex flex-nowrap justify-between items-center h-16 md:h-16 min-h-[4rem] w-full">
            {/* Logo */}
            <div className="flex-shrink-0 min-w-0">
              <Link href="/" className="flex flex-nowrap items-center group min-w-0">
                <div className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl overflow-hidden shadow-lg logo-mobile flex-shrink-0">
                  <Image
                    src="/images/logo/logo.png"
                    alt="ultima-rat.io Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="ml-2 sm:ml-3 truncate">
                  <span className="text-base sm:text-lg font-bold text-black modern-heading block leading-5 truncate">ultima-rat.io</span>
                  <span className="text-xs sm:text-xs text-gray-500 hidden sm:block leading-4 truncate">Medizin-Nachhilfe</span>
                </div>
              </Link>
            </div>
 
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-4">
              {navigation.map((item) => (
                <div key={item.href} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        onClick={() => {
                          if (item.nameKey === 'nav_coaching') {
                            setIsCoachingOpen(!isCoachingOpen)
                            setIsApprobationOpen(false)
                          } else if (item.nameKey === 'nav_approbation') {
                            setIsApprobationOpen(!isApprobationOpen)
                            setIsCoachingOpen(false)
                            setIsHumanmedizinOpen(false)
                          }
                        }}
                        className="text-gray-700 hover:text-[#0395A6] px-2.5 py-1.5 text-sm font-medium leading-none transition-all duration-300 border-b-2 border-transparent hover:border-[#0395A6] modern-focus flex items-center"
                      >
                        {t(locale, item.nameKey)}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      {(item.nameKey === 'nav_coaching' && isCoachingOpen) || (item.nameKey === 'nav_approbation' && isApprobationOpen) ? (
                        <div 
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          onMouseLeave={() => {
                            if (item.nameKey === 'nav_coaching') {
                              setIsCoachingOpen(false)
                              setIsHumanmedizinOpen(false)
                            } else if (item.nameKey === 'nav_approbation') {
                              setIsApprobationOpen(false)
                            }
                          }}
                        >
                          {item.submenu.map((subItem) => (
                            subItem.submenu ? (
                              <div key={subItem.nameKey} className="relative group/submenu">
                                <div
                                  onMouseEnter={() => setIsHumanmedizinOpen(true)}
                                  className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0395A6] transition-colors flex items-center justify-between cursor-pointer"
                                >
                                  <span>{t(locale, subItem.nameKey)}</span>
                                  <ChevronDown className="w-3 h-3 ml-2 rotate-[-90deg]" />
                                </div>
                                {isHumanmedizinOpen && (
                                  <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    {subItem.submenu.map((subSubItem) => (
                                      <Link
                                        key={subSubItem.href}
                                        href={subSubItem.href}
                                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0395A6] transition-colors"
                                        onClick={() => {
                                          setIsCoachingOpen(false)
                                          setIsHumanmedizinOpen(false)
                                        }}
                                      >
                                        {t(locale, subSubItem.nameKey)}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0395A6] transition-colors"
                                onClick={() => {
                                  setIsCoachingOpen(false)
                                  setIsHumanmedizinOpen(false)
                                  setIsApprobationOpen(false)
                                }}
                              >
                                {t(locale, subItem.nameKey)}
                              </Link>
                            )
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-gray-700 hover:text-[#0395A6] px-2.5 py-1.5 text-sm font-medium leading-none transition-all duration-300 border-b-2 border-transparent hover:border-[#0395A6] modern-focus relative group"
                    >
                      {t(locale, item.nameKey)}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0395A6] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
 
            {/* Language Switcher + CTA Buttons */}
            <div className="hidden md:flex items-center space-x-2.5">
              <div className="relative pb-2" onMouseEnter={() => setIsLangOpen(true)} onMouseLeave={() => setIsLangOpen(false)}>
                <button className="px-2.5 py-1.5 text-xs md:text-sm text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-1" title="Sprache wählen">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{locale.toUpperCase()}</span>
                </button>
                {isLangOpen && (
                  <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <button onClick={() => { setIsLangOpen(false); setLang('de') }} className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${locale==='de'?'text-[#0395A6] font-semibold':'text-gray-700'}`}>DE</button>
                    <button onClick={() => { setIsLangOpen(false); setLang('en') }} className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${locale==='en'?'text-[#0395A6] font-semibold':'text-gray-700'}`}>EN</button>
                    <button onClick={() => { setIsLangOpen(false); setLang('ar') }} className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${locale==='ar'?'text-[#0395A6] font-semibold':'text-gray-700'}`}>AR</button>
                  </div>
                )}
              </div>
              <button
                onClick={openCookieSettings}
                className="p-2 text-gray-600 hover:text-[#0395A6] hover:bg-gray-100 rounded-lg transition-colors modern-focus"
                title="Cookie-Einstellungen"
              >
                <Settings className="w-4 h-4" />
              </button>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-4 py-2 rounded-lg text-xs md:text-sm font-semibold modern-focus group"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 inline-block group-hover:animate-pulse" />
                {t(locale, 'cta_intro_call')}
              </a>
            </div>
 
            {/* Mobile menu button */}
            {/* Mobile Controls: language, cookie settings, burger */}
            <div className="md:hidden flex flex-nowrap items-center gap-2 flex-shrink-0">
              <select
                value={locale}
                onChange={(e) => setLang(e.target.value as 'de' | 'en' | 'ar')}
                className="border border-gray-200 rounded-lg text-xs px-2 py-1.5 bg-white min-w-[3rem]"
                aria-label="Sprache wählen"
              >
                <option value="de">DE</option>
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
              <button
                onClick={openCookieSettings}
                className="p-2 text-gray-600 hover:text-[#0395A6] hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Cookie-Einstellungen"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0395A6] transition-all"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6 burger-mobile" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6 burger-mobile" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
 
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.href}>
                  {item.submenu ? (
                    <div>
                      {item.nameKey === 'nav_coaching' ? (
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:bg-gray-50 hover:text-[#0395A6] block px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t(locale, item.nameKey)} - {t(locale, 'nav_overview')}
                        </Link>
                      ) : (
                        <div className="text-gray-700 px-3 py-2.5 text-sm font-semibold">
                          {t(locale, item.nameKey)}
                        </div>
                      )}
                      {item.submenu.map((subItem) => (
                        subItem.submenu ? (
                          <div key={subItem.nameKey}>
                            <div className="text-gray-600 px-6 py-2 text-sm font-semibold">
                              {t(locale, subItem.nameKey)}
                            </div>
                            {subItem.submenu.map((subSubItem) => (
                              <Link
                                key={subSubItem.href}
                                href={subSubItem.href}
                                className="text-gray-500 hover:bg-gray-50 hover:text-[#0395A6] block px-9 py-2 rounded-lg text-sm font-medium transition-all"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {t(locale, subSubItem.nameKey)}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="text-gray-600 hover:bg-gray-50 hover:text-[#0395A6] block px-6 py-2 rounded-lg text-sm font-medium transition-all"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {t(locale, subItem.nameKey)}
                          </Link>
                        )
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:bg-gray-50 hover:text-[#0395A6] block px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(locale, item.nameKey)}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <button
                  onClick={() => {
                    openCookieSettings()
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#0395A6] transition-colors flex items-center justify-center gap-2 mb-2"
                >
                  <Settings className="w-4 h-4" />
                  Cookie-Einstellungen
                </button>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button block w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 mr-1.5 inline-block" />
                  Erstgespräch
                </a>
                {/* Coaching CTA im mobilen Footer entfernt */}
              </div>
            </div>
          </div>
        )}
      </header>
      </div>
      {/* Spacer for fixed header */}
      <div className="h-[6.5rem] md:h-[7rem]"></div>
    </>
  )
}