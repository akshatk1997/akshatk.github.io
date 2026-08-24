import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../portfolio.config';
import { Smile, Coffee, Music, Send, Check, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function Playground() {
  const { playground } = portfolioConfig;
  
  // Mood Tracker State
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodMessage, setMoodMessage] = useState('');

  // Guestbook State
  const [guestbook, setGuestbook] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('✨');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Load guestbook entries from localstorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-guestbook');
    if (saved) {
      try {
        setGuestbook(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Seed default messages for empty guestbook
      const defaultEntries = [
        { name: "Sarah K.", message: "Your portfolio feels so cozy! Love the background instrumental option.", emoji: "🌸", date: "Just now" },
        { name: "Dev Dave", message: "Incredible attention to UI details here. Very polished.", emoji: "☕", date: "Yesterday" }
      ];
      setGuestbook(defaultEntries);
    }
  }, []);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setMoodMessage(playground.moodResponses[mood] || "Thanks for sharing! Hope you're doing great.");
  };

  const handleGuestbookSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const newEntry = {
      name: name.trim(),
      message: message.trim(),
      emoji: selectedEmoji,
      date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
    };

    setTimeout(() => {
      const updated = [newEntry, ...guestbook].slice(0, 10); // cap at 10 items
      setGuestbook(updated);
      localStorage.setItem('portfolio-guestbook', JSON.stringify(updated));
      setName('');
      setMessage('');
      setIsSubmitting(false);
    }, 600);
  };

  const handleAudioToggle = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleMuteToggle = () => {
    if (!audioRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    audioRef.current.muted = nextMute;
  };

  const moods = [
    { id: 'tired', emoji: '😴', label: 'Tired' },
    { id: 'excited', emoji: '🤩', label: 'Excited' },
    { id: 'curious', emoji: '🤔', label: 'Curious' },
    { id: 'anxious', emoji: '🥺', label: 'Anxious' },
    { id: 'creative', emoji: '🎨', label: 'Creative' }
  ];

  const emojis = ['✨', '☕', '🚀', '🌱', '🦉', '🍕', '💻', '🌊'];

  return (
    <section 
      id="playground" 
      className="py-20 px-4 md:px-6 max-w-5xl mx-auto space-y-16 border-t border-slate-100 dark:border-slate-900/50"
    >
      
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-slate-800 dark:text-white">
          Interactive <span className="text-rose-500">Playground</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm md:text-base">
          A small corner of interactive ideas. Pause for a moment, share your mood, toggle some relaxing study music, or leave a warm greeting on the guestbook!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* Mood and Sound Card */}
        <div className="space-y-8">
          
          {/* Mood Section */}
          <div className="glass p-6 md:p-8 rounded-3xl border space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-serif-display font-semibold text-slate-800 dark:text-white flex items-center gap-2 select-none">
                <Smile className="text-rose-500" size={18} /> How is your energy today?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                Tell me how you're feeling and get a small personalized note back.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {moods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleMoodSelect(m.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all duration-300 select-none ${
                    selectedMood === m.id
                      ? 'bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 shadow-sm'
                      : 'glass border-slate-200/60 dark:border-slate-800 hover:border-rose-500/30'
                  }`}
                >
                  <span className="text-sm select-none">{m.emoji}</span>
                  <span>{m.label}</span>
                </button>
              ))}
            </div>

            {selectedMood && (
              <div className="p-4 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/15 dark:border-rose-500/20 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light animate-fade-in">
                {moodMessage}
              </div>
            )}
          </div>

          {/* Rain Sound Section */}
          <div className="glass p-6 md:p-8 rounded-3xl border space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-serif-display font-semibold text-slate-800 dark:text-white flex items-center gap-2 select-none">
                <Music className="text-rose-500" size={18} /> Study Soundtrack
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                Toggle a relaxing instrumental song to loop in the background while you browse.
              </p>
            </div>

            <audio 
              ref={audioRef}
              src={playground.audioSource}
              loop
            />

            <div className="flex items-center gap-4 bg-slate-100/50 dark:bg-slate-900/60 p-4 rounded-2xl border dark:border-slate-800/80">
              <button
                onClick={handleAudioToggle}
                className="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-700 text-white flex items-center justify-center transition-all duration-300 shadow-md shadow-rose-500/15 select-none"
                aria-label={isPlaying ? "Pause Sound" : "Play Sound"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
              </button>

              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-600 dark:text-slate-400 select-none">
                  <span>Acoustic Chill Instrumental</span>
                  <span className="font-light italic text-[10px] text-rose-500">Muted by default</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleMuteToggle}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-350 transition-colors"
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                  <input 
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-rose-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Guestbook Card */}
        <div className="glass p-6 md:p-8 rounded-3xl border space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-serif-display font-semibold text-slate-800 dark:text-white flex items-center gap-2 select-none">
                <Coffee className="text-rose-500" size={18} /> Guestbook
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                Sign your visit! Leave a short message and choose an emoji stamp.
              </p>
            </div>

            <form onSubmit={handleGuestbookSubmit} className="space-y-3.5">
              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-2 px-3 py-2 text-xs rounded-xl glass border border-slate-200 dark:border-slate-800 focus:border-rose-500/50 dark:focus:border-rose-500/50 outline-none text-slate-800 dark:text-slate-100"
                  required
                />
                
                {/* Emoji Select */}
                <select
                  value={selectedEmoji}
                  onChange={(e) => setSelectedEmoji(e.target.value)}
                  className="px-2 py-2 text-xs rounded-xl glass border border-slate-200 dark:border-slate-800 focus:border-rose-500/50 outline-none bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 cursor-pointer"
                >
                  {emojis.map((emoji) => (
                    <option key={emoji} value={emoji}>{emoji}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <textarea 
                  placeholder="Leave a friendly message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  className="w-full px-3 py-2.5 text-xs rounded-xl glass border border-slate-200 dark:border-slate-800 focus:border-rose-500/50 dark:focus:border-rose-500/50 outline-none text-slate-800 dark:text-slate-100 resize-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 bottom-3 p-2 rounded-lg bg-rose-500 hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-700 text-white transition-colors duration-300 disabled:opacity-50"
                  aria-label="Submit Sign"
                >
                  {isSubmitting ? <Check size={12} className="animate-ping" /> : <Send size={12} />}
                </button>
              </div>
            </form>
          </div>

          {/* Sticky Notes Area */}
          <div className="mt-6 flex-1 flex flex-col justify-start">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 select-none">Recent Visitors</span>
            <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
              {guestbook.map((entry, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 animate-fade-in"
                >
                  <span className="text-base select-none leading-none pt-0.5">{entry.emoji}</span>
                  <div className="flex-1 space-y-0.5">
                    <div className="flex justify-between items-center select-none">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{entry.name}</span>
                      <span className="text-[9px] text-slate-400 dark:text-slate-500">{entry.date}</span>
                    </div>
                    <p className="text-[11px] font-light text-slate-550 dark:text-slate-400 leading-snug">{entry.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
