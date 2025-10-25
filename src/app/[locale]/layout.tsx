import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CookieProvider } from '@/contexts/CookieContext'
import CookieBanner from '@/components/CookieBanner'
import CookieSettings from '@/components/CookieSettings'
import BlackBookPopup from '@/components/BlackBookPopup'
import { NextIntlClientProvider } from 'next-intl'
import { messagesByLocale } from '@/i18n/dictionaries'
import { normalizeLocale, type Locale } from '@/i18n/locales'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ultima-rat.io - Medizin-Nachhilfe für Studierende',
  description: 'Bestnoten im Medizinstudium durch echtes Verstehen. Medizin-Nachhilfe mit approbierten Ärzt:innen und qualifizierten Tutor:innen.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc: Locale = normalizeLocale(locale)
  const dir = loc === 'ar' ? 'rtl' : 'ltr'
  const messages = messagesByLocale[loc]

  return (
    <html lang={loc} dir={dir} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={loc} messages={messages}>
          <CookieProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieBanner />
            <CookieSettings />
            <BlackBookPopup />
          </CookieProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

