import PagesMetaHead from "../../components/PagesMetaHead";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Apartment Design Tool",
    subtitle: "Interactive Floor Plan & 3D Visualization Platform",
    img: "/images/Apartment-Planner.png",
    link: "https://apartment-design-tool.vercel.app/",
    githubUrl: "https://github.com/sheharzad-developer/apartment-design-tool",
    description: "A comprehensive apartment design platform that allows users to create stunning floor plans, visualize designs in 3D, and bring apartment ideas to life. Features an intuitive planning tool with AI-powered auto-generation capabilities for efficient space planning and design visualization.",
    technologies: [
      "React.js",
      "Three.js",
      "WebGL",
      "Canvas API",
      "AI/ML",
      "3D Rendering",
      "Floor Plan Editor",
      "Real-time Visualization",
      "Auto Generation",
      "Responsive Design"
    ],
    features: [
      "Interactive floor plan editor with drag-and-drop functionality",
      "Real-time 3D visualization with walk-through views",
      "AI-powered auto-generation of floor plans based on requirements",
      "Intuitive user interface for easy design creation",
      "Professional-grade rendering engine for realistic visualizations",
      "Export capabilities for floor plans and 3D models",
      "Collaborative design features for team projects",
      "Mobile-responsive design for on-the-go planning"
    ],
    category: "Design Tools",
    status: "completed",
    year: "2024"
  },
  {
    id: 2,
    title: "ChatSmart AI",
    img: "/images/ChatSmart-AI.png",
    link: "https://github.com/sheharzad-developer/chatsmart-ai",
    description: "Enterprise AI Document Intelligence Platform with Advanced RAG technology using Google Gemini 1.5. The platform features a modern, responsive design with smooth animations and interactive elements. ",
    technologies: ["Python", "Streamlit", "Google AI", "LangChain", "Machine Learning", "RAG", "FAISS", "HuggingFace", "Google Gemini 1.5"],
    category: "AI/ML",
    status: "completed",
    year: "2024"
  },
  {
    id: 3,
    title: "Card Click and Play",
    img: "/images/Card-and-Click:Play.png",
    link: "https://sheharzad-developer.github.io/Card-Click-and-Play/",
    description: "Interactive superhero card game with dynamic gameplay and engaging user interface. The game features a modern, responsive design with smooth animations and interactive elements. ",
    technologies: ["HTML5", "CSS3", "JavaScript", "Game Development", "DOM Manipulation", "Responsive Design", "Game Mechanics"],
    category: "Game Development",
    status: "completed",
    year: "2024"
  },
  {
    id: 4,
    title: "Exploding Text on Scroll",
    img: "/images/WebPage.png",
    link: "https://sheharzad-developer.github.io/sheharzad-explode-text-on-scroll-matterjs/",
    description: "Creative text animation effects using Matter.js physics engine with smooth scroll interactions",
    technologies: ["JavaScript", "Matter.js", "CSS3", "Animation", "Physics Engine", "Scroll Effects"],
    category: "Animation",
    status: "completed",
    year: "2024"
  },
  {
    id: 5,
    title: "Netsol Website",
    img: "/images/Netsoltech.png",
    link: "https://netsoltech.com/",
    description: "Professional corporate website with modern design and optimized user experience",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Corporate Web", "UI/UX", "NuxtJS"],
    category: "Corporate",
    status: "completed",
    year: "2024"
  },
  {
    id: 6,
    title: "Dental Syndicate",
    subtitle: "Family Dental Care Website",
    description: "A spectacular, family-focused dental clinic website featuring revolutionary glassmorphism design, advanced animations, and comprehensive appointment booking with SMS/WhatsApp notifications. The website includes a contact page with floating particles, a family-centered custom SVG logo design, and a real-time appointment booking system with SMS/WhatsApp notification integration.",
    img: "/projects/developer-dark.png",
    technologies: [
      "Python Flask",
      "HTML5",
      "CSS3 (Glassmorphism)",
      "JavaScript",
      "SVG Design",
      "Vercel",
      "SMS API",
      "WhatsApp API",
      "NuxtJS",
    ],
    features: [
      "Revolutionary glassmorphism contact page with floating particles",
      "Family-centered custom SVG logo design",
      "Real-time appointment booking system",
      "SMS/WhatsApp notification integration",
      "Advanced CSS animations and backdrop blur effects",
      "Responsive mobile-first design",
      
    ],
    link: "https://dental-syndicate.vercel.app/",
    githubUrl: "https://github.com/sheharzad-developer/dental-syndicate",
    category: "Healthcare",
    status: "completed",
    year: "2025"
  },
  {
    id: 7,
    title: "Daggys Cafe",
    subtitle: "Macro-Counted Meal Delivery",
    description: "A modern food delivery platform specializing in delicious, macro-counted meals delivered right to your doorstep. Features detailed nutritional information for every item including calories, protein, carbs, and fats to help customers fuel their body the right way. Includes a macro-counted meal delivery feature for healthier choices.",
    img: "/projects/daggys-cafe.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Radix UI",
      "Supabase",
      "Stripe",
      "Socket.io",
      "Google Genkit",
      "Turbopack",
      "Class Variance Authority",
      "Next Auth",
    ],
    features: [
      "Comprehensive menu with detailed macro nutritional information, calorie/protein/carbs/fats breakdown",
      "Modern responsive UI optimized for food delivery experience",
      "Health-conscious meal options for all dietary preferences",
      "User-friendly interface for easy navigation and ordering",
      "Secure payment gateway integration for safe transactions",
      "Real-time order tracking and notification system",
      "Customer feedback system for continuous improvement",
      "Responsive design for seamless experience on all devices",
      "Macro-counted meal delivery for healthier choices",
    ],
    link: "https://daggys-cafe.vercel.app/",
    githubUrl: "https://github.com/sheharzad-developer/daggys-cafe",
    category: "Healthcare",
    status: "completed",
    year: "2025"
  },
  {
    "id": 7,
    "title": "AI Chatbot Platform",
    "subtitle": "Multi-Tenant Tool-Aware Chatbot",
    "description": "A sophisticated AI chatbot platform with multi-agent support, featuring Google Gemini, Groq, DeepSeek, and Google AI integration. Built with FastAPI backend and modern web interface, deployed on Vercel with comprehensive tool integration and tenant isolation capabilities.",
    "img": "/projects/chatbot2025.png",
    "technologies": [
      "FastAPI",
      "Python",
      "JavaScript",
      "HTML/CSS",
      "Google Generative AI",
      "Groq API",
      "DeepSeek API",
      "LangChain",
      "MongoDB",
      "Vercel",
      "Docker",
      "Pydantic",
      "Uvicorn",
      "HTTPX",
      "Langfuse"
    ],
    "features": [
      "Multi-agent AI support (Google Gemini, Groq, DeepSeek, Google AI)",
      "Tool-aware agents with MCP (Model Context Protocol) integration",
      "Multi-tenant architecture with secure tenant isolation",
      "Real-time chat interface with markdown support",
      "RAG (Retrieval-Augmented Generation) document system",
      "Comprehensive chat history and session management",
      "RESTful API with FastAPI and automatic documentation",
      "Responsive web interface optimized for all devices",
      "Environment-aware deployment (local and cloud)",
      "Advanced error handling and monitoring with Langfuse",
      "Serverless deployment optimized for Vercel",
      "Security features with API key encryption and tenant separation"
    ],
    "link": "https://github.com/sheharzad-developer/Chatbot_Internship",
    "githubUrl": "https://github.com/sheharzad-developer/Chatbot_Internship",
    "category": "AI/Machine Learning",
    "status": "completed",
    "year": "2025"
  }
];

function index() {
  return (
    <>
      <style jsx>{`
      .glassmorphism {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0 0px 16px 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.dark .glassmorphism {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
        .glass-card {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-8px);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        
        .tech-badge {
          background: rgba(59, 130, 246, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          color: #1e40af;
          transition: all 0.2s ease;
          font-weight: 500;
        }
        
        .dark .tech-badge {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: white;
        }
        
        .tech-badge:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: scale(1.05);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        
        .dark .tech-badge:hover {
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        
        .glass-button {
          background: rgba(59, 130, 246, 0.2);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          color: #1e40af;
          transition: all 0.3s ease;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .dark .glass-button {
          background: rgba(96, 165, 250, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
        }
        
        .glass-button:hover {
          background: rgba(59, 130, 246, 0.3);
          transform: scale(1.05);
          box-shadow: 0 6px 30px rgba(59, 130, 246, 0.3);
          border: 1px solid rgba(59, 130, 246, 0.5);
        }
        
        .dark .glass-button:hover {
          background: rgba(96, 165, 250, 0.3);
          box-shadow: 0 6px 30px rgba(96, 165, 250, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .glass-text {
          color: #1f2937;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .dark .glass-text {
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .glass-description {
          color: #4b5563;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .dark .glass-description {
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .image-container {
          border-radius: 16px 16px 0 0;
          overflow: hidden;
        }
        
        .image-container img {
          transition: transform 0.5s ease;
        }
        
        .glass-card:hover .image-container img {
          transform: scale(1.05);
        }
      `}</style>

      <div className="container mx-auto px-4">
        <PagesMetaHead title="Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6 sm:mt-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden"
            >
              <div className="image-container w-full h-56">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col glassmorphism">
                <h3 className="text-xl font-bold glass-text mb-3">{project.title}</h3>

                <p className="text-sm glass-description mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="tech-badge px-3 py-1 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center justify-center px-6 py-3 rounded-lg"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default index;
