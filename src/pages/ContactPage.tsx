import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CONTACT_CATEGORIES,
  contactConfig,
  hasVerifiedContactDetails,
  InquiryTypeOption,
} from '../data/contact';
import { SEO } from '../components/seo/SEO';
import { ContactForm, DirectContactInfo } from '../components/contact';
import {
  Section,
  Grid,
  Heading,
  Text,
  Button,
  Badge,
  Card,
} from '../components/ui';

/**
 * Official Piqqudim Contact Page (Phase 7B — /contact)
 * Exact Section 21 Flow:
 * Contact Hero → Contact Categories → Contact Form →
 * Direct Contact Information (if available) → Business / Partnership CTA → Careers CTA → Footer
 */
export const ContactPage: React.FC = () => {
  const formSectionRef = useRef<HTMLDivElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const [inquiryType, setInquiryType] = useState<InquiryTypeOption>('General');
  const verifiedDirectContactAvailable = hasVerifiedContactDetails(contactConfig);

  const handleSelectCategory = (type: InquiryTypeOption) => {
    setInquiryType(type);
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 250);
  };

  return (
    <>
      <SEO
        title="Contact | Piqqudim"
        description="Let's build something meaningful. Contact Piqqudim for business, technology, partnership, product, career, and general inquiries."
        canonicalPath="/contact"
      />

      {/* =====================================================================
          1. CONTACT HERO
          Headline: Let's build something meaningful.
          ===================================================================== */}
      <Section id="contact-hero" surface="grid" spacing="lg" borderBottom>
        <div className="max-w-[52rem] space-y-5">
          <Badge tone="accent" prefix="Piqqudim">
            Contact
          </Badge>

          <Heading as="h1" variant="display">
            Let’s build something meaningful.
          </Heading>

          <Text variant="body-lg" tone="secondary" measure>
            Piqqudim welcomes relevant business, technology, partnership, product, career, and
            general inquiries. Tell us what you are working on or how you would like to connect.
          </Text>
        </div>
      </Section>

      {/* =====================================================================
          2. CONTACT CATEGORIES
          Informational categories with zero fake department email addresses
          ===================================================================== */}
      <Section id="contact-categories" surface="secondary" spacing="lg" borderBottom>
        <div className="space-y-10">
          <div className="max-w-[48rem] space-y-3">
            <Badge tone="accent" prefix="01">
              Inquiry Areas
            </Badge>
            <Heading as="h2" variant="h2">
              How can we help?
            </Heading>
            <Text variant="body" tone="secondary" measure>
              Select an inquiry area below to pre-select the topic in the contact form, or scroll
              down to send a general message.
            </Text>
          </div>

          <Grid cols={3} gap="md">
            {CONTACT_CATEGORIES.map((category) => {
              const isSelected = inquiryType === category.inquiryType;
              return (
                <Card
                  key={category.id}
                  surface={isSelected ? 'elevated' : 'primary'}
                  padding="md"
                  interactive
                  className="flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-semibold text-[var(--color-accent)]">
                        {category.index}.
                      </span>
                      <span className="text-[var(--color-text-muted)]">Inquiry Category</span>
                    </div>
                    <Heading as="h3" variant="h3">
                      {category.name}
                    </Heading>
                    <Text variant="small" tone="secondary">
                      {category.description}
                    </Text>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border)]">
                    <button
                      type="button"
                      onClick={() => handleSelectCategory(category.inquiryType)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors cursor-pointer"
                    >
                      <span>Select {category.name} Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </Card>
              );
            })}
          </Grid>
        </div>
      </Section>

      {/* =====================================================================
          3. CONTACT FORM & 4. DIRECT CONTACT INFORMATION (IF AVAILABLE)
          ===================================================================== */}
      <Section id="contact-form-section" surface="primary" spacing="lg" borderBottom>
        <div
          ref={formSectionRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <Badge tone="accent" prefix="02">
                Send an Inquiry
              </Badge>
              <Heading as="h2" variant="h2">
                Get in touch with Piqqudim.
              </Heading>
              <Text variant="body" tone="secondary">
                Complete the inquiry form with your contact details, inquiry type, and message.
              </Text>
            </div>

            {/* Section 11: Direct Contact Information (Only renders when verified fields exist) */}
            {verifiedDirectContactAvailable ? (
              <DirectContactInfo config={contactConfig} />
            ) : (
              <Card surface="secondary" padding="md" className="space-y-2">
                <Text as="span" variant="label" tone="accent" className="block">
                  Corporate Positioning
                </Text>
                <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Rendering the unseen.
                </div>
                <Text variant="small" tone="secondary">
                  Started Here. Built Everywhere.
                </Text>
              </Card>
            )}
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              selectedInquiryType={inquiryType}
              onInquiryTypeChange={setInquiryType}
              nameInputRef={nameInputRef}
            />
          </div>
        </div>
      </Section>

      {/* =====================================================================
          5. BUSINESS / PARTNERSHIP CTA & 6. CAREERS CTA
          ===================================================================== */}
      <Section id="business-and-careers-cta" surface="elevated" spacing="lg">
        <Grid cols={2} gap="lg">
          {/* Section 12: Business Inquiry Experience */}
          <Card surface="primary" padding="lg" className="flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <Badge tone="accent" prefix="03">
                Business & Partnerships
              </Badge>
              <Heading as="h2" variant="h3">
                Working with Piqqudim.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Have a project, partnership, or technical opportunity in mind? Tell us what you’re
                building and how Piqqudim could be involved.
              </Text>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]">
              <button
                type="button"
                onClick={() => handleSelectCategory('Partnership')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors cursor-pointer"
              >
                <span>Go to contact form</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </Card>

          {/* Section 13: Careers Connection */}
          <Card surface="primary" padding="lg" className="flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <Badge tone="accent" prefix="04">
                Careers at Piqqudim
              </Badge>
              <Heading as="h2" variant="h3">
                Interested in building with us?
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Interested in building with us? Explore opportunities at Piqqudim.
              </Text>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]">
              <Button
                variant="outline"
                size="sm"
                href="/careers"
                iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                View Careers
              </Button>
            </div>
          </Card>
        </Grid>
      </Section>
    </>
  );
};
