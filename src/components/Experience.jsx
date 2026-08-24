import React, { useEffect, useRef } from 'react';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Experience() {
  const { timeline } = portfolioConfig.about;

  const getIcon = (type) => {
    switch (type) {
      case 'learning':
        return <GraduationCap size={16} />;
      default:
        return <Briefcase size={16} />;
    }
  };

  const getImage = (title) => {
    const t = title.toLowerCase();
    if (t.includes('blueflute') || t.includes('intern')) {
      return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop";
    }
    if (t.includes('qiplo') || t.includes('saas')) {
      return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop";
    }
    if (t.includes('chatbot') || t.includes('conversational')) {
      return "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop";
    }
    if (t.includes('mba') || t.includes('b.tech') || t.includes('graduated')) {
      return "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop";
    }
    return "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop";
  };

  return (
    <section 
      id="experience" 
      className="w-full relative z-0 py-32 bg-white dark:bg-[#1a1625] text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-150 dark:border-zinc-900/60"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-2 animate-fade-in">
          Journey
        </span>
        <header className="mb-16">
          <h1 className="text-center text-4xl md:text-5xl font-black bg-gradient-to-r from-[#ff4d8d] to-[#40c9ff] text-transparent bg-clip-text">
            My Experience
          </h1>
        </header>

        {/* Vertical Timeline Track */}
        <div className="relative pt-4">
          
          {/* Vertical central timeline line */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-[2px] bg-gray-250 dark:bg-zinc-800 -translate-x-1/2 z-0" />
          
          {/* Active pink dot at the very top */}
          <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-[#ff4d8d] -translate-x-1/2 border-4 border-white dark:border-[#1a1625] z-10 shadow-[0_0_12px_rgba(255,77,141,0.8)] -top-1" />

          {/* Timeline Items Stack */}
          <div className="space-y-16 mt-8">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative pl-10 md:pl-0 w-full flex flex-col md:flex-row items-center justify-between ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Left Side (Desktop): Cover Image */}
                  <div className="hidden md:flex w-full md:w-1/2 pr-0 md:pr-12 lg:pr-16 mb-6 md:mb-0 shrink-0 items-center justify-center md:justify-end">
                    <div className={`relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden bg-gray-100 dark:bg-zinc-900/60 border dark:border-zinc-800/80 shadow-md group ${
                      isEven ? 'md:mr-2' : 'md:ml-2'
                    }`}>
                      <img 
                        src={getImage(item.title)} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Right Side (Desktop): Timeline Card */}
                  <div className="w-full md:w-1/2 pl-0 md:pl-12 lg:pl-16 shrink-0 z-10 text-left">
                    <div className="group bg-white dark:bg-zinc-800/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-xl hover:border-[#ff4d8d]/50 transition-all duration-500 cursor-pointer">
                      
                      {/* Date Header */}
                      <div className="flex items-center gap-2 text-[#b666d2] dark:text-[#c477e0] font-bold mb-3 select-none">
                        <Calendar size={14} />
                        <span className="text-xs uppercase tracking-wider">{item.year}</span>
                      </div>

                      {/* Job / Milestone Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-1.5 transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>

                      {/* Sub-label/Company */}
                      <h4 className="text-sm text-[#40c9ff] font-bold uppercase tracking-wide mb-4 flex items-center gap-1.5 select-none">
                        {getIcon(item.type)} {item.type === 'milestone' ? 'Milestone' : 'Technical Focus'}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
