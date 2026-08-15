'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  GOOGLE_ADS_ID,
  WHATSAPP_CONVERSION_SEND_TO,
  whatsappDestinationUrl,
} from '@/lib/links'
import { initializeGoogleAdsTag } from '@/lib/cookieTagLoader'

function hasMarketingConsent(): boolean {
  try {
    const raw = localStorage.getItem('cookie-preferences')
    if (!raw) return false
    const prefs = JSON.parse(raw) as { marketing?: boolean }
    return prefs.marketing === true
  } catch {
    return false
  }
}

function WhatsAppStartInner() {
  const searchParams = useSearchParams()
  const ref = searchParams.get('ref')

  useEffect(() => {
    let done = false
    const ziel = whatsappDestinationUrl(ref)

    const weiter = () => {
      if (done) return
      done = true
      window.location.replace(ziel)
    }

    const fireConversion = () => {
      const gtagFn = window.gtag
      if (typeof gtagFn === 'function') {
        gtagFn('event', 'conversion', {
          send_to: WHATSAPP_CONVERSION_SEND_TO,
          event_callback: weiter,
        })
        return true
      }
      return false
    }

    // Nur bei Marketing-Einwilligung Tag laden / Conversion feuern (DSGVO).
    // Ohne Consent oder bei Adblocker greift der Fallback-Timeout.
    let poll: number | undefined
    if (hasMarketingConsent()) {
      initializeGoogleAdsTag()
      if (!fireConversion()) {
        let attempts = 0
        poll = window.setInterval(() => {
          attempts += 1
          if (fireConversion() || attempts > 20) {
            if (poll) window.clearInterval(poll)
          }
        }, 50)
      }
    }

    const t = window.setTimeout(weiter, 1500)
    return () => {
      window.clearTimeout(t)
      if (poll) window.clearInterval(poll)
    }
  }, [ref])

  return (
    <main className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <p className="text-lg text-slate-700">Du wirst zu WhatsApp weitergeleitet…</p>
        <p className="mt-2 text-sm text-slate-500">
          Falls nichts passiert,{' '}
          <a
            href={whatsappDestinationUrl(ref)}
            className="text-[#0395A6] underline underline-offset-2"
          >
            klicke hier
          </a>
          .
        </p>
        {/* Ads-ID für Debugging / Transparenz; Tag lädt nur bei Consent */}
        <span className="sr-only" data-ads-id={GOOGLE_ADS_ID} />
      </div>
    </main>
  )
}

export default function WhatsAppStartPage() {
  return (
    <Suspense
      fallback={
        <main className="grid min-h-[70vh] place-items-center px-6">
          <p className="text-lg text-slate-700">Du wirst zu WhatsApp weitergeleitet…</p>
        </main>
      }
    >
      <WhatsAppStartInner />
    </Suspense>
  )
}
