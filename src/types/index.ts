// TypeScript type definitions for the portfolio application

// Core interfaces following Single Responsibility Principle
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Skill {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  proficiency: number; // 1-100
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  logo: string;
  responsibilities: string[];
  technologies?: string[];
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
}

// Animation configuration is now handled by Tailwind CSS classes
// No need for complex motion interfaces

// Component prop interfaces
export interface BaseComponentProps {
  className?: string;
  id?: string;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
}

// Value Card Interface (Single Responsibility)
export interface ValueCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Stat Interface
export interface Stat {
  id: string;
  value: string;
  label: string;
}

// Card component props
export interface CardProps extends BaseComponentProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}