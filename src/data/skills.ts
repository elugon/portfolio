import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    logo: '/skillsImages/js.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'languages',
    proficiency: 90
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: '/skillsImages/ts.png',
    url: 'https://www.typescriptlang.org/',
    category: 'languages',
    proficiency: 85
  },
  {
    id: 'react',
    name: 'React',
    logo: '/skillsImages/react.png',
    url: 'https://reactjs.org/',
    category: 'frontend',
    proficiency: 90
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    logo: '/skillsImages/nextjs.png',
    url: 'https://nextjs.org/',
    category: 'frontend',
    proficiency: 85
  },
  {
    id: 'html',
    name: 'HTML5',
    logo: '/skillsImages/html.webp',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    category: 'frontend',
    proficiency: 95
  },
  {
    id: 'css',
    name: 'CSS3',
    logo: '/skillsImages/css.webp',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    category: 'frontend',
    proficiency: 90
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    logo: '/skillsImages/tailwind.png',
    url: 'https://tailwindcss.com/',
    category: 'frontend',
    proficiency: 85
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    logo: '/skillsImages/node.png',
    url: 'https://nodejs.org/',
    category: 'backend',
    proficiency: 80
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    logo: '/skillsImages/mongodb.svg',
    url: 'https://www.mongodb.com/',
    category: 'backend',
    proficiency: 75
  },
  {
    id: 'git',
    name: 'Git',
    logo: '/skillsImages/git.png',
    url: 'https://git-scm.com/',
    category: 'tools',
    proficiency: 85
  },
  {
    id: 'github',
    name: 'GitHub',
    logo: '/skillsImages/github.png',
    url: 'https://github.com/',
    category: 'tools',
    proficiency: 85
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    logo: '/skillsImages/visualcode.png',
    url: 'https://code.visualstudio.com/',
    category: 'tools',
    proficiency: 90
  }
];

export const getSkillsByCategory = (category: Skill['category']) => 
  skills.filter(skill => skill.category === category);

export const getFeaturedSkills = () => 
  skills.filter(skill => skill.proficiency >= 85);

export const getSkillById = (id: string) => 
  skills.find(skill => skill.id === id);