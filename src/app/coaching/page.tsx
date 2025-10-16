import { CheckCircle, Users, Target, BookOpen, Clock, Zap, MessageCircle } from 'lucide-react'

export default function CoachingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="academic-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              Lernprobleme?<br />
              Blackouts?<br />
              <span className="text-[#0395A6]">Prüfungsstress?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Mit individuellem Coaching gehen Sie sicher und strukturiert in jede Prüfung – 
              egal ob Vorklinik oder Klinik, schriftlich oder mündlich. Wissenschaftlich fundierte Methoden, 
              die nachweislich funktionieren.
            </p>
            <a
              href="#mehr-erfahren"
              className="primary-button px-10 py-4 rounded-lg text-lg font-semibold inline-block"
            >
              Mehr erfahren ↓
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="mehr-erfahren" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DAS PROBLEM
            </h2>
            <p className="text-xl text-gray-600">
              Der falsche Ansatz macht alles kaputt
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Statt beim Altbewährten zu bleiben und verzweifelt seine letzte Energiereverse auszuschöpfen, 
              gehen wir deine Defizite strukturiert auf den Grund.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Überfordert
              </h3>
              <p className="text-gray-600">
                Der Stoff stapelt sich, während die Prüfung näher rückt. Du verlässt deinen Lernplan 
                und endest letztlich in einem sinnlosen Chaos.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fehlendes Verständnis
              </h3>
              <p className="text-gray-600">
                Was ist wichtig? Was wird sowieso nicht abgefragt? Es fehlt dir das Know-How, um deine Zeit 
                strukturiert zu investieren und statt trocken alles auswendig zu lernen, effektives Verstehen anwendest.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Strukturlosigkeit
              </h3>
              <p className="text-gray-600">
                Du hast zwar viel gelernt, aber dennoch weißt du, dass das Bestehen nicht sicher ist. 
                Du brauchst mehr Struktur und nicht mehr Inhalte.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              Und viele weitere Probleme!
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DIE LÖSUNG
            </h2>
            <p className="text-xl text-gray-600">
              Wie Du dein Studium mit Bravur meisterst
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-8">
              Mit approbierten Ärzt:innen, realistischen Prüfungssimulationen und individualisierten 
              Lernplänen unter die Top 5%!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Persönlich auf dich abgestimmt
              </h3>
              <p className="text-gray-600">
                Kein 08/15-Lernplan, sondern ein Coaching, das exakt zu deinem Fach, deinem Tempo und 
                deinem Verständnisniveau passt. Wir analysieren gemeinsam, wo du stehst – und bauen darauf 
                ein System auf, das dich gezielt zum Erfolg führt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Gecoacht von approbierten Ärzt:innen
              </h3>
              <p className="text-gray-600">
                Bei uns wirst du von erfahrenen Ärzt:innen trainiert, die jegliche Prüfungen und Examina 
                selbst durchlaufen haben. Du profitierst von echten Einblicken, klinischer Erfahrung und 
                Insiderwissen aus erster Hand.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fokus auf Verstehen, nicht nur Bulimielernen
              </h3>
              <p className="text-gray-600">
                Wir zeigen dir nicht nur die richtige Antwort – sondern warum sie richtig ist und wie du sie 
                wiedererkennst. Statt sturem Auswendiglernen lernst du, Zusammenhänge zu begreifen und in 
                der Prüfung sicher zu handeln.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              VERSPRECHEN
            </h2>
            <p className="text-xl text-blue-100">
              Individuelles Medizin-Coaching – 100 % auf dich zugeschnitten
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-blue-100">
              Präzise Hilfe statt Planlosigkeit: 1-on-1 Coachings mit echten Ärzt:innen, klarer Struktur, 
              Fokus auf Verstehen – für alle Phasen deines Medizinstudiums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Buchung und Themenwahl
              </h3>
              <p className="text-gray-600 text-sm">
                Du sagst uns, was du brauchst – z. B. Anatomie, Physiologie, Altklausuren oder konkrete 
                Prüfungsfälle. Wir richten das Coaching genau danach aus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">02</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Live-Coaching per Zoom
              </h3>
              <p className="text-gray-600 text-sm">
                Ob 1h-Session oder 5h-Intensivtag – wir coachen dich strukturiert, verständlich und 
                prüfungsnah. Direkt, klar und ohne Zeitverlust.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                PDF mit Protokoll & weiterem Material
              </h3>
              <p className="text-gray-600 text-sm">
                Du bekommst alles zum Nachlesen: Zusammenfassungen, Lernpläne, Tipps – individuell auf dich 
                abgestimmt. Ideal zum Wiederholen und Vertiefen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">04</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Du lernst fokussiert, nachhaltig - mit Plan
              </h3>
              <p className="text-gray-600 text-sm">
                Nach dem Coaching bist du nicht allein – sondern vorbereitet. Du weißt genau, was, wie und 
                warum du lernen musst. Und das macht den Unterschied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dein Investment
            </h2>
            <p className="text-xl text-gray-600">
              60 Min 1‑on‑1 · 39€ · Online via Zoom
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">39€</div>
                <p className="text-gray-600">inkl. Unterlagen & Nachbereitung</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Was du bekommst:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      1‑on‑1 mit Ärzt:in
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Zoom · Screen‑Sharing · Live‑Skizzen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Kursprotokoll als PDF
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Individueller Aufgabensheet
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Prüfungssimulation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Direktes Feedback
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Flexible Terminvergabe
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Konkrete Lernpläne
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Flexible Buchung:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      Einzelstunden (60 Min)
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      Crashkurse (5h Intensiv)
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      Regelmäßige Betreuung
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      Prüfungsvorbereitung
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Online über Zoom mit Screen Sharing und Whiteboard. Flexibel buchbar über WhatsApp, 
                  bezahlen erst im Anschluss!
                </p>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            GEMEINSAM
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Dein Weg zur Prüfungssicherheit beginnt hier.
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Wähle das Coaching-Format, das zu deinem Lernstil und deinem Ziel passt.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  )
}
