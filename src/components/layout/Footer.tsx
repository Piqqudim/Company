import React from 'react';
import {
  CORPORATE_IDENTITY,
  ECOSYSTEM_PRODUCT_SLOTS,
} from '../../data/siteArchitecture';
import { Container } from '../ui/Container';
import { Link } from '../ui/Link';
import { Text } from '../ui/Text';
import { Divider } from '../ui/Divider';
import { PiqqudimLogo } from '../ui/PiqqudimLogo';

/**
 * Global Corporate Footer
 * Quiet, structured institutional footer containing company identity,
 * Company links, Products links, Contact links, and legal notices.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Corporate footer"
      className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] text-[var(--color-text-primary)] transition-colors duration-150"
    >
      <Container size="lg" className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Corporate Identity & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              exact
              className="inline-flex items-center gap-3 text-xl font-bold tracking-[-0.03em] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:no-underline"
            >
              <PiqqudimLogo size="md" ariaLabel="Piqqudim Emblem" />
              <span>{CORPORATE_IDENTITY.name}</span>
            </Link>
            <Text variant="small" tone="primary" className="font-semibold">
              Rendering the unseen.
            </Text>
            <Text variant="small" tone="secondary" className="max-w-[38ch]">
              {CORPORATE_IDENTITY.coreDefinition}
            </Text>
            <div className="pt-1 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <Text as="span" variant="code" tone="accent" className="font-medium">
                {CORPORATE_IDENTITY.mantra}
              </Text>
              <span aria-hidden="true">·</span>
              <span>{CORPORATE_IDENTITY.positioning}</span>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="md:col-span-2 space-y-3">
            <Text as="span" variant="label" tone="primary" className="block font-semibold">
              Company
            </Text>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" variant="muted" className="text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/people" variant="muted" className="text-sm">
                  People
                </Link>
              </li>
              <li>
                <Link href="/careers" variant="muted" className="text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Technology & Products */}
          <div className="md:col-span-3 space-y-3">
            <Text as="span" variant="label" tone="primary" className="block font-semibold">
              Technology
            </Text>
            <ul className="space-y-2.5">
              <li>
                <Link href="/technology" variant="muted" className="text-sm">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/products" variant="muted" className="text-sm">
                  Products
                </Link>
              </li>
              {ECOSYSTEM_PRODUCT_SLOTS.map((product) => (
                <li key={product.id}>
                  <Link href="/products" variant="muted" className="text-sm">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Connect */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-3">
              <Text as="span" variant="label" tone="primary" className="block font-semibold">
                Resources
              </Text>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/news" variant="muted" className="text-sm">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Text as="span" variant="label" tone="primary" className="block font-semibold">
                Connect
              </Text>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/contact" variant="muted" className="text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider spacing="md" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <div>
            © {currentYear} {CORPORATE_IDENTITY.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" variant="muted" className="text-xs">
              Privacy
            </Link>
            <Link href="/terms" variant="muted" className="text-xs">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
