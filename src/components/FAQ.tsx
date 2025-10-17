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
    answer: "Unser Coaching läuft über Zoom mit Screen-Sharing und Whiteboard. Wir vereinbaren ganz einfach und flexibel über WhatsApp einen Termin buchen flexibel über WhatsApp einen Termin und senden dir den entsprechenden Zoom-Link zeitnah zu. Im Anschluss an das Coaching erhälst du bei Bedarf die Notizen als PDF und ggf. weitere Materialien. Bezahlung erfolgt erst nach der Session online über Stripe."
  },
  {
    question: "Welche Fächer werden angeboten?",
    answer: "Wir bieten Coaching für alle medizinischen Fächer und Staatsexamina an sowie auch für die Kenntnisprüfung. Unsere Coaches sind approbierte Ärzt:innen und qualifizierte Tutor:innen."
  },
  {
    question: "Wie viel kostet eine Session?",
    answer: "Eine 60-minütige Einzelsession kostet 39€. Wir bieten auch Crashkurse (beliebig viele Stunden) an, welche individuell auf den Studenten angepasst werden; schreib uns gerne hierzu einfach an, damit wir dir ein Angebot erstellen können. Alle Preise sind transparent und ohne versteckte Kosten."
  },
  {
    question: "Kann ich auch kurzfristig buchen?",
    answer: "Ja, wir bieten flexible Terminvergabe über WhatsApp. Bei kurzfristigen Anfragen versuchen wir, innerhalb von 24-48 Stunden einen Termin zu finden. Für Prüfungsvorbereitung empfehlen wir jedoch eine rechtzeitige Planung."
  },
  {
    question: "Was ist der Unterschied zu anderen Nachhilfe-Anbietern?",
    answer: "Unser Team besteht aus approbierten Ärzt:innen, die das Studium mit Bestnoten absolviert haben und schon während des Studiums anderen Studenten bei multiplen Prüfungen geholfen haben. Teilweise waren unsere Coaches während des Studiums auch als Tutor:innen tätig. Gleichzeitig bringen insbesondere unsere Gründer klinische Erfahrungen in ultima-rat.io ein, was insbesondere bei mündlichen Prüfungen oder der Vorbereitung auf die Kenntnisprüfung signifikante Vorteile bietet. Wir fokussieren auf Verstehen statt Auswendiglernen, nutzen wissenschaftlich fundierte Lernmethoden und bieten strukturierte, prüfungsnahe Vorbereitung mit individuellen Lernplänen."
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
    answer: "Einfach über WhatsApp unter +49 163 9347633 schreiben. Nenne uns dein Anliegen bzw. die anstehende Prüfung, den gewünschten Termin und deine spezifischen Lernziele. Wir melden uns schnellstmöglich mit einem konkreten Vorschlag. Meistens vereinbaren wir zunächst ein kostenloses Erstgespräch, um deine Bedürfnisse und Ziele genauer zu verstehen."
  },
  {
    question: "Was passiert, wenn ich nicht zufrieden bin?",
    answer: "Deine Zufriedenheit ist unser oberstes Ziel. Bei Unzufriedenheit bieten wir kostenlose Nachbesprechungen oder eine (teilweise) Rückerstattung. Wir stehen hinter unserem Service und passen uns an deine Bedürfnisse an."
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
    <section className="modern-section bg-white">
      <div className="modern-container">
        <div className="text-center modern-spacing">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
            Alle wichtigen Informationen auf einen Blick
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="modern-faq">
              <div 
                className="modern-faq-question"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-semibold text-black">{item.question}</span>
                <ChevronDown 
                  className={`faq-icon w-6 h-6 text-[#0395A6] ${
                    openItems.includes(index) ? 'rotated' : ''
                  }`}
                />
              </div>
              <div className={`modern-faq-answer ${openItems.includes(index) ? 'open' : ''}`}>
                <p className="text-lg text-gray-700 leading-relaxed modern-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8 modern-text">
            Hast du weitere Fragen? Wir helfen gerne weiter!
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button px-12 py-5 rounded-lg text-lg font-semibold modern-focus inline-block"
          >
            Jetzt kontaktieren
          </a>
        </div>
      </div>
    </section>
  )
}
