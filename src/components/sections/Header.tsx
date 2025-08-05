import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { socialLinks } from "../../data/personal-info";
import { animationClasses } from "../../utils/tailwind-animations";
import ThemeToggle from "../ui/ThemeToggle";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigationLinks = socialLinks.filter(link => 
    ['linkedin', 'instagram'].includes(link.platform)
  );
  
  const contactLink = socialLinks.find(link => link.platform === 'email');

  return (
    <header className={`glass sticky top-0 z-50 ${className}`}>
      <div className="container-xl flex-between py-3">
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
            className="text-xl font-bold text-gradient focus-ring rounded-lg px-2 py-1"
            aria-label="Go to top of portfolio"
          >
            EG
          </a>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`hidden md:flex items-center space-x-1 ${animationClasses.headerSlideIn}`}
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
              className="nav-link"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Links & Contact */}
        <div
          className={`flex items-center space-x-2 ${animationClasses.headerSlideInRight}`}
        >
          {/* Social Icons */}
          <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
            {navigationLinks.map((link) => (
              <div
                key={link.platform}
                className="rounded-lg focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2 focus-within:ring-offset-neutral-900"
              >
                <SocialIcon
                  url={link.url}
                  fgColor="#94a3b8"
                  bgColor="transparent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.platform} profile (opens in new tab)`}
                  className="social-icon"
                />
              </div>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Contact Button */}
          {contactLink && (
            <a
              href={contactLink.url}
              className="btn-primary hidden sm:inline-flex"
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="btn-ghost md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className={`block md:hidden border-t border-neutral-700 bg-neutral-900/95 backdrop-blur-sm ${animationClasses.fadeInDown}`}
        >
          <div className="px-4 py-3 space-y-2">
            {[
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link-mobile"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.href);
                  setIsMenuOpen(false);
                }}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-neutral-700">
              {navigationLinks.map((link) => (
                <SocialIcon
                  key={link.platform}
                  url={link.url}
                  fgColor="#94a3b8"
                  bgColor="transparent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.platform} profile (opens in new tab)`}
                  className="social-icon"
                />
              ))}
              {contactLink && (
                <a
                  href={contactLink.url}
                  className="btn-primary"
                  aria-label="Send me an email"
                >
                  Contact
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}