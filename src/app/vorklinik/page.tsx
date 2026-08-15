import { Metadata } from 'next'
import Link from 'next/link'
import { 
  BookOpen, 
  Brain, 
  Target, 
  Users, 
  CheckCircle, 
  Clock, 
  Zap,
  Lightbulb,
  BookMarked,
  Microscope,
  Heart,
  Activity
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import { cookies } from 'next/headers'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { buildMetadata } from '@/i18n/seo'
import { whatsappHref } from '@/lib/links'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const locale = normalizeLocale(cookieStore.get('lang')?.value)
  return {
    ...buildMetadata('vorklinik', locale),
    keywords: 'Physikum Nachhilfe, Vorklinik Nachhilfe, Anatomie Nachhilfe, Biochemie Nachhilfe, Physiologie Nachhilfe, Physikum Vorbereitung, Medizin Nachhilfe online',
  }
}

export default async function VorklinikPage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)

  const subjects = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: t(locale, 'pre_sub_anatomy_title'),
      description: t(locale, 'pre_sub_anatomy_desc'),
      focus: t(locale, 'pre_sub_anatomy_focus')
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: t(locale, 'pre_sub_physiology_title'), 
      description: t(locale, 'pre_sub_physiology_desc'),
      focus: t(locale, 'pre_sub_physiology_focus')
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: t(locale, 'pre_sub_biochem_title'),
      description: t(locale, 'pre_sub_biochem_desc'),
      focus: t(locale, 'pre_sub_biochem_focus')
    },
    {
      icon: <BookMarked className="w-6 h-6" />,
      title: t(locale, 'pre_sub_histology_title'),
      description: t(locale, 'pre_sub_histology_desc'),
      focus: t(locale, 'pre_sub_histology_focus')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t(locale, 'pre_sub_physik_title'),
      description: t(locale, 'pre_sub_physik_desc'),
      focus: t(locale, 'pre_sub_physik_focus')
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: t(locale, 'pre_sub_psych_title'),
      description: t(locale, 'pre_sub_psych_desc'),
      focus: t(locale, 'pre_sub_psych_focus')
    }
  ]

  const challenges = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: t(locale, 'pre_chal1_title'),
      description: t(locale, 'pre_chal1_desc')
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: t(locale, 'pre_chal2_title'), 
      description: t(locale, 'pre_chal2_desc')
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t(locale, 'pre_chal3_title'),
      description: t(locale, 'pre_chal3_desc')
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t(locale, 'pre_chal4_title'),
      description: t(locale, 'pre_chal4_desc')
    }
  ]

  const strategies = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: t(locale, 'pre_strat1_title'),
      description: t(locale, 'pre_strat1_desc')
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t(locale, 'pre_strat2_title'),
      description: t(locale, 'pre_strat2_desc')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t(locale, 'pre_strat3_title'),
      description: t(locale, 'pre_strat3_desc')
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: t(locale, 'pre_strat4_title'),
      description: t(locale, 'pre_strat4_desc')
    }
  ]

  const examPrep = [
    {
      phase: t(locale, 'pre_phase1_title'),
      description: t(locale, 'pre_phase1_desc'),
      duration: t(locale, 'pre_phase1_duration')
    },
    {
      phase: t(locale, 'pre_phase2_title'), 
      description: t(locale, 'pre_phase2_desc'),
      duration: t(locale, 'pre_phase2_duration')
    },
    {
      phase: t(locale, 'pre_phase3_title'),
      description: t(locale, 'pre_phase3_desc'),
      duration: t(locale, 'pre_phase3_duration')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold modern-heading leading-tight mb-6">
              <span className="text-black">{t(locale, 'pre_hero_title1')}</span>
              <br />
              <span className="text-[#0395A6]">{t(locale, 'pre_hero_title2')}</span>
            </h1>
            <p className="modern-text text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {t(locale, 'pre_hero_sub')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappHref('vorklinik')}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <Users className="w-6 h-6 mr-3 inline-block" />
                {t(locale, 'home_cta_primary')}
              </a>
              <a
                href="#fächer"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                {t(locale, 'pre_hero_cta_secondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Herausforderungen */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'pre_challenges_title_1')} <span className="text-[#0395A6]">{t(locale, 'pre_challenges_title_2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'pre_challenges_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center">
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="modern-heading text-xl mb-3">{challenge.title}</h3>
                    <p className="modern-text text-gray-600">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fächer-Übersicht */}
      <section id="fächer" className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'pre_subjects_title_1')} <span className="text-[#0395A6]">{t(locale, 'pre_subjects_title_2')}</span> {t(locale, 'pre_subjects_title_3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'pre_subjects_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {subject.icon}
                  </div>
                  <h3 className="modern-heading text-2xl mb-3">{subject.title}</h3>
                    <p className="modern-text text-gray-600 mb-4">{subject.description}</p>
                  <div className="bg-[#F8FAFC] rounded-lg p-4">
                    <p className="text-sm font-semibold text-[#0395A6]">{t(locale, 'pre_focus_label')}: {subject.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lernstrategien */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'pre_strategies_title_1')} <span className="text-[#0395A6]">{t(locale, 'pre_strategies_title_2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'pre_strategies_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center">
                    {strategy.icon}
                  </div>
                  <div>
                    <h3 className="modern-heading text-xl mb-3">{strategy.title}</h3>
                    <p className="modern-text text-gray-600">{strategy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physikum-Vorbereitung */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'pre_exam_title_1')} <span className="text-[#0395A6]">{t(locale, 'pre_exam_title_2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'pre_exam_sub')}</p>
          </div>
          
          <div className="space-y-8">
            {examPrep.map((phase, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0395A6] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="modern-heading text-xl">{phase.phase}</h3>
                      <span className="text-sm font-semibold text-[#0395A6] bg-[#F8FAFC] px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="modern-text text-gray-600">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'pre_testimonials_title_1')} <span className="text-[#0395A6]">{t(locale, 'pre_testimonials_title_2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'pre_testimonials_sub')}</p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="modern-card text-center modern-animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="modern-heading text-3xl md:text-4xl mb-6">
                {t(locale, 'pre_cta_title_1')} <span className="text-[#0395A6]">{t(locale, 'pre_cta_title_2')}</span>
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">{t(locale, 'pre_cta_sub')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappHref('vorklinik')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <Users className="w-6 h-6 mr-3 inline-block" />
                  {t(locale, 'pre_cta_start')}
                </a>
                <Link
                  href="/coaching"
                  className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                  {t(locale, 'pre_cta_overview')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
