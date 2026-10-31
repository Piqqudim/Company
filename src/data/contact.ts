/**
 * Piqqudim Contact Configuration & Inquiry Data Model (src/data/contact.ts)
 * Separates contactConfig, inquiry categories, and form options from UI components.
 * Strict adherence to Content Accuracy rules: zero invented email addresses, phone numbers,
 * office addresses, or social profiles.
 */

export type InquiryTypeOption =
  | 'General'
  | 'Business'
  | 'Technology'
  | 'Partnership'
  | 'Product'
  | 'Careers';

export interface ContactCategorySpec {
  id: string;
  index: string;
  name: string;
  inquiryType: InquiryTypeOption;
  description: string;
}

export interface SocialLinkSpec {
  label: string;
  url: string;
}

/**
 * Centralized Direct Contact Configuration (Phase 7 — Section 11)
 * contactConfig
 * - email
 * - phone
 * - address
 * - socialLinks
 * - businessHours
 *
 * Only fields containing real, verified values are rendered on the website.
 */
export interface ContactConfig {
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLinkSpec[];
  businessHours?: string;
  submissionEndpoint?: string;
}

export const contactConfig: ContactConfig = {
  email: undefined,
  phone: undefined,
  address: undefined,
  socialLinks: [],
  businessHours: undefined,
  submissionEndpoint:
    typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONTACT_API_URL
      ? String(import.meta.env.VITE_CONTACT_API_URL)
      : 'https://formsubmit.co/ajax/piqqidimLTD@gmail.com',
};

/**
 * Alias maintained for module compatibility
 */
export const CONTACT_CONFIG = contactConfig;

/**
 * Returns true only when at least one verified direct contact field is populated
 */
export function hasVerifiedContactDetails(config: ContactConfig = contactConfig): boolean {
  return Boolean(
    (config.email && config.email.trim()) ||
      (config.phone && config.phone.trim()) ||
      (config.address && config.address.trim()) ||
      (config.businessHours && config.businessHours.trim()) ||
      (config.socialLinks && config.socialLinks.length > 0)
  );
}

/**
 * Informational Contact Categories (Phase 7 — Section 9)
 * Explains the types of inquiries Piqqudim receives without inventing department email addresses.
 */
export const CONTACT_CATEGORIES: ContactCategorySpec[] = [
  {
    id: 'business',
    index: '01',
    name: 'Business',
    inquiryType: 'Business',
    description: 'For business and commercial inquiries.',
  },
  {
    id: 'technology',
    index: '02',
    name: 'Technology',
    inquiryType: 'Technology',
    description: 'For engineering, technology, research, or technical discussions.',
  },
  {
    id: 'partnerships',
    index: '03',
    name: 'Partnerships',
    inquiryType: 'Partnership',
    description: 'For potential collaborations and partnerships.',
  },
  {
    id: 'products',
    index: '04',
    name: 'Products',
    inquiryType: 'Product',
    description: 'For questions related to Piqqudim products.',
  },
  {
    id: 'careers',
    index: '05',
    name: 'Careers',
    inquiryType: 'Careers',
    description: 'For employment and talent-related inquiries.',
  },
];

/**
 * Contact Form Inquiry Type Options (Phase 7 — Section 10)
 */
export const INQUIRY_TYPE_OPTIONS: { value: InquiryTypeOption; label: string }[] = [
  { value: 'General', label: 'General' },
  { value: 'Business', label: 'Business' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Product', label: 'Product' },
  { value: 'Careers', label: 'Careers' },
];
