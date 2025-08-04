import Typewriter from "typewriter-effect";
import React from "react";
import BackgroundCircles from "../BackgroundCircles";
import { personalInfo, typewriterStrings } from "../../data/personal-info";
import { animationClasses, hoverClasses } from "../../utils/tailwind-animations";

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
      <div className={`relative z-10 ${animationClasses.scaleIn}`}>
        <div className="relative mx-auto img-responsive overflow-hidden rounded-full">
          {/* Rotating gradient border */}
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-primary-400 via-primary-600 to-secondary-400 animate-spin" style={{ animationDuration: '8s' }} />
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
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-400 rounded-full animate-pulse" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      
      {/* Text Content with modern styling */}
      <div className="z-20 container-md text-center spacing-md">
        <header className="spacing-sm">
          <p 
            className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-primary-400 ${animationClasses.slideInFromTop}`}
            style={{ animationDelay: '0.3s' }}
          >
            {personalInfo.title}
          </p>
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-neutral-100 ${animationClasses.slideInFromBottom}`}
            style={{ animationDelay: '0.4s' }}
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
          </h1>
        </header>
        
        {/* Enhanced description */}
        <p 
          className={`text-lg sm:text-xl text-neutral-300 leading-relaxed container-sm ${animationClasses.fadeInUp}`}
          style={{ animationDelay: '0.5s' }}
        >
          Crafting <span className="text-primary-400 font-semibold">exceptional digital experiences</span> with 
          modern technologies and a passion for <span className="text-secondary-400 font-semibold">clean, efficient code</span>
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-sm justify-center items-center ${animationClasses.slideInFromBottom}`}
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#projects"
            className={`btn-modern w-full sm:w-auto ${hoverClasses.button}`}
          >
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className={`btn-modern-outline w-full sm:w-auto ${hoverClasses.button}`}
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Quick stats */}
        <div 
          className={`flex flex-wrap justify-center gap-lg ${animationClasses.fadeInUp}`}
          style={{ animationDelay: '0.7s' }}
        >
          <div className="text-center">
            <p 
              className={`text-3xl sm:text-4xl font-bold text-gradient ${animationClasses.scaleIn}`}
              style={{ animationDelay: '0.8s' }}
            >
              5+
            </p>
            <p className="text-sm text-neutral-400 margin-xs">Years Experience</p>
          </div>
          <div className="text-center">
            <p 
              className={`text-3xl sm:text-4xl font-bold text-gradient ${animationClasses.scaleIn}`}
              style={{ animationDelay: '0.9s' }}
            >
              20+
            </p>
            <p className="text-sm text-neutral-400 margin-xs">Projects Completed</p>
          </div>
          <div className="text-center">
            <p 
              className={`text-3xl sm:text-4xl font-bold text-gradient ${animationClasses.scaleIn}`}
              style={{ animationDelay: '1s' }}
            >
              15+
            </p>
            <p className="text-sm text-neutral-400 margin-xs">Technologies</p>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div 
        className={`absolute bottom-6 left-1/2 z-10 -translate-x-1/2 ${animationClasses.fadeInUp}`}
        style={{ animationDelay: '1.2s' }}
      >
        <div 
          className="flex flex-col items-center gap-2 cursor-pointer group float-animation"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs text-neutral-400 group-hover:text-primary-400 transition-colors">
            Scroll to explore
          </span>
          <div className="h-8 w-5 rounded-full border-2 border-neutral-600 group-hover:border-primary-400 transition-colors">
            <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-primary-400 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full blur-3xl bg-primary-400/20 float-animation" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-3xl bg-secondary-400/20 float-animation" style={{ animationDelay: '2s' }} />
    </main>
  );
}