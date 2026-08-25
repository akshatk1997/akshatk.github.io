import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Certifications() {
  const { certifications } = portfolioConfig;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section 
      id="certifications" 
      className="py-32 bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300 relative w-full border-t border-gray-150 dark:border-zinc-900/60 overflow-hidden"
    >
      {/* Blurred background ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-[#818cf8]/5 dark:bg-[#818cf8]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-[#fb7185]/5 dark:bg-[#fb7185]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-2 animate-fade-in select-none">
          Credentials
        </span>
        <header className="mb-16 reveal">
          <h1 className="text-center text-4xl md:text-5xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text">
            Certifications & Training
          </h1>
        </header>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 pt-4 max-w-6xl mx-auto reveal">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="bg-white/80 dark:bg-zinc-800/40 backdrop-blur-md rounded-[2.2rem] p-6 md:p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-2xl hover:border-[#c084fc]/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-5 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-zinc-900 border dark:border-zinc-800/80 flex items-center justify-center shrink-0 shadow-inner select-none">
                    <Award className="text-[#c084fc]" size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#fb7185] uppercase tracking-widest block mb-0.5 select-none">
                      {cert.issuer}
                    </span>
                    <h3 className="font-extrabold text-base md:text-lg text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-300 font-light leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <div className="pt-5 mt-5 border-t border-gray-100 dark:border-zinc-800/60 flex justify-end">
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#c084fc] hover:text-[#fb7185] flex items-center gap-1.5 transition-colors select-none"
                  >
                    View Credential <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
