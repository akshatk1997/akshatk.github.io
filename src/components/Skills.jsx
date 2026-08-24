import React from 'react';
import { Layers, Code, Cpu, Database, PenTool, Sparkles, Terminal, Globe } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Skills() {
  const { about } = portfolioConfig;

  const getSkillIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes('react') || n.includes('tailwind') || n.includes('vite')) {
      return <Layers className="w-7 h-7 text-sky-500" />;
    }
    if (n.includes('node') || n.includes('api') || n.includes('fastapi') || n.includes('python')) {
      return <Terminal className="w-7 h-7 text-teal-500" />;
    }
    if (n.includes('figma') || n.includes('prototype') || n.includes('wireframe')) {
      return <PenTool className="w-7 h-7 text-amber-500" />;
    }
    if (n.includes('ux') || n.includes('usability') || n.includes('heuristic') || n.includes('research')) {
      return <Globe className="w-7 h-7 text-emerald-500" />;
    }
    if (n.includes('prompt') || n.includes('transformer') || n.includes('pytorch') || n.includes('shap')) {
      return <Cpu className="w-7 h-7 text-indigo-500" />;
    }
    if (n.includes('sql') || n.includes('database') || n.includes('sas') || n.includes('viya')) {
      return <Database className="w-7 h-7 text-[#ff4d8d]" />;
    }
    return <Sparkles className="w-7 h-7 text-rose-450" />;
  };

  return (
    <section 
      id="techstack" 
      className="w-full min-h-screen bg-gradient-to-b from-white to-white dark:from-[#1a1625] dark:to-[#1a1625] py-20 text-gray-900 dark:text-white transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-2 animate-fade-in">
          Explore
        </span>
        <header className="mb-12">
          <h1 className="text-center text-4xl md:text-5xl font-black bg-gradient-to-r from-[#ff4d8d] to-[#40c9ff] text-transparent bg-clip-text">
            My Skills
          </h1>
        </header>

        {/* 3-Box Layout Grid matching the reference layout dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Box 1: Product Engineering */}
          <div className="group bg-white dark:bg-zinc-800/40 backdrop-blur-md rounded-[2rem] p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 col-span-1 flex flex-col">
            <h2 className="text-center mb-8 text-2xl font-black bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text select-none">
              Product Engineering
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center items-center flex-grow">
              {about.techStack[0].items.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                  <div className="transition-transform duration-300 group-hover:scale-110 p-3 bg-gray-100/50 dark:bg-zinc-900/50 rounded-2xl border dark:border-zinc-800">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-600 dark:text-gray-400 group-hover:text-[#ff4d8d] transition-colors text-center max-w-[90px] leading-tight">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: UX & Product Design */}
          <div className="group bg-white dark:bg-zinc-800/40 backdrop-blur-md rounded-[2rem] p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 col-span-1 flex flex-col">
            <h2 className="text-center mb-8 text-2xl font-black bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text select-none">
              UX & Product Design
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center items-center flex-grow">
              {about.techStack[2].items.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                  <div className="transition-transform duration-300 group-hover:scale-110 p-3 bg-gray-100/50 dark:bg-zinc-900/50 rounded-2xl border dark:border-zinc-800">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-600 dark:text-gray-400 group-hover:text-[#ff4d8d] transition-colors text-center max-w-[90px] leading-tight">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: AI & Data Science (md:col-span-2) */}
          <div className="group bg-white dark:bg-zinc-800/40 backdrop-blur-md rounded-[2rem] p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 md:col-span-2 flex flex-col">
            <h2 className="text-center mb-8 text-2xl font-black bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text select-none">
              AI & Data Science
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center items-center flex-grow">
              {about.techStack[1].items.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                  <div className="transition-transform duration-300 group-hover:scale-110 p-3 bg-gray-100/50 dark:bg-zinc-900/50 rounded-2xl border dark:border-zinc-800">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-600 dark:text-gray-400 group-hover:text-[#ff4d8d] transition-colors text-center max-w-[100px] leading-tight">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
