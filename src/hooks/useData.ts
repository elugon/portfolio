import { useMemo } from 'react';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { ExperienceService, ProjectService, SkillService } from '../utils/dataHelpers';
import type { Skill } from '../types';

// Custom hook for experience data - Single Responsibility
export function useExperiences() {
  const sortedExperiences = useMemo(
    () => ExperienceService.sortExperiencesByPeriod(experiences),
    []
  );

  const currentExperience = useMemo(
    () => ExperienceService.getCurrentExperience(experiences),
    []
  );

  const getExperienceById = useMemo(
    () => (id: string) => ExperienceService.getExperienceById(experiences, id),
    []
  );

  const getExperienceByCompany = useMemo(
    () => (company: string) => ExperienceService.getExperienceByCompany(experiences, company),
    []
  );

  return {
    experiences: sortedExperiences,
    currentExperience,
    getExperienceById,
    getExperienceByCompany,
    totalExperiences: experiences.length
  };
}

// Custom hook for project data - Single Responsibility
export function useProjects() {
  const featuredProjects = useMemo(
    () => ProjectService.getFeaturedProjects(projects),
    []
  );

  const completedProjects = useMemo(
    () => ProjectService.getProjectsByStatus(projects, 'completed'),
    []
  );

  const inProgressProjects = useMemo(
    () => ProjectService.getProjectsByStatus(projects, 'in-progress'),
    []
  );

  const sortedProjects = useMemo(
    () => ProjectService.sortProjectsByStatus(projects),
    []
  );

  const getProjectById = useMemo(
    () => (id: string) => ProjectService.getProjectById(projects, id),
    []
  );

  const getProjectsByTechnology = useMemo(
    () => (technology: string) => ProjectService.getProjectsByTechnology(projects, technology),
    []
  );

  return {
    projects: sortedProjects,
    featuredProjects,
    completedProjects,
    inProgressProjects,
    getProjectById,
    getProjectsByTechnology,
    totalProjects: projects.length
  };
}

// Custom hook for skills data - Single Responsibility
export function useSkills() {
  const skillsByCategory = useMemo(() => {
    const categories = SkillService.getSkillCategories(skills);
    return categories.reduce((acc, category) => {
      acc[category] = SkillService.getSkillsByCategory(skills, category);
      return acc;
    }, {} as Record<Skill['category'], Skill[]>);
  }, []);

  const featuredSkills = useMemo(
    () => SkillService.getFeaturedSkills(skills, 85),
    []
  );

  const sortedSkills = useMemo(
    () => SkillService.sortSkillsByProficiency(skills),
    []
  );

  const getSkillById = useMemo(
    () => (id: string) => SkillService.getSkillById(skills, id),
    []
  );

  const getSkillsByCategory = useMemo(
    () => (category: Skill['category']) => SkillService.getSkillsByCategory(skills, category),
    []
  );

  return {
    skills: sortedSkills,
    skillsByCategory,
    featuredSkills,
    getSkillById,
    getSkillsByCategory,
    categories: SkillService.getSkillCategories(skills),
    totalSkills: skills.length
  };
}

// Combined hook for all portfolio data
export function usePortfolio() {
  const experienceData = useExperiences();
  const projectData = useProjects();
  const skillData = useSkills();

  // Statistics computed once
  const stats = useMemo(() => ({
    totalYearsExperience: experienceData.experiences.length > 0 ? 
      new Date().getFullYear() - new Date(experienceData.experiences[experienceData.experiences.length - 1].period.split(' ')[0]).getFullYear() : 0,
    totalProjects: projectData.totalProjects,
    totalSkills: skillData.totalSkills,
    completedProjects: projectData.completedProjects.length,
    featuredProjects: projectData.featuredProjects.length,
    topSkills: skillData.featuredSkills.length
  }), [experienceData, projectData, skillData]);

  return {
    ...experienceData,
    ...projectData,
    ...skillData,
    stats
  };
}