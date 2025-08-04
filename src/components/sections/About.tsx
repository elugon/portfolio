import { motion } from "framer-motion";
import React from "react";
import { personalInfo } from "../../data/personal-info";
import type { SectionProps } from "../../types";

interface AboutProps extends SectionProps {
  profileImage?: string;
}

export default function About({ 
  title = "About", 
  profileImage = "/profileImages/profilePicture4.jpg",
  className = ""
}: AboutProps) {
  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    { 
      icon: "💡", 
      title: "Innovation", 
      description: "Constantly exploring new technologies and creative solutions"
    },
    { 
      icon: "🎯", 
      title: "Quality", 
      description: "Delivering pixel-perfect, performant applications"
    },
    { 
      icon: "🤝", 
      title: "Collaboration", 
      description: "Working seamlessly with teams to achieve common goals"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`section-container-xl ${className}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 section-gradient-subtle" />
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Section header */}
      <div className="section-header-inline">
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
          Get to Know Me Better
        </motion.p>
      </div>
      
      <div className="section-content-inline spacing-xl">
        <div className="container-xl">
          {/* Main content grid */}
          <div className="layout-two-col">
            {/* Image section with enhanced effects */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 mix-blend-overlay z-10" />
                  <img 
                    src={profileImage} 
                    alt={`${personalInfo.name} about picture`}
                    className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating accent */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-primary-400/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-400/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            {/* Content section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="spacing-md"
            >
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                  Crafting Digital Excellence
                </h4>
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  As a <span className="text-primary-400 font-semibold">Systems Engineer</span> with a passion for 
                  creating exceptional digital experiences, {personalInfo.description}
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  My engineering background provides me with strong analytical and problem-solving abilities, 
                  allowing me to tackle complex challenges with innovative solutions. I believe in writing 
                  clean, maintainable code that not only works but scales.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-sm padding-md">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-neutral-400 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-sm"
              >
                <a href="#contact" className="btn-modern">
                  Let&apos;s Work Together
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/resume.pdf" className="btn-modern-outline">
                  Download Resume
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Values section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <h4 className="text-2xl font-bold text-center mb-12 text-neutral-100">
              My Core Values
            </h4>
            <div className="layout-three-col">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-8 rounded-2xl text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-4"
                  >
                    {value.icon}
                  </motion.div>
                  <h5 className="text-xl font-semibold text-neutral-100 mb-3 group-hover:text-primary-400 transition-colors">
                    {value.title}
                  </h5>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional info cards with modern styling */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid-1-2-3"
          >
            <div className="card-elevated p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex-center">
                  <span className="text-lg">🎯</span>
                </div>
                <h5 className="text-lg font-semibold text-neutral-100">Focus Areas</h5>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Full-stack development, React ecosystem, modern web technologies, and cloud architecture
              </p>
            </div>
            
            <div className="card-elevated p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary-400 to-secondary-600 flex-center">
                  <span className="text-lg">🚀</span>
                </div>
                <h5 className="text-lg font-semibold text-neutral-100">Approach</h5>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Clean architecture, test-driven development, user-centered design, and agile methodologies
              </p>
            </div>
            
            <div className="card-elevated p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-semantic-success-400 to-semantic-success-600 flex-center">
                  <span className="text-lg">💚</span>
                </div>
                <h5 className="text-lg font-semibold text-neutral-100">Interests</h5>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Soccer, cinema, emerging technologies, and contributing to open-source projects
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-40 right-0 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </motion.div>
  );
}