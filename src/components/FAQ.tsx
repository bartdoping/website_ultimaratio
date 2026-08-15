'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { t } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { whatsappHref } from '@/lib/links'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [locale, setLocale] = useState<Locale>('de')
  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
  }, [])

  const faqData: FAQItem[] = [
    { question: t(locale, 'home_faq_q1'), answer: t(locale, 'home_faq_a1') },
    { question: t(locale, 'home_faq_q2'), answer: t(locale, 'home_faq_a2') },
    { question: t(locale, 'home_faq_q3'), answer: t(locale, 'home_faq_a3') },
    { question: t(locale, 'home_faq_q4'), answer: t(locale, 'home_faq_a4') },
    { question: t(locale, 'home_faq_q5'), answer: t(locale, 'home_faq_a5') },
    { question: t(locale, 'home_faq_q6'), answer: t(locale, 'home_faq_a6') },
    { question: t(locale, 'home_faq_q7'), answer: t(locale, 'home_faq_a7') },
    { question: t(locale, 'home_faq_q8'), answer: t(locale, 'home_faq_a8') },
    { question: t(locale, 'home_faq_q9'), answer: t(locale, 'home_faq_a9') },
    { question: t(locale, 'home_faq_q10'), answer: t(locale, 'home_faq_a10') },
    { question: t(locale, 'home_faq_q11'), answer: t(locale, 'home_faq_a11') },
  ]

  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="modern-section bg-white">
      <div className="modern-container">
        <div className="text-center modern-spacing">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
            {t(locale, 'home_faq_title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
            {t(locale, 'home_faq_sub')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="modern-faq">
              <div 
                className="modern-faq-question"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-semibold text-black">{item.question}</span>
                <ChevronDown 
                  className={`faq-icon w-6 h-6 text-[#0395A6] ${
                    openItems.includes(index) ? 'rotated' : ''
                  }`}
                />
              </div>
              <div className={`modern-faq-answer ${openItems.includes(index) ? 'open' : ''}`}>
                <p className="text-lg text-gray-700 leading-relaxed modern-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8 modern-text">
            {t(locale, 'contact_hero_p')}
          </p>
          <a
            href={whatsappHref('faq')}
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button px-12 py-5 rounded-lg text-lg font-semibold modern-focus inline-block"
          >
            {t(locale, 'home_cta_primary')}
          </a>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-500 text-sm leading-relaxed max-w-4xl mx-auto">
              {t(locale, 'legal_disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
