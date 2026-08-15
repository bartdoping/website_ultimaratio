/** Zentrale WhatsApp-/Lead-Links (Conversion über Bridge-Page). */

export const WHATSAPP_PHONE = '491639347633'

export const WHATSAPP_LINK = '/whatsapp-start'

/** Google Ads Conversion „WhatsApp-Klick (1)“ */
export const WHATSAPP_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_SEND_TO ??
  'AW-17361559732/-1ozCOv5h-IcELTB0dZA'

export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? 'AW-17361559732'

const DEFAULT_MESSAGE =
  'Hallo, ich interessiere mich für ein kostenloses Erstgespräch.'

const REF_MESSAGES: Record<string, string> = {
  home: DEFAULT_MESSAGE,
  header: 'Hallo, ich komme über die Navigation und interessiere mich für ein kostenloses Erstgespräch.',
  footer: 'Hallo, ich komme über den Footer und interessiere mich für ein kostenloses Erstgespräch.',
  kontakt: 'Hallo, ich komme über die Kontaktseite und interessiere mich für ein kostenloses Erstgespräch.',
  coaching: 'Hallo, ich interessiere mich für euer Coaching / ein kostenloses Erstgespräch.',
  vorklinik: 'Hallo, ich interessiere mich für die Vorklinik-Vorbereitung.',
  klinik: 'Hallo, ich interessiere mich für die Klinik- / Examensvorbereitung.',
  zahnmedizin: 'Hallo, ich interessiere mich für die Zahnmedizin-Vorbereitung.',
  kenntnispruefung: 'Hallo, ich interessiere mich für die Vorbereitung auf die Kenntnisprüfung.',
  fachsprachpruefung: 'Hallo, ich interessiere mich für die Vorbereitung auf die Fachsprachprüfung.',
  examenskurse: 'Hallo, ich interessiere mich für eure Examenskurse.',
  medicalskills: 'Hallo, ich interessiere mich für Medical Skills / Training.',
  methoden: 'Hallo, ich interessiere mich für eure Methoden und ein Erstgespräch.',
  team: 'Hallo, ich habe euer Team gesehen und interessiere mich für ein Erstgespräch.',
  faq: 'Hallo, ich habe eine Frage und interessiere mich für ein kostenloses Erstgespräch.',
  sticky: 'Hallo, ich interessiere mich für ein kostenloses Erstgespräch.',
}

export function whatsappHref(ref?: string): string {
  if (!ref) return WHATSAPP_LINK
  return `${WHATSAPP_LINK}?ref=${encodeURIComponent(ref)}`
}

export function whatsappDestinationUrl(ref?: string | null): string {
  const key = (ref ?? '').trim().toLowerCase()
  const text = REF_MESSAGES[key] ?? DEFAULT_MESSAGE
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}
