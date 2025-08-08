import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { TbBrain, TbMessageChatbot } from "react-icons/tb";

const techStack = [
  { name: "React", category: "Frontend", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node.js", category: "Backend", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", category: "Backend", icon: <FaPython className="text-yellow-400" /> },
  { name: "Tailwind", category: "Frontend", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="text-blue-500" /> },
  { name: "OpenAI", category: "AI", icon: <SiOpenai className="text-green-400" /> },
  { name: "LLM", category: "AI", icon: <TbBrain className="text-purple-500" /> },
  { name: "Chatbot Development", category: "AI", icon: <TbMessageChatbot className="text-blue-400" /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb className="text-green-600" /> },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "GitHub", category: "DevOps", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Django", category: "Backend", icon: <SiDjango className="text-black dark:text-white" /> },
  { name: "Firebase", category: "Database", icon: <SiFirebase className="text-orange-500" /> },
];

const SkillsGrid = () => {
  return (
    <div className="bg-primary-light dark:bg-secondary-dark p-8 rounded-3xl shadow-lg font-general-medium">
      <h3 className="text-2xl font-bold text-center text-primary-dark dark:text-ternary-light mb-8">
        I Work With
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <div className="bg-secondary-light dark:bg-secondary-dark w-20 h-20 flex items-center justify-center rounded-2xl text-4xl mb-2">
              {tech.icon}
            </div>
            <h4 className="font-bold text-primary-dark dark:text-ternary-light">
              {tech.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tech.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;