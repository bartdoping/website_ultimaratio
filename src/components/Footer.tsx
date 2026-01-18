'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Phone, Mail, MapPin, Clock, Star } from 'lucide-react'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { useEffect, useState } from 'react'

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
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Spacer to create gap between content and footer */}
      <div className="h-16"></div>
      
      {/* Main Footer Content */}
      <div className="modern-container pt-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="ultima-rat.io Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-3 sm:ml-4">
                <span className="text-lg sm:text-xl font-bold text-white block">ultima-rat.io</span>
                <span className="text-sm sm:text-lg text-gray-300">Medizin-Nachhilfe</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed modern-text max-w-md">
              Professionelle Medizin-Nachhilfe mit approbierten Ärzt:innen. 
              Wissenschaftlich fundierte Lernmethoden für optimale Prüfungsvorbereitung.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#0395A6] mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-lg">Warburghof 14, 30627 Hannover, Deutschland</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#0395A6] flex-shrink-0" />
                <span className="text-sm sm:text-lg">+49 163 9347633</span>
              </div>
              <a 
                href="mailto:info@ultima-rat.io"
                className="flex items-center text-gray-300 hover:text-[#0395A6] transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#0395A6] flex-shrink-0" />
                <span className="text-sm sm:text-lg">info@ultima-rat.io</span>
              </a>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#0395A6] flex-shrink-0" />
                <span className="text-sm sm:text-lg">Mo-Fr: 9:00-18:00 Uhr</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/methoden" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Unsere Methoden
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="/kenntnispruefung" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Kenntnisprüfung
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-gray-300 text-lg">Einzelcoaching (<span className="text-xs">ab </span>49€/60min)</li>
              <li className="text-gray-300 text-lg">Crashkurse (beliebig viele Stunden)</li>
              <li className="text-gray-300 text-lg">Prüfungsvorbereitung</li>
              <li className="text-gray-300 text-lg">Online via Zoom</li>
            </ul>

            <h3 className="text-lg font-bold mb-6 text-white">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/cookie-richtlinie" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Cookie-Richtlinie
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/widerruf" className="text-gray-300 hover:text-[#0395A6] transition-colors text-lg">
                  Widerruf
                </Link>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    if (typeof window !== 'undefined') {
                      const evt = new CustomEvent('open-cookie-settings')
                      window.dispatchEvent(evt)
                    }
                  }}
                  className="text-left text-gray-300 hover:text-[#0395A6] transition-colors text-lg"
                >
                  Cookie-Einstellungen öffnen
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-700 mt-16 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-xl font-bold text-[#0395A6] mb-2">94%</div>
              <div className="text-gray-300">Erfolgsquote</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#0395A6] mb-2">100+</div>
              <div className="text-gray-300">Erfolgreiche Prüfungen</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#0395A6] mb-2">6+</div>
              <div className="text-gray-300">Jahre Erfahrung</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-700 mt-16 pt-16 pb-16 text-center">
          <h3 className="text-lg font-bold mb-4 text-white">Bereit für deine Prüfung?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Starte jetzt mit deinem kostenlosen Erstgespräch
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button px-8 py-4 rounded-lg text-lg font-semibold modern-focus inline-block group"
          >
            <MessageCircle className="w-5 h-5 mr-3 inline-block group-hover:animate-pulse" />
            Kostenloses Erstgespräch
          </a>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm leading-relaxed max-w-4xl mx-auto">
              {t(locale, 'legal_disclaimer')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="modern-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="mb-1">Copyright © 2025 ultima-rat.io. Alle Rechte vorbehalten.</p>
              <p>ultima-rat.io - Optimale Prüfungs-Vorbereitung für dein Medizinstudium.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400 text-sm">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                <span>Bewertet mit 5.0/5.0</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span className="text-gray-400 text-sm">Vertrauenswürdig</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}