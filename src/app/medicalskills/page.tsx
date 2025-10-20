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
  Activity,
  Eye,
  Scan,
  TestTube,
  Droplets,
  BookMarked
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Medical Skills Training - EKG, Röntgen, Labor & Co. | ultima-rat.io',
  description: 'Klinische Fertigkeiten für OSCE, M2 & M3. EKG-Interpretation, Röntgen-Thorax, Laborwerte, BGA und Untersuchungstechniken.',
  keywords: 'Medical Skills, EKG, Röntgen, Laborwerte, BGA, OSCE, M2, M3, klinische Fertigkeiten, Untersuchungstechniken',
}

export default function MedicalSkillsPage() {
  const skills = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "EKG-Interpretation",
      description: "Rhythmusstörungen, Infarktzeichen, Hypertrophie und andere kardiale Pathologien systematisch erkennen.",
      examRelevance: "OSCE: 20% | M2: 15% | M3: 25%",
      keyPoints: ["Rhythmusanalyse", "Infarktzeichen", "Hypertrophie", "Leitungsstörungen"]
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Röntgen-Thorax",
      description: "Pneumonie, Pneumothorax, Herzinsuffizienz und andere thorakale Pathologien im Röntgenbild identifizieren.",
      examRelevance: "OSCE: 25% | M2: 20% | M3: 30%",
      keyPoints: ["Lungenfelder", "Herzgröße", "Pleuraerguss", "Pneumothorax"]
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Laborwerte",
      description: "Blutbild, Entzündungsparameter, Nieren- und Leberwerte interpretieren und klinische Konsequenzen ableiten.",
      examRelevance: "OSCE: 15% | M2: 25% | M3: 20%",
      keyPoints: ["Blutbild", "Entzündung", "Nierenwerte", "Leberwerte"]
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Blutgasanalyse (BGA)",
      description: "Säure-Basen-Haushalt, Oxygenierung und Ventilation beurteilen. Metabolische vs. respiratorische Störungen.",
      examRelevance: "OSCE: 10% | M2: 10% | M3: 15%",
      keyPoints: ["pH-Wert", "pCO2", "HCO3", "Säure-Basen-Störungen"]
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Ultraschall",
      description: "Abdomensonographie, Echokardiographie und andere sonographische Untersuchungen verstehen und interpretieren.",
      examRelevance: "OSCE: 10% | M2: 10% | M3: 15%",
      keyPoints: ["Abdomensonographie", "Echokardiographie", "Doppler", "Pathologien"]
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Körperliche Untersuchung",
      description: "Systematische Untersuchung aller Organsysteme mit korrekter Technik und klinischer Interpretation.",
      examRelevance: "OSCE: 30% | M2: 20% | M3: 35%",
      keyPoints: ["Inspektion", "Palpation", "Perkussion", "Auskultation"]
    }
  ]

  const challenges = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Bildinterpretation",
      description: "EKG, Röntgen und Ultraschall-Bilder systematisch analysieren und Pathologien sicher erkennen."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Klinische Korrelation", 
      description: "Befunde mit der Klinik verknüpfen und differentialdiagnostische Überlegungen anstellen."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Zeitdruck in Prüfungen",
      description: "Schnelle und präzise Befundung unter Zeitdruck - eine Fähigkeit, die gezielt trainiert werden muss."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Systematisches Vorgehen",
      description: "Strukturierte Herangehensweise an komplexe Befunde ohne wichtige Details zu übersehen."
    }
  ]

  const trainingMethods = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Fallbasiertes Training",
      description: "Lernen anhand realer Patientenfälle mit verschiedenen Pathologien und Schwierigkeitsgraden."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Gruppenübungen",
      description: "Gemeinsame Befundung und Diskussion fördert das Verständnis und die Sicherheit."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Simulationstraining",
      description: "Praktische Übungen mit Simulationspatienten und realitätsnahen Prüfungssituationen."
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Systematische Befundung",
      description: "Strukturierte Herangehensweise an jeden Befund für maximale Sicherheit und Vollständigkeit."
    }
  ]

  const examPreparation = [
    {
      exam: "OSCE - Objective Structured Clinical Examination",
      description: "Praktische Prüfung mit standardisierten Stationen zu allen wichtigen Medical Skills.",
      skills: ["EKG", "Röntgen", "Labor", "Untersuchung", "Kommunikation"],
      duration: "2-3 Monate Training"
    },
    {
      exam: "M2 - Hammerexamen", 
      description: "Schriftliche Prüfung mit Bildern und Fallbeschreibungen zu allen klinischen Fertigkeiten.",
      skills: ["Bildinterpretation", "Laborwerte", "Klinische Korrelation"],
      duration: "4-6 Monate Training"
    },
    {
      exam: "M3 - Mündliche Prüfung",
      description: "Mündliche Präsentation von Befunden und klinischer Interpretation vor dem Prüfungsausschuss.",
      skills: ["Befundpräsentation", "Differentialdiagnose", "Therapieplanung"],
      duration: "3-4 Monate Training"
    }
  ]

  const blackBookMention = {
    title: "Unser Black Book - EKG & Röntgen",
    description: "Über 100 EKG- und Röntgen-Thorax-Bilder mit detaillierten Erläuterungen aller klinisch und prüfungsrelevanten Pathologien.",
    features: [
      "100+ EKG-Bilder mit Interpretation",
      "100+ Röntgen-Thorax-Bilder mit Befundung", 
      "Systematische Aufbereitung nach Pathologien",
      "Prüfungsrelevante Fälle markiert",
      "Kostenloser Download verfügbar"
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold modern-heading leading-tight mb-6">
              <span className="text-black">Klinische Fertigkeiten für</span>
              <br />
              <span className="text-[#0395A6]">OSCE, M2 & M3</span>
            </h1>
            <p className="modern-text text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              EKG, Röntgen, Laborwerte, BGA und mehr. Alle wichtigen Medical Skills 
              systematisch trainieren für maximale Prüfungssicherheit.
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
                href="#skills"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <Stethoscope className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                Skills entdecken
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
              Die größten <span className="text-[#0395A6]">Herausforderungen</span> bei Medical Skills
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Klinische Fertigkeiten erfordern praktische Übung und systematisches Vorgehen.
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

      {/* Medical Skills */}
      <section id="skills" className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Alle wichtigen <span className="text-[#0395A6]">Medical Skills</span> im Überblick
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Systematisches Training aller klinischen Fertigkeiten mit Prüfungsrelevanz.
            </p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="modern-heading text-2xl mb-3">{skill.title}</h3>
                  <p className="modern-text text-gray-600 mb-4">{skill.description}</p>
                  <div className="bg-[#F8FAFC] rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-[#0395A6] mb-2">Prüfungsrelevanz: {skill.examRelevance}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.keyPoints.map((point, pointIndex) => (
                        <span key={pointIndex} className="text-xs bg-white px-2 py-1 rounded-full text-[#0395A6]">
                          {point}
                        </span>
                      ))}
                    </div>
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
              Spezifische Vorbereitung auf OSCE, M2 und M3 mit praktischen Übungen.
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
                    <p className="modern-text text-gray-600 mb-4">{exam.description}</p>
                    <div className="bg-[#F8FAFC] rounded-lg p-4">
                      <p className="text-sm font-semibold text-[#0395A6] mb-2">Trainierte Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {exam.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-white px-2 py-1 rounded-full text-[#0395A6]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training-Methoden */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Bewährte <span className="text-[#0395A6]">Training-Methoden</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Praktische Übungen und realitätsnahe Simulationen für maximale Prüfungssicherheit.
            </p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {trainingMethods.map((method, index) => (
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

      {/* Black Book Erwähnung */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="modern-card text-center modern-animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <BookMarked className="w-8 h-8" />
              </div>
              <h2 className="modern-heading text-3xl md:text-4xl mb-6">
                {blackBookMention.title}
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">
                {blackBookMention.description}
              </p>
              <div className="modern-grid modern-grid-2 gap-4 mb-8">
                {blackBookMention.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="/downloads/black-book-ekg-roentgen.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <BookMarked className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                Kostenlos herunterladen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Erfolgsgeschichten unserer <span className="text-[#0395A6]">Medical Skills-Teilnehmer</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Über 200 Studierende haben mit uns ihre klinischen Fertigkeiten perfektioniert.
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
                Bereit für deine <span className="text-[#0395A6]">Medical Skills?</span>
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">
                Starte jetzt mit dem Training deiner klinischen Fertigkeiten. 
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
                  <Stethoscope className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
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
