import React, { useState } from 'react';
import { portfolioConfig } from '../portfolio.config';
import { Heart, Compass, AlertCircle, Bookmark } from 'lucide-react';

export default function About() {
  const { about } = portfolioConfig;
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(null);

  const getTimelineIcon = (type) => {
    switch (type) {
      case 'milestone':
        return <Bookmark className="text-rose-500" size={14} />;
      case 'learning':
        return <Compass className="text-amber-500" size={14} />;
      case 'detour':
        return <AlertCircle className="text-rose-400" size={14} />;
      default:
        return <Heart className="text-slate-400" size={14} />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 px-4 md:px-6 max-w-5xl mx-auto space-y-20 border-t border-slate-100 dark:border-slate-900/50"
    >
      
      {/* Background and Core Expertise */}
      <div className="grid md:grid-cols-5 gap-10 items-start">
        
        {/* Left Column: Background */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-wider uppercase text-rose-550 dark:text-rose-400">My Background</span>
            <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-slate-800 dark:text-white leading-tight">
              Education & <span className="text-rose-500">Story</span>
            </h2>
          </div>
          
          {/* Education Blocks */}
          <div className="space-y-3.5">
            <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/40 border dark:border-slate-800/80">
              <span className="text-[9px] font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
                2024 - 2026
              </span>
              <h4 className="font-bold text-xs md:text-sm text-slate-800 dark:text-white mt-2">MBA in AI & Data Science</h4>
              <p className="text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 font-light mt-0.5">Chandigarh University, Mohali</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/40 border dark:border-slate-800/80">
              <span className="text-[9px] font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
                2019 - 2023
              </span>
              <h4 className="font-bold text-xs md:text-sm text-slate-800 dark:text-white mt-2">B.Tech in Computer Science & Engineering</h4>
              <p className="text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 font-light mt-0.5">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
            </div>
          </div>

          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            {about.bio}
          </p>
          {about.quote && (
            <div className="pt-3 border-l-2 border-rose-500/30 dark:border-rose-500/20 pl-4 italic text-slate-500 dark:text-slate-400 text-[10px] md:text-xs leading-relaxed select-none">
              "{about.quote}"
            </div>
          )}
        </div>
        
        {/* Right Column: Core Expertise */}
        <div className="md:col-span-3 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-wider uppercase text-rose-550 dark:text-rose-400">How I Deliver Value</span>
            <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-slate-800 dark:text-white leading-tight">
              Core <span className="text-rose-500">Expertise</span>
            </h2>
          </div>
          
          <div className="grid gap-4">
            {about.philosophies.map((phil, idx) => (
              <div key={idx} className="glass p-5 rounded-2xl border transition-all duration-300 hover:border-rose-500/20 hover:bg-white dark:hover:bg-slate-900/60 shadow-sm">
                <h3 className="font-bold text-slate-800 dark:text-white text-xs md:text-sm mb-1.5 flex items-center gap-2">
                  <span className="text-rose-500">0{idx + 1}.</span> {phil.title}
                </h3>
                <p className="text-[11px] md:text-xs text-slate-650 dark:text-slate-400 leading-relaxed font-light">
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* The Two Stacks (Tech vs Personal) */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        
        {/* Tech Stack */}
        <div className="glass p-6 md:p-8 rounded-3xl border space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-serif-display font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-6">
              Professional <span className="text-rose-500">Stack</span>
            </h3>
            <div className="space-y-5">
              {about.techStack.map((stack, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    {stack.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent dark:border-slate-700/50 hover:border-rose-500/25 transition-all duration-300 select-none"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Stack (Notebook-styled) */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/10 dark:border-amber-500/5 bg-[#fbf9f0] dark:bg-[#191814] text-[#4d4838] dark:text-[#beb696] p-6 md:p-8 shadow-sm flex flex-col justify-between">
          {/* Spiral binder loops */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 flex flex-col justify-around py-4 border-r border-dashed border-[#ddd6b1] dark:border-[#333023]">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#c2b98f] dark:bg-[#474229] -mr-1 shadow-sm"></div>
            ))}
          </div>
          
          <div className="pl-6 md:pl-8 space-y-6">
            <h3 className="text-xl md:text-2xl font-serif-display font-bold text-[#3a3523] dark:text-[#ebdca2] flex items-center gap-2">
              Personal <span className="text-[#993b27] dark:text-[#d1705b]">Stack</span>
            </h3>
            <div className="divide-y divide-[#eedda2]/40 dark:divide-[#2e2b20] space-y-3.5">
              {about.personalStack.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4 pt-3.5 first:pt-0">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#877c59] dark:text-[#918664]">
                    {item.label}
                  </span>
                  <span className="text-xs md:text-sm font-light text-right max-w-[65%] leading-snug">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Timeline */}
      <div className="space-y-10 pt-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl md:text-3xl font-serif-display font-bold text-slate-800 dark:text-white">
            The Journey <span className="text-rose-500 italic">Timeline</span>
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto">
            An honest history of key milestones, breakthroughs, and learning moments. (Click events to expand details)
          </p>
        </div>

        <div className="relative pl-8 md:pl-0 before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-slate-200 dark:before:bg-slate-800/80 space-y-8 max-w-4xl mx-auto">
          {about.timeline.map((event, idx) => {
            const isExpanded = selectedTimelineIndex === idx;
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-center w-full justify-between ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Spacing Column on Desktop */}
                <div className="hidden md:block w-[calc(50%-24px)]" />

                {/* Timeline dot centered absolutely on desktop, left-anchored on mobile */}
                <div className="absolute left-[-25px] md:left-1/2 md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full glass border flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 z-10">
                  {getTimelineIcon(event.type)}
                </div>

                {/* Card container */}
                <div 
                  onClick={() => setSelectedTimelineIndex(isExpanded ? null : idx)}
                  className={`w-full md:w-[calc(50%-24px)] p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                    isExpanded 
                      ? 'bg-rose-500/5 dark:bg-rose-500/10 border-rose-500/30 dark:border-rose-500/20 shadow-sm scale-[1.01]' 
                      : 'glass border-slate-100 hover:border-slate-200 dark:border-slate-900 dark:hover:border-slate-800 hover:-translate-y-0.5 shadow-sm'
                  } ${
                    selectedTimelineIndex !== null && !isExpanded 
                      ? 'blur-[1.5px] opacity-40 scale-[0.98]' 
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-500/10 px-2 py-0.5 rounded-full dark:text-rose-400">
                      {event.year}
                    </span>
                    <span className={`text-[9px] uppercase font-bold tracking-wider ${
                      event.type === 'milestone' ? 'text-rose-500' : event.type === 'learning' ? 'text-amber-500' : 'text-rose-400'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <h4 className="font-serif-display font-bold text-slate-800 dark:text-white text-sm md:text-base">
                    {event.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-light mt-1.5 leading-relaxed line-clamp-none">
                    {event.description}
                  </p>
                  
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-rose-500/10 dark:border-rose-500/20 text-[10px] text-slate-400 dark:text-slate-500 font-medium italic flex items-center gap-1.5">
                      <span>✨ Tap again to release focus</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
