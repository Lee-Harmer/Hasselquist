import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  message: z.string().min(10),
  howHeard: z.string().optional(),
  honeypot: z.string().max(0).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true })
    }

    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid form data. Please check your inputs.' },
        { status: 400 },
      )
    }

    const { name, email, phone, service, message, howHeard } = parsed.data

    // Send via Resend if API key is set
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)

      // Email to Erik
      await resend.emails.send({
        from: 'Hasselquist Website <noreply@hasselquistcontracting.com>',
        to: 'Erik@hasselquistcontracting.com',
        subject: `New Quote Request — ${service}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1C2027; border-bottom: 2px solid #C9A84C; padding-bottom: 8px;">New Quote Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6E665C; font-size: 13px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #6E665C; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6E665C; font-size: 13px;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6E665C; font-size: 13px;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
              <tr><td style="padding: 8px 0; color: #6E665C; font-size: 13px;">How Heard</td><td style="padding: 8px 0;">${howHeard || 'Not specified'}</td></tr>
            </table>
            <div style="margin-top: 16px; background: #F0EBE0; padding: 16px;">
              <p style="color: #6E665C; font-size: 12px; margin: 0 0 8px;">Message</p>
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      })

      // Confirmation email to customer
      await resend.emails.send({
        from: 'Erik at Hasselquist Contracting <noreply@hasselquistcontracting.com>',
        to: email,
        subject: 'We received your message — Hasselquist Contracting',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1C2027; border-bottom: 2px solid #C9A84C; padding-bottom: 8px;">Thank You, ${name}</h2>
            <p>We've received your message about <strong>${service}</strong> and will be in touch within one business day.</p>
            <p>In the meantime, feel free to reach us directly:</p>
            <ul>
              <li><a href="tel:+16122576073">612-257-6073</a></li>
              <li><a href="mailto:Erik@hasselquistcontracting.com">Erik@hasselquistcontracting.com</a></li>
            </ul>
            <p style="color: #6E665C; font-size: 13px;">— Erik Hasselquist<br>Hasselquist Contracting · Shakopee, MN · Lic. BC808643</p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { message: 'Server error. Please try again or call us directly.' },
      { status: 500 },
    )
  }
}
