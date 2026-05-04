import { Cookie, Shield, BarChart3, Target, Cog, Clock, Settings } from 'lucide-react'

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0395A6] text-white font-semibold mb-8">
              <Cookie className="w-5 h-5 mr-2" />
              Cookie-Richtlinie
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie-Richtlinie
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Informationen über unsere Verwendung von Cookies und ähnlichen Technologien
            </p>
            <p className="text-sm text-gray-600">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Einleitung */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Was sind Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. 
                Sie helfen uns dabei, Ihre Präferenzen zu speichern und Ihnen eine bessere Benutzererfahrung zu bieten.
              </p>
            </div>

            {/* Cookie-Kategorien */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie-Kategorien</h2>
              
              {/* Notwendige Cookies */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Notwendige Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diese Cookies sind für die Grundfunktionen unserer Website unerlässlich und können nicht deaktiviert werden. 
                  Sie werden normalerweise nur als Reaktion auf Aktionen gesetzt, die Sie ausführen.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Zweck:</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Sicherstellung der Website-Funktionalität</li>
                    <li>• Speicherung Ihrer Cookie-Einstellungen</li>
                    <li>• Sicherheitsmaßnahmen</li>
                    <li>• Grundlegende Website-Navigation</li>
                  </ul>
                </div>
              </div>

              {/* Analyse-Cookies */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Analyse-Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                  indem sie Informationen anonym sammeln und melden.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Zweck:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Messung der Website-Performance</li>
                    <li>• Verstehen des Nutzerverhaltens</li>
                    <li>• Verbesserung der Website-Funktionalität</li>
                    <li>• Identifizierung beliebter Inhalte</li>
                  </ul>
                </div>
              </div>

              {/* Marketing-Cookies */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Marketing-Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. 
                  Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend sind.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Zweck:</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Personalisierte Werbung</li>
                    <li>• Remarketing-Kampagnen</li>
                    <li>• Social Media Integration</li>
                    <li>• Conversion-Tracking (z.&nbsp;B. Google Ads bei Kontaktaufnahme per WhatsApp)</li>
                  </ul>
                </div>
              </div>

              {/* Funktionale Cookies */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Cog className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Funktionale Cookies</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Zweck:</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Erweiterte Website-Funktionen</li>
                    <li>• Personalisierte Inhalte</li>
                    <li>• Drittanbieter-Integrationen</li>
                    <li>• Benutzerpräferenzen</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Speicherdauer */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Speicherdauer</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Cookie-Lebensdauer</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Session-Cookies</h4>
                    <p className="text-gray-700 text-sm">
                      Werden automatisch gelöscht, wenn Sie Ihren Browser schließen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Persistente Cookies</h4>
                    <p className="text-gray-700 text-sm">
                      Bleiben für einen festgelegten Zeitraum auf Ihrem Gerät gespeichert.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ihre Rechte */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ihre Rechte</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">DSGVO-konforme Cookie-Verwaltung</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• <strong>Einwilligung:</strong> Sie können jederzeit Ihre Einwilligung widerrufen</li>
                  <li>• <strong>Transparenz:</strong> Wir informieren Sie über alle verwendeten Cookies</li>
                  <li>• <strong>Kontrolle:</strong> Sie können einzelne Cookie-Kategorien aktivieren/deaktivieren</li>
                  <li>• <strong>Löschung:</strong> Sie können gespeicherte Cookies jederzeit löschen</li>
                  <li>• <strong>Auskunft:</strong> Sie haben das Recht auf Auskunft über gespeicherte Daten</li>
                </ul>
              </div>
            </div>

            {/* Cookie-Verwaltung */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie-Verwaltung</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-900">Ihre Cookie-Einstellungen</h3>
                </div>
                <p className="text-green-800 mb-4">
                  Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner oder die 
                  Cookie-Einstellungen auf unserer Website ändern.
                </p>
                <div className="bg-white border border-green-300 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">So ändern Sie Ihre Einstellungen:</h4>
                  <ol className="text-green-800 text-sm space-y-1 list-decimal list-inside">
                    <li>Klicken Sie auf &ldquo;Cookie-Einstellungen&rdquo; im Cookie-Banner</li>
                    <li>Wählen Sie die gewünschten Cookie-Kategorien aus</li>
                    <li>Speichern Sie Ihre Auswahl</li>
                    <li>Ihre Einstellungen werden sofort angewendet</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Browser-Einstellungen */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Browser-Einstellungen</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sie können Cookies auch direkt in Ihrem Browser verwalten. Die meisten Browser 
                  ermöglichen es Ihnen, Cookies zu blockieren oder zu löschen.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                    <p className="text-gray-700 text-sm">
                      Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                    <p className="text-gray-700 text-sm">
                      Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                    <p className="text-gray-700 text-sm">
                      Einstellungen → Datenschutz → Cookies und Website-Daten verwalten
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                    <p className="text-gray-700 text-sm">
                      Einstellungen → Cookies und Websiteberechtigungen → Cookies und gespeicherte Daten
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontakt</h2>
              <div className="bg-[#0395A6] bg-opacity-10 border border-[#0395A6] rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bei Fragen zu unserer Cookie-Richtlinie oder Ihren Datenschutzrechten können Sie 
                  uns jederzeit kontaktieren:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>E-Mail:</strong> <a href="mailto:info@ultima-rat.io" className="text-[#0395A6] hover:underline">info@ultima-rat.io</a></p>
                  <p><strong>Telefon:</strong> +49 163 9347633</p>
                  <p><strong>Adresse:</strong> Hallesche Straße 94a, 44143 Dortmund, Deutschland</p>
                </div>
              </div>
            </div>

            {/* Aktualisierungen */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Aktualisierungen</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 leading-relaxed">
                  Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. 
                  Wesentliche Änderungen werden wir auf unserer Website bekannt geben. 
                  Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um über 
                  aktuelle Entwicklungen informiert zu bleiben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}