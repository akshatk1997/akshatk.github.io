// portfolio.config.js
// Customise this file to update your portfolio's content and personal touch.

export const portfolioConfig = {
  profile: {
    name: "Akshat Kumar",
    title: "AI Developer & Product Builder",
    tagline: "I combine B.Tech Computer Science engineering with an MBA in AI & Data Science to design and build intelligent systems, interactive prototypes, and value-driven consumer products.",
    status: "A soft glow starts in the dark",
    avatarPlaceholder: "✨", // Emoji or short symbol representing you
    email: "akshatk1997@gmail.com",
    resumeUrl: "#", // Add your resume link here
    stats: [
      { value: "2+", label: "Years of Experience" },
      { value: "8+", label: "Completed Projects" },
      { value: "15+", label: "A/B Tests & Studies" },
      { value: "20+", label: "Technologies Mastered" }
    ],
    services: [
      {
        title: "AI & Data Products",
        description: "Designing prompt behaviors, modeling tabular risk architectures, and crafting explainable analytics interfaces."
      },
      {
        title: "Product Engineering",
        description: "Translating wireframes into interactive React.js applications, building REST APIs, and automating pipelines."
      },
      {
        title: "UX & Product Design",
        description: "Conducting user research, evaluation cycles, information architecture planning, and high-fidelity layouts."
      }
    ]
  },
  
  about: {
    bio: "I am an AI Developer and Product Builder with a B.Tech in Computer Science and an MBA in AI & Data Science. I believe that digital interfaces are more than screens—they are spaces of human connection. I specialize in engineering systems that care about the little details: the micro-interactions that make a user smile, the quiet spaces of a layout, and the subtle nuances of an AI conversational response. By combining technical implementation with user psychology, I build products where logic meets human warmth.",
    quote: "I believe the soul of a product is found in the little things—the quiet spaces of a layout, the subtle tone of an AI reply, and the hidden details that make a human feel heard.",
    
    // Core philosophies that guide your work
    philosophies: [
      {
        title: "Empathy-Driven AI",
        description: "Machine learning models shouldn't be black boxes. I design explainable interfaces (using tools like SHAP) and natural conversational prompts that translate data predictions into clear, human-friendly guidance."
      },
      {
        title: "End-to-End Creation",
        description: "True builders bridge the blueprint and the tools. I take concepts from Figma wireframes directly into React code, API services, database structures, and prompt strategies."
      },
      {
        title: "Loop-Based Telemetry",
        description: "A product gets smarter through real interactions. I implement telemetry, analyze user interaction query paths using SQL, and run A/B test experiments to continuously refine the product."
      }
    ],
 
    // The AI & Experience Stack (Drawn directly from your key skills)
    techStack: [
      { 
        category: "Product Core", 
        items: ["PRD & Specs", "User Stories", "Product Roadmapping", "Backlog & Sprints", "Go-to-Market (GTM)", "DevOps Automation"] 
      },
      { 
        category: "Product Engineering", 
        items: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Python / FastAPI", "REST APIs", "Git version control", "Cloud Deployments"] 
      },
      { 
        category: "AI & Data Science", 
        items: ["Generative AI", "Prompt Engineering", "Tabular Transformers", "PyTorch / Scikit-Learn", "SHAP Explainability", "SQL Database Queries", "SAS Viya Analytics", "Power BI"] 
      },
      { 
        category: "UX & Product Design", 
        items: ["Figma Wireframing", "High-Fidelity Prototyping", "Google UX Research", "Usability Testing", "Information Architecture", "Heuristic Evaluation"] 
      }
    ],
 
    // The Personal Stack (The human side - adds connection and warmth)
    personalStack: [
      { label: "Location Hub", value: "Gurugram, Haryana, India" },
      { label: "Domain Focus", value: "AI SaaS, Conversational Interfaces, and Consumer Product Experiences" },
      { label: "Ideal Workspace", value: "A clean desk, warm yellow light, and soft acoustic lofi ambient music" },
      { label: "Curiosity Rating", value: "11/10 (Always analyzing app store reviews to study user psychology)" },
      { label: "Off-screen Passion", value: "Deconstructing physical hardware architectures & road trips" }
    ],

    // A chronological journey of milestones, learnings, and human moments
    timeline: [
      {
        year: "2020",
        title: "Franco Kernel Community Leader",
        type: "milestone", // milestone | learning | detour
        description: "Managed cycles for system software builds in the Android community—writing test criteria, tracking bug backlogs in issue trackers, and coordinating with developers."
      },
      {
        year: "2023",
        title: "Graduated B.Tech in CSE",
        type: "milestone",
        description: "Graduated with a B.Tech in Computer Science Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU), building a solid foundation in software systems."
      },
      {
        year: "2025",
        title: "Began MBA in AI & Data Science",
        type: "milestone",
        description: "Started my MBA in AI & Data Science at Chandigarh University, focusing on features modeling and business decision intelligence."
      },
      {
        year: "2025",
        title: "Conversational AI Chatbot Spec",
        type: "learning",
        description: "Designed prompt behaviors and defined the user journey for an AI Chatbot product. Conducted A/B testing on prompt styles to optimize resolution rate and satisfaction scores."
      },
      {
        year: "2026",
        title: "Shipped Qiplo SaaS Platform",
        type: "milestone",
        description: "Managed the full product lifecycle from ideation to deployment for Qiplo, an AI-powered customer retention platform featuring 8 modules, What-If Sandboxes, and Copilot prompts."
      },
      {
        year: "2026",
        title: "BlueFlute Software Intern",
        type: "milestone",
        description: "Joined BlueFlute Software as a Marketing & Product Coordination Intern. Managed cross-functional releases between design, tech, and marketing, acknowledged by the CEO."
      }
    ]
  },

  projects: [
    {
      title: "Qiplo - AI Retention SaaS",
      tagline: "Live customer attrition risk platform with 8 functional modules",
      description: "An end-to-end AI platform designed to predict customer churn. Built with 8 modules including a What-If Sandbox, Copilot AI, A/B Test Tracker, and CRM Integrations (Salesforce, HubSpot, Stripe).",
      whyIBuiltIt: "SaaS companies address churn reactively, losing revenue. I designed Qiplo to translate data metrics into narrative alerts for Sales, Support, and Executive roles, ensuring early intervention.",
      learnings: "I designed the interactive flows in Figma and built the predictive model (Tabular Hybrid Transformer). Explaining SHAP feature importance to non-technical stakeholders taught me how to present AI decisions clearly.",
      tags: ["Product Specs / PRD", "Figma Prototyping", "SQL Analytics", "Tabular Transformer", "SOC 2/ISO 27001 Auditing"],
      links: {
        live: "https://qiplo.vercel.app",
        repo: "#"
      }
    },
    {
      title: "Conversational AI Chatbot",
      tagline: "Prompt optimization and A/B test experiments for user journeys",
      description: "A conversational AI chatbot product optimization. Wrote feature specs, mapped out user journeys, designed prompt strategies, and ran competitive market research to identify chatbot flow gaps.",
      whyIBuiltIt: "Standard chatbot prompts feel rigid and frustrate users. I wanted to design dynamic prompts that reduce response time, raise resolution rates, and elevate overall user satisfaction scores.",
      learnings: "Supported full A/B testing cycles from hypothesis framing to results analysis. I learned to track feature performance KPIs (satisfaction scores, resolution rate) using structured data synthesis.",
      tags: ["Prompt Design", "A/B Testing", "UX Research", "KPI Definition", "Market Analysis"],
      links: {
        live: "#",
        repo: "#"
      }
    }
  ],

  playground: {
    // Custom responses for the emotional mood tracker
    moodResponses: {
      tired: "I hear you. Take a deep breath, toggle on the rain sounds below, and remember that resting is productive. You don't have to build everything today. ☕",
      excited: "That energy is contagious! Let's build something beautiful. Check out my projects, or hit me up on socials to collaborate! 🚀",
      curious: "An inquisitive mind! Double click the screen elements, try switching between Light/Dark mode, or explore the source repository! 🔍",
      anxious: "It's okay to feel overwhelmed. There's a soft sound controller in the playground below. Pop on your headphones, listen to the chords, and take it one step at a time. 🌸",
      creative: "The best state to be in! If you see something here that sparks an idea, let's chat. I love brainstorming side-projects. 🎨"
    },
    // Rain ambiance URLs (Safe public assets)
    audioSource: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Fallback placeholder music
  },

  certifications: [
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google / Coursera",
      description: "Mastered user research methodologies, digital prototyping, usability testing, and heuristic interface evaluation.",
      credentialUrl: "https://coursera.org"
    },
    {
      title: "Machine Learning Using SAS Viya",
      issuer: "SAS Institute",
      description: "Credential in querying complex databases, dataset modeling, and performing machine learning on SAS platforms.",
      credentialUrl: "https://www.credly.com/badges/bd4667ce-bab8-4956-8466-1a36503a28c5/public_url"
    },
    {
      title: "Copado Certified Copado AI",
      issuer: "Copado",
      description: "Professional credential for Salesforce DevOps automation and implementing Copado AI assistant features.",
      credentialUrl: "https://copado.com"
    },
    {
      title: "Financial Services & Banking Simulation",
      issuer: "PNC Bank / Forage",
      description: "Virtual job experience covering retail banking focus, exploring financial services industries, and advisory strategies.",
      credentialUrl: "https://theforage.com"
    },
    {
      title: "DeepLearning.AI Prompt Engineering",
      issuer: "DeepLearning.AI",
      description: "Mastery of advanced prompt designs, temperature configuration, LLM token handling, and system behaviors.",
      credentialUrl: "https://deeplearning.ai"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Duke University / Coursera",
      description: "Completed course authorized by Duke University covering generative AI architectures, model capabilities, and pragmatic applications.",
      credentialUrl: "https://coursera.org/verify/JSW4RS7R3XGJ"
    }
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/akshatk1997", iconName: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/akshatk1997", iconName: "Linkedin" },
    { name: "Twitter / X", url: "https://twitter.com", iconName: "Twitter" },
    { name: "E-mail", url: "mailto:akshatk1997@gmail.com", iconName: "Mail" }
  ]
};
