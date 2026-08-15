import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WhatsApp',
  robots: { index: false, follow: false },
  alternates: { canonical: '/whatsapp-start' },
}

export default function WhatsAppStartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
