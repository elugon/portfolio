import type { Experience, Skill } from '../types';

// Experience utilities following DRY principle
export class ExperienceService {
  static getCurrentExperience(experiences: Experience[]): Experience | undefined {
    return experiences.find(exp => exp.period.includes('Present'));
  }

  static getExperienceById(experiences: Experience[], id: string): Experience | undefined {
    return experiences.find(exp => exp.id === id);
  }

  static getExperienceByCompany(experiences: Experience[], company: string): Experience | undefined {
    return experiences.find(exp => exp.company.toLowerCase() === company.toLowerCase());
  }

  static sortExperiencesByPeriod(experiences: Experience[]): Experience[] {
    return [...experiences].sort((a, b) => {
      const aIsCurrent = a.period.includes('Present');
      const bIsCurrent = b.period.includes('Present');
      
      if (aIsCurrent && !bIsCurrent) return -1;
      if (!aIsCurrent && bIsCurrent) return 1;
      
      // Parse dates for non-current experiences
      const getEndYear = (period: string) => {
        const match = period.match(/(\d{4})/g);
        return match ? parseInt(match[match.length - 1]) : 0;
      };
      
      return getEndYear(b.period) - getEndYear(a.period);
    });
  }
}


// Skill utilities following DRY principle
export class SkillService {
  static getSkillsByCategory(skills: Skill[], category: Skill['category']): Skill[] {
    return skills.filter(skill => skill.category === category);
  }

  static getFeaturedSkills(skills: Skill[], minProficiency: number = 85): Skill[] {
    return skills.filter(skill => skill.proficiency >= minProficiency);
  }

  static getSkillById(skills: Skill[], id: string): Skill | undefined {
    return skills.find(skill => skill.id === id);
  }

  static sortSkillsByProficiency(skills: Skill[], ascending: boolean = false): Skill[] {
    return [...skills].sort((a, b) => 
      ascending ? a.proficiency - b.proficiency : b.proficiency - a.proficiency
    );
  }

  static getSkillCategories(skills: Skill[]): Skill['category'][] {
    const categories = new Set(skills.map(skill => skill.category));
    return Array.from(categories);
  }
}

// Generic utility functions following SOLID principles
export class DataValidator {
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  static sanitizeInput(input: string): string {
    return input.trim().replace(/[<>]/g, '');
  }
}

// Performance utilities
export class PerformanceHelper {
  static debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  static throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}