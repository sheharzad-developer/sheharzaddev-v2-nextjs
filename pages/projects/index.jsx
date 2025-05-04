import PagesMetaHead from "../../components/PagesMetaHead";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Card Click and Play",
    img: "/images/Card-and-Click:Play.png",
    link: "https://sheharzad-developer.github.io/Card-Click-and-Play/",
    // description: "Interactive card game project. Click to play!",
  },
  {
    title: "Exploding Text on Scroll",
    img: "/images/WebPage.png",
    link: "https://sheharzad-developer.github.io/sheharzad-explode-text-on-scroll-matterjs/",
    // description: "Interactive card game project. Click to play!",
  },
  {
    title: "Netsol Website",
    img: "/images/Netsoltech.png",
    link: "https://netsoltech.com/",
    // description: "Interactive card game project. Click to play!",
  },
];

function index() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 sm:mt-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="w-full h-56 mb-3 rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              {project.title}
            </a>
            <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default index;