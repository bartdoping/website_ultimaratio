import { NextResponse } from 'next/server'

// Force Node.js runtime for nodemailer compatibility
export const runtime = 'nodejs'

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
  
  console.log('SMTP Config:', { host, port, user: user ? '***' : undefined, pass: pass ? '***' : undefined })
  
  if (!host || !port || !user || !pass) {
    console.log('SMTP config missing')
    return false
  }

  try {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    console.log('Sending email via SMTP...')
    await transporter.sendMail({
      from: `ultima-rat.io <${user}>`,
      to: process.env.CONTACT_TO_EMAIL || 'info@ultima-rat.io',
      subject: `[Kontakt] ${payload.subject || 'Neue Nachricht'}`,
      replyTo: payload.email,
      text: `Neue Kontaktanfrage\n\nName: ${payload.name}\nE-Mail: ${payload.email}\nTelefon: ${payload.phone || '-'}\nBetreff: ${payload.subject}\n\nNachricht:\n${payload.message}`,
    })
    console.log('Email sent successfully via SMTP')
    return true
  } catch (error) {
    console.error('SMTP Error:', error)
    return false
  }
}

export async function POST(request: Request) {
  try {
    console.log('Contact API called')
    const body = (await request.json()) as Partial<ContactPayload>

    const name = (body.name || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const phone = (body.phone || '').toString().trim()
    const subject = (body.subject || '').toString().trim()
    const message = (body.message || '').toString().trim()

    console.log('Form data:', { name, email, phone, subject, message: message.substring(0, 50) + '...' })

    if (!name || !email || !subject || !message) {
      console.log('Validation failed')
      return NextResponse.json({ ok: false, error: 'VALIDATION_FAILED' }, { status: 400 })
    }

    const payload: ContactPayload = { name, email, phone, subject, message }

    // Try Resend first, fall back to SMTP
    console.log('Trying Resend first...')
    const sentWithResend = await sendWithResend(payload)
    console.log('Resend result:', sentWithResend)
    
    if (!sentWithResend) {
      console.log('Trying SMTP fallback...')
      const sentWithSmtp = await sendWithSmtp(payload)
      console.log('SMTP result:', sentWithSmtp)
      
      if (!sentWithSmtp) {
        console.log('Both methods failed')
        return NextResponse.json({ ok: false, error: 'DELIVERY_FAILED' }, { status: 500 })
      }
    }

    console.log('Email sent successfully')
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ ok: false, error: 'BAD_REQUEST' }, { status: 400 })
  }
}


