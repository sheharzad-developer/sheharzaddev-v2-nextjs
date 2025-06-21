import { AnimatePresence, motion } from 'framer-motion';
import { AboutMeProvider } from '../context/AboutMeContext';
import AboutClients from '../components/about/AboutClients';
import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';
import AboutSkills from '../components/about/AboutSkills';
import PagesMetaHead from '../components/PagesMetaHead';
import { useInView } from 'react-intersection-observer';
import Expertise from '../components/about/Expertise';

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '-100px' });

  return (
    <div>
      <PagesMetaHead title="About Me" />

      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="0"
          className="container mx-auto"
        >
          <AboutMeBio />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="500"
        >
          <AboutCounter />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="800"
          className="container mx-auto"
        >
          <AboutClients />
          <Expertise />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="800"
          className="container mx-auto"
        >
          <AboutSkills />
        </div>
      </div>
    </div>
    // <div>
    //   <PagesMetaHead title="About Me" />

    //   <div ref={ref}>
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    //       transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
    //       className="container mx-auto"
    //     >
    //       <AboutMeBio />
    //     </motion.div>

    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    //       transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
    //     >
    //       <AboutCounter />
    //     </motion.div>

    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    //       transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
    //       className="container mx-auto"
    //     >
    //       <AboutClients />
    //     </motion.div>
    //   </div>
    // </div>
  );
}

export default About;
