import React, { useState } from "react";
import SkillCard from "../common/SkillCard";
import { skills } from "../../data/skills";
import type { SectionProps } from "../../types";
import { animationClasses } from "../../utils/tailwind-animations";

interface SkillsProps extends SectionProps {
  showProficiency?: boolean;
}

export default function Skills({ 
  title = "Skills", 
  showProficiency = true,
  className = ""
}: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.keys(skillsByCategory);
  const filteredSkills = selectedCategory 
    ? skillsByCategory[selectedCategory] 
    : skills;

  const categoryInfo = {
    frontend: { 
      name: 'Frontend', 
      icon: '🎨',
      color: 'from-secondary-400 to-secondary-600' 
    },
    backend: { 
      name: 'Backend', 
      icon: '⚙️',
      color: 'from-semantic-success-400 to-semantic-success-600' 
    },
    tools: { 
      name: 'Tools', 
      icon: '🛠️',
      color: 'from-primary-400 to-primary-600' 
    },
    languages: { 
      name: 'Languages', 
      icon: '💻',
      color: 'from-semantic-warning-400 to-semantic-warning-600' 
    },
  };

  return (
    <div
      className={`section-container-xl text-center section-gradient-subtle ${animationClasses.fadeInUp} ${className}`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-pattern" />
        <div
          className="absolute inset-0 animated-gradient"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Enhanced section header */}
      <div className="section-header-fixed">
        <h3 
          className={`section-title text-3d ${animationClasses.slideInFromTop}`}
        >
          {title}
        </h3>
        <p 
          className={`mt-2 text-muted text-sm font-medium ${animationClasses.fadeInUp}`}
          style={{ animationDelay: '0.2s' }}
        >
          Technologies & Tools I Master
        </p>
      </div>

      {/* Category filters */}
      <div 
        className={`absolute top-32 sm:top-36 left-1/2 transform -translate-x-1/2 z-20 ${animationClasses.slideInFromBottom}`}
        style={{ animationDelay: '0.3s' }}
      >
        <div className="filter-container">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`filter-button touch-target ${
              !selectedCategory 
                ? 'filter-button-active' 
                : 'filter-button-inactive'
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => {
            const info = categoryInfo[category as keyof typeof categoryInfo];
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-button touch-target flex items-center gap-2 ${
                  selectedCategory === category 
                    ? `filter-button-active bg-gradient-to-r ${info.color}` 
                    : 'filter-button-inactive'
                }`}
              >
                <span>{info.icon}</span>
                <span>{info.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills grid with enhanced layout */}
      <div className="section-content-fixed">
        <div className="container-xl">
          <div className="grid-2-3-4-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.id}
                className={`group ${animationClasses.scaleIn} hover:-translate-y-1 transition-transform duration-300`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <SkillCard 
                  {...skill} 
                  showProficiency={showProficiency}
                  className="h-full"
                />
              </div>
            ))}
          </div>

          {/* Skills statistics */}
          <div
            className={`stats-grid ${animationClasses.slideInFromBottom}`}
            style={{ animationDelay: '0.5s' }}
          >
            {categories.map((category) => {
              const info = categoryInfo[category as keyof typeof categoryInfo];
              const categorySkills = skillsByCategory[category];
              const avgProficiency = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length
              );

              return (
                <div key={category} className="stat-card">
                  <div className={`text-3xl mb-2`}>{info.icon}</div>
                  <h4 className="font-semibold text-neutral-100 mb-1">{info.name}</h4>
                  <p className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${info.color}">
                    {categorySkills.length}
                  </p>
                  <p className="text-xs text-muted mt-1">Technologies</p>
                  <div className="mt-3">
                    <div className="h-2 bg-neutral-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${info.color} animate-slide-right`}
                        style={{ 
                          width: `${avgProficiency}%`,
                          animationDelay: '0.5s',
                          animationDuration: '1s'
                        }}
                      />
                    </div>
                    <p className="text-xs text-muted mt-1">{avgProficiency}% Avg Proficiency</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating decoration elements */}
      <div 
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-20 float-animation"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.8), transparent)',
        }}
      />
    </div>
  );
}