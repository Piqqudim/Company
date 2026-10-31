import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CORPORATE_IDENTITY,
  TECHNOLOGY_DOMAIN_SLOTS,
  TECHNOLOGY_PHILOSOPHY_PRINCIPLES,
  ECOSYSTEM_PRODUCT_SLOTS,
  ROUTE_SPECIFICATIONS,
} from '../data/siteArchitecture';
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
  NewsCard,
  CTASection,
  PiqqudimLogo,
} from '../components/ui';

/**
 * Official Piqqudim Corporate Homepage (Phase 2)
 * Follows the exact narrative flow:
 * HERO → WHO IS PIQQUDIM? → WHAT WE BUILD → HOW WE THINK →
 * PRODUCT ECOSYSTEM → VISION → PEOPLE → CAREERS → NEWS → CONTACT → FOOTER
 */
export const HomePage: React.FC = () => {
  const routeSpec = ROUTE_SPECIFICATIONS['/'];

  return (
    <>
      <SEO
        title={routeSpec.seoTitle}
        description={routeSpec.seoDescription}
        canonicalPath="/"
      />

      {/* =====================================================================
          1. HERO SECTION
          Answers: What is Piqqudim? What does Piqqudim build? Where is it going?
          ===================================================================== */}
      <Section id="hero" surface="grid" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Text
                as="span"
                variant="label"
                tone="accent"
                className="font-semibold tracking-[0.04em]"
              >
                {CORPORATE_IDENTITY.name}
              </Text>
              <span aria-hidden="true" className="text-xs text-[var(--color-text-muted)]">
                ·
              </span>
              <Badge tone="neutral">{CORPORATE_IDENTITY.positioning}</Badge>
            </div>

            <Heading as="h1" variant="display">
              Engineering foundational software, graphics, and intelligent systems.
            </Heading>

            <Text variant="body-lg" tone="secondary" measure>
              Piqqudim is a technology company building software systems, real-time graphics
              technology, game technology, developer tools, digital platforms, and intelligent
              systems.
            </Text>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                href="/about"
                iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Explore Piqqudim
              </Button>
              <Button variant="outline" size="lg" href="/technology">
                Explore Technology
              </Button>
            </div>
          </div>

          {/* Subtle Abstract Technical Emblem & Architecture Diagram */}
          <div className="lg:col-span-4">
            <Card
              surface="secondary"
              padding="md"
              className="relative overflow-hidden space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                <Text as="span" variant="code" tone="accent" className="font-medium">
                  PIQQUDIM · SYSTEMS
                </Text>
                <Text as="span" variant="code" tone="muted">
                  {CORPORATE_IDENTITY.mantra}
                </Text>
              </div>

              <div className="py-4 flex justify-center">
                <PiqqudimLogo size="hero" ariaLabel="Piqqudim Corporate Emblem" />
              </div>

              <div className="border-t border-[var(--color-border)] pt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  <span>Software Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  <span>Graphics & 3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  <span>Game Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  <span>Developer Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  <span>Digital Platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  <span>Intelligent Systems</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          2. WHO IS PIQQUDIM? — About Piqqudim Section
          Answers: What is Piqqudim?
          ===================================================================== */}
      <Section id="about-piqqudim" surface="primary" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <Badge tone="accent" prefix="01">
              Who We Are
            </Badge>
            <Heading as="h2" variant="h1">
              We build technology.
            </Heading>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Text variant="body-lg" tone="primary" measure>
              Piqqudim is an engineering-driven technology company developing a connected ecosystem
              of software, graphics systems, developer tools, digital platforms, and intelligent
              systems.
            </Text>
            <Text variant="body" tone="secondary" measure>
              Rather than operating around a single standalone application, Piqqudim focuses on
              core technical disciplines that reinforce one another—from programming languages,
              compilers, and 3D engines to end-user platforms and interactive software.
            </Text>
            <div className="pt-2">
              <Link href="/about" variant="accent" className="text-sm font-semibold">
                <span>About Piqqudim →</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          3. WHAT WE BUILD — What We Do Section (6 Core Engineering Areas)
          ===================================================================== */}
      <Section id="what-we-build" surface="secondary" spacing="lg" borderBottom>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[46rem] space-y-3">
            <Badge tone="accent" prefix="02">
              What We Do
            </Badge>
            <Heading as="h2" variant="h2">
              Engineering across foundational disciplines.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              Our work spans six core technical areas that form the backbone of Piqqudim’s software
              and research ecosystem.
            </Text>
          </div>

          <Link href="/technology" variant="accent" className="text-sm font-semibold shrink-0">
            <span>Explore Technology →</span>
          </Link>
        </div>

        <Grid cols={3} gap="md">
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

      {/* =====================================================================
          4. HOW WE THINK — Technology Philosophy Section
          Visually distinct elevated architectural section (adapts to White/Dark theme)
          ===================================================================== */}
      <Section id="technology-philosophy" surface="elevated" spacing="lg" borderBottom>
        <div className="space-y-12">
          <div className="max-w-[48rem] space-y-3">
            <Badge tone="accent" prefix="03">
              Engineering Mindset
            </Badge>
            <Heading as="h2" variant="h2" tone="primary">
              Built from first principles for long-term endurance.
            </Heading>
            <Text variant="body-lg" tone="secondary" measure>
              We believe enduring technology comes from deep engineering—understanding systems at
              their foundation and authoring tools and platforms with precision, performance, and
              purpose.
            </Text>
          </div>

          <Grid cols={2} gap="md">
            {TECHNOLOGY_PHILOSOPHY_PRINCIPLES.map((principle) => (
              <Card
                key={principle.index}
                surface="primary"
                padding="md"
                className="space-y-3"
              >
                <div className="font-mono text-xs font-medium text-[var(--color-accent)]">
                  {principle.index}.
                </div>
                <Heading as="h3" variant="h3" tone="primary">
                  {principle.title}
                </Heading>
                <Text variant="small" tone="secondary">
                  {principle.description}
                </Text>
              </Card>
            ))}
          </Grid>
        </div>
      </Section>

      {/* =====================================================================
          5. PRODUCT ECOSYSTEM & UMBRA ENGINE CONTEXT
          Secondary to corporate identity
          ===================================================================== */}
      <Section id="product-ecosystem" surface="primary" spacing="md" borderBottom>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-[46rem] space-y-3">
            <Badge tone="accent" prefix="04">
              Product Ecosystem
            </Badge>
            <Heading as="h2" variant="h2">
              Where Piqqudim’s technology takes form.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              Piqqudim’s engineering becomes products, developer tools, engines, platforms, and
              interactive experiences. Each initiative is developed as part of the broader Piqqudim
              ecosystem.
            </Text>
          </div>

          <Link href="/products" variant="accent" className="text-sm font-semibold shrink-0">
            <span>Explore all products →</span>
          </Link>
        </div>

        {/* Restrained Umbra Engine Ecosystem Highlight (Section 9) */}
        <Card surface="secondary" padding="md" className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <span className="font-semibold text-[var(--color-accent)]">
                  Ecosystem Technology Example
                </span>
                <span aria-hidden="true">·</span>
                <span>Graphics & Engine Architecture</span>
              </div>
              <Heading as="h3" variant="h3">
                Umbra Engine
              </Heading>
              <Text variant="small" tone="secondary" measure>
                Developed within Piqqudim’s graphics and systems division, Umbra Engine represents
                our commitment to building core rendering and simulation technology in-house as a
                foundation for interactive software and 3D workflows.
              </Text>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Button variant="outline" size="sm" href="/products">
                Learn More
              </Button>
            </div>
          </div>
        </Card>

        {/* Selection of Ecosystem Products */}
        <Grid cols={3} gap="md">
          {ECOSYSTEM_PRODUCT_SLOTS.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              relationship={product.relationship}
              statusNote={product.statusNote}
              summary={product.placeholderSummary}
              actionLabel="Learn More"
              href="/products"
            />
          ))}
        </Grid>
      </Section>

      {/* =====================================================================
          6. VISION SECTION
          Core positioning: Rendering the unseen.
          ===================================================================== */}
      <Section id="vision" surface="grid" spacing="lg" borderBottom>
        <div className="max-w-[56rem] space-y-6">
          <Badge tone="accent" prefix="05">
            Long-Term Direction
          </Badge>

          <Heading as="h2" variant="display">
            Rendering the unseen.
          </Heading>

          <Text variant="body-lg" tone="primary" measure>
            Piqqudim’s origin in Africa is the starting point of our perspective, not a boundary on
            our ambition. We are building foundational software, graphics technology, and
            intelligent systems designed to meet global engineering standards and serve users and
            developers everywhere.
          </Text>

          <Text variant="body" tone="secondary" measure>
            {CORPORATE_IDENTITY.secondaryPositioning} Our focus is long-term: establishing serious
            technical capability, authoring original tools and platforms, and contributing
            meaningfully to global computing.
          </Text>
        </div>
      </Section>

      {/* =====================================================================
          7. PEOPLE & 8. CAREERS SECTIONS
          Human engineering culture & recruitment invitation
          ===================================================================== */}
      <Section id="people-and-careers" surface="primary" spacing="lg" borderBottom>
        <Grid cols={2} gap="lg">
          {/* People Section (Section 11) */}
          <Card surface="secondary" padding="lg" className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <Badge tone="accent" prefix="06">
                People
              </Badge>
              <Heading as="h2" variant="h2">
                People building Piqqudim.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Technology is built by people who care about engineering rigor, creative
                problem-solving, and tackling difficult technical challenges. At Piqqudim,
                engineers, designers, and researchers work together across disciplines.
              </Text>
              <Text variant="small" tone="muted">
                Team profiles and leadership directory structure are established on the People
                page.
              </Text>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]">
              <Link href="/people" variant="accent" className="text-sm font-semibold">
                <span>Meet the team →</span>
              </Link>
            </div>
          </Card>

          {/* Careers Section (Section 12) */}
          <Card surface="secondary" padding="lg" className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <Badge tone="accent" prefix="07">
                Careers
              </Badge>
              <Heading as="h2" variant="h2">
                Build with us.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                We are building software, graphics systems, developer tools, and platforms for the
                long term. If you care deeply about engineering craft and want to help shape
                foundational technology, explore how you can contribute at Piqqudim.
              </Text>
              <Text variant="small" tone="muted">
                Visit our careers page for role availability and engineering disciplines.
              </Text>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]">
              <Link href="/careers" variant="accent" className="text-sm font-semibold">
                <span>View open positions →</span>
              </Link>
            </div>
          </Card>
        </Grid>
      </Section>

      {/* =====================================================================
          9. NEWS SECTION (Secondary)
          Structured dispatches layout without fabricated articles
          ===================================================================== */}
      <Section id="news" surface="primary" spacing="md">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-[44rem] space-y-2">
            <Badge tone="accent" prefix="08">
              News & Dispatches
            </Badge>
            <Heading as="h2" variant="h3">
              Company announcements and engineering updates.
            </Heading>
            <Text variant="small" tone="secondary">
              Official corporate announcements, engineering logs, and product updates are published
              through the Piqqudim newsroom.
            </Text>
          </div>

          <Link href="/news" variant="accent" className="text-sm font-semibold shrink-0">
            <span>View all news →</span>
          </Link>
        </div>

        <Grid cols={3} gap="md">
          <NewsCard
            title="Company Announcements"
            category="Corporate"
            dateLabel="Official Channel"
            summary="Institutional updates, milestones, and corporate communications from Piqqudim. Official dispatches will appear here as they are published."
            href="/news"
          />
          <NewsCard
            title="Engineering & Architecture Updates"
            category="Engineering"
            dateLabel="Technical Channel"
            summary="Technical notes on software architecture, graphics systems, compilers, and platform engineering developed at Piqqudim."
            href="/news"
          />
          <NewsCard
            title="Ecosystem & Product Dispatches"
            category="Ecosystem"
            dateLabel="Product Channel"
            summary="Release notes and development updates across Umbra Engine, Pi Launcher, P Language, NodeCAD, Remarket, and Games."
            href="/news"
          />
        </Grid>
      </Section>

      {/* =====================================================================
          10. CONTACT / CLOSING CTA
          ===================================================================== */}
      <CTASection
        kicker="09 · Partnerships & Inquiries"
        title="Let's build what comes next."
        description="Connect with Piqqudim for technology partnerships, business inquiries, engineering discussions, or general corporate correspondence."
        primaryActionLabel="Contact Piqqudim →"
        primaryActionHref="/contact"
        secondaryActionLabel="Explore Technology"
        secondaryActionHref="/technology"
      />
    </>
  );
};
