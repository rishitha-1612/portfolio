export const RESUME_DATA = {
  name: "Rishitha Rasineni",
  title: "Full-stack AI Engineer",
  contact: {
    phone: "+91 72597 20707",
    email: "rishitharasineni@gmail.com",
    altEmail: "rvit23bcs075.rvitm@rvei.edu.in",
    github: "https://github.com/rishitha-1612",
    linkedin: "https://linkedin.com/in/rishitha-rasineni-16d2006",
  },
  summary: "Aspiring Data Analyst and Full Stack Developer with strong foundations in programming, data analysis, and web development. Experienced in building end-to-end applications and extracting meaningful insights from data using modern tools and technologies. Passionate about solving real-world problems through data-driven decision-making and scalable software solutions.",
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
      institution: "RV Institute of Technology and Management, Bengaluru",
      period: "2023 – 2027",
      details: "CGPA: 8.5"
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "SGPTA COMP PU College, Karnataka",
      period: "2021 – 2023",
      details: "Percentage: 85%"
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Sri Chaitanya Techno School, Karnataka",
      period: "2021",
      details: "Percentage: 84%"
    }
  ],
  experience: [
    {
      role: "AI Intern",
      company: "Green Skills Edunet Foundation (in collaboration with AICTE & Shell)",
      period: "Aug 2025 – Sep 2025",
      description: "Developed a climate-based crop recommendation system using Machine Learning techniques. Analyzed environmental and agricultural data to provide data-driven crop suggestions. Completed a 4-week mentored internship under the Skills4Future program focused on AI and Data Analytics. Gained hands-on experience in building practical, sustainability-driven AI solutions."
    },
    {
      role: "AI Intern (Capabl Program)",
      company: "Capabl",
      period: "2025",
      description: "Developed an AI-powered expense management system for automated tracking and financial analysis. Implemented OCR using Google Gemini Vision to extract data from receipts and financial documents. Performed data analysis and expense categorization using Python (Pandas). Built interactive dashboards using Streamlit for visualization and budgeting insights."
    }
  ],
  skills: {
    languages: ["Python", "C", "C++"],
    web: ["HTML", "CSS", "JavaScript", "MERN Stack (MongoDB, Express.js, React, Node.js)"],
    frameworks: ["Flask", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "OpenCV"],
    ai: ["Machine Learning (Basics)", "Computer Vision", "LangChain", "Exploratory Data Analysis (EDA)", "Deep Learning (DL)", "Model Training & Evaluation", "Transformer Models", "Agentic AI"],
    core: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Object-Oriented Programming"],
    databases: ["SQL", "MongoDB"],
    viz: ["Power BI"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Vite", "n8n"],
    soft: ["Team Collaboration", "Problem Solving", "Critical Thinking", "Creativity", "Adaptability"]
  },
  projects: [
    {
      title: "AI First Minute",
      subtitle: "Emergency First-Response Decision Engine",
      description: "Designed a simulation-based AI evaluation system for emergency scenarios (cardiac arrest, trauma, etc.). Built a multi-dimensional scoring system (safety, urgency, diagnosis, stabilization). Implemented a sequential decision-making environment with reward shaping.",
      tech: ["FastAPI", "React", "TypeScript", "Docker", "OpenAI API"],
      achievements: [
        "Built a multi-dimensional scoring system (safety, urgency, diagnosis, stabilization)",
        "Implemented a sequential decision-making environment with reward shaping",
        "Developed a real-time visualization UI for trajectory replay and risk tracking",
        "Deployed using containerized architecture (Hugging Face Spaces)"
      ],
      link: "https://github.com/rishitha-1612/Ai_First_Minute",
      demo: "https://huggingface.co/spaces/Venkat-023/Ai_First_Minute"
    },
    {
      title: "MDSS",
      subtitle: "Multi-Dimensional Dialogue Summarization System",
      description: "Built an advanced NLP system for hierarchical dialogue summarization. Implemented speaker diarization using embedding clustering. Designed intent classification (6 categories) and semantic graph-based grouping.",
      tech: ["Transformers", "spaCy", "NLTK", "Whisper", "Gemini API", "NetworkX"],
      achievements: [
        "Implemented speaker diarization using embedding clustering",
        "Designed intent classification (6 categories) and semantic graph-based grouping",
        "Combined TextRank (extractive) and LLM-based abstractive summarization",
        "Integrated audio transcription (Whisper) and Gradio interface"
      ],
      link: "https://github.com/rishitha-1612/MDSS"
    },
    {
      title: "KisaanKonnect",
      subtitle: "Smart Agriculture Assistant",
      description: "Developed an AI-powered agriculture platform (Hackathon 3rd place). Built ML-based crop advisory and plant disease detection (MobileNet V2). Implemented offline RAG chatbot using FAISS and local LLM (Ollama).",
      tech: ["React", "Node.js", "MongoDB", "FastAPI", "LangChain", "FAISS", "Ollama"],
      achievements: [
        "Built ML-based crop advisory and plant disease detection (MobileNet V2)",
        "Implemented offline RAG chatbot using FAISS and local LLM (Ollama)",
        "Integrated market trends, government schemes, and price prediction",
        "Designed for low-connectivity rural environments"
      ],
      link: "https://github.com/rishitha-1612/Kisaan-Konnect"
    },
    {
      title: "AI Merchant",
      subtitle: "Billing & Sales Intelligence Platform",
      description: "Developed a POS system with AI-powered sales analytics. Built real-time dashboards for revenue, trends, and product performance. Implemented AI chatbot for business insights and recommendations.",
      tech: ["React", "TypeScript", "Flask", "SQLite", "Gemini API"],
      achievements: [
        "Built real-time dashboards for revenue, trends, and product performance",
        "Implemented AI chatbot for business insights and recommendations",
        "Designed multi-user authentication and bill management system",
        "Deployed scalable frontend on Vercel"
      ],
      link: "https://github.com/rishitha-1612/ai_merchant",
      demo: "https://ai-merchant-ashy.vercel.app"
    },
    {
      title: "Genomic Toolbox",
      subtitle: "DNA Analysis Platform",
      description: "Built a bioinformatics web application for DNA mutation analysis. Implemented mutation detection, protein translation, and disease prediction. Used ClinVar dataset for disease mapping.",
      tech: ["Python Flask", "HTML/CSS", "JSON", "Vercel"],
      achievements: [
        "Implemented mutation detection, protein translation, and disease prediction",
        "Used ClinVar dataset for disease mapping",
        "Designed an interactive multi-page UI for biological workflows"
      ],
      link: "https://github.com/rishitha-1612/genomic_toolbox",
      demo: "https://genomic-toolbox.vercel.app"
    },
    {
      title: "Voice-Based Parkinson’s Disease Detection",
      subtitle: "Acoustic Feature Extraction & Diagnostic Engine",
      description: "Developed ML model using 22 acoustic features (jitter, shimmer, pitch, etc.). Implemented 11+ classification algorithms with GridSearchCV. Applied PCA, SMOTE, and preprocessing pipelines.",
      tech: ["Python", "Scikit-learn", "Streamlit", "Audio Processing"],
      achievements: [
        "Implemented 11+ classification algorithms with GridSearchCV",
        "Applied PCA, SMOTE, and preprocessing pipelines",
        "Built real-time voice prediction interface using Streamlit",
        "Achieved robust evaluation with confusion matrix and model comparison"
      ],
      link: "https://github.com/rishitha-1612/Voice-based-classification-of-Parkinson-s-disease"
    },
    {
      title: "EcoCycle",
      subtitle: "Circular Economy Logistics Platform",
      description: "Built a full-stack logistics platform with user, rider, and admin portals. Implemented real-time tracking, GPS validation, and analytics dashboards. Designed eco-wallet system and waste tracking mechanism.",
      tech: ["React", "TypeScript", "Node.js", "Leaflet.js", "Google Maps", "Recharts"],
      achievements: [
        "Implemented real-time tracking, GPS validation, and analytics dashboards",
        "Designed eco-wallet system and waste tracking mechanism",
        "Developed responsive UI and scalable architecture"
      ],
      link: "https://github.com/rishitha-1612/ECOCYCLE",
      demo: "https://ecocycle-iota.vercel.app"
    },
    {
      title: "CareerDNA",
      subtitle: "AI Resume Analyzer",
      description: "Built an AI system for resume skill extraction and gap analysis. Compared resumes with job descriptions using semantic embeddings. Generated personalized learning paths automatically.",
      tech: ["FastAPI", "spaCy", "Sentence Transformers", "React"],
      achievements: [
        "Compared resumes with job descriptions using semantic embeddings",
        "Generated personalized learning paths automatically",
        "Designed a readiness scoring system (0–100)"
      ],
      link: "https://github.com/rishitha-1612/CareerDNA"
    },
    {
      title: "TACOS",
      subtitle: "Toxicity Analysis Comment Observation System",
      description: "Built a text moderation system for detecting toxic and harmful content. Implemented context-aware classification using transformer models. Designed multi-label toxicity detection system.",
      tech: ["NLP", "Transformers", "Machine Learning"],
      achievements: [
        "Implemented context-aware classification using transformer models",
        "Designed multi-label toxicity detection system",
        "Enabled real-time moderation for online platforms"
      ],
      link: "https://github.com/rishitha-1612/TACOS-ToxicityAnalysis-Comment-Observation-System",
      demo: "https://huggingface.co/spaces/Venkat-023/TACOS"
    },
    {
      title: "Mudra Vision Prediction",
      subtitle: "Object Classification & Recognition Engine",
      description: "Implemented image processing pipelines and visual recognition models. Built object detection and classification systems. Applied feature extraction and preprocessing techniques.",
      tech: ["Python", "OpenCV", "Deep Learning"],
      achievements: [
        "Built object detection and classification systems",
        "Applied feature extraction and preprocessing techniques"
      ],
      link: "#"
    },
    {
      title: "SecureVault",
      subtitle: "AI-Based Multi-Factor Secure Storage System",
      description: "Built a secure storage system with Password, Face Recognition, and OTP authentication. Implemented real-time intruder detection with automatic image capture, location tracking, and email alerts.",
      tech: ["React", "Tailwind CSS", "Flask", "OpenCV", "JWT", "PWA"],
      achievements: [
        "Implemented real-time intruder detection with automatic image capture, location tracking, and email alerts",
        "Developed a responsive dashboard with encrypted file vault and activity monitoring",
        "Designed backend APIs for authentication, file management, and security logging",
        "Integrated OpenCV-based face recognition for real-time identity verification",
        "Enabled PWA support for installable mobile and desktop usage"
      ],
      link: "#"
    }
  ],
  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      year: "2025",
      description: "Gained foundational knowledge in AI concepts, cloud infrastructure, and building scalable, secure cloud-based solutions using Oracle Cloud.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_oraclecertified-oraclecloud-aifoundations-activity-7386391544800608256-eKXY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfSMPgBQFQf4ReuwHe-2FGP17IWOR3UpAM"
    },
    {
      title: "Startup School: Prompt to Prototype",
      issuer: "Google for Startups",
      year: "2025",
      description: "Developed skills in transforming ideas into functional prototypes using AI-driven approaches, with focus on prompt engineering and scalable solution design.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_googleforstartups-startupschool-ai-activity-7432066473952673792-7zD1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfSMPgBQFQf4ReuwHe-2FGP17IWOR3UpAM"
    },
    {
      title: "AI Tools and ChatGPT Workshop (Hands-on AI Productivity & Prompt Engineering)",
      issuer: "be10x",
      year: "2025",
      description: "Acquired practical experience in leveraging AI tools to enhance productivity, including rapid content creation, data analysis, and efficient coding/debugging.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_artificialintelligence-chatgpt-techinnovation-activity-7386387609968820224-XgAp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfSMPgBQFQf4ReuwHe-2FGP17IWOR3UpAM"
    }
  ],
  achievements: [
    "Secured 3rd Place at AI-VERSE (Scale X) Hackathon conducted at Dayananda Sagar Academy of Technology and Management (DSATM) for developing “KisaanKonnect – Smart Agriculture Assistant”, an AI-based solution for crop advisory, plant disease detection, and market insights in low-connectivity environments.",
    "Presented a research paper titled “Multi-Dimensional Dialogue Summarization System (MDSS): A Hierarchical Approach to Conversational Analysis” at the 2nd International Conference on Cognitive Computing and Data Analytics (ICCCDA’26)."
  ]
};
