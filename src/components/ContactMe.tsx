import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/solid";
import { socialLinks } from '../data/personal-info';

type Props = {
  "client:visible"?: boolean;
};

export default function ContactMe(_props: Props) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  const linkedInUrl = socialLinks.find(link => link.platform === 'linkedin')?.url;
  const instagramUrl = socialLinks.find(link => link.platform === 'instagram')?.url;
  const xUrl = socialLinks.find(link => link.platform === 'x')?.url;

  return (
    <div className="section-container-xl section-gradient-subtle">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
      
      <header className="section-header-inline relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.2em] text-neutral-400">
          Get In Touch
        </h2>
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <h3 className="text-lg sm:text-xl font-medium text-neutral-300 max-w-3xl mx-auto text-center">
            Interested in working together? I&apos;m{" "}
            <span className="text-gradient font-semibold">
              open to new opportunities
            </span>
            {" "}and always excited to discuss innovative projects.
          </h3>
        </div>
      </header>

      <div className="section-content-inline relative z-10">
        <div className="container-md">
          
          {/* Contact Information Grid */}
          <div className="grid-1-2-3 gap-lg mb-16">
            
            {/* Phone Card */}
            <div className="card-sm glass-card-hover group cursor-pointer neon-border"
                 onClick={() => copyToClipboard("+34634918659", "phone")}>
              <div className="flex flex-col items-center text-center spacing-sm">
                <div className="p-3 rounded-full bg-primary-400/10 text-primary-400 group-hover:bg-primary-400/20 group-hover:scale-110 transition-all duration-300">
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-100 mb-2">Phone</h4>
                  <a href="tel:+34634918659" 
                     className="text-neutral-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                     onClick={(e) => e.stopPropagation()}>
                    +34 634 91 86 59
                  </a>
                </div>
                <button
                  className="mt-4 p-2 rounded-lg hover:bg-neutral-800/50 transition-all duration-200 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard("+34634918659", "phone");
                  }}
                  aria-label="Copy phone number"
                >
                  {copiedField === "phone" ? (
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckIcon className="h-4 w-4" />
                      <span className="text-sm">Copied!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-neutral-400 hover:text-primary-400">
                      <ClipboardDocumentIcon className="h-4 w-4" />
                      <span className="text-sm">Copy</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="card-sm glass-card-hover group cursor-pointer neon-border"
                 onClick={() => copyToClipboard("elugon10@gmail.com", "email")}>
              <div className="flex flex-col items-center text-center spacing-sm">
                <div className="p-3 rounded-full bg-primary-400/10 text-primary-400 group-hover:bg-primary-400/20 group-hover:scale-110 transition-all duration-300">
                  <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-100 mb-2">Email</h4>
                  <a href="mailto:elugon10@gmail.com" 
                     className="text-neutral-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                     onClick={(e) => e.stopPropagation()}>
                    elugon10@gmail.com
                  </a>
                </div>
                <button
                  className="mt-4 p-2 rounded-lg hover:bg-neutral-800/50 transition-all duration-200 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard("elugon10@gmail.com", "email");
                  }}
                  aria-label="Copy email address"
                >
                  {copiedField === "email" ? (
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckIcon className="h-4 w-4" />
                      <span className="text-sm">Copied!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-neutral-400 hover:text-primary-400">
                      <ClipboardDocumentIcon className="h-4 w-4" />
                      <span className="text-sm">Copy</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="card-sm glass-card">
              <div className="flex flex-col items-center text-center spacing-sm">
                <div className="p-3 rounded-full bg-primary-400/10 text-primary-400">
                  <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-100 mb-2">Location</h4>
                  <span className="text-neutral-300 text-sm sm:text-base">
                    Barcelona, Spain
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-neutral-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for remote work
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links Section */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-neutral-100 mb-6">
              Follow Me
            </h4>
            <p className="text-sm sm:text-base text-neutral-300 mb-8 max-w-lg mx-auto">
              Stay connected and follow my journey in tech, projects, and daily life.
            </p>
            
            <div className="flex justify-center gap-6">
              {linkedInUrl && (
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-6 rounded-2xl group hover:scale-110 transition-all duration-300"
                  aria-label="Connect on LinkedIn"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-blue-400 transition-colors">
                      LinkedIn
                    </span>
                  </div>
                </a>
              )}
              
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-6 rounded-2xl group hover:scale-110 transition-all duration-300"
                  aria-label="Follow on Instagram"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C8.396 0 7.989.016 6.756.08 5.526.148 4.719.316 4.019.63c-.728.317-1.365.74-1.99 1.365C1.404 2.62.981 3.257.664 3.985.35 4.685.182 5.492.114 6.722.05 7.955.034 8.362.034 11.983c0 3.621.016 4.028.08 5.261.068 1.23.236 2.037.55 2.737.317.728.74 1.365 1.365 1.99.625.625 1.262 1.048 1.99 1.365.7.314 1.507.482 2.737.55 1.233.064 1.64.08 5.261.08 3.621 0 4.028-.016 5.261-.08 1.23-.068 2.037-.236 2.737-.55.728-.317 1.365-.74 1.99-1.365.625-.625 1.048-1.262 1.365-1.99.314-.7.482-1.507.55-2.737.064-1.233.08-1.64.08-5.261 0-3.621-.016-4.028-.08-5.261-.068-1.23-.236-2.037-.55-2.737-.317-.728-.74-1.365-1.365-1.99C20.378 1.404 19.741.981 19.013.664 18.313.35 17.506.182 16.276.114 15.043.05 14.636.034 11.017.034h1zm-.116 5.4c3.892 0 7.067 3.175 7.067 7.067 0 3.892-3.175 7.067-7.067 7.067-3.892 0-7.067-3.175-7.067-7.067 0-3.892 3.175-7.067 7.067-7.067zm0 11.655c2.54 0 4.588-2.048 4.588-4.588 0-2.54-2.048-4.588-4.588-4.588-2.54 0-4.588 2.048-4.588 4.588 0 2.54 2.048 4.588 4.588 4.588zm5.228-15.667a1.65 1.65 0 11-3.3 0 1.65 1.65 0 013.3 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-pink-400 transition-colors">
                      Instagram
                    </span>
                  </div>
                </a>
              )}
              
              {xUrl && (
                <a
                  href={xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-6 rounded-2xl group hover:scale-110 transition-all duration-300"
                  aria-label="Follow on X (Twitter)"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-neutral-500/10 text-neutral-400 group-hover:bg-neutral-500/20 transition-colors">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-400 transition-colors">
                      X (Twitter)
                    </span>
                  </div>
                </a>
              )}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-neutral-400">
                💬 I typically respond within 24 hours
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}