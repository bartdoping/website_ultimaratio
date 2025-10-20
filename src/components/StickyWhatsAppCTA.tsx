'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function StickyWhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Show CTA after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isMinimized ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-sm animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0395A6] rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Brauchst du Hilfe?</h4>
                <p className="text-xs text-gray-600">Wir sind da!</p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="mb-4">
            <p className="text-sm text-gray-700 mb-3">
              <strong>Kostenloses Erstgespräch</strong><br />
              📚 <strong>97% Erfolgsquote</strong><br />
              ⚡ <strong>Sofortige Hilfe</strong>
            </p>
            <div className="bg-blue-50 rounded-lg p-3 mb-3">
              <p className="text-xs text-blue-800 font-medium">
                💬 Schreib uns auf WhatsApp - wir antworten sofort!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0395A6] hover:bg-[#028A9A] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 group-hover:animate-pulse" />
            <span>Jetzt schreiben</span>
          </a>

          {/* Trust indicators */}
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              ✓ Kostenlos ✓ Unverbindlich ✓ Sofort
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-[#0395A6] hover:bg-[#028A9A] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 group hover:shadow-xl"
          title="WhatsApp Chat öffnen"
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      )}
    </div>
  )
}
