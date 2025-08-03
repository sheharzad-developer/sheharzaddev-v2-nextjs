import PagesMetaHead from "../../components/PagesMetaHead";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ChatSmart AI",
    img: "/images/ChatSmart-AI.png",
    link: "https://github.com/sheharzad-developer/chatsmart-ai",
    description: "Enterprise AI Document Intelligence Platform with Advanced RAG technology using Google Gemini 1.5",
    technologies: ["Python", "Streamlit", "Google AI", "LangChain", "Machine Learning", "RAG", "FAISS", "HuggingFace"]
  },
  {
    title: "Card Click and Play",
    img: "/images/Card-and-Click:Play.png",
    link: "https://sheharzad-developer.github.io/Card-Click-and-Play/",
    description: "Interactive superhero card game with dynamic gameplay and engaging user interface",
    technologies: ["HTML5", "CSS3", "JavaScript", "Game Development", "DOM Manipulation", "Responsive Design"]
  },
  {
    title: "Exploding Text on Scroll",
    img: "/images/WebPage.png",
    link: "https://sheharzad-developer.github.io/sheharzad-explode-text-on-scroll-matterjs/",
    description: "Creative text animation effects using Matter.js physics engine with smooth scroll interactions",
    technologies: ["JavaScript", "Matter.js", "CSS3", "Animation", "Physics Engine", "Scroll Effects"]
  },
  {
    title: "Netsol Website",
    img: "/images/Netsoltech.png",
    link: "https://netsoltech.com/",
    description: "Professional corporate website with modern design and optimized user experience",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Corporate Web", "UI/UX", "NuxtJS"]
  },
  {
    id: 4,
    title: "Dental Syndicate",
    subtitle: "Family Dental Care Website",
    description: "A spectacular, family-focused dental clinic website featuring revolutionary glassmorphism design, advanced animations, and comprehensive appointment booking with SMS/WhatsApp notifications.",
    img: "/projects/developer-dark.png",
    technologies: [
      "Python Flask",
      "HTML5",
      "CSS3 (Glassmorphism)",
      "JavaScript",
      "SVG Design",
      "Vercel",
      "SMS API",
      "WhatsApp API"
    ],
    features: [
      "Revolutionary glassmorphism contact page with floating particles",
      "Family-centered custom SVG logo design",
      "Real-time appointment booking system",
      "SMS/WhatsApp notification integration",
      "Advanced CSS animations and backdrop blur effects",
      "Responsive mobile-first design"
    ],
    link: "https://dental-syndicate.vercel.app/",
    githubUrl: "https://github.com/sheharzad-developer/dental-syndicate",
    category: "Healthcare",
    status: "completed",
    year: "2025"
  }
];

function index() {
  return (
    <>
      <style jsx>{`
      .glassmorphism {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0 0px 16px 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
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
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 12px;
          color: white;
          transition: all 0.2s ease;
          font-weight: 500;
        }
        
        .tech-badge:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        
        .glass-button {
          background: rgba(96, 165, 250, 0.2);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          color: white;
          transition: all 0.3s ease;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .glass-button:hover {
          background: rgba(96, 165, 250, 0.3);
          transform: scale(1.05);
          box-shadow: 0 6px 30px rgba(96, 165, 250, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .glass-text {
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .glass-description {
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
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default index;
