"use server";

import { Resend } from "resend";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface ContactFormData {
  // Step 1 Details
  serviceType?: string;
  fleetSize?: string;

  // Step 2 Details
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;

  // Step 3 / 4 Details
  location?: string;
  message?: string;

  // Security
  recaptchaToken: string;
}

export async function submitContactForm(data: ContactFormData) {
  const { RESEND_API_KEY, RECAPTCHA_SECRET_KEY, CONTACT_NOTIFICATION_EMAIL } =
    process.env;

  // Fail fast with a clear server-side log if the server isn't configured yet,
  // instead of letting `new Resend()` throw an uncaught error below.
  if (!RESEND_API_KEY || !RECAPTCHA_SECRET_KEY || !CONTACT_NOTIFICATION_EMAIL) {
    console.error("Contact form is missing required environment variables:", {
      RESEND_API_KEY: Boolean(RESEND_API_KEY),
      RECAPTCHA_SECRET_KEY: Boolean(RECAPTCHA_SECRET_KEY),
      CONTACT_NOTIFICATION_EMAIL: Boolean(CONTACT_NOTIFICATION_EMAIL),
    });
    return {
      success: false,
      error:
        "The contact form isn't fully set up yet. Please call us directly, or try again later.",
    };
  }

  try {
    // 1. Verify reCAPTCHA v3 Token with Google API
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
      },
    );

    const recaptchaJson = await recaptchaRes.json();

    // Check score threshold (0.0 = bot, 1.0 = human)
    if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
      return {
        success: false,
        error: "We couldn't verify your submission. Please try again.",
      };
    }

    // 2. Dispatch Email via Resend
    const resend = new Resend(RESEND_API_KEY);
    const emailResponse = await resend.emails.send({
      from: "Seventh Gear Tire Works <onboarding@resend.dev>", // Default Resend testing email
      to: CONTACT_NOTIFICATION_EMAIL,
      subject: `New Commercial Tire Inquiry: ${escapeHtml(data.fullName)}`,
      html: `
        <h2>New Commercial Tire Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.companyName || "N/A")}</p>
        <p><strong>Service Requested:</strong> ${escapeHtml(data.serviceType || "N/A")}</p>
        <p><strong>Fleet Size:</strong> ${escapeHtml(data.fleetSize || "N/A")}</p>
        <p><strong>Location/Yard:</strong> ${escapeHtml(data.location || "N/A")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message || "No additional message provided.")}</p>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return { success: false, error: "Failed to send email notification." };
    }

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred while submitting the form.",
    };
  }
}
