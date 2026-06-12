export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, message } = req.body

  try {
    // Email to you
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sunbal Aziz Portfolio <connect@sunbal.xcler.dev>',
        to: ['connect@sunbal.xcler.dev'],
        subject: `New message from ${name} via Portfolio`,
        html: `<h2>New Contact Form Submission</h2>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      }),
    })

    // Confirmation email to sender
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sunbal Aziz <connect@sunbal.xcler.dev>',
        to: [email],
        subject: `Got your message, ${name}! 🚀`,
        html: `<p>Hey ${name}! Your message was received. I'll get back to you within 24-48 hours.</p>`,
      }),
    })

    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}