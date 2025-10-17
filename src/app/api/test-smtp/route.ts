import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('Testing Resend configuration...')
    
    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_TO_EMAIL || 'info@ultima-rat.io'
    
    console.log('Resend Config:', { 
      apiKey: apiKey ? 'set' : 'missing',
      contactEmail
    })
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'RESEND_NOT_CONFIGURED',
        message: 'RESEND_API_KEY not set in environment variables'
      })
    }
    
    try {
      // Test Resend API with a simple request
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'ultima-rat.io <noreply@ultima-rat.io>',
          to: [contactEmail],
          subject: '[Test] Resend Configuration Test',
          text: 'This is a test email to verify Resend configuration.',
        }),
      })
      
      if (!res.ok) {
        const errorData = await res.json()
        console.error('Resend test error:', errorData)
        return NextResponse.json({ 
          error: 'RESEND_API_ERROR',
          message: errorData.message || 'Resend API error',
          details: errorData
        })
      }
      
      const result = await res.json()
      console.log('Resend test successful:', result.id)
      
      return NextResponse.json({ 
        success: true, 
        message: 'Resend configuration is valid',
        emailId: result.id
      })
      
    } catch (error) {
      console.error('Resend test error:', error)
      return NextResponse.json({ 
        error: 'RESEND_CONNECTION_FAILED',
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
