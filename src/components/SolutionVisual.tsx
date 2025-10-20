'use client'

import Image from 'next/image'
import { CheckCircle, Users, Award, TrendingUp, Brain, Zap } from 'lucide-react'

export default function SolutionVisual() {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Wissenschaftlich bewährte Lernmethoden",
      description: "Retrieval Practice, Spaced Repetition und Interleaving - Methoden, die in der Kognitionsforschung nachweislich funktionieren.",
      image: "/images/process/erfolg1.jpg",
      benefits: [
        "3x bessere Behaltensleistung",
        "50% weniger Lernzeit",
        "Keine Blackouts mehr"
      ],
      color: "blue",
      successText: "✓ Erste Verbesserungen bereits nach 2 Wochen sichtbar!"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Erfahrene Ärzte als persönliche Coaches",
      description: "Approbierte Ärzte und Top-Studenten, die selbst mit Bestnoten durch alle Examina gegangen sind, begleiten dich.",
      image: "/images/process/erfolg2.jpg",
      benefits: [
        "1:1 Betreuung",
        "Persönliche Lernstrategien",
        "Motivation & Mentoring"
      ],
      color: "green",
      successText: "✓ Individuelle Betreuung für maximalen Erfolg!"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Nachweisbare Erfolge",
      description: "97% unserer Studenten bestehen ihre Prüfungen. Strukturierte Vorbereitung von der Vorklinik bis zum M3.",
      image: "/images/process/erfolg3.jpg",
      benefits: [
        "97% Erfolgsquote",
        "500+ bestandene Prüfungen",
        "Durchschnittlich 2 Noten besser"
      ],
      color: "purple",
      successText: "✓ Garantierte Verbesserung oder Geld zurück!"
    }
  ]

  return (
    <section id="solution" className="modern-section bg-[#F8FAFC]">
      <div className="modern-container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 modern-heading modern-animate-fade-in-up">
            Die <span className="text-[#0395A6]">ultima-rat.io</span> Lösung
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto modern-text modern-animate-fade-in-up">
            Wissenschaftlich fundierte Methoden + persönliche Betreuung = garantierten Prüfungserfolg
          </p>
        </div>

        <div className="modern-grid modern-grid-1 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="modern-card bg-white border-l-4 border-[#0395A6] shadow-xl modern-animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-[#0395A6] rounded-full flex items-center justify-center text-white">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{solution.title}</h3>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-semibold">
                        Wissenschaftlich bewiesen
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 text-green-800 mb-3">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Deine Vorteile:</span>
                    </div>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-green-700">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Success Indicator */}
                  <div className="bg-[#0395A6] text-white p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-bold">{solution.successText}</span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={`${solution.title} - Erfolgreiche Medizinstudenten`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-16 modern-animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#0395A6]">
            <h3 className="text-2xl font-bold text-center text-black mb-8">
              So funktioniert unser bewährtes System
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0395A6] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Kostenloses Erstgespräch</h4>
                <p className="text-gray-600">Wir analysieren deine Situation und erstellen einen individuellen Plan</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0395A6] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Strukturiertes Training</h4>
                <p className="text-gray-600">Wissenschaftliche Methoden + persönliche Betreuung = schnelle Fortschritte</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0395A6] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Prüfungserfolg</h4>
                <p className="text-gray-600">Mit Selbstvertrauen und der richtigen Vorbereitung zur bestandenen Prüfung</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0395A6] hover:bg-[#028A9A] text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>JETZT KOSTENLOS STARTEN</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
