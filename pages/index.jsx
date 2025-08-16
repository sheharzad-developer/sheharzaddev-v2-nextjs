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
    description: "Enterprise AI Document Intelligence Platform with Advanced RAG technology using Google Gemini 1.5",
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
    description: "Interactive superhero card game with dynamic gameplay and engaging user interface",
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
    description: "Creative text animation effects using Matter.js physics engine with smooth scroll interactions",
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
    description: "Professional corporate website with modern design and optimized user experience",
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
    description: "A spectacular, family-focused dental clinic website featuring revolutionary glassmorphism design, advanced animations, and comprehensive appointment booking with SMS/WhatsApp notifications.",
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

      <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mt-10 mb-4">Featured Projects</h2>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 sm:mt-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-48 relative">
              <Image
                src={project.img}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                priority={idx === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">{project.category} • {project.year}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  View Project →
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
