'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

interface CookieContextType {
  cookieConsent: boolean | null
  cookiePreferences: CookiePreferences
  showCookieBanner: boolean
  showCookieSettings: boolean
  acceptAll: () => void
  rejectAll: () => void
  savePreferences: (preferences: CookiePreferences) => void
  openCookieSettings: () => void
  closeCookieSettings: () => void
  updateCookiePreference: (category: keyof CookiePreferences, value: boolean) => void
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
}

export function CookieProvider({ children }: { children: ReactNode }) {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null)
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(defaultPreferences)
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const [showCookieSettings, setShowCookieSettings] = useState(false)

  // Load saved preferences on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent')
    const savedPreferences = localStorage.getItem('cookie-preferences')
    
    if (savedConsent !== null) {
      setCookieConsent(savedConsent === 'true')
      if (savedPreferences) {
        setCookiePreferences(JSON.parse(savedPreferences))
      }
    } else {
      setShowCookieBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    
    setCookieConsent(true)
    setCookiePreferences(allAccepted)
    setShowCookieBanner(false)
    
    localStorage.setItem('cookie-consent', 'true')
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted))
    
    // Initialize analytics if accepted
    if (allAccepted.analytics) {
      initializeAnalytics()
    }
  }

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    
    setCookieConsent(false)
    setCookiePreferences(onlyNecessary)
    setShowCookieBanner(false)
    
    localStorage.setItem('cookie-consent', 'false')
    localStorage.setItem('cookie-preferences', JSON.stringify(onlyNecessary))
  }

  const savePreferences = (preferences: CookiePreferences) => {
    setCookieConsent(true)
    setCookiePreferences(preferences)
    setShowCookieBanner(false)
    setShowCookieSettings(false)
    
    localStorage.setItem('cookie-consent', 'true')
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences))
    
    // Initialize analytics if accepted
    if (preferences.analytics) {
      initializeAnalytics()
    }
  }

  const openCookieSettings = () => {
    setShowCookieSettings(true)
  }

  const closeCookieSettings = () => {
    setShowCookieSettings(false)
  }

  const updateCookiePreference = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return // Cannot disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [category]: value
    }))
  }

  const initializeAnalytics = () => {
    // Here you would initialize Google Analytics or other analytics tools
    // For now, we'll just log that analytics are enabled
    console.log('Analytics initialized')
  }

  const value: CookieContextType = {
    cookieConsent,
    cookiePreferences,
    showCookieBanner,
    showCookieSettings,
    acceptAll,
    rejectAll,
    savePreferences,
    openCookieSettings,
    closeCookieSettings,
    updateCookiePreference,
  }

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  )
}

export function useCookies() {
  const context = useContext(CookieContext)
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider')
  }
  return context
}
