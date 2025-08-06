import type { ValueCard, Stat } from '../types';

// About page statistics data (Single Source of Truth)
export const aboutStats: Stat[] = [
  {
    id: 'experience',
    value: '12+',
    label: 'Años de Experiencia'
  },
  {
    id: 'technologies',
    value: '25+',
    label: 'Tecnologías Dominadas'
  },
  {
    id: 'team-leadership',
    value: '7',
    label: 'Desarrolladores Liderados'
  }
];

// Core values data (Single Source of Truth)
export const coreValues: ValueCard[] = [
  {
    id: 'leadership',
    icon: '👥',
    title: 'Liderazgo Técnico',
    description: 'Dirigiendo equipos de desarrollo y gestionando infraestructura crítica en Azure y AWS'
  },
  {
    id: 'ai-engineering',
    icon: '🤖',
    title: 'Prompt Engineering',
    description: 'Implementando técnicas avanzadas de IA para optimizar modelos y automatizar procesos'
  },
  {
    id: 'cloud-architecture',
    icon: '☁️',
    title: 'Arquitectura Cloud',
    description: 'Diseñando soluciones escalables y seguras en plataformas Azure y AWS'
  },
  {
    id: 'cybersecurity',
    icon: '🔐',
    title: 'Ciberseguridad',
    description: 'Aplicando estándares ISO 27001 para proteger datos sensibles y sistemas críticos'
  },
  {
    id: 'full-stack',
    icon: '💻',
    title: 'Desarrollo Full-Stack',
    description: 'Creando soluciones completas con Python, C#, TypeScript, GoLang y Vue.js'
  },
  {
    id: 'international',
    icon: '🌍',
    title: 'Proyectos Globales',
    description: 'Coordinando stakeholders internacionales con comunicación fluida en inglés'
  }
];