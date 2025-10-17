'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, MessageCircle, Phone, Mail, Settings } from 'lucide-react'
import { useCookies } from '../contexts/CookieContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openCookieSettings } = useCookies()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Unsere Methoden', href: '/methoden' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Kenntnisprüfung', href: '/kenntnispruefung' },
    { name: 'Team', href: '/team' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0395A6] text-white py-2">
        <div className="modern-container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+49 163 9347633</span>
              </div>
              <a 
                href="mailto:info@ultima-rat.io"
                className="flex items-center hover:text-white/90 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ultima-rat.io</span>
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-3">
              <span className="text-white/80">500+ Prüfungen</span>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-white/80">95% Erfolg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="modern-container">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="h-12 w-12 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Image
                    src="/images/logo/logo.png"
                    alt="ultima-rat.io Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold text-black modern-heading block">ultima-rat.io</span>
                  <span className="text-xs text-gray-500">Medizin-Nachhilfe</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0395A6] px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#0395A6] modern-focus relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0395A6] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={openCookieSettings}
                className="p-2.5 text-gray-600 hover:text-[#0395A6] hover:bg-gray-100 rounded-lg transition-colors modern-focus"
                title="Cookie-Einstellungen"
              >
                <Settings className="w-4 h-4" />
              </button>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-5 py-2.5 rounded-lg text-sm font-semibold modern-focus group"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 inline-block group-hover:animate-pulse" />
                Erstgespräch
              </a>
              <Link
                href="/coaching"
                className="modern-button-secondary px-5 py-2.5 rounded-lg text-sm font-semibold modern-focus"
              >
                Coaching
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0395A6] transition-all"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-gray-50 hover:text-[#0395A6] block px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
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
                <Link
                  href="/coaching"
                  className="modern-button-secondary block w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Coaching
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}