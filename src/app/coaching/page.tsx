import { CheckCircle, Users, Target, BookOpen, Clock, Zap, MessageCircle, Award, TrendingUp } from 'lucide-react'

export default function CoachingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="academic-gradient academic-section">
        <div className="academic-container">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 academic-heading leading-tight">
              Lernprobleme?<br />
              Blackouts?<br />
              <span className="text-[#0395A6]">Prüfungsstress?</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed academic-text">
              Mit individuellem Coaching gehen Sie sicher und strukturiert in jede Prüfung – 
              egal ob Vorklinik oder Klinik, schriftlich oder mündlich. Wissenschaftlich fundierte Methoden, 
              die nachweislich funktionieren.
            </p>
            <a
              href="#mehr-erfahren"
              className="primary-button px-12 py-5 rounded-lg text-xl font-semibold focus-ring"
            >
              Mehr erfahren ↓
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="mehr-erfahren" className="academic-section bg-white">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 academic-heading">
              Das Problem
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto academic-text">
              Der falsche Ansatz macht alles kaputt
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed academic-text">
              Statt beim Altbewährten zu bleiben und verzweifelt seine letzte Energiereverse auszuschöpfen, 
              gehen wir deine Defizite strukturiert auf den Grund.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="academic-card p-12 text-center animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-6 academic-heading">
                Überfordert
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed academic-text">
                Der Stoff stapelt sich, während die Prüfung näher rückt. Du verlässt deinen Lernplan 
                und endest letztlich in einem sinnlosen Chaos.
              </p>
            </div>

            <div className="academic-card p-12 text-center animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-6 academic-heading">
                Fehlendes Verständnis
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed academic-text">
                Was ist wichtig? Was wird sowieso nicht abgefragt? Es fehlt dir das Know-How, um deine Zeit 
                strukturiert zu investieren und statt trocken alles auswendig zu lernen, effektives Verstehen anwendest.
              </p>
            </div>

            <div className="academic-card p-12 text-center animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-6 academic-heading">
                Strukturlosigkeit
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed academic-text">
                Du hast zwar viel gelernt, aber dennoch weißt du, dass das Bestehen nicht sicher ist. 
                Du brauchst mehr Struktur und nicht mehr Inhalte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="academic-section bg-[#FAFAFA]">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 academic-heading">
              Die Lösung
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto academic-text">
              Wie Du dein Studium mit Bravur meisterst
            </p>
          </div>

          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed academic-text">
              Mit approbierten Ärzt:innen, realistischen Prüfungssimulationen und individualisierten 
              Lernplänen unter die Top 5%!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Persönlich auf dich abgestimmt
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed academic-text">
                Kein 08/15-Lernplan, sondern ein Coaching, das exakt zu deinem Fach, deinem Tempo und 
                deinem Verständnisniveau passt. Wir analysieren gemeinsam, wo du stehst – und bauen darauf 
                ein System auf, das dich gezielt zum Erfolg führt.
              </p>
            </div>

            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Gecoacht von approbierten Ärzt:innen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed academic-text">
                Bei uns wirst du von erfahrenen Ärzt:innen trainiert, die jegliche Prüfungen und Examina 
                selbst durchlaufen haben. Du profitierst von echten Einblicken, klinischer Erfahrung und 
                Insiderwissen aus erster Hand.
              </p>
            </div>

            <div className="academic-card p-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-8 academic-heading">
                Fokus auf Verstehen, nicht nur Bulimielernen
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed academic-text">
                Wir zeigen dir nicht nur die richtige Antwort – sondern warum sie richtig ist und wie du sie 
                wiedererkennst. Statt sturem Auswendiglernen lernst du, Zusammenhänge zu begreifen und in 
                der Prüfung sicher zu handeln.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="academic-section bg-white">
        <div className="academic-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 academic-heading">
              Unser Versprechen
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto academic-text">
              Individuelles Medizin-Coaching – 100 % auf dich zugeschnitten
            </p>
          </div>

          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed academic-text">
              Präzise Hilfe statt Planlosigkeit: 1-on-1 Coachings mit echten Ärzt:innen, klarer Struktur, 
              Fokus auf Verstehen – für alle Phasen deines Medizinstudiums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="academic-card p-8 text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#0395A6]">01</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 academic-heading">
                Buchung und Themenwahl
              </h3>
              <p className="text-gray-600 leading-relaxed academic-text">
                Du sagst uns, was du brauchst – z. B. Anatomie, Physiologie, Altklausuren oder konkrete 
                Prüfungsfälle. Wir richten das Coaching genau danach aus.
              </p>
            </div>

            <div className="academic-card p-8 text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#0395A6]">02</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 academic-heading">
                Live-Coaching per Zoom
              </h3>
              <p className="text-gray-600 leading-relaxed academic-text">
                Ob 1h-Session oder 5h-Intensivtag – wir coachen dich strukturiert, verständlich und 
                prüfungsnah. Direkt, klar und ohne Zeitverlust.
              </p>
            </div>

            <div className="academic-card p-8 text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#0395A6]">03</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 academic-heading">
                PDF mit Protokoll & weiterem Material
              </h3>
              <p className="text-gray-600 leading-relaxed academic-text">
                Du bekommst alles zum Nachlesen: Zusammenfassungen, Lernpläne, Tipps – individuell auf dich 
                abgestimmt. Ideal zum Wiederholen und Vertiefen.
              </p>
            </div>

            <div className="academic-card p-8 text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#0395A6]">04</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 academic-heading">
                Du lernst fokussiert, nachhaltig - mit Plan
              </h3>
              <p className="text-gray-600 leading-relaxed academic-text">
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
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 academic-heading">
              Transparente Preise
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto academic-text">
              Klare Struktur, faire Preise, keine versteckten Kosten
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="academic-card p-16 animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="text-6xl font-bold text-[#0395A6] mb-4">39€</div>
                <p className="text-xl text-gray-600 mb-8">60 Min 1‑on‑1 · Online via Zoom</p>
                <p className="text-lg text-gray-500">inkl. Unterlagen & Nachbereitung</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6 academic-heading">Was du bekommst:</h3>
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
                  <h3 className="text-2xl font-bold text-black mb-6 academic-heading">Flexible Buchung:</h3>
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
                  className="primary-button px-12 py-5 rounded-lg text-xl font-semibold focus-ring"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="academic-section bg-[#0395A6]">
        <div className="academic-container text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 academic-heading animate-fade-in-up">
            GEMEINSAM
          </h2>
          <p className="text-2xl text-white text-opacity-90 mb-8 animate-fade-in-up">
            Dein Weg zur Prüfungssicherheit beginnt hier.
          </p>
          <p className="text-xl text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Wähle das Coaching-Format, das zu deinem Lernstil und deinem Ziel passt.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-xl font-semibold transition-all focus-ring animate-fade-in-up inline-block"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  )
}