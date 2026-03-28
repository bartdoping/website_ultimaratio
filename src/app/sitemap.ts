import { MetadataRoute } from 'next'
import { LOCALES, DEFAULT_LOCALE } from '@/i18n/locales'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ultima-rat.io'
  
      // Statische Routen ohne Locale (nur Routen, die nicht unter [locale] existieren)
      const staticRoutes = [
        '',
        '/agb',
        '/cookie-richtlinie',
        '/datenschutz',
        '/impressum',
        '/kenntnispruefung',
        '/klinik',
        '/kontakt',
        '/medicalskills',
        '/vorklinik',
        '/widerruf',
        '/zahnmedizin',
        '/fachsprachpruefung',
        '/examensvorbereitung',
      ]

  // Locale-spezifische Routen (existieren unter [locale])
  const localeRoutes = [
    '',
    '/coaching',
    '/methoden',
    '/team',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []
  const addedUrls = new Set<string>()

  // Füge statische Routen hinzu
  staticRoutes.forEach((route) => {
    const url = `${baseUrl}${route}`
    if (!addedUrls.has(url)) {
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      })
      addedUrls.add(url)
    }
  })

  // Füge Locale-Varianten hinzu
  LOCALES.forEach((locale) => {
    localeRoutes.forEach((route) => {
      const localePath = locale === DEFAULT_LOCALE ? route : `/${locale}${route}`
      const url = `${baseUrl}${localePath}`
      
      if (!addedUrls.has(url)) {
        sitemapEntries.push({
          url,
          lastModified: new Date(),
          changeFrequency: route === '' ? 'daily' : 'weekly',
          priority: route === '' ? 1.0 : 0.8,
          alternates: {
            languages: LOCALES.reduce((acc, loc) => {
              const locPath = loc === DEFAULT_LOCALE ? route : `/${loc}${route}`
              acc[loc] = `${baseUrl}${locPath}`
              return acc
            }, {} as Record<string, string>),
          },
        })
        addedUrls.add(url)
      }
    })
  })

  return sitemapEntries
}

