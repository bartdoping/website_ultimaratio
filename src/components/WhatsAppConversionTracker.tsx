'use client'

import { useEffect } from 'react'

/** Env überschreibbar; Standard = Google Ads Conversion „WhatsApp-Klick“ */
const DEFAULT_SEND_TO = 'AW-17361559732/cy0FCK3GzKccELTB0dZA'

function getSendTo(): string {
  return process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_SEND_TO ?? DEFAULT_SEND_TO
}

function isMarketingConsentGranted(): boolean {
  try {
    const raw = localStorage.getItem('cookie-preferences')
    if (!raw) return false
    const prefs = JSON.parse(raw) as { marketing?: boolean }
    return prefs.marketing === true
  } catch {
    return false
  }
}

function isWhatsAppLeadLink(href: string): boolean {
  try {
    const u = new URL(href)
    const host = u.hostname.replace(/^www\./i, '').toLowerCase()
    if (host !== 'wa.me') return false
    return u.pathname.replace(/^\//, '').includes('491639347633')
  } catch {
    return false
  }
}

/**
 * Erfasst Google-Ads-Conversion bei Klick auf Links zu unserer WhatsApp-Nummer.
 * Nur wenn Marketing-Cookies akzeptiert wurden und gtag geladen ist.
 */
export default function WhatsAppConversionTracker() {
  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      const el = e.target
      if (!(el instanceof Element)) return
      const a = el.closest('a')
      if (!a || !a.href) return
      if (!isWhatsAppLeadLink(a.href)) return
      if (!isMarketingConsentGranted()) return
      const gtagFn = window.gtag
      if (typeof gtagFn !== 'function') return

      gtagFn('event', 'conversion', {
        send_to: getSendTo(),
      })
    }

    document.addEventListener('click', onClickCapture, true)
    return () => document.removeEventListener('click', onClickCapture, true)
  }, [])

  return null
}
