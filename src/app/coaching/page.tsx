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
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8 premium-heading leading-tight animate-fade-in-up px-4">
              Anatomie verstehen?<br />
              Physiologie begreifen?<br />
              <span className="text-[#0395A6]">Prüfungen bestehen?</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-12 sm:mb-16 max-w-5xl mx-auto leading-relaxed premium-text animate-fade-in-up px-4">
              Mit unserem spezialisierten Medizin-Coaching verwandelst du komplexe Lerninhalte in verständliches Wissen. 
              Von Anatomie bis Biochemie, von Physikum bis M3 – wir zeigen dir die effektivsten Lernstrategien und 
              helfen dir, jede Prüfung mit Bestnoten zu bestehen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center animate-fade-in-up px-4">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-6 sm:px-12 py-3 sm:py-5 rounded-lg text-sm sm:text-lg font-semibold modern-focus group cursor-pointer w-full sm:w-auto whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 inline-block group-hover:animate-pulse" />
                <span className="hidden xs:inline">Kostenloses Erstgespräch</span>
                <span className="xs:hidden">Erstgespräch</span>
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#mehr-erfahren"
                className="modern-button-secondary px-6 sm:px-12 py-3 sm:py-5 rounded-lg text-sm sm:text-lg font-semibold modern-focus group cursor-pointer w-full sm:w-auto whitespace-nowrap"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Student Problems Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Die größten Herausforderungen im Medizinstudium
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Warum 70% der Medizinstudierenden mit diesen Problemen kämpfen
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Anatomie-Overload</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Über 2000 lateinische Begriffe, komplexe 3D-Strukturen und unzählige Details. 
                Ohne die richtige Lernstrategie verlierst du dich im Detailwust.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Zeitdruck & Stress</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                40+ Stunden Lernzeit pro Woche, Prüfungen alle 2-3 Monate, ständiger Zeitdruck. 
                Viele Studierende brechen unter der Belastung zusammen.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Prüfungsangst & Blackouts</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Trotz stundenlangem Lernen: Blackouts in der Prüfung, Angst vor dem Versagen, 
                Selbstzweifel und Frustration. Ein Teufelskreis, der schwer zu durchbrechen ist.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <BookOpen className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Ineffiziente Lernmethoden</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Stures Auswendiglernen, endloses Wiederholen, keine Verknüpfungen. 
                Die meisten Studierenden lernen falsch und verschwenden wertvolle Zeit.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Fehlende Struktur</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Kein Plan, keine Prioritäten, keine klaren Ziele. Studierende verlieren sich 
                in der Stoffmenge und wissen nicht, wo sie anfangen sollen.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Isolation & Überforderung</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Allein lernen, keine Unterstützung, niemand der die komplexen Inhalte erklärt. 
                Viele Studierende fühlen sich überfordert und alleingelassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="mehr-erfahren" className="modern-section bg-white">
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

      {/* Effective Learning Methods Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Die effektivsten Lernmethoden für Medizinstudierende
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Wissenschaftlich bewiesene Strategien, die dein Lernen revolutionieren
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Brain className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Retrieval Practice</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Aktives Abrufen von Wissen statt passives Wiederholen. Studien zeigen: 
                Retrieval Practice ist 3x effektiver als traditionelles Lernen.
              </p>
              <ul className="space-y-3">
                {[
                  "Karteikarten mit Spaced Repetition",
                  "Selbsttests ohne Hilfsmittel",
                  "Aktive Wissensabfrage",
                  "Lücken identifizieren und schließen"
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
                <Clock className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Spaced Repetition</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Geplante Wiederholungen in optimalen Abständen. Vergessenskurve überwinden 
                und Wissen dauerhaft im Langzeitgedächtnis verankern.
              </p>
              <ul className="space-y-3">
                {[
                  "Wiederholung nach 1, 3, 7, 21 Tagen",
                  "Adaptive Lernintervalle",
                  "Schwache Bereiche häufiger wiederholen",
                  "Langzeitgedächtnis stärken"
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
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Interleaving</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Systematisches Mischen verschiedener Themen und Fächer. 
                Verbessert Transferleistung und Anwendungsfähigkeit um 40%.
              </p>
              <ul className="space-y-3">
                {[
                  "Anatomie + Physiologie kombinieren",
                  "Verschiedene Fächer abwechseln",
                  "Transfer zwischen Themen fördern",
                  "Flexibles Denken trainieren"
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
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Elaboration</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Komplexe Zusammenhänge erklären und verknüpfen. 
                Tiefes Verständnis statt oberflächliches Auswendiglernen.
              </p>
              <ul className="space-y-3">
                {[
                  "Warum-Fragen stellen und beantworten",
                  "Zusammenhänge zwischen Fächern finden",
                  "Eigene Erklärungen formulieren",
                  "Wissen aktiv strukturieren"
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
              Unser spezialisiertes Medizin-Coaching
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Individuelle Betreuung durch erfahrene Ärzt:innen und Tutor:innen mit bewährten Lernstrategien
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Users className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">1:1 Coaching</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Persönliche Betreuung durch approbierte Ärzt:innen und qulifizierte Tutor:innen, die selbst mit Bestnoten 
                durch alle Examina gegangen sind. Praxisnahe Erklärungen und klinische Bezüge.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Brain className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Wissenschaftliche Lernmethoden</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Retrieval Practice, Spaced Repetition, Interleaving und Elaboration. 
                Bewiesene Methoden, die dein Lernen 3x effektiver machen.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <BookOpen className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Individuelle Lernpläne</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Maßgeschneiderte Pläne für Anatomie, Physiologie, Biochemie und alle Fächer. 
                Angepasst an deine Stärken, Schwächen und Prüfungstermine.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Target className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Prüfungsvorbereitung</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Spezielle Vorbereitung auf Physikum, M2, M3 und alle Prüfungen. 
                Altklausuren, Prüfungssimulationen und Strategien gegen Blackouts.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Zap className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Zeitmanagement & Stressabbau</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Effiziente Lernstrategien, Stressmanagement und Prüfungsangst überwinden. 
                Work-Life-Balance im Medizinstudium finden.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Shield className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Kontinuierliche Unterstützung</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Regelmäßige Sessions, schnelles Feedback und persönliche Betreuung. 
                Du bist nie allein – wir begleiten dich bis zum Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Die Erfolgsfaktoren für Medizinstudierende
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Was die besten Medizinstudierenden anders machen
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up">
              <div className="text-center mb-12">
                <p className="text-lg text-[#0395A6] font-semibold italic">
                  &ldquo;Die besten Medizinstudierenden lernen nicht mehr, sondern intelligenter.&rdquo;
                </p>
              </div>
              
              <div className="modern-grid modern-grid-2">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">Wissenschaftliche Lernstrategien</h3>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                    Top-Performer nutzen Retrieval Practice, Spaced Repetition und Interleaving. 
                    Sie verstehen, wie das Gehirn lernt und nutzen diese Erkenntnisse optimal.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Aktives Abrufen statt passives Wiederholen",
                      "Geplante Wiederholungen in optimalen Abständen",
                      "Systematisches Mischen verschiedener Themen",
                      "Tiefes Verständnis durch Elaboration"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">Strukturiertes Vorgehen</h3>
                  <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                    Erfolgreiche Studierende haben klare Pläne, setzen Prioritäten und 
                    nutzen ihre Zeit effizient. Sie wissen, was wichtig ist und was nicht.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Klare Lernziele und Meilensteine",
                      "Priorisierung nach Prüfungsrelevanz",
                      "Effizientes Zeitmanagement",
                      "Regelmäßige Selbstreflexion"
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
        </div>
      </section>

      {/* Process Section */}
      <section className="academic-section bg-white">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 premium-heading">
              Unser Coaching-Prozess
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto premium-text">
              Von der Problemdiagnose bis zur Prüfungserfolg – strukturiert und effektiv
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Lernstand-Analyse</h3>
              <p className="text-gray-600 leading-relaxed premium-text">
                Wir analysieren deine Stärken und Schwächen, identifizieren Lernlücken und 
                erstellen einen maßgeschneiderten Plan für deine Prüfungsvorbereitung.
              </p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Wissenschaftliche Lernmethoden</h3>
              <p className="text-gray-600 leading-relaxed premium-text">
                Wir zeigen dir Retrieval Practice, Spaced Repetition und andere bewiesene Methoden. 
                Dein Lernen wird 3x effektiver und nachhaltiger.
              </p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Prüfungsvorbereitung</h3>
              <p className="text-gray-600 leading-relaxed premium-text">
                Altklausuren, Prüfungssimulationen und Strategien gegen Blackouts. 
                Wir bereiten dich optimal auf jede Prüfung vor.
              </p>
            </div>

            <div className="premium-card p-8 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Erfolg & Nachhaltigkeit</h3>
              <p className="text-gray-600 leading-relaxed premium-text">
                Du bestehst nicht nur die Prüfung, sondern entwickelst nachhaltige Lernstrategien. 
                Für den Rest deines Medizinstudiums und darüber hinaus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Erfolgsgeschichten unserer Studierenden
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Wie unsere Coaching-Methoden zu nachweislichen Verbesserungen führen
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  M
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Marcel M.</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                &ldquo;Mehr gelernt in 1 Stunde als in einer ganzen Woche alleine. Ich war total überfordert mit der prüfungsvorbereitung fürs M2 (vor allem weil ich letztendlich komplett falsch rangegangen bin und ein &bdquo;dummes&ldquo; Lernsystem hatte). Das Einzelcoaching war auf den Punkt, super strukturiert, mega empathisch und wirklich hilfreich.&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">M2 bestanden mit 2</p>
                <p className="text-sm text-gray-600">Strukturiertes Lernen gelernt</p>
              </div>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  V
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Victoria G.</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                &ldquo;Ich hab den 5h-Crashkurs gemacht und bin echt zufrieden! In nur fünf Stunden wurde mir alles verständlich erklärt, und der Inhalt wurde super hilfreich vermittelt. Was mir besonders gefallen hat: Ich habe endlich eine Lernstrategie gefunden, die zu mir passt - mit Anki-Karten, sinnvoller Nachbereitung und praxisnahem Falltraining.&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">5 Std. Crashkurs bestanden</p>
                <p className="text-sm text-gray-600">Lernstrategie gefunden</p>
              </div>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  A
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Angelina P.</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                &ldquo;Zu Beginn meines Studiums hatte ich große Schwierigkeiten, die für mich passende Lerntechnik zu finden und die relevanten Lerninhalte richtig zu filtern. Ich war dann in einem Dritt- und zwei Zweitversuchen, die ich ohne Hilfe nicht geschafft hätte. Mit ärztlicher &lsquo;Nachhilfe&rsquo; konnte ich die Wiederholungsklausuren erfolgreich bestehen!&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">Anatomie und Physiologie bestanden</p>
                <p className="text-sm text-gray-600">Wiederholungsklausuren erfolgreich</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="academic-section bg-[#FAFAFA]">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 premium-heading">
              Transparente Preise
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto premium-text">
              Klare Struktur, faire Preise, keine versteckten Kosten
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="premium-card p-16 animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="text-4xl font-bold text-[#0395A6] mb-4">39€</div>
                <p className="text-lg text-gray-600 mb-8">60 Min 1‑on‑1 · Online via Zoom</p>
                <p className="text-lg text-gray-500">inkl. Unterlagen & Nachbereitung</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6">Was du bekommst:</h3>
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
                  <h3 className="text-lg font-bold text-black mb-6">Flexible Buchung:</h3>
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
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Online über Zoom mit Screen Sharing und Whiteboard. Flexibel buchbar über WhatsApp, 
                  bezahlen erst im Anschluss!
                </p>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button px-12 py-5 rounded-lg text-lg font-semibold focus-ring group"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 premium-heading animate-fade-in-up">
            BEREIT FÜR DEN ERFOLG?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 animate-fade-in-up">
            Starte jetzt mit deinem individuellen Medizin-Coaching.
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Wissenschaftliche Lernmethoden, persönliche Betreuung und nachweisliche Erfolge. 
            Von Anatomie bis Physikum – wir begleiten dich zu deinem Ziel.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up">
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all focus-ring inline-block group"
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