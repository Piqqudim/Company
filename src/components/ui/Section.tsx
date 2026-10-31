import React from 'react';
import { Container, ContainerProps } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  surface?: 'primary' | 'secondary' | 'elevated' | 'inverse' | 'grid';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  borderTop?: boolean;
  borderBottom?: boolean;
  containerSize?: ContainerProps['size'];
  withContainer?: boolean;
  as?: 'section' | 'div' | 'article' | 'aside';
}

const surfaceClasses: Record<NonNullable<SectionProps['surface']>, string> = {
  primary: 'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]',
  secondary: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]',
  elevated: 'bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]',
  inverse: 'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]',
  grid: 'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]',
};

const spacingClasses: Record<NonNullable<SectionProps['spacing']>, string> = {
  none: 'py-0',
  sm: 'py-10 md:py-14',
  md: 'py-14 md:py-20 lg:py-24',
  lg: 'py-20 md:py-28 lg:py-32',
};

export const Section: React.FC<SectionProps> = ({
  surface = 'primary',
  spacing = 'md',
  borderTop = false,
  borderBottom = false,
  containerSize = 'lg',
  withContainer = true,
  as: Component = 'section',
  className = '',
  children,
  ...props
}) => {
  const borderClass = [
    borderTop ? 'border-t border-[var(--color-border)]' : '',
    borderBottom ? 'border-b border-[var(--color-border)]' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={`${surfaceClasses[surface]} ${spacingClasses[spacing]} ${borderClass} ${className}`.trim()}
      {...props}
    >
      {withContainer ? <Container size={containerSize}>{children}</Container> : children}
    </Component>
  );
};
