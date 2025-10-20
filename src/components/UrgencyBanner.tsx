'use client'

import { useState, useEffect } from 'react'
import { Clock, Users, AlertCircle, Zap } from 'lucide-react'

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [spotsLeft] = useState(3)

  useEffect(() => {
    // Set end date (30 days from now)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="modern-section bg-gradient-to-r from-red-500 to-orange-500 text-white">
      <div className="modern-container">
        <div className="modern-card bg-white/10 backdrop-blur-sm border border-white/20 text-center modern-animate-fade-in-up">
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <AlertCircle className="w-6 h-6 text-yellow-300" />
              <h2 className="text-2xl md:text-3xl font-bold">
                ⚡ BEGRENZTES ANGEBOT
              </h2>
              <AlertCircle className="w-6 h-6 text-yellow-300" />
            </div>

            {/* Spots Left */}
            <div className="bg-red-600/30 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="w-5 h-5" />
                <span className="text-lg font-bold">Nur noch {spotsLeft} Plätze frei!</span>
              </div>
              <div className="w-full bg-red-200 rounded-full h-3">
                <div 
                  className="bg-yellow-400 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${((10 - spotsLeft) / 10) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-red-100 mt-2">
                {10 - spotsLeft} von 10 Plätzen bereits vergeben
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-6">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">Tage</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Stunden</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minuten</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Sekunden</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <Clock className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                <h3 className="font-bold mb-1">Kostenloses Erstgespräch</h3>
                <p className="text-sm">Wert: 150€ - Jetzt GRATIS</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                <h3 className="font-bold mb-1">Sofortiger Start</h3>
                <p className="text-sm">Erste Sitzung noch diese Woche</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Users className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                <h3 className="font-bold mb-1">Persönlicher Coach</h3>
                <p className="text-sm">1:1 Betreuung garantiert</p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center space-x-3"
              >
                <Zap className="w-6 h-6" />
                <span>JETZT PLATZ SICHERN</span>
              </a>
              
              <p className="text-sm text-yellow-100">
                ⚠️ Nach Ablauf des Angebots: Regulärer Preis 150€ für Erstgespräch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
