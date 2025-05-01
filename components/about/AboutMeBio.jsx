import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 items-center">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:justify-start" role="img" aria-label="Profile Image Container">
				<Image
					src="/images/profile.jpeg"
					width={500}
					height={500}
					className="rounded-lg"
					alt="Sheharzad Salahuddin's Profile"
					priority={true}
					sizes="(max-width: 768px) 100vw, 25vw"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-center sm:text-left" role="region" aria-label="Biography">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
						lang="en"
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
