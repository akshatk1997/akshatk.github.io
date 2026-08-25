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
      className="w-full relative z-0 border-none m-0 p-0"
    >
      <div className="bg-gradient-to-b from-slate-50 to-indigo-50/60 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center py-24 md:py-32 px-6 transition-colors duration-300">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
          
          {/* Left Column: Heading and Contact Copier */}
          <div className="space-y-6 text-left">
            <h4 className="text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-zinc-300 select-none">
              Quick Contact
            </h4>
            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white leading-[1.1] tracking-tight select-none">
              Leave a<br />Message
            </h1>
            <p className="text-zinc-550 dark:text-zinc-400 max-w-sm text-lg pt-4 leading-relaxed font-light">
              Have a project in mind, a question, or just want to say hi? I'd love to hear from you. Drop a message and I'll get back to you!
            </p>

            <div className="pt-8 select-none">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                Direct Copy
              </span>
              <div className="flex items-center justify-between bg-white/70 dark:bg-zinc-800/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-700/50 p-3 rounded-2xl max-w-sm shadow-sm">
                <span className="text-xs font-mono font-bold text-gray-800 dark:text-gray-200 truncate mr-3 select-all">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-zinc-900 hover:bg-[#c084fc]/10 hover:text-[#c084fc] text-gray-400 border dark:border-zinc-800 transition-all duration-300 shadow-sm flex items-center justify-center shrink-0"
                  title="Copy Email"
                >
                  {copied ? <Check size={13} className="text-[#c084fc]" /> : <Copy size={13} />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: The Stationery Letter Form */}
          <div className="bg-transparent">
            <form 
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2.5rem] border border-[#ebdca2]/40 dark:border-[#2e2b20] bg-[#fcf9f1] dark:bg-[#171612] p-8 md:p-10 shadow-lg space-y-6 text-left flex flex-col justify-between min-h-[420px]"
            >
              {/* Airmail border striping (subtle) */}
              <div className="absolute inset-0 border-[6px] border-transparent bg-clip-content bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 pointer-events-none" />
              
              {/* Stamp and Postmark */}
              <div className="absolute right-8 top-8 flex flex-col items-center">
                <div className="w-12 h-14 bg-[#eedda2]/20 dark:bg-[#eedda2]/5 border border-dashed border-[#c2b98f] dark:border-[#383526] rounded flex items-center justify-center text-lg select-none rotate-6">
                  ✨
                </div>
                {/* Circular Postmark */}
                <div className="absolute w-16 h-16 border border-[#993b27]/20 dark:border-[#d1705b]/15 rounded-full -top-1 -right-1 flex items-center justify-center rotate-45 select-none pointer-events-none">
                  <span className="text-[5px] text-[#993b27]/30 dark:text-[#d1705b]/25 font-bold uppercase tracking-widest font-mono">GURUGRAM • IN</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="font-serif-display text-lg text-[#3a3523] dark:text-[#ebdca2] italic border-b border-[#eedda2]/45 dark:border-[#2b281f] pb-2 select-none">
                  Dear {profile.name.split(' ')[0]},
                </div>

                <div className="space-y-5 text-xs md:text-sm">
                  <div className="flex flex-wrap items-baseline gap-2 leading-loose">
                    <span className="text-gray-550 dark:text-gray-400 font-light select-none">My name is</span>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      className="bg-transparent border-b border-[#c2b98f] dark:border-[#383526] focus:border-[#c084fc] dark:focus:border-[#c084fc] outline-none px-1 py-0.5 text-[#3a3523] dark:text-[#ebdca2] font-semibold min-w-[130px] transition-colors"
                      required
                    />
                    <span className="text-gray-555 dark:text-gray-400 font-light select-none">and you can reply at</span>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com"
                      value={visitorEmail}
                      onChange={(e) => setVisitorEmail(e.target.value)}
                      className="bg-transparent border-b border-[#c2b98f] dark:border-[#383526] focus:border-[#c084fc] dark:focus:border-[#c084fc] outline-none px-1 py-0.5 text-[#3a3523] dark:text-[#ebdca2] font-semibold min-w-[180px] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-gray-550 dark:text-gray-400 font-light block select-none">Here is what I wanted to write:</label>
                    <textarea 
                      placeholder="I'd love to collaborate on a design / discuss a project / say hello..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="5"
                      className="w-full bg-transparent border border-[#eedda2]/20 dark:border-[#2b281f] focus:border-[#c084fc]/50 dark:focus:border-[#c084fc]/50 rounded-xl p-3 outline-none text-[#3a3523] dark:text-[#ebdca2] font-serif-display italic leading-relaxed resize-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#eedda2]/45 dark:border-[#2b281f] select-none">
                <div className="text-xs text-[#877c59] dark:text-[#918664]">
                  <span>With sincerity,</span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Wax Seal */}
                  <div className="w-10 h-10 rounded-full bg-rose-600/90 dark:bg-rose-700/80 flex items-center justify-center shadow-md relative rotate-12 select-none border border-rose-500/10">
                    <span className="text-white font-serif-display italic font-bold text-xs select-none">A.K.</span>
                  </div>
                              <button
                    type="submit"
                    disabled={submitted}
                    className="px-5 py-2.5 rounded-xl bg-[#c084fc] hover:bg-[#b06ee0] text-white font-bold text-xs flex items-center gap-2 transition-all duration-300 shadow-md shadow-[#c084fc]/10 hover:shadow-[#c084fc]/20 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {submitted ? "Sending..." : "Send Letter"} <Send size={12} />
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Footer layout matching the Next.js visual specifications */}
      <footer className="footer bg-gradient-to-b from-[#eef2ff] to-[#f8fafc] dark:from-[#0b0f19] dark:to-[#05070c] transition-colors duration-300 border-none py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-3 text-xs font-mono select-none">
          {/* Github link with logo placed upside */}
          <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.5 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5.7 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-.7zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <a href="https://github.com/akshatk1997/akshatk1997.github.io" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#c084fc] transition-colors">
              Github Repository
            </a>
          </div>

          {/* Copyright centered at the bottom */}
          <p className="copyright text-slate-500 dark:text-gray-400 font-bold">
            © 2026 akshat kumar. all rights reserved.
          </p>

          <div className="text-center font-serif-display italic text-[11px] text-slate-400 dark:text-gray-500 tracking-wide max-w-md leading-relaxed pt-1.5 border-t border-zinc-200/50 dark:border-zinc-800/40 w-full">
            "behind every line, there is a human heart waiting to connect."
          </div>
        </div>
      </footer>
    </section>
  );
}
