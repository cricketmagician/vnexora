'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// Unified Schema for all Website Inquiries
const InquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(3, "Message must be at least 3 characters"),
  source: z.string().optional(), // 'booking_modal', 'contact_page', 'service_enquiry'
});

export type InquiryData = z.infer<typeof InquirySchema>;

// Initialize Resend
// Requires: RESEND_API_KEY in .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitInquiry(data: InquiryData): Promise<{ success: boolean; message: string }> {
  try {
    // 1. Validate the data server-side
    const result = InquirySchema.safeParse(data);
    
    if (!result.success) {
      console.error("Validation Error:", result.error.format());
      return { success: false, message: result.error.issues[0].message };
    }

    const validated = result.data;
    
    // 2. Prepare the email content
    const emailHtml = `
      <div style="font-family: 'Playfair Display', serif; padding: 40px; color: #1A1A1A; line-height: 1.6; background-color: #FDFDFD;">
        <h1 style="color: #BA893D; margin-bottom: 5px; font-weight: normal;">Institutional Lead Received</h1>
        <p style="text-transform: uppercase; letter-spacing: 3px; font-size: 10px; color: #999; margin-bottom: 40px; border-bottom: 1px solid #EEE; padding-bottom: 20px;">
          Vnexora Private Strategic Desk
        </p>
        
        <div style="margin-bottom: 30px;">
          <p style="margin: 5px 0;"><strong>Interested Party:</strong> ${validated.fullName}</p>
          <p style="margin: 5px 0;"><strong>Primary Email:</strong> ${validated.email}</p>
          <p style="margin: 5px 0;"><strong>Contact Line:</strong> ${validated.phone || 'Not Provided'}</p>
          <p style="margin: 5px 0;"><strong>Institutional Subject:</strong> ${validated.subject || 'General Strategic Inquiry'}</p>
        </div>

        <div style="margin-top: 40px; border-left: 2px solid #BA893D; padding-left: 30px; font-style: italic; color: #444;">
          <p style="font-weight: bold; font-style: normal; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; color: #BA893D; margin-bottom: 15px;">Mandate Brief:</p>
          <p style="white-space: pre-wrap; font-size: 16px;">"${validated.message}"</p>
        </div>

        <div style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #EEE;">
          <p style="font-size: 11px; color: #BBB; text-transform: uppercase; letter-spacing: 2px;">
            Transmission Origin: ${validated.source || 'Direct Interaction Interface'}
          </p>
          <p style="font-size: 10px; color: #CCC; margin-top: 10px;">
            Confidentiality Notice: This inquiry contains proprietary institutional data intended for Vnexora executive review.
          </p>
        </div>
      </div>
    `;

    // 3. Send via Resend
    if (process.env.RESEND_API_KEY) {
      const { data: resendData, error: resendError } = await resend.emails.send({
        from: `Vnexora Desk <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
        to: [process.env.CONTACT_RECEIVER_EMAIL || 'delivery@resend.dev'],
        subject: `New Institutional Lead: ${validated.fullName} (${validated.subject || 'Inquiry'})`,
        html: emailHtml,
      });

      if (resendError) {
        console.error("Resend Error:", resendError);
        return { success: false, message: "Email delivery failed over the network." };
      }
      
      console.log("SUCCESS: Inquiry sent via Resend API.");
    } else {
      // Simulate network delay for development verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("MOCKED RESEND SUBMISSION (Missing API Key):", validated);
    }

    return { success: true, message: "Your institutional mandate brief has been delivered successfully." };
    
  } catch (error) {
    console.error("Unexpected Form Processing Error:", error);
    
    // Check if it's a ZodError despite instanceof issues
    if (error && typeof error === 'object' && 'name' in error && error.name === 'ZodError') {
      const issues = (error as z.ZodError).issues;
      if (issues && issues.length > 0) {
        return { success: false, message: issues[0].message };
      }
    }

    return { success: false, message: "An institutional processing error occurred. Please try again." };
  }
}
