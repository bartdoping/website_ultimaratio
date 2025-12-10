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
  MessageCircle,
  ArrowRight,
  Heart,
  Activity,
  Microscope,
  TestTube,
  Stethoscope
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import { cookies } from 'next/headers'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'

export const metadata: Metadata = {
  title: 'Zahnmedizin Coaching - Z1, Z2, Z3 erfolgreich bestehen | ultima-rat.io',
  description: 'Individuelles Coaching für Zahnmedizinstudierende. Vorbereitung auf Z1, Z2 und Z3 Staatsexamen mit bewährten Lernmethoden.',
  keywords: 'Zahnmedizin, Z1, Z2, Z3, Staatsexamen, Zahnmedizinstudium, Prüfungsvorbereitung, Coaching',
}

export default async function ZahnmedizinPage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)

  const subjects = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: t(locale, 'zm_sub_anatomy_title'),
      description: t(locale, 'zm_sub_anatomy_desc'),
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: t(locale, 'zm_sub_physiology_title'),
      description: t(locale, 'zm_sub_physiology_desc'),
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: t(locale, 'zm_sub_pathology_title'),
      description: t(locale, 'zm_sub_pathology_desc'),
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: t(locale, 'zm_sub_materials_title'),
      description: t(locale, 'zm_sub_materials_desc'),
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: t(locale, 'zm_sub_prosthetics_title'),
      description: t(locale, 'zm_sub_prosthetics_desc'),
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t(locale, 'zm_sub_surgery_title'),
      description: t(locale, 'zm_sub_surgery_desc'),
    },
  ]

  const challenges = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: t(locale, 'zm_chal1_title'),
      description: t(locale, 'zm_chal1_desc')
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t(locale, 'zm_chal2_title'), 
      description: t(locale, 'zm_chal2_desc')
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t(locale, 'zm_chal3_title'),
      description: t(locale, 'zm_chal3_desc')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t(locale, 'zm_chal4_title'),
      description: t(locale, 'zm_chal4_desc')
    }
  ]

  const exams = [
    {
      exam: t(locale, 'zm_exam_z1_title'),
      description: t(locale, 'zm_exam_z1_desc'),
      duration: t(locale, 'zm_exam_z1_duration'),
      format: t(locale, 'zm_exam_z1_format'),
      focus: t(locale, 'zm_exam_z1_focus')
    },
    {
      exam: t(locale, 'zm_exam_z2_title'), 
      description: t(locale, 'zm_exam_z2_desc'),
      duration: t(locale, 'zm_exam_z2_duration'),
      format: t(locale, 'zm_exam_z2_format'),
      focus: t(locale, 'zm_exam_z2_focus')
    },
    {
      exam: t(locale, 'zm_exam_z3_title'),
      description: t(locale, 'zm_exam_z3_desc'),
      duration: t(locale, 'zm_exam_z3_duration'),
      format: t(locale, 'zm_exam_z3_format'),
      focus: t(locale, 'zm_exam_z3_focus')
    }
  ]

  const solutions = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: t(locale, 'zm_sol1_title'),
      description: t(locale, 'zm_sol1_desc'),
      items: [
        t(locale, 'zm_sol1_item1'),
        t(locale, 'zm_sol1_item2'),
        t(locale, 'zm_sol1_item3'),
        t(locale, 'zm_sol1_item4')
      ]
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: t(locale, 'zm_sol2_title'),
      description: t(locale, 'zm_sol2_desc'),
      items: [
        t(locale, 'zm_sol2_item1'),
        t(locale, 'zm_sol2_item2'),
        t(locale, 'zm_sol2_item3'),
        t(locale, 'zm_sol2_item4')
      ]
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t(locale, 'zm_sol3_title'),
      description: t(locale, 'zm_sol3_desc'),
      items: [
        t(locale, 'zm_sol3_item1'),
        t(locale, 'zm_sol3_item2'),
        t(locale, 'zm_sol3_item3'),
        t(locale, 'zm_sol3_item4')
      ]
    }
  ]

  const methods = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: t(locale, 'zm_method1_title'),
      description: t(locale, 'zm_method1_desc')
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t(locale, 'zm_method2_title'),
      description: t(locale, 'zm_method2_desc')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t(locale, 'zm_method3_title'),
      description: t(locale, 'zm_method3_desc')
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: t(locale, 'zm_method4_title'),
      description: t(locale, 'zm_method4_desc')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold modern-heading leading-tight mb-6">
              <span className="text-black">{t(locale, 'zm_hero_title1')}</span>
              <br />
              <span className="text-[#0395A6]">{t(locale, 'zm_hero_title2')}</span>
            </h1>
            <p className="modern-text text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{t(locale, 'zm_hero_sub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                {t(locale, 'home_cta_primary')}
              </a>
              <a
                href="#exams"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                {t(locale, 'zm_cta_overview')}
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
              {t(locale, 'zm_challenges_title1')} <span className="text-[#0395A6]">{t(locale, 'zm_challenges_title2')}</span> {t(locale, 'zm_challenges_title3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'zm_challenges_sub')}</p>
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

      {/* Examina Z1, Z2, Z3 */}
      <section id="exams" className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              Die drei <span className="text-[#0395A6]">Staatsexamina</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              Z1, Z2 und Z3 – Dein Weg zum erfolgreichen Abschluss des Zahnmedizinstudiums
            </p>
          </div>
          
          <div className="space-y-8">
            {exams.map((exam, index) => (
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
                    <div className="bg-[#F8FAFC] rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm font-semibold text-[#0395A6] mb-1">Format:</p>
                          <p className="text-sm text-gray-700">{exam.format}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0395A6] mb-1">Fokus:</p>
                          <p className="text-sm text-gray-700">{exam.focus}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detaillierte Prüfungsfächer */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'zm_exam_details_title')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">
              {t(locale, 'zm_exam_details_sub')}
            </p>
          </div>

          <div className="space-y-12">
            {/* Z1 Fächer */}
            <div className="modern-card modern-animate-fade-in-up">
              <div className="mb-6">
                <h3 className="modern-heading text-2xl mb-3 text-[#0395A6]">{t(locale, 'zm_z1_title')}</h3>
                <p className="modern-text text-gray-600">{t(locale, 'zm_z1_sub')}</p>
              </div>
              <div className="space-y-4">
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#0395A6] mb-2">{t(locale, 'zm_z1_group1_title')}</p>
                  <p className="text-gray-700">{t(locale, 'zm_z1_group1_name')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#0395A6] mb-2">{t(locale, 'zm_z1_group2_title')}</p>
                  <p className="text-gray-700">{t(locale, 'zm_z1_group2_name')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#0395A6] mb-2">{t(locale, 'zm_z1_group3_title')}</p>
                  <p className="text-gray-700">{t(locale, 'zm_z1_group3_name')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#0395A6] mb-2">{t(locale, 'zm_z1_subject4_title')}</p>
                  <p className="text-gray-700">{t(locale, 'zm_z1_subject4_name')}</p>
                </div>
              </div>
            </div>

            {/* Z2 Fächer */}
            <div className="modern-card modern-animate-fade-in-up">
              <div className="mb-6">
                <h3 className="modern-heading text-2xl mb-3 text-[#0395A6]">{t(locale, 'zm_z2_title')}</h3>
                <p className="modern-text text-gray-600">{t(locale, 'zm_z2_sub')}</p>
              </div>
              <div className="space-y-4">
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z2_subject1')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z2_subject2')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z2_subject3')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#0395A6] mb-3">{t(locale, 'zm_z2_group4_title')}</p>
                  <p className="text-sm text-gray-600 mb-3">{t(locale, 'zm_z2_group4_sub')}</p>
                  <ul className="space-y-2 ml-4">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-[#0395A6] mr-2">•</span>
                      <span>{t(locale, 'zm_z2_group4_item1')}</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-[#0395A6] mr-2">•</span>
                      <span>{t(locale, 'zm_z2_group4_item2')}</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-[#0395A6] mr-2">•</span>
                      <span>{t(locale, 'zm_z2_group4_item3')}</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-[#0395A6] mr-2">•</span>
                      <span>{t(locale, 'zm_z2_group4_item4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Z3 Schriftlich */}
            <div className="modern-card modern-animate-fade-in-up">
              <div className="mb-6">
                <h3 className="modern-heading text-2xl mb-3 text-[#0395A6]">{t(locale, 'zm_z3_written_title')}</h3>
                <p className="modern-text text-gray-600">{t(locale, 'zm_z3_written_sub')}</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_written_subject1')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_written_subject2')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_written_subject3')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_written_subject4')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_written_subject5')}</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-lg font-semibold text-[#0395A6] mb-3">{t(locale, 'zm_z3_cross_title')}</p>
                <p className="text-sm text-gray-600 mb-4">{t(locale, 'zm_z3_cross_sub')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#F8FAFC] rounded-lg p-3">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item1')}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-3">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item2')}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-3">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item3')}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-3">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item4')}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-3">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item5')}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-3">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item6')}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-3 md:col-span-2">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item7')}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-3">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item8')}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-3">
                    <p className="text-sm text-gray-700">{t(locale, 'zm_z3_cross_item9')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Z3 Mündlich */}
            <div className="modern-card modern-animate-fade-in-up">
              <div className="mb-6">
                <h3 className="modern-heading text-2xl mb-3 text-[#0395A6]">{t(locale, 'zm_z3_oral_title')}</h3>
                <p className="modern-text text-gray-600">{t(locale, 'zm_z3_oral_sub')}</p>
              </div>
              <div className="space-y-4">
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_oral_subject1')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_oral_subject2')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_oral_subject3')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_oral_subject4')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_oral_subject5')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{t(locale, 'zm_z3_oral_subject6')}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#0395A6] mb-3">{t(locale, 'zm_z3_oral_group7_title')}</p>
                  <p className="text-sm text-gray-600 mb-3">{t(locale, 'zm_z3_oral_group7_sub')}</p>
                  <ul className="space-y-2 ml-4">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-[#0395A6] mr-2">•</span>
                      <span>{t(locale, 'zm_z3_oral_group7_item1')}</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-[#0395A6] mr-2">•</span>
                      <span>{t(locale, 'zm_z3_oral_group7_item2')}</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-[#0395A6] mr-2">•</span>
                      <span>{t(locale, 'zm_z3_oral_group7_item3')}</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-[#0395A6] mr-2">•</span>
                      <span>{t(locale, 'zm_z3_oral_group7_item4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fächer-Übersicht */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'zm_subjects_title1')} <span className="text-[#0395A6]">{t(locale, 'zm_subjects_title2')}</span> {t(locale, 'zm_subjects_title3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'zm_subjects_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {subject.icon}
                  </div>
                  <h3 className="modern-heading text-2xl mb-3">{subject.title}</h3>
                  <p className="modern-text text-gray-600">{subject.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unser Coaching */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'zm_solution_title')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'zm_solution_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0395A6] text-white rounded-lg flex items-center justify-center mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="modern-heading text-xl mb-3">{solution.title}</h3>
                  <p className="modern-text text-gray-600 mb-4">{solution.description}</p>
                </div>
                <ul className="space-y-2">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#0395A6] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
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
              {t(locale, 'zm_methods_title1')} <span className="text-[#0395A6]">{t(locale, 'zm_methods_title2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'zm_methods_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {methods.map((method, index) => (
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
              {t(locale, 'zm_testimonials_title1')} <span className="text-[#0395A6]">{t(locale, 'zm_testimonials_title2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'zm_testimonials_sub')}</p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'zm_prices_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'zm_prices_sub')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="modern-card p-16 modern-animate-fade-in-up price-card-mobile-extend">
              <div className="text-center mb-12">
                <div className="text-4xl md:text-6xl font-bold text-[#0395A6] mb-4 price-mobile">59€</div>
                <p className="text-lg text-gray-600 mb-8">{t(locale, 'coaching_price_line1')}</p>
                <p className="text-lg text-gray-500">{t(locale, 'coaching_price_line2')}</p>
              </div>

              <div className="modern-grid modern-grid-2 mb-12">
                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'zm_pricing_what_you_get_title')}</h3>
                  <ul className="space-y-4">
                    {[
                      t(locale, 'coaching_pricing_what_you_get_item1'),
                      t(locale, 'coaching_pricing_what_you_get_item2'),
                      t(locale, 'coaching_pricing_what_you_get_item3'),
                      t(locale, 'coaching_pricing_what_you_get_item4'),
                      t(locale, 'coaching_pricing_what_you_get_item5'),
                      t(locale, 'coaching_pricing_what_you_get_item6'),
                      t(locale, 'coaching_pricing_what_you_get_item7'),
                      t(locale, 'coaching_pricing_what_you_get_item8')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-lg text-gray-700">
                        <CheckCircle className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-6 modern-heading">{t(locale, 'zm_pricing_flexible_booking_title')}</h3>
                  <ul className="space-y-4">
                    {[
                      t(locale, 'coaching_pricing_flexible_booking_item1'),
                      t(locale, 'coaching_pricing_flexible_booking_item2'),
                      t(locale, 'coaching_pricing_flexible_booking_item3'),
                      t(locale, 'coaching_pricing_flexible_booking_item4')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-lg text-gray-700">
                        <Zap className="w-6 h-6 text-[#0395A6] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed modern-text price-text-mobile">{t(locale, 'zm_pricing_info')}</p>
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg button-text modern-focus group price-button-mobile"
                >
                  <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                  {t(locale, 'zm_pricing_cta_book_now')}
                  <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="modern-card text-center modern-animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="modern-heading text-3xl md:text-4xl mb-6">
                {t(locale, 'zm_cta_title1')} <span className="text-[#0395A6]">{t(locale, 'zm_cta_title2')}</span>
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">{t(locale, 'zm_cta_sub')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <Users className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
                  {t(locale, 'zm_cta_start')}
                </a>
                <Link
                  href="/coaching"
                  className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <BookOpen className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                  {t(locale, 'zm_cta_overview')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

