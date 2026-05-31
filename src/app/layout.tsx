import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CookieProvider } from '@/contexts/CookieContext'
import CookieBanner from '@/components/CookieBanner'
import CookieSettings from '@/components/CookieSettings'
import BlackBookPopup from '@/components/BlackBookPopup'
import WhatsAppConversionTracker from '@/components/WhatsAppConversionTracker'
import JsonLd from '@/components/JsonLd'
import { normalizeLocale, getDirection } from '@/i18n/locales'
import { SITE_NAME, SITE_URL } from '@/i18n/seo'
import { organizationJsonLd, websiteJsonLd } from '@/i18n/structured-data'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Medizin Nachhilfe Online – 1:1 Coaching & Prüfungsvorbereitung | ' + SITE_NAME,
    template: '%s | ' + SITE_NAME,
  },
  description:
    'Individuelle Online-Nachhilfe und Prüfungsvorbereitung für das Medizinstudium: persönliches 1:1 Coaching für Physikum, M2 und M3 sowie Vorbereitung auf Kenntnisprüfung und Fachsprachprüfung.',
  keywords:
    'Medizin Nachhilfe, Medizin Nachhilfe Online, Online Nachhilfe Medizin, Medizinstudium Coaching, Physikum Nachhilfe, M2 Vorbereitung, M3 Vorbereitung, Kenntnisprüfung, Fachsprachprüfung, Prüfungsvorbereitung Medizin',
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: 'Medizin Nachhilfe Online – 1:1 Coaching & Prüfungsvorbereitung',
    description:
      'Individuelle Online-Nachhilfe und Prüfungsvorbereitung für das Medizinstudium: 1:1 Coaching für Physikum, M2 und M3 sowie Kenntnis- und Fachsprachprüfung.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medizin Nachhilfe Online – 1:1 Coaching & Prüfungsvorbereitung',
    description:
      'Individuelle Online-Nachhilfe für das Medizinstudium: 1:1 Coaching für Physikum, M2, M3 sowie Kenntnis- und Fachsprachprüfung.',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const locale = normalizeLocale(cookieStore.get('lang')?.value)
  const dir = getDirection(locale)

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <CookieProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <CookieSettings />
          <BlackBookPopup />
          <WhatsAppConversionTracker />
        </CookieProvider>
      </body>
    </html>
  )
}