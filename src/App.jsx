import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Playground from './components/Playground';
import Contact from './components/Contact';
import { portfolioConfig } from './portfolio.config';
import { Heart } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  
  // Theme logic
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // GPU-accelerated mouse glow coordinates tracker
  useEffect(() => {
    const glow = document.getElementById('cursor-glow-spotlight');
    if (!glow) return;

    let frameId;
    const handleMouseMove = (e) => {
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        // Position centered on mouse coordinates (minus half size 400px)
        glow.style.transform = `translate3d(${e.clientX - 400}px, ${e.clientY - 400}px, 0)`;
        frameId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  // Scroll reveal IntersectionObserver to animate content into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // trigger slightly before entering viewport
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initial timeout to let page load and components mount cleanly
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Section scroll-spy using IntersectionObserver (buttery smooth compositor thread calculations)
  useEffect(() => {
    const sections = ['hero', 'about', 'techstack', 'experience', 'projects', 'certifications', 'playground', 'contact'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null, // viewport
      rootMargin: '-35% 0px -55% 0px', // trigger when occupies center band of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback bottom detection
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      id="root-container" 
      className="min-h-screen font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-rose-100 dark:selection:bg-rose-950/60 transition-colors duration-300 relative"
    >
      {/* GPU hardware-accelerated pointer spotlight backdrop (Lag-free) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          id="cursor-glow-spotlight"
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-rose-500/5 to-amber-500/5 dark:from-rose-500/10 dark:to-amber-500/10 blur-3xl pointer-events-none"
          style={{ transform: 'translate3d(-1000px, -1000px, 0)' }}
        />
      </div>

      {/* Floating navigation dock */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main sections */}
      <main className="w-full space-y-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Playground />
        <Contact />
      </main>
    </div>
  );
}
