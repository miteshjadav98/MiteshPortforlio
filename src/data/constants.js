import { Code2, Database, BrainCircuit, Cloud, Server, Terminal, Bot, Workflow, Layers } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Mitesh Jadav",
  role: "AI Engineer & Backend Developer",
  tagline: "Building AI-powered products & scalable backend systems",
  description: "Specializing in Node.js, FastAPI, RAG, chatbots, and Azure to create intelligent and high-performance applications.",
  email: "jadavmitesh.jd@gmail.com",
  phone: "+91-8156069327",
  location: "Gandhinagar",
  social: {
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
    leetcode: "https://leetcode.com/",
    scaler: "https://scaler.com/"
  }
};

export const PROJECTS = [
  {
    id: 1,
    title: "PDF Chatbot",
    description: "An intelligent platform enabling users to converse with PDF documents using RAG, LLMs, and vector search.",
    tech: ["FastAPI", "RAG", "Ollama API", "React"],
    demoUrl: "http://chatbot.miteklabs.tech",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Khatabook CRM",
    description: "A comprehensive CRM and financial management tool for tracking transactions and customer data. Features Redis caching for 40% faster responses, pagination, and secure JWT authentication.",
    tech: ["Node.js", "TypeScript", "Express.js", "MongoDB", "Redis"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "E-Commerce Application",
    description: "A microservices-based platform (4+ services) streamlining user management, product catalogs, and payments. Features RazorPay, OAuth 2.0, Elasticsearch, Redis caching, and a Kafka event-driven notification service.",
    tech: ["Java", "Spring Boot", "Microservices", "MySQL", "Kafka", "Elasticsearch", "Redis"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const SKILLS = [
  {
    category: "Backend Development",
    icon: Server,
    items: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "Java", "Python"]
  },
  {
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    items: ["RAG Pipelines", "LLMs (OpenAI, Ollama)", "Prompt Engineering", "LangChain", "Chatbots"]
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    items: ["MongoDB", "Azure Cosmos DB", "MySQL", "Redis", "Azure", "AWS"]
  },
  {
    category: "Architecture & Tools",
    icon: Workflow,
    items: ["Microservices", "REST API", "Git/GitHub", "CI/CD", "Docker", "Agile/Scrum"]
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    role: "Backend Engineer",
    duration: "Jun 2021 - Present",
    highlights: [
      "Boosted customer satisfaction by 30–40% via Live Chat and AI Chatbot solutions.",
      "Optimized a NestJS application architecture for improved maintainability.",
      "Integrated Azure Cosmos DB and Redis, reducing latency and improving responsiveness.",
      "Enhanced bot intelligence with LUIS, QnA Maker, and Nexthink for 50K+ users.",
      "Led development of a Python GenAI chatbot using FastAPI and LangChain."
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
