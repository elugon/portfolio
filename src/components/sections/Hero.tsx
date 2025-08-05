import Typewriter from "typewriter-effect";
import React from "react";
import BackgroundCircles from "../BackgroundCircles";
import { personalInfo, typewriterStrings } from "../../data/personal-info";
import { animationClasses } from "../../utils/tailwind-animations";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <main className={`section-container-xl relative pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20 ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <BackgroundCircles />
      
      {/* Profile Image - Absolutely centered within circles */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className={`relative img-responsive overflow-hidden rounded-full ${animationClasses.scaleIn} pointer-events-auto`}>
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
      
      {/* Main Content - Normal document flow with reduced top spacing */}
      <div className="relative z-20 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <div className="container-md text-center space-y-12 sm:space-y-16 lg:space-y-20">
          <header className="space-y-8 sm:space-y-12">
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
          
          {/* Enhanced description and Stats - Improved responsive layout */}
          <div className="space-y-8 lg:space-y-12 max-w-6xl mx-auto">
            {/* Description */}
            <div className="text-center">
              <p 
                className={`text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-4xl mx-auto ${animationClasses.fadeInUp}`}
                style={{ animationDelay: '0.5s' }}
              >
                Creando <span className="text-primary-400 font-semibold">experiencias digitales excepcionales</span> con 
                tecnologías modernas y una pasión por el <span className="text-secondary-400 font-semibold">código limpio y eficiente</span>
              </p>
            </div>

            {/* Stats Grid - Better mobile layout */}
            <div 
              className={`grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-md sm:max-w-lg lg:max-w-xl mx-auto ${animationClasses.fadeInUp}`}
              style={{ animationDelay: '0.6s' }}
            >
              <div className="text-center">
                <p 
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient ${animationClasses.scaleIn}`}
                  style={{ animationDelay: '0.7s' }}
                >
                  5+
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <p 
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient ${animationClasses.scaleIn}`}
                  style={{ animationDelay: '0.8s' }}
                >
                  20+
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">Proyectos</p>
              </div>
              <div className="text-center">
                <p 
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient ${animationClasses.scaleIn}`}
                  style={{ animationDelay: '0.9s' }}
                >
                  15+
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">Tecnologías</p>
              </div>
            </div>
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
            Desplázate para explorar
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