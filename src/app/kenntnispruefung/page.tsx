'use client'

import { CheckCircle, Users, Target, BookOpen, Clock, Zap, MessageCircle, Award, ArrowRight, Brain, FileText, Calendar } from 'lucide-react'

export default function KenntnispruefungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <Award className="w-5 h-5 mr-2" />
              Spezialisiert auf Kenntnisprüfung
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
              Kenntnisprüfung<br />
              <span className="text-[#0395A6]">erfolgreich bestehen</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up">
              Spezialisierte Vorbereitung für internationale Ärzt:innen. Individuelle Betreuung, 
              prüfungsnahe Simulationen und strukturierte Lernpläne für die Kenntnisprüfung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center modern-animate-fade-in-up">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-xl font-semibold modern-focus group cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                Kostenloses Erstgespräch
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('mehr-erfahren')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="modern-button-secondary px-12 py-5 rounded-lg text-xl font-semibold modern-focus group cursor-pointer"
              >
                Mehr erfahren
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="mehr-erfahren" className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Die Herausforderung
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Warum die Kenntnisprüfung so anspruchsvoll ist
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 modern-heading">Komplexe Inhalte</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Deutsche Medizinstandards, Rechtssystem und Gesundheitssystem sind komplex 
                und unterscheiden sich stark von anderen Ländern.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 modern-heading">Zeitdruck</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Die Prüfung ist zeitlich begrenzt und erfordert schnelle, präzise Antworten 
                auf komplexe medizinische Fragestellungen.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 modern-heading">Hohe Anforderungen</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Erwartet wird nicht nur medizinisches Wissen, sondern auch Verständnis 
                für deutsche Behandlungsstandards und rechtliche Rahmenbedingungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Unsere Lösung
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Spezialisierte Vorbereitung für internationale Ärzt:innen
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 modern-heading">1:1 Coaching</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Individuelle Betreuung durch erfahrene deutsche Ärzt:innen, die selbst 
                die Kenntnisprüfung erfolgreich absolviert haben.
              </p>
              <ul className="space-y-3">
                {[
                  "Persönliche Lernpläne",
                  "Direktes Feedback",
                  "Flexible Terminvergabe",
                  "Kontinuierliche Begleitung"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <BookOpen className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 modern-heading">Zoom Sessions</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Online-Coaching via Zoom mit Screen-Sharing und Whiteboard für 
                interaktive Lerninhalte und direkte Kommunikation.
              </p>
              <ul className="space-y-3">
                {[
                  "Screen-Sharing",
                  "Live-Whiteboard",
                  "PDF-Protokolle",
                  "Aufgabensheets"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <FileText className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 modern-heading">Individuelle Aufgaben</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Maßgeschneiderte Lernmaterialien und Übungsaufgaben, die speziell 
                auf Ihre Vorkenntnisse und Schwächen abgestimmt sind.
              </p>
              <ul className="space-y-3">
                {[
                  "Prüfungssimulationen",
                  "Altklausuren",
                  "Fallbeispiele",
                  "Lernpläne"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Calendar className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6 modern-heading">Flexible Termine</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Anpassung an Ihren Zeitplan und Prüfungstermin. Kurzfristige Buchungen 
                und flexible Terminvergabe über WhatsApp.
              </p>
              <ul className="space-y-3">
                {[
                  "Flexible Buchung",
                  "Kurzfristige Termine",
                  "WhatsApp-Kommunikation",
                  "Individuelle Betreuung"
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
      </section>

      {/* Process Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Unser Prozess
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Strukturierte Vorbereitung in 4 Schritten
            </p>
          </div>

          <div className="modern-grid modern-grid-4">
            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Analyse</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Einschätzung Ihrer Vorkenntnisse und Identifikation der wichtigsten Lernbereiche.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Planung</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Erstellung eines individuellen Lernplans mit Fokus auf Prüfungsrelevanz.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Training</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Intensive Vorbereitung mit Prüfungssimulationen und direktem Feedback.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Prüfung</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Begleitung bis zur Prüfung mit finalen Tipps und Strategien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Transparente Preise
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Faire Preise für professionelle Vorbereitung
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="text-6xl font-bold text-[#0395A6] mb-4">39€</div>
                <p className="text-2xl text-gray-600 mb-8">60 Min 1‑on‑1 · Online via Zoom</p>
                <p className="text-lg text-gray-500">inkl. Unterlagen & Nachbereitung</p>
              </div>

              <div className="modern-grid modern-grid-2 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6 modern-heading">Was Sie bekommen:</h3>
                  <ul className="space-y-4">
                    {[
                      "1‑on‑1 mit erfahrenem Arzt",
                      "Zoom · Screen‑Sharing · Whiteboard",
                      "Prüfungsprotokoll als PDF",
                      "Individuelle Aufgabensheets",
                      "Prüfungssimulation",
                      "Direktes Feedback",
                      "Flexible Terminvergabe",
                      "Lernplan bis zur Prüfung"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-lg text-gray-700">
                        <CheckCircle className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6 modern-heading">Flexible Buchung:</h3>
                  <ul className="space-y-4">
                    {[
                      "Einzelstunden (60 Min)",
                      "Intensivkurse (5h)",
                      "Regelmäßige Betreuung",
                      "Prüfungsvorbereitung"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-lg text-gray-700">
                        <Zap className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed modern-text">
                  Online über Zoom mit Screen Sharing und Whiteboard. Flexibel buchbar über WhatsApp, 
                  bezahlen erst im Anschluss!
                </p>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg text-xl font-semibold modern-focus group"
                >
                  <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                  Jetzt buchen
                  <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            BEREIT FÜR DIE PRÜFUNG?
          </h2>
          <p className="text-3xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            Starte jetzt mit deiner Kenntnisprüfungs-Vorbereitung.
          </p>
          <p className="text-xl text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            Professionelle Betreuung durch erfahrene deutsche Ärzt:innen. 
            Individuelle Lernpläne und prüfungsnahe Simulationen.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-xl font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
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