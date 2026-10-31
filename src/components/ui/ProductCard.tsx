import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card } from './Card';
import { Heading } from './Heading';
import { Text } from './Text';
import { Link } from './Link';

export interface ProductVisualAsset {
  monogram: string;
  domainCode: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ProductCardProps {
  name: string;
  category: string;
  relationship?: string;
  summary: string;
  statusNote?: string;
  actionLabel?: string;
  href?: string;
  visualAsset?: ProductVisualAsset;
  onSelect?: () => void;
}

/**
 * Reusable Product Card Component
 * Respects the corporate hierarchy: communicates that a product is built by Piqqudim
 * without turning the corporate website into a product marketplace.
 * Supports optional product visual assets (logo/screenshot/hero visual) with a clean
 * architectural typographic placeholder when official imagery is not yet supplied.
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  relationship = 'Built by Piqqudim',
  summary,
  statusNote,
  actionLabel = 'Learn More',
  href = '/products',
  visualAsset,
  onSelect,
}) => {
  return (
    <Card
      as="article"
      surface="primary"
      padding="md"
      interactive
      className="flex flex-col justify-between h-full"
    >
      <div>
        {/* Optional Product Visual / Typographic Asset Slot */}
        {visualAsset && (
          <div className="mb-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden">
            {visualAsset.imageUrl ? (
              <img
                src={visualAsset.imageUrl}
                alt={visualAsset.imageAlt || `${name} visual preview`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-36 object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="h-28 px-5 py-4 flex items-end justify-between bg-[var(--color-bg-secondary)]"
              >
                <span className="font-mono text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                  {visualAsset.monogram}
                </span>
                <span className="font-mono text-[11px] text-[var(--color-text-muted)]">
                  {visualAsset.domainCode}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
          <span className="font-medium text-[var(--color-accent)]">{category}</span>
          <span aria-hidden="true">·</span>
          <span>{relationship}</span>
          {statusNote ? (
            <>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{statusNote}</span>
            </>
          ) : null}
        </div>

        <Heading as="h3" variant="h3" className="mb-3">
          {name}
        </Heading>

        <Text variant="small" tone="secondary" className="mb-6">
          {summary}
        </Text>
      </div>

      <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
        {onSelect ? (
          <button
            type="button"
            onClick={onSelect}
            aria-label={`${actionLabel} about ${name}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>{actionLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        ) : (
          <Link
            href={href}
            variant="accent"
            aria-label={`${actionLabel} about ${name}`}
            className="text-xs font-semibold"
          >
            <span>{actionLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </Card>
  );
};
