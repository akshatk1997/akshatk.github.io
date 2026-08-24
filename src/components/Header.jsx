import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';
import { scrollToSection } from '../utils/scroll';

export default function Header({ activeSection, setActiveSection, theme, toggleTheme }) {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'playground', label: 'Playground' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    scrollToSection(id, 90);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none animate-slide-down-fade">
      <div className="glass shadow-md rounded-full px-3 md:px-5 py-1.5 md:py-2 flex items-center justify-between gap-3 md:gap-6 w-full max-w-2xl pointer-events-auto transition-all duration-300">
        <div 
          onClick={() => handleNavClick('hero')} 
          className="font-serif-display font-bold text-rose-500 cursor-pointer text-base md:text-lg tracking-wider flex items-center gap-1 select-none hover:opacity-85 transition-opacity uppercase"
        >
          <span>{portfolioConfig.profile.avatarPlaceholder}</span>
          <span className="hidden sm:inline">{portfolioConfig.profile.name}</span>
          <span className="hidden xs:inline sm:hidden">{portfolioConfig.profile.name.split(' ')[0]}</span>
        </div>
        
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-rose-500 bg-rose-500/10 dark:bg-rose-500/20' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-500/10 dark:hover:bg-rose-500/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
          aria-label="Toggle Theme"
        >
          <div className="transition-transform duration-500 group-hover:rotate-90">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </div>
        </button>
      </div>
    </header>
  );
}
