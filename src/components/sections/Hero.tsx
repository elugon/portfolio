import Typewriter from "typewriter-effect";
import React from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "../BackgroundCircles";
import { personalInfo, typewriterStrings } from "../../data/personal-info";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <main className={`section-container-xl relative ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <BackgroundCircles />
      
      {/* Profile Image with enhanced effects */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative z-10"
      >
        <div className="relative mx-auto img-responsive overflow-hidden rounded-full">
          {/* Rotating gradient border */}
          <motion.div
            className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-primary-400 via-primary-600 to-secondary-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative rounded-full overflow-hidden bg-neutral-900 p-1">
            <img 
              src="/profileImages/profilePicture3.png" 
              alt={`${personalInfo.name} - Software Developer`}
              className="img-hover-zoom rounded-full"
              loading="eager"
              width="192"
              height="192"
              sizes="(max-width: 475px) 112px, (max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            />
          </div>
          {/* Floating accent dots */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-primary-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary-400 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </motion.div>
      
      {/* Text Content with modern styling */}
      <div className="z-20 container-md text-center spacing-md">
        <header className="spacing-sm">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-primary-400"
          >
            {personalInfo.title}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-neutral-100"
          >
            <span className="inline-block">
              <Typewriter
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  wrapperClassName: "text-gradient text-glow",
                }}
              />
            </span>
          </motion.h1>
        </header>
        
        {/* Enhanced description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-neutral-300 leading-relaxed container-sm"
        >
          Crafting <span className="text-primary-400 font-semibold">exceptional digital experiences</span> with 
          modern technologies and a passion for <span className="text-secondary-400 font-semibold">clean, efficient code</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-sm justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="btn-modern w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-modern-outline w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Quick stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-lg"
        >
          <div className="text-center">
            <motion.p 
              className="text-3xl sm:text-4xl font-bold text-gradient"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              5+
            </motion.p>
            <p className="text-sm text-neutral-400 margin-xs">Years Experience</p>
          </div>
          <div className="text-center">
            <motion.p 
              className="text-3xl sm:text-4xl font-bold text-gradient"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
            >
              20+
            </motion.p>
            <p className="text-sm text-neutral-400 margin-xs">Projects Completed</p>
          </div>
          <div className="text-center">
            <motion.p 
              className="text-3xl sm:text-4xl font-bold text-gradient"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              15+
            </motion.p>
            <p className="text-sm text-neutral-400 margin-xs">Technologies</p>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs text-neutral-400 group-hover:text-primary-400 transition-colors">
            Scroll to explore
          </span>
          <div className="h-8 w-5 rounded-full border-2 border-neutral-600 group-hover:border-primary-400 transition-colors">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-primary-400"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full blur-3xl bg-primary-400/20"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-3xl bg-secondary-400/20"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </main>
  );
}