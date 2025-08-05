import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { hoverClasses } from '../../utils/tailwind-animations';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { 
      value: 'light' as const, 
      label: 'Claro', 
      icon: '☀️',
      description: 'Tema claro'
    },
    { 
      value: 'dark' as const, 
      label: 'Oscuro', 
      icon: '🌙',
      description: 'Tema oscuro'
    },
    { 
      value: 'system' as const, 
      label: 'Sistema', 
      icon: '💻',
      description: 'Seguir preferencia del sistema'
    }
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[1];

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`btn-ghost p-2 rounded-lg ${hoverClasses.button}`}
        aria-label="Cambiar tema"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span
          key={currentTheme.value}
          className="text-lg animate-scale-in motion-reduce-animation"
          aria-hidden="true"
        >
          {currentTheme.icon}
        </span>
        <span className="sr-only">
          Tema actual: {currentTheme.label}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown */}
          <div
            className="absolute right-0 top-full mt-2 z-50 w-48 rounded-lg bg-neutral-800 border border-neutral-700 shadow-glow-lg backdrop-blur-sm animate-slide-up motion-reduce-animation"
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
                    aria-label={`Cambiar a ${themeOption.description}`}
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
                          Actual: {resolvedTheme}
                        </span>
                      )}
                    </div>
                    {theme === themeOption.value && (
                      <div
                        className="ml-auto w-2 h-2 bg-amber-400 rounded-full animate-scale-in motion-reduce-animation"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
    </div>
  );
}