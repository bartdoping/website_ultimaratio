'use client'

import { useState, useEffect, useRef } from 'react'
import { TrendingUp, Users, Award, Target } from 'lucide-react'

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    success: 0,
    students: 0,
    years: 0,
    improvement: 0
  })
  
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = {
      success: 97,
      students: 500,
      years: 6,
      improvement: 2.3
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        success: Math.floor(targets.success * progress),
        students: Math.floor(targets.students * progress),
        years: Math.floor(targets.years * progress),
        improvement: Math.floor(targets.improvement * progress * 10) / 10
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: `${counts.success}%`,
      label: "Erfolgsquote",
      description: "Bewiesen durch 500+ Prüfungen",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-800"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: `${counts.students}+`,
      label: "Erfolgreiche Prüfungen",
      description: "Von Vorklinik bis M3",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: `${counts.years}+`,
      label: "Jahre Erfahrung",
      description: "Approbierte Ärzte als Coaches",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: `+${counts.improvement}`,
      label: "Notenverbesserung",
      description: "Durchschnittliche Steigerung",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-800"
    }
  ]

  return (
    <section ref={sectionRef} className="modern-section bg-[#F8FAFC] text-black">
      <div className="modern-container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 modern-heading modern-animate-fade-in-up">
            <span className="text-black">Bewiesene</span> <span className="text-[#0395A6]">Erfolge</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
            Zahlen, die für sich sprechen. Über 6 Jahre Erfahrung, 500+ erfolgreiche Prüfungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="modern-card bg-white border border-gray-200 text-center modern-animate-fade-in-up">
              <div className="p-10">
                <div className="w-20 h-20 bg-[#0395A6] rounded-full flex items-center justify-center text-white mx-auto mb-8">
                  {stat.icon}
                </div>
                
                <div className="text-6xl md:text-7xl font-bold text-[#0395A6] mb-6">
                  {stat.number}
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 text-lg">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div className="mt-20 modern-animate-fade-in-up">
          <div className="bg-white rounded-2xl p-10 border border-gray-200">
            <h3 className="text-3xl font-bold text-center text-black mb-12">
              Vorher vs. Nachher - Typische Entwicklung
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="text-center">
                <div className="bg-red-500/20 rounded-lg p-8 border border-red-500/30">
                  <h4 className="text-2xl font-bold text-red-600 mb-6">Vor ultima-rat.io</h4>
                  <ul className="text-red-700 space-y-3 text-left text-lg">
                    <li>• Durchschnittsnote: 3,7</li>
                    <li>• Lernzeit: 8h/Tag</li>
                    <li>• Prüfungsangst: Hoch</li>
                    <li>• Selbstvertrauen: Niedrig</li>
                    <li>• Durchfallrisiko: 40%</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 rounded-lg p-8 border border-green-500/30">
                  <h4 className="text-2xl font-bold text-green-600 mb-6">Nach ultima-rat.io</h4>
                  <ul className="text-green-700 space-y-3 text-left text-lg">
                    <li>• Durchschnittsnote: 1,4</li>
                    <li>• Lernzeit: 4h/Tag</li>
                    <li>• Prüfungsangst: Minimal</li>
                    <li>• Selbstvertrauen: Hoch</li>
                    <li>• Erfolgsquote: 97%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-[#0395A6] text-white px-10 py-6 rounded-lg text-xl font-bold inline-block">
                Durchschnittliche Verbesserung: +2,3 Notenpunkte
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 modern-animate-fade-in-up">
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0395A6] hover:bg-[#028A9A] text-white px-16 py-8 rounded-lg text-2xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl inline-flex items-center space-x-4"
          >
            <Users className="w-8 h-8" />
            <span>Werde Teil unserer Erfolgsgeschichte</span>
          </a>
        </div>
      </div>
    </section>
  )
}
