'use client'

import { useCookies } from '../contexts/CookieContext'
import { X, Shield, BarChart3, Target, Cog, Info, Check } from 'lucide-react'

export default function CookieSettings() {
  const { 
    showCookieSettings, 
    cookiePreferences, 
    closeCookieSettings, 
    savePreferences, 
    updateCookiePreference 
  } = useCookies()

  if (!showCookieSettings) return null

  const handleSave = () => {
    savePreferences(cookiePreferences)
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    savePreferences(allAccepted)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    savePreferences(onlyNecessary)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center">
              <Cog className="w-5 h-5 text-[#0395A6]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black modern-heading">
                Cookie-Einstellungen
              </h2>
              <p className="text-gray-600">
                Wählen Sie aus, welche Cookies Sie zulassen möchten
              </p>
            </div>
          </div>
          <button
            onClick={closeCookieSettings}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors modern-focus"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Introduction */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Ihre Privatsphäre ist uns wichtig
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. 
                  Sie können Ihre Einstellungen jederzeit ändern. Notwendige Cookies 
                  können nicht deaktiviert werden, da sie für die Grundfunktionen der Website erforderlich sind.
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Notwendige Cookies</h3>
                    <p className="text-sm text-gray-600">Immer aktiv</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Aktiv</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. 
                Sie werden normalerweise nur als Reaktion auf Aktionen gesetzt, die Sie ausführen und die einer Anfrage 
                nach Diensten entsprechen, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder 
                das Ausfüllen von Formularen.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Analyse-Cookies</h3>
                    <p className="text-sm text-gray-600">Helfen uns, die Website zu verbessern</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    onChange={(e) => updateCookiePreference('analytics', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${
                    cookiePreferences.analytics ? 'bg-[#0395A6]' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                      cookiePreferences.analytics ? 'translate-x-5' : 'translate-x-0.5'
                    } mt-0.5`} />
                  </div>
                </label>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung 
                unserer Website messen und verbessern können. Sie helfen uns zu wissen, welche Seiten am beliebtesten 
                und am wenigsten beliebt sind und zu sehen, wie sich Besucher auf der Website bewegen.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Beispiele:</strong> Google Analytics, Hotjar, Mixpanel
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Marketing-Cookies</h3>
                    <p className="text-sm text-gray-600">Für personalisierte Werbung</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    onChange={(e) => updateCookiePreference('marketing', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${
                    cookiePreferences.marketing ? 'bg-[#0395A6]' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                      cookiePreferences.marketing ? 'translate-x-5' : 'translate-x-0.5'
                    } mt-0.5`} />
                  </div>
                </label>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu zeigen, 
                die relevant und ansprechend für den einzelnen Benutzer sind und daher wertvoller für Verlage und 
                werbetreibende Drittanbieter sind.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Beispiele:</strong> Facebook Pixel, Google Ads, LinkedIn Insight Tag
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Cog className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Funktionale Cookies</h3>
                    <p className="text-sm text-gray-600">Für erweiterte Website-Funktionen</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.functional}
                    onChange={(e) => updateCookiePreference('functional', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${
                    cookiePreferences.functional ? 'bg-[#0395A6]' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                      cookiePreferences.functional ? 'translate-x-5' : 'translate-x-0.5'
                    } mt-0.5`} />
                  </div>
                </label>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. 
                Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir zu unseren Seiten hinzugefügt haben.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Beispiele:</strong> YouTube Videos, Google Maps, Chat-Widgets
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Weitere Informationen über unsere Verwendung von Cookies finden Sie in unserer{' '}
              <a href="/datenschutz" className="text-[#0395A6] hover:underline font-medium">
                Datenschutzerklärung
              </a>
              {' '}und unserer{' '}
              <a href="/cookie-richtlinie" className="text-[#0395A6] hover:underline font-medium">
                Cookie-Richtlinie
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handleRejectAll}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors modern-focus"
          >
            Alle ablehnen
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-[#0395A6] text-white rounded-lg font-medium hover:bg-[#0395A6]/90 transition-colors modern-focus"
          >
            Auswahl speichern
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors modern-focus"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
