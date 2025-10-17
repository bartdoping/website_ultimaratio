'use client'

import { useCookies } from '../contexts/CookieContext'
import { Cookie, Settings, X, Shield, BarChart3, Target, Cog } from 'lucide-react'

export default function CookieBanner() {
  const { 
    showCookieBanner, 
    acceptAll, 
    rejectAll, 
    openCookieSettings 
  } = useCookies()

  if (!showCookieBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="modern-container py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Cookie Icon and Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-[#0395A6]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black modern-heading">
                Cookie-Einstellungen
              </h3>
              <p className="text-sm text-gray-600">
                Wir verwenden Cookies für die optimale Nutzung unserer Website
              </p>
            </div>
          </div>

          {/* Cookie Categories Preview */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Notwendig</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Analyse</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-full">
              <Target className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Marketing</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full">
              <Cog className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Funktional</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={rejectAll}
              className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors modern-focus"
            >
              Ablehnen
            </button>
            <button
              onClick={openCookieSettings}
              className="px-6 py-2.5 border border-[#0395A6] rounded-lg text-[#0395A6] font-medium hover:bg-[#0395A6] hover:text-white transition-colors modern-focus flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Einstellungen
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2.5 bg-[#0395A6] text-white rounded-lg font-medium hover:bg-[#0395A6]/90 transition-colors modern-focus"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Notwendige Cookies sind für die Grundfunktionen der Website erforderlich. 
            Weitere Informationen finden Sie in unserer{' '}
            <a 
              href="/datenschutz" 
              className="text-[#0395A6] hover:underline font-medium"
            >
              Datenschutzerklärung
            </a>
            {' '}und{' '}
            <a 
              href="/cookie-richtlinie" 
              className="text-[#0395A6] hover:underline font-medium"
            >
              Cookie-Richtlinie
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
