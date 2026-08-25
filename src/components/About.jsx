import React from 'react';
import { GraduationCap, Sparkles, BrainCircuit, Code, LayoutDashboard, Brain, MapPin } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function About() {
  const { about } = portfolioConfig;

  return (
    <section 
      id="about" 
      className="py-32 bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300 relative w-full overflow-hidden"
    >
      {/* Blurred background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#c084fc]/5 dark:bg-[#c084fc]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-4 animate-fade-in">
          Discover
        </span>
        <header className="mb-16">
          <h1 className="text-center text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text">
            About Me
          </h1>
        </header>

        {/* The Three Colorful Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          
          {/* Card 1: Background (Amber Gold Glass) */}
          <div className="flex flex-col justify-between min-h-[380px] bg-amber-500/5 dark:bg-amber-950/10 border border-amber-500/15 dark:border-amber-500/20 p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-amber-500/35 hover:-translate-y-3 transition-all duration-500 text-slate-800 dark:text-amber-250">
            <div className="flex items-center gap-3 mb-6 select-none">
              <GraduationCap className="w-8 h-8 shrink-0 text-amber-500 dark:text-amber-400" />
              <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Background</h3>
            </div>
            
            <div className="py-2 space-y-6 flex-grow flex flex-col justify-center">
              <div className="space-y-4">
                <div>
                  <p className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-1">2025 - 2027</p>
                  <h5 className="text-lg font-extrabold leading-tight text-slate-900 dark:text-white">MBA in AI & Data Science</h5>
                  <p className="text-slate-500 dark:text-slate-400 font-semibold text-xs flex items-center gap-1.5 mt-0.5 select-none">
                    <MapPin size={13} /> Chandigarh University, Mohali
                  </p>
                </div>
                
                <div className="pt-3 border-t border-amber-500/10">
                  <p className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-1">2019 - 2023</p>
                  <h5 className="text-lg font-extrabold leading-tight text-slate-900 dark:text-white">B.Tech in Computer Science</h5>
                  <p className="text-slate-500 dark:text-slate-400 font-semibold text-xs flex items-center gap-1.5 mt-0.5 select-none">
                    <MapPin size={13} /> AKTU University
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-amber-500/10 select-none">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-light leading-relaxed">
                Combining advanced systems software engineering with business intelligence and product management models.
              </p>
            </div>
          </div>

          {/* Card 2: My Journey (Emerald Mint Glass with Desktop Translate Offset) */}
          <div className="flex flex-col justify-between min-h-[380px] bg-emerald-500/5 dark:bg-emerald-950/10 border border-emerald-500/15 dark:border-emerald-500/20 p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-emerald-500/35 hover:-translate-y-3 lg:translate-y-8 transition-all duration-500 text-slate-800 dark:text-emerald-250">
            <div className="flex items-center gap-3 mb-6 select-none">
              <Sparkles className="w-8 h-8 shrink-0 text-emerald-500 dark:text-emerald-400" />
              <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">My Journey</h3>
            </div>
            
            <div className="py-2 space-y-4 flex-grow flex flex-col justify-center">
              <h5 className="text-xl font-extrabold leading-tight italic text-emerald-600 dark:text-emerald-400">
                "{about.quote || 'Building seamless digital experiences through innovative code solutions.'}"
              </h5>
            </div>
            
            <div className="pt-4 border-t border-emerald-500/10 select-none">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-light leading-relaxed">
                {about.bio}
              </p>
            </div>
          </div>

          {/* Card 3: Core Expertise (Cobalt Indigo Glass) */}
          <div className="flex flex-col justify-between min-h-[380px] bg-indigo-500/5 dark:bg-indigo-950/10 border border-indigo-500/15 dark:border-indigo-500/20 p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-indigo-500/35 hover:-translate-y-3 transition-all duration-500 text-slate-800 dark:text-indigo-250">
            <div className="flex items-center gap-3 mb-6 select-none">
              <BrainCircuit className="w-8 h-8 shrink-0 text-indigo-500 dark:text-indigo-400" />
              <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Core Expertise</h3>
            </div>
            
            <div className="py-2 space-y-5 flex-grow flex flex-col justify-center">
              <div className="group flex items-start gap-4">
                <div className="bg-indigo-500/10 p-2.5 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                  <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h5 className="text-base font-extrabold text-slate-900 dark:text-white">AI Engineering</h5>
                  <p className="text-slate-500 dark:text-slate-400 font-semibold text-xs mt-0.5">Systems development & machine learning integrations</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4">
                <div className="bg-indigo-500/10 p-2.5 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                  <LayoutDashboard className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h5 className="text-base font-extrabold text-slate-900 dark:text-white">Product Strategy</h5>
                  <p className="text-slate-500 dark:text-slate-400 font-semibold text-xs mt-0.5">Figma wiring, UX evaluation & telemetry experiments</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4">
                <div className="bg-indigo-500/10 p-2.5 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                  <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h5 className="text-base font-extrabold text-slate-900 dark:text-white">Business Intelligence</h5>
                  <p className="text-slate-500 dark:text-slate-400 font-semibold text-xs mt-0.5">Relational query patterns & data analytics diagnostics</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-indigo-500/10 select-none">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-light leading-relaxed">
                Bridging software systems engineering, predictive business modeling, and user centered designs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
