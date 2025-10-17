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
    name: "Marcel M.",
    exam: "M2",
    result: "Bestanden mit 2",
    text: "Mehr gelernt in 1 Stunde als in einer ganzen Woche alleine. Ich war total überfordert mit der prüfungsvorbereitung fürs M2 (vor allem weil ich letztendlich komplett falsch rangegangen bin und ein „dummes“ Lernsystem hatte). Das Einzelcoaching war auf den Punkt, super strukturiert, mega empathisch und wirklich hilfreich. Besonders die PDF mit den Strategien danach war gold wert (wusste gar nicht dass man eine bekommt 😅). Würde ich jederzeit wieder buchen! Auch der Preis echt fair",
    rating: 5
  },
  {
    name: "Bushra B.",
    exam: "60 Minuten Coaching",
    result: "Bestanden",
    text: "Hatte das 1-Stunden Coaching – echt top! Alles super und verständlich erklärt, sodass ich endlich einen roten Faden bei dem Thema habe. Hat mir richtig geholfen, den Überblick zu bekommen und Sicherheit zu gewinnen. Kann ich absolut weiterempfehlen!",
    rating: 5
  },
  {
    name: "Victoria G.",
    exam: "5 Std. Crashkurs",
    result: "Bestanden",
    text: "Ich hab den 5h-Crashkurs gemacht und bin echt zufrieden! Ich muss sagen: Es hat sich total gelohnt! In nur fünf Stunden wurde mir alles verständlich erklärt, und der Inhalt wurde super hilfreich vermittelt. Was mir besonders gefallen hat: Ich habe endlich eine Lernstrategie gefunden, die zu mir passt - mit Anki-Karten, sinnvoller Nachbereitung und praxisnahem Falltraining. Perfekt für alle, die schnell und effektiv lernen wollen!",
    rating: 5
  },
  {
    name: "Marten K.",
    exam: "Physikum",
    result: "Bestanden",
    text: "Super Erfahrung gemacht, konnte für das Physikum viel aus dem Coaching mitnehmen und werde definitiv fürs Examen wiederkommen.",
    rating: 5
  },
  {
    name: "Angelina P.",
    exam: "Anatomie und Physiologie",
    result: "Bestanden",
    text: "Zu Beginn meines Studiums hatte ich große Schwierigkeiten, die für mich passende Lerntechnik zu finden und die relevanten Lerninhalte richtig zu filtern. Ich war dann in einem Dritt- und zwei Zweitversuchen, die ich ohne Hilfe nicht geschafft hätte. Mit ärztlicher 'Nachhilfe' konnte ich die Wiederholungsklausuren erfolgreich bestehen und sozusagen wieder bei null starten! :)",
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

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 mx-4">
                <div className="modern-testimonial h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 modern-text flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <div className="flex justify-between items-end">
                      <div className="flex-1">
                        <p className="font-semibold text-black text-base">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.exam}</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-bold text-[#0395A6] text-base">{testimonial.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
