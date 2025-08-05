import React from "react";
import { SocialIcon } from "react-social-icons";
import { socialLinks } from "../../data/personal-info";
import { animationClasses } from "../../utils/tailwind-animations";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const headerHeight = 80; // Approximate header height
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  
  const navigationLinks = socialLinks.filter(link => 
    ['linkedin', 'instagram', 'x'].includes(link.platform)
  );
  
  const contactLink = socialLinks.find(link => link.platform === 'email');

  return (
    <header className={`glass sticky top-2 z-50 border border-neutral-800/30 rounded-2xl mx-4 backdrop-blur-md bg-gradient-to-b from-neutral-900/90 to-neutral-900/70 shadow-lg shadow-neutral-900/25 ${className}`}>
      <div className="container-xl flex-between py-4 px-6">
        {/* Logo/Brand */}
        <div
          className={`flex items-center ${animationClasses.headerSlideIn}`}
        >
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('#hero');
            }}
            className="text-2xl font-bold text-gradient focus-ring rounded-lg px-3 py-2 hover:scale-105 transition-transform duration-200"
            aria-label="Go to top of portfolio"
          >
            EG
          </a>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`flex items-center space-x-8 ${animationClasses.headerSlideIn}`}
          aria-label="Main navigation"
        >
          {[
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(item.href);
              }}
              className="nav-link relative font-medium hover:text-primary-400 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Links & Contact */}
        <div
          className={`flex items-center space-x-4 ${animationClasses.headerSlideInRight}`}
        >
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {navigationLinks.map((link) => (
              <div
                key={link.platform}
                className="rounded-lg focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2 focus-within:ring-offset-neutral-900 hover:scale-110 transition-transform duration-200"
              >
                <SocialIcon
                  url={link.url}
                  fgColor="#94a3b8"
                  bgColor="transparent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.platform} profile (opens in new tab)`}
                  className="social-icon hover:opacity-80 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>

          {/* Contact Button */}
          {contactLink && (
            <a
              href={contactLink.url}
              className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
              aria-label="Send me an email"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="hidden lg:inline">Get In Touch</span>
              <span className="lg:hidden">Contact</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}