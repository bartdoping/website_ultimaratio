import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UR</span>
              </div>
              <span className="ml-2 text-xl font-bold">ultima-rat.io</span>
            </div>
            <p className="text-gray-300 mb-4">
              Optimale Prüfungs-Vorbereitung für dein Medizinstudium.
            </p>
            <div className="text-gray-300">
              <p>Warburghof 14, 30627 Hannover, Deutschland</p>
              <p>+49 163 9347633</p>
              <p>info@ultima-rat.io</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/methoden" className="text-gray-300 hover:text-white transition-colors">Unsere Methoden</Link></li>
              <li><Link href="/coaching" className="text-gray-300 hover:text-white transition-colors">Coaching</Link></li>
              <li><Link href="/kenntnispruefung" className="text-gray-300 hover:text-white transition-colors">Kenntnisprüfung</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-gray-300 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-gray-300 hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="text-gray-300 hover:text-white transition-colors">AGB</Link></li>
              <li><Link href="/cookie-richtlinie" className="text-gray-300 hover:text-white transition-colors">Cookie Richtlinie</Link></li>
              <li><Link href="/widerruf" className="text-gray-300 hover:text-white transition-colors">Widerruf</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              Copyright © 2025 ultima-rat.io. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/impressum" className="text-gray-300 hover:text-white text-sm transition-colors">
                Impressum und Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
