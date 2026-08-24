import React from 'react';
import { GraduationCap, Sparkles, BrainCircuit, Code, LayoutDashboard, Brain, MapPin } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function About() {
  const { about } = portfolioConfig;

  return (
    <section 
      id="about" 
      className="py-32 bg-white dark:bg-[#1a1625] text-gray-900 dark:text-white transition-colors duration-300 relative w-full"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-4 animate-fade-in">
          Discover
        </span>
        <header className="mb-16">
          <h1 className="text-center text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#ff4d8d] to-[#40c9ff] text-transparent bg-clip-text">
            About Me
          </h1>
        </header>

        {/* The Three Colorful Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          
          {/* Card 1: Background (Yellow) */}
          <div className="flex flex-col justify-between min-h-[380px] bg-[#fce06d] dark:bg-[#d4b94a] p-8 sm:p-10 rounded-[2.5rem] text-zinc-900 shadow-lg hover:-translate-y-3 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 shrink-0" />
              <h3 className="text-3xl font-black tracking-tight">Background</h3>
            </div>
            
            <div className="py-2 space-y-6 flex-grow flex flex-col justify-center">
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-800 font-bold uppercase tracking-widest text-[10px] mb-1">2024 - 2026</p>
                  <h5 className="text-lg font-extrabold leading-tight">MBA in AI & Data Science</h5>
                  <p className="text-zinc-700 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
                    <MapPin size={13} /> Chandigarh University, Mohali
                  </p>
                </div>
                
                <div className="pt-3 border-t border-zinc-900/10">
                  <p className="text-zinc-800 font-bold uppercase tracking-widest text-[10px] mb-1">2019 - 2023</p>
                  <h5 className="text-lg font-extrabold leading-tight">B.Tech in Computer Science</h5>
                  <p className="text-zinc-700 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
                    <MapPin size={13} /> AKTU University
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-zinc-900/15">
              <p className="text-zinc-850 text-xs font-semibold leading-relaxed">
                Combining advanced systems software engineering with business intelligence and product management models.
              </p>
            </div>
          </div>

          {/* Card 2: My Journey (Green with Desktop Translate Offset) */}
          <div className="flex flex-col justify-between min-h-[380px] bg-[#a3e4b7] dark:bg-[#72b888] p-8 sm:p-10 rounded-[2.5rem] text-zinc-900 shadow-lg hover:-translate-y-3 lg:translate-y-8 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 shrink-0" />
              <h3 className="text-3xl font-black tracking-tight">My Journey</h3>
            </div>
            
            <div className="py-2 space-y-4 flex-grow flex flex-col justify-center">
              <h5 className="text-xl font-bold leading-tight italic text-zinc-800">
                "{about.quote || 'Building seamless digital experiences through innovative code solutions.'}"
              </h5>
            </div>
            
            <div className="pt-4 border-t border-zinc-900/15">
              <p className="text-zinc-850 text-xs font-semibold leading-relaxed">
                {about.bio}
              </p>
            </div>
          </div>

          {/* Card 3: Core Expertise (Blue) */}
          <div className="flex flex-col justify-between min-h-[380px] bg-[#91d5db] dark:bg-[#60a9b0] p-8 sm:p-10 rounded-[2.5rem] text-zinc-900 shadow-lg hover:-translate-y-3 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit className="w-8 h-8 shrink-0" />
              <h3 className="text-3xl font-black tracking-tight">Core Expertise</h3>
            </div>
            
            <div className="py-2 space-y-5 flex-grow flex flex-col justify-center">
              <div className="group flex items-start gap-4">
                <div className="bg-white/40 p-2.5 rounded-xl group-hover:bg-white/60 transition-colors">
                  <Code className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h5 className="text-base font-bold">AI Engineering</h5>
                  <p className="text-zinc-700 font-semibold text-xs mt-0.5">Systems development & machine learning integrations</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4">
                <div className="bg-white/40 p-2.5 rounded-xl group-hover:bg-white/60 transition-colors">
                  <LayoutDashboard className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h5 className="text-base font-bold">Product Strategy</h5>
                  <p className="text-zinc-700 font-semibold text-xs mt-0.5">Figma wiring, UX evaluation & telemetry experiments</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4">
                <div className="bg-white/40 p-2.5 rounded-xl group-hover:bg-white/60 transition-colors">
                  <Brain className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h5 className="text-base font-bold">Business Intelligence</h5>
                  <p className="text-zinc-700 font-semibold text-xs mt-0.5">Relational query patterns & data analytics diagnostics</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-zinc-900/15">
              <p className="text-zinc-850 text-xs font-semibold leading-relaxed">
                Bridging software systems engineering, predictive business modeling, and user centered designs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
