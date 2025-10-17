'use client'

import { useState, useEffect } from 'react'
import { X, Download, Heart, BookOpen } from 'lucide-react'

export default function BlackBookPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 300)
  }

  const handleDownload = () => {
    // Download the Black Book PDF
    const link = document.createElement('a')
    link.href = '/downloads/black-book-ekg-roentgen.pdf'
    link.download = 'ultima-rat-black-book-ekg-roentgen.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Close popup after download
    handleClose()
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#0395A6] bg-opacity-10 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-[#0395A6]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-black text-center mb-4">
              Kostenloses Black Book
            </h3>

            {/* Description */}
            <div className="text-center mb-6">
              <p className="text-lg text-gray-600 mb-4">
                Über 100 EKG- und Röntgen-Thorax-Bilder aller klinisch und prüfungsrelevanten Pathologien
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                <Heart className="w-4 h-4 text-red-500 mr-2" />
                <span>Strukturiert • Detailliert • Kostenlos</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#0395A6] rounded-full mr-3"></div>
                <span>Über 100 klinische Bilder</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#0395A6] rounded-full mr-3"></div>
                <span>Detaillierte Erklärungen</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#0395A6] rounded-full mr-3"></div>
                <span>Prüfungsrelevante Pathologien</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[#0395A6] rounded-full mr-3"></div>
                <span>Strukturierte Übersicht</span>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-[#0395A6] hover:bg-[#028A9A] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Kostenlos herunterladen
            </button>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-center mt-4">
              PDF-Download • Keine Anmeldung erforderlich
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
