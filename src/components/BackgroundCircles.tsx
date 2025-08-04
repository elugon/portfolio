import React from "react";
import { animationClasses } from "../utils/tailwind-animations";

type Props = Record<string, never>;

export default function BackgroundCircles(_props: Props) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${animationClasses.backgroundCircles}`}
      aria-hidden="true"
    >
      {/* Innermost circle - subtle ping animation */}
      <div className="absolute h-[80px] w-[80px] rounded-full border border-neutral-700/30 animate-pulse sm:h-[120px] sm:w-[120px] md:h-[160px] md:w-[160px]" />
      
      {/* Second circle */}
      <div className="absolute h-[140px] w-[140px] rounded-full border border-neutral-700/20 sm:h-[200px] sm:w-[200px] md:h-[280px] md:w-[280px]" />
      
      {/* Third circle */}
      <div className="absolute h-[200px] w-[200px] rounded-full border border-neutral-700/15 sm:h-[280px] sm:w-[280px] md:h-[400px] md:w-[400px]" />
      
      {/* Fourth circle - primary accent */}
      <div className="absolute h-[260px] w-[260px] rounded-full border border-primary-500/20 shadow-glow sm:h-[360px] sm:w-[360px] md:h-[520px] md:w-[520px]" />
      
      {/* Outermost circle */}
      <div className="absolute h-[320px] w-[320px] rounded-full border border-neutral-700/10 sm:h-[440px] sm:w-[440px] md:h-[640px] md:w-[640px]" />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/20 rounded-full" />
    </div>
  );
}