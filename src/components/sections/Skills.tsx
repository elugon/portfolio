import { motion } from "framer-motion";
import React, { useState } from "react";
import SkillCard from "../common/SkillCard";
import { skills } from "../../data/skills";
import type { SectionProps } from "../../types";

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`section-container-xl text-center section-gradient-subtle ${className}`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-pattern" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Enhanced section header */}
      <div className="section-header-fixed">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-3d"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-muted text-sm font-medium"
        >
          Technologies & Tools I Master
        </motion.p>
      </div>

      {/* Category filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-32 sm:top-36 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="filter-container">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`filter-button ${
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
                className={`filter-button flex items-center gap-2 ${
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
      </motion.div>

      {/* Skills grid with enhanced layout */}
      <div className="section-content-fixed">
        <div className="container-xl">
          <motion.div 
            layout
            className="grid-2-3-4-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.05,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <SkillCard 
                  {...skill} 
                  showProficiency={showProficiency}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="stats-grid"
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
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${avgProficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${info.color}`}
                      />
                    </div>
                    <p className="text-xs text-muted mt-1">{avgProficiency}% Avg Proficiency</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Floating decoration elements */}
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.8), transparent)',
        }}
      />
    </motion.div>
  );
}