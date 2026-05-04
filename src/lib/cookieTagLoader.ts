/**
 * Lädt Google-Tags nur nach Cookie-Einwilligung (siehe CookieContext).
 * GA4 = Analyse, Google Ads (AW-) = Marketing / Conversion-Tracking.
 */

export function initializeAnalytics(): void {
  if (typeof window === 'undefined') return
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  if (!GA_ID) return
  if (document.getElementById('ga4-script')) return

  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  const inline = document.createElement('script')
  inline.id = 'ga4-inline'
  inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { anonymize_ip: true });
    `
  document.head.appendChild(inline)
}

const AW_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? 'AW-17361559732'

function markAdsConfigured(w: Window & { __ultimaGoogleAdsConfigured?: boolean }) {
  w.__ultimaGoogleAdsConfigured = true
}

export function initializeGoogleAdsTag(): void {
  if (typeof window === 'undefined') return
  const w = window as Window & { __ultimaGoogleAdsConfigured?: boolean; gtag?: (...args: unknown[]) => void }
  if (w.__ultimaGoogleAdsConfigured) return

  if (document.getElementById('gtag-google-ads-inline')) {
    markAdsConfigured(w)
    return
  }

  // GA4 hat gtag bereits eingeführt → nur AW-Konfiguration nachziehen
  if (document.getElementById('ga4-script')) {
    const apply = () => {
      if (typeof w.gtag !== 'function') {
        requestAnimationFrame(apply)
        return
      }
      markAdsConfigured(w)
      w.gtag('config', AW_ID)
    }
    apply()
    return
  }

  if (typeof w.gtag === 'function') {
    markAdsConfigured(w)
    w.gtag('config', AW_ID)
    return
  }

  const script = document.createElement('script')
  script.id = 'gtag-google-ads-loader'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`
  document.head.appendChild(script)

  const inline = document.createElement('script')
  inline.id = 'gtag-google-ads-inline'
  inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${AW_ID}');
    `
  document.head.appendChild(inline)
  markAdsConfigured(w)
}
