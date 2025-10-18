import Link from 'next/link'
import { CheckCircle, Users, Target, BookOpen, Brain, Clock, Award, Zap, Shield, ArrowRight, MessageCircle } from 'lucide-react'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <Award className="w-5 h-5 mr-2" />
              Über 500 erfolgreiche Prüfungen
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 sm:mb-8 md:mb-12 modern-heading leading-tight modern-animate-fade-in-up px-2 sm:px-4">
              Bestnoten im<br />
              <span className="text-[#0395A6]">Medizinstudium</span><br />
              durch echtes Verstehen
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up px-2 sm:px-4">
              Professionelle Medizin-Nachhilfe mit approbierten Ärzt:innen und qualifizierten Tutor:innen. Wissenschaftlich fundierte Lernmethoden, 
              die nachweislich funktionieren. Strukturierte Prüfungsvorbereitung von der Vorklinik bis zum M3 sowie auch für die Kenntnisprüfung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center mb-16 sm:mb-20 modern-animate-fade-in-up px-4">
              <a
                href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
                className="modern-button px-6 sm:px-12 py-3 sm:py-5 rounded-lg text-sm sm:text-lg font-semibold modern-focus group w-full sm:w-auto whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 inline-block group-hover:animate-pulse" />
                <span className="hidden xs:inline">Kostenloses Erstgespräch</span>
                <span className="xs:hidden">Erstgespräch</span>
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/coaching"
                className="modern-button-secondary px-6 sm:px-12 py-3 sm:py-5 rounded-lg text-sm sm:text-lg font-semibold modern-focus group w-full sm:w-auto whitespace-nowrap"
              >
                <span className="hidden xs:inline">Coaching entdecken</span>
                <span className="xs:hidden">Coaching</span>
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto modern-animate-fade-in-up">
              <div className="modern-stat">
                <div className="modern-stat-number">97%</div>
                <p className="modern-stat-label">Erfolgsquote</p>
              </div>
              <div className="modern-stat">
                <div className="modern-stat-number">500+</div>
                <p className="modern-stat-label">Erfolgreiche Prüfungen</p>
              </div>
              <div className="modern-stat">
                <div className="modern-stat-number">6+</div>
                <p className="modern-stat-label">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Das Problem: Falsche Lernstrategien
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Warum traditionelle Lernmethoden im Medizinstudium versagen
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Bulimielernen</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Stures Auswendiglernen ohne Verständnis führt zu Blackouts in der Prüfung. 
                Ohne echte Verknüpfungen ist das Wissen nicht abrufbar.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Zeitverschwendung</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Fokus auf unwichtige Details statt Prüfungsrelevanz. Stundenlanges Lernen 
                ohne Struktur und Priorisierung führt zu Frustration.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Fehlende Strategie</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Kein Plan, keine Struktur, keine klaren Ziele. Studierende verlieren sich 
                in der Stoffmenge und wissen nicht, wo sie anfangen sollen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Die ultima-rat.io Lösung
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Wissenschaftlich fundierte Lernmethoden, die nachweislich funktionieren
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Users className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Erfahrene Tutor:innen</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Erfahrene Mediziner und Tutoren mit aktueller Klinikroutine leiten dich durch komplexe medizinische Inhalte. 
                Praxisnahe Erklärungen anhand von Befunden, Bildern und klinischen Algorithmen.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <BookOpen className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Strukturierte Lernpläne</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Individuelle Wochenpläne mit gezielten Wiederholungen und Meilensteinen. 
                Kontinuierliche Anpassung an Ihre Lernfortschritte und Prüfungstermine.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Brain className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Fokussiertes Lernen</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Priorisierung nach Prüfungsrelevanz und Ihren Stärken. Klare Strukturierung 
                von Pflichtstoff, Kernkompetenzen und optionalen Inhalten.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Zap className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Adaptive Prüfungsplattform</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Eigene Plattform mit aktuellen Prüfungsfragen und adaptiven Übungssets. 
                Intelligente Auswertung nach Themen und Fehlerarten für gezieltes Training.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Target className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Prüfungslogik & Anwendung</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Training von klinischen Entscheidungsprozessen: Next-best-step, Ausschlusskriterien 
                und typische Fallen. Systematische Herleitung statt auswendig lernen.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Shield className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Kontinuierliche Begleitung</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Online 1:1-Sessions mit festen Terminen und schnellem Feedback. 
                Kuratierte Materialien und strukturierte Begleitung bis zur Prüfung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Der ultima-rat.io Ansatz
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Systematische Defizitanalyse statt verzweifeltes Bulimielernen
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="modern-card p-6 md:p-16 modern-animate-fade-in-up">
              <div className="text-center mb-6 md:mb-12">
                <p className="text-sm md:text-lg text-[#0395A6] font-semibold italic px-2 break-words">
                  &ldquo;Du steigst nicht auf das Niveau deiner Ziele. Du fällst auf das Niveau deiner Systeme.&rdquo;
                </p>
              </div>
              
              <div className="modern-grid modern-grid-2">
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-black mb-3 md:mb-6 modern-heading break-words">Wissenschaftliche Grundlage</h3>
                  <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-3 md:mb-6 px-2 break-words">
                    Wir arbeiten mit bewährten Lernmethoden aus der Kognitionsforschung: Retrieval Practice 
                    (aktives Abrufen), Spaced Repetition (geplante Wiederholung), Interleaving (systematisches 
                    Mischen von Themen) und gezieltes Feedback.
                  </p>
                  <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text px-2 break-words">
                    Diese Methoden sind wissenschaftlich belegt und führen nachweislich zu besseren 
                    Prüfungsergebnissen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-black mb-3 md:mb-6 modern-heading break-words">Strukturierte Herangehensweise</h3>
                  <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-3 md:mb-6 px-2 break-words">
                    Statt beim Altbewährten zu bleiben und verzweifelt die letzten Energiereserven auszuschöpfen, 
                    gehen wir deine Defizite strukturiert an.
                  </p>
                  <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text px-2 break-words">
                    Unsere Coaches sind approbierte Ärzt:innen und erfahrene Medizinstudierende, die selbst 
                    mit Top-Ergebnissen durch alle Examina gegangen sind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Transparente Preise
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Klare Struktur, faire Preise, keine versteckten Kosten
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="text-4xl md:text-6xl font-bold text-[#0395A6] mb-4 price-mobile">39€</div>
                <p className="text-lg text-gray-600 mb-8">60 Min 1‑on‑1 · Online via Zoom</p>
                <p className="text-lg text-gray-500">inkl. Unterlagen & Nachbereitung</p>
              </div>

              <div className="modern-grid modern-grid-2 mb-12">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">Was du bekommst:</h3>
                  <ul className="space-y-4">
                    {[
                      "1‑on‑1",
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
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">Flexible Buchung:</h3>
                  <ul className="space-y-4">
                    {[
                      "Einzelstunden (60 Min)",
                      "Crashkurse (beliebig viele Stunden)",
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
                <p className="text-lg text-gray-600 mb-8 leading-relaxed modern-text price-text-mobile">
                  Online über Zoom mit Screen Sharing und Whiteboard. Flexibel buchbar über WhatsApp, 
                  bezahlen erst im Anschluss!
                </p>
                <a
                  href="http://wa.me/491639347633"
          target="_blank"
          rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg button-text modern-focus group price-button-mobile"
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

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            GEMEINSAM
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            Dein Weg zur Prüfungssicherheit beginnt hier.
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            Wähle das Coaching-Format, das zu deinem Lernstil und deinem Ziel passt. 
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center modern-animate-fade-in-up">
            <a
              href="http://wa.me/491639347633"
          target="_blank"
          rel="noopener noreferrer"
              className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg button-text transition-all modern-focus inline-block group"
            >
              <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
              Kostenloses Erstgespräch
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/coaching"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0395A6] px-12 py-5 rounded-lg button-text transition-all modern-focus inline-block group"
            >
              Coaching entdecken
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}