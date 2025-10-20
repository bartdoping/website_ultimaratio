'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function StickyWhatsAppCTA() {
  const [isVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isMinimized ? (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 max-w-sm">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Fragen? Wir helfen gerne.</h4>
              <p className="text-xs text-gray-600 mt-0.5">Kostenloses und unverbindliches Erstgespräch</p>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fenster minimieren"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="mb-4 space-y-1.5">
            <p className="text-xs text-gray-700">Antwort in der Regel innerhalb weniger Minuten.</p>
            <p className="text-xs text-gray-700">Diskret, professionell und zielorientiert.</p>
          </div>

          {/* CTA Button */}
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0395A6] hover:bg-[#028A9A] text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp-Nachricht senden</span>
          </a>

          {/* Footnote */}
          <p className="mt-3 text-[11px] text-gray-500 text-center">Kostenlos · Unverbindlich · Schnelle Rückmeldung</p>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-[#0395A6] hover:bg-[#028A9A] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          title="WhatsApp Chat öffnen"
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      )}
    </div>
  )
}
