export type Locale = 'de' | 'en' | 'ar'

export const LOCALES: Locale[] = ['de', 'en', 'ar']
export const DEFAULT_LOCALE: Locale = 'de'

export function normalizeLocale(value: string | undefined | null): Locale {
  if (!value) return DEFAULT_LOCALE
  const v = value.toLowerCase()
  if (LOCALES.includes(v as Locale)) return v as Locale
  if (v.startsWith('de')) return 'de'
  if (v.startsWith('en')) return 'en'
  if (v.startsWith('ar')) return 'ar'
  return DEFAULT_LOCALE
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}

