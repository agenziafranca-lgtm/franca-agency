import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, azienda, sito, servizi, budget, sfida } = body

    if (!nome || !email || !sfida) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti' }, { status: 400 })
    }

    const serviziList = Array.isArray(servizi) && servizi.length > 0
      ? servizi.join(', ')
      : 'Non specificati'

    await resend.emails.send({
      from: 'Sito Franca <noreply@agenziafranca.it>',
      to: 'mail@agenziafranca.it',
      replyTo: email,
      subject: `Nuova richiesta da ${nome} — ${azienda || 'Azienda non specificata'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #090909;">
          <div style="background: #ff462e; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">Nuova richiesta di contatto</h1>
          </div>
          <div style="background: #f5f5f5; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; font-weight: 700; width: 160px; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Nome</td><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${nome}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; font-weight: 700; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;"><a href="mailto:${email}" style="color: #ff462e;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; font-weight: 700; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Azienda</td><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${azienda || '—'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; font-weight: 700; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Sito web</td><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${sito ? `<a href="${sito}" style="color: #ff462e;">${sito}</a>` : '—'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; font-weight: 700; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Servizi</td><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${serviziList}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; font-weight: 700; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${budget || '—'}</td></tr>
            </table>
            <div style="margin-top: 24px;">
              <div style="font-weight: 700; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">La sfida principale</div>
              <div style="background: white; border-radius: 8px; padding: 20px; line-height: 1.6; font-size: 15px;">${sfida.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 })
  }
}
