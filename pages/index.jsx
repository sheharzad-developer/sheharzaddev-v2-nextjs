import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SkillsProgressBar from '../components/about/SkillsProgressBar';
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import skillsAnimation from "../public/lottie/SkillsAnimation.json";

const projects = [
  {
    title: "Card Click and Play",
    img: "/images/Card-and-Click:Play.png",
    link: "https://sheharzad-developer.github.io/Card-Click-and-Play/",
  },
  {
    title: "Exploding Text on Scroll",
    img: "/images/WebPage.png",
    link: "https://sheharzad-developer.github.io/sheharzad-explode-text-on-scroll-matterjs/",
  },
  {
    title: "Netsol Website",
    img: "/images/Netsoltech.png",
    link: "https://netsoltech.com/",
  },
  // Add more projects here as needed
];

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Sheharzad" />

      <AppBanner />

      {/* Skills Progress Bar Section as Flex */}
      <div className="flex flex-col lg:flex-row gap-8 items-center my-8">
        {/* Left: Skills Progress Bar */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <SkillsProgressBar />
        </div>
        {/* Right: Lottie Animation */}
        <div
          className="w-full lg:w-1/2 h-[400px] rounded-xl flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <Lottie
            animationData={skillsAnimation}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <h2 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mt-10 mb-4">Project Related</h2>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 sm:mt-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="w-full h-56 mb-3 rounded-lg overflow-hidden shadow-lg relative">
              <Image
                src={project.img}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                priority={idx === 0}
                sizes="(max-width: 640px) 100vw, 50vw"
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
          </motion.div>
        ))}
      </div>

      {/* <div className="mt-10 sm:mt-15 flex justify-center">
        <div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
          <Link href="/projects" aria-label="More Projects" passHref>
            <Button title="More Projects" />
          </Link>
        </div>
      </div> */}
    </div>
  );
}
