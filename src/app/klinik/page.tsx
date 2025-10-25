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
  Stethoscope,
  Heart,
  Activity,
  Eye,
  Baby,
  Brain as BrainIcon,
  User,
  Scan
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import { cookies } from 'next/headers'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'

export const metadata: Metadata = {
  title: 'Klinik Coaching - M2 & M3 erfolgreich bestehen | ultima-rat.io',
  description: 'Klinisches Denken entwickeln für M2 und M3. Innere Medizin, Chirurgie, Neurologie & Co. - Dein Weg zum 2. und 3. Staatsexamen.',
  keywords: 'M2, M3, Klinik, Medizinstudium, Innere Medizin, Chirurgie, Neurologie, Hammerexamen, OSCE, klinisches Denken',
}

export default async function KlinikPage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)

  const subjects = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: t(locale, 'cl_sub_im_title'),
      description: t(locale, 'cl_sub_im_desc'),
      relevance: "M2: 40% | M3: 35% | OSCE: 30%"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t(locale, 'cl_sub_ch_title'), 
      description: t(locale, 'cl_sub_ch_desc'),
      relevance: "M2: 25% | M3: 30% | OSCE: 25%"
    },
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: t(locale, 'cl_sub_neuro_title'),
      description: t(locale, 'cl_sub_neuro_desc'),
      relevance: "M2: 15% | M3: 20% | OSCE: 15%"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: t(locale, 'cl_sub_paed_title'),
      description: t(locale, 'cl_sub_paed_desc'),
      relevance: "M2: 10% | M3: 15% | OSCE: 10%"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: t(locale, 'cl_sub_gyn_title'),
      description: t(locale, 'cl_sub_gyn_desc'),
      relevance: "M2: 8% | M3: 12% | OSCE: 8%"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: t(locale, 'cl_sub_psy_title'),
      description: t(locale, 'cl_sub_psy_desc'),
      relevance: "M2: 5% | M3: 8% | OSCE: 5%"
    }
  ]

  const challenges = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: t(locale, 'cl_chal1_title'),
      description: t(locale, 'cl_chal1_desc')
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: t(locale, 'cl_chal2_title'), 
      description: t(locale, 'cl_chal2_desc')
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t(locale, 'cl_chal3_title'),
      description: t(locale, 'cl_chal3_desc')
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t(locale, 'cl_chal4_title'),
      description: t(locale, 'cl_chal4_desc')
    }
  ]

  const examPreparation = [
    {
      exam: t(locale, 'cl_exam_m2_title'),
      description: t(locale, 'cl_exam_m2_desc'),
      duration: t(locale, 'cl_exam_m2_duration'),
      format: t(locale, 'cl_exam_m2_format')
    },
    {
      exam: t(locale, 'cl_exam_m3_title'), 
      description: t(locale, 'cl_exam_m3_desc'),
      duration: t(locale, 'cl_exam_m3_duration'),
      format: t(locale, 'cl_exam_m3_format')
    },
    {
      exam: t(locale, 'cl_exam_osce_title'),
      description: t(locale, 'cl_exam_osce_desc'),
      duration: t(locale, 'cl_exam_osce_duration'),
      format: t(locale, 'cl_exam_osce_format')
    }
  ]

  const clinicalSkills = [
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: t(locale, 'cl_skill_exam_title'),
      description: t(locale, 'cl_skill_exam_desc')
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: t(locale, 'cl_skill_anam_title'),
      description: t(locale, 'cl_skill_anam_desc')
    },
    {
      icon: <Scan className="w-5 h-5" />,
      title: t(locale, 'cl_skill_imaging_title'),
      description: t(locale, 'cl_skill_imaging_desc')
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: t(locale, 'cl_skill_ekg_title'),
      description: t(locale, 'cl_skill_ekg_desc')
    }
  ]

  const studyMethods = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: t(locale, 'cl_method_case_title'),
      description: t(locale, 'cl_method_case_desc')
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t(locale, 'cl_method_group_title'),
      description: t(locale, 'cl_method_group_desc')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t(locale, 'cl_method_sim_title'),
      description: t(locale, 'cl_method_sim_desc')
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: t(locale, 'cl_method_ddx_title'),
      description: t(locale, 'cl_method_ddx_desc')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold modern-heading leading-tight mb-6">
              <span className="text-black">{t(locale, 'cl_hero_title1')}</span>
              <br />
              <span className="text-[#0395A6]">{t(locale, 'cl_hero_title2')}</span>
            </h1>
            <p className="modern-text text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{t(locale, 'cl_hero_sub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <Users className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                {t(locale, 'home_cta_primary')}
              </a>
              <a
                href="#fächer"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                {t(locale, 'cl_hero_cta_secondary')}
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
              {t(locale, 'cl_challenges_title1')} <span className="text-[#0395A6]">{t(locale, 'cl_challenges_title2')}</span> {t(locale, 'cl_challenges_title3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'cl_challenges_sub')}</p>
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

      {/* Klinische Fächer */}
      <section id="fächer" className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'cl_subjects_title1')} <span className="text-[#0395A6]">{t(locale, 'cl_subjects_title2')}</span> {t(locale, 'cl_subjects_title3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'cl_subjects_sub')}</p>
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
                      <p className="text-sm font-semibold text-[#0395A6]">{t(locale, 'cl_relevance_label')}: {subject.relevance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prüfungsvorbereitung */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'cl_exam_title1')} <span className="text-[#0395A6]">{t(locale, 'cl_exam_title2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'cl_exam_sub')}</p>
          </div>
          
          <div className="space-y-8">
            {examPreparation.map((exam, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0395A6] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="modern-heading text-xl">{exam.exam}</h3>
                      <span className="text-sm font-semibold text-[#0395A6] bg-[#F8FAFC] px-3 py-1 rounded-full">
                        {exam.duration}
                      </span>
                    </div>
                    <p className="modern-text text-gray-600 mb-3">{exam.description}</p>
                    <div className="bg-[#F8FAFC] rounded-lg p-3">
                      <p className="text-sm font-semibold text-[#0395A6]">{t(locale, 'cl_format_label')}: {exam.format}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klinische Fertigkeiten */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              <span className="text-[#0395A6]">{t(locale, 'cl_skills_title2')}</span> {t(locale, 'cl_skills_title3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'cl_skills_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {clinicalSkills.map((skill, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="modern-heading text-xl mb-3">{skill.title}</h3>
                    <p className="modern-text text-gray-600">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lernmethoden */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'cl_methods_title1')} <span className="text-[#0395A6]">{t(locale, 'cl_methods_title2')}</span> {t(locale, 'cl_methods_title3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'cl_methods_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {studyMethods.map((method, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="modern-heading text-xl mb-3">{method.title}</h3>
                    <p className="modern-text text-gray-600">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'cl_testimonials_title1')} <span className="text-[#0395A6]">{t(locale, 'cl_testimonials_title2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'cl_testimonials_sub')}</p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="modern-card text-center modern-animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="modern-heading text-3xl md:text-4xl mb-6">
                {t(locale, 'cl_cta_title1')} <span className="text-[#0395A6]">{t(locale, 'cl_cta_title2')}</span>
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">{t(locale, 'cl_cta_sub')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <Users className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                  {t(locale, 'cl_cta_start')}
                </a>
                <Link
                  href="/coaching"
                  className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                  {t(locale, 'cl_cta_overview')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
