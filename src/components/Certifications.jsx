import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Certifications() {
  const { certifications } = portfolioConfig;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section 
      id="certifications" 
      className="py-20 px-4 md:px-6 max-w-5xl mx-auto space-y-12 border-t border-slate-100 dark:border-slate-900/50"
    >
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-[10px] font-bold tracking-wider uppercase text-rose-550 dark:text-rose-400">Credentials & Training</span>
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-800 dark:text-white">
          Professional <span className="text-rose-500">Certifications</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm md:text-base">
          Validations of technical expertise, data analytics specializations, and design research methodologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div 
            key={idx} 
            className="glass p-6 rounded-3xl border border-slate-100 dark:border-slate-900/50 shadow-sm flex flex-col justify-between hover:border-rose-500/20 hover:scale-[1.01] transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100/50 dark:bg-slate-900/60 flex items-center justify-center border dark:border-slate-800/80">
                  <Award className="text-rose-500" size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-rose-600 dark:text-rose-450 uppercase tracking-wide">
                    {cert.issuer}
                  </span>
                  <h3 className="font-bold text-sm md:text-base text-slate-800 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                {cert.description}
              </p>
            </div>

            {cert.credentialUrl && cert.credentialUrl !== '#' && (
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-900/20 flex justify-end">
                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-rose-500 dark:text-rose-450 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1 transition-colors select-none"
                >
                  View Credential <ExternalLink size={12} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
