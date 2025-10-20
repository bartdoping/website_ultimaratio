'use client'

import Image from 'next/image'
import { Brain, AlertTriangle, TrendingDown, Heart } from 'lucide-react'

export default function ProblemVisual() {
  const problems = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Prüfungsangst & Blackouts",
      description: "Trotz stundenlangem Lernen: In der Prüfung ist alles weg. Blackouts, Panikattacken und das Gefühl, versagt zu haben.",
      image: "/images/problems/problem-exam-stress.jpg",
      stats: "73% der Medizinstudenten leiden unter Prüfungsangst",
      color: "red"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Drohender Durchfall",
      description: "Die Angst vor dem Durchfall wird zur Realität. Wiederholte Fehlversuche zerstören das Selbstvertrauen und die Motivation.",
      image: "/images/problems/problem-failure.jpg", 
      stats: "40% Durchfallquote im Physikum - ohne Hilfe",
      color: "red"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Überforderung & Burnout",
      description: "Stoffmenge, Zeitdruck und Perfektionismus führen zu Erschöpfung. Das Studium wird zur Qual statt zur Leidenschaft.",
      image: "/images/problems/problem-burnout.jpg",
      stats: "85% fühlen sich überfordert im 3. Semester",
      color: "red"
    }
  ]

  return (
    <section className="modern-section bg-gradient-to-br from-red-50 to-orange-50">
      <div className="modern-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 modern-heading modern-animate-fade-in-up">
            Das Problem: <span className="text-red-600">Falsche Lernstrategien</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto modern-text modern-animate-fade-in-up">
            Warum traditionelle Lernmethoden im Medizinstudium versagen und zu Frustration führen
          </p>
        </div>

        <div className="modern-grid modern-grid-1 gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="modern-card bg-white border-l-4 border-red-500 shadow-xl modern-animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{problem.title}</h3>
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {problem.stats}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {problem.description}
                  </p>

                  {/* Emotional Impact */}
                  <div className="bg-red-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 text-red-800">
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold">Emotionale Auswirkungen:</span>
                    </div>
                    <ul className="mt-2 text-red-700 text-sm space-y-1">
                      <li>• Selbstzweifel und Versagensängste</li>
                      <li>• Schlafstörungen und Appetitlosigkeit</li>
                      <li>• Soziale Isolation und Rückzug</li>
                      <li>• Gedanken an Studienabbruch</li>
                    </ul>
                  </div>

                  {/* Mini CTA */}
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg">
                    <p className="font-bold text-center">
                      🚫 Schluss damit! Es gibt einen besseren Weg...
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={problem.image}
                    alt={`${problem.title} - Medizinstudent in schwieriger Situation`}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Typische Situation im Medizinstudium</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition CTA */}
        <div className="text-center mt-16 modern-animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              😔 Kennst du diese Gefühle?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Du bist nicht allein! Tausende von Medizinstudenten kämpfen mit denselben Problemen. 
              Aber es gibt einen bewährten Weg heraus...
            </p>
            <a
              href="#solution"
              className="bg-gradient-to-r from-[#0395A6] to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              → Die ultima-rat.io Lösung entdecken
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
