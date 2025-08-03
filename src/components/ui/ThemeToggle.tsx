import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { 
      value: 'light' as const, 
      label: 'Light', 
      icon: '☀️',
      description: 'Light theme'
    },
    { 
      value: 'dark' as const, 
      label: 'Dark', 
      icon: '🌙',
      description: 'Dark theme'
    },
    { 
      value: 'system' as const, 
      label: 'System', 
      icon: '💻',
      description: 'Follow system preference'
    }
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[1];

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn-ghost p-2 rounded-lg"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <motion.span
          key={currentTheme.value}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.2 }}
          className="text-lg"
          aria-hidden="true"
        >
          {currentTheme.icon}
        </motion.span>
        <span className="sr-only">
          Current theme: {currentTheme.label}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 z-50 w-48 rounded-lg bg-neutral-800 border border-neutral-700 shadow-glow-lg backdrop-blur-sm"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="theme-menu"
            >
              <div className="p-1">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.value}
                    onClick={() => {
                      setTheme(themeOption.value);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-md transition-colors ${
                      theme === themeOption.value
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100'
                    }`}
                    role="menuitem"
                    aria-label={`Switch to ${themeOption.description}`}
                  >
                    <span className="text-base" aria-hidden="true">
                      {themeOption.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {themeOption.label}
                      </span>
                      {themeOption.value === 'system' && (
                        <span className="text-xs text-neutral-400">
                          Currently: {resolvedTheme}
                        </span>
                      )}
                    </div>
                    {theme === themeOption.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-amber-400 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}