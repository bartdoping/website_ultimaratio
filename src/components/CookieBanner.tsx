'use client'

import Link from 'next/link'
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/20">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Cookie className="w-6 h-6 text-[#0395A6]" />
            </div>
            <h2 className="cookie-title text-black modern-heading mb-3">
              Cookie-Einstellungen
            </h2>
            <p className="cookie-text text-gray-600 max-w-xl mx-auto">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            </p>
          </div>

          {/* Cookie Categories Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg border border-green-200">
              <Shield className="w-6 h-6 text-green-600 mb-1" />
              <span className="badge-text text-green-700">Notwendig</span>
              <span className="text-xs text-green-600 text-center">Immer aktiv</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <BarChart3 className="w-6 h-6 text-blue-600 mb-1" />
              <span className="badge-text text-blue-700">Analyse</span>
              <span className="text-xs text-blue-600 text-center">Optional</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
              <Target className="w-6 h-6 text-purple-600 mb-1" />
              <span className="badge-text text-purple-700">Marketing</span>
              <span className="text-xs text-purple-600 text-center">Optional</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
              <Cog className="w-6 h-6 text-orange-600 mb-1" />
              <span className="badge-text text-orange-700">Funktional</span>
              <span className="text-xs text-orange-600 text-center">Optional</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={rejectAll}
              className="button-text px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors modern-focus"
            >
              Alle ablehnen
            </button>
            <button
              onClick={openCookieSettings}
              className="button-text px-6 py-2 border-2 border-[#0395A6] rounded-lg text-[#0395A6] hover:bg-[#0395A6] hover:text-white transition-colors modern-focus flex items-center justify-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Einstellungen anpassen
            </button>
            <button
              onClick={acceptAll}
              className="button-text px-6 py-2 bg-[#0395A6] text-white rounded-lg hover:bg-[#0395A6]/90 transition-colors modern-focus"
            >
              Alle akzeptieren
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="cookie-text text-gray-600 text-center">
              Weitere Informationen finden Sie in unserer{' '}
              <Link 
                href="/datenschutz" 
                className="text-[#0395A6] hover:underline font-medium"
              >
                Datenschutzerklärung
              </Link>
              {' '}und{' '}
              <Link 
                href="/cookie-richtlinie" 
                className="text-[#0395A6] hover:underline font-medium"
              >
                Cookie-Richtlinie
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
