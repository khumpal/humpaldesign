import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// All recipient emails
const RECIPIENT_EMAILS = [
  "rajnish@humpaldesign.com",
  "karanshumpal@gmail.com",
  "gh103@yahoo.com",
];

interface ContactFormRequest {
  type: "contact" | "quote";
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message?: string;
  // Quote-specific fields
  quantity?: string;
  material?: string;
  tolerance?: string;
  timeline?: string;
  finish?: string;
  description?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactFormRequest = await req.json();
    console.log("Received form submission:", { ...data, email: "***" });

    let emailSubject: string;
    let emailBody: string;

    if (data.type === "quote") {
      emailSubject = `New Quote Request from ${data.name}${data.company ? ` (${data.company})` : ""}`;
      emailBody = `
        <h2>New Quote Request</h2>
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          ${data.company ? `<li><strong>Company:</strong> ${data.company}</li>` : ""}
          ${data.phone ? `<li><strong>Phone:</strong> ${data.phone}</li>` : ""}
        </ul>
        <h3>Project Details</h3>
        <ul>
          ${data.quantity ? `<li><strong>Quantity:</strong> ${data.quantity}</li>` : ""}
          ${data.material ? `<li><strong>Material:</strong> ${data.material}</li>` : ""}
          ${data.tolerance ? `<li><strong>Tolerance:</strong> ${data.tolerance}</li>` : ""}
          ${data.timeline ? `<li><strong>Timeline:</strong> ${data.timeline}</li>` : ""}
          ${data.finish ? `<li><strong>Surface Finish:</strong> ${data.finish}</li>` : ""}
        </ul>
        ${data.description ? `<h3>Project Description</h3><p>${data.description}</p>` : ""}
      `;
    } else {
      emailSubject = `New Contact Form Message: ${data.subject || "General Inquiry"}`;
      emailBody = `
        <h2>New Contact Form Submission</h2>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          ${data.company ? `<li><strong>Company:</strong> ${data.company}</li>` : ""}
          ${data.phone ? `<li><strong>Phone:</strong> ${data.phone}</li>` : ""}
          ${data.subject ? `<li><strong>Subject:</strong> ${data.subject}</li>` : ""}
        </ul>
        <h3>Message</h3>
        <p>${data.message || "No message provided"}</p>
      `;
    }

    console.log("Sending email to:", RECIPIENT_EMAILS);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Humpal Design Support <onboarding@resend.dev>",
        to: RECIPIENT_EMAILS,
        reply_to: data.email,
        subject: emailSubject,
        html: emailBody,
      }),
    });

    const emailResponse = await res.json();
    
    if (!res.ok) {
      console.error("Resend API error:", emailResponse);
      throw new Error(emailResponse.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
