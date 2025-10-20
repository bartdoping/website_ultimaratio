import { CheckCircle, Target, Brain, Clock, Award, Shield, ArrowRight, MessageCircle } from 'lucide-react'
import Testimonials from '../../components/Testimonials'

export default function MethodenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <Award className="w-5 h-5 mr-2" />
              Wissenschaftlich fundiert
            </div>
            
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
              Die ultima-rat.io<br />
              <span className="text-[#0395A6]">Methode</span>
            </h1>
            
            <p className="text-base text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up">
              Wissenschaftlich fundierte Lernmethoden, die nachweislich funktionieren. 
              Bewährte Strategien aus der Kognitionsforschung für optimale Prüfungsergebnisse.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Unsere Kernprinzipien
            </h2>
            <p className="text-base text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Wissenschaftlich belegte Lernmethoden für nachhaltigen Erfolg
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-0">
            <div className="modern-grid modern-grid-2 gap-4 md:gap-8">
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <div className="mb-3 md:mb-8">
                <Brain className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">Retrieval Practice</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6 break-words mobile-readable-text">
                Aktives Abrufen von Wissen statt passives Wiederlesen. Diese Methode 
                stärkt das Langzeitgedächtnis und verbessert die Abrufbarkeit in Prüfungen.
              </p>
              <ul className="space-y-3 pr-0 mr-0">
                {[
                  "Aktive Wissensabfrage",
                  "Selbsttest-Übungen",
                  "Prüfungssimulationen",
                  "Spaced Repetition"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <div className="mb-3 md:mb-8">
                <Clock className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">Spaced Repetition</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6 break-words mobile-readable-text">
                Geplante Wiederholungen in optimalen Intervallen. Diese Technik 
                maximiert die Behaltensleistung und reduziert Vergessen.
              </p>
              <ul className="space-y-3 pr-0 mr-0">
                {[
                  "Optimale Wiederholungsintervalle",
                  "Adaptive Lernpläne",
                  "Langzeitgedächtnis-Training",
                  "Vergessenskurve berücksichtigen"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <div className="mb-3 md:mb-8">
                <Target className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">Interleaving</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6 break-words mobile-readable-text">
                Systematisches Mischen verschiedener Themen und Aufgaben. 
                Diese Methode verbessert die Transferleistung und Problemlösefähigkeit.
              </p>
              <ul className="space-y-3 pr-0 mr-0">
                {[
                  "Themenübergreifendes Lernen",
                  "Transfer-Training",
                  "Problemlösefähigkeit",
                  "Flexible Anwendung"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <div className="mb-3 md:mb-8">
                <Shield className="w-6 h-6 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-xl font-bold text-black mb-2 md:mb-6 modern-heading">Fehlerprotokolle</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6 break-words mobile-readable-text">
                Systematische Analyse und Dokumentation von Fehlern. 
                Diese Methode hilft, Schwächen zu identifizieren und gezielt zu beheben.
              </p>
              <ul className="space-y-3 pr-0 mr-0">
                {[
                  "Fehleranalyse",
                  "Schwächen-Identifikation",
                  "Zielgerichtete Verbesserung",
                  "Lernfortschritt-Tracking"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Foundation */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Wissenschaftliche Grundlage
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Bewährte Forschungsergebnisse aus der Kognitionspsychologie
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up">
              <div className="text-center mb-12">
                <p className="text-lg text-[#0395A6] font-semibold italic">
                  &ldquo;Du steigst nicht auf das Niveau deiner Ziele. Du fällst auf das Niveau deiner Systeme.&rdquo;
                </p>
              </div>
              
              <div className="modern-grid modern-grid-2">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">Forschungsergebnisse</h3>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                    Unsere Methoden basieren auf über 100 Jahren Forschung in der Kognitionspsychologie. 
                    Studien zeigen, dass Retrieval Practice die Lernleistung um bis zu 50% verbessert.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text">
                    Spaced Repetition kann die Behaltensleistung um bis zu 200% steigern, 
                    während Interleaving die Transferleistung deutlich verbessert.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">Praktische Anwendung</h3>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                    Wir übertragen diese wissenschaftlichen Erkenntnisse in praktische, 
                    anwendbare Lernstrategien für Medizinstudierende.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text">
                    Jede Methode wird individuell an Ihre Lernziele und Prüfungsanforderungen 
                    angepasst und kontinuierlich optimiert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Umsetzung in der Praxis
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Wie wir die Methoden in Ihrem Coaching anwenden
            </p>
          </div>

          <div className="modern-grid modern-grid-4">
            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Analyse</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Einschätzung deiner aktuellen Lernmethoden und Identifikation von Problemen und Verbesserungspotenzialen.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Zielsetzung</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
              Gemeinsame Definition klarer, realistischer Lernziele basierend auf Ihrem Wissensstand, Zeitrahmen und Prüfungsformat.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Planung</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Erstellung eines individuellen Lernplans mit wissenschaftlich fundierten Methoden.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Training</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Praktische Anwendung der Methoden mit direktem Feedback und Anpassungen.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Feedback & Anpassung</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
              Regelmäßige Auswertung Ihrer Fortschritte mit gezieltem Feedback - Anpassung der Strategien für maximalen Lernerfolg.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Ergebnisse & Transfer</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
              Messbare Verbesserungen, gestärktes Langzeitgedächtnis und sicherer Wissenstransfer in Prüfung und Praxis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <Testimonials />

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            STARTE JETZT
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            Mit wissenschaftlich fundierten Methoden zum Erfolg.
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            Erleben Sie selbst, wie effektiv unsere Lernmethoden sind. 
            Kostenloses Erstgespräch und individuelle Beratung.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
          >
            <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
            Kostenloses Erstgespräch
            <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}