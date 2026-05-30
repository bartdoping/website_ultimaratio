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
  Activity,
  Eye,
  Scan,
  TestTube,
  Droplets,
  BookMarked
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import { cookies } from 'next/headers'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'

export const metadata: Metadata = {
  title: 'Medical Skills Training - EKG, Röntgen, Labor & Co. | ultima-rat.io',
  description: 'Klinische Fertigkeiten für OSCE, M2 & M3. EKG-Interpretation, Röntgen-Thorax, Laborwerte, BGA und Untersuchungstechniken.',
  keywords: 'Medical Skills, EKG, Röntgen, Laborwerte, BGA, OSCE, M2, M3, klinische Fertigkeiten, Untersuchungstechniken',
}

export default async function MedicalSkillsPage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)

  const skills = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: t(locale, 'ms_skill_ekg_title'),
      description: t(locale, 'ms_skill_ekg_desc'),
      examRelevance: "OSCE: 20% | M2: 15% | M3: 25%",
      keyPoints: [t(locale, 'ms_ekg_p1'), t(locale, 'ms_ekg_p2'), t(locale, 'ms_ekg_p3'), t(locale, 'ms_ekg_p4')]
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: t(locale, 'ms_skill_cxr_title'),
      description: t(locale, 'ms_skill_cxr_desc'),
      examRelevance: "OSCE: 25% | M2: 20% | M3: 30%",
      keyPoints: [t(locale, 'ms_cxr_p1'), t(locale, 'ms_cxr_p2'), t(locale, 'ms_cxr_p3'), t(locale, 'ms_cxr_p4')]
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: t(locale, 'ms_skill_lab_title'),
      description: t(locale, 'ms_skill_lab_desc'),
      examRelevance: "OSCE: 15% | M2: 25% | M3: 20%",
      keyPoints: [t(locale, 'ms_lab_p1'), t(locale, 'ms_lab_p2'), t(locale, 'ms_lab_p3'), t(locale, 'ms_lab_p4')]
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: t(locale, 'ms_skill_bga_title'),
      description: t(locale, 'ms_skill_bga_desc'),
      examRelevance: "OSCE: 10% | M2: 10% | M3: 15%",
      keyPoints: [t(locale, 'ms_bga_p1'), t(locale, 'ms_bga_p2'), t(locale, 'ms_bga_p3'), t(locale, 'ms_bga_p4')]
    },
    {
      icon: <Scan className="w-6 h-6" />,
      title: t(locale, 'ms_skill_us_title'),
      description: t(locale, 'ms_skill_us_desc'),
      examRelevance: "OSCE: 10% | M2: 10% | M3: 15%",
      keyPoints: [t(locale, 'ms_us_p1'), t(locale, 'ms_us_p2'), t(locale, 'ms_us_p3'), t(locale, 'ms_us_p4')]
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: t(locale, 'ms_skill_exam_title'),
      description: t(locale, 'ms_skill_exam_desc'),
      examRelevance: "OSCE: 30% | M2: 20% | M3: 35%",
      keyPoints: [t(locale, 'ms_exam_p1'), t(locale, 'ms_exam_p2'), t(locale, 'ms_exam_p3'), t(locale, 'ms_exam_p4')]
    }
  ]

  const challenges = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: t(locale, 'ms_chal1_title'),
      description: t(locale, 'ms_chal1_desc')
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: t(locale, 'ms_chal2_title'), 
      description: t(locale, 'ms_chal2_desc')
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t(locale, 'ms_chal3_title'),
      description: t(locale, 'ms_chal3_desc')
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t(locale, 'ms_chal4_title'),
      description: t(locale, 'ms_chal4_desc')
    }
  ]

  const trainingMethods = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: t(locale, 'ms_train_case_title'),
      description: t(locale, 'ms_train_case_desc')
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t(locale, 'ms_train_group_title'),
      description: t(locale, 'ms_train_group_desc')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t(locale, 'ms_train_sim_title'),
      description: t(locale, 'ms_train_sim_desc')
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: t(locale, 'ms_train_sys_title'),
      description: t(locale, 'ms_train_sys_desc')
    }
  ]

  const examPreparation = [
    {
      exam: t(locale, 'ms_exam_osce_title'),
      description: t(locale, 'ms_exam_osce_desc'),
      skills: [t(locale, 'ms_exam_osce_s1'), t(locale, 'ms_exam_osce_s2'), t(locale, 'ms_exam_osce_s3'), t(locale, 'ms_exam_osce_s4'), t(locale, 'ms_exam_osce_s5')],
      duration: t(locale, 'ms_exam_osce_duration')
    },
    {
      exam: t(locale, 'ms_exam_m2_title'), 
      description: t(locale, 'ms_exam_m2_desc'),
      skills: [t(locale, 'ms_exam_m2_s1'), t(locale, 'ms_exam_m2_s2'), t(locale, 'ms_exam_m2_s3')],
      duration: t(locale, 'ms_exam_m2_duration')
    },
    {
      exam: t(locale, 'ms_exam_m3_title'),
      description: t(locale, 'ms_exam_m3_desc'),
      skills: [t(locale, 'ms_exam_m3_s1'), t(locale, 'ms_exam_m3_s2'), t(locale, 'ms_exam_m3_s3')],
      duration: t(locale, 'ms_exam_m3_duration')
    }
  ]

  const blackBookMention = {
    title: t(locale, 'ms_bb_title'),
    description: t(locale, 'ms_bb_desc'),
    features: [
      t(locale, 'ms_bb_f1'),
      t(locale, 'ms_bb_f2'), 
      t(locale, 'ms_bb_f3'),
      t(locale, 'ms_bb_f4'),
      t(locale, 'ms_bb_f5')
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold modern-heading leading-tight mb-6">
              <span className="text-black">{t(locale, 'ms_hero_title1')}</span>
              <br />
              <span className="text-[#0395A6]">{t(locale, 'ms_hero_title2')}</span>
            </h1>
            <p className="modern-text text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{t(locale, 'ms_hero_sub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <Users className="w-6 h-6 mr-3 inline-block" />
                {t(locale, 'home_cta_primary')}
              </a>
              <a
                href="#skills"
                className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <Stethoscope className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                {t(locale, 'ms_hero_cta_secondary')}
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
              {t(locale, 'ms_challenges_title1')} <span className="text-[#0395A6]">{t(locale, 'ms_challenges_title2')}</span> {t(locale, 'ms_challenges_title3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'ms_challenges_sub')}</p>
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

      {/* Medical Skills */}
      <section id="skills" className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'ms_skills_title1')} <span className="text-[#0395A6]">{t(locale, 'ms_skills_title2')}</span> {t(locale, 'ms_skills_title3')}
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'ms_skills_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="modern-card modern-animate-fade-in-up">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="modern-heading text-2xl mb-3">{skill.title}</h3>
                  <p className="modern-text text-gray-600 mb-4">{skill.description}</p>
                  <div className="bg-[#F8FAFC] rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-[#0395A6] mb-2">{t(locale, 'ms_relevance_label')}: {skill.examRelevance}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.keyPoints.map((point, pointIndex) => (
                        <span key={pointIndex} className="text-xs bg-white px-2 py-1 rounded-full text-[#0395A6]">
                          {point}
                        </span>
                      ))}
                    </div>
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
              {t(locale, 'ms_exam_title1')} <span className="text-[#0395A6]">{t(locale, 'ms_exam_title2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'ms_exam_sub')}</p>
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
                    <p className="modern-text text-gray-600 mb-4">{exam.description}</p>
                    <div className="bg-[#F8FAFC] rounded-lg p-4">
                      <p className="text-sm font-semibold text-[#0395A6] mb-2">{t(locale, 'ms_trained_label')}:</p>
                      <div className="flex flex-wrap gap-2">
                        {exam.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-white px-2 py-1 rounded-full text-[#0395A6]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training-Methoden */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'ms_training_title1')} <span className="text-[#0395A6]">{t(locale, 'ms_training_title2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'ms_training_sub')}</p>
          </div>
          
          <div className="modern-grid modern-grid-2 gap-8">
            {trainingMethods.map((method, index) => (
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

      {/* Black Book Erwähnung */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="modern-card text-center modern-animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-[#0395A6] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <BookMarked className="w-8 h-8" />
              </div>
              <h2 className="modern-heading text-3xl md:text-4xl mb-6">
                {blackBookMention.title}
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">
                {blackBookMention.description}
              </p>
              <div className="modern-grid modern-grid-2 gap-4 mb-8">
                {blackBookMention.features.map((feature, index) => (
                  <div key={index} className="flex items-start md:items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0395A6] flex-shrink-0 mt-0.5 md:mt-0" />
                    <span className="text-gray-700 flex-1 min-w-0">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="/downloads/black-book-ekg-roentgen.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
              >
                <BookMarked className="w-6 h-6 mr-3 inline-block" />
                {t(locale, 'ms_bb_cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="modern-section">
        <div className="modern-container">
          <div className="text-center mb-16">
            <h2 className="modern-heading text-3xl md:text-4xl mb-6">
              {t(locale, 'ms_testimonials_title1')} <span className="text-[#0395A6]">{t(locale, 'ms_testimonials_title2')}</span>
            </h2>
            <p className="modern-text text-lg text-gray-600 max-w-3xl mx-auto">{t(locale, 'ms_testimonials_sub')}</p>
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
                {t(locale, 'ms_cta_title1')} <span className="text-[#0395A6]">{t(locale, 'ms_cta_title2')}</span>
              </h2>
              <p className="modern-text text-lg text-gray-600 mb-8">{t(locale, 'ms_cta_sub')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <Users className="w-6 h-6 mr-3 inline-block" />
                  {t(locale, 'ms_cta_start')}
                </a>
                <Link
                  href="/coaching"
                  className="modern-button-secondary px-12 py-5 rounded-lg text-lg font-semibold inline-flex items-center justify-center group"
                >
                  <Stethoscope className="w-6 h-6 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                  {t(locale, 'ms_cta_overview')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
