import React, { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import {
  PEOPLE_PHILOSOPHY_PRINCIPLES,
  TEAM_DEPARTMENTS,
  TEAM_MEMBERS,
  BUILDING_TOGETHER_DISCIPLINES,
  BUILDING_TOGETHER_OUTCOMES,
  PersonRecord,
  TeamDepartment,
} from '../data/peopleContent';
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
} from '../components/ui';

type DepartmentFilter = 'All' | TeamDepartment;

/**
 * Reusable Team Member Profile Card
 * Supports Name, Role, Department / Area of work, Short biography, Profile image, and Optional links.
 */
export const PersonProfileCard: React.FC<{ person: PersonRecord }> = ({ person }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const initials = person.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article
      tabIndex={0}
      aria-label={`${person.name}, ${person.role} at Piqqudim`}
      onClick={() => setIsExpanded((prev) => !prev)}
      className="group relative rounded-[var(--radius-lg)] overflow-hidden aspect-[3/4] w-full max-w-[345px] sm:max-w-[355px] min-h-[432px] sm:min-h-[468px] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent)]/60 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] select-none cursor-pointer"
    >
      {/* Background Image filling the whole card box */}
      {person.image?.url ? (
        <img
          src={person.image.url}
          alt={person.image.alt || `${person.name}, ${person.role} at Piqqudim`}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[var(--color-bg-secondary)] via-[var(--color-bg-elevated)] to-[var(--color-bg-primary)] flex items-center justify-center"
        >
          <span className="font-mono text-5xl font-bold text-[var(--color-accent)] opacity-30">
            {initials}
          </span>
        </div>
      )}

      {/* Atmospheric dark gradient overlay ensuring high contrast readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-45% to-transparent group-hover:via-black/70 transition-colors duration-500 pointer-events-none"
      />

      {/* Subtle hover hint badge at top right */}
      <div className="absolute top-3.5 right-3.5 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded-full bg-black/60 backdrop-blur-md text-white/80 border border-white/20">
          Profile
        </span>
      </div>

      {/* Bottom Information Container */}
      <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex flex-col justify-end text-white">
        {/* Department / Area of Work */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[var(--color-accent)] mb-1">
          <span className="font-semibold">{person.department}</span>
          {person.areaOfWork ? (
            <>
              <span className="text-white/40" aria-hidden="true">·</span>
              <span className="text-white/80 font-sans normal-case tracking-normal text-xs">
                {person.areaOfWork}
              </span>
            </>
          ) : null}
        </div>

        {/* Name */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
          {person.name}
        </h3>

        {/* Role */}
        <div className="text-xs sm:text-sm font-medium text-white/80 mt-0.5">
          {person.role}
        </div>

        {/* Bio text fading in and out smoothly on hover (and tap on mobile) */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isExpanded
              ? 'opacity-100 max-h-80 translate-y-0 mt-3 pt-3'
              : 'opacity-0 max-h-0 translate-y-2 group-hover:opacity-100 group-hover:max-h-80 group-hover:translate-y-0 group-hover:mt-3 group-hover:pt-3'
          } border-t border-white/15`}
        >
          <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
            {person.biography}
          </p>
        </div>

        {/* External Links (e.g., LinkedIn) */}
        {person.links && person.links.length > 0 ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="pt-3 mt-3 border-t border-white/15 flex flex-wrap items-center gap-2.5"
          >
            {person.links.map((link) => {
              const isExternal = link.href.startsWith('http');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={`${person.name} — ${link.label}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </article>
  );
};

/**
 * Official Piqqudim People Page (Phase 6A — /people)
 * Answers: Who are the people building Piqqudim?
 * Flow: PEOPLE HERO → PEOPLE PHILOSOPHY → TEAM → BUILDING TOGETHER → CAREERS CTA → FOOTER
 */
export const PeoplePage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentFilter>('All');

  const visibleMembers =
    selectedDepartment === 'All'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter(
          (member) =>
            member.department === selectedDepartment ||
            (member.departments && member.departments.includes(selectedDepartment))
        );

  const visibleDepartments =
    selectedDepartment === 'All'
      ? TEAM_DEPARTMENTS
      : TEAM_DEPARTMENTS.filter((dept) => dept.id === selectedDepartment);

  return (
    <>
      <SEO
        title="People | Piqqudim"
        description="Piqqudim brings together people focused on engineering, technology, creativity, and solving difficult problems to build foundational systems and products."
        canonicalPath="/people"
      />

      {/* =====================================================================
          1. PEOPLE HERO
          Eyebrow: PEOPLE
          Heading: Technology is built by people.
          ===================================================================== */}
      <Section id="people-hero" surface="grid" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <Badge tone="accent" prefix="Piqqudim">
              PEOPLE
            </Badge>

            <Heading as="h1" variant="display">
              Technology is built by people.
            </Heading>

            <Text variant="body-lg" tone="secondary" measure>
              Piqqudim brings together people interested in engineering, technology, creativity, and
              solving difficult problems—working together to build foundational software, graphics
              technology, developer tools, and digital platforms.
            </Text>

            <Text variant="body" tone="secondary" measure>
              Rendering the unseen, our work relies on curiosity, technical discipline, and shared
              long-term ambition.
            </Text>
          </div>

          {/* Multidisciplinary Overview Card */}
          <div className="lg:col-span-5">
            <Card surface="secondary" padding="md" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                <Text as="span" variant="code" tone="accent" className="font-medium">
                  PEOPLE · DISCIPLINES
                </Text>
                <Text as="span" variant="code" tone="muted">
                  08 AREAS
                </Text>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
                {TEAM_DEPARTMENTS.map((dept, idx) => (
                  <div
                    key={dept.id}
                    className="flex items-center justify-between py-1 border-b border-[var(--color-border)] text-[var(--color-text-primary)]"
                  >
                    <span className="font-medium">{dept.name}</span>
                    <span className="font-mono text-[var(--color-accent)]">0{idx + 1}</span>
                  </div>
                ))}
              </div>

              <div className="pt-1 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                <span>Rendering the unseen.</span>
                <Link href="/careers" variant="accent" className="text-xs font-semibold">
                  <span>Careers →</span>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          2. PEOPLE PHILOSOPHY
          Principles Piqqudim aims to build its environment around
          ===================================================================== */}
      <Section id="people-philosophy" surface="primary" spacing="lg" borderBottom>
        <div className="space-y-12">
          <div className="max-w-[48rem] space-y-3">
            <Badge tone="accent" prefix="01">
              Environment & Principles
            </Badge>
            <Heading as="h2" variant="h1">
              The principles we aim to build around.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              Building enduring technology requires an environment shaped by inquiry, personal
              responsibility, and respect for engineering and creative craft. These are the
              principles Piqqudim aims to build around.
            </Text>
          </div>

          <Grid cols={3} gap="md">
            {PEOPLE_PHILOSOPHY_PRINCIPLES.map((principle) => (
              <Card
                key={principle.index}
                surface="secondary"
                padding="md"
                className="space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                    {principle.index}.
                  </div>
                  <Heading as="h3" variant="h3">
                    {principle.title}
                  </Heading>
                  <Text variant="body" tone="primary" className="font-medium">
                    {principle.summary}
                  </Text>
                  <Text variant="small" tone="secondary">
                    {principle.detail}
                  </Text>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </Section>

      {/* =====================================================================
          3. TEAM SECTION & FUTURE-READY PROFILE SYSTEM
          Data-driven team directory with intentional empty state (zero fake profiles)
          ===================================================================== */}
      <Section id="team" surface="secondary" spacing="lg" borderBottom>
        <div className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[46rem] space-y-3">
              <Badge tone="accent" prefix="02">
                Team & Areas of Work
              </Badge>
              <Heading as="h2" variant="h2">
                People and disciplines across Piqqudim.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Piqqudim organizes its work across engineering, graphics, game development, product,
                design, operations, business, and leadership.
              </Text>
            </div>

            {/* Department Filter Controls */}
            <div
              role="tablist"
              aria-label="Filter team areas by discipline"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)]"
            >
              {(
                [
                  'All',
                  'Engineering',
                  'Graphics',
                  'Game Development',
                  'Product',
                  'Design',
                  'Operations',
                  'Business',
                  'Leadership',
                ] as const
              ).map((dept) => {
                const active = selectedDepartment === dept;
                return (
                  <button
                    key={dept}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-colors whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[var(--color-accent)] text-[var(--color-button-text)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {dept === 'All' ? 'All Areas' : dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Data-Driven Team Member Profiles OR Intentional Empty State */}
          {visibleMembers.length > 0 ? (
            <Grid cols={3} gap="md">
              {visibleMembers.map((person) => (
                <PersonProfileCard key={person.id} person={person} />
              ))}
            </Grid>
          ) : (
            <div className="space-y-8">
              <Card surface="primary" padding="lg" className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-semibold text-[var(--color-accent)]">
                      DIRECTORY STATUS
                    </span>
                    <span aria-hidden="true" className="text-[var(--color-text-muted)]">
                      ·
                    </span>
                    <span className="text-[var(--color-text-secondary)]">
                      Public Team Profiles Not Yet Published
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">
                    {selectedDepartment === 'All'
                      ? 'All 8 Disciplines'
                      : `Filtered: ${selectedDepartment}`}
                  </span>
                </div>

                <div className="max-w-[48rem] space-y-2">
                  <Heading as="h3" variant="h3">
                    Team profiles will appear here as they are published.
                  </Heading>
                  <Text variant="body" tone="secondary" measure>
                    Individual team member profiles—including name, role, area of work, short
                    biography, and profile links—are added directly through Piqqudim’s structured
                    team registry when published. Below are the core areas of work across the
                    company.
                  </Text>
                </div>
              </Card>

              <Grid cols={4} gap="sm">
                {visibleDepartments.map((dept, index) => (
                  <Card key={dept.id} surface="primary" padding="md" className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-semibold text-[var(--color-accent)]">
                        0{index + 1}.
                      </span>
                      <span className="text-[var(--color-text-muted)]">Area of Work</span>
                    </div>
                    <Heading as="h3" variant="h4">
                      {dept.name}
                    </Heading>
                    <Text variant="small" tone="secondary">
                      {dept.focus}
                    </Text>
                  </Card>
                ))}
              </Grid>
            </div>
          )}
        </div>
      </Section>

      {/* =====================================================================
          4. BUILDING TOGETHER
          Engineering + Graphics + Design + Product + Business -> Technology -> Products
          ===================================================================== */}
      <Section id="building-together" surface="elevated" spacing="lg" borderBottom>
        <div className="space-y-12">
          <div className="max-w-[48rem] space-y-3">
            <Badge tone="accent" prefix="03">
              Building Together
            </Badge>
            <Heading as="h2" variant="h2" tone="primary">
              How different disciplines build together.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              Piqqudim is more than a collection of isolated developers. Software, graphics engines,
              tools, and platforms take shape when engineering, visual computing, design, product,
              and business work together toward shared outcomes.
            </Text>
          </div>

          {/* Multidisciplinary Collaboration Flow Diagram */}
          <div
            aria-label="How Engineering, Graphics, Design, Product, and Business combine into Technology and then Products"
            className="space-y-4"
          >
            {/* Row 1: Five Combining Disciplines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {BUILDING_TOGETHER_DISCIPLINES.map((disc, idx) => {
                const isLast = idx === BUILDING_TOGETHER_DISCIPLINES.length - 1;
                return (
                  <div key={disc.name} className="relative flex flex-col">
                    <Card surface="primary" padding="sm" className="h-full space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-semibold text-[var(--color-accent)]">
                          {disc.index}
                        </span>
                        {!isLast ? (
                          <Plus
                            className="w-3.5 h-3.5 text-[var(--color-accent)]"
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>
                      <Heading as="h3" variant="h4">
                        {disc.name}
                      </Heading>
                      <Text variant="small" tone="secondary">
                        {disc.contribution}
                      </Text>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Downward Arrow to Technology */}
            <div aria-hidden="true" className="flex justify-center py-1">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] text-[var(--color-accent)]">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Stage 1 & Stage 2 Outcomes: Technology -> Products */}
            <div className="max-w-[54rem] mx-auto space-y-3">
              {BUILDING_TOGETHER_OUTCOMES.map((outcome, idx) => {
                const isLast = idx === BUILDING_TOGETHER_OUTCOMES.length - 1;
                return (
                  <React.Fragment key={outcome.title}>
                    <Card surface="primary" padding="md">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="md:col-span-4 space-y-1">
                          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                            <span className="font-mono font-semibold text-[var(--color-accent)]">
                              {outcome.step}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{outcome.subtitle}</span>
                          </div>
                          <Heading as="h3" variant="h3">
                            {outcome.title}
                          </Heading>
                        </div>
                        <div className="md:col-span-8">
                          <Text variant="small" tone="secondary">
                            {outcome.description}
                          </Text>
                        </div>
                      </div>
                    </Card>

                    {!isLast && (
                      <div aria-hidden="true" className="flex justify-center py-1">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] text-[var(--color-accent)]">
                          <ArrowDown className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          5. PEOPLE → CAREERS TRANSITION
          Heading: Want to build with us?
          CTA: Explore careers → (/careers)
          ===================================================================== */}
      <Section id="people-careers-cta" surface="grid" spacing="lg">
        <div className="max-w-[48rem] space-y-6">
          <Badge tone="accent" prefix="04">
            Careers at Piqqudim
          </Badge>

          <Heading as="h2" variant="h1">
            Want to build with us?
          </Heading>

          <Text variant="body-lg" tone="secondary" measure>
            If you care about engineering craft, curiosity, and building foundational software,
            graphics systems, developer tools, and platforms, explore opportunities to contribute at
            Piqqudim.
          </Text>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Button
              variant="primary"
              size="lg"
              href="/careers"
              iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Explore careers
            </Button>
            <Button variant="outline" size="lg" href="/about">
              About Piqqudim
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
