'use client'

import { useEffect, useState } from 'react'
import { normalizeLocale, type Locale } from '@/i18n/locales'
import { t } from '@/i18n/dictionaries'
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle, Instagram, MessageSquare, MailOpen } from 'lucide-react'

export default function KontaktPage() {
  const [locale, setLocale] = useState<Locale>('de')
  useEffect(() => {
    try {
      const v = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1]
      setLocale(normalizeLocale(v))
    } catch {}
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      
      if (!res.ok || !data.ok) {
        const errorMessage = data.message || t(locale, 'contact_send_failed')
        alert(`${errorMessage}\n\n${t(locale, 'contact_use_instead')}`)
        return
      }
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 4000)
    } catch (error) {
      console.error('Contact form error:', error)
      alert(`${t(locale, 'contact_connection_error')}\n\n${t(locale, 'contact_use_instead')}`)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-hero modern-section">
        <div className="modern-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t(locale, 'contact_badge')}
            </div>
            
            <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black mb-6 sm:mb-8 modern-heading leading-tight modern-animate-fade-in-up px-2 sm:px-4">
              {t(locale, 'contact_hero_heading')}
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up px-2 sm:px-4">
              {t(locale, 'contact_hero_p')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'contact_methods_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'contact_methods_sub')}
            </p>
          </div>

          <div className="w-full px-4 md:max-w-6xl md:mx-auto md:px-0">
            <div className="modern-grid modern-grid-2 gap-4 md:gap-8">
              <div className="modern-card p-4 md:p-12 text-center modern-animate-fade-in-up">
              <div className="flex items-center justify-center mx-auto mb-3 md:mb-8">
                <MessageSquare className="w-8 h-8 md:w-16 md:h-16 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-lg font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'contact_whatsapp_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6">
                {t(locale, 'contact_whatsapp_p')}
              </p>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-3 md:px-8 py-2 md:py-4 rounded-lg text-xs md:text-lg font-semibold modern-focus inline-block"
              >
                {t(locale, 'contact_whatsapp_cta')}
              </a>
            </div>

              <div className="modern-card p-4 md:p-12 text-center modern-animate-fade-in-up">
              <div className="flex items-center justify-center mx-auto mb-3 md:mb-8">
                <MailOpen className="w-8 h-8 md:w-16 md:h-16 text-[#0395A6]" />
              </div>
              <h3 className="text-xs md:text-lg font-bold text-black mb-2 md:mb-6 modern-heading">{t(locale, 'contact_email_title')}</h3>
              <p className="text-xs md:text-lg text-gray-600 leading-relaxed modern-text mb-2 md:mb-6">
                {t(locale, 'contact_email_p')}
              </p>
              <a
                href="mailto:info@ultima-rat.io"
                className="modern-button-secondary px-3 md:px-8 py-2 md:py-4 rounded-lg text-xs md:text-lg font-semibold modern-focus inline-block"
              >
                info@ultima-rat.io
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'contact_form_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'contact_form_sub')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-lg font-bold text-black mb-4">{t(locale, 'contact_sent_title')}</h3>
                  <p className="text-lg text-gray-600">{t(locale, 'contact_sent_p')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                        {t(locale, 'contact_name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base"
                        placeholder={t(locale, 'contact_name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                        {t(locale, 'contact_email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base"
                      placeholder={t(locale, 'contact_email_ph')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                        {t(locale, 'contact_phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base"
                        placeholder={t(locale, 'contact_phone_ph')}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                        {t(locale, 'contact_subject')}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base"
                      >
                        <option value="">{t(locale, 'contact_subject_choose')}</option>
                        <option value="coaching">{t(locale, 'contact_subject_coaching')}</option>
                        <option value="kenntnispruefung">{t(locale, 'contact_subject_kp')}</option>
                        <option value="physikum">{t(locale, 'contact_subject_physikum')}</option>
                        <option value="m2">{t(locale, 'contact_subject_m2')}</option>
                        <option value="m3">{t(locale, 'contact_subject_m3')}</option>
                        <option value="fragen">{t(locale, 'contact_subject_general')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                      {t(locale, 'contact_message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base resize-none"
                      placeholder={t(locale, 'contact_message_ph')}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto modern-button px-6 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold modern-focus group"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                      {t(locale, 'contact_send')}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              {t(locale, 'contact_info_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              {t(locale, 'contact_info_sub')}
            </p>
          </div>

          <div className="w-full px-4 md:max-w-6xl md:mx-auto md:px-0">
            <div className="modern-grid modern-grid-2 gap-4 md:gap-8">
              <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <h3 className="text-xs md:text-lg font-bold text-black mb-3 md:mb-8 modern-heading">{t(locale, 'contact_box_title')}</h3>
              <div className="space-y-2 md:space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black text-xs md:text-base">{t(locale, 'contact_address')}</p>
                    <p className="text-gray-600 text-xs md:text-base">{t(locale, 'contact_address_value')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-3 h-3 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black text-xs md:text-base">{t(locale, 'contact_phone_label')}</p>
                    <p className="text-gray-600 text-xs md:text-base">+49 163 9347633</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-3 h-3 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black text-xs md:text-base">{t(locale, 'contact_email_label')}</p>
                    <p className="text-gray-600 text-xs md:text-base">info@ultima-rat.io</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 md:w-6 md:h-6 text-[#0395A6] mr-2 md:mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black text-xs md:text-base">{t(locale, 'contact_hours')}</p>
                    <p className="text-gray-600 text-xs md:text-base">{t(locale, 'contact_hours_value')}</p>
                  </div>
                </div>
              </div>
            </div>

              <div className="modern-card p-4 md:p-12 modern-animate-fade-in-up">
              <h3 className="text-xs md:text-lg font-bold text-black mb-3 md:mb-8 modern-heading">{t(locale, 'contact_quick_title')}</h3>
              <div className="space-y-2 md:space-y-6">
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-1.5 md:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all group"
                >
                  <MessageCircle className="w-3 h-3 md:w-6 md:h-6 text-green-600 mr-1.5 md:mr-4" />
                  <div>
                    <p className="font-semibold text-black text-xs md:text-base">{t(locale, 'contact_quick_whatsapp')}</p>
                    <p className="text-gray-600 text-xs md:text-sm">{t(locale, 'contact_quick_whatsapp_sub')}</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/ultimarat.io?igsh=MXgxeHphbndoYjhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-1.5 md:p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-all group"
                >
                  <Instagram className="w-3 h-3 md:w-6 md:h-6 text-pink-600 mr-1.5 md:mr-4" />
                  <div>
                    <p className="font-semibold text-black text-xs md:text-base">{t(locale, 'contact_quick_instagram')}</p>
                    <p className="text-gray-600 text-xs md:text-sm">{t(locale, 'contact_quick_instagram_sub')}</p>
                  </div>
                </a>
                <a
                  href="mailto:info@ultima-rat.io"
                  className="flex items-center p-1.5 md:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all group"
                >
                  <Mail className="w-3 h-3 md:w-6 md:h-6 text-purple-600 mr-1.5 md:mr-4" />
                  <div>
                    <p className="font-semibold text-black text-xs md:text-base">{t(locale, 'contact_quick_email')}</p>
                    <p className="text-gray-600 text-xs md:text-sm">{t(locale, 'contact_quick_email_sub')}</p>
                  </div>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            {t(locale, 'contact_cta_title')}
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            {t(locale, 'contact_cta_p1')}
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            {t(locale, 'contact_cta_p2')}
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
          >
            <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
            {t(locale, 'contact_cta_button')}
          </a>
        </div>
      </section>
    </div>
  )
}