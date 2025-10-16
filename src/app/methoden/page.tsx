import { Brain, Target, RefreshCw, CheckCircle, Users, BookOpen } from 'lucide-react'

export default function MethodenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Systeme, die Ergebnisse bringen
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              DIE ULTIMA-RAT.IO METHODE
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Wie Du dein Studium mit Bravur meisterst
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Bei ultima-rat.io haben wir Tutoring für Medizinstudierende neu gedacht. Unser Team besteht aus Ärzt:innen, 
              die selbst Physikum, M2 und M3 durchlaufen haben - mit Top-Ergebnissen. Aus dieser Erfahrung haben wir 
              klare Prinzipien abgeleitet, in Systeme gegossen und über Jahre in hunderten Coachings geschärft.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Unser Ansatz ist konsequent: Effizienz und Wirksamkeit. Wir setzen nicht auf mehr Zeit, sondern auf bessere Systeme. 
              Grundlage sind erprobte Lernmethoden aus der Kognitionsforschung:
            </p>
          </div>
        </div>
      </section>

      {/* Learning Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Retrieval Practice
              </h3>
              <p className="text-gray-600 mb-4">
                aktives Abrufen statt passives Wiederholen
              </p>
              <p className="text-sm text-gray-500">
                Fehlerprotokolle & kurze Check-Ups
              </p>
              <p className="text-sm text-gray-500">
                gezielt Schwächen adressieren
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Spaced Repetition
              </h3>
              <p className="text-gray-600 mb-4">
                geplante Wiederholung im richtigen Abstand
              </p>
              <p className="text-sm text-gray-500">
                ehrliches Feedback
              </p>
              <p className="text-sm text-gray-500">
                klar, konstruktiv, ohne Umwege
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interleaving
              </h3>
              <p className="text-gray-600">
                systematisches Mischen von Themen
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Strukturiertes Lernen
              </h3>
              <p className="text-gray-600">
                klare Systeme statt Chaos
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <p className="text-lg text-gray-700 text-center">
              So entsteht ein Tutoring-Modell, das dich nicht nur zur nächsten Prüfung trägt, sondern dir auch 
              langfristig ein belastbares Lernsystem vermittelt.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Ansatz
            </h2>
            <p className="text-xl text-gray-600">
              Prüfungsvorbereitung vereinfachen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Statt beim Altbewährten zu bleiben und verzweifelt seine letzte Energiereverse auszuschöpfen, 
              gehen wir deine Defizite strukturiert auf den Grund.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Wir haben 1:1-Tutoring und Prüfungstraining für Medizinstudierende systematisch weiterentwickelt. 
              Unser Ziel ist nicht nur „bestehen", sondern souverän abliefern – ruhig, reproduzierbar, belastbar.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Wie schaffen wir das? Weil wir nach der Philosophie arbeiten: Systeme bringen Ergebnisse. Unsere Ärzt:innen 
              haben genau mit diesen Systemen selbst bestanden – und sie so lange verfeinert, bis sie in der Breite 
              zuverlässig funktionieren.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Während der eigenen Ausbildung haben wir gesehen, wie Kommiliton:innen an fehlender Struktur, falscher 
              Gewichtung oder Materialüberflutung gescheitert sind. Genau dort setzen wir an: wir trennen das Wirksame 
              vom Ballast und machen es für dich nutzbar.
            </p>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <blockquote className="text-xl font-medium text-gray-800 italic text-center">
                „Du steigst nicht auf das Niveau deiner Ziele. Du fällst auf das Niveau deiner Systeme."
              </blockquote>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Im Kern bedeutet das: wir setzen das 80/20-Prinzip konsequent um. Zuerst die Bereiche mit dem größten 
              Effekt, dann die Feinheiten. So erzielst du in kurzer Zeit überproportionale Fortschritte und kannst 
              darauf weiter optimieren, bis dein Potenzial ausgeschöpft ist.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Do It Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum wir es tun
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Wir wollten nicht einfach die nächste Nachhilfeplattform eröffnen. Unser Anspruch ist es, Tutoring 
              für Medizinstudierende ärztlicher, effizienter und praxisnäher zu gestalten. Unser Ziel: eine Generation 
              von Mediziner:innen, die besser vorbereitet ins Berufsleben startet – weniger Stress, mehr Sicherheit, 
              bessere Ergebnisse.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Viele von uns haben zuvor in anderen Kurs- und Nachhilfesystemen gearbeitet und dort dieselben Schwächen 
              gesehen: unklare Strukturen, wechselnde Qualität, keine Verantwortung für Resultate. Diese Lücken haben 
              wir geschlossen – mit klaren Systemen, konsequenter Qualitätskontrolle und echtem ärztlichen Coaching.
            </p>

            <div className="bg-blue-600 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Das ist unser „Geheimnis":
              </h3>
              <p className="text-xl text-blue-100">
                Ärzt:innen, klare Systeme, prüfungsnahe Arbeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Möchtest du mehr über unsere Methoden erfahren? Kontaktiere uns für ein unverbindliches Gespräch.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  )
}
