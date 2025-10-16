import Link from 'next/link'
import { CheckCircle, Users, Target, BookOpen, Brain, Clock, Award, Zap, TrendingUp, Shield, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="academic-gradient academic-section">
        <div className="academic-container">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 academic-heading leading-tight">
              Bestnoten im<br />
              <span className="text-[#0395A6]">Medizinstudium</span><br />
              durch echtes Verstehen
            </h1>
            <p className="text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed academic-text">
              Professionelle Medizin-Nachhilfe mit approbierten Ärzt:innen. Strukturierte Prüfungsvorbereitung 
              für Physikum, M2, M3 und Kenntnisprüfung. Wissenschaftlich fundierte Lernmethoden, die nachweislich funktionieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button px-12 py-5 rounded-lg text-xl font-semibold focus-ring"
              >
                Kostenloses Erstgespräch
              </a>
              <Link
                href="/coaching"
                className="secondary-button px-12 py-5 rounded-lg text-xl font-semibold focus-ring"
              >
                Coaching buchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="academic-section bg-white">
        <div className="academic-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-[#0395A6] mb-2">95%</div>
              <div className="text-gray-600">Erfolgsquote</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-[#0395A6] mb-2">500+</div>
              <div className="text-gray-600">Erfolgreiche Prüfungen</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-[#0395A6] mb-2">5.0</div>
              <div className="text-gray-600">Durchschnittsbewertung</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-[#0395A6] mb-2">3</div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Recipe Section */}
      <section className="academic-section bg-[#FAFAFA]">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 academic-heading">
              Wissenschaftlich fundierte Lernmethoden
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto academic-text">
              Bewährte Strategien aus der Kognitionsforschung, die nachweislich zu besseren Prüfungsergebnissen führen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Individuelles 1:1-Coaching
              </h3>
              <h4 className="text-xl font-semibold text-[#0395A6] mb-6">Approbierte Ärzt:innen</h4>
              <p className="text-gray-600 leading-relaxed academic-text">
                Erfahrene Mediziner mit aktueller Klinikroutine leiten Sie durch komplexe medizinische Inhalte. 
                Praxisnahe Erklärungen anhand von Befunden, Bildern und klinischen Algorithmen.
              </p>
            </div>

            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Strukturierte Lernpläne
              </h3>
              <h4 className="text-xl font-semibold text-[#0395A6] mb-6">Plan & Kontrolle</h4>
              <p className="text-gray-600 leading-relaxed academic-text">
                Individuelle Wochenpläne mit gezielten Wiederholungen und Meilensteinen. 
                Kontinuierliche Anpassung an Ihre Lernfortschritte und Prüfungstermine.
              </p>
            </div>

            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Fokussiertes Lernen
              </h3>
              <h4 className="text-xl font-semibold text-[#0395A6] mb-6">Individuell & effizient</h4>
              <p className="text-gray-600 leading-relaxed academic-text">
                Priorisierung nach Prüfungsrelevanz und Ihren Stärken. Klare Strukturierung 
                von Pflichtstoff, Kernkompetenzen und optionalen Inhalten.
              </p>
            </div>

            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Adaptive Prüfungsplattform
              </h3>
              <h4 className="text-xl font-semibold text-[#0395A6] mb-6">IMPP-nahe Fragen</h4>
              <p className="text-gray-600 leading-relaxed academic-text">
                Eigene Plattform mit aktuellen Prüfungsfragen und adaptiven Übungssets. 
                Intelligente Auswertung nach Themen und Fehlerarten für gezieltes Training.
              </p>
            </div>

            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Prüfungslogik & Anwendung
              </h3>
              <h4 className="text-xl font-semibold text-[#0395A6] mb-6">Entscheidungsstrategien</h4>
              <p className="text-gray-600 leading-relaxed academic-text">
                Training von klinischen Entscheidungsprozessen: Next-best-step, Ausschlusskriterien 
                und typische Fallen. Systematische Herleitung statt auswendig lernen.
              </p>
            </div>

            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Kontinuierliche Begleitung
              </h3>
              <h4 className="text-xl font-semibold text-[#0395A6] mb-6">Verlässlich & strukturiert</h4>
              <p className="text-gray-600 leading-relaxed academic-text">
                Online 1:1-Sessions mit festen Terminen und schnellem Feedback. 
                Kuratierte Materialien und strukturierte Begleitung bis zur Prüfung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="academic-section bg-white">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 academic-heading">
              Der ultima-rat.io Ansatz
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto academic-text">
              Systematische Defizitanalyse statt verzweifeltes Bulimielernen
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="academic-card p-16 animate-fade-in-up">
              <div className="academic-quote">
                <p className="text-2xl text-[#0395A6] font-semibold text-center mb-8">
                  "Du steigst nicht auf das Niveau deiner Ziele. Du fällst auf das Niveau deiner Systeme."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Wissenschaftliche Grundlage</h3>
                  <p className="text-lg text-gray-600 leading-relaxed academic-text mb-6">
                    Wir arbeiten mit bewährten Lernmethoden aus der Kognitionsforschung: Retrieval Practice 
                    (aktives Abrufen), Spaced Repetition (geplante Wiederholung), Interleaving (systematisches 
                    Mischen von Themen) und gezieltes Feedback.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed academic-text">
                    Diese Methoden sind wissenschaftlich belegt und führen nachweislich zu besseren 
                    Prüfungsergebnissen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Strukturierte Herangehensweise</h3>
                  <p className="text-lg text-gray-600 leading-relaxed academic-text mb-6">
                    Statt beim Altbewährten zu bleiben und verzweifelt die letzten Energiereserven auszuschöpfen, 
                    gehen wir Ihre Defizite strukturiert an.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed academic-text">
                    Unsere Coaches sind approbierte Ärzt:innen und erfahrene Medizinstudierende, die selbst 
                    mit Top-Ergebnissen durch alle Examina gegangen sind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="academic-section bg-[#FAFAFA]">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 academic-heading">
              Transparente Preise
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto academic-text">
              Klare Struktur, faire Preise, keine versteckten Kosten
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <table className="academic-table animate-fade-in-up">
              <thead>
                <tr>
                  <th>Leistung</th>
                  <th>Dauer</th>
                  <th>Preis</th>
                  <th>Inklusive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Einzelcoaching</td>
                  <td>60 Minuten</td>
                  <td className="font-bold text-[#0395A6]">39€</td>
                  <td>Protokoll, Materialien, Feedback</td>
                </tr>
                <tr>
                  <td className="font-semibold">Crashkurs</td>
                  <td>5 Stunden</td>
                  <td className="font-bold text-[#0395A6]">180€</td>
                  <td>Intensivtraining, alle Materialien</td>
                </tr>
                <tr>
                  <td className="font-semibold">Regelmäßige Betreuung</td>
                  <td>4x 60 Min</td>
                  <td className="font-bold text-[#0395A6]">140€</td>
                  <td>Strukturierter Lernplan, Kontrolle</td>
                </tr>
                <tr>
                  <td className="font-semibold">Prüfungsvorbereitung</td>
                  <td>Individuell</td>
                  <td className="font-bold text-[#0395A6]">Auf Anfrage</td>
                  <td>Komplette Begleitung bis zur Prüfung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="academic-section bg-white">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 academic-heading">
              Unser Coaching-Angebot
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto academic-text">
              Spezialisierte Vorbereitung für alle Phasen Ihres Medizinstudiums
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ANATOMIE',
                description: 'Systematische Orientierung statt Verwirrung: Wir arbeiten jede Region nach einem festen Schema auf (Leitstruktur → Verlauf/Äste → Innervation/Versorgung → Landmarken im Schnitt/CT → typische Läsionsfolgen) und verknüpfen Makro mit Mikro. So werden Befunde, Bilder und Standardfragen vorhersagbar und reproduzierbar.'
              },
              {
                title: 'PHYSIOLOGIE',
                description: 'Verständnis statt Auswendiglernen: Wir bauen belastbare Modelle, leiten Beziehungen sauber ab und wenden sie auf typische klinische Situationen an – Volumenmangel, obstruktiv vs. restriktiv, Säure-Base. Ziel ist ruhiges, nachvollziehbares Arbeiten unter Prüfungsbedingungen.'
              },
              {
                title: 'PHYSIK',
                description: 'Klare Rechenroutinen statt Formelsalat: Wir etablieren eine feste Vorgehensweise (Skizze → Größen/Einheiten → Grundgleichung → Umstellen → Einsetzen mit Einheitentest) und trainieren Standardaufgaben zu Optik, Strömung, Dämpfung und Dosis. Ergebnis: belastbare Wege auch unter Zeitdruck.'
              },
              {
                title: 'CHEMIE',
                description: 'Grundlagen schaffen statt Lücken füllen: Wir starten bei null und führen Sie durch eine einfache, wiederholbare Vorgehensweise. So funktionieren Stöchiometrie, pH/Puffer und Gleichgewichte auch unter Zeitdruck – ohne Formelsalat.'
              },
              {
                title: 'BIOCHEMIE',
                description: 'Kernpfade verstehen statt Details lernen: Wir reduzieren auf die wesentlichen Stoffwechselwege und ihre Schaltstellen. Klare Wenn-dann-Anker verknüpfen Laborwerte, Symptome und pathophysiologische Zusammenhänge.'
              },
              {
                title: 'M2',
                description: 'Prioritäten setzen statt alles lernen: Wir fokussieren auf Leitsymptome und Prüfungsgewicht. Training von Entscheidungsstrategien, Ausschlusskriterien und sicheren Falsifikatoren. Bei unbekannten Fragen: strukturierte Entscheidung statt Raten.'
              },
              {
                title: 'M3',
                description: 'Struktur unter Zeitdruck: Simulation der Prüfung in Echtzeit mit festem Ablauf (Anliegen/Red Flags → Anamnese → Status → Zusammenfassung → DD → nächster Schritt). Standardsätze und direktes Feedback bis der Ablauf zuverlässig sitzt.'
              }
            ].map((subject, index) => (
              <div key={index} className="academic-card p-10 animate-fade-in-up">
                <h3 className="text-3xl font-bold text-[#0395A6] mb-8 academic-heading">{subject.title}</h3>
                <p className="text-gray-700 leading-relaxed academic-text">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="academic-section bg-[#0395A6]">
        <div className="academic-container text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 academic-heading animate-fade-in-up">
            Wobei können wir Sie unterstützen?
          </h2>
          <p className="text-2xl text-white text-opacity-90 mb-16 max-w-5xl mx-auto leading-relaxed animate-fade-in-up">
            Unsicher, womit Sie starten sollen? Schreiben Sie uns Ihr Fach oder den Prüfungstermin. 
            Wir melden uns mit einer ehrlichen Einschätzung und einem konkreten Vorschlag – unverbindlich.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-xl font-semibold transition-all focus-ring animate-fade-in-up inline-block"
          >
            Kostenloses Erstgespräch
          </a>
        </div>
      </section>
    </div>
  )
}