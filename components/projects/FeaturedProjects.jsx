import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projectsData';

const FeaturedProjects = () => {
	const { t, currentLanguage } = useLanguage();

	// Get first 3 projects as featured
	const featuredProjects = projectsData.slice(0, 3);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			viewport={{ once: true }}
			className="py-16 sm:py-20"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-4"
					>
						{t('projects.featuredProjects', 'Featured Projects')}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-lg text-ternary-dark dark:text-ternary-light max-w-2xl mx-auto"
					>
						{t('projects.subtitle', 'Some of my recent work')}
					</motion.p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ ease: 'easeInOut', duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-secondary-light dark:bg-ternary-dark rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
						>
							{/* Project Image */}
							<div className="relative h-48 overflow-hidden">
								<Image
									src={project.img}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">
									{project.title}
								</h3>
								{project.subtitle && (
									<p className="text-sm text-ternary-dark dark:text-ternary-light mb-3">
										{project.subtitle}
									</p>
								)}
								<p className="text-ternary-dark dark:text-ternary-light mb-4 line-clamp-3">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.slice(0, 3).map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-3 py-1 bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light text-xs rounded-full"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="px-3 py-1 bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light text-xs rounded-full">
											+{project.technologies.length - 3}
										</span>
									)}
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3">
									<Link
										href={`/${currentLanguage}/projects/${project.id}`}
										className="flex-1 bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-opacity-90 transition-colors duration-200"
									>
										{t('projects.viewProject', 'View Project')}
									</Link>
									{project.link && (
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 py-2 border border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light rounded-lg text-sm font-medium hover:bg-primary-dark hover:text-primary-light dark:hover:bg-primary-light dark:hover:text-primary-dark transition-colors duration-200"
										>
											{t('projects.liveDemo', 'Live Demo')}
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* View All Projects Button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<Link
						href={`/${currentLanguage}/projects`}
						className="inline-flex items-center px-8 py-3 bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200"
					>
						{t('projects.viewAllProjects', 'View All Projects')}
						<svg
							className="ml-2 w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default FeaturedProjects;