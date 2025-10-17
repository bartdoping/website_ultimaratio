import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  exam: string
  result: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    exam: "Physikum",
    result: "Bestanden mit 1,3",
    text: "Das Coaching hat mir geholfen, die Anatomie endlich zu verstehen statt nur auswendig zu lernen. Die strukturierte Herangehensweise war genau das, was ich brauchte.",
    rating: 5
  },
  {
    name: "Ahmed K.",
    exam: "Kenntnisprüfung",
    result: "Erfolgreich bestanden",
    text: "Als ausländischer Arzt war die Kenntnisprüfung eine große Herausforderung. Das Coaching hat mir geholfen, die deutschen Standards zu verstehen und sicher zu bestehen.",
    rating: 5
  },
  {
    name: "Michael R.",
    exam: "M2",
    result: "Bestanden mit 1,7",
    text: "Die Prüfungssimulationen waren Gold wert. Ich fühlte mich in der echten Prüfung viel sicherer und konnte strukturiert vorgehen.",
    rating: 5
  },
  {
    name: "Lisa T.",
    exam: "Physiologie",
    result: "Note verbessert von 4,0 auf 1,7",
    text: "Endlich verstehe ich die Zusammenhänge! Das Coaching hat mir geholfen, die Physiologie nicht nur zu lernen, sondern wirklich zu begreifen.",
    rating: 5
  },
  {
    name: "Maria S.",
    exam: "M3",
    result: "Bestanden mit 1,5",
    text: "Die strukturierte Vorbereitung auf das M3 war perfekt. Ich wusste genau, was auf mich zukommt und konnte gezielt lernen.",
    rating: 5
  },
  {
    name: "Tom W.",
    exam: "Biochemie",
    result: "Bestanden mit 2,0",
    text: "Biochemie war immer mein Problemfach. Das Coaching hat mir geholfen, die Stoffwechselwege zu verstehen statt nur zu memorieren.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="modern-section bg-[#F8FAFC]">
      <div className="modern-container">
        <div className="text-center modern-spacing">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
            Was unsere Studierenden sagen
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
            Echte Erfolgsgeschichten von echten Studierenden
          </p>
        </div>

        <div className="modern-grid modern-grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 modern-text">
                {testimonial.text}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.exam}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#0395A6]">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="modern-card p-12 max-w-4xl mx-auto modern-animate-fade-in-up">
            <h3 className="text-xl font-bold text-black mb-6 modern-heading">
              Werde Teil unserer Erfolgsgeschichten
            </h3>
            <p className="text-lg text-gray-600 mb-8 modern-text">
              Über 500 erfolgreiche Prüfungen und eine 95%ige Erfolgsquote sprechen für sich.
            </p>
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button px-12 py-5 rounded-lg text-lg font-semibold modern-focus inline-block"
            >
              Jetzt starten
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
