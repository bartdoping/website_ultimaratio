import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CookieProvider } from '@/contexts/CookieContext'
import CookieBanner from '@/components/CookieBanner'
import CookieSettings from '@/components/CookieSettings'
import BlackBookPopup from '@/components/BlackBookPopup'
import WhatsAppConversionTracker from '@/components/WhatsAppConversionTracker'
import { normalizeLocale, getDirection } from '@/i18n/locales'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ultima-rat.io - Medizin-Nachhilfe für Studierende',
  description: 'Bestnoten im Medizinstudium durch echtes Verstehen. Medizin-Nachhilfe mit approbierten Ärzt:innen und qualifizierten Tutor:innen.',
  keywords: 'Medizinstudium, Nachhilfe, Physikum, M2, M3, Kenntnisprüfung, Medizin, Prüfungsvorbereitung',
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
      <body className={inter.className}>
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