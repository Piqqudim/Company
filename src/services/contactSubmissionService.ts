import { contactConfig, InquiryTypeOption } from '../data/contact';

export interface ContactInquiryPayload {
  name: string;
  email: string;
  organization?: string;
  inquiryType: InquiryTypeOption;
  message: string;
}

export interface ContactSubmissionResult {
  ok: boolean;
  code?: 'SUCCESS' | 'MAILTO_DISPATCH' | 'ENDPOINT_NOT_CONFIGURED' | 'SERVER_ERROR' | 'NETWORK_ERROR';
  message: string;
  mailtoUrl?: string;
}

/**
 * Generates a pre-filled mailto URL directly addressed to piqqidimLTD@gmail.com
 */
export function buildMailtoUrl(
  payload: ContactInquiryPayload,
  recipientEmail = contactConfig.email || 'piqqidimLTD@gmail.com'
): string {
  const subject = `[${payload.inquiryType} Inquiry] from ${payload.name}${
    payload.organization ? ` (${payload.organization})` : ''
  }`;
  const body =
`Hello Piqqudim Team,

${payload.message}

---
Sender Information:
- Name: ${payload.name}
- Email: ${payload.email}
- Organization: ${payload.organization || 'Not provided'}
- Inquiry Category: ${payload.inquiryType}
- Sent: ${new Date().toLocaleString()}`;

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

/**
 * Contact Submission Service
 * Transmits inquiry to piqqidimLTD@gmail.com via submission service or direct mail dispatch.
 */
export async function submitContactInquiry(
  payload: ContactInquiryPayload
): Promise<ContactSubmissionResult> {
  const recipientEmail = contactConfig.email?.trim() || 'piqqidimLTD@gmail.com';
  const mailtoUrl = buildMailtoUrl(payload, recipientEmail);
  const endpoint = contactConfig.submissionEndpoint?.trim();

  // 1. Attempt delivery via HTTP endpoint (FormSubmit or custom API)
  if (endpoint && endpoint.startsWith('http')) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: payload.name.trim(),
          email: payload.email.trim(),
          organization: payload.organization?.trim() || 'Not provided',
          inquiryType: payload.inquiryType,
          message: payload.message.trim(),
          _subject: `[Piqqudim ${payload.inquiryType} Inquiry] from ${payload.name}`,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        return {
          ok: true,
          code: 'SUCCESS',
          message: `Your inquiry has been received and forwarded to Piqqudim (${recipientEmail}). We will get back to you shortly.`,
          mailtoUrl,
        };
      }
    } catch {
      // Endpoint unavailable or blocked by browser/CORS: seamlessly proceed to mailto
    }
  }

  // 2. Direct email delivery fallback using mailto
  try {
    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }
  } catch {
    // Ignore iframe navigation constraints
  }

  return {
    ok: true,
    code: 'MAILTO_DISPATCH',
    message: `Your inquiry has been prepared for ${recipientEmail}. We've opened your email app with your message, or you can send directly using the button below.`,
    mailtoUrl,
  };
}
