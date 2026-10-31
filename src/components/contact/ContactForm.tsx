import React, { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INQUIRY_TYPE_OPTIONS, InquiryTypeOption } from '../../data/contact';
import { submitContactInquiry } from '../../services/contactSubmissionService';
import { Card } from '../ui/Card';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';

export interface ContactFormProps {
  selectedInquiryType: InquiryTypeOption;
  onInquiryTypeChange: (type: InquiryTypeOption) => void;
  nameInputRef?: React.RefObject<HTMLInputElement | null>;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * Reusable Professional Contact Form (Phase 7 — Section 10)
 * Fields:
 * - Name (required)
 * - Email (required)
 * - Company / Organization (optional)
 * - Inquiry Type (General, Business, Technology, Partnership, Product, Careers)
 * - Message (required)
 *
 * Includes accessible labels, required-field indicators, field-level & summary validation,
 * submit state, error state, and honest success state (only shown when the configured
 * submission service returns an actual 2xx response).
 */
export const ContactForm: React.FC<ContactFormProps> = ({
  selectedInquiryType,
  onInquiryTypeChange,
  nameInputRef,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<
    'idle' | 'validation-error' | 'submitting' | 'success' | 'service-error'
  >('idle');
  const [serviceStatusMessage, setServiceStatusMessage] = useState('');
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string | null>(null);

  const validateFields = (): boolean => {
    const errors: FieldErrors = {};

    if (!name.trim()) {
      errors.name = 'Please enter your name.';
    }

    if (!email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please enter a valid email address (for example, name@domain.com).';
    }

    if (!message.trim()) {
      errors.message = 'Please include a message describing your inquiry.';
    } else if (message.trim().length < 10) {
      errors.message = 'Please provide a brief description (at least 10 characters).';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) {
      setSubmitState('validation-error');
      setServiceStatusMessage('Please review and resolve the highlighted fields below.');
      return;
    }

    setFieldErrors({});
    setSubmitState('submitting');
    setServiceStatusMessage('');

    const result = await submitContactInquiry({
      name,
      email,
      organization,
      inquiryType: selectedInquiryType,
      message,
    });

    if (result.ok) {
      setSubmitState('success');
      setServiceStatusMessage(result.message);
      if (result.mailtoUrl) {
        setLastMailtoUrl(result.mailtoUrl);
      }
    } else {
      setSubmitState('service-error');
      setServiceStatusMessage(result.message);
    }
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setOrganization('');
    onInquiryTypeChange('General');
    setMessage('');
    setFieldErrors({});
    setSubmitState('idle');
    setServiceStatusMessage('');
    setLastMailtoUrl(null);
  };

  return (
    <Card surface="primary" padding="lg">
      {submitState === 'success' ? (
        <div
          role="status"
          aria-live="polite"
          className="p-6 rounded-[var(--radius-md)] border border-[var(--color-accent-border)] bg-[var(--color-success-bg)] space-y-4"
        >
          <div className="flex items-center gap-2.5 text-sm font-semibold text-[var(--color-success)]">
            <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Inquiry Processed</span>
          </div>
          <Text variant="body" tone="primary">
            {serviceStatusMessage}
          </Text>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {lastMailtoUrl ? (
              <a
                href={lastMailtoUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-button-text)] hover:opacity-90 transition-opacity"
              >
                <span>Open in Email App</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ) : null}
            <Button variant="outline" size="sm" onClick={handleResetForm}>
              Send another message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {(submitState === 'validation-error' || submitState === 'service-error') && (
            <div
              role="alert"
              aria-live="assertive"
              className="p-4 rounded-[var(--radius-md)] border border-[var(--color-error)] bg-[var(--color-error-bg)] flex items-start gap-3 text-xs text-[var(--color-error)]"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <div className="font-semibold">
                  {submitState === 'validation-error'
                    ? 'Form Validation Required'
                    : 'Submission Service Not Connected'}
                </div>
                <p className="leading-relaxed">{serviceStatusMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
              >
                Name <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                ref={nameInputRef}
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (fieldErrors.name) {
                    setFieldErrors((prev) => ({ ...prev, name: undefined }));
                  }
                }}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                placeholder="Your full name"
                className={`w-full min-h-[2.75rem] px-3.5 py-2 text-sm bg-[var(--color-bg-primary)] border rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors ${
                  fieldErrors.name
                    ? 'border-[var(--color-error)]'
                    : 'border-[var(--color-border-strong)] focus:border-[var(--color-accent)]'
                }`}
              />
              {fieldErrors.name ? (
                <p
                  id="contact-name-error"
                  className="mt-1.5 text-xs text-[var(--color-error)] font-medium"
                >
                  {fieldErrors.name}
                </p>
              ) : null}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
              >
                Email <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) {
                    setFieldErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                placeholder="name@domain.com"
                className={`w-full min-h-[2.75rem] px-3.5 py-2 text-sm bg-[var(--color-bg-primary)] border rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors ${
                  fieldErrors.email
                    ? 'border-[var(--color-error)]'
                    : 'border-[var(--color-border-strong)] focus:border-[var(--color-accent)]'
                }`}
              />
              {fieldErrors.email ? (
                <p
                  id="contact-email-error"
                  className="mt-1.5 text-xs text-[var(--color-error)] font-medium"
                >
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Company / Organization (Optional) */}
            <div>
              <label
                htmlFor="contact-organization"
                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
              >
                Company / Organization{' '}
                <span className="font-normal text-[var(--color-text-muted)]">(optional)</span>
              </label>
              <input
                id="contact-organization"
                name="organization"
                type="text"
                autoComplete="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Organization or team name"
                className="w-full min-h-[2.75rem] px-3.5 py-2 text-sm bg-[var(--color-bg-primary)] border border-[var(--color-border-strong)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label
                htmlFor="contact-inquiry-type"
                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
              >
                Inquiry Type <span className="text-[var(--color-accent)]">*</span>
              </label>
              <select
                id="contact-inquiry-type"
                name="inquiryType"
                value={selectedInquiryType}
                onChange={(e) => onInquiryTypeChange(e.target.value as InquiryTypeOption)}
                className="w-full min-h-[2.75rem] px-3.5 py-2 text-sm bg-[var(--color-bg-primary)] border border-[var(--color-border-strong)] rounded-[var(--radius-md)] text-[var(--color-text-primary)]"
              >
                {INQUIRY_TYPE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
            >
              Message <span className="text-[var(--color-accent)]">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (fieldErrors.message) {
                  setFieldErrors((prev) => ({ ...prev, message: undefined }));
                }
              }}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
              placeholder="Tell us about your inquiry, project, or question..."
              className={`w-full p-3.5 text-sm bg-[var(--color-bg-primary)] border rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors ${
                fieldErrors.message
                  ? 'border-[var(--color-error)]'
                  : 'border-[var(--color-border-strong)] focus:border-[var(--color-accent)]'
              }`}
            />
            {fieldErrors.message ? (
              <p
                id="contact-message-error"
                className="mt-1.5 text-xs text-[var(--color-error)] font-medium"
              >
                {fieldErrors.message}
              </p>
            ) : null}
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <Text variant="small" tone="muted">
              Fields marked with <span className="text-[var(--color-accent)]">*</span> are required.
              Inquiries are delivered directly to{' '}
              <a
                href="mailto:piqqidimLTD@gmail.com"
                className="text-[var(--color-accent)] hover:underline"
              >
                piqqidimLTD@gmail.com
              </a>.
            </Text>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={submitState === 'submitting'}
              iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              {submitState === 'submitting' ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
};
