'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Unsere Methoden', href: '/methoden' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Kenntnisprüfung', href: '/kenntnispruefung' },
    { name: 'Team', href: '/team' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="academic-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="h-10 w-10 bg-[#0395A6] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">UR</span>
              </div>
              <span className="ml-4 text-2xl font-bold text-black academic-heading">ultima-rat.io</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#0395A6] px-4 py-2 text-base font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#0395A6] focus-ring"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:flex">
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button px-8 py-3 rounded-lg text-base font-semibold focus-ring"
            >
              Kostenloses Erstgespräch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white block px-3 py-2 rounded-lg text-sm font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Kostenloses Erstgespräch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
