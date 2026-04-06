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
  attachments: z.array(z.object({
    filename: z.string(),
    content: z.string(), // Base64 string from client
  })).optional(),
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

    // 3. Prepare Attachments for Resend (Base64 to Buffer)
    const resendAttachments = validated.attachments?.map(att => {
      // Remove data:image/*;base64, prefix if present
      const base64Content = att.content.split(';base64,').pop() || att.content;
      return {
        filename: att.filename,
        content: Buffer.from(base64Content, 'base64'),
      };
    }) || [];

    // 4. Send via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("CONFIGURATION ERROR: RESEND_API_KEY is missing from environment variables.");
      return { 
        success: false, 
        message: "Institutional configuration error: API Key missing. Please check server environment variables." 
      };
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: `Vnexora Desk <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: [process.env.CONTACT_RECEIVER_EMAIL || 'delivery@resend.dev'],
      subject: `New Institutional Lead: ${validated.fullName} (${validated.subject || 'Inquiry'})`,
      html: emailHtml,
      attachments: resendAttachments,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return { success: false, message: `Email delivery failed: ${resendError.message}` };
    }
    
    console.log("SUCCESS: Inquiry sent via Resend API.");
    return { success: true, message: "Your institutional mandate brief has been delivered successfully." };
    
  } catch (error: any) {
    console.error("CRITICAL Form Processing Error:", error);
    
    // Check if it's a ZodError despite instanceof issues
    if (error && typeof error === 'object' && 'name' in error && error.name === 'ZodError') {
      const issues = (error as z.ZodError).issues;
      if (issues && issues.length > 0) {
        return { success: false, message: issues[0].message };
      }
    }

    return { success: false, message: `Server error: ${error?.message || "An institutional processing error occurred."}` };
  }
}
