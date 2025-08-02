import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { socialLinks } from "../../data/personal-info";
import { motionPresets } from "../../utils/animations";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const navigationLinks = socialLinks.filter(link => 
    ['linkedin', 'instagram'].includes(link.platform)
  );
  
  const contactLink = socialLinks.find(link => link.platform === 'email');

  return (
    <header className={`sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-2 xl:items-center ${className}`}>
      <motion.nav
        {...motionPresets.headerSlideIn}
        className="flex flex-row items-center"
        client:load
        aria-label="Social media links"
      >
        {navigationLinks.map((link) => (
          <SocialIcon
            key={link.platform}
            url={link.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${link.platform} profile`}
          />
        ))}
      </motion.nav>
      
      <motion.div
        {...motionPresets.headerSlideInRight}
        className="flex cursor-pointer flex-row items-center text-gray-300"
        client:load
      >
        {contactLink && (
          <>
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
              url={contactLink.url}
              aria-label="Contact via email"
            />
            <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
              Get In Touch
            </p>
          </>
        )}
      </motion.div>
    </header>
  );
}