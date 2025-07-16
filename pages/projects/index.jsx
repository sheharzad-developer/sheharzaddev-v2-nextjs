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
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Corporate Web", "UI/UX"]
  },
];

function index() {
  return (
    <>
      <style jsx>{`
        .glassmorphism-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 2rem 0;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
        }
        
        .tech-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          transition: all 0.2s ease;
        }
        
        .tech-badge:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }
        
        .glass-button {
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          transition: all 0.3s ease;
        }
        
        .glass-button:hover {
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.5), rgba(59, 130, 246, 0.5));
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(96, 165, 250, 0.4);
        }
        
        .glass-text {
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .glass-description {
          color: rgba(255, 255, 255, 0.9);
        }
      `}</style>
      
      <div className="glassmorphism-bg">
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
                <div className="w-full h-56 overflow-hidden rounded-t-[20px]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold glass-text mb-3">{project.title}</h3>
                  
                  <p className="text-sm glass-description mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="tech-badge px-3 py-1 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
