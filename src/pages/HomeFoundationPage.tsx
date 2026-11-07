import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Layers, Compass, Terminal, Globe } from 'lucide-react';
import {
  CORPORATE_IDENTITY,
  TECHNOLOGY_DOMAIN_SLOTS,
  ECOSYSTEM_PRODUCT_SLOTS,
  ROUTE_SPECIFICATIONS,
} from '../data/siteArchitecture';
import {
  COLOR_TOKENS,
  TYPOGRAPHY_TOKENS,
  SPACING_TOKENS,
  BREAKPOINT_SPECS,
} from '../design-system/tokens';
import { SEO } from '../components/seo/SEO';
import {
  Section,
  Grid,
  Heading,
  Text,
  Button,
  Link,
  Badge,
  Card,
  Divider,
  TechnologyCard,
  ProductCard,
  JobCard,
  NewsCard,
  CTASection,
  PiqqudimLogo,
} from '../components/ui';

type FoundationTab = 'architecture' | 'tokens' | 'typography' | 'components';

export const HomeFoundationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FoundationTab>('architecture');
  const routeSpec = ROUTE_SPECIFICATIONS['/'];

  return (
    <>
      <SEO
        title={routeSpec.seoTitle}
        description={routeSpec.seoDescription}
        canonicalPath="/"
      />

      {/* 1. Corporate Hero Foundation with Integrated Vector Brand Mark */}
      <Section surface="grid" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent" prefix="Phase 01">
                Technical & Visual Foundation
              </Badge>
              <span aria-hidden="true" className="text-xs text-[var(--color-text-muted)]">
                ·
              </span>
              <Badge tone="neutral">{CORPORATE_IDENTITY.positioning}</Badge>
            </div>

            <Heading as="h1" variant="display">
              Rendering the unseen.
            </Heading>

            <Text variant="body-lg" tone="secondary" measure>
              {CORPORATE_IDENTITY.coreDefinition} This Phase 1 foundation establishes the corporate
              visual identity, vector emblem architecture, dark theme color system, typography scale,
              reusable UI component library, and routing architecture.
            </Text>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg" href="/technology">
                Explore Technology Architecture
              </Button>
              <Button variant="outline" size="lg" href="/about">
                Company Overview
              </Button>
            </div>
          </div>

          {/* Architectural Brand Emblem Anchor */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="w-full max-w-[20rem] p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex flex-col items-center text-center space-y-4">
              <PiqqudimLogo size="hero" ariaLabel="Piqqudim Official Vector Emblem" />
              <div className="space-y-1 pt-2 border-t border-[var(--color-border)] w-full">
                <div className="text-xs font-mono text-[var(--color-accent)]">
                  PIQQUDIM · CORPORATE MARK
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">
                  Native SVG reconstruction · Zero bounding box
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider spacing="lg" />

        {/* Architectural Principles Strip */}
        <Grid cols={4} gap="md">
          <div className="space-y-1.5">
            <Text as="span" variant="code" tone="accent" className="font-medium">
              01. Identity
            </Text>
            <Heading as="h2" variant="h4">
              Company First
            </Heading>
            <Text variant="small" tone="secondary">
              Communicates Piqqudim as an enduring engineering institution rather than a product
              marketplace.
            </Text>
          </div>

          <div className="space-y-1.5">
            <Text as="span" variant="code" tone="accent" className="font-medium">
              02. Aesthetic
            </Text>
            <Heading as="h2" variant="h4">
              White & Emerald Precision
            </Heading>
            <Text variant="small" tone="secondary">
              Crisp white primary canvas paired with emerald accents, with an instant toggle to Dark
              Theme (<code className="font-mono text-xs">--background-dark</code>).
            </Text>
          </div>

          <div className="space-y-1.5">
            <Text as="span" variant="code" tone="accent" className="font-medium">
              03. Positioning
            </Text>
            <Heading as="h2" variant="h4">
              Rendering the unseen.
            </Heading>
            <Text variant="small" tone="secondary">
              Engineered with technical depth, precision, and global reach across software and
              graphics systems.
            </Text>
          </div>

          <div className="space-y-1.5">
            <Text as="span" variant="code" tone="accent" className="font-medium">
              04. Ethos
            </Text>
            <Heading as="h2" variant="h4">
              We build.
            </Heading>
            <Text variant="small" tone="secondary">
              Direct, technical, and honest communication with zero invented statistics or buzzword
              clutter.
            </Text>
          </div>
        </Grid>
      </Section>

      {/* 2. Interactive Phase 1 Foundation Inspector */}
      <Section surface="secondary" spacing="sm" borderBottom>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Text as="span" variant="label" tone="accent" className="block mb-1">
              Phase 1 Deliverable Verification
            </Text>
            <Heading as="h2" variant="h3">
              Design System & Architectural Specification
            </Heading>
          </div>

          {/* Interactive Segmented View Switcher (Functional Buttons) */}
          <div
            role="tablist"
            aria-label="Phase 1 Foundation Specification Views"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)]"
          >
            {(
              [
                { id: 'architecture', label: '01. Page & Ecosystem Shell' },
                { id: 'tokens', label: '02. Color & Spacing System' },
                { id: 'typography', label: '03. Typography Scale' },
                { id: 'components', label: '04. Reusable Components' },
              ] as const
            ).map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-[var(--radius-sm)] transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[var(--color-accent)] text-[var(--color-button-text)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* TAB 1: Corporate Page & Ecosystem Structural Shell */}
      {activeTab === 'architecture' && (
        <>
          {/* Technology Domains Structural Preview */}
          <Section surface="primary" spacing="md" borderBottom>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-[44rem] space-y-2">
                <Badge tone="accent" prefix="01">
                  Technology Domains
                </Badge>
                <Heading as="h2" variant="h2">
                  Core Engineering Disciplines
                </Heading>
                <Text variant="body" tone="secondary">
                  Reusable <code className="font-mono text-xs">TechnologyCard</code> grid
                  demonstrating how Piqqudim’s core engineering focus areas are structured.
                </Text>
              </div>
              <Link href="/technology" variant="accent" className="text-sm font-semibold">
                <span>View Technology Route</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <Grid cols={2} gap="md">
              {TECHNOLOGY_DOMAIN_SLOTS.map((domain) => (
                <TechnologyCard
                  key={domain.index}
                  index={domain.index}
                  name={domain.name}
                  scope={domain.scope}
                  description={domain.description}
                  href="/technology"
                />
              ))}
            </Grid>
          </Section>

          {/* Product Ecosystem Relationship Preview */}
          <Section surface="secondary" spacing="md" borderBottom>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-[46rem] space-y-2">
                <Badge tone="accent" prefix="02">
                  Corporate Ecosystem Architecture
                </Badge>
                <Heading as="h2" variant="h2">
                  Built by Piqqudim
                </Heading>
                <Text variant="body" tone="secondary">
                  Products are presented as part of Piqqudim’s ecosystem using the reusable{' '}
                  <code className="font-mono text-xs">ProductCard</code> component without
                  overpowering the corporate identity.
                </Text>
              </div>
              <Link href="/products" variant="accent" className="text-sm font-semibold">
                <span>View Products Route</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <Grid cols={3} gap="md">
              {ECOSYSTEM_PRODUCT_SLOTS.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  relationship={product.relationship}
                  statusNote={product.statusNote}
                  summary={product.placeholderSummary}
                  href="/products"
                />
              ))}
            </Grid>
          </Section>

          {/* Route Map Verification */}
          <Section surface="primary" spacing="md">
            <div className="max-w-[46rem] space-y-2 mb-10">
              <Badge tone="accent" prefix="03">
                Routing Architecture
              </Badge>
              <Heading as="h2" variant="h2">
                Corporate Route Registry
              </Heading>
              <Text variant="body" tone="secondary">
                All required top-level routes and nested dynamic sub-route patterns are active and
                connected to the global navigation and SEO metadata handler.
              </Text>
            </div>

            <Grid cols={2} gap="sm">
              {Object.values(ROUTE_SPECIFICATIONS).map((route) => (
                <Card
                  key={route.path}
                  surface="secondary"
                  padding="sm"
                  interactive
                  className="flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-medium text-[var(--color-accent)]">
                        {route.path}
                        {route.dynamicSubroutes ? ` (+ ${route.dynamicSubroutes})` : ''}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {route.kicker}
                      </span>
                    </div>
                    <Heading as="h3" variant="h4">
                      {route.title}
                    </Heading>
                    <Text variant="small" tone="secondary">
                      {route.summary}
                    </Text>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {route.plannedModules.length} structural modules defined
                    </span>
                    <Link href={route.path} variant="accent" className="text-xs font-semibold">
                      Inspect Route →
                    </Link>
                  </div>
                </Card>
              ))}
            </Grid>
          </Section>
        </>
      )}

      {/* TAB 2: Color, Spacing & Responsive System */}
      {activeTab === 'tokens' && (
        <Section surface="primary" spacing="md">
          <div className="space-y-16">
            {/* Color System */}
            <div className="space-y-6">
              <div className="max-w-[46rem] space-y-2">
                <Badge tone="accent" prefix="Design Tokens">
                  Dark Theme Palette
                </Badge>
                <Heading as="h2" variant="h2">
                  Color System & Contrast Tokens
                </Heading>
                <Text variant="body" tone="secondary">
                  Defined globally via CSS variables in <code className="font-mono text-xs">:root</code>{' '}
                  (<code className="font-mono text-xs">--background-dark</code>,{' '}
                  <code className="font-mono text-xs">--text-primary-white</code>,{' '}
                  <code className="font-mono text-xs">--accent-green</code>,{' '}
                  <code className="font-mono text-xs">--accent-green-hover</code>).
                </Text>
              </div>

              <Grid cols={3} gap="sm">
                {COLOR_TOKENS.map((token) => (
                  <Card key={token.cssVar} surface="primary" padding="sm" className="space-y-4">
                    <div
                      className="h-16 w-full rounded-[var(--radius-md)] border border-[var(--color-border)]"
                      style={{ backgroundColor: `var(${token.cssVar})` }}
                      aria-label={`Color swatch for ${token.name}`}
                    />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <Heading as="h3" variant="h4">
                          {token.name}
                        </Heading>
                        <span className="font-mono text-xs text-[var(--color-accent)]">
                          {token.value}
                        </span>
                      </div>
                      <Text as="div" variant="code" tone="muted">
                        var({token.cssVar})
                      </Text>
                      <Text variant="small" tone="secondary" className="pt-1">
                        {token.role}
                      </Text>
                      <Text variant="label" tone="muted" className="pt-1 block">
                        {token.contrastNote}
                      </Text>
                    </div>
                  </Card>
                ))}
              </Grid>
            </div>

            <Divider />

            {/* Spacing Scale */}
            <div className="space-y-6">
              <div className="max-w-[46rem] space-y-2">
                <Badge tone="accent" prefix="Spatial Rhythm">
                  Spacing System
                </Badge>
                <Heading as="h2" variant="h2">
                  Consistent Spacing Scale
                </Heading>
                <Text variant="body" tone="secondary">
                  Reusable spacing tokens ensure deliberate whitespace and structured section rhythm.
                </Text>
              </div>

              <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] divide-y divide-[var(--color-border)] overflow-hidden">
                {SPACING_TOKENS.map((space) => (
                  <div
                    key={space.token}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--color-bg-primary)]"
                  >
                    <div className="flex items-center gap-4 min-w-[14rem]">
                      <span className="font-mono text-xs font-semibold text-[var(--color-accent)] w-20">
                        {space.token}
                      </span>
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">
                        {space.rem} ({space.px}px)
                      </span>
                    </div>

                    <div className="flex-1 flex items-center gap-4">
                      <div
                        className="h-3 bg-[var(--color-accent)] rounded-[2px] shrink-0"
                        style={{ width: `${Math.min(space.px * 2, 260)}px` }}
                      />
                      <span className="text-xs text-[var(--color-text-secondary)]">
                        {space.usage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/* Responsive Breakpoints */}
            <div className="space-y-6">
              <div className="max-w-[46rem] space-y-2">
                <Badge tone="accent" prefix="Viewport Adaptation">
                  Responsive Architecture
                </Badge>
                <Heading as="h2" variant="h2">
                  Multi-Viewport Adaptation Rules
                </Heading>
              </div>

              <Grid cols={2} gap="md">
                {BREAKPOINT_SPECS.map((bp) => (
                  <Card key={bp.name} surface="secondary" padding="md" className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Heading as="h3" variant="h4">
                        {bp.name}
                      </Heading>
                      <span className="font-mono text-xs text-[var(--color-accent)]">
                        {bp.range}
                      </span>
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      Grid: {bp.columns} · Padding: {bp.containerPadding}
                    </div>
                    <Text variant="small" tone="secondary" className="pt-1">
                      {bp.behavior}
                    </Text>
                  </Card>
                ))}
              </Grid>
            </div>
          </div>
        </Section>
      )}

      {/* TAB 3: Typography System */}
      {activeTab === 'typography' && (
        <Section surface="primary" spacing="md">
          <div className="max-w-[48rem] space-y-2 mb-10">
            <Badge tone="accent" prefix="Type Hierarchy">
              Plus Jakarta Sans & JetBrains Mono
            </Badge>
            <Heading as="h2" variant="h2">
              Typography Scale & Specimen
            </Heading>
            <Text variant="body" tone="secondary">
              Confident, technical heading proportions paired with high-legibility body prose (65–75ch
              measure) and tabular monospace specifications.
            </Text>
          </div>

          <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] divide-y divide-[var(--color-border)]">
            {TYPOGRAPHY_TOKENS.map((spec) => (
              <div
                key={spec.variant}
                className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline"
              >
                <div className="lg:col-span-4 space-y-1">
                  <div className="font-semibold text-sm text-[var(--color-text-primary)]">
                    {spec.label}
                  </div>
                  <div className="font-mono text-xs text-[var(--color-accent)]">
                    variant="{spec.variant}"
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    {spec.sizeSpec} · LH {spec.lineHeight} · {spec.weight}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] pt-1">
                    {spec.usage}
                  </div>
                </div>

                <div className="lg:col-span-8">
                  {spec.variant === 'display' && (
                    <Heading as="div" variant="display">
                      Rendering the unseen.
                    </Heading>
                  )}
                  {spec.variant === 'h1' && (
                    <Heading as="div" variant="h1">
                      Engineering foundational software and graphics systems.
                    </Heading>
                  )}
                  {spec.variant === 'h2' && (
                    <Heading as="div" variant="h2">
                      Core Technology & Platform Architecture
                    </Heading>
                  )}
                  {spec.variant === 'h3' && (
                    <Heading as="div" variant="h3">
                      01. Graphics, Compilers & Real-Time Engines
                    </Heading>
                  )}
                  {spec.variant === 'h4' && (
                    <Heading as="div" variant="h4">
                      Deterministic Build Pipelines & Systems Tooling
                    </Heading>
                  )}
                  {spec.variant === 'body-lg' && (
                    <Text variant="body-lg" tone="primary" measure>
                      Piqqudim builds software, graphics technology, game technology, developer
                      tools, digital platforms, and intelligent systems with long-term engineering
                      ambition.
                    </Text>
                  )}
                  {spec.variant === 'body' && (
                    <Text variant="body" tone="secondary" measure>
                      Every component in the corporate foundation is structured for clarity,
                      high-contrast legibility, keyboard accessibility, and maintainable expansion
                      across future product and research pages.
                    </Text>
                  )}
                  {spec.variant === 'small' && (
                    <Text variant="small" tone="secondary" measure>
                      Secondary technical specification text and card summary prose designed for
                      sustained readability at compact sizes.
                    </Text>
                  )}
                  {spec.variant === 'label' && (
                    <Badge tone="accent" prefix="02">
                      Systems Architecture Specification
                    </Badge>
                  )}
                  {spec.variant === 'nav' && (
                    <div className="flex items-center gap-6">
                      <Link href="/" exact variant="nav">
                        Active Nav Link
                      </Link>
                      <Link href="/technology" variant="nav">
                        Standard Nav Link
                      </Link>
                    </div>
                  )}
                  {spec.variant === 'button' && (
                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="primary" size="md">
                        Primary Action
                      </Button>
                      <Button variant="secondary" size="md">
                        Secondary Action
                      </Button>
                      <Button variant="outline" size="md">
                        Outline Action
                      </Button>
                    </div>
                  )}
                  {spec.variant === 'code' && (
                    <Text as="code" variant="code" tone="primary" className="block">
                      piqqudim::foundation::v1.0 · contrast_ratio: 18.1:1 · motion_budget: 150ms
                    </Text>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* TAB 4: Reusable UI Components Showcase */}
      {activeTab === 'components' && (
        <Section surface="primary" spacing="md">
          <div className="space-y-14">
            <div className="max-w-[48rem] space-y-2">
              <Badge tone="accent" prefix="Component Architecture">
                Modular Primitives
              </Badge>
              <Heading as="h2" variant="h2">
                Reusable Component Library
              </Heading>
              <Text variant="body" tone="secondary">
                All future Piqqudim pages are assembled from these standardized, accessible
                primitives.
              </Text>
            </div>

            {/* Brand Mark Vector Scale */}
            <Card surface="secondary" padding="md" className="space-y-6">
              <Heading as="h3" variant="h4">
                1. Official Vector Brand Emblem (PiqqudimLogo)
              </Heading>
              <Text variant="small" tone="secondary">
                Custom SVG vector reconstruction of the Piqqudim mark with metallic white surfaces,
                3D emerald bevel extrusions, and PCB circuit traces. Scales across all viewports with
                a transparent background.
              </Text>
              <div className="flex flex-wrap items-end gap-8 pt-2">
                <div className="flex flex-col items-center gap-2">
                  <PiqqudimLogo size="sm" />
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">sm (32px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PiqqudimLogo size="md" />
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">md (40px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PiqqudimLogo size="lg" />
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">lg (56px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PiqqudimLogo size="xl" />
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">xl (80px)</span>
                </div>
              </div>
            </Card>

            {/* Buttons & Links */}
            <Card surface="secondary" padding="md" className="space-y-6">
              <Heading as="h3" variant="h4">
                2. Interactive Controls (Button, Link, Badge)
              </Heading>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="md" href="/contact">
                  Primary Button
                </Button>
                <Button variant="secondary" size="md" href="/technology">
                  Secondary Surface
                </Button>
                <Button variant="outline" size="md" href="/products">
                  Outline Action
                </Button>
                <Button variant="ghost" size="md" href="/about">
                  Ghost Control
                </Button>
              </div>
              <Divider />
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/about" variant="default">
                  Standard Corporate Link
                </Link>
                <Link href="/technology" variant="accent">
                  Accent Technical Link →
                </Link>
                <Badge tone="accent" prefix="01">
                  Unboxed Technical Metadata
                </Badge>
                <Badge tone="neutral" prefix="Status">
                  WCAG AA Verified
                </Badge>
              </div>
            </Card>

            {/* Domain Cards: JobCard & NewsCard */}
            <div className="space-y-6">
              <Heading as="h3" variant="h4">
                2. Careers & News Card Primitives (Placeholder Architecture)
              </Heading>
              <JobCard
                title="[Placeholder Role Title — e.g., Systems & Graphics Engineer]"
                discipline="Engineering Architecture Slot"
                location="Location Placeholder"
                commitment="Full-Time Slot"
                summary="[Placeholder: Role specifications will be populated in a later phase. No fake job openings are published in Phase 1.]"
                href="/careers/systems-architecture-slot"
              />

              <Grid cols={2} gap="md">
                <NewsCard
                  title="[Placeholder Dispatch — Corporate Announcement Template]"
                  category="Corporate"
                  dateLabel="YYYY-MM-DD"
                  readingTime="Template Slot"
                  summary="[Placeholder: Official corporate news and engineering dispatches will be added in later phases using this reusable NewsCard component.]"
                  href="/news/corporate-dispatch-template"
                />
                <NewsCard
                  title="[Placeholder Dispatch — Technical Architecture Log Template]"
                  category="Engineering"
                  dateLabel="YYYY-MM-DD"
                  readingTime="Template Slot"
                  summary="[Placeholder: Technical deep-dives and engineering updates will use this structured article card and nested /news/:slug route.]"
                  href="/news/engineering-log-template"
                />
              </Grid>
            </div>
          </div>
        </Section>
      )}

      {/* 3. Global Corporate CTA Section */}
      <CTASection
        kicker="Piqqudim Corporate Architecture"
        title="We build foundational technology for global impact."
        description="Navigate the Phase 1 route structure to inspect how Company, Technology, Products, People, Careers, News, and Contact pages are architecturally organized."
        primaryActionLabel="Contact & Inquiries"
        primaryActionHref="/contact"
        secondaryActionLabel="Inspect Product Ecosystem"
        secondaryActionHref="/products"
      />
    </>
  );
};
