const { Resend } = require('resend');
require('dotenv').config({ path: '.env.local' });

async function testResend() {
  const apiKey = process.env.RESEND_API_KEY;
  console.log("Resend API Key prefix:", apiKey ? apiKey.substring(0, 10) + "..." : "missing");
  console.log("From email:", process.env.RESEND_FROM_EMAIL);
  console.log("To email:", process.env.CONTACT_RECEIVER_EMAIL);

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: `Vnexora Test <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: [process.env.CONTACT_RECEIVER_EMAIL || 'delivery@resend.dev'],
      subject: 'Resend Diagnostic Test',
      html: '<p>Testing Resend configuration.</p>',
    });

    if (error) {
      console.error("Resend send failed:", error);
    } else {
      console.log("Resend send succeeded:", data);
    }
  } catch (err) {
    console.error("Critical error in Resend:", err);
  }
}

testResend();
