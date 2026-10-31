/**
 * Structured Content & Future-Ready Team Registry for the Piqqudim People Page (Phase 6A — /people)
 * Separates team member profiles, department taxonomy, and collaboration architecture from UI components.
 * Strict adherence to Content Accuracy rules: zero invented employees, fictional biographies, or fake photos.
 */

export type TeamDepartment =
  | 'Engineering'
  | 'Graphics'
  | 'Game Development'
  | 'Product'
  | 'Design'
  | 'Operations'
  | 'Business'
  | 'Leadership';

export interface PersonLink {
  label: string;
  href: string;
}

/**
 * Conceptual Person Model:
 * Person
 * ├── name
 * ├── role
 * ├── department
 * ├── biography
 * ├── image
 * └── links
 */
export interface PersonRecord {
  id: string;
  name: string;
  role: string;
  department: TeamDepartment;
  departments?: TeamDepartment[];
  areaOfWork: string;
  biography: string;
  image?: {
    url: string;
    alt: string;
  };
  links?: PersonLink[];
}

export interface PeoplePhilosophyPrinciple {
  index: string;
  title: string;
  summary: string;
  detail: string;
}

export interface DepartmentSpec {
  id: TeamDepartment;
  name: TeamDepartment;
  focus: string;
}

export interface CollaborationDiscipline {
  index: string;
  name: string;
  contribution: string;
}

export interface CollaborationOutcomeStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

/**
 * Section 3: People Philosophy
 * Framed explicitly as the principles Piqqudim aims to build its environment around.
 */
export const PEOPLE_PHILOSOPHY_PRINCIPLES: PeoplePhilosophyPrinciple[] = [
  {
    index: '01',
    title: 'Curiosity',
    summary: 'Ask difficult questions and learn how things work.',
    detail:
      'We value people who look beneath surface-level abstractions to understand why systems behave the way they do.',
  },
  {
    index: '02',
    title: 'Ownership',
    summary: 'Take responsibility for what you build.',
    detail:
      'From initial architecture to real-world reliability, we aim to build an environment where individuals care deeply about the outcome of their work.',
  },
  {
    index: '03',
    title: 'Collaboration',
    summary: 'Strong technology is rarely built in isolation.',
    detail:
      'Engines, languages, tools, and platforms take shape when engineers, designers, and product thinkers share knowledge openly.',
  },
  {
    index: '04',
    title: 'Craft',
    summary: 'Care about the details and quality of the work.',
    detail:
      'Precision in code, clarity in interfaces, and thoughtfulness in system design compound into enduring software.',
  },
  {
    index: '05',
    title: 'Growth',
    summary: 'Keep learning as technology evolves.',
    detail:
      'Building across software, graphics, 3D, and intelligent systems requires continuous learning through real engineering challenges.',
  },
];

/**
 * Section 4 & 5: Supported Team Areas / Departments
 */
export const TEAM_DEPARTMENTS: DepartmentSpec[] = [
  {
    id: 'Engineering',
    name: 'Engineering',
    focus: 'Core software systems, compilers, developer tools, and platform architecture.',
  },
  {
    id: 'Graphics',
    name: 'Graphics',
    focus: 'Real-time rendering pipelines, shaders, GPU workloads, and 3D visual systems.',
  },
  {
    id: 'Game Development',
    name: 'Game Development',
    focus: 'Interactive systems, gameplay engineering, simulation loops, and runtime mechanics.',
  },
  {
    id: 'Product',
    name: 'Product',
    focus: 'Translating foundational engineering into cohesive tools, platforms, and software.',
  },
  {
    id: 'Design',
    name: 'Design',
    focus: 'Interface clarity, 3D workflows, design systems, and human-centered software interaction.',
  },
  {
    id: 'Operations',
    name: 'Operations',
    focus: 'Organizational coordination, infrastructure continuity, and day-to-day execution.',
  },
  {
    id: 'Business',
    name: 'Business',
    focus: 'Partnerships, enterprise relationships, strategy, and long-term institutional growth.',
  },
  {
    id: 'Leadership',
    name: 'Leadership',
    focus: 'Technical direction, company stewardship, and long-term architectural vision.',
  },
];

export const TEAM_MEMBERS: PersonRecord[] = [
  {
    id: 'chukwufumanya-isu',
    name: 'Yehoshua Isu',
    role: 'Director',
    department: 'Leadership',
    departments: ['Leadership', 'Engineering', 'Graphics', 'Game Development'],
    areaOfWork: 'Engineering, Graphics & Game Development',
    biography:
      'Deep beneath the waters, where silence meets the soul, accompanied by sounds beyond the ordinary, no noise, no worldly desires — just the peace of God. That is a dream come true.',
    image: {
      url: '/assets/image/Yehoshua.png',
      alt: 'Portrait of Chukwufumanya Isu',
    },
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/chukwufumanyaisu/',
      },
    ],
  },
  {
    id: 'harikrishnan-mb',
    name: 'Harikrishnan MB',
    role: 'Gameplay Programmer',
    department: 'Game Development',
    departments: ['Game Development'],
    areaOfWork: 'Gameplay & Character Programming',
    biography:
      "I'm from India. I am an aspiring Unreal Engine Game Developer with a strong interest in gameplay and character programming. Right Now focused on the NPC system.",
    image: {
      url: '/assets/image/hari.jpg',
      alt: 'Portrait of Harikrishnan MB, Gameplay Programmer',
    },
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/harikrishnan-mb/',
      },
    ],
  },
];

/**
 * Section 6: Building Together
 * Conceptual flow:
 * Engineering + Graphics + Design + Product + Business -> Technology -> Products
 */
export const BUILDING_TOGETHER_DISCIPLINES: CollaborationDiscipline[] = [
  {
    index: '01',
    name: 'Engineering',
    contribution: 'Systems architecture, languages, compilers, and dependable infrastructure.',
  },
  {
    index: '02',
    name: 'Graphics',
    contribution: 'Rendering pipelines, 3D geometry, shaders, and visual computation.',
  },
  {
    index: '03',
    name: 'Design',
    contribution: 'Clear interfaces, intuitive workflows, and coherent human interaction.',
  },
  {
    index: '04',
    name: 'Product',
    contribution: 'Problem definition, ecosystem alignment, and practical utility.',
  },
  {
    index: '05',
    name: 'Business',
    contribution: 'Partnerships, operational stewardship, and sustainable delivery.',
  },
];

export const BUILDING_TOGETHER_OUTCOMES: CollaborationOutcomeStage[] = [
  {
    step: 'Stage 01',
    title: 'Technology',
    subtitle: 'Foundational Capabilities',
    description:
      'Combined disciplines converge into shared engines, compilers, libraries, 3D systems, and core technical capabilities.',
  },
  {
    step: 'Stage 02',
    title: 'Products',
    subtitle: 'Tools, Platforms & Experiences',
    description:
      'Foundational technology is shaped into software, developer tools, digital platforms, and interactive experiences people can use.',
  },
];
