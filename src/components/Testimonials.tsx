'use client'

import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'

interface Testimonial {
  name: string
  exam: string
  result: string
  text: string
  rating: number
}

export default function Testimonials() {
  const [locale, setLocale] = useState<Locale>('de')
  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
  }, [])

  const testimonials: Testimonial[] = [
    {
      name: 'Marcel M.',
      exam: t(locale, 'home_testimonial_marcel_exam'),
      result: t(locale, 'home_testimonial_marcel_result'),
      text: t(locale, 'home_testimonial_marcel_text'),
      rating: 5,
    },
    {
      name: 'Bushra B.',
      exam: t(locale, 'home_testimonial_bushra_exam'),
      result: t(locale, 'home_testimonial_bushra_result'),
      text: t(locale, 'home_testimonial_bushra_text'),
      rating: 5,
    },
    {
      name: 'Victoria G.',
      exam: t(locale, 'home_testimonial_victoria_exam'),
      result: t(locale, 'home_testimonial_victoria_result'),
      text: t(locale, 'home_testimonial_victoria_text'),
      rating: 5,
    },
    {
      name: 'Marten K.',
      exam: t(locale, 'home_testimonial_marten_exam'),
      result: t(locale, 'home_testimonial_marten_result'),
      text: t(locale, 'home_testimonial_marten_text'),
      rating: 5,
    },
    {
      name: 'Angelina P.',
      exam: t(locale, 'home_testimonial_angelina_exam'),
      result: t(locale, 'home_testimonial_angelina_result'),
      text: t(locale, 'home_testimonial_angelina_text'),
      rating: 5,
    },
  ]

// (Entfernt doppelte Export-Deklaration – return gehört zum obigen Funktionskörper)
  return (
    <section className="modern-section bg-[#F8FAFC]">
      <div className="modern-container">
        <div className="text-center modern-spacing">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
            {t(locale, 'home_testimonials_title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
            {t(locale, 'home_testimonials_sub')}
          </p>
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 mx-4">
                <div className="modern-testimonial h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mb-6 modern-text flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <div className="flex justify-between items-end">
                      <div className="flex-1">
                        <p className="font-semibold text-black text-base">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.exam}</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-bold text-[#0395A6] text-base">{testimonial.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Static grid without carousel */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="modern-testimonial">
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                &ldquo;{testimonial.text.length > 120 ? testimonial.text.substring(0, 120) + '...' : testimonial.text}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <p className="font-semibold text-black text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.exam}</p>
                  </div>
                  <div className="text-right ml-2">
                    <p className="font-bold text-[#0395A6] text-xs">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="modern-card p-12 max-w-4xl mx-auto modern-animate-fade-in-up">
            <h3 className="text-lg font-bold text-black mb-5 modern-heading">
              {t(locale, 'home_testimonials_cta_title')}
            </h3>
            <p className="text-base text-gray-600 mb-6 modern-text">
              {t(locale, 'home_testimonials_cta_sub')}
            </p>
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button px-10 py-4 rounded-lg text-base font-semibold modern-focus inline-block"
            >
              {t(locale, 'home_testimonials_cta_button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
