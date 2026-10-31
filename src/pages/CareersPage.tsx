import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  WHY_PIQQUDIM_THEMES,
  AREAS_OF_WORK,
  SUPPORTED_WORK_ARRANGEMENTS,
  SUPPORTED_JOB_LOCATIONS,
  JOBS_REGISTRY,
  ARCHITECTURAL_JOB_TEMPLATE_PREVIEW,
  getOpenPositions,
  AreaOfWorkSpec,
  JobRecord,
  WorkArrangement,
} from '../data/careersContent';
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
  JobCard,
  PageHeader,
} from '../components/ui';

type AreaCategoryFilter = 'All' | AreaOfWorkSpec['category'];
type ArrangementFilter = 'All' | WorkArrangement;

/**
 * Reusable Individual Job Detail Page (/careers/[job-slug])
 * Exact required structure (Section 14, 15, 25):
 * JOB HEADER → OVERVIEW → RESPONSIBILITIES → REQUIREMENTS →
 * NICE TO HAVE → APPLICATION → RELATED POSITIONS → FOOTER
 */
export const JobDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const matchedJob = JOBS_REGISTRY.find((item) => item.slug === slug);
  const isTemplateSlug =
    slug === 'role-specification-template' ||
    slug === 'engineering-role-template' ||
    slug === 'systems-architecture-slot';

  const job: JobRecord | undefined =
    matchedJob || (isTemplateSlug ? ARCHITECTURAL_JOB_TEMPLATE_PREVIEW : undefined);

  const isRealOpenJob = Boolean(matchedJob && matchedJob.status === 'open');
  const relatedPositions = getOpenPositions().filter((item) => item.slug !== slug);

  if (!job) {
    return (
      <>
        <SEO
          title="Position Not Found | Careers | Piqqudim"
          description="The requested position could not be found in Piqqudim’s open positions directory."
          canonicalPath={`/careers/${slug}`}
        />
        <PageHeader
          kicker="Careers"
          title="Position not found."
          description={`No active job listing matches "/careers/${slug}". View our Careers overview to see current opportunities or areas of work.`}
          actions={
            <Button variant="primary" size="md" href="/careers">
              ← Return to Careers
            </Button>
          }
        />
      </>
    );
  }

  // Only populate Schema.org JobPosting structured data for real, verified open positions (Section 23)
  const jobPostingStructuredData: Record<string, unknown> | undefined = isRealOpenJob
    ? {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: job.description,
        datePosted: job.datePosted,
        employmentType: job.employmentType.toUpperCase().replace('-', '_'),
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Piqqudim',
          sameAs: 'https://piqqudim.com',
        },
        jobLocationType: job.workArrangement === 'Remote' ? 'TELECOMMUTE' : undefined,
        applicantLocationRequirements: {
          '@type': 'Country',
          name: job.location,
        },
      }
    : undefined;

  return (
    <>
      <SEO
        title={`${job.title} | Careers | Piqqudim`}
        description={job.summary}
        canonicalPath={`/careers/${slug}`}
        structuredData={jobPostingStructuredData}
      />

      {/* =====================================================================
          1. JOB HEADER
          Job title + Department · Location · Work arrangement + Prominent Apply CTA
          ===================================================================== */}
      <Section id="job-header" surface="grid" spacing="lg" borderBottom>
        <div className="space-y-6">
          <div>
            <Link href="/careers" variant="muted" className="text-xs font-medium">
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Careers</span>
            </Link>
          </div>

          {!isRealOpenJob && (
            <div
              role="note"
              className="p-4 rounded-[var(--radius-md)] border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-2 text-[var(--color-text-primary)]">
                <span className="font-mono font-semibold text-[var(--color-accent)]">
                  ARCHITECTURAL TEMPLATE
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  This route previews the reusable <code className="font-mono">/careers/[job-slug]</code>{' '}
                  layout. It is not an active job vacancy.
                </span>
              </div>
              <Link href="/careers" variant="accent" className="text-xs font-semibold">
                <span>Return to Careers Overview →</span>
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              {/* Department · Location · Work arrangement · Employment type */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <span className="font-semibold text-[var(--color-accent)]">{job.department}</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-[var(--color-text-primary)]">{job.location}</span>
                <span aria-hidden="true">·</span>
                <span>{job.workArrangement}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{job.employmentType}</span>
              </div>

              <Heading as="h1" variant="h1">
                {job.title}
              </Heading>

              <Text variant="body-lg" tone="secondary" measure>
                {job.summary}
              </Text>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Card surface="secondary" padding="md" className="w-full max-w-[22rem] space-y-4">
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-[var(--color-border)]">
                    <span className="text-[var(--color-text-muted)]">Department</span>
                    <span className="font-semibold text-[var(--color-text-primary)]">
                      {job.department}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[var(--color-border)]">
                    <span className="text-[var(--color-text-muted)]">Location</span>
                    <span className="font-medium text-[var(--color-text-primary)]">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[var(--color-border)]">
                    <span className="text-[var(--color-text-muted)]">Work Arrangement</span>
                    <span className="font-medium text-[var(--color-accent)]">
                      {job.workArrangement}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[var(--color-text-muted)]">Employment Type</span>
                    <span className="font-mono text-[var(--color-text-primary)]">
                      {job.employmentType}
                    </span>
                  </div>
                </div>

                <a
                  href="#job-application"
                  className="w-full min-h-[2.75rem] px-5 py-2.5 text-sm inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold bg-[var(--color-accent)] text-[var(--color-button-text)] hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
                >
                  <span>{isRealOpenJob ? 'Apply for this position' : 'How to apply'}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          2. OVERVIEW & WHAT YOU'LL DO
          ===================================================================== */}
      <Section id="job-overview" surface="primary" spacing="md" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <Badge tone="accent" prefix="01">
              Overview
            </Badge>
            <Heading as="h2" variant="h3">
              About the role
            </Heading>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <Text variant="body-lg" tone="primary" measure>
              {job.description}
            </Text>

            <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-2">
              <Heading as="h3" variant="h4">
                What you’ll do
              </Heading>
              <Text variant="body" tone="secondary" measure>
                {job.whatYouWillDo}
              </Text>
            </div>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          3. RESPONSIBILITIES
          ===================================================================== */}
      <Section id="job-responsibilities" surface="secondary" spacing="md" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <Badge tone="accent" prefix="02">
              Responsibilities
            </Badge>
            <Heading as="h2" variant="h3">
              Core responsibilities
            </Heading>
          </div>

          <div className="lg:col-span-8">
            <Card surface="primary" padding="md">
              <ul className="space-y-3.5">
                {job.responsibilities.map((item, idx) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]">
                    <span className="font-mono text-xs font-semibold text-[var(--color-accent)] mt-0.5 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          4. REQUIREMENTS (What we're looking for)
          ===================================================================== */}
      <Section id="job-requirements" surface="primary" spacing="md" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <Badge tone="accent" prefix="03">
              Requirements
            </Badge>
            <Heading as="h2" variant="h3">
              What we’re looking for
            </Heading>
          </div>

          <div className="lg:col-span-8">
            <Card surface="secondary" padding="md">
              <ul className="space-y-3.5">
                {job.requirements.map((req, idx) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]">
                    <span className="font-mono text-xs font-semibold text-[var(--color-accent)] mt-0.5 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          5. NICE TO HAVE & WHAT TO EXPECT
          ===================================================================== */}
      <Section id="job-nice-to-have" surface="secondary" spacing="md" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <Badge tone="accent" prefix="04">
              Additional Context
            </Badge>
            <Heading as="h2" variant="h3">
              Nice to have & what to expect
            </Heading>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card surface="primary" padding="md" className="space-y-3">
              <Heading as="h3" variant="h4">
                Nice to have
              </Heading>
              <ul className="space-y-2.5">
                {job.niceToHave.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card surface="primary" padding="md" className="space-y-3">
              <Heading as="h3" variant="h4">
                What to expect
              </Heading>
              <ul className="space-y-2.5">
                {job.whatToExpect.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          6. APPLICATION
          Ready for the official application method without an unbacked form
          ===================================================================== */}
      <Section id="job-application" surface="elevated" spacing="md" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <Badge tone="accent" prefix="05">
              Application
            </Badge>
            <Heading as="h2" variant="h2">
              How to apply
            </Heading>
            <Text variant="body" tone="secondary" measure>
              {job.applicationInstructions}
            </Text>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
            <Button
              variant="primary"
              size="lg"
              href={job.applicationHref || '/contact'}
              iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              {isRealOpenJob ? 'Proceed to Application' : 'Contact Piqqudim'}
            </Button>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          7. RELATED POSITIONS
          ===================================================================== */}
      <Section id="related-positions" surface="primary" spacing="md">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <Badge tone="accent" prefix="06">
              Careers Directory
            </Badge>
            <Heading as="h2" variant="h3">
              Related positions
            </Heading>
          </div>

          <Link href="/careers" variant="accent" className="text-sm font-semibold">
            <span>View all positions →</span>
          </Link>
        </div>

        {relatedPositions.length > 0 ? (
          <div className="space-y-4">
            {relatedPositions.map((relJob) => (
              <JobCard
                key={relJob.id}
                title={relJob.title}
                department={relJob.department}
                location={relJob.location}
                workArrangement={relJob.workArrangement}
                employmentType={relJob.employmentType}
                summary={relJob.summary}
                actionLabel="View position"
                href={`/careers/${relJob.slug}`}
              />
            ))}
          </div>
        ) : (
          <Card surface="secondary" padding="md" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                No other open positions right now.
              </div>
              <Text variant="small" tone="secondary">
                Return to the main Careers page to explore areas of work at Piqqudim.
              </Text>
            </div>
            <Button variant="outline" size="sm" href="/careers">
              ← Back to Careers
            </Button>
          </Card>
        )}
      </Section>
    </>
  );
};

/**
 * Official Piqqudim Careers Page (Phase 6B — /careers)
 * Answers: Why should I work at Piqqudim? What opportunities are available?
 * Flow: CAREERS HERO → WHY PIQQUDIM → AREAS OF WORK → OPEN POSITIONS → GENERAL TALENT CTA → FOOTER
 */
export const CareersPage: React.FC = () => {
  const [selectedAreaCategory, setSelectedAreaCategory] = useState<AreaCategoryFilter>('All');
  const [selectedArrangement, setSelectedArrangement] = useState<ArrangementFilter>('All');

  const openPositions = getOpenPositions();
  const filteredPositions =
    selectedArrangement === 'All'
      ? openPositions
      : openPositions.filter((job) => job.workArrangement === selectedArrangement);

  const visibleAreas =
    selectedAreaCategory === 'All'
      ? AREAS_OF_WORK
      : AREAS_OF_WORK.filter((area) => area.category === selectedAreaCategory);

  return (
    <>
      <SEO
        title="Careers | Piqqudim"
        description="Build what comes next at Piqqudim. Explore engineering, graphics, game technology, developer tools, product, design, and operational opportunities."
        canonicalPath="/careers"
      />

      {/* =====================================================================
          1. CAREERS HERO
          Eyebrow: CAREERS
          Heading: Build what comes next.
          ===================================================================== */}
      <Section id="careers-hero" surface="grid" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <Badge tone="accent" prefix="Piqqudim">
              CAREERS
            </Badge>

            <Heading as="h1" variant="display">
              Build what comes next.
            </Heading>

            <Text variant="body-lg" tone="secondary" measure>
              Piqqudim is building technology across software, graphics, game technology, developer
              technology, digital platforms, and intelligent systems. We look for people who care
              about engineering depth, creative craft, and solving meaningful problems.
            </Text>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#open-positions"
                className="min-h-[3rem] px-6 py-3 text-sm inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold bg-[var(--color-accent)] text-[var(--color-button-text)] hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
              >
                <span>View open positions</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Button variant="outline" size="lg" href="/people">
                People & Principles
              </Button>
            </div>
          </div>

          {/* Global & Arrangement Architecture Summary Card */}
          <div className="lg:col-span-5">
            <Card surface="secondary" padding="md" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                <Text as="span" variant="code" tone="accent" className="font-medium">
                  CAREERS · PERSPECTIVE
                </Text>
                <Text as="span" variant="code" tone="muted">
                  WE BUILD
                </Text>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Rendering the unseen.
                </div>
                <Text variant="small" tone="secondary">
                  Contributors at Piqqudim work on foundational technology, engines, tools, and
                  platforms intended for a global audience.
                </Text>
              </div>

              <Divider spacing="sm" />

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)]">Supported Arrangements</span>
                  <span className="font-mono text-[var(--color-text-primary)]">
                    {SUPPORTED_WORK_ARRANGEMENTS.join(' · ')}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[var(--color-text-muted)]">Location Support</span>
                  <span className="text-[var(--color-text-secondary)]">
                    Defined per role ({SUPPORTED_JOB_LOCATIONS.slice(0, 4).join(', ')})
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          2. WHY PIQQUDIM & AFRICA + GLOBAL CAREERS
          ===================================================================== */}
      <Section id="why-piqqudim" surface="primary" spacing="lg" borderBottom>
        <div className="space-y-12">
          <div className="max-w-[48rem] space-y-3">
            <Badge tone="accent" prefix="01">
              Why Piqqudim
            </Badge>
            <Heading as="h2" variant="h1">
              Why build with Piqqudim.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              At Piqqudim, the focus is on what we build, the technical challenges we tackle, and
              how our systems and products grow over time.
            </Text>
          </div>

          <Grid cols={3} gap="md">
            {WHY_PIQQUDIM_THEMES.map((theme) => (
              <Card key={theme.index} surface="secondary" padding="md" className="space-y-3">
                <div className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                  {theme.index}.
                </div>
                <Heading as="h3" variant="h3">
                  {theme.title}
                </Heading>
                <Text variant="small" tone="secondary">
                  {theme.description}
                </Text>
              </Card>
            ))}

            {/* Section 19: Subtle Africa + Global Careers Card */}
            <Card surface="elevated" padding="md" className="space-y-3">
              <div className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                Origin & Reach
              </div>
              <Heading as="h3" variant="h3">
                Rendering the unseen.
              </Heading>
              <Text variant="small" tone="secondary">
                Our origin in Africa anchors our perspective while every tool, engine, and platform
                we build is engineered for developers and users worldwide.
              </Text>
            </Card>
          </Grid>
        </div>
      </Section>

      {/* =====================================================================
          3. AREAS OF WORK
          Explicitly framed as ongoing disciplines, not current open vacancies
          ===================================================================== */}
      <Section id="areas-of-work" surface="secondary" spacing="lg" borderBottom>
        <div className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[48rem] space-y-3">
              <Badge tone="accent" prefix="02">
                Disciplines & Roles
              </Badge>
              <Heading as="h2" variant="h2">
                Areas of work at Piqqudim.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                These represent the ongoing disciplines and types of roles that exist across
                Piqqudim’s ecosystem—not necessarily current open vacancies.
              </Text>
            </div>

            {/* Interactive Category Filter */}
            <div
              role="tablist"
              aria-label="Filter areas of work by category"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)] shrink-0"
            >
              {(
                [
                  { id: 'All', label: 'All Areas (11)' },
                  { id: 'Systems & Engines', label: 'Systems & Engines' },
                  { id: 'Software & Platforms', label: 'Software & Platforms' },
                  { id: 'Product, Design & Operations', label: 'Product, Design & Ops' },
                ] as const
              ).map((tab) => {
                const active = selectedAreaCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => setSelectedAreaCategory(tab.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-colors whitespace-nowrap cursor-pointer ${
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

          <Grid cols={3} gap="sm">
            {visibleAreas.map((area) => (
              <Card key={area.index} surface="primary" padding="md" className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold text-[var(--color-accent)]">
                    {area.index}.
                  </span>
                  <span className="text-[var(--color-text-muted)]">{area.category}</span>
                </div>
                <Heading as="h3" variant="h4">
                  {area.name}
                </Heading>
                <Text variant="small" tone="secondary">
                  {area.description}
                </Text>
              </Card>
            ))}
          </Grid>

          <Text variant="small" tone="muted">
            Note: The areas above illustrate the disciplines across which Piqqudim builds. Active
            job openings are listed separately in the Open positions section below.
          </Text>
        </div>
      </Section>

      {/* =====================================================================
          4. OPEN POSITIONS
          Data-driven job listing section with polished empty state (zero fake jobs)
          ===================================================================== */}
      <Section id="open-positions" surface="primary" spacing="lg" borderBottom>
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-[46rem] space-y-3">
              <Badge tone="accent" prefix="03">
                Current Opportunities
              </Badge>
              <Heading as="h2" variant="h1">
                Open positions
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Verified openings across engineering, graphics, product, design, and operations are
                published here as they become available.
              </Text>
            </div>

            {openPositions.length > 0 && (
              <div
                role="tablist"
                aria-label="Filter open positions by work arrangement"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)] shrink-0"
              >
                {(['All', 'Remote', 'Hybrid', 'On-site'] as const).map((arrangement) => {
                  const active = selectedArrangement === arrangement;
                  return (
                    <button
                      key={arrangement}
                      role="tab"
                      type="button"
                      aria-selected={active}
                      onClick={() => setSelectedArrangement(arrangement)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-colors whitespace-nowrap cursor-pointer ${
                        active
                          ? 'bg-[var(--color-accent)] text-[var(--color-button-text)]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      {arrangement === 'All' ? 'All Arrangements' : arrangement}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {filteredPositions.length > 0 ? (
            <div className="space-y-4">
              {filteredPositions.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  department={job.department}
                  location={job.location}
                  workArrangement={job.workArrangement}
                  employmentType={job.employmentType}
                  summary={job.summary}
                  actionLabel="View position"
                  href={`/careers/${job.slug}`}
                />
              ))}
            </div>
          ) : (
            <Card surface="secondary" padding="lg" className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono font-semibold text-[var(--color-accent)]">
                    VACANCY STATUS
                  </span>
                  <span aria-hidden="true" className="text-[var(--color-text-muted)]">
                    ·
                  </span>
                  <span className="text-[var(--color-text-secondary)]">0 Open Positions</span>
                </div>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                  Updated Live from Registry
                </span>
              </div>

              <div className="max-w-[46rem] space-y-3">
                <Heading as="h3" variant="h2">
                  No open positions right now.
                </Heading>
                <Text variant="body" tone="secondary" measure>
                  We do not have any open positions listed at the moment. As new engineering,
                  graphics, product, design, and operational roles open at Piqqudim, they will be
                  published directly in this section.
                </Text>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                >
                  Express general interest
                </Button>
                <Link
                  href="/careers/role-specification-template"
                  variant="muted"
                  className="text-xs font-mono"
                >
                  <span>Inspect Individual Job Page Template (/careers/[job-slug]) →</span>
                </Link>
              </div>
            </Card>
          )}
        </div>
      </Section>

      {/* =====================================================================
          5. TALENT / GENERAL INTEREST CTA
          Heading: Don't see the right role?
          ===================================================================== */}
      <Section id="general-talent-cta" surface="grid" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <Badge tone="accent" prefix="04">
              General Interest
            </Badge>

            <Heading as="h2" variant="h1">
              Don’t see the right role?
            </Heading>

            <Text variant="body-lg" tone="secondary" measure>
              If you care deeply about building software, graphics technology, game systems,
              developer tools, or digital platforms and want to stay connected for future
              opportunities, reach out through our official contact page.
            </Text>

            <Text variant="small" tone="muted">
              Recruitment & Talent Routing: Handled through Piqqudim’s corporate contact channel
              until a dedicated recruitment portal is published.
            </Text>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3.5">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Connect with Piqqudim
            </Button>
            <Button variant="outline" size="lg" href="/technology">
              Explore Technology
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
