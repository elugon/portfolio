import type { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  {
    id: 'python',
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    url: 'https://www.python.org/',
    category: 'languages',
    proficiency: 95
  },
  {
    id: 'csharp',
    name: 'C#',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    category: 'languages',
    proficiency: 90
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    url: 'https://www.typescriptlang.org/',
    category: 'languages',
    proficiency: 95
  },
  {
    id: 'golang',
    name: 'GoLang',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
    url: 'https://golang.org/',
    category: 'languages',
    proficiency: 85
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'languages',
    proficiency: 95
  },

  // Frontend
  {
    id: 'vuejs',
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    url: 'https://vuejs.org/',
    category: 'frontend',
    proficiency: 90
  },
  {
    id: 'astro',
    name: 'Astro',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg',
    url: 'https://astro.build/',
    category: 'frontend',
    proficiency: 85
  },
  {
    id: 'html',
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    category: 'frontend',
    proficiency: 95
  },
  {
    id: 'css',
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    category: 'frontend',
    proficiency: 90
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    url: 'https://tailwindcss.com/',
    category: 'frontend',
    proficiency: 90
  },

  // Backend & Infrastructure
  {
    id: 'azure',
    name: 'Microsoft Azure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    url: 'https://azure.microsoft.com/',
    category: 'backend',
    proficiency: 90
  },
  {
    id: 'aws',
    name: 'Amazon AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    url: 'https://aws.amazon.com/',
    category: 'backend',
    proficiency: 85
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    url: 'https://git-scm.com/',
    category: 'tools',
    proficiency: 95
  },
  {
    id: 'github',
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    url: 'https://github.com/',
    category: 'tools',
    proficiency: 95
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    url: 'https://code.visualstudio.com/',
    category: 'tools',
    proficiency: 90
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    url: 'https://github.com/features/actions',
    category: 'tools',
    proficiency: 90
  },
  {
    id: 'power-automate',
    name: 'Power Automate',
    logo: 'https://cdn.simpleicons.org/microsoftpowerautomate',
    url: 'https://powerautomate.microsoft.com/',
    category: 'tools',
    proficiency: 80
  }
];

export const getSkillsByCategory = (category: Skill['category']) => 
  skills.filter(skill => skill.category === category);

export const getFeaturedSkills = () => 
  skills.filter(skill => skill.proficiency >= 85);

export const getSkillById = (id: string) => 
  skills.find(skill => skill.id === id);