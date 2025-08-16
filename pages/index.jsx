import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SkillsProgressBar from '../components/about/SkillsProgressBar';
import SkillsProgressBarGrid from '../components/about/SkillsProgressBarGrid';
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import skillsAnimation from "../public/lottie/SkillsAnimation.json";

const projects = [
  {
    id: 1,
    title: "ChatSmart AI",
    img: "/images/ChatSmart-AI.png",
    link: "https://github.com/sheharzad-developer/chatsmart-ai",
    description: "Enterprise AI platform that transforms document processing from hours to minutes. Built with Google Gemini 1.5, it helps businesses extract insights from complex documents with 95% accuracy.",
    technologies: ["Python", "Streamlit", "Google AI", "LangChain", "Machine Learning", "RAG", "FAISS", "HuggingFace"],
    category: "AI/ML",
    status: "completed",
    year: "2024"
  },
  {
    id: 2,
    title: "Card Click and Play",
    img: "/images/Card-and-Click:Play.png",
    link: "https://sheharzad-developer.github.io/Card-Click-and-Play/",
    description: "Interactive superhero card game that keeps players engaged for 15+ minutes on average. Features dynamic gameplay mechanics and smooth animations that create an addictive user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Game Development", "DOM Manipulation", "Responsive Design"],
    category: "Game Development",
    status: "completed",
    year: "2024"
  },
  {
    id: 3,
    title: "Exploding Text on Scroll",
    img: "/images/WebPage.png",
    link: "https://sheharzad-developer.github.io/sheharzad-explode-text-on-scroll-matterjs/",
    description: "Creative text animation that uses physics to create engaging scroll experiences. Demonstrates advanced JavaScript skills and creative problem-solving in web animations.",
    technologies: ["JavaScript", "Matter.js", "CSS3", "Animation", "Physics Engine", "Scroll Effects"],
    category: "Animation",
    status: "completed",
    year: "2024"
  },
  {
    id: 4,
    title: "Netsol Website",
    img: "/images/Netsoltech.png",
    link: "https://netsoltech.com/",
    description: "Professional corporate website that improved client engagement by 40%. Features modern design principles and optimized user experience for better conversion rates.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Corporate Web", "UI/UX", "NuxtJS"],
    category: "Corporate",
    status: "completed",
    year: "2024"
  },
  {
    id: 5,
    title: "Dental Syndicate",
    img: "/projects/developer-dark.png",
    link: "https://dental-syndicate.vercel.app/",
    description: "Revolutionary dental clinic website featuring glassmorphism design and automated appointment booking. Reduced booking time from 5 minutes to 30 seconds with SMS/WhatsApp notifications.",
    technologies: ["Python Flask", "HTML5", "CSS3 (Glassmorphism)", "JavaScript", "SVG Design", "Vercel", "SMS API", "WhatsApp API"],
    category: "Healthcare",
    status: "completed",
    year: "2025"
  }
];

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Sheharzad" />

      <AppBanner />

      {/* <div className="my-8">
        <SkillsProgressBarGrid />
      </div> */}

      <div className="flex flex-col lg:flex-row gap-8 items-center my-8">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="100"
        >
        </div>

      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          height: 500px;
          display: flex;
          flex-direction: column;
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mt-10 mb-4">Featured Projects</h2>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 sm:mt-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
            className="glass-card overflow-hidden"
          >
            <div className="image-container w-full h-56 relative flex-shrink-0">
              <Image
                src={project.img}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                priority={idx === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col glassmorphism">
              <h3 className="text-xl font-bold glass-text mb-3 flex-shrink-0">{project.title}</h3>
              <p className="text-sm glass-description mb-4 flex-1 leading-relaxed line-clamp-3">{project.description}</p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
                {project.technologies.slice(0, 3).map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="tech-badge px-3 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-badge px-3 py-1 text-xs rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center flex-shrink-0">
                <div className="flex flex-col">
                  <span className="text-xs glass-description font-medium">{project.category} • {project.year}</span>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Live Demo</span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center justify-center px-6 py-3 rounded-lg group"
                >
                  <span>View Project</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 sm:mt-15 flex justify-center">
        <div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
          <Link href="/projects" aria-label="More Projects" passHref>
            <Button title="View All Projects" />
          </Link>
        </div>
      </div>
    </div>
  );
}
