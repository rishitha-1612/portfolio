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
      role: "AI Intern",
      company: "Capabl",
      period: "2025",
      description: "Developed an AI-powered expense management system for automated tracking and financial analysis. Implemented OCR using Google Gemini Vision to extract data from receipts and financial documents. Performed data analysis and expense categorization using Python (Pandas). Built interactive dashboards using Streamlit for visualization and budgeting insights."
    }
  ],
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "C", "C++"],
    frontend: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "FastAPI", "Flask"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    softwareDev: ["REST APIs", "Git", "GitHub", "API Integration", "Debugging", "Testing"],
    cloud: ["AWS", "Docker", "VS Code"],
    core: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"],
    ai: ["Machine Learning (Basics)", "Computer Vision", "LangChain", "Exploratory Data Analysis (EDA)", "Deep Learning (DL)", "Model Training & Evaluation", "Transformer Models", "Agentic AI"],
    soft: ["Team Collaboration", "Problem Solving", "Critical Thinking", "Creativity", "Adaptability"]
  },
  projects: [
    {
      title: "KisaanKonnect",
      category: "Agriculture",
      subtitle: "Smart Agriculture Assistant",
      description: "AI-powered agriculture platform (Hackathon 3rd place). ML-based crop advisory and plant disease detection (MobileNet V2) with offline RAG chatbot.",
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
      title: "Heart Disease Prediction",
      category: "Healthcare",
      subtitle: "Multimodal Cardiac AI Assistant",
      description: "Multimodal AI cardiac assistant that analyzes ECG signals and echocardiogram images for cardiovascular disease prediction and clinical decision support.",
      tech: ["Python", "PyTorch", "NumPy", "Pandas", "ML libraries"],
      achievements: [
        "Multimodal model combining ECG signal processing and echocardiogram image analysis",
        "Feature extraction, model training, and evaluation with clinical metrics",
        "Clinical decision support outputs and interpretability for predictions"
      ],
      link: "https://github.com/rishitha-1612/heart-disease-prediction"
    },
    {
      title: "AI First Minute",
      category: "AI & Machine Learning",
      subtitle: "Emergency First-Response Decision Engine",
      description: "Simulation-based AI evaluation system for emergency scenarios (cardiac arrest, trauma). Designed multi-dimensional scoring for safety, urgency, diagnosis, and stabilization.",
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
      title: "OpenEnv Reinforcement Learning",
      category: "AI & Machine Learning",
      subtitle: "Emergency First-Response RL Environment",
      description: "Deterministic OpenEnv-compatible environment for evaluating AI agents in emergency first-response decision scenarios with reproducible benchmarks.",
      tech: ["Python", "OpenAI Gym", "RL Tooling"],
      achievements: [
        "Environment design compatible with OpenEnv standards",
        "Deterministic scenarios to benchmark agent decision policies under emergency constraints",
        "Provides evaluation metrics and reproducible scenarios for RL agents"
      ],
      link: "https://github.com/rishitha-1612/OpenEnv-ReinforcementLearning"
    },
    {
      title: "TACOS",
      category: "AI & Machine Learning",
      subtitle: "Toxicity Analysis Comment Observation System",
      description: "Transformer-based toxic comment classification system for automated content moderation. Detects hate speech, threats, and abusive language with multi-label classification.",
      tech: ["Python", "Transformers", "Hugging Face", "NLP", "Machine Learning"],
      achievements: [
        "Fine-tuned transformer models to detect hate speech, threats, and abusive language",
        "Pipeline for preprocessing, training, and inference on comment datasets",
        "Enabled real-time moderation for online platforms"
      ],
      link: "https://github.com/rishitha-1612/TACOS-ToxicityAnalysis-Comment-Observation-System",
      demo: "https://huggingface.co/spaces/Venkat-023/TACOS"
    },
    {
      title: "Music Recommender",
      category: "AI & Machine Learning",
      subtitle: "Collaborative & Content-Based Recommendation System",
      description: "Music recommendation system using collaborative filtering, content-based modeling, and ML hybrid approaches with an evaluation pipeline for top-N recommendations.",
      tech: ["Python", "scikit-learn", "Pandas", "Recommendation Algorithms"],
      achievements: [
        "Recommender algorithms including collaborative filtering and content-based modeling",
        "Data preprocessing and evaluation of recommendation quality",
        "Inference pipeline to generate top-N recommendations for users/items"
      ],
      link: "https://github.com/rishitha-1612/Music-Recommender"
    },
    {
      title: "Mudra Recognition System",
      category: "AI & Machine Learning",
      subtitle: "Hand Gesture Recognition via Computer Vision",
      description: "Vision project for hand gesture (mudra) recognition with CNN-based image/video preprocessing, model training, and evaluation on gesture datasets.",
      tech: ["Jupyter Notebook", "Python", "OpenCV", "TensorFlow/PyTorch"],
      achievements: [
        "Image/video preprocessing for gesture detection and classification",
        "Model training and accuracy evaluation on gesture dataset",
        "Notebook demos showing predictions and sample runs"
      ],
      link: "https://github.com/rishitha-1612/Mudra-Recognition-System"
    },

    {
      title: "Voice-Based Parkinson's Detection",
      category: "Healthcare",
      subtitle: "Acoustic Feature Extraction & Diagnostic Engine",
      description: "ML model using 22 acoustic features (jitter, shimmer, pitch) to detect Parkinson's disease. Applied 11+ classification algorithms with GridSearchCV, PCA, and SMOTE.",
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
      title: "Mental Health Risk Assessment",
      category: "Healthcare",
      subtitle: "Explainable ML Early-Warning Framework",
      description: "Explainable ML framework to identify individuals at risk for mental health intervention using stacking ensemble learning and anomaly detection.",
      tech: ["Jupyter Notebook", "Python", "Ensemble ML", "SHAP", "Scikit-learn"],
      achievements: [
        "Psychological feature engineering and anomaly detection pipelines",
        "Stacking ensemble learning and explainability for model outputs",
        "Evaluation and potential early-warning alerting methodology"
      ],
      link: "https://github.com/rishitha-1612/Mental-Health-Risk-Assessment-System"
    },
    {
      title: "Eye Health Detection",
      category: "Healthcare",
      subtitle: "Ophthalmic Disease Classification System",
      description: "Computer vision ML project for detecting eye health diseases from images using CNN-based classification pipelines.",
      tech: ["Python", "OpenCV", "TensorFlow/PyTorch", "CNN"],
      achievements: [
        "Image preprocessing, model training (CNN), and disease classification pipelines",
        "Dataset handling and evaluation metrics for ophthalmology tasks",
        "End-to-end pipeline from image input to diagnostic output"
      ],
      link: "https://github.com/rishitha-1612/eye-health"
    },
    {
      title: "Genomic Toolbox",
      category: "Healthcare",
      subtitle: "DNA Analysis Platform",
      description: "Flask-based web app for DNA mutation analysis, protein translation, and disease prediction using the ClinVar dataset for disease mapping.",
      tech: ["Python Flask", "HTML/CSS", "Biopython", "JSON", "Vercel"],
      achievements: [
        "Implemented mutation detection, protein translation, and disease prediction",
        "Used ClinVar dataset for disease mapping",
        "Designed an interactive multi-page UI for biological workflows"
      ],
      link: "https://github.com/rishitha-1612/genomic_toolbox",
      demo: "https://genomic-toolbox.vercel.app"
    },
    {
      title: "Health Ledger",
      category: "Healthcare",
      subtitle: "Immutable Health Records & Audit Trail System",
      description: "TypeScript-based immutable ledger for health records with role-based access, audit logging, and secure record management for health data integrity.",
      tech: ["TypeScript", "Node.js", "Express"],
      achievements: [
        "Immutable ledger and audit trail for health records and transactions",
        "Role-based access and record management for health data integrity",
        "APIs for storing, retrieving records, and audit logging"
      ],
      link: "https://github.com/rishitha-1612/health-ledger"
    },

    {
      title: "Climate-Based Crop Recommender",
      category: "Agriculture",
      subtitle: "ML Crop & Yield Prediction System",
      description: "ML project to predict rainfall, assess drought risk, recommend optimal crops, and estimate yields for sustainable agriculture decisions.",
      tech: ["Jupyter Notebook", "Python", "scikit-learn", "Pandas", "Matplotlib"],
      achievements: [
        "Historical climate data modeling for rainfall and drought risk prediction",
        "Crop recommendation engine using soil/climate features and yield estimation models",
        "Demonstrations and evaluation notebooks for farming decisions"
      ],
      link: "https://github.com/rishitha-1612/climate-based-crop-recommender-"
    },
    {
      title: "SecureVault",
      category: "Cybersecurity",
      subtitle: "AI-Based Multi-Factor Secure Storage System",
      description: "Secure storage system with Password, Face Recognition, and OTP authentication. Real-time intruder detection with image capture, location tracking, and email alerts.",
      tech: ["React", "Tailwind CSS", "Flask", "OpenCV", "JWT", "PWA"],
      achievements: [
        "Real-time intruder detection with automatic image capture, location tracking, and email alerts",
        "Responsive dashboard with encrypted file vault and activity monitoring",
        "Backend APIs for authentication, file management, and security logging",
        "OpenCV-based face recognition for real-time identity verification",
        "PWA support for installable mobile and desktop usage"
      ],
      link: "https://github.com/rishitha-1612/SecureVault"
    },
    {
      title: "DocOps AI",
      category: "Developer Tools",
      subtitle: "AI-Powered Documentation Generator",
      description: "AI-powered documentation generator that fetches source from GitHub or pasted code, extracts code structure, and streams generated docs in real time.",
      tech: ["TypeScript", "Node.js", "Express", "Streaming LLM", "GitHub API"],
      achievements: [
        "Fetches source from GitHub or accepts pasted/uploaded code",
        "Extracts code structure and builds documentation-specific prompts",
        "Streams generated documentation back to user with real-time partial responses"
      ],
      link: "https://github.com/rishitha-1612/DocOps-AI"
    },
    {
      title: "CareerDNA",
      category: "Developer Tools",
      subtitle: "AI Resume Analyzer & Career Gap Engine",
      description: "AI system for resume skill extraction and gap analysis. Compares resumes with job descriptions using semantic embeddings and generates personalized learning paths.",
      tech: ["FastAPI", "spaCy", "Sentence Transformers", "React"],
      achievements: [
        "Compared resumes with job descriptions using semantic embeddings",
        "Generated personalized learning paths automatically",
        "Designed a readiness scoring system (0–100)"
      ],
      link: "https://github.com/rishitha-1612/CareerDNA"
    },
    {
      title: "SkillQuest",
      category: "Developer Tools",
      subtitle: "Interactive Skill Tracking & Learning Quests",
      description: "JavaScript frontend project for skill tracking, learning quests, and gamified progress management with achievements and a rewards system.",
      tech: ["JavaScript", "React", "Frontend"],
      achievements: [
        "Interactive UI for learning paths, skill leveling, and challenge management",
        "User progress tracking and achievements/rewards system",
        "Responsive design with local persistence and simple backend integration"
      ],
      link: "https://github.com/rishitha-1612/SkillQuest"
    },
    {
      title: "AI Merchant",
      category: "Finance",
      subtitle: "Billing & Sales Intelligence Platform",
      description: "POS system with AI-powered sales analytics, real-time dashboards for revenue/trends, and an AI chatbot for business insights using Gemini API.",
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
      title: "Financial Advisor & Expense Manager",
      category: "Finance",
      subtitle: "AI-Powered Personal Finance Agent",
      description: "AI-powered personal finance advisor with OCR-based receipt extraction, expense categorization, and personalized financial guidance.",
      tech: ["Python", "OCR", "LLM", "Streamlit", "Pandas"],
      achievements: [
        "OCR-based extraction for receipts and automated expense tracking",
        "AI agent providing personalized financial guidance and recommendations",
        "Expense categorization, analytics, and data-driven advice features"
      ],
      link: "https://github.com/rishitha-1612/Financial-Advisor-Expense-Manager-AI-Agent"
    },
    {
      title: "FoodBridge",
      category: "Sustainability",
      subtitle: "Surplus Food Redistribution Platform",
      description: "Platform connecting restaurants, NGOs, and volunteers to redistribute surplus food and combat hunger with real-time listing and fulfillment tracking.",
      tech: ["TypeScript", "Node.js", "Express"],
      achievements: [
        "Matching and coordination flows between donors, NGOs, and volunteers",
        "Real-time listing of available surplus food and fulfillment tracking",
        "Role-based UI for restaurants, NGOs, and volunteers with notifications"
      ],
      link: "https://github.com/rishitha-1612/FoodBridge"
    },
    {
      title: "EcoCycle",
      category: "Sustainability",
      subtitle: "Circular Economy Logistics Platform",
      description: "Full-stack logistics platform with user, rider, and admin portals. Real-time tracking, GPS validation, analytics dashboards, and eco-wallet system.",
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
      title: "MDSS",
      category: "Research",
      subtitle: "Multi-Dimensional Dialogue Summarization System",
      description: "Advanced NLP system for hierarchical dialogue summarization with speaker diarization, intent classification, and semantic graph-based grouping. Presented at ICCCDA'26.",
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
      title: "Insight Weaver",
      category: "Research",
      subtitle: "Scientific Knowledge Graph & Hypothesis Engine",
      description: "Scientific discovery engine that turns research papers into knowledge graphs, identifies cross-paper bridges and research gaps, and surfaces testable hypotheses.",
      tech: ["Python", "Gemma 4", "Knowledge Graph", "NLP", "NetworkX"],
      achievements: [
        "Ingests research papers and extracts entities/relations to build knowledge graphs",
        "Identifies cross-paper bridges and research gaps, surfaces testable hypotheses",
        "Uses Gemma 4 for scientific knowledge processing"
      ],
      link: "https://github.com/rishitha-1612/Insight-Weaver"
    }
  ],

  certifications: [
    {
      title: "MERN Stack Development Virtual Internship",
      issuer: "ANNAM.AI & Vicharanashala Lab",
      year: "Feb 2025",
      description: "Successfully completed a 2.5-month virtual internship focused on MERN Stack Development. Gained hands-on experience working with MongoDB, Express.js, React.js, Node.js, REST APIs, and Git to build scalable full-stack applications.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_mern-fullstackdevelopment-reactjs-activity-7492996701721624576-0wOJ"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      year: "2025",
      description: "Earned the Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification from Oracle University. Gained expertise in AI concepts, Oracle Cloud Infrastructure (OCI), and building intelligent, scalable, and secure cloud-based solutions.",
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
      title: "AI Tools and ChatGPT Workshop",
      issuer: "be10x",
      year: "2025",
      description: "Successfully completed the AI Tools and ChatGPT Workshop conducted by be10x, gaining practical experience in applying AI for productivity and workflow automation. Learned to leverage AI tools for rapid presentation creation, efficient data analysis, and accelerated coding and debugging tasks.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_artificialintelligence-chatgpt-techinnovation-activity-7386387609968820224-XgAp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfSMPgBQFQf4ReuwHe-2FGP17IWOR3UpAM"
    },
    {
      title: "Data Science with Python Training 2022",
      issuer: "Infosys Springboard",
      year: "Oct 2025",
      description: "Successfully completed the Data Science with Python Training 2022 course offered by Infosys Springboard. Gained practical knowledge in data analysis, Python programming, and applying data science techniques to solve analytical problems, building a strong foundation for data-driven applications.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_datascience-python-infosys-activity-7386394953087664129-j0nf"
    },
    {
      title: "Responsive Web Design Developer Certification",
      issuer: "freeCodeCamp",
      year: "2025",
      description: "Successfully earned the Responsive Web Design Developer Certification from freeCodeCamp through extensive hands-on learning and project-based practice. Developed proficiency in building responsive, accessible, and user-friendly web interfaces using modern HTML and CSS principles.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_responsivewebdesign-freecodecamp-webdevelopment-activity-7386396151496916992-De2N"
    },
    {
      title: "No Code AI Agent – n8n for Gmail Parsing and Automation",
      issuer: "Capabl / CSI",
      year: "Oct 2025",
      description: "Participated in the 'No Code AI Agent' industrial interaction session organized by Capabl in association with CSI. Gained practical experience in designing AI workflows and automating Gmail parsing using no-code tools, enhancing understanding of modern AI automation platforms.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_nocode-ai-automation-activity-7386398115114774528-M5SU"
    },
    {
      title: "Artificial Intelligence & Data Analytics Virtual Internship",
      issuer: "Green Skills (AICTE, Shell India & Edunet)",
      year: "Aug 2025",
      description: "Successfully completed a 4-week virtual internship under the Skills4Future program, focusing on Artificial Intelligence, Data Analytics, and Green Skills. Gained hands-on experience in AI-driven analytics, sustainable technology practices, and industry-oriented project development.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_green-skills-internship-by-aicte-shell-activity-7386403499099488256-_40f"
    }
  ],
  research: [
    {
      title: "MultitraitBERT: A BERT-Based Multi-Trait Essay Scoring System with SHAP and Attention Explainability",
      issuer: "IRJET",
      year: "Apr 2026",
      description: "Published a research paper on an AI-powered automated essay scoring system. Developed a BERT-based framework integrating SHAP and Attention Visualization to enhance interpretability and transparency, exploring key domains like NLP, XAI, and intelligent educational assessments.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_artificialintelligence-machinelearning-deeplearning-activity-7465827860763627520-yI1u"
    },
    {
      title: "Multi-Dimensional Dialogue Summarization System (MDSS)",
      issuer: "ICCCDA'26",
      year: "",
      description: "Presented a research paper titled 'Multi-Dimensional Dialogue Summarization System (MDSS): A Hierarchical Approach to Conversational Analysis' at the 2nd International Conference on Cognitive Computing and Data Analytics."
    }
  ],
  achievements: [
    {
      title: "3rd Place – AI-VERSE (Scale X) | KisaanKonnect",
      issuer: "DSATM",
      year: "Sep 2025",
      description: "Secured 3rd place at AI-VERSE (Scale X) hosted by DSATM for developing 'KisaanKonnect,' an AI-powered smart agriculture assistant. Built features including crop advisory, plant disease detection, market insights, and support for low-connectivity environments, gaining valuable experience in applied AI and problem-solving.",
      link: "https://www.linkedin.com/posts/akashhiremath99_ai-hackathon-agriculture-ugcPost-7443491825937735680-rbLY"
    }
  ],
  hackathons: [
    {
      title: "Google Gemma4 Hackathon – Insight Weaver",
      issuer: "Team AVIS",
      year: "Nov 2025",
      description: "Developed 'Insight Weaver,' an AI-powered scientific discovery copilot using Gemma 4B and E2B models. Built a retrieval-first reasoning pipeline with scientific entity extraction, knowledge graphs, and GraphRAG. Leveraged FastAPI, React, Ollama, ChromaDB, PyMuPDF, and SciSpaCy to create an intelligent research assistant.",
      link: "https://www.linkedin.com/posts/venkat-baba-yemineni-49a7612b4_google-gemma-gemma4-ugcPost-7462508909518303233-0cY9"
    },
    {
      title: "CareerDNA – ArtPark CodeForge Hackathon",
      issuer: "IISc Bangalore",
      year: "Oct 2025",
      description: "Developed 'CareerDNA', an AI-driven platform providing personalized career guidance based on users' skills and interests. Designed the solution to deliver structured recommendations over generic suggestions, and collaborated with a multidisciplinary team to build a functional prototype within the hackathon timeline.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_we-recently-worked-on-careerdna-as-part-of-activity-7446446533799112704-xPVr"
    },
    {
      title: "RIFT ’26 – 24-Hour Hackathon | Graph-Based Financial Crime Detection Engine",
      issuer: "PhysicsWallah",
      year: "Aug 2025",
      description: "Participated in the 24-hour RIFT ’26 Hackathon by PhysicsWallah, developing a Graph-Based Financial Crime Detection Engine to identify money-muling networks. Built a working prototype capable of analyzing transaction data to detect suspicious patterns through graph-based relationships, strengthening skills in rapid prototyping and debugging.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_hackathon-rift26-financialcrime-activity-7432677261469790208-8fB-"
    },
    {
      title: "IndiAignite: Prototyping AI Solutions for Atmanirbhar Bharat",
      issuer: "RV Institute of Technology and Management",
      year: "Feb 2026",
      description: "Received a Certificate of Participation at IndiAignite: Prototyping AI Solutions for Atmanirbhar Bharat, hosted by RV Institute of Technology and Management, Bengaluru. Enhanced practical knowledge in AI-driven problem solving, rapid prototyping, and technical presentations while collaborating in an innovation-focused environment.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_ai-innovation-atmanirbharbharat-activity-7432067514496503808-tBZ4"
    },
    {
      title: "6th Kharagpur Data Science Hackathon – Round 1",
      issuer: "IIT Kharagpur",
      year: "2025",
      description: "Successfully participated in Round 1 of the 6th Kharagpur Data Science Hackathon organized by the Kharagpur Data Analytics Group, IIT Kharagpur. Applied data science concepts to solve challenging problems in a national-level competitive environment, gaining valuable exposure to real-world workflows.",
      link: "https://www.linkedin.com/posts/rishitha-rasineni-16d2006_datascience-hackathon-iitkharagpur-activity-7432066755327385600-Ndaa"
    }
  ]
};
