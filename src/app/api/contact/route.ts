import { NextResponse } from 'next/server'

type ContactPayload = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

async function sendWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return false

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ultima-rat.io <no-reply@ultima-rat.io>',
        to: [process.env.CONTACT_TO_EMAIL || 'info@ultima-rat.io'],
        subject: `[Kontakt] ${payload.subject || 'Neue Nachricht'}`,
        reply_to: payload.email,
        text: `Neue Kontaktanfrage\n\nName: ${payload.name}\nE-Mail: ${payload.email}\nTelefon: ${payload.phone || '-'}\nBetreff: ${payload.subject}\n\nNachricht:\n${payload.message}`,
      }),
    })

    if (!res.ok) {
      return false
    }
    return true
  } catch {
    return false
  }
}

async function sendWithSmtp(payload: ContactPayload) {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!host || !port || !user || !pass) return false

  // Lazy import to avoid including nodemailer in edge runtime
  const nodemailer = await import('nodemailer')
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: `ultima-rat.io <${user}>`,
      to: process.env.CONTACT_TO_EMAIL || 'info@ultima-rat.io',
      subject: `[Kontakt] ${payload.subject || 'Neue Nachricht'}`,
      replyTo: payload.email,
      text: `Neue Kontaktanfrage\n\nName: ${payload.name}\nE-Mail: ${payload.email}\nTelefon: ${payload.phone || '-'}\nBetreff: ${payload.subject}\n\nNachricht:\n${payload.message}`,
    })
    return true
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>

    const name = (body.name || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const phone = (body.phone || '').toString().trim()
    const subject = (body.subject || '').toString().trim()
    const message = (body.message || '').toString().trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'VALIDATION_FAILED' }, { status: 400 })
    }

    const payload: ContactPayload = { name, email, phone, subject, message }

    // Try Resend first, fall back to SMTP
    const sentWithResend = await sendWithResend(payload)
    const success = sentWithResend || (await sendWithSmtp(payload))

    if (!success) {
      return NextResponse.json({ ok: false, error: 'DELIVERY_FAILED' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'BAD_REQUEST' }, { status: 400 })
  }
}


