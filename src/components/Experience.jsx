import React, { useEffect, useRef } from 'react';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Experience() {
  const { timeline } = portfolioConfig.about;
  
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current || !dotRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Progress starts when section top reaches viewport center, ends when bottom reaches center
      const viewportCenterOffset = (viewportHeight / 2) - rect.top;
      let progress = viewportCenterOffset / rect.height;
      progress = Math.max(0, Math.min(1, progress));
      
      // Update DOM styles directly for maximum scroll compositor thread performance
      lineRef.current.style.transform = `scaleY(${progress})`;
      dotRef.current.style.top = `${progress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial sizing check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (t.includes('franco') || t.includes('kernel')) {
      return "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop";
    }
    if (t.includes('blueflute') || t.includes('intern')) {
      return "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop";
    }
    if (t.includes('qiplo') || t.includes('saas')) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop";
    }
    if (t.includes('chatbot') || t.includes('conversational')) {
      return "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop";
    }
    if (t.includes('mba')) {
      return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop";
    }
    if (t.includes('b.tech') || t.includes('graduated')) {
      return "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop";
    }
    return "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop";
  };

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="w-full relative z-0 py-32 bg-white dark:bg-[#1a1625] text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-150 dark:border-zinc-900/60 overflow-hidden"
    >
      {/* Blurred background glow blobs for cool ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-[#fb7185]/5 dark:bg-[#fb7185]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#818cf8]/5 dark:bg-[#818cf8]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6">
        
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-2 animate-fade-in">
          Journey
        </span>
        <header className="mb-16">
          <h1 className="text-center text-4xl md:text-5xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text">
            My Experience
          </h1>
        </header>

        {/* Vertical Timeline Track */}
        <div className="relative pt-4">
          
          {/* Background track line */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-[2px] bg-gray-250 dark:bg-zinc-850 -translate-x-1/2 z-0" />
          
          {/* Animated Gradient timeline progress line */}
          <div 
            ref={lineRef}
            className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-[2px] bg-gradient-to-b from-[#818cf8] via-[#c084fc] to-[#fb7185] -translate-x-1/2 origin-top z-0 transition-transform duration-75 ease-out" 
            style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
          />

          {/* Glowing sliding dot */}
          <div 
            ref={dotRef}
            className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-[#c084fc] -translate-x-1/2 border-4 border-white dark:border-[#1a1625] z-10 shadow-[0_0_15px_rgba(192,132,252,0.9)] transition-all duration-75 ease-out" 
            style={{ top: '0%' }}
          />

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
                    <div className="group bg-white/90 dark:bg-[#1a1625]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-xl hover:border-[#c084fc]/50 transition-all duration-500 cursor-pointer">
                      
                      {/* Date Header */}
                      <div className="flex items-center gap-2 text-[#c084fc] font-bold mb-3 select-none">
                        <Calendar size={14} />
                        <span className="text-xs uppercase tracking-wider">{item.year}</span>
                      </div>

                      {/* Job / Milestone Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-1.5 transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>

                      {/* Sub-label/Company */}
                      <h4 className="text-sm text-[#818cf8] font-bold uppercase tracking-wide mb-4 flex items-center gap-1.5 select-none">
                        {getIcon(item.type)} {item.type === 'milestone' ? 'Milestone' : 'Technical Focus'}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-550 dark:text-gray-400 font-light leading-relaxed">
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
