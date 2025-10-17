'use client'

import { CheckCircle, Users, Target, BookOpen, Clock, Zap, MessageCircle, Award, ArrowRight, Brain, Shield } from 'lucide-react'

export default function CoachingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section academic-section">
        <div className="academic-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0395A6] text-white font-semibold mb-8 animate-fade-in-up">
              <Award className="w-5 h-5 mr-2" />
              Individuelles 1:1 Coaching
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 premium-heading leading-tight animate-fade-in-up">
              Lernprobleme?<br />
              Blackouts?<br />
              <span className="text-[#0395A6]">Prüfungsstress?</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed premium-text animate-fade-in-up">
              Mit individuellem Coaching gehen Sie sicher und strukturiert in jede Prüfung – 
              egal ob Vorklinik oder Klinik, schriftlich oder mündlich. Wissenschaftlich fundierte Methoden, 
              die nachweislich funktionieren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up">
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
      <section id="mehr-erfahren" className="academic-section bg-white">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 premium-heading">
              Das Problem: Falsche Lernstrategien
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto premium-text">
              Warum traditionelle Lernmethoden im Medizinstudium versagen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="premium-card p-12 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Bulimielernen</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Stures Auswendiglernen ohne Verständnis führt zu Blackouts in der Prüfung. 
                Ohne echte Verknüpfungen ist das Wissen nicht abrufbar.
              </p>
            </div>

            <div className="premium-card p-12 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Zeitverschwendung</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Fokus auf unwichtige Details statt Prüfungsrelevanz. Stundenlanges Lernen 
                ohne Struktur und Priorisierung führt zu Frustration.
              </p>
            </div>

            <div className="premium-card p-12 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Fehlende Strategie</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Kein Plan, keine Struktur, keine klaren Ziele. Studierende verlieren sich 
                in der Stoffmenge und wissen nicht, wo sie anfangen sollen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="academic-section bg-[#FAFAFA]">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 premium-heading">
              Die ultima-rat.io Lösung
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto premium-text">
              Wissenschaftlich fundierte Lernmethoden, die nachweislich funktionieren
            </p>
          </div>

          <div className="feature-grid">
            <div className="premium-card p-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Approbierte Ärzt:innen</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Erfahrene Mediziner mit aktueller Klinikroutine leiten Sie durch komplexe medizinische Inhalte. 
                Praxisnahe Erklärungen anhand von Befunden, Bildern und klinischen Algorithmen.
              </p>
            </div>

            <div className="premium-card p-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <BookOpen className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Strukturierte Lernpläne</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Individuelle Wochenpläne mit gezielten Wiederholungen und Meilensteinen. 
                Kontinuierliche Anpassung an Ihre Lernfortschritte und Prüfungstermine.
              </p>
            </div>

            <div className="premium-card p-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Brain className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Fokussiertes Lernen</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Priorisierung nach Prüfungsrelevanz und Ihren Stärken. Klare Strukturierung 
                von Pflichtstoff, Kernkompetenzen und optionalen Inhalten.
              </p>
            </div>

            <div className="premium-card p-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Adaptive Prüfungsplattform</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Eigene Plattform mit aktuellen Prüfungsfragen und adaptiven Übungssets. 
                Intelligente Auswertung nach Themen und Fehlerarten für gezieltes Training.
              </p>
            </div>

            <div className="premium-card p-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Prüfungslogik & Anwendung</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Training von klinischen Entscheidungsprozessen: Next-best-step, Ausschlusskriterien 
                und typische Fallen. Systematische Herleitung statt auswendig lernen.
              </p>
            </div>

            <div className="premium-card p-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Kontinuierliche Begleitung</h3>
              <p className="text-lg text-gray-600 leading-relaxed premium-text">
                Online 1:1-Sessions mit festen Terminen und schnellem Feedback. 
                Kuratierte Materialien und strukturierte Begleitung bis zur Prüfung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="academic-section bg-white">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 premium-heading">
              Unser Versprechen
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto premium-text">
              Individuelles Medizin-Coaching – 100 % auf dich zugeschnitten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Buchung und Themenwahl</h3>
              <p className="text-gray-600 leading-relaxed premium-text">
                Du sagst uns, was du brauchst – z. B. Anatomie, Physiologie, Altklausuren oder konkrete 
                Prüfungsfälle. Wir richten das Coaching genau danach aus.
              </p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Live-Coaching per Zoom</h3>
              <p className="text-gray-600 leading-relaxed premium-text">
                Ob 1h-Session oder 5h-Intensivtag – wir coachen dich strukturiert, verständlich und 
                prüfungsnah. Direkt, klar und ohne Zeitverlust.
              </p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-black mb-4">PDF mit Protokoll & Material</h3>
              <p className="text-gray-600 leading-relaxed premium-text">
                Du bekommst alles zum Nachlesen: Zusammenfassungen, Lernpläne, Tipps – individuell auf dich 
                abgestimmt. Ideal zum Wiederholen und Vertiefen.
              </p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Du lernst fokussiert, nachhaltig</h3>
              <p className="text-gray-600 leading-relaxed premium-text">
                Nach dem Coaching bist du nicht allein – sondern vorbereitet. Du weißt genau, was, wie und 
                warum du lernen musst. Und das macht den Unterschied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="academic-section bg-[#FAFAFA]">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 premium-heading">
              Transparente Preise
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto premium-text">
              Klare Struktur, faire Preise, keine versteckten Kosten
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="premium-card p-16 animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="text-6xl font-bold text-[#0395A6] mb-4">39€</div>
                <p className="text-2xl text-gray-600 mb-8">60 Min 1‑on‑1 · Online via Zoom</p>
                <p className="text-lg text-gray-500">inkl. Unterlagen & Nachbereitung</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Was du bekommst:</h3>
                  <ul className="space-y-4">
                    {[
                      "1‑on‑1 mit Ärzt:in",
                      "Zoom · Screen‑Sharing · Live‑Skizzen",
                      "Kursprotokoll als PDF",
                      "Individueller Aufgabensheet",
                      "Prüfungssimulation",
                      "Direktes Feedback",
                      "Flexible Terminvergabe",
                      "Konkrete Lernpläne"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-lg text-gray-700">
                        <CheckCircle className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Flexible Buchung:</h3>
                  <ul className="space-y-4">
                    {[
                      "Einzelstunden (60 Min)",
                      "Crashkurse (5h Intensiv)",
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
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Online über Zoom mit Screen Sharing und Whiteboard. Flexibel buchbar über WhatsApp, 
                  bezahlen erst im Anschluss!
                </p>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button px-12 py-5 rounded-lg text-xl font-semibold focus-ring group"
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
      <section className="cta-section academic-section">
        <div className="academic-container text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 premium-heading animate-fade-in-up">
            GEMEINSAM
          </h2>
          <p className="text-3xl text-white text-opacity-90 mb-8 animate-fade-in-up">
            Dein Weg zur Prüfungssicherheit beginnt hier.
          </p>
          <p className="text-xl text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Wähle das Coaching-Format, das zu deinem Lernstil und deinem Ziel passt. 
            Über 500 erfolgreiche Prüfungen sprechen für sich.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up">
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-xl font-semibold transition-all focus-ring inline-block group"
            >
              <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
              Kostenloses Erstgespräch
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}