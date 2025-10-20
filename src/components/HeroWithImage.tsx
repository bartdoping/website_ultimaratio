'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Award, MessageCircle, ArrowRight, Target } from 'lucide-react'

export default function HeroWithImage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-medical.jpg"
          alt="Medizinstudent beim Lernen - Verzweiflung und Überforderung"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 modern-container text-center text-white">
        {/* Trust Badge */}
        <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0395A6] text-white font-semibold mb-8 modern-animate-fade-in">
          <Award className="w-5 h-5 mr-2" />
          Über 500 erfolgreiche Prüfungen
        </div>
        
        {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-12 modern-heading leading-tight modern-animate-fade-in-up">
              <span className="block text-white">Schluss mit</span>
              <span className="block text-white">Prüfungsangst</span>
              <span className="block text-white">und Durchfallen!</span>
            </h1>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed modern-animate-fade-in-up">
          <span className="font-semibold text-white">97% unserer Studenten bestehen ihre Prüfungen</span><br />
          mit unserer bewährten Methode. Auch du kannst es schaffen!
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 modern-animate-fade-in-up">
            <a
              href="http://wa.me/491639347633"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0395A6] hover:bg-[#028A9A] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-lg text-lg sm:text-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 group shadow-2xl hover:shadow-lg hover:scale-[1.02]"
            >
            <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
            <span>JETZT KOSTENLOS STARTEN</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/coaching"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 hover:border-white px-8 sm:px-12 py-4 sm:py-6 rounded-lg text-lg sm:text-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 group"
          >
            <span>Coaching entdecken</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto modern-animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">97%</div>
            <p className="text-white/90 font-semibold">Erfolgsquote</p>
            <p className="text-white/70 text-sm">Bewiesen durch 500+ Prüfungen</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">500+</div>
            <p className="text-white/90 font-semibold">Erfolgreiche Prüfungen</p>
            <p className="text-white/70 text-sm">Von Vorklinik bis M3</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">6+</div>
            <p className="text-white/90 font-semibold">Jahre Erfahrung</p>
            <p className="text-white/70 text-sm">Approbierte Ärzte als Coaches</p>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 max-w-2xl mx-auto modern-animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 text-white font-bold">
            <Target className="w-5 h-5" />
            <span>✓ Kostenloses Erstgespräch für alle</span>
          </div>
          <p className="text-white/90 text-sm mt-2">
            Unverbindlich, professionell, sofort verfügbar
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
