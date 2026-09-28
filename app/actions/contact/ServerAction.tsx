"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  try {
    // 1. Verify reCAPTCHA v3 Token with Google API
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
      },
    );

    const recaptchaJson = await recaptchaRes.json();

    // Check score threshold (0.0 = bot, 1.0 = human)
    if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
      return {
        success: false,
        error: "reCAPTCHA verification failed. Please try submitting again.",
      };
    }

    // 2. Dispatch Email via Resend
    const recipient = process.env.CONTACT_NOTIFICATION_EMAIL;
    if (!recipient) {
      throw new Error(
        "Missing CONTACT_NOTIFICATION_EMAIL in environment variables.",
      );
    }

    const emailResponse = await resend.emails.send({
      from: "Seventh Gear Tire Works <onboarding@resend.dev>", // Default Resend testing email
      to: recipient,
      subject: `New Commercial Tire Inquiry: ${data.fullName}`,
      html: `
        <h2>New Commercial Tire Inquiry</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.companyName || "N/A"}</p>
        <p><strong>Service Requested:</strong> ${data.serviceType || "N/A"}</p>
        <p><strong>Fleet Size:</strong> ${data.fleetSize || "N/A"}</p>
        <p><strong>Location/Yard:</strong> ${data.location || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "No additional message provided."}</p>
      `,
    });

    if (emailResponse.error) {
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
