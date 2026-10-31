/**
 * Piqqudim Corporate Site Architecture & Structured Data
 * Separates navigation, route definitions, and ecosystem architecture from presentation components.
 * Strict adherence to Phase 1 Content Philosophy: no invented claims, statistics, or product features.
 */

export interface NavItem {
  label: string;
  href: string;
  description: string;
}

export interface RouteSpecification {
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  summary: string;
  plannedModules: string[];
  dynamicSubroutes?: string;
}

export interface EcosystemProductSlot {
  id: string;
  name: string;
  category: string;
  relationship: string;
  statusNote: string;
  placeholderSummary: string;
}

export interface TechnologyDomainSlot {
  index: string;
  name: string;
  scope: string;
  description: string;
}

export interface PhilosophyPrinciple {
  index: string;
  title: string;
  description: string;
}

export const CORPORATE_IDENTITY = {
  name: 'Piqqudim',
  positioning: 'Rendering the unseen.',
  secondaryPositioning: 'Started Here. Built Everywhere.',
  mantra: 'We build.',
  coreDefinition:
    'Piqqudim is a technology company building software, graphics technology, game technology, developer tools, digital platforms, and intelligent systems.',
};

/**
 * Global Navigation Contract
 * Company-first navigation. Individual products are strictly excluded from the top bar.
 */
export const PRIMARY_NAVIGATION: NavItem[] = [
  {
    label: 'Company',
    href: '/about',
    description: 'Corporate identity, origin, engineering principles, and long-term direction.',
  },
  {
    label: 'Technology',
    href: '/technology',
    description: 'Foundational research, graphics systems, compilers, and platform engineering.',
  },
  {
    label: 'Products',
    href: '/products',
    description: 'Overview of software, tools, platforms, and systems built by Piqqudim.',
  },
  {
    label: 'People',
    href: '/people',
    description: 'The engineers, researchers, and builders shaping Piqqudim.',
  },
  {
    label: 'Careers',
    href: '/careers',
    description: 'Opportunities to build foundational technology with global reach.',
  },
  {
    label: 'News',
    href: '/news',
    description: 'Official corporate announcements, engineering dispatches, and updates.',
  },
];

export const PRIMARY_ACTION = {
  label: 'Contact',
  href: '/contact',
};

export const ROUTE_SPECIFICATIONS: Record<string, RouteSpecification> = {
  '/': {
    path: '/',
    title: 'Piqqudim — Official Corporate Website',
    seoTitle: 'Piqqudim — Rendering the unseen.',
    seoDescription:
      'Piqqudim is a technology company building software, graphics technology, game technology, developer tools, digital platforms, and intelligent systems.',
    kicker: '00. Corporate Homepage',
    summary:
      'Official corporate homepage for Piqqudim — communicating who Piqqudim is, what Piqqudim builds, and where Piqqudim is going.',
    plannedModules: [
      'Corporate Positioning Hero',
      'About Piqqudim ("We build technology.")',
      'What We Do (6 Core Engineering Disciplines)',
      'Technology Philosophy & Engineering Mindset',
      'Product Ecosystem & Umbra Engine Context',
      'Vision ("Rendering the unseen.")',
      'People, Careers, News & Closing Contact CTA',
    ],
  },
  '/about': {
    path: '/about',
    title: 'About Piqqudim',
    seoTitle: 'Company — Piqqudim',
    seoDescription:
      'Learn about Piqqudim, our engineering philosophy, origin, and global technology ambitions.',
    kicker: '01. Company',
    summary:
      'Architectural route for communicating Piqqudim as an institution: our mission, engineering culture, origin, and long-term technical vision.',
    plannedModules: [
      'Company Thesis & Long-Term Ambition',
      'Engineering Philosophy ("We build.")',
      'Origin & Global Perspective (Rendering the unseen.)',
      'Corporate Structure & Governance',
    ],
  },
  '/technology': {
    path: '/technology',
    title: 'Technology & Engineering',
    seoTitle: 'Technology — Piqqudim',
    seoDescription:
      'Explore Piqqudim’s core engineering domains across software systems, graphics technology, game technology, developer tools, and intelligent systems.',
    kicker: '02. Technology',
    summary:
      'Architectural route dedicated to Piqqudim’s technical depth, engineering disciplines, research focus, and system architecture.',
    plannedModules: [
      'Core Technical Disciplines & Systems Engineering',
      'Graphics & Real-Time Rendering Architecture',
      'Programming Languages, Compilers & Developer Tooling',
      'Digital Platforms & Intelligent Systems Infrastructure',
    ],
  },
  '/products': {
    path: '/products',
    title: 'Product Ecosystem',
    seoTitle: 'Products — Piqqudim',
    seoDescription:
      'Discover the ecosystem of software, developer tools, engines, and digital platforms built by Piqqudim.',
    kicker: '03. Products',
    summary:
      'Architectural route organizing products built by Piqqudim within the corporate ecosystem while preserving the distinction between the company and individual products.',
    plannedModules: [
      'Corporate Ecosystem Relationship Map',
      'Developer Tools & Engine Systems Directory',
      'Digital Platforms & Applications Directory',
      'Dedicated External Product Portal Links',
    ],
  },
  '/people': {
    path: '/people',
    title: 'People & Culture',
    seoTitle: 'People | Piqqudim',
    seoDescription:
      'Meet the people behind Piqqudim and explore our engineering principles, discipline, and collaborative environment.',
    kicker: '04. People',
    summary:
      'Architectural route highlighting the human dimension of Piqqudim: leadership, engineering values, and multidisciplinary craftsmanship.',
    plannedModules: [
      'People Hero ("Technology is built by people.")',
      'People Philosophy (Curiosity, Ownership, Collaboration, Craft, Growth)',
      'Team & Areas of Work Directory',
      'Building Together & Careers CTA',
    ],
  },
  '/careers': {
    path: '/careers',
    title: 'Careers at Piqqudim',
    seoTitle: 'Careers | Piqqudim',
    seoDescription:
      'Join Piqqudim to build software, graphics technology, developer tools, and intelligent systems.',
    kicker: '05. Careers',
    summary:
      'Architectural route for engineering, research, design, and operational roles at Piqqudim, supporting nested individual role detail routes.',
    plannedModules: [
      'Careers Hero ("Build what comes next.")',
      'Why Piqqudim & Global Ambition',
      '11 Areas of Work Across Disciplines',
      'Data-Driven Open Positions & /careers/[job-slug] Architecture',
    ],
    dynamicSubroutes: '/careers/:slug',
  },
  '/news': {
    path: '/news',
    title: 'News & Dispatches',
    seoTitle: 'News | Piqqudim',
    seoDescription:
      'Official corporate announcements, technical dispatches, and company updates from Piqqudim.',
    kicker: '06. News',
    summary:
      'Architectural route for official company announcements, engineering logs, and press releases, supporting nested article routes.',
    plannedModules: [
      'Featured Corporate Dispatch',
      'Chronological Archive & Category Filter',
      'Article Reader Architecture (/news/:slug)',
      'Media & Press Inquiry Contact',
    ],
    dynamicSubroutes: '/news/:slug',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact & Inquiries',
    seoTitle: 'Contact | Piqqudim',
    seoDescription:
      'Connect with Piqqudim for technology partnerships, enterprise inquiries, press, and general corporate communication.',
    kicker: '07. Contact',
    summary:
      'Architectural route for structured corporate communication, partnership inquiries, press correspondence, and institutional contact.',
    plannedModules: [
      'Direct Inquiry Routing Categorization',
      'Accessible Corporate Contact Form Foundation',
      'Official Communication Channels',
    ],
  },
};

/**
 * Section 6: What We Do (6 Core Engineering Areas)
 */
export const TECHNOLOGY_DOMAIN_SLOTS: TechnologyDomainSlot[] = [
  {
    index: '01',
    name: 'Software',
    scope: 'Core Architecture & Infrastructure',
    description: 'Software systems and engineering infrastructure designed for reliability, scale, and long-term maintainability.',
  },
  {
    index: '02',
    name: 'Graphics',
    scope: 'Visual Computing & Rendering',
    description: 'Real-time rendering, graphics systems, and visual computing pipelines built for precision and performance.',
  },
  {
    index: '03',
    name: 'Game Technology',
    scope: 'Interactive Engines & Simulation',
    description: 'Technology for building interactive experiences, simulation systems, and modern games.',
  },
  {
    index: '04',
    name: 'Developer Technology',
    scope: 'Languages, Compilers & Workflows',
    description: 'Tools, programming systems, and foundational workflows that help developers build software.',
  },
  {
    index: '05',
    name: '3D Technology',
    scope: 'Spatial Modeling & Digital Worlds',
    description: 'Technology involving 3D environments, parametric design, visualization, and digital worlds.',
  },
  {
    index: '06',
    name: 'Intelligent Systems',
    scope: 'Adaptive & Data-Driven Systems',
    description: 'Technology involving intelligent, adaptive, and data-driven software systems.',
  },
];

/**
 * Section 7: Technology Philosophy Principles
 */
export const TECHNOLOGY_PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    index: '01',
    title: 'First-Principles Engineering',
    description:
      'We approach problems from their underlying fundamentals, designing systems from the ground up rather than assembling superficial layers.',
  },
  {
    index: '02',
    title: 'Creating Rather Than Consuming',
    description:
      'Piqqudim exists to author foundational technology—engines, languages, tools, and platforms—rather than merely packaging third-party systems.',
  },
  {
    index: '03',
    title: 'Long-Term Systems & Performance',
    description:
      'We engineer software for durability, computational efficiency, and architectural clarity across decades of evolution.',
  },
  {
    index: '04',
    title: 'Practical Innovation & Craft',
    description:
      'Technical depth is paired with creative discipline to turn complex engineering into coherent, usable tools and platforms.',
  },
];

/**
 * Section 8: Product Ecosystem (Secondary to Corporate Identity)
 */
export const ECOSYSTEM_PRODUCT_SLOTS: EcosystemProductSlot[] = [
  {
    id: 'umbra-engine',
    name: 'Umbra Engine',
    category: 'Graphics & Game Technology',
    relationship: 'Built by Piqqudim',
    statusNote: 'Engine & Rendering Project',
    placeholderSummary:
      'Graphics and game engine technology developed within the Piqqudim ecosystem for real-time rendering and interactive systems.',
  },
  {
    id: 'pi-launcher',
    name: 'Pi Launcher',
    category: 'Digital Platform',
    relationship: 'Built by Piqqudim',
    statusNote: 'Ecosystem Platform',
    placeholderSummary:
      'A unified distribution and environment platform connecting applications, tools, and interactive experiences built by Piqqudim.',
  },
  {
    id: 'p-language',
    name: 'P Language',
    category: 'Developer Technology',
    relationship: 'Built by Piqqudim',
    statusNote: 'Language & Tooling Project',
    placeholderSummary:
      'Programming language and compiler technology focused on expressive, structured software development.',
  },
  {
    id: 'nodecad',
    name: 'NodeCAD',
    category: '3D & Design Technology',
    relationship: 'Built by Piqqudim',
    statusNote: '3D Tooling Project',
    placeholderSummary:
      'Node-based 3D modeling and computational design software for structured geometric workflows.',
  },
  {
    id: 'remarket',
    name: 'Remarket',
    category: 'Digital Platform',
    relationship: 'Built by Piqqudim',
    statusNote: 'Platform Project',
    placeholderSummary:
      'A digital commerce and platform initiative engineered within Piqqudim’s software ecosystem.',
  },
  {
    id: 'games-division',
    name: 'Games',
    category: 'Interactive Experiences',
    relationship: 'Built by Piqqudim',
    statusNote: 'Interactive Projects',
    placeholderSummary:
      'Original interactive experiences and games developed alongside Piqqudim’s graphics and engine technology.',
  },
];
