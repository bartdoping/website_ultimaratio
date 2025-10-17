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

    // Check if we have SMTP configuration
    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    
    console.log('SMTP Config check:', { 
      host: host ? 'set' : 'missing', 
      port, 
      user: user ? 'set' : 'missing', 
      pass: pass ? 'set' : 'missing' 
    })

    if (!host || !port || !user || !pass) {
      console.log('SMTP configuration incomplete')
      return NextResponse.json({ 
        ok: false, 
        error: 'SMTP_NOT_CONFIGURED',
        message: 'E-Mail-Konfiguration unvollständig. Bitte nutzen Sie WhatsApp oder E-Mail direkt.' 
      }, { status: 500 })
    }

    try {
      console.log('Importing nodemailer...')
      const nodemailer = await import('nodemailer')
      
      console.log('Creating transporter...')
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: { user, pass },
        tls: {
          rejectUnauthorized: false // Zoho sometimes requires this
        },
        // Zoho-specific settings
        requireTLS: port === 587,
        connectionTimeout: 60000, // 60 seconds
        greetingTimeout: 30000,  // 30 seconds
        socketTimeout: 60000,    // 60 seconds
      })

      console.log('Sending email...')
      await transporter.sendMail({
        from: `ultima-rat.io <${user}>`,
        to: process.env.CONTACT_TO_EMAIL || 'info@ultima-rat.io',
        subject: `[Kontakt] ${subject}`,
        replyTo: email,
        text: `Neue Kontaktanfrage\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone || '-'}\nBetreff: ${subject}\n\nNachricht:\n${message}`,
      })
      
      console.log('Email sent successfully!')
      return NextResponse.json({ ok: true })
      
    } catch (error) {
      console.error('SMTP Error:', error)
      
      // Zoho-specific error handling
      let errorMessage = 'E-Mail konnte nicht gesendet werden. Bitte nutzen Sie WhatsApp oder E-Mail direkt.'
      
      if (error instanceof Error) {
        if (error.message.includes('535')) {
          errorMessage = 'Zoho-Authentifizierung fehlgeschlagen. Bitte prüfen Sie App-Passwort und 2FA-Einstellungen.'
        } else if (error.message.includes('Connection timeout')) {
          errorMessage = 'Zoho-Server nicht erreichbar. Bitte versuchen Sie es später erneut.'
        } else if (error.message.includes('Invalid login')) {
          errorMessage = 'Zoho-Login ungültig. Bitte prüfen Sie Benutzername und App-Passwort.'
        }
      }
      
      return NextResponse.json({ 
        ok: false, 
        error: 'SMTP_ERROR',
        message: errorMessage,
        details: error instanceof Error ? error.message : 'Unknown error'
      }, { status: 500 })
    }

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ 
      ok: false, 
      error: 'SERVER_ERROR',
      message: 'Server-Fehler. Bitte versuchen Sie es später erneut.' 
    }, { status: 500 })
  }
}


