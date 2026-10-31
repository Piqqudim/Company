import React from 'react';
import { Section } from './Section';
import { Heading } from './Heading';
import { Text } from './Text';
import { Badge } from './Badge';

export interface PageHeaderProps {
  kicker?: string;
  title: string;
  description: string;
  metadata?: string;
  actions?: React.ReactNode;
  surface?: 'primary' | 'secondary' | 'grid';
}

/**
 * Reusable Page Header Component
 * Provides consistent architectural hierarchy for all top-level routes.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  description,
  metadata,
  actions,
  surface = 'primary',
}) => {
  return (
    <Section surface={surface} spacing="md" borderBottom>
      <div className="max-w-[54rem] space-y-5">
        {(kicker || metadata) && (
          <div className="flex flex-wrap items-center gap-2">
            {kicker ? <Badge tone="accent">{kicker}</Badge> : null}
            {kicker && metadata ? (
              <span aria-hidden="true" className="text-xs text-[var(--color-text-muted)]">
                ·
              </span>
            ) : null}
            {metadata ? <Badge tone="neutral">{metadata}</Badge> : null}
          </div>
        )}

        <Heading as="h1" variant="h1">
          {title}
        </Heading>

        <Text variant="body-lg" tone="secondary" measure>
          {description}
        </Text>

        {actions ? <div className="pt-3 flex flex-wrap items-center gap-3">{actions}</div> : null}
      </div>
    </Section>
  );
};
