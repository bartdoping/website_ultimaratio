'use client'

import { useCookies } from '../contexts/CookieContext'
import { Cookie, Settings, Shield, BarChart3, Target, Cog } from 'lucide-react'

export default function CookieBanner() {
  const { 
    showCookieBanner, 
    acceptAll, 
    rejectAll, 
    openCookieSettings 
  } = useCookies()

  if (!showCookieBanner) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cookie className="w-8 h-8 text-[#0395A6]" />
            </div>
            <h2 className="text-3xl font-bold text-black modern-heading mb-4">
              Cookie-Einstellungen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            </p>
          </div>

          {/* Cookie Categories Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl border border-green-200">
              <Shield className="w-8 h-8 text-green-600 mb-2" />
              <span className="text-sm font-semibold text-green-700">Notwendig</span>
              <span className="text-xs text-green-600 text-center">Immer aktiv</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
              <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-semibold text-blue-700">Analyse</span>
              <span className="text-xs text-blue-600 text-center">Optional</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-purple-50 rounded-xl border border-purple-200">
              <Target className="w-8 h-8 text-purple-600 mb-2" />
              <span className="text-sm font-semibold text-purple-700">Marketing</span>
              <span className="text-xs text-purple-600 text-center">Optional</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-50 rounded-xl border border-orange-200">
              <Cog className="w-8 h-8 text-orange-600 mb-2" />
              <span className="text-sm font-semibold text-orange-700">Funktional</span>
              <span className="text-xs text-orange-600 text-center">Optional</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={rejectAll}
              className="px-8 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors modern-focus"
            >
              Alle ablehnen
            </button>
            <button
              onClick={openCookieSettings}
              className="px-8 py-3 border-2 border-[#0395A6] rounded-lg text-[#0395A6] font-semibold hover:bg-[#0395A6] hover:text-white transition-colors modern-focus flex items-center justify-center gap-2"
            >
              <Settings className="w-5 h-5" />
              Einstellungen anpassen
            </button>
            <button
              onClick={acceptAll}
              className="px-8 py-3 bg-[#0395A6] text-white rounded-lg font-semibold hover:bg-[#0395A6]/90 transition-colors modern-focus"
            >
              Alle akzeptieren
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed text-center">
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
    </div>
  )
}
