// ============================================
// PORTFOLIO DATA — Single source of truth (Typed)
// ============================================

export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  headline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  photo: string;
  logo: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Ankit Das',
  title: 'Full-Stack Web Developer',
  roles: [
    'Full-Stack Developer',
    'Frontend Engineer',
    'UI/UX Enthusiast',
    'Problem Solver',
  ],
  headline: 'Building Modern Digital Experiences',
  bio: "I'm a passionate developer focused on building beautiful, responsive, and user-friendly web applications. I love solving problems and turning ideas into real-world products.",
  email: 'ankit.das.ad03@gmail.com',
  github: 'https://github.com/mrAnkit2003',
  linkedin: 'https://www.linkedin.com/in/ankit-das-0ab999320/',
  resume: '/AnkitDas_SoftwareDev.pdf',
  photo: '/my-photo.jpg',
  logo: '/logo.png',
};

export interface Stat {
  label: string;
  value: number | string;
}

export const stats: Stat[] = [
  { label: 'Projects Built', value: 4 },
  { label: 'Technologies', value: 12 },
  { label: 'Certifications', value: 3 },
];

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
}

export const projectsData: Project[] = [
  {
    title: 'E-Commerce Store',
    description:
      'A multi vendor e-commerce platform built with Next.js and Stripe for payments. Includes user auth, a shopping cart, and an admin dashboard.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Neon', 'Clerk', 'Inngest'],
    liveUrl: 'https://go-cart-nine.vercel.app/',
    githubUrl: 'https://github.com/mrAnkit2003/GoCart',
    imageUrl: 'https://placehold.co/600x400/1a0033/ffffff.png?text=E-Commerce+Store',
  },
  {
    title: 'Portfolio Website',
    description:
      'The very website you are looking at! Built with Next.js and Tailwind CSS to be fast, responsive, and easy to update.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://my-portfolio-two-psi-90.vercel.app/',
    githubUrl: 'https://github.com/mrAnkit2003/My-Portfolio',
    imageUrl: 'https://placehold.co/600x400/1a0033/ffffff.png?text=Portfolio+Website',
  },
  {
    title: 'Video Conferencing',
    description:
      'A video conferencing platform enabling real-time video calls, messaging, and authenticated user sessions.',
    techStack: ['React', 'WebRTC', 'Socket.io', 'Mongo Atlas', 'Express.js', 'Node.js'],
    liveUrl: 'https://nexmeetfrontend-suek.onrender.com/',
    githubUrl: 'https://github.com/mrAnkit2003/NexMeet',
    imageUrl: 'https://placehold.co/600x400/1a0033/ffffff.png?text=Video+Conferencing',
  },
  {
    title: 'Chat Application',
    description:
      'A realtime chatting platform enabling real-time messaging, authenticated user login and realtime updates.',
    techStack: ['React', 'Socket.io', 'Mongo Atlas', 'Express.js', 'Node.js'],
    liveUrl: 'https://chatnow-svms.onrender.com',
    githubUrl: 'https://github.com/mrAnkit2003/ChatNow',
    imageUrl: 'https://placehold.co/600x400/1a0033/ffffff.png?text=Chat+Application',
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Java'],
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Vercel', 'Postman', 'Stripe', 'Figma'],
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
];

export interface Certification {
  name: string;
  organization: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    name: 'IBM Full Stack Software Developer',
    organization: 'IBM',
    date: 'Jan 2025',
  },
  {
    name: 'The Structured Query Language (SQL)',
    organization: 'University of Colorado Boulder (Coursera)',
    date: 'Jun 2025',
  },
  {
    name: 'Cloud Infrastructure AI Foundations Associate',
    organization: 'Oracle',
    date: 'Oct 2025',
  },
];
