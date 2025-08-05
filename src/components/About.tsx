import React from "react";
import { personalInfo } from "../data/personal-info";
import { animationClasses } from "../utils/tailwind-animations";

type Props = Record<string, never>;

export default function About(_props: Props) {
  return (
    <section
      className={`section-container-xl layout-two-col ${animationClasses.fadeInUp}`}
      id="about"
    >
      <div className="section-header-fixed">
        <h2 
          className={`section-title ${animationClasses.slideInFromTop}`}
        >
          Acerca
        </h2>
      </div>
      
      <div className="section-content-fixed">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`relative mx-auto lg:mx-0 ${animationClasses.slideInFromLeft}`}
          >
            <div className="img-responsive overflow-hidden rounded-2xl lg:h-[500px] lg:w-[400px] glass-card-hover">
              <img 
                src="/profileImages/profilePicture4.jpg" 
                alt={`${personalInfo.name} profile picture`}
                className="img-hover-zoom w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div 
            className={`spacing-lg text-center lg:text-left ${animationClasses.slideInFromRight}`}
          >
            <h3 className="text-subtitle text-gradient mb-6">
              Un poco de mi trasfondo
            </h3>
            <div className="spacing-md">
              <p className="text-body leading-relaxed">
                <span className="text-primary-400 font-semibold border-b-2 border-primary-400/30">
                  {personalInfo.title}.
                </span>{" "}
                {personalInfo.description}
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Esto me permite tener una buena habilidad para analizar y resolver problemas de muchos tipos, 
                siempre enfocándome en <span className="text-secondary-400 font-medium">código limpio</span>, 
                <span className="text-primary-400 font-medium">optimización de rendimiento</span>, y 
                <span className="text-amber-400 font-medium">experiencia de usuario</span>.
              </p>
              
              {/* Key highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="glass-card padding-sm text-center">
                  <div className="text-2xl font-bold text-gradient">5+</div>
                  <div className="text-xs text-muted">Años de Experiencia</div>
                </div>
                <div className="glass-card padding-sm text-center">
                  <div className="text-2xl font-bold text-gradient">15+</div>
                  <div className="text-xs text-muted">Tecnologías</div>
                </div>
                <div className="glass-card padding-sm text-center">
                  <div className="text-2xl font-bold text-gradient">100%</div>
                  <div className="text-xs text-muted">Satisfacción del Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}