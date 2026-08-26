import React, { useState } from 'react';
import { Mail, Check, Copy, Send, Heart, Github, Linkedin } from 'lucide-react';
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
          {/* Social Badges Row */}
          <div className="flex items-center gap-4 mb-2">
            {portfolioConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-zinc-900/60 text-slate-600 dark:text-zinc-400 hover:text-white hover:bg-[#c084fc] dark:hover:bg-[#c084fc] border border-zinc-200/60 dark:border-zinc-800/80 transition-all duration-300 hover:scale-105 shadow-sm flex items-center justify-center"
                title={social.name}
              >
                {social.name === "GitHub" && <Github size={16} />}
                {social.name === "LinkedIn" && <Linkedin size={16} />}
                {social.name === "E-mail" && <Mail size={16} />}
              </a>
            ))}
          </div>

          {/* Copyright centered at the bottom */}
          <p className="copyright text-slate-500 dark:text-gray-400 font-bold">
            © 2026 akshat kumar. all rights reserved.
          </p>

          <div className="text-center font-serif-display italic text-xs md:text-sm text-slate-650 dark:text-zinc-400 tracking-wide max-w-md leading-relaxed pt-3 border-t border-zinc-200/65 dark:border-zinc-800/85 w-full font-medium">
            "behind every line, there is a human heart waiting to connect."
          </div>
        </div>
      </footer>
    </section>
  );
}
