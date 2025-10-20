import Link from 'next/link'
import { CheckCircle, Users, Target, BookOpen, Brain, Award, ArrowRight, MessageCircle } from 'lucide-react'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import HeroWithImage from '../components/HeroWithImage'
import ProblemVisual from '../components/ProblemVisual'
import SolutionVisual from '../components/SolutionVisual'
import StatsCounter from '../components/StatsCounter'
import UrgencyBanner from '../components/UrgencyBanner'
import StickyWhatsAppCTA from '../components/StickyWhatsAppCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* New Hero with Image */}
      <HeroWithImage />

      {/* New Problem Section with Visuals */}
      <ProblemVisual />

      {/* New Solution Section with Visuals */}
      <SolutionVisual />

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Der ultima-rat.io Ansatz */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 modern-heading modern-animate-fade-in-up">
              Der <span className="text-[#0395A6]">ultima-rat.io</span> Ansatz
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              Wissenschaftliche Grundlage und strukturierte Herangehensweise für nachhaltigen Lernerfolg
            </p>
          </div>

          <div className="modern-grid modern-grid-2 gap-12">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Brain className="w-16 h-16 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Wissenschaftliche Grundlage</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text break-words mobile-readable-text">
                Wir arbeiten mit bewährten Lernmethoden aus der Kognitionsforschung: Retrieval Practice (aktives Abrufen), 
                Spaced Repetition (geplante Wiederholung), Interleaving (systematisches Mischen von Themen) und gezieltes Feedback. 
                Diese Methoden sind wissenschaftlich belegt und führen nachweislich zu besseren Prüfungsergebnissen.
              </p>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <div className="mb-8">
                <Target className="w-16 h-16 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-6 modern-heading">Strukturierte Herangehensweise</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text break-words mobile-readable-text">
                Statt beim Altbewährten zu bleiben und verzweifelt die letzten Energiereserven auszuschöpfen, 
                gehen wir deine Defizite strukturiert an. Unsere Coaches sind approbierte Ärzt:innen und erfahrene Medizinstudierende, 
                die selbst mit Top-Ergebnissen durch alle Examina gegangen sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 modern-heading modern-animate-fade-in-up">
              Erfolgsgeschichten unserer <span className="text-[#0395A6]">Studierenden</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              Über 500 Studierende haben mit uns ihre Prüfungen erfolgreich bestanden
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* Transparente Preise */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 modern-heading modern-animate-fade-in-up">
              <span className="text-[#0395A6]">Transparente</span> Preise
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              Keine versteckten Kosten, keine langfristigen Verträge. Bezahle nur, wenn du zufrieden bist.
            </p>
          </div>

          <div className="modern-grid modern-grid-2 gap-12">
            <div className="modern-card p-16 text-center modern-animate-fade-in-up price-card-mobile-extend">
              <div className="mb-10">
                <Award className="w-20 h-20 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-8 modern-heading">Einzelcoaching</h3>
              <div className="text-6xl font-bold text-[#0395A6] mb-8 price-mobile">39€</div>
              <p className="text-lg text-gray-600 mb-10 modern-text price-text-mobile">
                Online über Zoom mit Screen Sharing und Whiteboard. Flexibel buchbar über WhatsApp, bezahlen erst im Anschluss!
              </p>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-6 rounded-lg text-lg font-semibold modern-focus group price-button-mobile"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                Jetzt buchen
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="modern-card p-16 text-center modern-animate-fade-in-up">
              <div className="mb-10">
                <Users className="w-20 h-20 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-8 modern-heading">Gruppencoaching</h3>
              <div className="text-6xl font-bold text-[#0395A6] mb-8 price-mobile">25€</div>
              <p className="text-lg text-gray-600 mb-10 modern-text">
                Kleingruppen mit max. 4 Teilnehmern. Ideal für gemeinsames Lernen und gegenseitige Motivation.
              </p>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-6 rounded-lg text-lg font-semibold modern-focus group"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                Jetzt buchen
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <UrgencyBanner />

      {/* FAQ Section */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 modern-heading modern-animate-fade-in-up">
              Häufig gestellte <span className="text-[#0395A6]">Fragen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto modern-text modern-animate-fade-in-up">
              Alles was du über unser Coaching wissen musst
            </p>
          </div>
          
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="modern-section bg-[#0395A6] text-white">
        <div className="modern-container">
          <div className="text-center modern-animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 modern-heading">
              Bereit für deinen <span className="text-white">Prüfungserfolg?</span>
            </h2>
            <p className="text-lg text-white mb-16 max-w-4xl mx-auto modern-text">
              Starte jetzt mit deinem kostenlosen Erstgespräch. Keine Verpflichtungen, nur ehrliche Beratung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0395A6] hover:bg-[#028A9A] text-white px-16 py-8 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-4"
              >
                <MessageCircle className="w-8 h-8" />
                <span>KOSTENLOSES ERSTGESPRÄCH</span>
              </a>
              <Link
                href="/coaching"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 hover:border-white px-16 py-8 rounded-lg text-lg font-bold transition-all duration-300 inline-flex items-center justify-center space-x-4"
              >
                <BookOpen className="w-8 h-8" />
                <span>Coaching entdecken</span>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-4">Kostenlos</h3>
                <p className="text-white/80 text-base">Erstgespräch ohne Verpflichtung</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-4">Flexibel</h3>
                <p className="text-white/80 text-base">Termine nach deinem Zeitplan</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-4">Erfolgreich</h3>
                <p className="text-white/80 text-base">97% bestehen ihre Prüfungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp CTA */}
      <StickyWhatsAppCTA />
    </div>
  )
}