import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CookieProvider } from '@/contexts/CookieContext'
import CookieBanner from '@/components/CookieBanner'
import CookieSettings from '@/components/CookieSettings'
import BlackBookPopup from '@/components/BlackBookPopup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ultima-rat.io - Medizin-Nachhilfe für Studierende',
  description: 'Bestnoten im Medizinstudium durch echtes Verstehen. Medizin-Nachhilfe mit approbierten Ärzt:innen und qualifizierten Tutor:innen.',
  keywords: 'Medizinstudium, Nachhilfe, Physikum, M2, M3, Kenntnisprüfung, Medizin, Prüfungsvorbereitung',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <CookieProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <CookieSettings />
          <BlackBookPopup />
        </CookieProvider>
      </body>
    </html>
  )
}