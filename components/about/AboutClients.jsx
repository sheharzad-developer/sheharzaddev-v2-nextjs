import { useState } from 'react';
import { clientsData } from '../../data/clientsData';
import { clientsHeading } from '../../data/clientsData';
import { skillsData } from '../../data/skillsData';
import { SkillsHeading } from '../../data/skillsData';
import AboutClientSingle from './AboutClientSingle';
import AboutMeContext from '../../context/AboutMeContext';

function AboutClients() {
	const [clients, setClients] = useState(clientsData);
	const [skills, setSkills] = useState(skillsData);
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{clients.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
			<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{SkillsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{skillsData.map((skill) => (
					<AboutClientSingle
						title={skill.title}
						image={skill.img}
						key={skill.id}
					/>
				))}
			</div>
			
		</div>
		</div>
		
	);
}

export default AboutClients;