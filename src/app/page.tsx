import Link from 'next/link'
import { CheckCircle, Users, Target, BookOpen, Brain, Clock, Award, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="academic-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
              Bestnoten im<br />
              <span className="text-[#0395A6]">Medizinstudium</span><br />
              durch echtes Verstehen
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Professionelle Medizin-Nachhilfe mit approbierten Ärzt:innen. Strukturierte Prüfungsvorbereitung 
              für Physikum, M2, M3 und Kenntnisprüfung. Wissenschaftlich fundierte Lernmethoden, die nachweislich funktionieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button px-10 py-4 rounded-lg text-lg font-semibold"
              >
                Kostenloses Erstgespräch
              </a>
              <Link
                href="/coaching"
                className="border-2 border-[#0395A6] text-[#0395A6] hover:bg-[#0395A6] hover:text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Coaching buchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Recipe Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Wissenschaftlich fundierte Lernmethoden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bewährte Strategien aus der Kognitionsforschung, die nachweislich zu besseren Prüfungsergebnissen führen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0395A6] bg-opacity-10 rounded-xl flex items-center justify-center mb-8">
                <Users className="w-7 h-7 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Individuelles 1:1-Coaching
              </h3>
              <h4 className="text-lg font-semibold text-[#0395A6] mb-4">Approbierte Ärzt:innen</h4>
              <p className="text-gray-600 leading-relaxed">
                Erfahrene Mediziner mit aktueller Klinikroutine leiten Sie durch komplexe medizinische Inhalte. 
                Praxisnahe Erklärungen anhand von Befunden, Bildern und klinischen Algorithmen.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0395A6] bg-opacity-10 rounded-xl flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Strukturierte Lernpläne
              </h3>
              <h4 className="text-lg font-semibold text-[#0395A6] mb-4">Plan & Kontrolle</h4>
              <p className="text-gray-600 leading-relaxed">
                Individuelle Wochenpläne mit gezielten Wiederholungen und Meilensteinen. 
                Kontinuierliche Anpassung an Ihre Lernfortschritte und Prüfungstermine.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0395A6] bg-opacity-10 rounded-xl flex items-center justify-center mb-8">
                <BookOpen className="w-7 h-7 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Fokussiertes Lernen
              </h3>
              <h4 className="text-lg font-semibold text-[#0395A6] mb-4">Individuell & effizient</h4>
              <p className="text-gray-600 leading-relaxed">
                Priorisierung nach Prüfungsrelevanz und Ihren Stärken. Klare Strukturierung 
                von Pflichtstoff, Kernkompetenzen und optionalen Inhalten.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0395A6] bg-opacity-10 rounded-xl flex items-center justify-center mb-8">
                <Brain className="w-7 h-7 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Adaptive Prüfungsplattform
              </h3>
              <h4 className="text-lg font-semibold text-[#0395A6] mb-4">IMPP-nahe Fragen</h4>
              <p className="text-gray-600 leading-relaxed">
                Eigene Plattform mit aktuellen Prüfungsfragen und adaptiven Übungssets. 
                Intelligente Auswertung nach Themen und Fehlerarten für gezieltes Training.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0395A6] bg-opacity-10 rounded-xl flex items-center justify-center mb-8">
                <Clock className="w-7 h-7 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Prüfungslogik & Anwendung
              </h3>
              <h4 className="text-lg font-semibold text-[#0395A6] mb-4">Entscheidungsstrategien</h4>
              <p className="text-gray-600 leading-relaxed">
                Training von klinischen Entscheidungsprozessen: Next-best-step, Ausschlusskriterien 
                und typische Fallen. Systematische Herleitung statt auswendig lernen.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0395A6] bg-opacity-10 rounded-xl flex items-center justify-center mb-8">
                <CheckCircle className="w-7 h-7 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Kontinuierliche Begleitung
              </h3>
              <h4 className="text-lg font-semibold text-[#0395A6] mb-4">Verlässlich & strukturiert</h4>
              <p className="text-gray-600 leading-relaxed">
                Online 1:1-Sessions mit festen Terminen und schnellem Feedback. 
                Kuratierte Materialien und strukturierte Begleitung bis zur Prüfung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Der ultima-rat.io Ansatz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematische Defizitanalyse statt verzweifeltes Bulimielernen
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Statt beim Altbewährten zu bleiben und verzweifelt die letzten Energiereserven auszuschöpfen, 
                gehen wir Ihre Defizite strukturiert an. Unsere Coaches sind approbierte Ärzt:innen und 
                erfahrene Medizinstudierende, die selbst mit Top-Ergebnissen durch alle Examina gegangen sind.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Wir arbeiten mit bewährten Lernmethoden aus der Kognitionsforschung: Retrieval Practice 
                (aktives Abrufen), Spaced Repetition (geplante Wiederholung), Interleaving (systematisches 
                Mischen von Themen) und gezieltes Feedback. Diese Methoden sind wissenschaftlich belegt 
                und führen nachweislich zu besseren Prüfungsergebnissen.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Die Details zählen. Bei uns erhalten Sie zugewandte, professionelle Mentor:innen, die sich 
                auf messbare Ergebnisse konzentrieren. Wir verbessern nicht nur Ihre nächste Prüfung, 
                sondern etablieren Lernsysteme, die Sie langfristig tragen.
              </p>

              <div className="bg-[#0395A6] bg-opacity-10 p-8 rounded-xl">
                <p className="text-lg text-[#0395A6] font-semibold text-center">
                  "Du steigst nicht auf das Niveau deiner Ziele. Du fällst auf das Niveau deiner Systeme."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Unser Coaching-Angebot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-[#0395A6] mb-6">{subject.title}</h3>
                <p className="text-gray-700 leading-relaxed">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0395A6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wobei können wir Sie unterstützen?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unsicher, womit Sie starten sollen? Schreiben Sie uns Ihr Fach oder den Prüfungstermin. 
            Wir melden uns mit einer ehrlichen Einschätzung und einem konkreten Vorschlag – unverbindlich.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Kostenloses Erstgespräch
          </a>
        </div>
      </section>
    </div>
  )
}