import { Award, GraduationCap, Heart, Users, Star, MessageCircle, ArrowRight } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <Users className="w-5 h-5 mr-2" />
              Unser Expertenteam
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
              Lernen Sie unser<br />
              <span className="text-[#0395A6]">Team kennen</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up">
              Erfahrene Ärzt:innen und Medizinstudierende, die selbst mit Top-Ergebnissen 
              durch alle Examina gegangen sind und ihr Wissen gerne weitergeben.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Unsere Coaches
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Approbierte Ärzt:innen mit aktueller Klinikroutine
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            {/* Mustafa Eid */}
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                  ME
                </div>
                <h3 className="text-3xl font-bold text-black mb-2 modern-heading">Dr. Mustafa Eid</h3>
                <p className="text-xl text-[#0395A6] font-semibold mb-4">Approbierter Arzt</p>
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <GraduationCap className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Ausbildung</h4>
                    <p className="text-gray-600 modern-text">
                      Studium der Humanmedizin mit Auszeichnung, Approbation in Deutschland, 
                      Facharztausbildung in der Inneren Medizin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Erfahrung</h4>
                    <p className="text-gray-600 modern-text">
                      Über 5 Jahre klinische Erfahrung, Spezialisierung auf Notfallmedizin 
                      und Innere Medizin. Regelmäßige Fortbildungen und Lehrtätigkeit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Spezialisierung</h4>
                    <p className="text-gray-600 modern-text">
                      Kenntnisprüfung, Physikum, M2, M3, Notfallmedizin, Innere Medizin. 
                      Besonders erfahren in der Vorbereitung internationaler Ärzt:innen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ahkash Thavarajasingam */}
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-[#0395A6] to-[#028A9A] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                  AT
                </div>
                <h3 className="text-3xl font-bold text-black mb-2 modern-heading">Dr. Ahkash Thavarajasingam</h3>
                <p className="text-xl text-[#0395A6] font-semibold mb-4">Approbierter Arzt</p>
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <GraduationCap className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Ausbildung</h4>
                    <p className="text-gray-600 modern-text">
                      Medizinstudium mit Bestnoten, Approbation in Deutschland, 
                      Zusatzqualifikationen in Chirurgie und Notfallmedizin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Erfahrung</h4>
                    <p className="text-gray-600 modern-text">
                      Mehr als 4 Jahre klinische Praxis, Schwerpunkt Chirurgie und Notfallmedizin. 
                      Umfangreiche Erfahrung in der Ausbildung von Medizinstudierenden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Spezialisierung</h4>
                    <p className="text-gray-600 modern-text">
                      Anatomie, Physiologie, Chirurgie, Notfallmedizin, Kenntnisprüfung. 
                      Experte für strukturierte Lernmethoden und Prüfungsvorbereitung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Warum ultima-rat.io?
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Was uns von anderen Anbietern unterscheidet
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Award className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 modern-heading">Approbierte Ärzt:innen</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                Alle unsere Coaches sind approbierte Ärzt:innen mit aktueller Klinikroutine. 
                Keine Studierenden, sondern erfahrene Mediziner.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 modern-heading">Individuelle Betreuung</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                1:1-Coaching statt Gruppenunterricht. Persönliche Lernpläne und 
                direkte Betreuung durch erfahrene Coaches.
              </p>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-8 h-8 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 modern-heading">Erfolgsorientiert</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text">
                95% Erfolgsquote und über 500 erfolgreiche Prüfungen sprechen für sich. 
                Wir sind auf Ihren Erfolg fokussiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Was unsere Studierenden sagen
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Echte Erfolgsgeschichten von echten Studierenden
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed modern-text mb-6">
                "Dr. Eid hat mir geholfen, die Kenntnisprüfung erfolgreich zu bestehen. 
                Seine strukturierte Herangehensweise war genau das, was ich brauchte."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">Sarah M.</p>
                <p className="text-sm text-gray-600">Kenntnisprüfung bestanden</p>
              </div>
            </div>

            <div className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed modern-text mb-6">
                "Das Coaching mit Dr. Thavarajasingam war fantastisch. 
                Endlich verstehe ich die Anatomie richtig, nicht nur auswendig."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">Michael R.</p>
                <p className="text-sm text-gray-600">Physikum bestanden</p>
              </div>
            </div>

            <div className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed modern-text mb-6">
                "Professionelle Betreuung von Anfang bis Ende. 
                Die Prüfungssimulationen waren Gold wert für meine M2-Vorbereitung."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">Lisa T.</p>
                <p className="text-sm text-gray-600">M2 bestanden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            STARTE JETZT
          </h2>
          <p className="text-3xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            Mit unserem Expertenteam zum Erfolg.
          </p>
          <p className="text-xl text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            Erfahrene Ärzt:innen, individuelle Betreuung und wissenschaftlich fundierte Methoden. 
            Über 500 erfolgreiche Prüfungen sprechen für sich.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-xl font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
          >
            <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
            Kostenloses Erstgespräch
            <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}