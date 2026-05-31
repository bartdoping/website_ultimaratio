import { t } from './dictionaries'
import type { Locale } from './locales'
import { SITE_NAME, SITE_URL } from './seo'

/**
 * Zentrale schema.org-Generatoren.
 *
 * Wichtig: Keine erfundenen Bewertungen, Zertifizierungen oder Garantien.
 * FAQPage wird nur aus FAQ-Inhalten gebaut, die auch sichtbar auf der Seite
 * stehen.
 */

export function organizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo.png`,
    email: 'info@ultima-rat.io',
    description:
      'Online-Nachhilfe und Prüfungsvorbereitung für das Medizinstudium sowie für ausländische Ärzt:innen (Kenntnisprüfung und Fachsprachprüfung).',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hallesche Straße 94a',
      postalCode: '44143',
      addressLocality: 'Dortmund',
      addressCountry: 'DE',
    },
    areaServed: 'DE',
    sameAs: [] as string[],
  }
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['de', 'en', 'ar'],
  }
}

/**
 * Baut eine FAQPage aus Paaren von Frage/Antwort-Übersetzungsschlüsseln.
 * Leere Einträge werden übersprungen.
 */
export function faqJsonLd(
  locale: Locale,
  pairs: Array<{ q: string; a: string }>,
): Record<string, unknown> {
  const mainEntity = pairs
    .map(({ q, a }) => ({ question: t(locale, q), answer: t(locale, a) }))
    .filter(({ question, answer }) => question && answer && !question.startsWith('['))
    .map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    }))

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
}
