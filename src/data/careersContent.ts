/**
 * Structured Content & Data-Driven Job Architecture for Piqqudim Careers (Phase 6B — /careers & /careers/[job-slug])
 * Separates job models, areas of work, and location/arrangement capabilities from UI components.
 * Strict adherence to Content Accuracy rules: zero invented vacancies, salaries, benefits, or office claims.
 */

export type WorkArrangement = 'Remote' | 'Hybrid' | 'On-site';

export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export type SupportedJobLocation =
  | 'Nigeria'
  | 'United Kingdom'
  | 'United States'
  | 'Global / Remote'
  | 'Other locations'
  | string;

export type JobStatus = 'open' | 'closed' | 'draft';

/**
 * Section 13: Structured Job Model
 * Job
 * ├── title
 * ├── department
 * ├── location
 * ├── workArrangement
 * ├── employmentType
 * ├── summary
 * ├── description (Overview)
 * ├── whatYouWillDo
 * ├── responsibilities
 * ├── requirements (What we're looking for)
 * ├── niceToHave
 * ├── whatToExpect
 * ├── applicationInstructions
 * └── status
 */
export interface JobRecord {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: SupportedJobLocation;
  workArrangement: WorkArrangement;
  employmentType: EmploymentType;
  summary: string;
  description: string;
  whatYouWillDo: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  whatToExpect: string[];
  applicationInstructions: string;
  applicationHref?: string;
  datePosted?: string;
  status: JobStatus;
}

export interface WhyPiqqudimTheme {
  index: string;
  title: string;
  description: string;
}

export interface AreaOfWorkSpec {
  index: string;
  name: string;
  category: 'Systems & Engines' | 'Software & Platforms' | 'Product, Design & Operations';
  description: string;
}

/**
 * Section 10: Why Piqqudim
 */
export const WHY_PIQQUDIM_THEMES: WhyPiqqudimTheme[] = [
  {
    index: '01',
    title: 'Build real technology',
    description:
      'Work on systems, tools, platforms, and products rather than only maintaining existing workflows.',
  },
  {
    index: '02',
    title: 'Work across disciplines',
    description:
      'Technology can span software, graphics, games, 3D, developer tools, and intelligent systems.',
  },
  {
    index: '03',
    title: 'Learn continuously',
    description:
      'Piqqudim values people who are willing to understand difficult systems and keep improving.',
  },
  {
    index: '04',
    title: 'Think long term',
    description:
      'Build foundations that can support products and ideas for years.',
  },
  {
    index: '05',
    title: 'Global ambition',
    description:
      'Rendering the unseen while working toward a global audience.',
  },
];

/**
 * Section 11: Areas of Work
 * Explicitly framed as ongoing disciplines and areas of work at Piqqudim, not current open vacancies.
 */
export const AREAS_OF_WORK: AreaOfWorkSpec[] = [
  {
    index: '01',
    name: 'Gameplay Programming',
    category: 'Systems & Engines',
    description:
      'Interactive mechanics, simulation loops, real-time responsiveness, and gameplay systems.',
  },
  {
    index: '02',
    name: 'Graphics Programming',
    category: 'Systems & Engines',
    description:
      'Rendering pipelines, shader authoring, GPU compute, lighting, and visual performance.',
  },
  {
    index: '03',
    name: 'Engine Programming',
    category: 'Systems & Engines',
    description:
      'Core runtime architecture, memory management, scene systems, and engine subsystems.',
  },
  {
    index: '04',
    name: '3D Technology',
    category: 'Systems & Engines',
    description:
      'Spatial modeling, procedural geometry, asset pipelines, and 3D visualization workflows.',
  },
  {
    index: '05',
    name: 'Tools Engineering',
    category: 'Systems & Engines',
    description:
      'Compilers, language tooling, editors, diagnostics, and developer productivity workflows.',
  },
  {
    index: '06',
    name: 'Software Engineering',
    category: 'Software & Platforms',
    description:
      'Foundational software architecture, cross-platform applications, and systems reliability.',
  },
  {
    index: '07',
    name: 'Frontend Engineering',
    category: 'Software & Platforms',
    description:
      'Web applications, responsive interfaces, design systems, and user-facing platform experiences.',
  },
  {
    index: '08',
    name: 'Backend Engineering',
    category: 'Software & Platforms',
    description:
      'Distributed services, APIs, data architecture, and scalable platform infrastructure.',
  },
  {
    index: '09',
    name: 'Product',
    category: 'Product, Design & Operations',
    description:
      'Product strategy, technical coordination, and shaping core engineering into usable software.',
  },
  {
    index: '10',
    name: 'Design',
    category: 'Product, Design & Operations',
    description:
      'Interface architecture, interaction design, technical clarity, and visual systems.',
  },
  {
    index: '11',
    name: 'Business / Operations',
    category: 'Product, Design & Operations',
    description:
      'Corporate operations, partnerships, enterprise software coordination, and organizational growth.',
  },
];

/**
 * Section 16: Supported Work Arrangements & Locations Reference
 * Defines the structural capabilities supported by the job model without claiming active policies.
 */
export const SUPPORTED_WORK_ARRANGEMENTS: WorkArrangement[] = ['Remote', 'Hybrid', 'On-site'];

export const SUPPORTED_JOB_LOCATIONS: SupportedJobLocation[] = [
  'Nigeria',
  'United Kingdom',
  'United States',
  'Global / Remote',
  'Other locations',
];

/**
 * Section 12 & 13: Data-Driven Job Registry
 * Strictly empty by default so zero fake vacancies are displayed.
 * Adding an item with `status: 'open'` automatically populates the Open Positions list,
 * generates its `/careers/[slug]` detail page, and enables JobPosting structured data.
 */
export const JOBS_REGISTRY: JobRecord[] = [];

/**
 * Helper to retrieve all currently open positions
 */
export function getOpenPositions(): JobRecord[] {
  return JOBS_REGISTRY.filter((job) => job.status === 'open');
}

/**
 * Section 14 & 15: Reusable Individual Job Detail Architectural Blueprint
 * Used when inspecting the `/careers/role-specification-template` preview route so
 * the full job-detail layout can be verified without inventing an active vacancy.
 */
export const ARCHITECTURAL_JOB_TEMPLATE_PREVIEW: JobRecord = {
  id: 'template-preview',
  slug: 'role-specification-template',
  title: 'Role Specification Template (Architectural Preview)',
  department: 'Engineering',
  location: 'Global / Remote',
  workArrangement: 'Remote',
  employmentType: 'Full-time',
  summary:
    'Structural template demonstrating how future open positions at Piqqudim are presented across overview, responsibilities, requirements, and application sections.',
  description:
    'This page is an architectural template for individual job listings (/careers/[job-slug]) on the Piqqudim corporate website. It is not an active job vacancy. When official positions are published in the jobs registry, each role uses this structured layout.',
  whatYouWillDo:
    'In an active role listing, this section explains the day-to-day engineering, design, or operational problems the role focuses on and how the work connects to Piqqudim’s broader technology and product ecosystem.',
  responsibilities: [
    'Design, build, and maintain systems, tools, or product components within the assigned discipline.',
    'Collaborate across engineering, graphics, design, and product areas to turn core technology into usable software.',
    'Write clear, maintainable implementations and document architectural decisions.',
    'Measure system behavior, analyze bottlenecks, and iterate based on evidence.',
  ],
  requirements: [
    'Demonstrated capability in the relevant technical, design, or operational discipline.',
    'Strong fundamentals and curiosity to understand how underlying systems work.',
    'Ability to communicate technical ideas clearly and collaborate thoughtfully across teams.',
    'Commitment to long-term quality, reliability, and craft.',
  ],
  niceToHave: [
    'Familiarity with adjacent areas in the Piqqudim ecosystem (such as graphics, compilers, 3D workflows, or digital platforms).',
    'Experience building foundational tools, libraries, or systems from first principles.',
  ],
  whatToExpect: [
    'Clear problem definitions focused on building real technology and useful products.',
    'Direct collaboration with builders across connected technical disciplines.',
    'Role-specific work arrangement, location, and onboarding details defined per verified position.',
  ],
  applicationInstructions:
    'When a position is open, candidates will be directed to submit their application and relevant work samples through the official application channel specified for that role. No active recruitment email or application form is enabled for this template preview.',
  applicationHref: '/contact',
  status: 'draft',
};
