import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

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

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

// Get client IP from request headers
function getClientIP(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
         req.headers.get("x-real-ip") || 
         "unknown";
}

// HTML escape function to prevent XSS
function escapeHtml(text: string | undefined | null): string {
  if (!text) return "";
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}

// Validation schema for contact/quote form
const contactFormSchema = z.object({
  type: z.enum(["contact", "quote"]),
  name: z.string().min(1, "Name is required").max(100, "Name too long").trim(),
  email: z.string().email("Invalid email address").max(255, "Email too long").trim(),
  company: z.string().max(200, "Company name too long").optional().nullable(),
  phone: z.string().max(30, "Phone number too long").optional().nullable(),
  subject: z.string().max(200, "Subject too long").optional().nullable(),
  message: z.string().max(5000, "Message too long").optional().nullable(),
  // Quote-specific fields
  quantity: z.string().max(50, "Quantity too long").optional().nullable(),
  material: z.string().max(100, "Material too long").optional().nullable(),
  tolerance: z.string().max(100, "Tolerance too long").optional().nullable(),
  timeline: z.string().max(100, "Timeline too long").optional().nullable(),
  finish: z.string().max(100, "Finish too long").optional().nullable(),
  description: z.string().max(5000, "Description too long").optional().nullable(),
});

type ContactFormRequest = z.infer<typeof contactFormSchema>;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const rawData = await req.json();
    
    // Validate and sanitize input
    const parseResult = contactFormSchema.safeParse(rawData);
    if (!parseResult.success) {
      console.warn("Validation failed:", parseResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: "Invalid form data", 
          details: parseResult.error.errors.map(e => e.message).join(", ")
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    const data = parseResult.data;
    console.log("Received form submission:", { type: data.type, name: data.name?.substring(0, 20) });

    // Escape all user inputs for safe HTML embedding
    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safeCompany = escapeHtml(data.company);
    const safePhone = escapeHtml(data.phone);
    const safeSubject = escapeHtml(data.subject);
    const safeMessage = escapeHtml(data.message);
    const safeQuantity = escapeHtml(data.quantity);
    const safeMaterial = escapeHtml(data.material);
    const safeTolerance = escapeHtml(data.tolerance);
    const safeTimeline = escapeHtml(data.timeline);
    const safeFinish = escapeHtml(data.finish);
    const safeDescription = escapeHtml(data.description);

    let emailSubject: string;
    let emailBody: string;

    if (data.type === "quote") {
      emailSubject = `New Quote Request from ${safeName}${safeCompany ? ` (${safeCompany})` : ""}`;
      emailBody = `
        <h2>New Quote Request</h2>
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${safeName}</li>
          <li><strong>Email:</strong> ${safeEmail}</li>
          ${safeCompany ? `<li><strong>Company:</strong> ${safeCompany}</li>` : ""}
          ${safePhone ? `<li><strong>Phone:</strong> ${safePhone}</li>` : ""}
        </ul>
        <h3>Project Details</h3>
        <ul>
          ${safeQuantity ? `<li><strong>Quantity:</strong> ${safeQuantity}</li>` : ""}
          ${safeMaterial ? `<li><strong>Material:</strong> ${safeMaterial}</li>` : ""}
          ${safeTolerance ? `<li><strong>Tolerance:</strong> ${safeTolerance}</li>` : ""}
          ${safeTimeline ? `<li><strong>Timeline:</strong> ${safeTimeline}</li>` : ""}
          ${safeFinish ? `<li><strong>Surface Finish:</strong> ${safeFinish}</li>` : ""}
        </ul>
        ${safeDescription ? `<h3>Project Description</h3><p>${safeDescription}</p>` : ""}
      `;
    } else {
      emailSubject = `New Contact Form Message: ${safeSubject || "General Inquiry"}`;
      emailBody = `
        <h2>New Contact Form Submission</h2>
        <ul>
          <li><strong>Name:</strong> ${safeName}</li>
          <li><strong>Email:</strong> ${safeEmail}</li>
          ${safeCompany ? `<li><strong>Company:</strong> ${safeCompany}</li>` : ""}
          ${safePhone ? `<li><strong>Phone:</strong> ${safePhone}</li>` : ""}
          ${safeSubject ? `<li><strong>Subject:</strong> ${safeSubject}</li>` : ""}
        </ul>
        <h3>Message</h3>
        <p>${safeMessage || "No message provided"}</p>
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
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
