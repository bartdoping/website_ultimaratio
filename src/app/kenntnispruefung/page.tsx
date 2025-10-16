import { CheckCircle, Users, Target, BookOpen, Clock, Star, MessageCircle } from 'lucide-react'

export default function KenntnispruefungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kenntnisprüfung Medizin<br />
              <span className="text-blue-600">sicher zur Approbation</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Gezielte Vorbereitung für internationale Ärzt:innen – strukturiert, praxisnah, prüfungsrelevant.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
              <div className="text-2xl font-bold text-blue-600 mb-2">39€</div>
              <p className="text-gray-600">60 Min 1‑on‑1 · Online via Zoom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1‑on‑1 mit Ärzt:in</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zoom · Screen‑Sharing · Live‑Skizzen</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kursprotokoll als PDF</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Individueller Aufgabensheet</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prüfungssimulation</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direktes Feedback</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Terminvergabe</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Konkrete Lernpläne</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vertrauen
            </h2>
            <p className="text-xl text-gray-600">
              Medizinstudierende bewerten mit 5,0/5,0
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Warum Vorbereitung bei uns?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Ärztliche Coaches</h4>
                  </div>
                  <p className="text-gray-600">
                    Alle Trainer:innen sind approbierte Ärzt:innen mit Erfahrung in der Fachkenntnisprüfung. 
                    Wir wissen, was inhaltlich gefordert ist – und wie es abgeprüft wird.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Struktur & Klarheit</h4>
                  </div>
                  <p className="text-gray-600">
                    Von Anamnese und Untersuchung über Labor- und Bildinterpretation bis hin zu Leitlinien: 
                    wir legen einen klaren Fahrplan fest.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Prüfungsnah üben</h4>
                  </div>
                  <p className="text-gray-600">
                    Simulationen im Originalformat, inklusive typischer Fallkonstellationen, kritischer Fragen 
                    und Zeitdruck.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Individualisiert</h4>
                  </div>
                  <p className="text-gray-600">
                    Jeder hat einen anderen Hintergrund. Wir passen Inhalte und Tempo an deinen Wissensstand 
                    und deine Fachrichtung an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Was wir trainieren
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Anamnese & Gesprächsführung
                </h3>
                <p className="text-gray-600">
                  in deutscher Sprache, mit Fokus auf präzisen Fachausdrücken und strukturierter Kommunikation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Klinische Untersuchung
                </h3>
                <p className="text-gray-600">
                  systematische Abläufe, typische Red Flags, sichere Präsentation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Labor & Bildgebung
                </h3>
                <p className="text-gray-600">
                  Interpretation von Blutwerten, EKGs, Röntgen/CT.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Differenzialdiagnosen
                </h3>
                <p className="text-gray-600">
                  strukturierte Herangehensweise, „next best step".
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Leitlinien & Praxisrelevanz
                </h3>
                <p className="text-gray-600">
                  Orientierung an den in Deutschland gängigen Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ablauf der Vorbereitung
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kurzaufnahme</h3>
                <p className="text-gray-600 text-sm">
                  Medizinischer Hintergrund, Fachgebiet, Prüfungstermin.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Individueller Plan</h3>
                <p className="text-gray-600 text-sm">
                  Schwerpunkte nach Stärken/Schwächen.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Einzelsessions</h3>
                <p className="text-gray-600 text-sm">
                  Fokus auf Gespräch, Untersuchung, Fälle.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prüfungssimulation</h3>
                <p className="text-gray-600 text-sm">
                  Realistisch unter Zeitdruck, mit Feedback.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nachbereitung</h3>
                <p className="text-gray-600 text-sm">
                  Fehlerprotokoll & gezieltes Wiederholen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qualität
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "Ich hab den 5h-Crashkurs gemacht und bin echt zufrieden! Ich muss sagen: Es hat sich total gelohnt! 
                In nur fünf Stunden wurde mir alles verständlich erklärt, und der Inhalt wurde super hilfreich vermittelt..."
              </p>
              <p className="text-sm text-gray-500 font-medium">Klinik-Student, M2</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "Zu Beginn meines Studiums hatte ich große Schwierigkeiten, die für mich passende Lerntechnik zu finden 
                und die relevanten Lerninhalte richtig zu filtern. Ich war dann in einem Dritt- und zwei Zweitversuchen, 
                die ich ohne Hilfe nicht geschafft hätte. Mit ärztlicher 'Nachhilfe'..."
              </p>
              <p className="text-sm text-gray-500 font-medium">Vorklinik-Studentin</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "Ich hab den 5h-Crashkurs gemacht und bin echt zufrieden! Ich muss sagen: Es hat sich total gelohnt! 
                In nur fünf Stunden wurde mir alles verständlich erklärt, und der Inhalt wurde super hilfreich vermittelt. 
                Was mir besonders gefallen hat..."
              </p>
              <p className="text-sm text-gray-500 font-medium">PJ-Studentin</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schreib uns und wir vereinbaren ein kostenloses Erstgespräch
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Nicht sicher, womit du starten sollst? Die deutsche Sprache verunsichert dich? Dir fehlt die Übung, 
            wirklich "auf Deutsch" medizinisch bzw. fachlich zu sprechen?
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Schreib uns unverbindlich für eine erfolgreiche Kenntnisprüfung!
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
