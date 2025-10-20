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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Der <span className="text-[#0395A6]">ultima-rat.io</span> Ansatz
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Wissenschaftliche Grundlage und strukturierte Herangehensweise für nachhaltigen Lernerfolg
            </p>
          </div>

          <div className="modern-grid modern-grid-2 gap-8">
            <div className="modern-card p-8 modern-animate-fade-in-up">
              <div className="mb-6">
                <Brain className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Wissenschaftliche Grundlage</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text break-words mobile-readable-text">
                Wir arbeiten mit bewährten Lernmethoden aus der Kognitionsforschung: Retrieval Practice (aktives Abrufen), 
                Spaced Repetition (geplante Wiederholung), Interleaving (systematisches Mischen von Themen) und gezieltes Feedback. 
                Diese Methoden sind wissenschaftlich belegt und führen nachweislich zu besseren Prüfungsergebnissen.
              </p>
            </div>

            <div className="modern-card p-8 modern-animate-fade-in-up">
              <div className="mb-6">
                <Target className="w-12 h-12 text-[#0395A6]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 modern-heading">Strukturierte Herangehensweise</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Erfolgsgeschichten unserer <span className="text-[#0395A6]">Studierenden</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              <span className="text-[#0395A6]">Transparente</span> Preise
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Keine versteckten Kosten, keine langfristigen Verträge. Bezahle nur, wenn du zufrieden bist.
            </p>
          </div>

          <div className="modern-grid modern-grid-2 gap-8">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up price-card-mobile-extend">
              <div className="mb-8">
                <Award className="w-16 h-16 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 modern-heading">Einzelcoaching</h3>
              <div className="text-6xl font-bold text-[#0395A6] mb-6 price-mobile">39€</div>
              <p className="text-lg text-gray-600 mb-8 modern-text price-text-mobile">
                Online über Zoom mit Screen Sharing und Whiteboard. Flexibel buchbar über WhatsApp, bezahlen erst im Anschluss!
              </p>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-8 py-4 rounded-lg text-lg font-semibold modern-focus group price-button-mobile"
              >
                <MessageCircle className="w-5 h-5 mr-3 inline-block group-hover:animate-pulse" />
                Jetzt buchen
                <ArrowRight className="w-5 h-5 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="mb-8">
                <Users className="w-16 h-16 text-[#0395A6] mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 modern-heading">Gruppencoaching</h3>
              <div className="text-6xl font-bold text-[#0395A6] mb-6">25€</div>
              <p className="text-lg text-gray-600 mb-8 modern-text">
                Kleingruppen mit max. 4 Teilnehmern. Ideal für gemeinsames Lernen und gegenseitige Motivation.
              </p>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-8 py-4 rounded-lg text-lg font-semibold modern-focus group"
              >
                <MessageCircle className="w-5 h-5 mr-3 inline-block group-hover:animate-pulse" />
                Jetzt buchen
                <ArrowRight className="w-5 h-5 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Häufig gestellte <span className="text-[#0395A6]">Fragen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 modern-heading">
              Bereit für deinen <span className="text-white">Prüfungserfolg?</span>
            </h2>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto modern-text">
              Starte jetzt mit deinem kostenlosen Erstgespräch. Keine Verpflichtungen, nur ehrliche Beratung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0395A6] hover:bg-[#028A9A] text-white px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>KOSTENLOSES ERSTGESPRÄCH</span>
              </a>
              <Link
                href="/coaching"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 hover:border-white px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3"
              >
                <BookOpen className="w-6 h-6" />
                <span>Coaching entdecken</span>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Kostenlos</h3>
                <p className="text-white/80">Erstgespräch ohne Verpflichtung</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Flexibel</h3>
                <p className="text-white/80">Termine nach deinem Zeitplan</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Erfolgreich</h3>
                <p className="text-white/80">97% bestehen ihre Prüfungen</p>
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