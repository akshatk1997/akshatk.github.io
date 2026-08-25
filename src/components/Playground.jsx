import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../portfolio.config';
import { Smile, Coffee, Music, Send, Check, Play, Pause, Volume2, VolumeX, ListMusic } from 'lucide-react';

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

  // Focus Tracks List
  const tracks = [
    { 
      name: "Lo-Fi Focus Beats", 
      url: "/audio/focus-1.mp3",
      genre: "Lo-Fi Study Beats"
    },
    { 
      name: "Deep Work Space Ambient", 
      url: "/audio/focus-2.mp3",
      genre: "Atmospheric Synth Drone"
    },
    { 
      name: "Coffee Shop Piano Jazz", 
      url: "/audio/focus-3.mp3",
      genre: "Chilled Focus Piano"
    },
    { 
      name: "Coding Productivity Synth", 
      url: "/audio/focus-4.mp3",
      genre: "Synthwave Coding Beats"
    }
  ];

  // Audio State
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
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

  const handleTrackChange = (index) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].url;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log("Track swap autoplay failed:", err));
      }
    }
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
      className="py-32 px-4 md:px-6 max-w-5xl mx-auto space-y-16 border-t border-gray-150 dark:border-zinc-900/60 w-full bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#c084fc]/5 dark:bg-[#c084fc]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-[#818cf8]/5 dark:bg-[#818cf8]/3 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="text-center space-y-3 max-w-2xl mx-auto relative z-10 reveal">
        <span className="block text-2xl text-gray-650 dark:text-gray-400 text-center font-mono font-bold mb-2 animate-fade-in select-none">
          Interactive
        </span>
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] text-transparent bg-clip-text">
          Interactive Playground
        </h2>
        <p className="text-gray-500 dark:text-zinc-350 font-light leading-relaxed text-sm md:text-base">
          A small corner of interactive ideas. Pause for a moment, share your mood, toggle some relaxing study music, or leave a warm greeting on the guestbook!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch pt-4 relative z-10 reveal">
        
        {/* Mood and Sound Card */}
        <div className="space-y-8 flex flex-col">
          
          {/* Mood Section */}
          <div className="bg-white dark:bg-zinc-800/40 backdrop-blur-md rounded-[2.2rem] p-6 md:p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-2xl hover:border-[#c084fc]/30 transition-all duration-500 flex-1">
            <div className="space-y-2 text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 select-none">
                <Smile className="text-[#c084fc]" size={18} /> How is your energy today?
              </h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400 font-light">
                Tell me how you're feeling and get a small personalized note back.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 mt-6">
              {moods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleMoodSelect(m.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-all duration-300 select-none ${
                    selectedMood === m.id
                      ? 'bg-[#c084fc]/10 border-[#c084fc] text-[#c084fc] shadow-sm'
                      : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:border-[#c084fc]/50'
                  }`}
                >
                  <span className="text-sm select-none">{m.emoji}</span>
                  <span>{m.label}</span>
                </button>
              ))}
            </div>

            {selectedMood && (
              <div className="p-4 rounded-2xl bg-[#c084fc]/5 dark:bg-[#c084fc]/10 border border-[#c084fc]/15 dark:border-[#c084fc]/20 text-xs md:text-sm text-gray-700 dark:text-zinc-300 leading-relaxed font-light mt-6 animate-fade-in">
                {moodMessage}
              </div>
            )}
          </div>

          {/* Soundtrack Section */}
          <div className="bg-white dark:bg-zinc-800/40 backdrop-blur-md rounded-[2.2rem] p-6 md:p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-2xl hover:border-[#c084fc]/30 transition-all duration-500 flex-1 flex flex-col justify-between">
            <div className="space-y-2 text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 select-none">
                <Music className="text-[#c084fc]" size={18} /> Study Soundtrack
              </h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400 font-light">
                Choose and loop background focus tracks to lock in while you browse.
              </p>
            </div>

            <audio 
              ref={audioRef}
              src={tracks[currentTrackIndex].url}
              loop
            />

            {/* Playlist Track List */}
            <div className="space-y-2 mt-6 text-left select-none">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 dark:text-zinc-500 flex items-center gap-1.5 mb-2.5">
                <ListMusic size={12} /> Select Focus Track
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {tracks.map((track, tIdx) => (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => handleTrackChange(tIdx)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-300 ${
                      currentTrackIndex === tIdx
                        ? 'bg-[#c084fc]/10 border-[#c084fc] text-[#c084fc] shadow-sm'
                        : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 hover:border-[#c084fc]/40'
                    }`}
                  >
                    <div className="font-extrabold text-[11px] truncate leading-snug">{track.name}</div>
                    <div className="text-[8px] opacity-75 truncate font-mono mt-0.5">{track.genre}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Audio controls card */}
            <div className="flex items-center gap-4 bg-gray-50 dark:bg-zinc-900/60 p-4 rounded-2xl border dark:border-zinc-800/80 mt-6">
              <button
                onClick={handleAudioToggle}
                className="w-12 h-12 rounded-full bg-[#c084fc] hover:bg-[#b06ee0] text-white flex items-center justify-center transition-all duration-300 shadow-md shadow-[#c084fc]/15 select-none shrink-0"
                aria-label={isPlaying ? "Pause Sound" : "Play Sound"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
              </button>

              <div className="flex-1 space-y-1 text-left">
                <div className="flex justify-between items-center text-xs font-bold text-gray-700 dark:text-zinc-300 select-none">
                  <span className="truncate max-w-[150px]">{tracks[currentTrackIndex].name}</span>
                  {isPlaying ? (
                    <div className="flex items-end gap-[2px] h-3 select-none pr-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          style={{
                            animationDelay: `${i * 0.12}s`,
                            animationDuration: `${0.6 + (i % 3) * 0.15}s`
                          }}
                          className="w-[2px] rounded-full bg-[#c084fc] animate-eq-bar"
                        />
                      ))}
                    </div>
                  ) : (
                    <span className="font-light italic text-[9px] text-[#c084fc]">Stopped</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleMuteToggle}
                    className="text-gray-450 hover:text-gray-650 dark:hover:text-gray-300 transition-colors"
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
                    className="w-full h-1 bg-gray-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer accent-[#c084fc]"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Guestbook Card */}
        <div className="bg-white dark:bg-zinc-800/40 backdrop-blur-md rounded-[2.2rem] p-6 md:p-8 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-2xl hover:border-[#c084fc]/30 transition-all duration-500 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-2 text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 select-none">
                <Coffee className="text-[#c084fc]" size={18} /> Guestbook
              </h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400 font-light">
                Sign your visit! Leave a short message and choose an emoji stamp.
              </p>
            </div>

            <form onSubmit={handleGuestbookSubmit} className="space-y-3.5 mt-4">
              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-2 px-3 py-2.5 text-xs rounded-xl bg-gray-55 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-[#c084fc]/50 outline-none text-gray-800 dark:text-zinc-100 font-semibold"
                  required
                />
                
                {/* Emoji Select */}
                <select
                  value={selectedEmoji}
                  onChange={(e) => setSelectedEmoji(e.target.value)}
                  className="px-2 py-2.5 text-xs rounded-xl bg-gray-55 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-[#c084fc]/50 outline-none text-gray-800 dark:text-zinc-100 cursor-pointer"
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
                  className="w-full px-3 py-2.5 text-xs rounded-xl bg-gray-55 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-[#c084fc]/50 outline-none text-gray-850 dark:text-zinc-200 resize-none font-light leading-relaxed"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2.5 bottom-3.5 p-2 rounded-lg bg-[#c084fc] hover:bg-[#b06ee0] text-white transition-colors duration-300 disabled:opacity-50"
                  aria-label="Submit Sign"
                >
                  {isSubmitting ? <Check size={12} className="animate-ping" /> : <Send size={12} />}
                </button>
              </div>
            </form>
          </div>

          {/* Sticky Notes Area */}
          <div className="mt-8 flex-1 flex flex-col justify-start">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-550 mb-2 select-none text-left">Recent Visitors</span>
            <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1 scrollbar-hide">
              {guestbook.map((entry, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-55/50 dark:bg-zinc-900/30 border border-zinc-150 dark:border-zinc-800/80 animate-fade-in"
                >
                  <span className="text-base select-none leading-none pt-0.5">{entry.emoji}</span>
                  <div className="flex-1 space-y-0.5 text-left">
                    <div className="flex justify-between items-center select-none">
                      <span className="text-xs font-bold text-gray-700 dark:text-zinc-300">{entry.name}</span>
                      <span className="text-[9px] text-gray-455 dark:text-zinc-500">{entry.date}</span>
                    </div>
                    <p className="text-[11px] font-light text-gray-500 dark:text-zinc-300 leading-snug">{entry.message}</p>
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
