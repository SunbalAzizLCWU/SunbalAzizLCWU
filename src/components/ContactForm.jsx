import { useState } from 'react'

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY

const userEmailHTML = (name) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received</title>
</head>
<body style="margin:0;padding:0;background-color:#111415;font-family:'Inter',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#111415;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1e2021;border:1px solid rgba(80,200,120,0.2);border-radius:12px;overflow:hidden;max-width:600px;width:100%;">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#111415,#1a1c1d);padding:40px;text-align:center;border-bottom:1px solid rgba(80,200,120,0.2);">
              <p style="margin:0 0 8px 0;font-family:'JetBrains Mono',monospace;font-size:12px;color:#6ee591;letter-spacing:0.1em;">TRANSMISSION RECEIVED</p>
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#e2e2e4;">Sunbal <span style="color:#6ee591;">{Aziz}</span></h1>
              <p style="margin:8px 0 0 0;font-size:13px;color:#bdcabc;">Full Stack & AI Software Engineer</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6ee591;margin:0 0 16px 0;">&gt; MESSAGE_ACKNOWLEDGED</p>
              <h2 style="margin:0 0 16px 0;font-size:22px;color:#e2e2e4;font-weight:600;">Hey ${name}! 👋</h2>
              <p style="margin:0 0 16px 0;font-size:15px;color:#bdcabc;line-height:1.7;">
                Your message has been successfully received. I personally read every message and will get back to you as soon as possible — usually within 24–48 hours.
              </p>
              <p style="margin:0 0 32px 0;font-size:15px;color:#bdcabc;line-height:1.7;">
                While you wait, feel free to explore my work or download my resume below.
              </p>

              <!-- Buttons -->
              <table cellpadding="0" cellspacing="0" style="margin:0 0 32px 0;">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="https://sunbal.xcler.dev" style="display:inline-block;background-color:#6ee591;color:#003919;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:4px;letter-spacing:0.05em;">VIEW PORTFOLIO →</a>
                  </td>
                  <td>
                    <a href="https://sunbal.xcler.dev/Sunbal_Aziz_CV.pdf" style="display:inline-block;background-color:transparent;color:#6ee591;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:4px;border:1px solid rgba(110,229,145,0.4);letter-spacing:0.05em;">DOWNLOAD CV →</a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="border-top:1px solid rgba(80,200,120,0.15);margin:0 0 24px 0;"></div>

              <p style="margin:0;font-size:13px;color:#879487;line-height:1.6;">
                Best regards,<br>
                <strong style="color:#e2e2e4;">Sunbal Aziz</strong><br>
                <span style="color:#6ee591;">connect@sunbal.xcler.dev</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0c0e10;padding:20px 40px;border-top:1px solid rgba(80,200,120,0.1);text-align:center;">
              <p style="margin:0;font-family:'JetBrains Mono',monospace;font-size:10px;color:#879487;letter-spacing:0.05em;">© 2024 SUNBAL AZIZ // ALL RIGHTS RESERVED</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

export default function ContactForm({ variant = 'default' }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')

    try {
      // Email to portfolio owner
      const ownerRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: 'Sunbal Aziz Portfolio', email: 'connect@sunbalaziz.com' },
          to: [{ email: 'connect@sunbalaziz.com', name: 'Sunbal Aziz' }],
          subject: `New message from ${form.name} via Portfolio`,
          htmlContent: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${form.name}</p>
            <p><strong>Email:</strong> ${form.email}</p>
            <p><strong>Message:</strong></p>
            <p>${form.message}</p>
          `,
        }),
      })

      if (!ownerRes.ok) {
        const errData = await ownerRes.json().catch(() => ({}))
        console.error('Brevo owner email error:', ownerRes.status, errData)
        throw new Error(`Owner email failed: ${ownerRes.status}`)
      }

      // Confirmation email to the person who filled the form
      const userRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: 'Sunbal Aziz', email: 'connect@sunbalaziz.com' },
          to: [{ email: form.email, name: form.name }],
          subject: `Got your message, ${form.name}! 🚀`,
          htmlContent: userEmailHTML(form.name),
        }),
      })

      if (!userRes.ok) {
        const errData = await userRes.json().catch(() => ({}))
        console.error('Brevo user email error:', userRes.status, errData)
        throw new Error(`User email failed: ${userRes.status}`)
      }

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('error')
    }
  }

  // Styles vary slightly between homepage and contact page
  const isTerminal = variant === 'terminal'

  const inputClass = isTerminal
    ? "w-full bg-[#0A0A0A] border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 rounded-t-DEFAULT transition-all duration-300 placeholder:text-surface-variant focus:outline-none focus:border-primary"
    : "w-full bg-[#0A0A0A]/80 border border-outline-variant/30 focus:border-primary text-primary font-code-display pl-8 pr-4 py-3 focus:ring-0 focus:outline-none transition-all shadow-inner caret-primary rounded-sm placeholder:text-outline-variant/50"

  return (
    <div className="flex flex-col gap-6">

      {/* Name */}
      {isTerminal ? (
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Identity_String</label>
          <input className={inputClass} placeholder="Enter your name" type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        </div>
      ) : (
        <div className="flex flex-col gap-2 relative">
          <label className="font-code-display text-xs text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">terminal</span> const name =
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-primary font-code-display animate-pulse">&gt;</span>
            <input className={inputClass} placeholder="your name" type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
          </div>
        </div>
      )}

      {/* Email */}
      {isTerminal ? (
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Comm_Vector</label>
          <input className={inputClass} placeholder="Enter your email" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        </div>
      ) : (
        <div className="flex flex-col gap-2 relative">
          <label className="font-code-display text-xs text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">terminal</span> const email =
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-primary font-code-display animate-pulse">&gt;</span>
            <input className={inputClass} placeholder="you@domain.com" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
          </div>
        </div>
      )}

      {/* Message */}
      {isTerminal ? (
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Data_Payload</label>
          <textarea className={inputClass} placeholder="Describe the parameters..." rows="5" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
        </div>
      ) : (
        <div className="flex flex-col gap-2 relative mt-2">
          <label className="font-code-display text-xs text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">terminal</span> const message =
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-primary font-code-display animate-pulse">&gt;</span>
            <textarea className={inputClass} placeholder="Your transmission here..." rows="4" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
          </div>
        </div>
      )}

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 rounded-lg border border-primary/40 bg-primary/10 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
          <div>
            <p className="font-code-display text-sm text-primary font-bold">TRANSMISSION_SUCCESSFUL</p>
            <p className="font-body-md text-sm text-on-surface-variant mt-1">Thank you for contacting me. I'll reach you out ASAP ✨</p>
          </div>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 rounded-lg border border-error/40 bg-error/10 flex items-center gap-3">
          <span className="material-symbols-outlined text-error text-xl">error</span>
          <p className="font-code-display text-sm text-error">Transmission failed. Please try again.</p>
        </div>
      )}
      {status === 'sending' && (
        <div className="p-3 font-code-display text-xs text-primary/60 animate-pulse flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">sync</span>
          Transmitting data...
        </div>
      )}

      {/* Button */}
      <div className={`pt-2 flex ${isTerminal ? 'justify-end' : 'items-center'}`}>
        <button
          onClick={handleSubmit}
          disabled={status === 'sending'}
          className="group relative font-code-display text-primary border border-primary px-8 py-4 hover:bg-primary/10 transition-all emerald-glow cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          {status === 'sending' ? '[ TRANSMITTING... ]' : '[ EXECUTE_SUBMIT ]'}
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
        </button>
      </div>
    </div>
  )
}