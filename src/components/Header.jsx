import React, { useState } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';
import { scrollToSection } from '../utils/scroll';
import * as Icons from 'lucide-react';

export default function Header({ activeSection, setActiveSection, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'techstack', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'playground', label: 'Playground' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    scrollToSection(id, 80);
  };

  const renderIcon = (name) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <>
      {/* Floating Menu Button (Top Left) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 md:top-8 md:left-8 z-[60] p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-gray-800 dark:text-gray-200 group-hover:text-[#c084fc] transition-colors" />
        ) : (
          <Menu className="w-5 h-5 text-gray-800 dark:text-gray-200 group-hover:text-[#c084fc] transition-colors" />
        )}
      </button>

      {/* Floating Theme Button (Top Right) */}
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-[60] flex items-center gap-4 select-none">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-500 group-hover:text-amber-600 transition-colors animate-pulse" />
          ) : (
            <Moon className="w-5 h-5 text-gray-650 group-hover:text-indigo-500 transition-colors" />
          )}
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/45 dark:bg-black/60 backdrop-blur-md z-[55] animate-fade-in"
        />
      )}

      {/* Side Navigation Drawer */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[80vw] bg-white dark:bg-zinc-950 border-r border-gray-200/80 dark:border-gray-800/80 z-[58] p-8 md:p-10 flex flex-col justify-between transition-transform duration-500 shadow-2xl select-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-12">
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 cursor-pointer font-serif-display font-extrabold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] tracking-wider uppercase pt-8"
          >
            <span>{portfolioConfig.profile.avatarPlaceholder}</span>
            <span>{portfolioConfig.profile.name}</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 text-left">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2 font-sans font-bold text-base sm:text-lg transition-colors relative group select-none ${
                  activeSection === item.id 
                    ? 'text-[#c084fc]' 
                    : 'text-gray-550 dark:text-gray-400 hover:text-[#c084fc] dark:hover:text-[#c084fc]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-1.5 left-0 w-8 h-[2.5px] rounded-full bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185]" />
                )}
              </button>
            ))}
          </nav>

          {/* Resume Download Option */}
          <div className="pt-4 border-t border-gray-150 dark:border-gray-900/60 select-none">
            <a
              href={portfolioConfig.profile.resumeUrl}
              download="Akshat_Kumar_Resume.pdf"
              className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] hover:opacity-95 text-white font-bold text-xs tracking-wide transition-all duration-300 shadow-md shadow-[#c084fc]/15 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
            >
              <FileText size={14} /> Download Resume
            </a>
          </div>
        </div>

        {/* Footer / Social Badges */}
        <div className="space-y-6 pt-6 border-t border-gray-150 dark:border-gray-900">
          <div className="flex gap-4">
            {portfolioConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-105 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-[#c084fc] dark:hover:bg-[#c084fc] transition-all duration-300 hover:scale-105"
                title={social.name}
              >
                {renderIcon(social.iconName)}
              </a>
            ))}
          </div>
          <p className="text-[10px] font-mono text-gray-450 dark:text-gray-500">
            © {new Date().getFullYear()} {portfolioConfig.profile.name}
          </p>
        </div>
      </div>
    </>
  );
}
