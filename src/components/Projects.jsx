import React, { useState } from 'react';
import { portfolioConfig } from '../portfolio.config';
import { ExternalLink, Github, Info, HeartCrack, Lightbulb } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioConfig;
  
  // Track hovered project index for spatial focus blur
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Track active sub-tab for each project card: 'overview', 'why', 'lessons'
  const [projectTabs, setProjectTabs] = useState(
    projects.reduce((acc, _, idx) => ({ ...acc, [idx]: 'overview' }), {})
  );

  const setTab = (projectIdx, tabName) => {
    setProjectTabs(prev => ({ ...prev, [projectIdx]: tabName }));
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 md:px-6 max-w-5xl mx-auto space-y-12 border-t border-slate-100 dark:border-slate-900/50"
    >
      
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-slate-800 dark:text-white">
          Craft & <span className="text-rose-500">Creation</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm md:text-base">
          A selection of projects that built me. Use the tabs inside each card to view technical highlights, the emotional backstory, or the failures faced during development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const activeTab = projectTabs[idx] || 'overview';
          
          return (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`glass rounded-3xl border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-lg dark:hover:shadow-rose-500/10 hover:border-rose-500/30 group hover:-translate-y-2 hover:scale-[1.02] h-[420px] ${
                hoveredIdx !== null && hoveredIdx !== idx 
                  ? 'blur-[1.5px] opacity-45 scale-[0.98]' 
                  : ''
              }`}
            >
              {/* Inner card content */}
              <div className="p-6 pb-4 flex-1 flex flex-col justify-between min-h-0">
                <div className="space-y-1 select-none">
                  <h3 className="text-lg md:text-xl font-serif-display font-bold text-slate-800 dark:text-white truncate">
                    {project.title}
                  </h3>
                  <p className="text-[11px] italic text-rose-600 dark:text-rose-400 font-light leading-snug line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Sub-tab selectors */}
                <div className="flex border-b border-slate-100 dark:border-slate-900 gap-2.5 my-3.5 select-none">
                  <button 
                    onClick={() => setTab(idx, 'overview')}
                    className={`pb-1.5 text-[10px] md:text-[11px] font-semibold transition-all duration-200 flex items-center gap-1 border-b-2 -mb-[2px] ${
                      activeTab === 'overview' 
                        ? 'border-rose-500 text-rose-500' 
                        : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350'
                    }`}
                  >
                    <Info size={11} /> Overview
                  </button>
                  <button 
                    onClick={() => setTab(idx, 'why')}
                    className={`pb-1.5 text-[10px] md:text-[11px] font-semibold transition-all duration-200 flex items-center gap-1 border-b-2 -mb-[2px] ${
                      activeTab === 'why' 
                        ? 'border-rose-500 text-rose-500' 
                        : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350'
                    }`}
                  >
                    <Lightbulb size={11} /> Backstory
                  </button>
                  <button 
                    onClick={() => setTab(idx, 'lessons')}
                    className={`pb-1.5 text-[10px] md:text-[11px] font-semibold transition-all duration-200 flex items-center gap-1 border-b-2 -mb-[2px] ${
                      activeTab === 'lessons' 
                        ? 'border-rose-500 text-rose-500' 
                        : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350'
                    }`}
                  >
                    <HeartCrack size={11} /> Lessons
                  </button>
                </div>

                {/* Tab content wrapper */}
                <div className="flex-1 overflow-y-auto text-xs md:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-3 pr-1">
                  {activeTab === 'overview' && (
                    <p className="animate-fade-in">{project.description}</p>
                  )}
                  {activeTab === 'why' && (
                    <div className="animate-fade-in space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">Why I built this:</span>
                      <p>{project.whyIBuiltIt}</p>
                    </div>
                  )}
                  {activeTab === 'lessons' && (
                    <div className="animate-fade-in space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">Fails & Solutions:</span>
                      <p>{project.learnings}</p>
                    </div>
                  )}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-500 dark:text-slate-400 select-none border border-transparent dark:border-slate-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800/80 px-6 py-4 flex items-center justify-between select-none">
                <a 
                  href={project.links.repo} 
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-450 hover:text-rose-500 dark:hover:text-rose-450 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={13} /> Repository
                </a>
                <a 
                  href={project.links.live} 
                  className="flex items-center gap-1.5 text-xs font-medium text-rose-500 dark:text-rose-450 hover:text-rose-600 dark:hover:text-rose-350 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo <ExternalLink size={13} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
