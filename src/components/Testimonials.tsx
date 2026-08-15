'use client'

import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { whatsappHref } from '@/lib/links'

interface Testimonial {
  name: string
  exam: string
  text: string
  rating: number
}

const TEXT_PREVIEW_THRESHOLD = 200

function TestimonialBody({
  text,
  expanded,
  onToggle,
  locale,
  compact,
}: {
  text: string
  expanded: boolean
  onToggle: () => void
  locale: Locale
  compact: boolean
}) {
  const showToggle = text.length > TEXT_PREVIEW_THRESHOLD
  const clampClass = compact ? 'line-clamp-4' : 'line-clamp-5'

  return (
    <div className="min-h-0">
      <p
        className={`text-gray-700 modern-text whitespace-pre-line ${
          compact ? 'text-sm leading-snug' : 'text-sm md:text-[0.9375rem] leading-snug'
        } ${showToggle && !expanded ? clampClass : ''}`}
      >
        {text}
      </p>
      {showToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="mt-1.5 text-xs font-semibold text-[#0395A6] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0395A6]/40 rounded"
        >
          {expanded ? t(locale, 'home_testimonial_less') : t(locale, 'home_testimonial_more')}
        </button>
      )}
    </div>
  )
}

export default function Testimonials() {
  const [locale, setLocale] = useState<Locale>('de')
  const [expandedById, setExpandedById] = useState<Record<number, boolean>>({})

  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
  }, [])

  const testimonials: Testimonial[] = [
    {
      name: t(locale, 'home_testimonial_andrei_name'),
      exam: t(locale, 'home_testimonial_andrei_exam'),
      text: t(locale, 'home_testimonial_andrei_text'),
      rating: 5,
    },
    {
      name: t(locale, 'home_testimonial_melissa_name'),
      exam: t(locale, 'home_testimonial_melissa_exam'),
      text: t(locale, 'home_testimonial_melissa_text'),
      rating: 5,
    },
    {
      name: t(locale, 'home_testimonial_nataliya_name'),
      exam: t(locale, 'home_testimonial_nataliya_exam'),
      text: t(locale, 'home_testimonial_nataliya_text'),
      rating: 5,
    },
    {
      name: 'Marcel M.',
      exam: t(locale, 'home_testimonial_marcel_exam'),
      text: t(locale, 'home_testimonial_marcel_text'),
      rating: 5,
    },
    {
      name: 'Bushra B.',
      exam: t(locale, 'home_testimonial_bushra_exam'),
      text: t(locale, 'home_testimonial_bushra_text'),
      rating: 5,
    },
    {
      name: 'Victoria G.',
      exam: t(locale, 'home_testimonial_victoria_exam'),
      text: t(locale, 'home_testimonial_victoria_text'),
      rating: 5,
    },
    {
      name: 'Marten K.',
      exam: t(locale, 'home_testimonial_marten_exam'),
      text: t(locale, 'home_testimonial_marten_text'),
      rating: 5,
    },
    {
      name: 'Angelina P.',
      exam: t(locale, 'home_testimonial_angelina_exam'),
      text: t(locale, 'home_testimonial_angelina_text'),
      rating: 5,
    },
  ]

  const toggleExpanded = (id: number) => {
    setExpandedById((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div>
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-0 modern-heading modern-animate-fade-in-up">
          {t(locale, 'home_testimonials_title')}
        </h2>
      </div>

      {/* Desktop: Carousel */}
      <div className="hidden md:block relative overflow-hidden">
        <div className="flex animate-scroll">
          {[...testimonials, ...testimonials].map((testimonial, index) => {
            const id = index % testimonials.length
            return (
              <div key={index} className="flex-shrink-0 w-[17.5rem] mx-2.5">
                <div className="modern-testimonial testimonial-compact h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" />
                    ))}
                  </div>
                  <div className="mb-3 flex-grow min-h-0">
                    <TestimonialBody
                      text={testimonial.text}
                      expanded={!!expandedById[id]}
                      onToggle={() => toggleExpanded(id)}
                      locale={locale}
                      compact={false}
                    />
                  </div>
                  <div className="border-t border-gray-100 pt-2.5 mt-auto">
                    <p className="font-semibold text-black text-sm leading-tight">{testimonial.name}</p>
                    <p className="text-xs text-gray-600 leading-tight mt-0.5">{testimonial.exam}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile: Static grid */}
      <div className="md:hidden grid grid-cols-1 gap-3">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div key={index} className="modern-testimonial testimonial-compact">
            <div className="flex items-center gap-0.5 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" />
              ))}
            </div>
            <TestimonialBody
              text={testimonial.text}
              expanded={!!expandedById[index]}
              onToggle={() => toggleExpanded(index)}
              locale={locale}
              compact
            />
            <div className="border-t border-gray-100 pt-2.5 mt-3">
              <p className="font-semibold text-black text-sm leading-tight">{testimonial.name}</p>
              <p className="text-xs text-gray-600 leading-tight mt-0.5">{testimonial.exam}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 md:mt-12">
        <div className="modern-card p-8 md:p-12 max-w-4xl mx-auto modern-animate-fade-in-up">
          <h3 className="text-lg font-bold text-black mb-4 modern-heading">
            {t(locale, 'home_testimonials_cta_title')}
          </h3>
          <p className="text-base text-gray-600 mb-5 modern-text">
            {t(locale, 'home_testimonials_cta_sub')}
          </p>
          <a
            href={whatsappHref('home')}
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button px-10 py-4 rounded-lg text-base font-semibold modern-focus inline-block"
          >
            {t(locale, 'home_testimonials_cta_button')}
          </a>
        </div>
      </div>
    </div>
  )
}
