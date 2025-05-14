import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import AboutSkillsClient from "./AboutSkillsClient";
import SkillsProgressBar from './SkillsProgressBar';

const AboutSkills = () => {
  const { skillsData, skillsHeading } = useContext(AboutMeContext);

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
        {skillsHeading}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
        {skillsData.map((skill) => (
          <AboutSkillsClient
            title={skill.title}
            image={skill.img}
            key={skill.id}
          />
        ))}
      </div>
      <SkillsProgressBar />
    </div>
  );
};

export default AboutSkills;
