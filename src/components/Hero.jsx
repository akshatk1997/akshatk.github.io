import React from 'react';
import { Sparkles, Code, Layout } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Hero() {
  const { profile } = portfolioConfig;

  const getServiceIcon = (title) => {
    switch (title) {
      case "AI & Data Products":
        return <Sparkles className="w-8 h-8 text-[#4ba1a7]" />;
      case "Product Engineering":
        return <Code className="w-8 h-8 text-[#4ba1a7]" />;
      case "UX & Product Design":
        return <Layout className="w-8 h-8 text-[#4ba1a7]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#4ba1a7]" />;
    }
  };

  return (
    <section 
      id="hero" 
      className="w-full relative z-0 animate-slide-up-fade pt-28 sm:pt-32 pb-10 bg-white dark:bg-[#1a1625] text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded Billboard Banner Card */}
        <div 
          className="relative rounded-[2rem] overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col justify-between transition-all duration-500 shadow-xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Cover Overlay */}
          <div className="absolute inset-0 bg-black/45 dark:bg-black/60 z-0"></div>

          {/* Banner Copy (Top) */}
          <div className="relative z-10 pt-20 px-8 sm:px-16 pb-10">
            <p className="text-white/95 text-base sm:text-lg font-mono font-bold tracking-wider mb-3 uppercase">
              {profile.title}
            </p>
            <h1 className="text-white text-5xl sm:text-7xl md:text-[96px] font-black leading-[0.95] tracking-tighter select-none max-w-4xl">
              Hi, I am <br className="hidden sm:inline" />{profile.name}
            </h1>
          </div>

          {/* Black Stats Container (Bottom) */}
          <div className="relative z-10 px-4 sm:px-6 pb-6">
            <div className="bg-black rounded-[2rem] p-6 sm:p-10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border border-white/5">
              {profile.stats.map((stat, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-left select-none"
                >
                  <h2 className="text-white text-3xl sm:text-5xl font-extrabold">
                    {stat.value}
                  </h2>
                  <p className="text-gray-400 text-[9px] sm:text-xs font-semibold tracking-wider uppercase leading-tight">
                    {stat.label.split(' ').slice(0, 2).join(' ')}
                    <br />
                    {stat.label.split(' ').slice(2).join(' ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 sm:px-10">
          {profile.services.map((service, sIdx) => (
            <div key={sIdx} className="flex items-start gap-5 text-left">
              <div className="p-3 bg-teal-500/10 dark:bg-teal-500/5 rounded-xl shrink-0 border dark:border-teal-500/10">
                {getServiceIcon(service.title)}
              </div>
              <div className="space-y-1.5">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                  {service.title === "AI & Data Products" ? "AI & Data Products" : service.title}
                </h5>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
