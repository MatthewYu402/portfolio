/*
 * All of the site's text, links and images live here, so you can edit them
 * without touching the components.
 *
 * Everything below was taken from the old site (home, experience, skills, about,
 * contact pages). Anything marked TODO didn't exist on the old site — replace it
 * with your own text. Search this file for "TODO" to find them all.
 */
import headshot from './assets/images/Website Headshot.webp';
import naraDeer from './assets/images/about-me-photo.webp';

export interface Photo {
  src: string;
  alt: string;
  /** Intrinsic size, so the browser reserves space before the image loads. */
  width: number;
  height: number;
  /** CSS object-position, for photos cropped into a different panel shape. */
  focus?: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  year?: string;
  description: string;
  stack: string[];
  /** Link to a case study, repo or live demo. Leave empty to hide the "View case" link. */
  href?: string;
  screenshot?: Photo;
  /** Renders the project as the "NEXT!" panel for work that's still in progress. */
  inProgress?: boolean;
}

export interface Job {
  dates: string;
  role: string;
  company: string;
  highlights: string[];
}

export interface School {
  degree: string;
  school: string;
  dates: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Playlist {
  title: string;
  description: string;
  href: string;
}

const base = import.meta.env.BASE_URL;

export const site = {
  name: 'Matthew Yu',
  /** The hero splits the name over two lines. */
  nameLines: ['MATTHEW', 'YU'],
  email: 'myu242@wisc.edu',
  copyrightYear: '2025',
};

export const hero = {
  kicker: 'Chapter 00 — Portfolio',
  caption:
    'I am a Senior at the University of Wisconsin-Madison pursuing a Bachelors in Computer Science and Data Science. I love finding creative solutions to complex problems and turning data into meaningful insights.',
};

export const projects: Project[] = [
  {
    title: 'TODO: Project title',
    year: 'TODO: Year',
    description: 'TODO: One sentence — what it does and why it matters.',
    stack: ['TODO: Stack', 'TODO: Stack', 'TODO: Stack'],
  },
  {
    title: 'TODO: Project title',
    year: 'TODO: Year',
    description: 'TODO: One sentence — what it does and why it matters.',
    stack: ['TODO: Stack', 'TODO: Stack'],
  },
  {
    title: 'TODO: Project title',
    description: 'TODO: One sentence — what it does and why it matters.',
    stack: [],
  },
  {
    title: 'TODO: Project in progress',
    description: 'TODO: What you are building right now.',
    stack: [],
    inProgress: true,
  },
];

export const experience: Job[] = [
  {
    dates: 'May 2024 – November 2024',
    role: 'Circulation/Collections Assistant',
    company: 'Memorial Library Shelving and Storage Department',
    highlights: [
      'Assisted in a special summer project at Steenbock Library, focusing on optimizing space and enhancing organization.',
      'Managed book returns and holds for other UW-Madison libraries, ensuring efficient processing and accurate tracking.',
      'Organized and shelved books by call number with meticulous attention to detail, maintaining order and accessibility.',
    ],
  },
  {
    dates: '2018 – 2022',
    role: 'Host',
    company: 'Green Leaf Restaurant',
    highlights: [
      'Expertly managed front-of-house operations by warmly welcoming and seating guests in a friendly and timely manner.',
      'Exhibited a keen attention to detail in managing reservations, accurately tracking availability of tables to customers.',
      'Maintained a courteous and professional demeanor with customers, ensuring a positive and welcoming atmosphere.',
    ],
  },
  {
    dates: '2018 – 2022',
    role: 'Cashier',
    company: 'Green Leaf Restaurant',
    highlights: [
      'Efficiently managed and organized takeout orders, ensuring timely preparation for customers picking up orders.',
      'Effectively processed customer purchases, ensuring the accurate and structured operation of the point-of-sale system.',
      'Provided friendly and courteous service to customers, addressing inquiries, and resolving issues to ensure satisfaction.',
    ],
  },
];

export const education: School[] = [
  {
    degree: 'B.S. Computer Science & Data Science',
    school: 'University of Wisconsin-Madison',
    dates: '2022 – 2026',
    description:
      'Pursuing dual degree in Computer Science and Data Science, focusing on machine learning and software engineering.',
  },
  {
    degree: 'High School',
    school: 'Hereford High School',
    dates: '2018 – 2022',
    description: 'Graduated with honors, focusing on mathematics and computer science.',
  },
];

export const skills: SkillGroup[] = [
  { label: 'Backend', skills: ['Java', 'Python'] },
  { label: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript'] },
  { label: 'Other Tools', skills: ['Git', 'Bash'] },
];

export const about = {
  portrait: {
    src: headshot,
    alt: 'Portrait of Matthew Yu',
    width: 3264,
    height: 2448,
    focus: '50% 30%',
  } satisfies Photo,
  /** TODO: no "at work" photo existed on the old site. Add one here to replace the placeholder. */
  workPhoto: undefined as Photo | undefined,
  hobbyPhoto: {
    src: naraDeer,
    alt: 'Sika deer in Nara Park, Japan',
    width: 4032,
    height: 3024,
  } satisfies Photo,
  hobbyCaption: 'Sika Deer in Nara Park, Japan',
  quote: 'TODO: One impactful sentence about what you love to do.',
  bio: [
    "Hi, I'm Matthew! I am a Senior at the University of Wisconsin-Madison studying Computer Science and Data Science. I'm particularly interested in full-stack web development and machine learning applications.",
    "Other than programming, I enjoy discovering new music and playing it on my radio show on WSUM 91.7. On top of that, I'm trying to learn new instruments like the guitar and harmonica.",
    "I also love to cook and bake new recipes. I'm eager to travel more to experience new cultures and cuisines, keeping an open mind wherever I go.",
  ],
  stats: [
    { label: 'Class', value: 'CS & Data Science Student' },
    { label: 'Base', value: 'Madison, Wisconsin' },
    { label: 'Special move', value: 'TODO: Your signature strength' },
    { label: 'Off-duty', value: 'Radio show on WSUM 91.7' },
  ] satisfies Stat[],
};

export const music = {
  title: 'Current Rotation',
  description: "Recent music I've been listening too - mix of personal favorites and new discoveries",
  embedSrc: 'https://open.spotify.com/embed/playlist/7JIwJ4T18s3ebiv7qQjZDv?utm_source=generator',
  href: 'https://open.spotify.com/playlist/7JIwJ4T18s3ebiv7qQjZDv?si=0e067e8047934813',
  playlists: [
    {
      title: 'Chiller Trap',
      description: 'Great chill background music for those long programming sessions.',
      href: 'https://open.spotify.com/playlist/0t5t6bK9a51gp9fCvEFyga?si=9b3136a721864bb7',
    },
    {
      title: 'Stargazing',
      description: 'The name speaks for itself.',
      href: 'https://open.spotify.com/playlist/3hpco0RXGCMBnt5vPySAw1?si=8a15b4323fde4f98',
    },
    {
      title: 'Test Your Luck',
      description: 'Something random, just go head on.',
      href: 'https://open.spotify.com/playlist/1defz1TB746jyKCJ0yVgW7?si=c8ec773c2c2948b0',
    },
  ] satisfies Playlist[],
};

export const contact = {
  links: [
    { label: 'GitHub', href: 'https://github.com/MatthewYu402' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthew-yu-37b860222/' },
    { label: 'Résumé', href: `${base}${encodeURI('Yu Matthew Resume.pdf')}` },
    { label: 'Instagram', href: 'https://www.instagram.com/_matthew_yu_/' },
    { label: 'Spotify', href: 'https://open.spotify.com/user/matthewyu402' },
  ] satisfies Link[],
};

export const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;
