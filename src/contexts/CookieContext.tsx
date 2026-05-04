'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { initializeAnalytics, initializeGoogleAdsTag } from '@/lib/cookieTagLoader'

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

const CONSENT_VERSION = '1.1.0'
const CONSENT_EXPIRY_DAYS = 180

function daysBetween(a: number, b: number) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24
  return Math.floor((b - a) / MS_PER_DAY)
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
    const savedVersion = localStorage.getItem('cookie-consent-version')
    const savedAt = localStorage.getItem('cookie-consent-savedAt')
    
    if (savedConsent !== null) {
      setCookieConsent(savedConsent === 'true')
      if (savedPreferences) {
        setCookiePreferences(JSON.parse(savedPreferences))
      }
      // re-prompt if version changed or expired
      const versionChanged = savedVersion !== CONSENT_VERSION
      const expired = savedAt ? daysBetween(Number(savedAt), Date.now()) > CONSENT_EXPIRY_DAYS : true
      if (versionChanged || expired) {
        setShowCookieBanner(true)
      }
    } else {
      setShowCookieBanner(true)
    }

    const handler = () => setShowCookieSettings(true)
    window.addEventListener('open-cookie-settings', handler as EventListener)
    return () => window.removeEventListener('open-cookie-settings', handler as EventListener)
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
    localStorage.setItem('cookie-consent-version', CONSENT_VERSION)
    localStorage.setItem('cookie-consent-savedAt', String(Date.now()))
    
    if (allAccepted.analytics) {
      initializeAnalytics()
    }
    if (allAccepted.marketing) {
      initializeGoogleAdsTag()
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
    localStorage.setItem('cookie-consent-version', CONSENT_VERSION)
    localStorage.setItem('cookie-consent-savedAt', String(Date.now()))
  }

  const savePreferences = (preferences: CookiePreferences) => {
    setCookieConsent(true)
    setCookiePreferences(preferences)
    setShowCookieBanner(false)
    setShowCookieSettings(false)
    
    localStorage.setItem('cookie-consent', 'true')
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences))
    localStorage.setItem('cookie-consent-version', CONSENT_VERSION)
    localStorage.setItem('cookie-consent-savedAt', String(Date.now()))
    
    if (preferences.analytics) {
      initializeAnalytics()
    }
    if (preferences.marketing) {
      initializeGoogleAdsTag()
    }
  }

  useEffect(() => {
    if (cookieConsent !== true) return
    if (cookiePreferences.analytics) {
      initializeAnalytics()
    }
    if (cookiePreferences.marketing) {
      initializeGoogleAdsTag()
    }
  }, [cookieConsent, cookiePreferences.analytics, cookiePreferences.marketing])

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
