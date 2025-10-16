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
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-[#0395A6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UR</span>
              </div>
              <span className="ml-3 text-xl font-bold text-black">ultima-rat.io</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#0395A6] px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#0395A6]"
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
              className="primary-button px-6 py-2 rounded-lg text-sm font-semibold"
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
