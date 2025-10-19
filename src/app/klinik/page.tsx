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
  Stethoscope,
  Heart,
  Activity,
  Eye,
  Baby,
  Brain as BrainIcon,
  User,
  Scan
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Klinik Coaching - M2 & M3 erfolgreich bestehen | ultima-rat.io',
  description: 'Klinisches Denken entwickeln für M2 und M3. Innere Medizin, Chirurgie, Neurologie & Co. - Dein Weg zum 2. und 3. Staatsexamen.',
  keywords: 'M2, M3, Klinik, Medizinstudium, Innere Medizin, Chirurgie, Neurologie, Hammerexamen, OSCE, klinisches Denken',
}

export default function KlinikPage() {
  const subjects = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Innere Medizin",
      description: "Herz-Kreislauf, Gastroenterologie, Pneumologie, Nephrologie, Endokrinologie und Hämatologie.",
      relevance: "M2: 40% | M3: 35% | OSCE: 30%"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Chirurgie", 
      description: "Allgemein-, Viszeral-, Unfall- und Herzchirurgie. Operationsindikationen und perioperative Medizin.",
      relevance: "M2: 25% | M3: 30% | OSCE: 25%"
    },
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: "Neurologie",
      description: "ZNS-Erkrankungen, Schlaganfall, Epilepsie, Multiple Sklerose und neurodegenerative Erkrankungen.",
      relevance: "M2: 15% | M3: 20% | OSCE: 15%"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Pädiatrie",
      description: "Kinderheilkunde von der Neonatologie bis zur Adoleszenz. Entwicklungsstörungen und Impfungen.",
      relevance: "M2: 10% | M3: 15% | OSCE: 10%"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Gynäkologie",
      description: "Frauenheilkunde, Schwangerschaft, Geburtshilfe und gynäkologische Onkologie.",
      relevance: "M2: 8% | M3: 12% | OSCE: 8%"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Psychiatrie",
      description: "Psychische Erkrankungen, Psychopharmaka und psychotherapeutische Ansätze.",
      relevance: "M2: 5% | M3: 8% | OSCE: 5%"
    }
  ]

  const challenges = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Klinisches Denken",
      description: "Von der Anamnese über die körperliche Untersuchung bis zur Differentialdiagnose - komplexe Entscheidungsprozesse erlernen."
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Fallbeispiele", 
      description: "Hunderte von Krankheitsbildern mit unterschiedlichen Präsentationen und Verläufen verstehen und einordnen."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Differentialdiagnosen",
      description: "Systematisches Vorgehen bei unklaren Symptomen und die richtige Priorisierung möglicher Diagnosen."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Zeitdruck in Prüfungen",
      description: "Schnelle und präzise Antworten unter Zeitdruck - eine Fähigkeit, die gezielt trainiert werden muss."
    }
  ]

  const examPreparation = [
    {
      exam: "M2 - Hammerexamen",
      description: "Schriftliche Prüfung mit 320 Fragen in 5 Stunden. Alle klinischen Fächer mit Fokus auf praktische Anwendung.",
      duration: "6-8 Monate Vorbereitung",
      format: "Multiple Choice, 5 Stunden, 320 Fragen"
    },
    {
      exam: "M3 - Mündliche Prüfung", 
      description: "Mündlich-praktische Prüfung mit Fallvorstellungen, klinischen Untersuchungen und Fachgesprächen.",
      duration: "3-4 Monate Vorbereitung",
      format: "Mündlich, 45-60 Min, Fallvorstellung + Fachgespräch"
    },
    {
      exam: "OSCE - Objective Structured Clinical Examination",
      description: "Praktische Prüfung mit standardisierten Stationen zu Anamnese, Untersuchung und Kommunikation.",
      duration: "2-3 Monate Vorbereitung",
      format: "Praktisch, 8-12 Stationen, je 5-10 Min"
    }
  ]

  const clinicalSkills = [
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: "Körperliche Untersuchung",
      description: "Systematische Untersuchung aller Organsysteme mit korrekter Technik und Interpretation."
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Anamnese-Erhebung",
      description: "Strukturierte Gesprächsführung zur systematischen Erfassung von Symptomen und Beschwerden."
    },
    {
      icon: <Scan className="w-5 h-5" />,
      title: "Bildgebende Verfahren",
      description: "Interpretation von Röntgen, CT, MRT und Ultraschall mit Fokus auf häufige Pathologien."
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "EKG-Interpretation",
      description: "Rhythmusstörungen, Infarktzeichen und andere kardiale Pathologien im EKG erkennen."
    }
  ]

  const studyMethods = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Fallbasiertes Lernen",
      description: "Lernen anhand realer Patientenfälle fördert das klinische Denken und die Anwendung des Wissens."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Gruppenarbeit",
      description: "Diskussion von Fällen in der Gruppe schärft das diagnostische Denken und erweitert den Horizont."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Simulationstraining",
      description: "Praktische Übungen mit Simulationspatienten für realitätsnahe Prüfungsvorbereitung."
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Differentialdiagnose-Training",
      description: "Systematisches Erlernen von Entscheidungsbäumen für häufige Leitsymptome."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h1 className="modern-heading text-4xl md:text-5xl leading-tight mb-6">
              <span className="text-black">M2 & M3 meistern mit</span>
              <br />
              <span className="text-[#0395A6]">ärztlicher Expertise</span>
            </h1>
            <p className="modern-text text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Entwickle klinisches Denken für das 2. und 3. Staatsexamen. 
              Von der Anamnese bis zur Differentialdiagnose - wir bereiten dich optimal vor.
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
                Klinische Fächer
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
              Die größten <span className="text-[#0395A6]">Herausforderungen</span> in der Klinik
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Der Sprung von der Theorie zur Praxis erfordert neue Lernansätze und Denkweisen.
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

      {/* Klinische Fächer */}
      <section id="fächer" className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Deine <span className="text-[#0395A6]">klinischen Fächer</span> im Überblick
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Alle wichtigen Fachgebiete mit Prüfungsrelevanz für M2, M3 und OSCE.
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
                    <p className="text-sm font-semibold text-[#0395A6]">Prüfungsrelevanz: {subject.relevance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prüfungsvorbereitung */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Gezielte <span className="text-[#0395A6]">Prüfungsvorbereitung</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Spezifische Vorbereitung auf M2, M3 und OSCE mit bewährten Strategien.
            </p>
          </div>
          
          <div className="space-y-8">
            {examPreparation.map((exam, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0395A6] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="modern-heading text-xl">{exam.exam}</h3>
                      <span className="text-sm font-semibold text-[#0395A6] bg-[#F8FAFC] px-3 py-1 rounded-full">
                        {exam.duration}
                      </span>
                    </div>
                    <p className="modern-text text-gray-600 mb-3">{exam.description}</p>
                    <div className="bg-[#F8FAFC] rounded-lg p-3">
                      <p className="text-sm font-semibold text-[#0395A6]">Format: {exam.format}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klinische Fertigkeiten */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              <span className="text-[#0395A6]">Klinische Fertigkeiten</span> trainieren
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Praktische Fähigkeiten für OSCE, M3 und den klinischen Alltag.
            </p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {clinicalSkills.map((skill, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="modern-heading text-xl mb-3">{skill.title}</h3>
                    <p className="modern-text text-gray-600">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lernmethoden */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Bewährte <span className="text-[#0395A6]">Lernmethoden</span> für die Klinik
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Speziell entwickelt für klinisches Lernen und praktische Anwendung.
            </p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {studyMethods.map((method, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="modern-heading text-xl mb-3">{method.title}</h3>
                    <p className="modern-text text-gray-600">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Erfolgsgeschichten unserer <span className="text-[#0395A6]">Klinik-Studenten</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Über 300 Studierende haben mit uns M2 und M3 erfolgreich bestanden.
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="modern-card text-center modern-animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="modern-heading text-3xl md:text-4xl mb-6">
                Bereit für <span className="text-[#0395A6]">M2 & M3?</span>
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">
                Starte jetzt mit deiner klinischen Ausbildung. 
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
