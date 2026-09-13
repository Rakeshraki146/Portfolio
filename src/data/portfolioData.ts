export interface ProjectItem {
  id: string;
  title: string;
  date: string;
  technologies: string[];
  description: string;
  keyFeatures: string[];
  mlFeature?: {
    summary: string;
    inputs: string[];
    outputs: string[];
  };
  deployment?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  overview: string;
  problemStatement: string;
  solution: string;
  database?: string;
  whatILearned: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  certificateUrl: string;
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  date: string;
  grade: string;
  gradeType: string;
  details?: string;
}

export const portfolioData = {
  personal: {
    name: "B Rakesh",
    role: "Computer Science & Engineering Student",
    secondaryLine: "AI & Machine Learning | Python | Software Development",
    tagline: "Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning, software development, and solving real-world problems through technology.",
    email: "rakeshboya8@gmail.com",
    mobile: "+91 9704378386",
    linkedIn: "www.linkedin.com/in/b-rakesh-060044322",
    linkedInUrl: "https://www.linkedin.com/in/b-rakesh-060044322",
    gitHub: "https://github.com/Rakeshraki146",
    gitHubUsername: "Rakeshraki146",
    resumeUrl: "/B_Rakesh_Resume.pdf",
    profilePhoto: "/profile.jpg",
  },

  about: {
    heading: "About Me",
    paragraphs: [
      "I am a Computer Science and Engineering student at Lovely Professional University with an interest in Artificial Intelligence, Machine Learning, software development, and problem solving.",
      "I enjoy building practical applications and exploring how programming, databases, algorithms, and machine learning can be combined to solve real-world problems.",
      "My projects include an Operating System deadlock detection and recovery toolkit and an AI-based property marketplace with machine-learning-based property valuation."
    ],
    highlightCards: [
      {
        title: "AI & Machine Learning",
        description: "Designing data-driven predictive systems and implementing Scikit-learn regressors for real-world estimation."
      },
      {
        title: "Software Development",
        description: "Crafting end-to-end full stack workflows, modular C architectures, and cloud database integrations."
      },
      {
        title: "Problem Solving",
        description: "Applying robust data structures, algorithmic concurrency, and deadlock avoidance mechanisms."
      }
    ]
  },

  skills: [
    {
      category: "PROGRAMMING LANGUAGES",
      description: "Core languages for systems, scripting, and web development",
      skills: ["C", "C++", "Python", "Java", "HTML", "CSS"]
    },
    {
      category: "DATABASES & QUERYING",
      description: "Relational persistence and distributed cloud databases",
      skills: ["MySQL", "SQL", "TiDB Cloud"]
    },
    {
      category: "LIBRARIES & FRAMEWORKS",
      description: "Data analysis, machine learning algorithms, and interactive UI",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"]
    },
    {
      category: "TOOLS & PLATFORMS",
      description: "Version control and development environments",
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      category: "SOFT SKILLS",
      description: "Essential professional and collaborative strengths",
      skills: ["Problem-Solving", "Team Player", "Adaptability"]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "indian-ai-property-marketplace",
      title: "Indian AI Property Marketplace",
      date: "September 2026",
      technologies: ["Python", "Streamlit", "Scikit-learn", "MySQL", "TiDB Cloud", "Machine Learning", "Git", "GitHub"],
      description: "An owner-direct real-estate marketplace that enables buyers and sellers to register, list, search, manage, and save properties without intermediaries.",
      keyFeatures: [
        "Owner and buyer registration",
        "Property listing",
        "Property management",
        "Property search",
        "Search and filtering",
        "Favorites",
        "Image uploads",
        "Sold-property tracking",
        "Limited owner-contact access",
        "Role-based authentication",
        "Persistent database storage"
      ],
      mlFeature: {
        summary: "Built an ML-based property valuation system using Scikit-learn Extra Trees Regressor.",
        inputs: ["BHK", "Property type", "Location", "Area"],
        outputs: ["Estimated property price", "Estimated price per sq.ft."]
      },
      deployment: "Deployed on Streamlit Community Cloud.",
      githubUrl: "https://github.com/Rakeshraki146/indian-ai-property-marketplace",
      liveDemoUrl: undefined,
      overview: "An owner-direct real-estate marketplace engineered with Python and Streamlit to connect buyers and sellers directly without intermediaries. Integrates an intelligent machine learning valuation pipeline to calculate accurate property price estimates based on real market parameters.",
      problemStatement: "Traditional real estate portals create unnecessary friction through intermediaries, broker commissions, and untransparent price tags, leaving both buyers and sellers with unfair pricing and fragmented communication.",
      solution: "Engineered a streamlined, role-based direct platform combining an interactive Streamlit UI, secure MySQL/TiDB Cloud persistence, and a predictive Extra Trees Regressor model to deliver instant valuation estimates.",
      database: "Integrated MySQL/TiDB Cloud for persistent storage of user credentials, property attributes, uploaded assets, and favorites.",
      whatILearned: "Learned end-to-end integration of machine learning regressors into interactive web apps, handling role-based auth, cloud database configuration with TiDB Cloud, and maintaining clean version control with Git and GitHub."
    },
    {
      id: "deadlock-detection-recovery-toolkit",
      title: "Deadlock Detection & Recovery Toolkit",
      date: "November 2025",
      technologies: ["C", "Operating Systems", "Algorithms", "HTML", "Git", "GitHub"],
      description: "An Operating System deadlock toolkit implemented in C to demonstrate deadlock detection, recovery, resource allocation, and deadlock avoidance concepts.",
      keyFeatures: [
        "Deadlock detection",
        "Deadlock recovery",
        "Banker's Algorithm",
        "Safe resource allocation",
        "Resource Allocation Graph (RAG)",
        "Resource dependency analysis",
        "Modular C programs",
        "Test cases",
        "Web-based project interface",
        "Project documentation"
      ],
      deployment: "Structured modular C programs with an HTML project interface and documentation.",
      githubUrl: "https://github.com/Rakeshraki146/deadlock-toolkit-c",
      liveDemoUrl: undefined,
      overview: "An Operating System toolkit implemented in C that models and resolves resource contention problems in concurrent systems. Demonstrates theoretical operating system principles including safety check algorithms, cycle detection, and resource preemption.",
      problemStatement: "In concurrent computing, unmonitored multiple processes competing for finite non-shareable resources frequently encounter circular-wait conditions leading to system deadlocks.",
      solution: "Developed structured, modular C programs implementing the Banker's Algorithm for safe resource allocation and state avoidance, alongside Resource Allocation Graph (RAG) dependency analysis for real-time deadlock detection and recovery.",
      database: "In-memory matrices (Allocation, Max, Available, Need) and graph adjacency representations.",
      whatILearned: "Strengthened core Operating System concepts: process synchronization, mutual exclusion, Banker's safety state verification, matrix manipulation in C, and building an accessible HTML project interface."
    }
  ] as ProjectItem[],

  training: {
    title: "Basics of Data Structures and Algorithms",
    organization: "Centre for Professional Enhancement, Lovely Professional University",
    date: "July 2026",
    achievement: "A Grade",
    description: "Completed a skill development course covering the basics of Data Structures and Algorithms and achieved an A Grade based on performance during the training.",
    topics: [
      "Arrays, Strings & Pointers",
      "Linked Lists, Stacks & Queues",
      "Trees & Graph Foundations",
      "Time and Space Complexity Analysis",
      "Searching & Sorting Algorithms",
      "Practical Problem Solving & Assessment"
    ]
  },

  certificates: [
    {
      id: "cert-1",
      title: "C++",
      issuer: "Infosys Springboard",
      date: "August 2025",
      certificateUrl: "https://www.linkedin.com/in/b-rakesh-060044322/details/certifications/"
    },
    {
      id: "cert-2",
      title: "Artificial Intelligence Essentials",
      issuer: "Certification Program",
      date: "September 2026",
      certificateUrl: "https://www.linkedin.com/in/b-rakesh-060044322/details/certifications/"
    },
    {
      id: "cert-3",
      title: "React.js",
      issuer: "Tech Veda",
      date: "March 2025",
      certificateUrl: "https://www.linkedin.com/in/b-rakesh-060044322/details/certifications/"
    },
    {
      id: "cert-4",
      title: "Data Management System",
      issuer: "Infosys Springboard",
      date: "August 2026",
      certificateUrl: "https://www.linkedin.com/in/b-rakesh-060044322/details/certifications/"
    }
  ] as CertificateItem[],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      date: "August 2024 – Present",
      grade: "6.32",
      gradeType: "CGPA",
      details: "Pursuing core curriculum in Computer Science, Artificial Intelligence, Machine Learning, Data Structures, Operating Systems, and Database Management."
    },
    {
      degree: "Intermediate",
      field: "PCM",
      institution: "Prathibha Junior College",
      location: "Mahabubnagar, Telangana",
      date: "March 2022 – May 2024",
      grade: "98%",
      gradeType: "Percentage",
      details: "Completed higher secondary education in Physics, Chemistry, and Mathematics with exceptional academic distinction."
    }
  ] as EducationItem[],

  // Displayed strictly without assumptions per prompt instructions:
  // "Also display: Percentage: 100% (Do not assume what the 100% value refers to if the resume does not specify it.)"
  additionalAcademicHighlight: {
    metric: "100%",
    label: "Percentage: 100%",
    note: "Official Academic Record Highlight"
  },

  resume: {
    heading: "Want to know more about my skills and projects?",
    description: "View my complete resume for my education, technical skills, projects, training, and certifications.",
    resumeUrl: "/B_Rakesh_Resume.pdf"
  },

  githubSection: {
    heading: "Explore My Code",
    description: "Check out my projects and source code on GitHub.",
    buttonText: "Visit GitHub",
    url: "https://github.com/Rakeshraki146"
  },

  contact: {
    heading: "Let's Connect",
    description: "I'm open to learning opportunities, collaborations, internships, and interesting software and AI/ML projects.",
    email: "rakeshboya8@gmail.com",
    mobile: "+91 9704378386",
    linkedIn: "www.linkedin.com/in/b-rakesh-060044322",
    linkedInUrl: "https://www.linkedin.com/in/b-rakesh-060044322",
    gitHub: "https://github.com/Rakeshraki146"
  },

  footer: {
    name: "B Rakesh",
    role: "Computer Science & Engineering Student",
    secondaryLine: "AI & Machine Learning | Python | Software Development",
    copyright: "© 2026 B Rakesh. All rights reserved."
  }
};
