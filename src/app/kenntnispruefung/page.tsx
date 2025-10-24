import { CheckCircle, Users, Target, BookOpen, Clock, Zap, MessageCircle, Award, ArrowRight, Brain, FileText, Calendar } from 'lucide-react'

export default function KenntnispruefungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <Award className="w-5 h-5 mr-2" />
              Spezialisiert auf Kenntnisprüfung
            </div>
            
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
              Kenntnisprüfung<br />
              <span className="text-[#0395A6]">erfolgreich bestehen</span>
            </h1>
            
            <p className="body-text-large text-gray-600 mb-16 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              Spezialisierte Vorbereitung für internationale Ärzt:innen auf die deutsche Kenntnisprüfung –
              die mündlich‑praktische, fallbasierte Prüfung im Anerkennungsverfahren zur Approbation. Wir trainieren
              gezielt Innere Medizin und Chirurgie samt Querschnittsbereichen (Notfallmedizin, Klinische Pharmakologie,
              Bildgebung/Strahlenschutz, Hygiene und relevante Rechtsfragen). Hinweis: Umfang und Dauer der Prüfung
              variieren je nach Bundesland.
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
              Struktur, Inhalte und typische Dauer (abhängig vom Bundesland)
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="mb-4 md:mb-8">
                <FileText className="w-8 h-8 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-black mb-3 md:mb-6 modern-heading">Mündlich‑praktische, fallbasierte Prüfung</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-3 md:mb-6">
                Typische Dauer: 60–90 Min (in einigen Bundesländern bis zu 120 Min).
              </p>
              <ul className="space-y-3">
                {[
                  "Anamnese und körperliche Untersuchung (realer Patient oder Fallvignette)",
                  "Arztbrief/Patientenbericht mit Diagnose, DD, Befunden und Therapieplan",
                  "Fallpräsentation vor der Kommission und strukturierte Falldiskussion",
                  "Querschnittsthemen: Notfallmanagement, Hygiene, Arzneimitteltherapie, Strahlenschutz"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="mb-4 md:mb-8">
                <Users className="w-8 h-8 md:w-12 md:h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-black mb-3 md:mb-6 modern-heading">Prüfungsinhalte & Schwerpunkte</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-3 md:mb-6">
                Orientiert an der deutschen ärztlichen Ausbildung; Schwerpunkte variieren regional.
              </p>
              <ul className="space-y-3">
                {[
                  "Innere Medizin und Chirurgie (Kernfächer)",
                  "Notfallmedizin und klinische Pharmakologie",
                  "Bildgebung & Strahlenschutz, Hygiene/Infektiologie",
                  "Rechtliche Grundlagen (Aufklärung, Dokumentation, Schweigepflicht)"
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

      {/* Legal basis & prerequisites */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Rechtliche Grundlage & Voraussetzungen
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Die Kenntnisprüfung ist gesetzlich im Rahmen des Approbationsverfahrens vorgesehen (BÄO §3).
              Sie wird verlangt, wenn die Gleichwertigkeit der außerhalb der EU/EWR erworbenen Ausbildung
              nicht vollständig nachgewiesen werden kann.
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-8 modern-animate-fade-in-up">
              <div className="mb-6">
                <FileText className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Sprachvoraussetzungen</h3>
              <ul className="space-y-3">
                {[
                  "Deutsch B2 (allgemein)",
                  "Fachsprachprüfung Medizin (C1 Medizin), i. d. R. verpflichtend",
                  "FSP ist unabhängig von der Kenntnisprüfung"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-8 modern-animate-fade-in-up">
              <div className="mb-6">
                <BookOpen className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Unterlagen (Auszug)</h3>
              <ul className="space-y-3">
                {[
                  "Ärztliches Diplom/Abschluss und Fächer‑/Stundennachweise",
                  "Curriculum/Syllabi (falls gefordert)",
                  "Berufszulassung/Good‑Standing, Lebenslauf, Identitätsnachweis",
                  "Übersetzungen und ggf. Beglaubigungen gemäß Landesvorgaben"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modern-card p-8 modern-animate-fade-in-up">
              <div className="mb-6">
                <Award className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Ergebnis & Approbation</h3>
              <ul className="space-y-3">
                {[
                  "Bestehen der Kenntnisprüfung + bestandene FSP",
                  "Erfüllte Zuverlässigkeits‑/Gesundheitsnachweise",
                  "führt zur Erteilung der Approbation (zuständige Landesbehörde)"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#0395A6] mr-3 flex-shrink-0" />
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

      {/* Recognition Procedure Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Behördlicher Ablauf bis zur Approbation
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Der genaue Ablauf, Zuständigkeiten und Fristen unterscheiden sich je nach Bundesland.
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Bundesland wählen</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Zuständige Behörde ermitteln (Approbationsbehörde/Landesamt). Anforderungen prüfen.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Antrag & Unterlagen</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Approbation beantragen, erforderliche Dokumente einreichen, Übersetzungen/Beglaubigungen.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Gleichwertigkeitsprüfung</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Behörde vergleicht Ausbildung. Bei Unterschieden: Auflage zur Kenntnisprüfung.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Fachsprachprüfung (C1)</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Medizinische Sprachprüfung (separat zur Kenntnisprüfung); Reihenfolge variiert je Land.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                05
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Berufserlaubnis (optional)</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Zeitlich befristete Tätigkeit unter Aufsicht möglich; Regelungen sind landesspezifisch.
              </p>
            </div>

            <div className="modern-card p-8 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold">
                06
              </div>
              <h3 className="text-lg font-bold text-black mb-4 modern-heading">Kenntnisprüfung & Approbation</h3>
              <p className="text-gray-600 leading-relaxed modern-text">
                Bestehen der KP und FSP führt (bei erfüllten Voraussetzungen) zur Approbation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Häufige Fragen (FAQ)
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Kurze, verlässliche Antworten rund um die Kenntnisprüfung und die Approbation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {[
              {
                q: "Was ist der Unterschied zwischen Fachsprachprüfung und Kenntnisprüfung?",
                a: "Die Fachsprachprüfung (FSP) prüft die medizinische Sprachkompetenz (C1 Medizin). Die Kenntnisprüfung (KP) ist eine mündlich‑praktische, fallbasierte Fachprüfung zu medizinischen Inhalten. Beides ist in der Regel erforderlich, aber organisatorisch getrennt."
              },
              {
                q: "Wie lange dauert die Kenntnisprüfung?",
                a: "Üblich sind 60–90 Minuten. In einigen Bundesländern kann die Dauer bis zu ca. 120 Minuten betragen. Der genaue Ablauf variiert regional."
              },
              {
                q: "Welche Fächer werden geprüft?",
                a: "Kernfächer sind Innere Medizin und Chirurgie. Zusätzlich werden Querschnittsbereiche wie Notfallmedizin, Klinische Pharmakologie/Arzneimitteltherapie, Bildgebung/Strahlenschutz, Hygiene/Infektiologie sowie rechtliche Grundlagen abgefragt."
              },
              {
                q: "Wie oft kann ich die Prüfung wiederholen?",
                a: "Die Anzahl der Versuche und Wartezeiten sind landesabhängig. In vielen Ländern sind mehrere Versuche möglich; informieren Sie sich bei der zuständigen Behörde."
              },
              {
                q: "Brauche ich zuerst die FSP oder zuerst die Kenntnisprüfung?",
                a: "Die Reihenfolge unterscheidet sich je nach Bundesland. Häufig wird die FSP vor der KP abgelegt. Maßgeblich sind die Vorgaben der Approbationsbehörde."
              },
              {
                q: "Kann ich mit Berufserlaubnis arbeiten?",
                a: "Eine befristete Berufserlaubnis ist in manchen Ländern möglich, meist unter ärztlicher Aufsicht und mit Auflagen. Details, Dauer und Voraussetzungen legt das jeweilige Bundesland fest."
              },
              {
                q: "Welche Unterlagen brauche ich für den Antrag?",
                a: "Typisch sind Abschlussurkunden, Fächer‑/Stundennachweise, ggf. Curricula, Nachweise der Berufszulassung/Good‑Standing, Identitätsnachweise, Lebenslauf sowie beglaubigte Übersetzungen. Die exakten Listen veröffentlichen die Landesbehörden."
              },
              {
                q: "Was passiert, wenn ich nicht bestehe?",
                a: "Sie erhalten ein Protokoll/Feedback. Eine Wiederholung ist häufig möglich; Fristen und Anzahl der Versuche sind landesspezifisch. Gezielte Vorbereitung auf die festgestellten Defizite ist sinnvoll."
              }
            ].map((item, idx) => (
              <details key={idx} className="modern-faq">
                <summary className="modern-faq-question">
                  {item.q}
                </summary>
                <div className="modern-faq-answer open">
                  <p className="modern-text">{item.a}</p>
                </div>
              </details>
            ))}
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