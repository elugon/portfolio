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

// Animation configuration types
export interface MotionConfig {
  initial: Record<string, any>;
  animate: Record<string, any>;
  transition: Record<string, any>;
  viewport?: Record<string, any>;
}

// Component prop interfaces
export interface BaseComponentProps {
  className?: string;
  id?: string;
}

export interface SectionProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
}