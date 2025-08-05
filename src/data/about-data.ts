import type { ValueCard, Stat } from '../types';

// About page statistics data (Single Source of Truth)
export const aboutStats: Stat[] = [
  {
    id: 'experience',
    value: '5+',
    label: 'Años de Experiencia'
  },
  {
    id: 'projects',
    value: '20+',
    label: 'Proyectos Entregados'
  },
  {
    id: 'satisfaction',
    value: '100%',
    label: 'Satisfacción del Cliente'
  }
];

// Core values data (Single Source of Truth)
export const coreValues: ValueCard[] = [
  {
    id: 'innovation',
    icon: '💡',
    title: 'Innovación',
    description: 'Explorando constantemente nuevas tecnologías y soluciones creativas'
  },
  {
    id: 'quality',
    icon: '🎯',
    title: 'Calidad',
    description: 'Entregando aplicaciones perfectas y de alto rendimiento'
  },
  {
    id: 'collaboration',
    icon: '🤝',
    title: 'Colaboración',
    description: 'Trabajando de manera fluida con equipos para lograr objetivos comunes'
  },
  {
    id: 'focus-areas',
    icon: '🔧',
    title: 'Áreas de Enfoque',
    description: 'Desarrollo full-stack, ecosistema React, tecnologías web modernas y arquitectura en la nube'
  },
  {
    id: 'approach',
    icon: '🚀',
    title: 'Enfoque',
    description: 'Arquitectura limpia, desarrollo dirigido por pruebas, diseño centrado en el usuario y metodologías ágiles'
  },
  {
    id: 'interests',
    icon: '💚',
    title: 'Intereses',
    description: 'Fútbol, cine, tecnologías emergentes y contribución a proyectos de código abierto'
  }
];