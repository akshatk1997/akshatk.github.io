import React from 'react';
import { ArrowRight, FileText, Sparkles, Code, Layout } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';
import * as Icons from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  const { profile, socials } = portfolioConfig;

  const renderIcon = (name) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent size={18} /> : null;
  };

  const getServiceIcon = (title) => {
    switch (title) {
      case "AI & Data Products":
        return <Sparkles className="text-rose-500" size={18} />;
      case "Product Engineering":
        return <Code className="text-amber-500" size={18} />;
      case "UX & Product Design":
        return <Layout className="text-rose-400" size={18} />;
      default:
        return <Sparkles className="text-rose-500" size={18} />;
    }
  };

  const handleScrollTo = (id) => {
    scrollToSection(id, 90);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-32 pb-20 relative overflow-hidden animate-slide-up-fade"
    >
      <div className="max-w-4xl w-full text-center space-y-12 z-20">
        
        <div className="space-y-6">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/10 dark:border-rose-500/20 text-xs md:text-sm text-rose-600 dark:text-rose-300 font-sans font-medium tracking-wide animate-float select-none shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 dark:bg-rose-400 animate-pulse"></span>
            <span>{profile.status}</span>
          </div>

          {/* Hero Copy */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-sans font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
              Hi, I'm <span className="inline-block xs:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500">{profile.name}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-sans font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400">
              {profile.title}
            </p>
          </div>

          {/* Custom Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            {profile.tagline}
          </p>
        </div>

        {/* Stats Counter Grid */}
        {profile.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            {profile.stats.map((stat, sIdx) => (
              <div 
                key={sIdx} 
                className="glass p-4 rounded-2xl border border-slate-100 dark:border-slate-900/50 shadow-sm flex flex-col justify-center items-center hover:border-rose-500/10 transition-all duration-300 select-none"
              >
                <span className="font-extrabold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                  {stat.value}
                </span>
                <span className="text-[9px] md:text-[10px] font-semibold tracking-wider text-slate-400 dark:text-slate-550 uppercase text-center mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Services / Focus Cards Grid */}
        {profile.services && (
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto pt-2">
            {profile.services.map((service, sIdx) => (
              <div 
                key={sIdx} 
                className="glass p-5 rounded-2xl border border-slate-100 dark:border-slate-900/50 text-left hover:border-rose-500/20 transition-all duration-300 hover:scale-[1.01] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100/50 dark:bg-slate-900/60 flex items-center justify-center border dark:border-slate-800/80">
                    {getServiceIcon(service.title)}
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-slate-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Buttons / Actions */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <button 
            onClick={() => handleScrollTo('projects')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-medium text-sm flex items-center gap-2 shadow-md shadow-rose-500/20 hover:shadow-rose-500/35 transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Projects <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={() => handleScrollTo('contact')}
            className="px-6 py-3 rounded-full glass border hover:bg-slate-100/50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Let's Connect
          </button>
          
          {profile.resumeUrl && profile.resumeUrl !== '#' && (
            <a 
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full glass border hover:bg-slate-100/50 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-medium text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText size={16} /> Resume
            </a>
          )}
        </div>

        {/* Social Badges */}
        <div className="flex justify-center items-center gap-4 pt-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border text-slate-600 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-300 hover:scale-105"
              title={social.name}
            >
              {renderIcon(social.iconName)}
            </a>
          ))}
        </div>

      </div>

      {/* Atmospheric Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-rose-500/10 dark:bg-rose-500/5 blur-3xl -z-10 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-3xl -z-10 pointer-events-none animate-pulse-slow"></div>
    </section>
  );
}
