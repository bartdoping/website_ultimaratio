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
  if (!apiKey) {
    console.log('RESEND_API_KEY not configured')
    return false
  }

  try {
    console.log('Sending email via Resend...')
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ultima-rat.io <noreply@ultima-rat.io>',
        to: [process.env.CONTACT_TO_EMAIL || 'info@ultima-rat.io'],
        subject: `[Kontakt] ${payload.subject}`,
        reply_to: payload.email,
        text: `Neue Kontaktanfrage\n\nName: ${payload.name}\nE-Mail: ${payload.email}\nTelefon: ${payload.phone || '-'}\nBetreff: ${payload.subject}\n\nNachricht:\n${payload.message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0395A6;">Neue Kontaktanfrage</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${payload.name}</p>
              <p><strong>E-Mail:</strong> ${payload.email}</p>
              <p><strong>Telefon:</strong> ${payload.phone || '-'}</p>
              <p><strong>Betreff:</strong> ${payload.subject}</p>
            </div>
            <div style="background: white; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3>Nachricht:</h3>
              <p style="white-space: pre-wrap;">${payload.message}</p>
            </div>
            <p style="color: #6c757d; font-size: 14px; margin-top: 20px;">
              Diese E-Mail wurde über das Kontaktformular von ultima-rat.io gesendet.
            </p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      console.error('Resend API error:', errorData)
      return false
    }

    const result = await res.json()
    console.log('Resend email sent successfully:', result.id)
    return true
  } catch (error) {
    console.error('Resend error:', error)
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

    console.log('Form data received:', { name, email, phone, subject })

    if (!name || !email || !subject || !message) {
      console.log('Validation failed - missing required fields')
      return NextResponse.json({ ok: false, error: 'VALIDATION_FAILED' }, { status: 400 })
    }

    const payload: ContactPayload = { name, email, phone, subject, message }

    // Send via Resend
    const success = await sendWithResend(payload)

    if (!success) {
      console.log('Resend failed')
      return NextResponse.json({ 
        ok: false, 
        error: 'EMAIL_FAILED',
        message: 'E-Mail konnte nicht gesendet werden. Bitte nutzen Sie WhatsApp oder E-Mail direkt.' 
      }, { status: 500 })
    }

    console.log('Email sent successfully via Resend')
    return NextResponse.json({ ok: true })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ 
      ok: false, 
      error: 'SERVER_ERROR',
      message: 'Server-Fehler. Bitte versuchen Sie es später erneut.' 
    }, { status: 500 })
  }
}


