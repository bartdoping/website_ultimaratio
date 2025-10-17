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
            
            <h1 className="heading-primary text-black mb-8 modern-heading modern-animate-fade-in-up">
              Kenntnisprüfung<br />
              <span className="text-[#0395A6]">erfolgreich bestehen</span>
            </h1>
            
            <p className="body-text-large text-gray-600 mb-16 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              Spezialisierte Vorbereitung für internationale Ärzt:innen auf die deutsche Kenntnisprüfung. 
              Vollständige Abdeckung aller Prüfungsinhalte: Innere Medizin, Chirurgie, Notfallmedizin, 
              Klinische Pharmakologie, Bildgebende Verfahren und Rechtsfragen. Individuelle Betreuung 
              durch erfahrene deutsche Ärzt:innen mit Prüfungssimulationen und strukturierten Lernplänen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center modern-animate-fade-in-up">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-lg font-semibold modern-focus group cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                Kostenloses Erstgespräch
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#mehr-erfahren"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold modern-focus group cursor-pointer"
              >
                Mehr erfahren
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="mehr-erfahren" className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Die Herausforderung der Kenntnisprüfung
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Warum die Kenntnisprüfung für internationale Ärzt:innen so anspruchsvoll ist
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Breites Themenspektrum</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Innere Medizin, Chirurgie, Notfallmedizin, Klinische Pharmakologie, Bildgebende Verfahren, 
                Strahlenschutz und Rechtsfragen - alle Bereiche müssen beherrscht werden.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Praktische Fertigkeiten</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Anamneseerhebung, körperliche Untersuchung, Patientenberichte schreiben und 
                klinische Entscheidungsfindung - alles unter Zeitdruck und auf Deutsch.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Sprachliche Kompetenz</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Medizinische Fachsprache auf C1-Niveau, Patientenkommunikation und 
                präzise Dokumentation - alles in deutscher Sprache.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Structure Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Die Kenntnisprüfung im Detail
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Struktur und Ablauf der deutschen Kenntnisprüfung
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <FileText className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Klinische Prüfung (60 Min)</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Praktische Fertigkeiten unter Beweis stellen:
              </p>
              <ul className="space-y-3">
                {[
                  "Anamneseerhebung mit Patienten",
                  "Körperliche Untersuchung durchführen",
                  "Arztbericht schreiben (Diagnose, Differentialdiagnose, Therapieplan)",
                  "Klinische Entscheidungsfindung demonstrieren"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Users className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Mündlich-praktische Prüfung (90 Min)</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Fachwissen und Kommunikationsfähigkeit:
              </p>
              <ul className="space-y-3">
                {[
                  "Patientenvorstellung vor Prüfungskommission",
                  "Fachfragen aus allen Bereichen beantworten",
                  "Klinische Fälle diskutieren",
                  "Rechtliche und ethische Aspekte erläutern"
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

      {/* Solution Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Unsere spezialisierte Kenntnisprüfungs-Vorbereitung
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Vollständige Abdeckung aller Prüfungsinhalte und Herausforderungen
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Users className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Alle Prüfungsfächer</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Vollständige Vorbereitung auf alle Kenntnisprüfungs-Inhalte:
              </p>
              <ul className="space-y-3">
                {[
                  "Innere Medizin & Chirurgie",
                  "Notfallmedizin & Pharmakologie",
                  "Bildgebende Verfahren & Strahlenschutz",
                  "Rechtsfragen des ärztlichen Berufs"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <FileText className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Praktische Fertigkeiten</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Training der klinischen Prüfungsteile:
              </p>
              <ul className="space-y-3">
                {[
                  "Anamneseerhebung üben",
                  "Körperliche Untersuchung trainieren",
                  "Arztberichte schreiben",
                  "Patientenvorstellung simulieren"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Brain className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Sprachliche Kompetenz</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Medizinische Fachsprache und Kommunikation:
              </p>
              <ul className="space-y-3">
                {[
                  "Fachsprache auf C1-Niveau",
                  "Patientenkommunikation",
                  "Präzise Dokumentation",
                  "Mündliche Präsentation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Target className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Prüfungssimulationen</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Realistische Prüfungssituationen trainieren:
              </p>
              <ul className="space-y-3">
                {[
                  "Klinische Prüfung simulieren",
                  "Mündliche Prüfung üben",
                  "Zeitdruck trainieren",
                  "Prüfungsstrategien entwickeln"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <BookOpen className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Individuelle Betreuung</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Persönliche Unterstützung durch erfahrene Ärzt:innen:
              </p>
              <ul className="space-y-3">
                {[
                  "1:1 Coaching mit deutschen Ärzt:innen",
                  "Individuelle Lernpläne",
                  "Direktes Feedback",
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
              <div className="mb-8">
                <Calendar className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Flexible Termine</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Anpassung an deinen Zeitplan:
              </p>
              <ul className="space-y-3">
                {[
                  "Online via Zoom",
                  "Flexible Buchung",
                  "Kurzfristige Termine",
                  "WhatsApp-Kommunikation"
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Unser Kenntnisprüfungs-Prozess
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Strukturierte Vorbereitung auf alle Prüfungsanforderungen
            </p>
          </div>

          <div className="modern-grid modern-grid-4">
            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Defizitanalyse</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Einschätzung deiner medizinischen Vorkenntnisse und Identifikation der 
                wichtigsten Lernbereiche für die Kenntnisprüfung.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Fachliche Vorbereitung</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Systematische Vorbereitung auf alle Prüfungsfächer: Innere Medizin, Chirurgie, 
                Notfallmedizin, Pharmakologie und Rechtsfragen.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Praktisches Training</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Training der klinischen Fertigkeiten: Anamnese, Untersuchung, 
                Arztberichte und Patientenvorstellung simulieren.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Prüfungssimulation</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Realistische Prüfungssimulationen mit Zeitdruck und finalen 
                Strategien für die erfolgreiche Prüfung.
              </p>
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
              Faire Preise für professionelle Vorbereitung
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
                      "1‑on‑1 mit deutschen Ärzt:innen",
                      "Alle Prüfungsfächer abgedeckt",
                      "Praktische Fertigkeiten trainieren",
                      "Sprachliche Kompetenz fördern",
                      "Prüfungssimulationen",
                      "Individuelle Lernpläne",
                      "Direktes Feedback",
                      "Begleitung bis zur Prüfung"
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
                      "Intensivkurse (beliebig viele Stunden)",
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
                  className="modern-button px-12 py-5 rounded-lg text-lg font-semibold modern-focus group price-button-mobile"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            BEREIT FÜR DIE KENNTNISPRÜFUNG?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            Starte jetzt mit deiner spezialisierten Kenntnisprüfungs-Vorbereitung.
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            Vollständige Abdeckung aller Prüfungsinhalte: Innere Medizin, Chirurgie, Notfallmedizin, 
            Pharmakologie und Rechtsfragen. Praktische Fertigkeiten und sprachliche Kompetenz trainieren.
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