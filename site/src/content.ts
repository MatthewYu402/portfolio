/*
 * All of the site's text, links and images live here, so you can edit them
 * without touching the components.
 *
 * Everything below was taken from the old site (home, experience, skills, about,
 * contact pages). Anything marked TODO didn't exist on the old site — replace it
 * with your own text. Search this file for "TODO" to find them all.
 */
import headshot from './assets/images/website-headshot.jpg';
import naraDeer from './assets/images/about-me-photo.webp';
import graduation from './assets/images/graduation-photo.webp';
import phoebeBridgersConcert from './assets/images/phoebe-bridgers-concert.webp';
import taiwanNightMarket from './assets/images/taiwain-nm.webp';


export interface Photo {
  src: string;
  alt: string;
  /** Intrinsic size, so the browser reserves space before the image loads. */
  width: number;
  height: number;
  /** CSS object-position, for photos cropped into a different panel shape. */
  focus?: string;
}

export interface CaptionedPhoto extends Photo {
  /** Optional label shown on the photo. */
  caption?: string;
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
  /** Link to a case study or live demo. Leave empty to hide the "View case" link. */
  href?: string;
  /** GitHub repository URL. Leave empty to hide the "GitHub repo" link. */
  repo?: string;
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
  email: 'myu22826@gmail.com',
  copyrightYear: '2026',
};

export const hero = {
  kicker: 'Chapter 00 — Portfolio',
  /** TODO: add your hero photo here (shown to the left of your name). Until then a placeholder panel is shown. */
  photo: {
    src: headshot,
    alt: 'website-headshot-in-wisconsin',
    width: 800,
    height: 800,
  } as Photo,
  caption:
    'Software Engineer, based in Phoenix, MD. Looking for full time opportunities and open for relocation. I love to learn and build things that matter. Currently interested in backend development, building complex systems with simple implementation.',
};

export const projects: Project[] = [
  {
    title: 'LeetCode Visualizer',
    year: 'work in progress',
    description: 'Designing a visualizer that takes an unmodified LeetCode `Solution` class, lets users step though an example line by line, and draws arrays, hash maps, linked lists, trees, and graphs as they change, to build intuition and debig solutions.',
    stack: ['React', 'TypeScript', 'JSON Schema'],
    repo: 'https://github.com/MatthewYu402/LeetCode-Visualizer',
    inProgress: true,
  },
  {
    title: 'Spotify KPI Dashboard',
    description: 'A full-stack analytics dashboard that turns your personal Spotify Extended Streaming History into interactive highlights. It surfaces listening trends, top artists and tracks, average session length, discovery ratio, skip rates, and genre breakdowns, all filterable by week, month, year, or custom date range.',
    stack: [],
    repo: 'https://github.com/MatthewYu402/spotify-kpi-dashboard',
    inProgress: true,
  },
  {
    title: 'CHIP-8 Emulator',
    description: 'Developing a fully functional virtual machine interpreter for the CHIP-8 architecture from scratch. This project serves to be a deep dive into C++ object oriented design and low-level computer systems.',
    stack: [],
    // TODO: no CHIP-8 repo on GitHub yet — add its URL here to show the link.
    repo: '',
    inProgress: true,
  },
];

export const experience: Job[] = [
  {
    dates: 'January 2026 – June 2026',
    role: 'Software Engineering Intern',
    company: 'WEM Automation - A Valstone Company',
    highlights: [
      'Architected a full-stack manufacturing analytics platform (React, TypeScript, ASP.NET Core, SQL Server), giving plant managers real - time KPI visibility across 200 + daily production batches.',
      'Designed backend data architecture, REST APIs, and a dedicated SQL aggregation layer that turn raw operational data into query - efficient time - series KPIs for responsive dashboards.',
    ],
  },
  {
    dates: 'Summer 2026',
    role: 'Web Developer',
    company: 'Green Leaf Restaurant',
    highlights: [
      'Built and deployed a responsive React/TypeScript restaurant website from scratch, developing reusable components for 100+ menu items, image galleries, accordions, and mobile navigation across multiple pages.',
      'Designed and implemented a GitHub Actions CI/CD pipeline with automated pull-request build validation and deployments to staging and production environments.',
    ],
  },
  {
    dates: 'Fall 2025',
    role: 'Student Software Engineer',
    company: 'Rosenberg Lab',
    highlights: [
      'Built a Python/Kivy application with Pupil Labs eye-tracking integration to identify autism subgroups based on contextual learning vs. visual saliency patterns, enabling personalized therapeutics.',
      'Implemented real-time behavioral data collection on SQLite with a multi-threaded architecture, synchronizing response times, accuracy, and gaze data across 250 + trials.',
      'Collaborated with UW-Madison neuroscience researchers on a 5-person cross-functional Agile/Scrum team using Jira, Figma, Slack, and Git',
    ],
  },
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
];

export const education: School[] = [
  {
    degree: 'B.S. Computer Science & Data Science',
    school: 'University of Wisconsin-Madison',
    dates: '2022 – 2026',
    description:
      'Graduated with a double major in Computer Science and Data Science',
  },
  {
    degree: 'High School',
    school: 'Hereford High School',
    dates: '2018 – 2022',
    description: 'Graduated with honors, focusing on mathematics and computer science.',
  },
];

export const skills: SkillGroup[] = [
  { label: 'Backend', skills: ['C#', 'C++', 'Java', 'Python', 'ASP.NET Core', 'Django', 'REST APIs', 'SQL Server', 'SQLite', 'PostgreSQL'] },
  { label: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML', 'CSS', ] },
  { label: 'Other Tools', skills: ['Git', 'Bash', 'Docker', 'Linux', 'GitHub Actions'] },
];

export const about = {
  portrait: {
    src: taiwanNightMarket,
    alt: 'Portrait of Matthew Yu',
    width: 3024,
    height: 4032,
    focus: '50% 0%',

  } satisfies Photo,
  /** Shown in a row under the profile. Add as many as you like; 4 fit one row on desktop. */
  hobbyPhotos: [
    {
      src: naraDeer,
      alt: 'Sika deer in Nara Park, Japan',
      width: 4032,
      height: 3024,
      caption: 'Sika Deer in Nara Park, Japan',
    },
    {
      src: graduation,
      alt: 'Graduation photo',
      width: 3024,
      height: 4032,
      caption: 'Graduation',
    },
    {
      src: phoebeBridgersConcert,
      alt: 'Phoebe Bridgers concert',
      width: 4284,
      height: 5712,
      caption: 'Phoebe Bridgers in NYC',
    },
  ] satisfies CaptionedPhoto[],
  quote: 'I love to learn and build things that matter.',
  bio: [
    "I enjoy reading books and manga, watching movies, running, listening to new music, baking, and eating good food. Recently it has been a lot of Catan.",
    "Learning is an endless process and I believe in sharing knowledge to those who wish to find it. Knowledge is power and knowledge is growth, so never stop learning.",
    "I enjoy building and iterating though an architecture, looking at the reason for design choices and tradeoffs that come with it.",
  ],
  stats: [
    { label: 'Class', value: 'Software Engineer' },
    { label: 'Base', value: 'Phoenix, MD' },
    { label: 'Special move', value: 'Sleep' },
    { label: 'Off-duty', value: 'Mixing music' },
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
    { label: 'Résumé', href: `${base}${encodeURI('resume-10-20-26.pdf')}` },
  ] satisfies Link[],
};

export const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;
