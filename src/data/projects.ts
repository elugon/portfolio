import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'iron-crypto',
    title: 'Iron Crypto',
    description: 'A comprehensive cryptocurrency tracking application built with modern web technologies. Features real-time price updates, portfolio management, and advanced analytics.',
    image: '/projectsImages/ironCrypto.png',
    githubUrl: 'https://github.com/elugon/Iron-Crypto',
    liveUrl: 'https://iron-crypto-elugon.vercel.app/',
    technologies: ['React', 'TypeScript', 'API Integration', 'Chart.js'],
    featured: true,
    status: 'completed'
  },
  {
    id: 'shoes-house',
    title: 'Shoes House',
    description: 'An elegant e-commerce platform for shoe retail with modern design, shopping cart functionality, and seamless user experience.',
    image: '/projectsImages/shoesHouse.png',
    githubUrl: 'https://github.com/elugon/ShoesHouse',
    liveUrl: 'https://shoes-house-elugon.vercel.app/',
    technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
    featured: true,
    status: 'completed'
  },
  {
    id: 'ultimate-todo',
    title: 'Ultimate Todo',
    description: 'A powerful task management application with advanced features including categories, deadlines, priorities, and progress tracking.',
    image: '/projectsImages/toDo.png',
    githubUrl: 'https://github.com/elugon/UltimateTodo',
    liveUrl: 'https://ultimate-todo-elugon.vercel.app/',
    technologies: ['React', 'Local Storage', 'CSS3', 'JavaScript'],
    featured: true,
    status: 'completed'
  }
];

export const getFeaturedProjects = () => 
  projects.filter(project => project.featured);

export const getProjectsByStatus = (status: Project['status']) => 
  projects.filter(project => project.status === status);

export const getProjectById = (id: string) => 
  projects.find(project => project.id === id);

export const getProjectsByTechnology = (technology: string) => 
  projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );