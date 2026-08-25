import React from 'react';
import { 
  Atom, Zap, Wind, Cpu, Binary, Link2, GitBranch, Cloud,
  MessageSquareCode, Network, Workflow, Eye, Database, BarChart3,
  Figma, Smartphone, Users, UserCheck, GitFork, CheckSquare, Sparkles 
} from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Skills() {
  const { about } = portfolioConfig;

  const getSkillIcon = (name) => {
    const n = name.toLowerCase();
    
    // Product Engineering Icons
    if (n.includes('react')) return <Atom className="w-7 h-7 text-[#818cf8]" />;
    if (n.includes('vite')) return <Zap className="w-7 h-7 text-[#818cf8]" />;
    if (n.includes('tailwind')) return <Wind className="w-7 h-7 text-[#818cf8]" />;
    if (n.includes('node')) return <Cpu className="w-7 h-7 text-[#818cf8]" />;
    if (n.includes('python') || n.includes('fastapi')) return <Binary className="w-7 h-7 text-[#818cf8]" />;
    if (n.includes('api')) return <Link2 className="w-7 h-7 text-[#818cf8]" />;
    if (n.includes('git')) return <GitBranch className="w-7 h-7 text-[#818cf8]" />;
    if (n.includes('cloud') || n.includes('deploy')) return <Cloud className="w-7 h-7 text-[#818cf8]" />;
    
    // AI & Data Science Icons
    if (n.includes('prompt')) return <MessageSquareCode className="w-7 h-7 text-[#c084fc]" />;
    if (n.includes('transformer')) return <Network className="w-7 h-7 text-[#c084fc]" />;
    if (n.includes('pytorch') || n.includes('learn')) return <Workflow className="w-7 h-7 text-[#c084fc]" />;
    if (n.includes('shap') || n.includes('explain')) return <Eye className="w-7 h-7 text-[#c084fc]" />;
    if (n.includes('sql') || n.includes('database')) return <Database className="w-7 h-7 text-[#c084fc]" />;
    if (n.includes('sas') || n.includes('analytics')) return <BarChart3 className="w-7 h-7 text-[#c084fc]" />;
    
    // UX & Product Design Icons
    if (n.includes('figma')) return <Figma className="w-7 h-7 text-[#fb7185]" />;
    if (n.includes('prototyp')) return <Smartphone className="w-7 h-7 text-[#fb7185]" />;
    if (n.includes('research') || n.includes('google')) return <Users className="w-7 h-7 text-[#fb7185]" />;
    if (n.includes('testing') || n.includes('usability')) return <UserCheck className="w-7 h-7 text-[#fb7185]" />;
    if (n.includes('architecture') || n.includes('information')) return <GitFork className="w-7 h-7 text-[#fb7185]" />;
    if (n.includes('heuristic') || n.includes('evaluation')) return <CheckSquare className="w-7 h-7 text-[#fb7185]" />;
    
    return <Sparkles className="w-7 h-7 text-[#c084fc]" />;
  };

  return (
    <section 
      id="techstack" 
      className="w-full bg-white dark:bg-slate-950 py-20 text-gray-900 dark:text-white transition-colors duration-300 relative border-t border-gray-150 dark:border-zinc-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-2 animate-fade-in">
          Explore
        </span>
        <header className="mb-12 reveal">
          <h1 className="text-center text-4xl md:text-5xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text">
            My Skills
          </h1>
        </header>

        {/* 3-Box Layout Grid matching the reference layout dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 reveal">
          
          {/* Box 1: Product Engineering */}
          <div className="group bg-white dark:bg-zinc-900/40 backdrop-blur-md rounded-[2rem] p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 col-span-1 flex flex-col">
            <h2 className="text-center mb-8 text-2xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text select-none">
              Product Engineering
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center items-center flex-grow">
              {about.techStack[0].items.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                  <div className="transition-all duration-300 group-hover:scale-110 p-3.5 bg-gray-50/50 dark:bg-zinc-950/60 rounded-2xl border border-zinc-200/50 dark:border-zinc-850 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.25)] group-hover:border-[#818cf8]/45 group-hover:bg-[#818cf8]/5">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-600 dark:text-gray-300 group-hover:text-[#818cf8] transition-colors text-center max-w-[90px] leading-tight">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: UX & Product Design */}
          <div className="group bg-white dark:bg-zinc-900/40 backdrop-blur-md rounded-[2rem] p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 col-span-1 flex flex-col">
            <h2 className="text-center mb-8 text-2xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text select-none">
              UX & Product Design
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center items-center flex-grow">
              {about.techStack[2].items.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                  <div className="transition-all duration-300 group-hover:scale-110 p-3.5 bg-gray-50/50 dark:bg-zinc-950/60 rounded-2xl border border-zinc-200/50 dark:border-zinc-850 group-hover:shadow-[0_0_15px_rgba(251,113,133,0.25)] group-hover:border-[#fb7185]/45 group-hover:bg-[#fb7185]/5">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-600 dark:text-gray-300 group-hover:text-[#fb7185] transition-colors text-center max-w-[90px] leading-tight">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: AI & Data Science (md:col-span-2) */}
          <div className="group bg-white dark:bg-zinc-900/40 backdrop-blur-md rounded-[2rem] p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 md:col-span-2 flex flex-col">
            <h2 className="text-center mb-8 text-2xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text select-none">
              AI & Data Science
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center items-center flex-grow">
              {about.techStack[1].items.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                  <div className="transition-all duration-300 group-hover:scale-110 p-3.5 bg-gray-50/50 dark:bg-zinc-950/60 rounded-2xl border border-zinc-200/50 dark:border-zinc-850 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.25)] group-hover:border-[#c084fc]/45 group-hover:bg-[#c084fc]/5">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-600 dark:text-gray-300 group-hover:text-[#c084fc] transition-colors text-center max-w-[100px] leading-tight">
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
