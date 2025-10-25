import { cookies } from 'next/headers'
import { normalizeLocale, type Locale } from './locales'
import { t } from './dictionaries'

export default async function Trans({ k, fallback }: { k: string; fallback: string }) {
  const cookieStore = await cookies()
  const locale: Locale = normalizeLocale(cookieStore.get('lang')?.value)
  const value = t(locale, k)
  return value || fallback
}

