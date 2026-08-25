import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Projects() {
  const { projects } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef(null);

  const categories = ['All', 'Product Engineering', 'AI & Prompting', 'UX Research'];

  // Categorize projects based on tags/title
  const getFilteredProjects = () => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => {
      const tagsStr = p.tags.join(' ').toLowerCase();
      if (activeCategory === 'Product Engineering') {
        return tagsStr.includes('prd') || tagsStr.includes('sql') || p.title.toLowerCase().includes('qiplo');
      }
      if (activeCategory === 'AI & Prompting') {
        return tagsStr.includes('prompt') || tagsStr.includes('transformer');
      }
      if (activeCategory === 'UX Research') {
        return tagsStr.includes('ux') || tagsStr.includes('testing') || tagsStr.includes('research');
      }
      return true;
    });
  };

  const getProjectImage = (title) => {
    if (title.toLowerCase().includes('qiplo')) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop";
    }
    return "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop";
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollOffset = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const filtered = getFilteredProjects();

  return (
    <section 
      id="projects" 
      className="relative py-32 bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden w-full border-t border-gray-150 dark:border-zinc-900/60"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-2 animate-fade-in">
          Explore
        </span>
        <header className="mb-12">
          <h1 className="text-center text-4xl md:text-5xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text">
            My Recent Works
          </h1>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 select-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md'
                  : 'bg-zinc-100/80 text-zinc-550 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-450 dark:hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Swiper track navigation buttons (visible if project count exists) */}
        <div className="relative group px-2">
          {filtered.length > 0 && (
            <>
              <button 
                onClick={() => handleScroll('left')}
                className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 border dark:border-zinc-800 shadow-md hover:scale-105 active:scale-95 transition-transform hidden sm:flex items-center justify-center text-gray-800 dark:text-white"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 border dark:border-zinc-800 shadow-md hover:scale-105 active:scale-95 transition-transform hidden sm:flex items-center justify-center text-gray-800 dark:text-white"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Horizontally Scrolling Track */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-6 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.length === 0 ? (
              <div className="w-full text-center py-20 text-gray-500 font-light select-none">
                No projects matched this category yet.
              </div>
            ) : (
              filtered.map((project, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[300px] sm:min-w-[400px] snap-center cursor-pointer relative rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 h-[400px] border dark:border-zinc-800/20"
                >
                  {/* Visual Background Cover */}
                  <img 
                    src={getProjectImage(project.title)} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0 select-none pointer-events-none"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 z-10 group-hover:via-black/55 transition-all duration-300" />

                  {/* Card Content Overlay (visible at all times but reveals links on hover) */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 text-white select-none">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      
                      <div className="space-y-1 mb-3">
                        <span className="text-[10px] font-mono font-bold text-[#c084fc] flex items-center gap-1.5">
                          <Sparkles size={10} /> Featured Project
                        </span>
                        <h3 className="text-2xl font-black tracking-tight leading-tight select-all">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-300 font-light select-none leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags List */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[9px] font-bold px-2 py-0.5 bg-white/10 text-white/95 rounded-md backdrop-blur-md border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[9px] font-bold px-2 py-0.5 bg-white/10 text-white/95 rounded-md backdrop-blur-md border border-white/5">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Hover action links */}
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {project.links.live && project.links.live !== '#' && (
                          <a 
                            href={project.links.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-white text-zinc-950 hover:bg-[#c084fc] hover:text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-all select-none shadow-sm"
                          >
                            Live Demo <ExternalLink size={12} />
                          </a>
                        )}
                        {project.links.repo && project.links.repo !== '#' && (
                          <a 
                            href={project.links.repo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700/60 text-white hover:bg-zinc-800 font-bold text-xs flex items-center gap-1.5 transition-all select-none shadow-sm"
                          >
                            Source <Github size={12} />
                          </a>
                        )}
                      </div>

                    </div>
                  </div>

                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
