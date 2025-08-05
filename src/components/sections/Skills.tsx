import React, { useState } from "react";
import SkillCard from "../common/SkillCard";
import { skills } from "../../data/skills";
import type { SectionProps } from "../../types";
import { animationClasses } from "../../utils/tailwind-animations";

export default function Skills({ 
  title = "Skills",
  className = ""
}: SectionProps) {
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
    <section
      className={`section-container-xl section-gradient-subtle ${animationClasses.fadeInUp} ${className}
                 relative overflow-hidden @container transform-gpu`}
      id="skills"
      aria-labelledby="skills-title"
    >
      {/* Enhanced animated background pattern with modern 2025 styling */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none transform-gpu">
        <div className="absolute inset-0 grid-pattern" />
        <div
          className="absolute inset-0 animated-gradient transform-gpu will-change-transform"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)
            `,
            backgroundSize: '150% 150%, 120% 120%, 100% 100%',
            animation: 'float 15s ease-out infinite alternate',
          }}
        />
      </div>
      
      {/* Additional modern grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px',
             }} 
        />
      </div>

      {/* Enhanced section header with better spacing */}
      <header className="section-header-fixed w-full max-w-4xl mx-auto px-4">
        <div className="text-center spacing-sm">
          <h2 
            id="skills-title"
            className={`section-title text-3d ${animationClasses.slideInFromTop}`}
          >
            {title}
          </h2>
          <p 
            className={`text-muted responsive-text font-medium max-w-2xl mx-auto mb-8 sm:mb-10 ${animationClasses.fadeInUp}`}
            style={{ animationDelay: '0.2s' }}
          >
            Technologies & Tools I Master
          </p>
        </div>
      </header>

      {/* Category filters with proper separation */}
      <nav 
        className={`absolute top-40 sm:top-44 lg:top-48 left-1/2 -translate-x-1/2 z-30 
                   w-full max-w-5xl px-4 sm:px-6 ${animationClasses.slideInFromBottom}`}
        style={{ animationDelay: '0.3s' }}
        aria-label="Skills category filters"
      >
        {/* Modern filter container with rounded edges */}
        <div className="glass-card-hover padding-xs mx-auto max-w-3xl hover:border-neutral-600/40 rounded-full">
          
          {/* Filter buttons grid with smaller gaps */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 place-items-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`touch-target transform-gpu will-change-transform transition-all duration-200 ease-out 
                         hover:scale-105 active:scale-95 focus-ring whitespace-nowrap w-full max-w-[120px] ${
                !selectedCategory 
                  ? 'filter-button-active' 
                  : 'filter-button-inactive'
              }`}
              aria-pressed={!selectedCategory}
            >
              All Skills
            </button>
            
            {categories.map((category, index) => {
              const info = categoryInfo[category as keyof typeof categoryInfo];
              const isActive = selectedCategory === category;
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`touch-target transform-gpu will-change-transform transition-all duration-200 ease-out 
                             hover:scale-105 active:scale-95 focus-ring w-full max-w-[120px]
                             flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap
                             ${isActive 
                               ? `filter-button-active bg-gradient-to-r ${info.color} hover-glow` 
                               : 'filter-button-inactive'
                             }`}
                  style={{ 
                    animationDelay: `${0.4 + index * 0.1}s`
                  }}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${info.name} skills`}
                >
                  <span className="text-sm sm:text-base" role="img" aria-label={info.name}>{info.icon}</span>
                  <span className="hidden xs:inline text-xs">{info.name}</span>
                  <span className="xs:hidden text-xs">{info.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
          
          {/* Active filter indicator with consistent spacing */}
          {selectedCategory && (
            <div className="mt-6 pt-6 border-t border-subtle">
              <p className="text-center text-caption sm:text-sm text-muted" role="status" aria-live="polite">
                Showing <span className="text-gradient font-semibold">
                  {skillsByCategory[selectedCategory].length}
                </span> {categoryInfo[selectedCategory as keyof typeof categoryInfo].name.toLowerCase()} skills
              </p>
            </div>
          )}
        </div>
      </nav>

      {/* Skills grid with optimized layout */}
      <main className="pt-40 sm:pt-44 lg:pt-48 pb-8 sm:pb-12 lg:pb-16 w-full">
        <div className="container-xl">
          {/* Optimized skills grid */}
          <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
                         place-items-center max-w-5xl mx-auto transform-gpu">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.id}
                className={`group ${animationClasses.scaleIn} 
                           transform-gpu will-change-transform transition-all duration-300 ease-out 
                           hover:-translate-y-2 hover:shadow-card-hover
                           flex flex-col w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px]`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <SkillCard 
                  {...skill} 
                  className="h-full flex-1"
                />
              </div>
            ))}
          </div>

          {/* Skills statistics with optimized spacing */}
          <aside
            className={`mt-16 sm:mt-20 lg:mt-24 ${animationClasses.slideInFromBottom}`}
            style={{ animationDelay: '0.5s' }}
            aria-labelledby="skills-stats-title"
          >
            {/* Invisible title for screen readers */}
            <h3 id="skills-stats-title" className="sr-only">Skills Statistics</h3>
            
            {/* Enhanced stats grid with proper responsive centering */}
            <div className="stats-grid place-items-center lg:place-items-stretch 
                           justify-items-center max-w-6xl mx-auto">
              {categories.map((category, index) => {
                const info = categoryInfo[category as keyof typeof categoryInfo];
                const categorySkills = skillsByCategory[category];
                const avgProficiency = Math.round(
                  categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length
                );

                return (
                  <div 
                    key={category} 
                    className="stat-card group/stat w-full max-w-xs sm:max-w-sm lg:max-w-none
                              transform-gpu will-change-transform transition-all duration-300 ease-out 
                              hover:scale-105 hover:-translate-y-1 hover:shadow-card-hover
                              flex flex-col justify-between min-h-[180px] sm:min-h-[200px]
                              mx-auto"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {/* Icon with consistent spacing */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`text-3xl sm:text-4xl lg:text-5xl mb-2 
                                     transform-gpu will-change-transform 
                                     group-hover/stat:animate-bounce-gentle group-hover/stat:scale-110 
                                     transition-transform duration-200 ease-out`}
                           role="img" 
                           aria-label={`${info.name} category`}>
                        {info.icon}
                      </div>
                    </div>
                    
                    {/* Category info with consistent spacing */}
                    <div className="flex-1 text-center spacing-sm">
                      <h4 className="font-semibold text-neutral-100 text-sm sm:text-base lg:text-lg 
                                   group-hover/stat:text-primary-400 transition-colors duration-200 ease-out">
                        {info.name}
                      </h4>
                      
                      {/* Count with consistent spacing */}
                      <div className="spacing-xs">
                        <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${info.color} 
                                      bg-clip-text text-transparent transform-gpu will-change-transform
                                      group-hover/stat:scale-110 transition-transform duration-200 ease-out`}>
                          {categorySkills.length}
                        </p>
                        <p className="text-xs sm:text-sm text-muted font-medium">Technologies</p>
                      </div>
                      
                      {/* Proficiency indicator with consistent spacing */}
                      <div className="spacing-xs">
                        <div className="relative h-2.5 bg-neutral-700/50 rounded-full overflow-hidden
                                       group-hover/stat:h-3 transition-all duration-200 ease-out">
                          <div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${info.color} 
                                       rounded-full transition-all duration-800 ease-out transform-gpu
                                       hover-glow`}
                            style={{ 
                              width: `${avgProficiency}%`,
                              animationDelay: `${1 + index * 0.2}s`,
                            }}
                          />
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                                         via-white/30 to-transparent animate-shimmer opacity-0 transform-gpu
                                         group-hover/stat:opacity-100 transition-opacity duration-300 ease-out" />
                        </div>
                        <p className="text-xs sm:text-sm text-gradient font-semibold 
                                     group-hover/stat:text-primary-300 transition-colors duration-200 ease-out">
                          {avgProficiency}% Avg Proficiency
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </main>

      {/* Enhanced floating decoration elements with responsive positioning */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Primary floating orb - responsive positioning */}
        <div 
          className="absolute bottom-4 sm:bottom-8 lg:bottom-12 right-4 sm:right-8 lg:right-12 
                     w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full 
                     blur-2xl sm:blur-3xl opacity-15 sm:opacity-20 animate-float transform-gpu will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.8), transparent 70%)',
            animationDelay: '0s',
            animationDuration: '5s',
          }}
        />
        
        {/* Secondary floating orb - responsive positioning */}
        <div 
          className="absolute top-16 sm:top-20 lg:top-24 left-4 sm:left-8 lg:left-12 
                     w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full 
                     blur-xl sm:blur-2xl opacity-10 sm:opacity-15 animate-float transform-gpu will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6), transparent 70%)',
            animationDelay: '1.5s',
            animationDuration: '6s',
          }}
        />
        
        {/* Tertiary floating orb - responsive positioning */}
        <div 
          className="absolute top-1/3 sm:top-1/2 right-1/3 sm:right-1/4 
                     w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full 
                     blur-xl sm:blur-2xl opacity-8 sm:opacity-10 animate-float transform-gpu will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.5), transparent 70%)',
            animationDelay: '3s',
            animationDuration: '7s',
          }}
        />
      </div>
    </section>
  );
}