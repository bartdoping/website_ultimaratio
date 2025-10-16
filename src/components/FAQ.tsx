'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Wie funktioniert das Coaching genau?",
    answer: "Unser Coaching läuft über Zoom mit Screen-Sharing und Whiteboard. Sie buchen flexibel über WhatsApp, wir führen eine 60-minütige 1:1-Session durch und senden Ihnen anschließend ein detailliertes Protokoll mit Lernplan und Materialien. Bezahlung erfolgt erst nach der Session."
  },
  {
    question: "Welche Fächer werden angeboten?",
    answer: "Wir bieten Coaching für alle medizinischen Fächer: Anatomie, Physiologie, Physik, Chemie, Biochemie, M2, M3 und speziell für die Kenntnisprüfung. Unsere Coaches sind approbierte Ärzt:innen mit aktueller Klinikroutine."
  },
  {
    question: "Wie viel kostet eine Session?",
    answer: "Eine 60-minütige Einzelsession kostet 39€. Wir bieten auch Crashkurse (5h für 180€) und regelmäßige Betreuung (4x 60 Min für 140€). Alle Preise sind transparent und ohne versteckte Kosten."
  },
  {
    question: "Kann ich auch kurzfristig buchen?",
    answer: "Ja, wir bieten flexible Terminvergabe über WhatsApp. Bei kurzfristigen Anfragen versuchen wir, innerhalb von 24-48 Stunden einen Termin zu finden. Für Prüfungsvorbereitung empfehlen wir jedoch eine rechtzeitige Planung."
  },
  {
    question: "Was ist der Unterschied zu anderen Nachhilfe-Anbietern?",
    answer: "Unsere Coaches sind approbierte Ärzt:innen mit aktueller Klinikroutine. Wir fokussieren auf Verstehen statt Auswendiglernen, nutzen wissenschaftlich fundierte Lernmethoden und bieten strukturierte, prüfungsnahe Vorbereitung mit individuellen Lernplänen."
  },
  {
    question: "Wie läuft die Prüfungsvorbereitung ab?",
    answer: "Wir analysieren Ihre Stärken und Schwächen, erstellen einen individuellen Lernplan und trainieren Sie mit prüfungsnahen Fragen. Regelmäßige Sessions mit direktem Feedback und Anpassung der Strategie bis zur Prüfung."
  },
  {
    question: "Gibt es eine Erfolgsgarantie?",
    answer: "Wir können keine 100%ige Erfolgsgarantie geben, da Prüfungsergebnisse von vielen Faktoren abhängen. Aber wir haben eine 95%ige Erfolgsquote und bieten bei Bedarf kostenlose Nachbesprechungen an."
  },
  {
    question: "Kann ich das Coaching auch für die Kenntnisprüfung nutzen?",
    answer: "Ja, wir haben spezielle Programme für internationale Ärzt:innen zur Vorbereitung auf die Kenntnisprüfung. Unsere Coaches kennen die spezifischen Anforderungen und helfen bei der strukturierten Vorbereitung."
  },
  {
    question: "Wie buche ich einen Termin?",
    answer: "Einfach über WhatsApp unter +49 163 9347633 schreiben. Nennen Sie Ihr Fach, den gewünschten Termin und Ihre spezifischen Lernziele. Wir melden uns schnellstmöglich mit einem konkreten Vorschlag."
  },
  {
    question: "Was passiert, wenn ich nicht zufrieden bin?",
    answer: "Ihre Zufriedenheit ist unser oberstes Ziel. Bei Unzufriedenheit bieten wir kostenlose Nachbesprechungen oder eine teilweise Rückerstattung. Wir stehen hinter unserem Service und passen uns an Ihre Bedürfnisse an."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="academic-section bg-white">
      <div className="academic-container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 premium-heading">
            Häufig gestellte Fragen
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto premium-text">
            Alle wichtigen Informationen auf einen Blick
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <span className="text-xl font-semibold text-black">{item.question}</span>
                <ChevronDown 
                  className={`faq-icon w-6 h-6 text-[#0395A6] ${
                    openItems.includes(index) ? 'rotated' : ''
                  }`}
                />
              </div>
              <div className={`faq-answer ${openItems.includes(index) ? 'open' : ''}`}>
                <p className="text-lg text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            Haben Sie weitere Fragen? Wir helfen gerne weiter!
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button px-12 py-5 rounded-lg text-xl font-semibold focus-ring inline-block"
          >
            Jetzt kontaktieren
          </a>
        </div>
      </div>
    </section>
  )
}
