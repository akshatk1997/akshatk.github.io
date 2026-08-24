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
      className="py-20 px-4 md:px-6 max-w-4xl mx-auto space-y-12 border-t border-slate-100 dark:border-slate-900/50"
    >
      
      <div className="text-center space-y-3 select-none">
        <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-slate-800 dark:text-white">
          Write Me a <span className="text-rose-500">Letter</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-md mx-auto text-sm md:text-base">
          Have an idea, a job proposal, or just want to share a virtual coffee? Drop me a note below.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        
        {/* Contact Info / Copy Panel */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass p-6 rounded-3xl border space-y-4">
            <h3 className="text-lg font-serif-display font-bold text-slate-800 dark:text-white select-none">
              Direct Contact
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed select-none">
              If you prefer standard email clients or want to copy my address directly, use the option below.
            </p>
            
            <div className="flex items-center justify-between bg-slate-100/50 dark:bg-slate-900/60 p-3 rounded-2xl border dark:border-slate-800/80">
              <span className="text-xs font-medium text-slate-650 dark:text-slate-300 truncate mr-2 select-all font-mono">
                {profile.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-rose-500/5 hover:text-rose-500 text-slate-400 border dark:border-slate-700/60 dark:border-slate-800 transition-all duration-300 flex items-center justify-center shadow-sm select-none"
                title="Copy Email Address"
              >
                {copied ? <Check size={13} className="text-rose-500" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <div className="glass p-6 rounded-3xl border space-y-3 text-center md:text-left select-none">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">Response Window</span>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Based in India (GMT+5:30). Typically active between 9:00 AM and 8:00 PM. I read every letter and aim to respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Letter-style Form */}
        <div className="md:col-span-3">
          <form 
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-[#fefefe] dark:bg-slate-950 p-6 md:p-8 shadow-sm space-y-6"
          >
            {/* Air Mail Stamp Graphic */}
            <div className="hidden sm:flex absolute right-6 top-6 w-16 h-20 border-2 border-dashed border-rose-500/20 dark:border-rose-500/10 rounded flex-col items-center justify-center p-1 select-none pointer-events-none rotate-6">
              <span className="text-2xl">💌</span>
              <span className="text-[7px] font-bold uppercase tracking-widest text-rose-500/35 dark:text-rose-500/25 mt-1 font-mono">Air Mail</span>
            </div>

            <div className="font-serif-display text-lg text-slate-800 dark:text-slate-200 italic border-b border-slate-100 dark:border-slate-900 pb-2 select-none">
              Dear {profile.name.split(' ')[0]},
            </div>

            <div className="space-y-4 text-xs md:text-sm">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-slate-500 dark:text-slate-400 font-light select-none">My name is</span>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="bg-transparent border-b border-slate-200 dark:border-slate-800 focus:border-rose-500 dark:focus:border-rose-500 outline-none px-1 py-0.5 text-slate-800 dark:text-white font-medium min-w-[140px] transition-colors"
                  required
                />
                <span className="text-slate-500 dark:text-slate-400 font-light select-none">and you can reply to me at</span>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  value={visitorEmail}
                  onChange={(e) => setVisitorEmail(e.target.value)}
                  className="bg-transparent border-b border-slate-200 dark:border-slate-800 focus:border-rose-500 dark:focus:border-rose-500 outline-none px-1 py-0.5 text-slate-800 dark:text-white font-medium min-w-[190px] transition-colors"
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
                  rows="4"
                  className="w-full bg-transparent border border-slate-100 dark:border-slate-900 focus:border-rose-500/40 dark:focus:border-rose-500/40 rounded-xl p-3 outline-none text-slate-800 dark:text-white font-light resize-none transition-all leading-relaxed"
                  required
                />
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
        </div>

      </div>

    </section>
  );
}
