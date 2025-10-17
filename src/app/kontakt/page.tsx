'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle, Instagram, MessageSquare, MailOpen } from 'lucide-react'

export default function KontaktPage() {
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
        const errorMessage = data.message || 'Senden fehlgeschlagen'
        alert(`${errorMessage}\n\nBitte nutzen Sie stattdessen:\n• WhatsApp: http://wa.me/491639347633\n• E-Mail: info@ultima-rat.io`)
        return
      }
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 4000)
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Verbindungsfehler. Bitte nutzen Sie stattdessen:\n• WhatsApp: http://wa.me/491639347633\n• E-Mail: info@ultima-rat.io')
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
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0395A6] text-white font-semibold mb-12 modern-animate-fade-in">
              <MessageCircle className="w-5 h-5 mr-2" />
              Kontakt aufnehmen
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 modern-heading leading-tight modern-animate-fade-in-up px-2 sm:px-4">
              Lass uns gemeinsam<br />
              <span className="text-[#0395A6]">deine Prüfung bestehen</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up px-2 sm:px-4">
              Hast du Fragen zu unserem Coaching? Möchtest du einen Termin vereinbaren? 
              Wir sind für dich da und helfen gerne weiter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Kontaktmöglichkeiten
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Wähle den für dich bequemsten Weg
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="w-16 h-16 text-[#0395A6]" />
              </div>
              <h3 className="text-lg font-bold text-black mb-6 modern-heading">WhatsApp</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Schnell und unkompliziert. Schreib uns direkt über WhatsApp.
              </p>
              <a
                href="http://wa.me/491639347633"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-8 py-4 rounded-lg text-lg font-semibold modern-focus inline-block"
              >
                WhatsApp öffnen
              </a>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="flex items-center justify-center mx-auto mb-8">
                <MailOpen className="w-16 h-16 text-[#0395A6]" />
              </div>
              <h3 className="text-lg font-bold text-black mb-6 modern-heading">E-Mail</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Schreib uns eine E-Mail. Wir antworten innerhalb von 24 Stunden.
              </p>
              <a
                href="mailto:info@ultima-rat.io"
                className="modern-button-secondary px-8 py-4 rounded-lg text-lg font-semibold modern-focus inline-block"
              >
                info@ultima-rat.io
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="modern-section bg-[#F8FAFC]">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Kontaktformular
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Sende uns eine Nachricht
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-lg font-bold text-black mb-4">Nachricht gesendet!</h3>
                  <p className="text-lg text-gray-600">
                    Vielen Dank für deine Nachricht. Wir melden uns schnellstmöglich bei dir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base"
                        placeholder="Dein Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base"
                        placeholder="+49 123 456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                        Betreff *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="coaching">Coaching buchen</option>
                        <option value="kenntnispruefung">Kenntnisprüfung</option>
                        <option value="physikum">Physikum</option>
                        <option value="m2">M2</option>
                        <option value="m3">M3</option>
                        <option value="fragen">Allgemeine Fragen</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus text-sm sm:text-base resize-none"
                      placeholder="Beschreibe dein Anliegen..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto modern-button px-6 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold modern-focus group"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 inline-block group-hover:translate-x-1 transition-transform" />
                      Nachricht senden
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
              Kontaktdaten
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Alle wichtigen Informationen auf einen Blick
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <h3 className="text-lg font-bold text-black mb-8 modern-heading">Kontakt</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-[#0395A6] mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Adresse</p>
                    <p className="text-gray-600">Warburghof 14, 30627 Hannover, Deutschland</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#0395A6] mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Telefon</p>
                    <p className="text-gray-600">+49 163 9347633</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#0395A6] mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">E-Mail</p>
                    <p className="text-gray-600">info@ultima-rat.io</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-[#0395A6] mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Erreichbarkeit</p>
                    <p className="text-gray-600">Mo-So: 00:00-24:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <h3 className="text-lg font-bold text-black mb-8 modern-heading">Schnellkontakt</h3>
              <div className="space-y-6">
                <a
                  href="http://wa.me/491639347633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all group"
                >
                  <MessageCircle className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <p className="font-semibold text-black">WhatsApp</p>
                    <p className="text-gray-600">Sofortige Antwort</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/ultimarat.io?igsh=MXgxeHphbndoYjhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-all group"
                >
                  <Instagram className="w-6 h-6 text-pink-600 mr-4" />
                  <div>
                    <p className="font-semibold text-black">Instagram</p>
                    <p className="text-gray-600">Direkter Kontakt</p>
                  </div>
                </a>
                <a
                  href="mailto:info@ultima-rat.io"
                  className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all group"
                >
                  <Mail className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-semibold text-black">E-Mail</p>
                    <p className="text-gray-600">Detaillierte Anfrage</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta modern-section">
        <div className="modern-container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            BEREIT ZU STARTEN?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            Kontaktiere uns noch heute.
          </p>
          <p className="text-lg text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            Kostenloses Erstgespräch, individuelle Beratung und flexible Terminvergabe. 
            Wir helfen dir gerne bei deiner Prüfungsvorbereitung.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-lg font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
          >
            <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
            Kostenloses Erstgespräch
          </a>
        </div>
      </section>
    </div>
  )
}