import { NextRequest, NextResponse } from 'next/server'

// Rate limiting: simple in-memory store (for production, use Redis/Upstash)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(ip: string): string {
  return `contact-${ip}`
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const key = getRateLimitKey(ip)
  const limit = rateLimit.get(key)

  if (!limit || now > limit.resetTime) {
    rateLimit.set(key, { count: 1, resetTime: now + 3600000 }) // 1 hour
    return true
  }

  if (limit.count >= 5) {
    return false // Max 5 requests per hour
  }

  limit.count++
  return true
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000)
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const { email, message } = await request.json()

    // Validation
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const sanitizedMessage = sanitizeInput(message)
    if (sanitizedMessage.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    // TODO: Send email via Resend or SendGrid
    // For now, log to console (replace with real email service)
    console.log('📧 New contact form submission:', {
      email: email.toLowerCase(),
      message: sanitizedMessage,
      timestamp: new Date().toISOString(),
      ip: ip,
    })

    // Placeholder for email sending
    // const response = await resend.emails.send({
    //   from: 'noreply@mamuka.dk',
    //   to: 'hello@mamuka.dk',
    //   replyTo: email,
    //   subject: `New Contact: ${email}`,
    //   html: `<p>${sanitizedMessage}</p>`,
    // })

    return NextResponse.json(
      { success: true, message: 'Thank you! We received your message.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
