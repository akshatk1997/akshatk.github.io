import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Briefcase, Award, ArrowRight } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am AK's ai, Akshat's digital representative. I'm here to tell you about his internships, Qiplo (his AI retention SaaS), or why he is a perfect match for your product team. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(true);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setUnread(false);
  };

  const generateResponse = (input) => {
    const text = input.toLowerCase().trim();
    
    // Greetings
    if (text.match(/\b(hi|hello|hey|greetings|hola|good morning|good afternoon|good evening|yo)\b/)) {
      return "Hello! Welcome to Akshat's portfolio. I am AK's ai. I'd be delighted to tell you about his experience at BlueFlute Software, his flagship SaaS project Qiplo, or his core product management skills. What can I assist you with today?";
    }
    
    // About / Tell me about yourself
    if (text.includes("about") || text.includes("yourself") || text.includes("who is") || text.includes("introduce") || text.includes("profile")) {
      return "Akshat Kumar is a product-focused engineer who sits at the intersection of technical engineering, product telemetry, and user experience. With a B.Tech in CS and currently pursuing an MBA in AI & Data Science at Chandigarh University, he specializes in PRD writing, SQL analytics, Figma prototyping, and user journey optimization. He is passionate about building digital spaces that solve real business problems while retaining human warmth.";
    }

    // Internship / BlueFlute / Franco Kernel / Experience
    if (text.includes("internship") || text.includes("blueflute") || text.includes("work") || text.includes("experience") || text.includes("franco") || text.includes("analyst") || text.includes("career")) {
      if (text.includes("franco") || text.includes("kernel") || text.includes("community")) {
        return "In 2020, Akshat served as a Product Analyst & Community Lead for the Franco Kernel Android Community. He managed release cycles for system software builds, drafted testing criteria, tracked backlogs in issue trackers, and coordinated with developers to keep delivery on schedule.";
      }
      return "Akshat served as a Marketing & Product Coordination Intern at BlueFlute Software Pvt. Ltd. (June – July 2026). He coordinated cross-functionally across engineering, design, and marketing to ensure on-time execution of product initiatives—a performance explicitly acknowledged by the CEO. He also gathered and synthesized user feedback into structured reports to identify product improvement areas.";
    }

    // Projects / Qiplo / Chatbot
    if (text.includes("project") || text.includes("qiplo") || text.includes("chatbot") || text.includes("build") || text.includes("shipped") || text.includes("make") || text.includes("product")) {
      if (text.includes("qiplo") || text.includes("attrition") || text.includes("retention") || text.includes("saas")) {
        return "Akshat's flagship product achievement is Qiplo (live at: qiplo.vercel.app), a sophisticated AI Customer Retention SaaS platform.\n\n• **The Problem**: SaaS companies usually address churn reactively—after a customer cancels. Qiplo translates complex product metrics into predictive, narrative alerts so sales, support, and managers can intervene before customers decide to cancel.\n• **How it works**: Powered by a custom Tabular Hybrid Transformer ML model, it identifies high-risk customers, explains warnings using SHAP feature importance, integrates webhooks (Stripe, HubSpot, Salesforce), and offers 8 functional modules including a What-If Sandbox (enabling support teams to run hypothetical customer risk scenarios) and an A/B Test Tracker.\n• **The Leverage**: This showcases Akshat's ability to own the entire product lifecycle—writing specs, prototyping in Figma, coding ML models, and configuring compliance tracking.\n\nIt is live and ready for testing! Would you like me to guide you to the live Qiplo platform, or show you how Akshat designed the customer telemetry flows?";
      }
      if (text.includes("chatbot") || text.includes("prompt")) {
        return "Akshat designed and optimized a Conversational AI Chatbot product (shipped in 2025).\n\n• **The Problem**: Standard customer service chatbots feel rigid and mechanical, frustrating users and driving them to abandon support flows.\n• **How it works**: Akshat mapped user journeys, engineered natural prompt styles, configured model parameters (temperature, token scopes), and ran systematic A/B testing configurations to evaluate response clarity.\n• **The Data**: He tracked chatbot performance KPIs (user satisfaction, resolution rate, response times) using SQL telemetry to continuously optimize prompt behavior.\n\nThis highlights Akshat's capability to build data-driven LLM applications. Would you like to check out his prompt engineering coordinates, or see his analytics model?";
      }
      return "Akshat has shipped two highly impressive product initiatives:\n\n1. **Qiplo** (qiplo.vercel.app): An AI Customer Retention SaaS with 8 modules, SHAP feature importance, and CRM integrations. It solves proactive customer attrition.\n2. **AI Chatbot**: A prompt-engineered support agent optimized via A/B testing and SQL telemetry to solve user support friction.\n\nBoth projects showcase his rare combination of CS engineering, product specs writing, and UX design. Which one would you like to dive deeper into?";
    }

    // Skills / Stack / Tools / Figma / SQL
    if (text.includes("skill") || text.includes("stack") || text.includes("tool") || text.includes("figma") || text.includes("sql") || text.includes("jira") || text.includes("analytics")) {
      return "Akshat's core skills span three areas:\n\n• **Product Core**: PRD writing, feature specs, backlog/sprint management (Jira), GTM planning.\n• **Data & Analytics**: SQL product telemetry, A/B testing, Power BI, SAS Viya analytics.\n• **UX Design**: Figma wireframing, interactive prototyping, and Google usability testing (he holds a Google UX Design Professional Certificate).";
    }

    // Education / MBA / AKTU / Chandigarh University
    if (text.includes("education") || text.includes("mba") || text.includes("college") || text.includes("university") || text.includes("degree") || text.includes("aktu") || text.includes("study")) {
      return "Akshat has a B.Tech in Computer Science Engineering (AKTU, 2019-2023) and is currently pursuing his MBA in Artificial Intelligence & Data Science at Chandigarh University (2025-Present). This dual engineering and business analytics background makes him highly adept at bridging developer feasibility and business strategy.";
    }

    // Why hire him / availability / resume / contact
    if (text.includes("hire") || text.includes("why") || text.includes("recruit") || text.includes("impress") || text.includes("value") || text.includes("fit")) {
      return "Akshat is an exceptional hire because:\n\n1. **Technical CS + MBA AI Background**: He speaks both technical code and business strategy fluently.\n2. **CEO-Praised Execution**: Delivered critical releases on time at BlueFlute under tight timelines.\n3. **End-to-End Ownership**: He writes PRDs, designs user flows in Figma, and tracks product telemetry with SQL.\n\nHe is ready to join and add immediate leverage to your team! Let me know if you would like his direct contact details.";
    }

    // Contact details / Resume
    if (text.includes("contact") || text.includes("email") || text.includes("mail") || text.includes("phone") || text.includes("linkedin") || text.includes("call") || text.includes("resume")) {
      return "Here is how you can connect with Akshat:\n\n• **Email**: akshatk1997@gmail.com\n• **Phone**: +91-7599012737\n• **LinkedIn**: linkedin.com/in/akshatk1997\n\nHe is open to roles and would love to hear from you!";
    }

    // Persuasive Fallback
    return "As AK's ai, I can tell you that Akshat is a highly capable product manager who combines engineering background with product analytics and UX design. He has shipped a live AI retention SaaS (Qiplo) and coordinated cross-functional product launches at BlueFlute Software.\n\nWould you like to know more about his **experience**, **skills**, or **how to contact him**?";
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const responseText = generateResponse(query);
      const botMessage = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    // Submit query immediately after state update
    setTimeout(() => {
      const mockEvent = { preventDefault: () => {} };
      const sendButton = document.getElementById('chat-send-btn');
      sendButton?.click();
    }, 50);
  };

  const suggestions = [
    "Tell me about Akshat",
    "What did he do at BlueFlute?",
    "Tell me about Qiplo",
    "What are his core skills?",
    "Why should we hire him?",
    "How to contact him?"
  ];

  return (
    <>
      {/* Floating Chat Bubble Button */}
      <div className="fixed bottom-6 right-6 z-[50] select-none">
        <button
          onClick={handleOpenToggle}
          className={`p-4 rounded-full bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#fb7185] hover:opacity-95 text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center relative ${
            isOpen ? 'rotate-90' : ''
          }`}
          aria-label="Chat with AK's ai"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 animate-pulse" />
              {unread && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white dark:border-zinc-950 animate-bounce" />
              )}
            </>
          )}
        </button>
      </div>

      {/* Expanded Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-[360px] sm:w-[400px] h-[520px] max-h-[80vh] rounded-3xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/60 dark:border-zinc-800/80 shadow-2xl z-[50] flex flex-col overflow-hidden animate-fade-in select-none font-sans"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#818cf8]/10 via-[#c084fc]/10 to-[#fb7185]/10 border-b border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#818cf8] to-[#c084fc] flex items-center justify-center text-white shadow-md font-serif-display font-extrabold text-sm">
                  AK
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-1.5 leading-none">
                  AK's ai <Sparkles className="w-3.5 h-3.5 text-[#c084fc] animate-pulse" />
                </h4>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={handleOpenToggle}
              className="p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                {msg.sender === 'bot' ? (
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#818cf8]/20 to-[#c084fc]/20 text-[#c084fc] font-bold text-[10px] flex items-center justify-center shrink-0 border border-[#c084fc]/20">
                    AI
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400 font-bold text-[10px] flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
                    U
                  </div>
                )}

                {/* Message bubble */}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] text-xs leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white shadow-sm font-semibold rounded-tr-none'
                      : 'bg-zinc-50 dark:bg-zinc-800/40 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800/50 rounded-tl-none font-medium'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#818cf8]/20 to-[#c084fc]/20 text-[#c084fc] font-bold text-[10px] flex items-center justify-center shrink-0 border border-[#c084fc]/20">
                  AI
                </div>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl rounded-tl-none flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-[#c084fc] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-[#c084fc] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-[#c084fc] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Tray */}
          <div className="px-4 py-2 border-t border-zinc-200/50 dark:border-zinc-800/50 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none bg-zinc-50/50 dark:bg-zinc-950/20 select-none">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-medium text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:border-[#c084fc] hover:text-[#c084fc] dark:hover:border-[#c084fc] dark:hover:text-[#c084fc] transition-all duration-300"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Footer Input Bar */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-200/50 dark:border-zinc-800/50 flex gap-2 items-center"
          >
            <input
              type="text"
              placeholder="Ask AK's ai anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-800 dark:text-white text-xs outline-none focus:border-[#c084fc]/50 dark:focus:border-[#c084fc]/50 transition-colors font-medium"
            />
            <button
              id="chat-send-btn"
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white hover:opacity-95 shadow-md flex items-center justify-center shrink-0 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
