import { skillsData, SkillsHeading } from '../../data/skillsData';
import SkillsProgressBarGrid from './SkillsProgressBarGrid';

function AboutSkills() {
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
				{SkillsHeading}
			</p>
			<div className="mt-6 sm:mt-12">
				<SkillsProgressBarGrid />
			</div>
		</div>
	);
}

export default AboutSkills;
