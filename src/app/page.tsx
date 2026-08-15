import type { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'
import { buildMetadata } from '@/i18n/seo'
import {
  ArrowRight, MessageCircle, CheckCircle, Stethoscope, Smile, Globe,
  Brain, Users, Award, BookOpen,
} from 'lucide-react'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import HeroWithImage from '../components/HeroWithImage'
import StickyWhatsAppCTA from '../components/StickyWhatsAppCTA'
import JsonLd from '../components/JsonLd'
import { faqJsonLd } from '@/i18n/structured-data'
import { whatsappHref } from '@/lib/links'

// Mirrors the 11 visible Q&A pairs rendered by <FAQ /> below — kept in sync so
// the FAQPage schema only describes content that is actually visible on the page.
const HOME_FAQ = Array.from({ length: 11 }, (_, i) => ({
  q: `home_faq_q${i + 1}`,
  a: `home_faq_a${i + 1}`,
}))

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const locale = normalizeLocale(cookieStore.get('lang')?.value)
  return buildMetadata('home', locale)
}

export default async function HomePage() {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)

  const offers = [
    {
      icon: <Stethoscope className="w-7 h-7" />,
      title: t(locale, 'hp2_offer_med_title'),
      desc: t(locale, 'hp2_offer_med_desc'),
      href: '/coaching',
      chips: [
        { label: t(locale, 'nav_vorklinik'), href: '/vorklinik' },
        { label: t(locale, 'nav_klinik'), href: '/klinik' },
        { label: t(locale, 'nav_medical_skills'), href: '/medicalskills' },
        { label: t(locale, 'nav_examenskurse'), href: '/examenskurse' },
      ],
    },
    {
      icon: <Smile className="w-7 h-7" />,
      title: t(locale, 'hp2_offer_dent_title'),
      desc: t(locale, 'hp2_offer_dent_desc'),
      href: '/zahnmedizin',
      chips: [{ label: t(locale, 'nav_zahnmedizin'), href: '/zahnmedizin' }],
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: t(locale, 'hp2_offer_doc_title'),
      desc: t(locale, 'hp2_offer_doc_desc'),
      href: '/kenntnispruefung',
      chips: [
        { label: t(locale, 'nav_knowledge_exam'), href: '/kenntnispruefung' },
        { label: t(locale, 'nav_fachsprachpruefung'), href: '/fachsprachpruefung' },
      ],
    },
  ]

  const steps = [
    { n: '01', title: t(locale, 'home_process_step1_title'), text: t(locale, 'home_process_step1_text') },
    { n: '02', title: t(locale, 'home_process_step2_title'), text: t(locale, 'home_process_step2_text') },
    { n: '03', title: t(locale, 'home_process_step3_title'), text: t(locale, 'home_process_step3_text') },
  ]

  const reasons = [
    { icon: <Brain className="w-6 h-6" />, title: t(locale, 'home_sol1_title'), desc: t(locale, 'home_sol1_desc') },
    { icon: <Users className="w-6 h-6" />, title: t(locale, 'home_sol2_title'), desc: t(locale, 'home_sol2_desc') },
    { icon: <Award className="w-6 h-6" />, title: t(locale, 'home_sol3_title'), desc: t(locale, 'home_sol3_desc') },
  ]

  const stats = [
    { value: '94%', label: t(locale, 'home_trust_97_label'), desc: t(locale, 'home_trust_97_desc') },
    { value: '100+', label: t(locale, 'home_trust_500_label'), desc: t(locale, 'home_trust_500_desc') },
    { value: '6+', label: t(locale, 'home_trust_6_label'), desc: t(locale, 'home_trust_6_desc') },
  ]

  return (
    <div className="min-h-screen">
      <JsonLd data={faqJsonLd(locale, HOME_FAQ)} />
      <HeroWithImage />

      {/* ============ Angebote / Zielgruppen ============ */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="section-head center modern-spacing text-center">
            <span className="kicker">{t(locale, 'hp2_offer_kicker')}</span>
            <h2 className="section-title mt-4">{t(locale, 'hp2_offer_title')}</h2>
            <p className="section-lead mt-4 mx-auto">{t(locale, 'hp2_offer_sub')}</p>
          </div>

          <div className="modern-grid modern-grid-3">
            {offers.map((o, i) => (
              <div key={i} className="modern-card card-feature p-8 flex flex-col">
                <div className="icon-chip icon-chip-lg mb-6">{o.icon}</div>
                <h3 className="text-xl mb-3">{o.title}</h3>
                <p className="modern-text mb-6">{o.desc}</p>
                <div className="flex flex-wrap gap-2 mb-7 mt-auto">
                  {o.chips.map((c, j) => (
                    <Link
                      key={j}
                      href={c.href}
                      className="pill hover:bg-[var(--brand-tint-strong)] transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href={o.href}
                  className="inline-flex items-center gap-1.5 font-semibold text-[var(--brand-dark)] group"
                >
                  {t(locale, 'hp2_learn_more')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SEO-Band: Themen & interne Verlinkung ============ */}
      <section className="modern-section bg-white pt-0">
        <div className="modern-container">
          <div className="card-soft p-8 sm:p-10 lg:p-12">
            <span className="kicker">{t(locale, 'seo_band_kicker')}</span>
            <h2 className="section-title mt-4 max-w-3xl">{t(locale, 'seo_band_title')}</h2>
            <p className="section-lead mt-4 max-w-2xl">{t(locale, 'seo_band_lead')}</p>
            <div className="flex flex-wrap gap-2.5 mt-7">
              <Link href="/vorklinik" className="pill hover:bg-[var(--brand-tint-strong)] transition-colors">{t(locale, 'seo_band_link_physikum')}</Link>
              <Link href="/vorklinik" className="pill hover:bg-[var(--brand-tint-strong)] transition-colors">{t(locale, 'seo_band_link_abp')}</Link>
              <Link href="/klinik" className="pill hover:bg-[var(--brand-tint-strong)] transition-colors">{t(locale, 'seo_band_link_m2')}</Link>
              <Link href="/klinik" className="pill hover:bg-[var(--brand-tint-strong)] transition-colors">{t(locale, 'seo_band_link_m3')}</Link>
              <Link href="/examenskurse" className="pill hover:bg-[var(--brand-tint-strong)] transition-colors">{t(locale, 'seo_band_link_exam')}</Link>
              <Link href="/kenntnispruefung" className="pill hover:bg-[var(--brand-tint-strong)] transition-colors">{t(locale, 'seo_band_link_kp')}</Link>
              <Link href="/fachsprachpruefung" className="pill hover:bg-[var(--brand-tint-strong)] transition-colors">{t(locale, 'seo_band_link_fsp')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Prozess ============ */}
      <section className="modern-section bg-[var(--surface)]">
        <div className="modern-container">
          <div className="section-head center modern-spacing text-center">
            <span className="kicker">{t(locale, 'hp2_process_kicker')}</span>
            <h2 className="section-title mt-4">{t(locale, 'home_process_title')}</h2>
          </div>

          <div className="modern-grid modern-grid-3">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div
                  className="text-6xl font-semibold leading-none mb-5 text-[var(--brand)]/90"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.n}
                </div>
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="modern-text">{s.text}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 right-0 translate-x-1/2 text-[var(--border-strong)]">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Warum ultima-rat.io (konsolidiert) ============ */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="kicker">{t(locale, 'hp2_why_kicker')}</span>
              <h2 className="section-title mt-4">{t(locale, 'home_solution_title')}</h2>
              <p className="section-lead mt-5">{t(locale, 'home_solution_sub')}</p>
              <a
                href={whatsappHref('home')}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-7 py-4 text-base mt-8 group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t(locale, 'home_cta_primary')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="space-y-4">
              {reasons.map((r, i) => (
                <div key={i} className="modern-card p-6 flex gap-5 items-start">
                  <div className="icon-chip flex-shrink-0">{r.icon}</div>
                  <div>
                    <h3 className="text-lg mb-1.5">{r.title}</h3>
                    <p className="modern-text text-[0.97rem]">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat band */}
          <div className="card-soft mt-12 lg:mt-16 p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div
                  className="text-4xl sm:text-5xl font-semibold text-[var(--brand)] leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.value}
                </div>
                <div className="mt-3 font-bold text-[var(--ink)]">{s.label}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Testimonials ============ */}
      <section className="modern-section bg-[var(--surface)] pb-8 md:pb-16">
        <div className="modern-container">
          <div className="text-center mb-2">
            <span className="kicker">{t(locale, 'hp2_testi_kicker')}</span>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ============ Preise ============ */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="section-head center modern-spacing text-center">
            <span className="kicker">{t(locale, 'hp2_prices_kicker')}</span>
            <h2 className="section-title mt-4">{t(locale, 'home_prices_title')}</h2>
            <p className="section-lead mt-4 mx-auto">{t(locale, 'home_prices_sub')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Einzelcoaching */}
            <div className="modern-card card-feature p-8 sm:p-10 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl">{t(locale, 'home_singlecoaching')}</h3>
                <Award className="w-7 h-7 text-[var(--brand)]" />
              </div>
              <div className="flex items-end gap-1 mb-5">
                <span className="text-sm text-[var(--muted)] mb-2">ab</span>
                <span className="price-mobile">49€</span>
                <span className="text-sm text-[var(--muted)] mb-2">/ 60 min</span>
              </div>
              <p className="modern-text mb-8">{t(locale, 'home_price_single_desc')}</p>
              <a
                href={whatsappHref('home')}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-7 py-4 text-base mt-auto"
              >
                <MessageCircle className="w-5 h-5" />
                {t(locale, 'home_book_now')}
              </a>
            </div>

            {/* Gruppencoaching */}
            <div className="modern-card card-feature p-8 sm:p-10 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl">{t(locale, 'home_groupcoaching')}</h3>
                <Users className="w-7 h-7 text-[var(--brand)]" />
              </div>
              <div className="flex items-end gap-1 mb-5">
                <span className="text-sm text-[var(--muted)] mb-2">ab</span>
                <span className="price-mobile">35€</span>
                <span className="text-sm text-[var(--muted)] mb-2">/ 60 min</span>
              </div>
              <p className="modern-text mb-8">{t(locale, 'home_price_group_desc')}</p>
              <a
                href={whatsappHref('home')}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button-secondary px-7 py-4 text-base mt-auto"
              >
                <MessageCircle className="w-5 h-5" />
                {t(locale, 'home_book_now')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="modern-section bg-[var(--surface)]">
        <div className="modern-container">
          <div className="text-center mb-2">
            <span className="kicker">{t(locale, 'hp2_faq_kicker')}</span>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ============ Final CTA ============ */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center">
          <h2 className="section-title text-white">{t(locale, 'home_final_title')}</h2>
          <p className="section-lead mt-5 mx-auto max-w-2xl" style={{ color: 'rgba(255,255,255,0.82)' }}>
            {t(locale, 'home_final_sub')}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappHref('home')}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button px-8 py-4 text-base bg-white !text-[var(--ink)] hover:!bg-[var(--surface)]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t(locale, 'home_cta_primary')}</span>
            </a>
            <Link href="/coaching" className="button-ghost-light px-8 py-4 text-base">
              <BookOpen className="w-5 h-5" />
              <span>{t(locale, 'home_cta_secondary')}</span>
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className={`flex items-start gap-3 text-left ${n === 3 ? 'hidden md:flex' : ''}`}>
                <CheckCircle className="w-6 h-6 text-white/90 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-base mb-1">
                    {t(locale, `home_final_feature${n}_title`)}
                  </h3>
                  <p className="text-sm text-white/70">{t(locale, `home_final_feature${n}_desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StickyWhatsAppCTA />
    </div>
  )
}
