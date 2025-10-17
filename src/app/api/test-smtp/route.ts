import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  try {
    console.log('Testing SMTP configuration...')
    
    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    
    console.log('SMTP Config:', { 
      host: host ? 'set' : 'missing', 
      port, 
      user: user ? 'set' : 'missing', 
      pass: pass ? 'set' : 'missing' 
    })
    
    if (!host || !port || !user || !pass) {
      return NextResponse.json({ 
        error: 'SMTP_NOT_CONFIGURED',
        config: { host: !!host, port, user: !!user, pass: !!pass }
      })
    }
    
    try {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      })
      
      // Test connection
      await transporter.verify()
      
      return NextResponse.json({ 
        success: true, 
        message: 'SMTP configuration is valid' 
      })
      
    } catch (error) {
      console.error('SMTP test error:', error)
      return NextResponse.json({ 
        error: 'SMTP_CONNECTION_FAILED',
        message: error instanceof Error ? error.message : 'Unknown error'
      })
    }
    
  } catch (error) {
    console.error('Test API error:', error)
    return NextResponse.json({ 
      error: 'SERVER_ERROR',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
