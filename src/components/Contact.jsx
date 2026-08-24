import React, { useState } from 'react';
import { Mail, Check, Copy, Send, Heart } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Contact() {
  const { profile } = portfolioConfig;
  const [copied, setCopied] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorEmail.trim() || !message.trim()) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setVisitorName('');
      setVisitorEmail('');
      setMessage('');
      setSubmitted(false);
      alert("Thank you! Your letter has been virtually sealed and sent. 💌");
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 md:px-6 max-w-5xl mx-auto space-y-12 border-t border-slate-100 dark:border-slate-900/50"
    >
      
      <div className="text-center space-y-3 select-none">
        <span className="text-[10px] font-bold tracking-wider uppercase text-rose-550 dark:text-rose-400">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-800 dark:text-white">
          Write Me a <span className="text-rose-500">Letter</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-md mx-auto text-sm md:text-base">
          Have an idea, a job proposal, or just want to share a virtual coffee? Drop me a note below.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Column: Form & Direct Contact */}
        <div className="space-y-6 flex flex-col justify-between">
          
          <form 
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-[#fefefe] dark:bg-slate-950 p-6 md:p-8 shadow-sm space-y-6 flex-1 flex flex-col justify-between"
          >
            {/* Air Mail Stamp Graphic */}
            <div className="absolute right-6 top-6 w-14 h-18 border border-dashed border-rose-500/20 dark:border-rose-500/10 rounded flex flex-col items-center justify-center p-1 select-none pointer-events-none rotate-6">
              <span className="text-xl">💌</span>
              <span className="text-[6px] font-bold uppercase tracking-widest text-rose-500/35 dark:text-rose-500/25 mt-0.5 font-mono">Air Mail</span>
            </div>

            <div className="space-y-6">
              <div className="font-serif-display text-base md:text-lg text-slate-800 dark:text-slate-200 italic border-b border-slate-100 dark:border-slate-900 pb-2 select-none">
                Dear {profile.name.split(' ')[0]},
              </div>

              <div className="space-y-5 text-xs md:text-sm">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-light select-none">My name is</span>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="bg-transparent border-b border-slate-200 dark:border-slate-800 focus:border-rose-500 dark:focus:border-rose-500 outline-none px-1 py-0.5 text-slate-800 dark:text-white font-medium min-w-[130px] transition-colors"
                    required
                  />
                  <span className="text-slate-500 dark:text-slate-400 font-light select-none">and you can reply at</span>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    value={visitorEmail}
                    onChange={(e) => setVisitorEmail(e.target.value)}
                    className="bg-transparent border-b border-slate-200 dark:border-slate-800 focus:border-rose-500 dark:focus:border-rose-500 outline-none px-1 py-0.5 text-slate-800 dark:text-white font-medium min-w-[180px] transition-colors"
                    required
                  />
                  <span className="text-slate-500 dark:text-slate-400 font-light select-none">.</span>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-500 dark:text-slate-400 font-light block select-none">Here is what I wanted to write:</label>
                  <textarea 
                    placeholder="I'd love to collaborate on a design / discuss a project / say hello..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    className="w-full bg-transparent border border-slate-100 dark:border-slate-900 focus:border-rose-500/40 dark:focus:border-rose-500/40 rounded-xl p-3 outline-none text-slate-800 dark:text-white font-light resize-none transition-all leading-relaxed"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-900 select-none">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                <span>With sincerity,</span>
                <Heart size={10} className="text-rose-500 animate-pulse" />
              </div>
              
              <button
                type="submit"
                disabled={submitted}
                className="px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-700 text-white font-medium text-xs flex items-center gap-2 transition-all duration-300 shadow-md shadow-rose-500/10 hover:shadow-rose-500/20 hover:-translate-y-0.5 disabled:opacity-50"
              >
                {submitted ? "Sending..." : "Send Letter"} <Send size={12} />
              </button>
            </div>

          </form>

          {/* Contact Details Copier & Window */}
          <div className="grid sm:grid-cols-2 gap-4 select-none">
            <div className="glass p-5 rounded-2xl border space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                  Direct Copy
                </h3>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-light mt-1">
                  Copy email directly to your clipboard.
                </p>
              </div>
              <div className="flex items-center justify-between bg-slate-100/50 dark:bg-slate-900/60 p-2.5 rounded-xl border dark:border-slate-800/80">
                <span className="text-[10px] font-medium text-slate-650 dark:text-slate-300 truncate mr-2 select-all font-mono">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-rose-500/5 hover:text-rose-500 text-slate-400 border dark:border-slate-700/60 dark:border-slate-800 transition-all duration-300 flex items-center justify-center shadow-sm select-none"
                  title="Copy Email"
                >
                  {copied ? <Check size={11} className="text-rose-500" /> : <Copy size={11} />}
                </button>
              </div>
            </div>

            <div className="glass p-5 rounded-2xl border space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-550 dark:text-rose-400">Response Window</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Based in India (GMT+5:30). Typically active 9:00 AM - 8:00 PM. I read every note and reply within 24 hours.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Stationery Preview */}
        <div className="hidden lg:flex relative bg-[#fcf9f1] dark:bg-[#171612] border border-[#ebdca2]/40 dark:border-[#2e2b20] rounded-3xl p-8 shadow-sm flex-col justify-between overflow-hidden">
          {/* Airmail border striping (subtle) */}
          <div className="absolute inset-0 border-[6px] border-transparent bg-clip-content bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 pointer-events-none" />
          
          {/* Stamp and Postmark */}
          <div className="absolute right-8 top-8 flex flex-col items-center">
            <div className="w-14 h-16 bg-[#eedda2]/20 dark:bg-[#eedda2]/5 border border-dashed border-[#c2b98f] dark:border-[#383526] rounded flex items-center justify-center text-xl select-none rotate-6 shadow-sm">
              ✨
            </div>
            {/* Circular Postmark */}
            <div className="absolute w-20 h-20 border border-[#993b27]/20 dark:border-[#d1705b]/15 rounded-full -top-2 -right-2 flex items-center justify-center rotate-45 select-none pointer-events-none">
              <span className="text-[6px] text-[#993b27]/30 dark:text-[#d1705b]/25 font-bold uppercase tracking-widest font-mono">GURUGRAM • IN</span>
            </div>
          </div>

          {/* Letter Body Content */}
          <div className="space-y-4 pr-16">
            <div className="font-serif-display italic text-[#3a3523] dark:text-[#ebdca2] text-base border-b border-[#eedda2]/45 dark:border-[#2b281f] pb-2">
              Dear {profile.name.split(' ')[0]},
            </div>

            <div className="text-sm font-serif-display italic text-[#4d4838] dark:text-[#beb696] leading-relaxed whitespace-pre-wrap min-h-[160px]">
              {message || "I'd love to collaborate on a design / discuss a project / say hello..."}
            </div>
          </div>

          {/* Letter Footer */}
          <div className="flex justify-between items-end border-t border-[#eedda2]/45 dark:border-[#2b281f] pt-4 mt-6">
            <div className="text-xs text-[#877c59] dark:text-[#918664] space-y-0.5">
              <div className="font-serif-display italic font-semibold">{visitorName || "Your Name"}</div>
              <div className="text-[10px] font-mono opacity-80">{visitorEmail || "your.email@example.com"}</div>
            </div>
            
            {/* Wax Seal */}
            <div className="w-12 h-12 rounded-full bg-rose-600/90 dark:bg-rose-700/80 flex items-center justify-center shadow-md relative rotate-12 select-none border border-rose-500/10 hover:scale-105 transition-transform duration-300">
              <span className="text-white font-serif-display italic font-bold text-xs select-none">A.K.</span>
              <div className="absolute inset-0.5 rounded-full border border-dashed border-rose-500/20" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
