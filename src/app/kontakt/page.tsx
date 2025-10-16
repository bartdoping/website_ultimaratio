'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde normalerweise die Formular-Logik stehen
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
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
            
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 modern-heading leading-tight modern-animate-fade-in-up">
              Lassen Sie uns<br />
              <span className="text-[#0395A6]">sprechen</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed modern-text modern-animate-fade-in-up">
              Haben Sie Fragen zu unserem Coaching? Möchten Sie einen Termin vereinbaren? 
              Wir sind für Sie da und helfen gerne weiter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="modern-section bg-white">
        <div className="modern-container">
          <div className="text-center modern-spacing">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Kontaktmöglichkeiten
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Wählen Sie den für Sie bequemsten Weg
            </p>
          </div>

          <div className="modern-grid modern-grid-3">
            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
                <MessageCircle className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 modern-heading">WhatsApp</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Schnell und unkompliziert. Schreiben Sie uns direkt über WhatsApp.
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
              <div className="w-20 h-20 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Phone className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 modern-heading">Telefon</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Rufen Sie uns direkt an. Mo-Fr von 9:00-18:00 Uhr.
              </p>
              <a
                href="tel:+491639347633"
                className="modern-button-secondary px-8 py-4 rounded-lg text-lg font-semibold modern-focus inline-block"
              >
                +49 163 9347633
              </a>
            </div>

            <div className="modern-card p-12 text-center modern-animate-fade-in-up">
              <div className="w-20 h-20 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="w-10 h-10 text-[#0395A6]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 modern-heading">E-Mail</h3>
              <p className="text-lg text-gray-600 leading-relaxed modern-text mb-6">
                Schreiben Sie uns eine E-Mail. Wir antworten innerhalb von 24 Stunden.
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
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Kontaktformular
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Senden Sie uns eine Nachricht
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-black mb-4">Nachricht gesendet!</h3>
                  <p className="text-lg text-gray-600">
                    Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="modern-grid modern-grid-2">
                    <div>
                      <label htmlFor="name" className="block text-lg font-semibold text-black mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-semibold text-black mb-3">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="modern-grid modern-grid-2">
                    <div>
                      <label htmlFor="phone" className="block text-lg font-semibold text-black mb-3">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus"
                        placeholder="+49 123 456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-lg font-semibold text-black mb-3">
                        Betreff *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus"
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
                    <label htmlFor="message" className="block text-lg font-semibold text-black mb-3">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0395A6] focus:border-transparent transition-all modern-focus"
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="modern-button px-12 py-4 rounded-lg text-lg font-semibold modern-focus group"
                    >
                      <Send className="w-5 h-5 mr-3 inline-block group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 modern-heading modern-animate-fade-in-up">
              Kontaktdaten
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto modern-text modern-animate-fade-in-up">
              Alle wichtigen Informationen auf einen Blick
            </p>
          </div>

          <div className="modern-grid modern-grid-2">
            <div className="modern-card p-12 modern-animate-fade-in-up">
              <h3 className="text-2xl font-bold text-black mb-8 modern-heading">Kontakt</h3>
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
                    <p className="font-semibold text-black">Öffnungszeiten</p>
                    <p className="text-gray-600">Mo-Fr: 9:00-18:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modern-card p-12 modern-animate-fade-in-up">
              <h3 className="text-2xl font-bold text-black mb-8 modern-heading">Schnellkontakt</h3>
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
                  href="tel:+491639347633"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all group"
                >
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-black">Anrufen</p>
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
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 modern-heading modern-animate-fade-in-up">
            BEREIT ZU STARTEN?
          </h2>
          <p className="text-3xl text-white text-opacity-90 mb-8 modern-animate-fade-in-up">
            Kontaktieren Sie uns noch heute.
          </p>
          <p className="text-xl text-white text-opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
            Kostenloses Erstgespräch, individuelle Beratung und flexible Terminvergabe. 
            Wir helfen Ihnen gerne bei Ihrer Prüfungsvorbereitung.
          </p>
          <a
            href="http://wa.me/491639347633"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0395A6] hover:bg-gray-100 px-12 py-5 rounded-lg text-xl font-semibold transition-all modern-focus inline-block group modern-animate-fade-in-up"
          >
            <MessageCircle className="w-6 h-6 mr-3 inline-block group-hover:animate-pulse" />
            Kostenloses Erstgespräch
          </a>
        </div>
      </section>
    </div>
  )
}