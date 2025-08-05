import type { ValueCard, Stat } from '../types';

// About page statistics data (Single Source of Truth)
export const aboutStats: Stat[] = [
  {
    id: 'experience',
    value: '5+',
    label: 'Years of Experience'
  },
  {
    id: 'projects',
    value: '20+',
    label: 'Projects Delivered'
  },
  {
    id: 'satisfaction',
    value: '100%',
    label: 'Client Satisfaction'
  }
];

// Core values data (Single Source of Truth)
export const coreValues: ValueCard[] = [
  {
    id: 'innovation',
    icon: '💡',
    title: 'Innovation',
    description: 'Constantly exploring new technologies and creative solutions'
  },
  {
    id: 'quality',
    icon: '🎯',
    title: 'Quality',
    description: 'Delivering pixel-perfect, performant applications'
  },
  {
    id: 'collaboration',
    icon: '🤝',
    title: 'Collaboration',
    description: 'Working seamlessly with teams to achieve common goals'
  },
  {
    id: 'focus-areas',
    icon: '🔧',
    title: 'Focus Areas',
    description: 'Full-stack development, React ecosystem, modern web technologies, and cloud architecture'
  },
  {
    id: 'approach',
    icon: '🚀',
    title: 'Approach',
    description: 'Clean architecture, test-driven development, user-centered design, and agile methodologies'
  },
  {
    id: 'interests',
    icon: '💚',
    title: 'Interests',
    description: 'Soccer, cinema, emerging technologies, and contributing to open-source projects'
  }
];