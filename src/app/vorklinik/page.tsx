import { Metadata } from 'next'
import { 
  BookOpen, 
  Brain, 
  Target, 
  Users, 
  CheckCircle, 
  Clock, 
  Zap,
  Lightbulb,
  BookMarked,
  Microscope,
  Heart,
  Activity
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Vorklinik Coaching - Physikum erfolgreich bestehen | ultima-rat.io',
  description: 'Strukturierte Vorbereitung auf das Physikum mit bewährten Lernmethoden. Anatomie, Biochemie, Physiologie & Co. - Dein Weg zum 1. Staatsexamen.',
  keywords: 'Physikum, Vorklinik, Medizinstudium, Anatomie, Biochemie, Physiologie, 1. Staatsexamen, Lernstrategien',
}

export default function VorklinikPage() {
  const subjects = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Anatomie",
      description: "Strukturiertes Lernen der menschlichen Anatomie mit Fokus auf klinisch relevante Strukturen und Zusammenhänge.",
      focus: "Präpkurse, Atlasarbeit, klinische Bezüge"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Physiologie", 
      description: "Verständnis der Körperfunktionen und deren Regulation. Von Zellbiologie bis Organsysteme.",
      focus: "Mechanismen verstehen, nicht auswendig lernen"
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Biochemie",
      description: "Molekulare Grundlagen des Lebens. Stoffwechselwege, Enzymkinetik und molekulare Medizin.",
      focus: "Stoffwechselwege visualisieren, Zusammenhänge erkennen"
    },
    {
      icon: <BookMarked className="w-6 h-6" />,
      title: "Histologie",
      description: "Mikroskopische Anatomie und Gewebelehre. Struktur-Funktions-Beziehungen verstehen.",
      focus: "Mikroskopieren, Gewebetypen unterscheiden"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Physik",
      description: "Physikalische Grundlagen in der Medizin. Biomechanik, Elektrophysiologie und medizinische Technik.",
      focus: "Klinische Anwendungen, praktische Beispiele"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Psychologie/Soziologie",
      description: "Menschliches Verhalten und soziale Faktoren in der Medizin. Kommunikation und Patientengespräche.",
      focus: "Praktische Anwendung, Fallbeispiele"
    }
  ]

  const challenges = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Enorme Stoffmenge",
      description: "Die Vorklinik umfasst 6 Hauptfächer mit jeweils tausenden von Fakten, die in kurzer Zeit gelernt werden müssen."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Verständnisprobleme", 
      description: "Komplexe Zusammenhänge zwischen Anatomie, Physiologie und Biochemie erschweren das Lernen."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Prüfungsangst",
      description: "Das Physikum als erstes großes Examen erzeugt enormen Druck und Lernstress."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Zeitmanagement",
      description: "Effiziente Lernstrategien fehlen, wodurch wertvolle Zeit mit ineffektiven Methoden verschwendet wird."
    }
  ]

  const strategies = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Aktives Abrufen (Retrieval Practice)",
      description: "Statt passives Wiederlesen: Regelmäßiges Abfragen des Gelernten stärkt das Langzeitgedächtnis nachweislich."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Spaced Repetition",
      description: "Geplante Wiederholungen in optimalen Intervallen maximieren die Behaltensleistung und reduzieren Vergessen."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Interleaving",
      description: "Systematisches Mischen verschiedener Themen verbessert die Transferleistung und Problemlösefähigkeit."
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Elaboration",
      description: "Tiefes Durchdenken und Verknüpfen neuer Informationen mit bereits bekanntem Wissen fördert das Verständnis."
    }
  ]

  const examPrep = [
    {
      phase: "Grundlagen (1. - 3. Semester)",
      description: "Systematischer Aufbau der Grundlagen in allen Fächern mit Fokus auf Verständnis statt Auswendiglernen.",
      duration: "6 Monate"
    },
    {
      phase: "Vertiefung (4. - 5. Semester)", 
      description: "Intensive Vertiefung und Verknüpfung der Fächer untereinander. Klinische Bezüge herstellen.",
      duration: "4 Monate"
    },
    {
      phase: "Physikum-Vorbereitung (6. Semester)",
      description: "Gezielte Prüfungsvorbereitung mit Altklausuren, mündlich-praktischer Vorbereitung und Zeitmanagement.",
      duration: "3 Monate"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold modern-heading leading-tight mb-6">
              <span className="text-black">Physikum-Erfolg durch</span>
              <br />
              <span className="text-[#0395A6]">strukturiertes Lernen</span>
            </h1>
            <p className="modern-text text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Meistere die Vorklinik mit bewährten Lernmethoden. Von Anatomie bis Biochemie - 
              wir bereiten dich optimal auf das 1. Staatsexamen vor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <Users className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                Kostenloses Erstgespräch
              </a>
              <a
                href="#fächer"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                Fächer entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Herausforderungen */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Die größten <span className="text-[#0395A6]">Herausforderungen</span> in der Vorklinik
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Wir kennen die typischen Probleme und haben bewährte Lösungen entwickelt.
            </p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center">
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="modern-heading text-xl mb-3">{challenge.title}</h3>
                    <p className="modern-text text-gray-600">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fächer-Übersicht */}
      <section id="fächer" className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Deine <span className="text-[#0395A6]">Vorklinik-Fächer</span> im Überblick
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Strukturiertes Lernen in allen 6 Hauptfächern mit klinischen Bezügen.
            </p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {subject.icon}
                  </div>
                  <h3 className="modern-heading text-2xl mb-3">{subject.title}</h3>
                  <p className="modern-text text-gray-600 mb-4">{subject.description}</p>
                  <div className="bg-[#F8FAFC] rounded-lg p-4">
                    <p className="text-sm font-semibold text-[#0395A6]">Fokus: {subject.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lernstrategien */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Wissenschaftlich bewährte <span className="text-[#0395A6]">Lernstrategien</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Basierend auf aktueller Kognitionsforschung für maximale Lerneffizienz.
            </p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center">
                    {strategy.icon}
                  </div>
                  <div>
                    <h3 className="modern-heading text-xl mb-3">{strategy.title}</h3>
                    <p className="modern-text text-gray-600">{strategy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physikum-Vorbereitung */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Strukturierte <span className="text-[#0395A6]">Physikum-Vorbereitung</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Von den Grundlagen bis zur Prüfung - dein Weg zum 1. Staatsexamen.
            </p>
          </div>
          
          <div className="space-y-8">
            {examPrep.map((phase, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0395A6] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="modern-heading text-xl">{phase.phase}</h3>
                      <span className="text-sm font-semibold text-[#0395A6] bg-[#F8FAFC] px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="modern-text text-gray-600">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Erfolgsgeschichten unserer <span className="text-[#0395A6]">Vorklinik-Studenten</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Über 500 Studierende haben mit uns das Physikum erfolgreich bestanden.
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="modern-card text-center modern-animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="modern-heading text-3xl md:text-4xl mb-6">
                Bereit für dein <span className="text-[#0395A6]">Physikum?</span>
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">
                Starte jetzt mit deiner strukturierten Vorklinik-Vorbereitung. 
                Kostenloses Erstgespräch über WhatsApp - bezahlen erst im Anschluss!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <Users className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                  Jetzt starten
                </a>
                <a
                  href="/coaching"
                  className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                  Coaching-Übersicht
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
