import Image from 'next/image'
import { Award, GraduationCap, Heart, Users, Star, MessageCircle, ArrowRight } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <Users className="w-5 h-5 mr-2" />
              Unser Expertenteam
            </div>
            
                    <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
                      Lerne unser<br />
                      <span className="text-[#0395A6]">Team kennen</span>
                    </h1>
            
            <p className="text-lg text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up">
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Unsere Coaches
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Approbierte Ärzt:innen mit aktueller Klinikroutine
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            {/* Mustafa Eid */}
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="text-center mb-4 md:mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-3 md:mb-6 shadow-xl">
                  <Image
                    src="/images/team/mustafa-eid.jpg"
                    alt="Mustafa Eid"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                        <h3 className="text-sm md:text-xl font-bold text-black mb-1 md:mb-2 modern-heading">Mustafa Eid</h3>
                <p className="text-xs md:text-lg text-[#0395A6] font-semibold mb-2 md:mb-4">Approbierter Arzt</p>
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-6">
                <div className="flex items-start">
                  <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1 md:mb-2 text-xs md:text-base">Ausbildung</h4>
                    <p className="text-gray-600 modern-text text-xs md:text-base">
                      Medizinstudium mit Bestnoten, Approbation in Deutschland,
                      Facharztausbildung in der Radiologie. Zweitstudium Informatik (B.Sc.).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-4 h-4 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1 md:mb-2 text-xs md:text-base">Erfahrung</h4>
                    <p className="text-gray-600 modern-text text-xs md:text-base">
                      Tutor in der Vorklinik. Nachhilfe sowohl in der Oberstufe als auch in der Studienzeit.
                      Regelmäßige Fortbildungen und Lehrtätigkeit (bspw. PJ-Unterricht).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-1 md:mb-2 text-xs md:text-base">Spezialisierung</h4>
                    <p className="text-gray-600 modern-text text-xs md:text-base">
                      Physik, Chemie, Anatomie, Pharmakologie, Radiologie und M2.
                      Besonders erfahren in der Vorbereitung internationaler Ärzt:innen im Rahmen der Kenntnisprüfung.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ahkash Thavarajasingam */}
            <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up mobile-inset">
              <div className="text-center mb-3 md:mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-2 md:mb-6 shadow-xl">
                  <Image
                    src="/images/team/ahkash-thavarajasingam.jpg"
                    alt="Ahkash Thavarajasingam"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-black mb-1 md:mb-2 modern-heading">Ahkash Thavarajasingam</h3>
                <p className="text-xs md:text-lg text-[#0395A6] font-semibold mb-2 md:mb-4">Approbierter Arzt</p>
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
                      Publikationen in der Neurochirurgie.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-6 h-6 text-[#0395A6] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Erfahrung</h4>
                    <p className="text-gray-600 modern-text">
                      Sowohl klinische als auch akademische Praxis, ausgeprägtes Interesse für Chirurgie und Notfallmedizin. 
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Warum ultima-rat.io?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Was uns von anderen Anbietern unterscheidet
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-8 md:p-12 text-center modern-animate-fade-in-up">
              <div className="mb-6 md:mb-8">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-black mb-4 md:mb-6 modern-heading">Approbierte Ärzt:innen</h3>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed modern-text">
                Alle unsere Coaches sind approbierte Ärzt:innen mit aktueller Klinikroutine. 
                Keine Studierenden, sondern erfahrene Mediziner.
              </p>
            </div>

            <div className="modern-card p-8 md:p-12 text-center modern-animate-fade-in-up">
              <div className="mb-6 md:mb-8">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-black mb-4 md:mb-6 modern-heading">Individuelle Betreuung</h3>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed modern-text">
                1:1-Coaching statt Gruppenunterricht. Persönliche Lernpläne und 
                direkte Betreuung durch erfahrene Coaches.
              </p>
            </div>

            <div className="modern-card p-8 md:p-12 text-center modern-animate-fade-in-up">
              <div className="mb-6 md:mb-8">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-black mb-4 md:mb-6 modern-heading">Erfolgsorientiert</h3>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed modern-text">
                97% Erfolgsquote und über 500 erfolgreiche Prüfungen sprechen für sich. 
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Was unsere Studierenden sagen
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
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
                &ldquo;Mehr gelernt in 1 Stunde als in einer ganzen Woche alleine. Ich war total überfordert mit der prüfungsvorbereitung fürs M2 (vor allem weil ich letztendlich komplett falsch rangegangen bin und ein &bdquo;dummes&ldquo; Lernsystem hatte). Das Einzelcoaching war auf den Punkt, super strukturiert, mega empathisch und wirklich hilfreich.&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">Marcel M.</p>
                <p className="text-sm text-gray-600">M2 bestanden mit 2</p>
              </div>
            </div>

            <div className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed modern-text mb-6">
                &ldquo;Ich hab den 5h-Crashkurs gemacht und bin echt zufrieden! In nur fünf Stunden wurde mir alles verständlich erklärt, und der Inhalt wurde super hilfreich vermittelt. Was mir besonders gefallen hat: Ich habe endlich eine Lernstrategie gefunden, die zu mir passt - mit Anki-Karten, sinnvoller Nachbereitung und praxisnahem Falltraining.&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">Victoria G.</p>
                <p className="text-sm text-gray-600">5 Std. Crashkurs bestanden</p>
              </div>
            </div>

            <div className="modern-testimonial modern-animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed modern-text mb-6">
                &ldquo;Zu Beginn meines Studiums hatte ich große Schwierigkeiten, die für mich passende Lerntechnik zu finden und die relevanten Lerninhalte richtig zu filtern. Ich war dann in einem Dritt- und zwei Zweitversuchen, die ich ohne Hilfe nicht geschafft hätte. Mit ärztlicher &lsquo;Nachhilfe&rsquo; konnte ich die Wiederholungsklausuren erfolgreich bestehen!&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">Angelina P.</p>
                <p className="text-sm text-gray-600">Anatomie und Physiologie bestanden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            STARTE JETZT
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            Mit unserem Expertenteam zum Erfolg.
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            Erfahrene Ärzt:innen, individuelle Betreuung und wissenschaftlich fundierte Methoden. 
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
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