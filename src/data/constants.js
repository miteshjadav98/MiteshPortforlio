import { Code2, Database, BrainCircuit, Cloud, Server, Terminal, Bot, Workflow, Layers } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Mitesh Jadav",
  role: "AI Engineer & Backend Developer",
  tagline: "Building AI-powered products & scalable backend systems",
  description: "Specializing in Node.js, FastAPI, RAG, chatbots, Azure, Terraform, and CI/CD to create intelligent, scalable, and infrastructure-driven applications.",
  email: "jadavmitesh.jd@gmail.com",
  phone: "+91-8156069327",
  location: "Gandhinagar",
  social: {
    linkedin: "https://linkedin.com/in/miteshjadavd/",
    github: "https://github.com/miteshjadav98",
    leetcode: "https://leetcode.com/Macmitek98/",
    scaler: "https://www.scaler.com/academy/profile/c30bf1e7244b"
  }
};

export const PROJECTS = [
  {
    id: 1,
    title: "PDF Chatbot",
    description: "An intelligent platform enabling users to converse with PDF documents using RAG, LLMs, and vector search.",
    tech: ["FastAPI", "RAG", "Ollama API", "React"],
    demoUrl: "https://chatbot.miteklabs.tech",
    githubUrl: "https://github.com/miteshjadav98/PDFChatbot"
  },
  {
    id: 2,
    title: "Khatabook CRM",
    description: "A production-ready, multi-tenant SaaS application for shopkeepers to manage digital ledgers, inventory, and customers. Built with Next.js and NestJS, featuring secure data isolation, RBAC, atomic transactions, and a unique 'Shop Code' login system.",
    tech: ["Next.js (App Router)", "NestJS", "PostgreSQL", "Prisma ORM", "Supabase", "Nginx", "PM2", "DigitalOcean"],
    demoUrl: "https://app.miteklabs.tech",
    githubUrl: "https://github.com/miteshjadav98/KhataBookApp"
  },
  {
    id: 3,
    title: "E-Commerce Application",
    description: "A microservices-based platform (4+ services) streamlining user management, product catalogs, and payments. Features RazorPay, OAuth 2.0, Elasticsearch, Redis caching, and a Kafka event-driven notification service.",
    tech: ["Java", "Spring Boot", "Microservices", "MySQL", "Kafka", "Elasticsearch", "Redis"],
    demoUrl: "#",
    githubUrl: "https://github.com/miteshjadav98/"
  }
];

export const SKILLS = [
  {
    category: "Backend Development",
    icon: Server,
    items: ["Node.js", "NestJS", "Express.js", "FastAPI", "Spring Boot", "Java", "Python", "TypeScript"]
  },
  {
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    items: ["RAG Pipelines", "LLMs (OpenAI, Ollama)", "Prompt Engineering", "LangChain", "Chatbots", "LUIS", "QnA Maker"]
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    items: ["MongoDB", "Azure Cosmos DB", "MySQL", "Redis", "Azure", "AWS", "Elasticsearch"]
  },
  {
    category: "Infrastructure & DevOps",
    icon: Cloud,
    items: ["Terraform", "Azure", "Infrastructure as Code", "GitHub Actions", "CI/CD", "Docker", "Git/GitHub"]
  },
  {
    category: "Architecture & Integration",
    icon: Workflow,
    items: ["Microservices", "REST API", "Event-Driven Architecture", "Kafka", "ServiceNow", "BMC Remedy", "Genesys Live Chat", "Nexthink"]
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    role: "Backend Engineer",
    duration: "Jun 2021 - Present",
    highlights: [
      "Collaborated with Product Owners to boost customer satisfaction by 30–40% through Live Chat and AI Chatbot solutions.",
      "Contributed to NestJS (Node.js + TypeScript) application architecture, optimizing code modules and aligning with enterprise standards.",
      "Integrated Azure Cosmos DB for chat session and transcript storage, and Redis for request queuing and caching, improving system responsiveness and reducing latency.",
      "Enhanced bot intelligence and user experience by integrating LUIS, QnA Maker, and Nexthink for proactive issue detection and self-healing for 50K+ users.",
      "Delivered seamless Genesys Live Chat integration, enabling agents to manage multiple concurrent conversations and reducing average resolution time by 70%.",
      "Developed APIs to track key performance indicators (KPIs), leveraging data analytics to provide actionable business insights.",
      "Streamlined IT service operations by integrating ServiceNow and BMC Remedy, ensuring adherence to ITIL best practices.",
      "Leading development of a Python-based Generative AI chatbot using FastAPI and LangChain tool agent framework for enterprise systems.",
      "Built infrastructure as code using Terraform in Azure to provision and manage cloud resources reliably and consistently.",
      "Set up CI/CD pipelines using GitHub Actions for continuous integration and deployment, automating testing and release workflows."
    ]
  }
];

export const EDUCATION = [
  {
    id: 1,
    institution: "Adani Institute of Infrastructure Engineering",
    degree: "BE/B.Tech in Information and Communication Technology",
    year: "2021",
    score: "9.45 CGPA"
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Academic Excellence",
    description: "BE/B.Tech in Information and Communication Technology",
    achievement: "9.45 CGPA",
    year: "2021"
  },
  {
    id: 2,
    title: "TCS On the Spot/Team Award",
    description: "Recognized for outstanding contributions and exceptional performance",
    achievement: "Multiple Awards",
    year: "2022, 2024, 2025"
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    description: "Industry-recognized cloud certification",
    achievement: "AWS Certification",
    year: "Certified"
  }
];
