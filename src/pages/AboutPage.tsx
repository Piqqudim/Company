import React from 'react';
import { ArrowDown } from 'lucide-react';
import {
  ABOUT_ENGINEERING_DOMAINS,
  BUILDING_TECHNOLOGY_PILLARS,
  MISSION_ELEMENTS,
  WHAT_WE_BELIEVE_PRINCIPLES,
  HOW_WE_BUILD_PRACTICES,
  COMPANY_ECOSYSTEM_HIERARCHY,
} from '../data/aboutContent';
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
} from '../components/ui';

/**
 * Official Piqqudim About / Company Page (Phase 3 — /about)
 * Answers: Who is Piqqudim? What kind of technology company is it?
 * What is it trying to build? What does it believe in? How does it approach engineering?
 * Why does its African origin matter, and why is its ambition global?
 */
export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Piqqudim | Piqqudim"
        description="Piqqudim is a technology company building software, graphics, game technology, developer technology, digital platforms, and intelligent systems."
        canonicalPath="/about"
      />

      {/* =====================================================================
          1. ABOUT HERO
          Concise, confident page header establishing Piqqudim's long view
          ===================================================================== */}
      <Section id="about-hero" surface="grid" spacing="lg" borderBottom>
        <div className="max-w-[54rem] space-y-5">
          <Badge tone="accent" prefix="Company">
            About Piqqudim
          </Badge>

          <Heading as="h1" variant="display">
            We build technology with a long view.
          </Heading>

          <Text variant="body-lg" tone="secondary" measure>
            Piqqudim is a technology company building across software, graphics, game technology,
            developer technology, digital platforms, and intelligent systems.
          </Text>
        </div>
      </Section>

      {/* =====================================================================
          2. WHAT IS PIQQUDIM?
          Explains Piqqudim as an institution focused on authoring technology
          ===================================================================== */}
      <Section id="what-is-piqqudim" surface="primary" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <Badge tone="accent" prefix="01">
              Identity
            </Badge>
            <Heading as="h2" variant="h1">
              What is Piqqudim?
            </Heading>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Text variant="body-lg" tone="primary" measure>
              Piqqudim is a technology company focused on building foundational technology rather
              than simply integrating existing technologies.
            </Text>
            <Text variant="body" tone="secondary" measure>
              Our work spans connected areas of software and systems engineering. Instead of
              treating applications, tools, and engines as isolated efforts, we develop underlying
              technical capabilities that support an evolving ecosystem of products and platforms.
            </Text>

            <Divider spacing="sm" />

            <div className="space-y-4">
              <Text as="span" variant="label" tone="muted" className="block">
                Connected Areas of Engineering
              </Text>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_ENGINEERING_DOMAINS.map((domain) => (
                  <div
                    key={domain.name}
                    className="p-4 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-1"
                  >
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {domain.name}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {domain.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          3. BUILDING TECHNOLOGY
          Core idea: We don't want to only use technology. We want to understand and build it.
          ===================================================================== */}
      <Section id="building-technology" surface="secondary" spacing="lg" borderBottom>
        <div className="space-y-12">
          <div className="max-w-[52rem] space-y-4">
            <Badge tone="accent" prefix="02">
              Engineering Approach
            </Badge>
            <Heading as="h2" variant="h1">
              We don’t want to only use technology. We want to understand and build it.
            </Heading>
            <Text variant="body-lg" tone="secondary" measure>
              True technical capability comes from understanding how systems work beneath the
              surface. At Piqqudim, engineering is a discipline of inquiry, design, and deliberate
              construction.
            </Text>
          </div>

          <Grid cols={3} gap="md">
            {BUILDING_TECHNOLOGY_PILLARS.map((pillar, idx) => (
              <Card key={pillar.title} surface="primary" padding="md" className="space-y-3">
                <div className="font-mono text-xs font-medium text-[var(--color-accent)]">
                  0{idx + 1}.
                </div>
                <Heading as="h3" variant="h4">
                  {pillar.title}
                </Heading>
                <Text variant="small" tone="secondary">
                  {pillar.summary}
                </Text>
              </Card>
            ))}
          </Grid>
        </div>
      </Section>

      {/* =====================================================================
          4. MISSION
          Concise working corporate mission statement and pillars
          ===================================================================== */}
      <Section id="mission" surface="primary" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <Badge tone="accent" prefix="03">
              Mission
            </Badge>
            <Heading as="h2" variant="h2">
              Why Piqqudim builds.
            </Heading>
            <Text variant="small" tone="muted">
              Company Mission Architecture
            </Text>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <Card surface="elevated" padding="md" className="space-y-3">
              <Text as="span" variant="label" tone="accent" className="block">
                Working Mission Statement
              </Text>
              <Heading as="p" variant="h3">
                To engineer foundational technology, translate that technology into useful products
                and platforms, and provide developers and users with tools and experiences built to
                grow over time.
              </Heading>
            </Card>

            <Grid cols={2} gap="sm">
              {MISSION_ELEMENTS.map((item) => (
                <div
                  key={item.index}
                  className="p-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] space-y-2"
                >
                  <div className="font-mono text-xs text-[var(--color-accent)] font-medium">
                    {item.index}.
                  </div>
                  <Heading as="h3" variant="h4">
                    {item.title}
                  </Heading>
                  <Text variant="small" tone="secondary">
                    {item.detail}
                  </Text>
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          5. VISION
          Visually distinct architectural section: Rendering the unseen.
          ===================================================================== */}
      <Section id="vision" surface="elevated" spacing="lg" borderBottom>
        <div className="max-w-[54rem] space-y-6">
          <Badge tone="accent" prefix="04">
            Vision
          </Badge>

          <Heading as="h2" variant="display" tone="primary">
            Rendering the unseen.
          </Heading>

          <Text variant="body-lg" tone="primary" measure>
            Piqqudim’s origin in Africa is an essential part of our story and perspective, and our
            engineering ambitions are global from day one.
          </Text>

          <Text variant="body" tone="secondary" measure>
            We are building software, graphics systems, developer tools, and platforms designed to
            stand on their technical merits anywhere in the world—combining original perspective,
            creativity, and disciplined engineering to contribute to global technology.
          </Text>
        </div>
      </Section>

      {/* =====================================================================
          6. WHY AFRICA MATTERS
          Thoughtful, dignified explanation of origin and global standards
          ===================================================================== */}
      <Section id="why-africa-matters" surface="primary" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <Badge tone="accent" prefix="05">
              Origin & Perspective
            </Badge>
            <Heading as="h2" variant="h2">
              Why Africa matters to Piqqudim.
            </Heading>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <Text variant="body-lg" tone="primary" measure>
              Serious, foundational technology can be built from Africa while being designed for a
              global audience.
            </Text>
            <Text variant="body" tone="secondary" measure>
              Geography is part of our identity, not a constraint on what we can engineer. Building
              from Africa gives Piqqudim a distinct vantage point—one that values resourcefulness,
              architectural independence, and the conviction to author core technology rather than
              only adopting what already exists.
            </Text>
            <Text variant="body" tone="secondary" measure>
              At the same time, software and engineering are universal disciplines. Every engine,
              language, tool, and platform we build is judged by global standards of quality,
              performance, and usefulness.
            </Text>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          7. WHAT WE BELIEVE
          6 concise engineering and institutional principles
          ===================================================================== */}
      <Section id="what-we-believe" surface="secondary" spacing="lg" borderBottom>
        <div className="max-w-[46rem] space-y-3 mb-12">
          <Badge tone="accent" prefix="06">
            Core Principles
          </Badge>
          <Heading as="h2" variant="h2">
            What we believe
          </Heading>
          <Text variant="body" tone="secondary" measure>
            The convictions that guide how we choose problems, architect systems, and build
            products.
          </Text>
        </div>

        <Grid cols={3} gap="md">
          {WHAT_WE_BELIEVE_PRINCIPLES.map((principle) => (
            <Card key={principle.index} surface="primary" padding="md" className="space-y-3">
              <div className="font-mono text-xs font-medium text-[var(--color-accent)]">
                {principle.index}.
              </div>
              <Heading as="h3" variant="h3">
                {principle.title}
              </Heading>
              <Text variant="body" tone="secondary">
                {principle.description}
              </Text>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* =====================================================================
          8. HOW WE BUILD
          Development philosophy across 5 connected practices
          ===================================================================== */}
      <Section id="how-we-build" surface="primary" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-3">
            <Badge tone="accent" prefix="07">
              Development Philosophy
            </Badge>
            <Heading as="h2" variant="h2">
              How we build
            </Heading>
            <Text variant="body" tone="secondary">
              Our development process favors clear thinking, working code, and continuous
              refinement over rigid ceremony.
            </Text>
          </div>

          <div className="lg:col-span-8 divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
            {HOW_WE_BUILD_PRACTICES.map((practice) => (
              <div
                key={practice.index}
                className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
              >
                <div className="flex items-baseline gap-3 min-w-[15rem]">
                  <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                    {practice.index}.
                  </span>
                  <Heading as="h3" variant="h4">
                    {practice.title}
                  </Heading>
                </div>
                <Text variant="body" tone="secondary" className="sm:max-w-[32rem]">
                  {practice.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================================
          9. COMPANY ECOSYSTEM
          Accessible visual & semantic diagram:
          PIQQUDIM → Technology → Platforms / Tools / Products → Experiences
          ===================================================================== */}
      <Section id="company-ecosystem" surface="secondary" spacing="lg" borderBottom>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[46rem] space-y-3">
            <Badge tone="accent" prefix="08">
              Company Ecosystem
            </Badge>
            <Heading as="h2" variant="h2">
              How our technology and products connect.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              Piqqudim is the company. Our research and engineering flow downward into platforms,
              developer tools, products, and interactive experiences.
            </Text>
          </div>

          <Link href="/products" variant="accent" className="text-sm font-semibold shrink-0">
            <span>Explore our products →</span>
          </Link>
        </div>

        {/* Accessible 4-Tier Ecosystem Hierarchy Diagram */}
        <ol
          aria-label="Piqqudim company ecosystem hierarchy from company to experiences"
          className="space-y-3"
        >
          {COMPANY_ECOSYSTEM_HIERARCHY.map((layer, index) => {
            const isLast = index === COMPANY_ECOSYSTEM_HIERARCHY.length - 1;
            return (
              <React.Fragment key={layer.level}>
                <li>
                  <Card surface="primary" padding="md">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-4 space-y-1">
                        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                          <span className="font-mono font-semibold text-[var(--color-accent)]">
                            {layer.level}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{layer.role}</span>
                        </div>
                        <Heading as="h3" variant="h3">
                          {layer.title}
                        </Heading>
                      </div>

                      <div className="lg:col-span-5">
                        <Text variant="small" tone="secondary">
                          {layer.description}
                        </Text>
                      </div>

                      <div className="lg:col-span-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--color-text-muted)] lg:justify-end">
                        {layer.examples.map((ex, i) => (
                          <React.Fragment key={ex}>
                            <span className="font-medium text-[var(--color-text-primary)]">
                              {ex}
                            </span>
                            {i < layer.examples.length - 1 ? (
                              <span aria-hidden="true">·</span>
                            ) : null}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </Card>
                </li>

                {!isLast && (
                  <li aria-hidden="true" className="flex justify-center py-1">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-accent)]">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </Section>

      {/* =====================================================================
          10. PEOPLE & 11. CAREERS
          Transitions toward the People and Careers pages
          ===================================================================== */}
      <Section id="people-and-careers" surface="primary" spacing="lg" borderBottom>
        <Grid cols={2} gap="lg">
          {/* Section 12: People */}
          <Card surface="secondary" padding="lg" className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <Badge tone="accent" prefix="09">
                People
              </Badge>
              <Heading as="h2" variant="h2">
                Technology is built by people.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Every engine, tool, and platform at Piqqudim depends on people who combine
                engineering rigor, creativity, curiosity, and persistence.
              </Text>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]">
              <Link href="/people" variant="accent" className="text-sm font-semibold">
                <span>Meet the people behind Piqqudim →</span>
              </Link>
            </div>
          </Card>

          {/* Section 13: Careers */}
          <Card surface="secondary" padding="lg" className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <Badge tone="accent" prefix="10">
                Careers
              </Badge>
              <Heading as="h2" variant="h2">
                Build with us.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Piqqudim is interested in engineers, designers, and builders who want to construct
                foundational technology and solve difficult problems over the long term.
              </Text>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]">
              <Link href="/careers" variant="accent" className="text-sm font-semibold">
                <span>Explore careers →</span>
              </Link>
            </div>
          </Card>
        </Grid>
      </Section>

      {/* =====================================================================
          12. CLOSING STATEMENT
          Reinforces that Piqqudim is building, long-term, global, and evolving
          ===================================================================== */}
      <Section id="closing-statement" surface="grid" spacing="lg">
        <div className="max-w-[50rem] space-y-6">
          <Text as="span" variant="code" tone="accent" className="font-medium block">
            We build.
          </Text>

          <Heading as="h2" variant="h1">
            The work is long-term, and we are just getting started.
          </Heading>

          <Text variant="body-lg" tone="secondary" measure>
            Piqqudim is an evolving company committed to the patient work of building software,
            graphics technology, developer tools, and intelligent systems—rendering the unseen.
          </Text>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Button variant="primary" size="lg" href="/technology">
              Explore Our Technology
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Contact Piqqudim
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
