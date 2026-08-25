import React, { useState, useEffect } from 'react';
import { Sparkles, Code, Layout } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

// Sub-component for matrix scrambled dynamic counter animation
function AnimatedStat({ targetValue, label }) {
  const [displayValue, setDisplayValue] = useState('---');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const numericPart = parseInt(targetValue.match(/\d+/)?.[0] || '0', 10);
    const suffix = targetValue.replace(/\d+/g, '');
    
    let frame = 0;
    const duration = 30; // 30 frames total
    const chars = "0123456789%X#$@&";

    const interval = setInterval(() => {
      frame++;
      
      if (frame < 18) {
        let scrambled = "";
        for (let i = 0; i < String(numericPart).length; i++) {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
        setDisplayValue(scrambled + suffix);
      } else {
        const progress = (frame - 18) / (duration - 18);
        const currentCount = Math.floor(progress * numericPart);
        setDisplayValue(currentCount + suffix);
      }

      if (frame >= duration) {
        clearInterval(interval);
        setDisplayValue(targetValue);
        setIsDone(true);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-left select-none">
      <h2 className={`text-3xl sm:text-5xl font-extrabold transition-all duration-300 font-mono ${isDone ? 'text-white' : 'text-[#818cf8] animate-pulse'}`}>
        {displayValue}
      </h2>
      <p className="text-gray-400 text-[9px] sm:text-xs font-semibold tracking-wider uppercase leading-tight">
        {label.split(' ').slice(0, 2).join(' ')}
        <br />
        {label.split(' ').slice(2).join(' ')}
      </p>
    </div>
  );
}

export default function Hero() {
  const { profile } = portfolioConfig;

  // Typing effect state hooks
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I am Akshat Kumar";
  const typingSpeed = 150;

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [displayText]);

  const getServiceIcon = (title) => {
    switch (title) {
      case "AI & Data Products":
        return <Sparkles className="w-8 h-8 text-[#818cf8]" />;
      case "Product Engineering":
        return <Code className="w-8 h-8 text-[#818cf8]" />;
      case "UX & Product Design":
        return <Layout className="w-8 h-8 text-[#818cf8]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#818cf8]" />;
    }
  };

  return (
    <section 
      id="hero" 
      className="w-full relative z-0 animate-slide-up-fade pt-28 sm:pt-32 pb-10 bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient blurred backdrop glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#818cf8]/5 dark:bg-[#818cf8]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#fb7185]/5 dark:bg-[#fb7185]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

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
            <h1 className="text-white text-5xl sm:text-7xl md:text-[96px] font-black leading-[0.95] tracking-tighter select-none max-w-4xl min-h-[160px] sm:min-h-[220px] md:min-h-[280px]">
              {displayText}
              {displayText.length < fullText.length && (
                <span className="border-r-4 border-white animate-pulse ml-1">&nbsp;</span>
              )}
            </h1>
          </div>

          {/* Black Stats Container (Bottom) */}
          <div className="relative z-10 px-4 sm:px-6 pb-6">
            <div className="bg-black rounded-[2rem] p-6 sm:p-10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border border-white/5">
              {profile.stats.map((stat, sIdx) => (
                <AnimatedStat 
                  key={sIdx}
                  targetValue={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Services Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 sm:px-10">
          {profile.services.map((service, sIdx) => (
            <div key={sIdx} className="flex items-start gap-5 text-left">
              <div className="p-3 bg-[#818cf8]/10 dark:bg-[#818cf8]/5 rounded-xl shrink-0 border dark:border-[#818cf8]/10">
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
