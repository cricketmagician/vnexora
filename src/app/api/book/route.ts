import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, contact, date, time, address, platform, office } = body;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not defined");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Dynamic strings based on booking type
    let titleStr = "";
    let locationStr = "";
    let tableRowHtml = "";

    if (type === "video") {
      titleStr = `Vnexora Video Call: ${name}`;
      locationStr = platform || "Google Meet";
      tableRowHtml = `
        <tr>
          <td style="padding: 10px 0; color: #888; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">Platform</td>
          <td style="padding: 10px 0; font-size: 16px; color: #A67C52; font-weight: bold;">${platform}</td>
        </tr>
      `;
    } else if (type === "office") {
      titleStr = `Vnexora Office Visit: ${name}`;
      locationStr = `Vnexora ${office} Hub`;
      tableRowHtml = `
        <tr>
          <td style="padding: 10px 0; color: #888; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">Office Location</td>
          <td style="padding: 10px 0; font-size: 16px; color: #A67C52; font-weight: bold;">${office}</td>
        </tr>
      `;
    } else {
      titleStr = `Vnexora Site Visit: ${name}`;
      locationStr = address || "TBD";
      tableRowHtml = `
        <tr>
          <td style="padding: 10px 0; color: #888; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">Property Address</td>
          <td style="padding: 10px 0; font-size: 16px; color: #A67C52; font-weight: bold;">${address}</td>
        </tr>
      `;
    }

    // Generate Google Calendar Link for Admin
    const eventTitle = encodeURIComponent(titleStr);
    const eventDetails = encodeURIComponent(`Client Contact: ${contact}\n\nGenerated via Vnexora Portal.`);
    const eventLocation = encodeURIComponent(locationStr);
    
    // Format Dates (assuming date is YYYY-MM-DD and time is HH:MM)
    const startDateStr = date ? date.replace(/-/g, '') : '';
    const startTimeStr = time ? time.replace(/:/g, '') + '00' : '';
    
    // Calculate end time (+1 hour)
    let endTimeStr = '';
    if (time) {
      const [hours, minutes] = time.split(':');
      const endHours = String((parseInt(hours) + 1) % 24).padStart(2, '0');
      endTimeStr = endHours + minutes + '00';
    }
    
    const calendarUrl = (startDateStr && startTimeStr && endTimeStr) 
      ? `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDateStr}T${startTimeStr}/${startDateStr}T${endTimeStr}&details=${eventDetails}&location=${eventLocation}`
      : '#';

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Vnexora Concierge <appointments@vnexora.com>",
        to: "vineet2203@gmail.com",
        subject: `New Request: ${titleStr}`,
        html: `
          <div style="font-family: serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #000; color: #fff; border: 1px solid #5B1C1C;">
            <h1 style="color: #A67C52; font-size: 28px; border-bottom: 1px solid #333; padding-bottom: 20px; margin-bottom: 30px;">${titleStr}</h1>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">Name</td>
                <td style="padding: 10px 0; font-size: 16px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">Contact</td>
                <td style="padding: 10px 0; font-size: 16px;">${contact}</td>
              </tr>
              ${tableRowHtml}
              <tr>
                <td style="padding: 10px 0; color: #888; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">Date</td>
                <td style="padding: 10px 0; font-size: 16px;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">Time</td>
                <td style="padding: 10px 0; font-size: 16px;">${time}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; padding: 20px; background-color: #111; border-radius: 8px; text-align: center;">
              <p style="color: #ccc; font-family: sans-serif; font-size: 14px; margin-bottom: 15px;">Add this session directly to your Google Calendar:</p>
              <a href="${calendarUrl}" target="_blank" style="display: inline-block; background-color: #A67C52; color: #fff; text-decoration: none; padding: 12px 24px; font-family: sans-serif; font-size: 14px; font-weight: bold; border-radius: 6px; letter-spacing: 1px; text-transform: uppercase;">Add to My Calendar</a>
            </div>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333; font-size: 12px; color: #666; text-align: center;">
              This inquiry was sent from the Vnexora Booking Portal.
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(error, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
