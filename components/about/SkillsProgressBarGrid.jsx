import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiFirebase,
  SiExpress,
  SiFigma,
  SiElectron,
  SiPostgresql,
  SiMongodb,
  SiPython
} from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

// Add more icons as needed

const skills = [
  { name: 'HTML', level: 98, icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', level: 98, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'React', level: 95, icon: <FaReact className="text-cyan-400" /> },
  { name: 'JavaScript', level: 90, icon: <FaJs className="text-yellow-400" /> },
  { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Next.js', level: 80, icon: <SiNextdotjs className="text-primary-dark dark:text-primary-light" /> },
  { name: 'NuxtJS', level: 80, icon: <SiNuxtdotjs className="text-green-500" /> },
  { name: 'Node.js', level: 75, icon: <FaNodeJs className="text-green-500" /> },
  { name: 'TypeScript', level: 70, icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Firebase', level: 70, icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'ExpressJS', level: 70, icon: <SiExpress className="text-primary-dark dark:text-primary-light" /> },
  { name: 'Figma', level: 70, icon: <SiFigma className="text-pink-500" /> },
  { name: 'ElectronJS', level: 70, icon: <SiElectron className="text-blue-400" /> },
  { name: 'Git', level: 70, icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', level: 70, icon: <FaGithub className="text-primary-dark dark:text-primary-light" /> },
  { name: 'postgreSQL', level: 70, icon: <SiPostgresql className="text-blue-800" /> },
  { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-green-700" /> },
  { name: 'Python', level: 70, icon: <SiPython className="text-green-700" /> },
];

const SkillsProgressBarGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px' });

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay="100"
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="rounded-xl p-6 flex flex-col items-center"
        >
          <div className="text-4xl mb-2">{skill.icon}</div>
          <div className="italic text-lg mb-1 text-primary-dark dark:text-ternary-light">{skill.name}</div>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-pink-500 to-blue-500 h-3 rounded-full transition-all duration-700"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <div className="text-sm text-primary-dark dark:text-ternary-light">{skill.level}%</div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgressBarGrid; 
