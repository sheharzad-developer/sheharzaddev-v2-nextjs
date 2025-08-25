import { FiPhone, FiMapPin, FiMail, FiBriefcase, FiMessageCircle, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import HireMeModal from '../HireMeModal';
import { useLanguage } from '../../context/LanguageContext';

const ContactDetails = () => {
	const [showModal, setShowModal] = useState(false);
	const { t } = useLanguage();

	function showHireMeModal() {
		setShowModal(!showModal);
	}

	const handleWhatsAppClick = () => {
		const message = encodeURIComponent("Hi Sheharzad! I'd like to discuss a project with you.");
		window.open(`https://wa.me/923160144176?text=${message}`, '_blank');
	};

	const handleTelegramClick = () => {
		const message = encodeURIComponent("Hi Sheharzad! I'd like to discuss a project with you.");
		window.open(`https://t.me/sheharzad_developer?text=${message}`, '_blank');
	};

	const handleCalendlyClick = () => {
		window.open('https://calendly.com/sheharzad-salahuddin9000', '_blank');
	};

	return (
		<motion.div 
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
			className="w-full"
		>
			<div className="text-center lg:text-left max-w-xl px-4 mx-auto lg:mx-0">
				<h2 className="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light mt-8 mb-8 text-center lg:text-left">
					{t('contact.details.title')}
				</h2>
				
				<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
					{t('contact.details.description')}
				</p>

				{/* Quick Contact Options */}
				<div className="space-y-6 mb-8">
					{/* WhatsApp Chat */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="group cursor-pointer"
						onClick={handleWhatsAppClick}
					>
						<div className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300">
							<div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
								<FaWhatsapp className="text-white text-xl" />
							</div>
							<div className="flex-1 text-left">
								<h3 className="font-semibold text-green-800 dark:text-green-200">{t('contact.details.whatsapp.title')}</h3>
								<p className="text-sm text-green-600 dark:text-green-300">{t('contact.details.whatsapp.description')}</p>
							</div>
							<FiExternalLink className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
					</motion.div>

					{/* Telegram Chat */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="group cursor-pointer"
						onClick={handleTelegramClick}
					>
						<div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300">
							<div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
								<FaTelegram className="text-white text-xl" />
							</div>
							<div className="flex-1 text-left">
								<h3 className="font-semibold text-blue-800 dark:text-blue-200">{t('contact.details.telegram.title')}</h3>
								<p className="text-sm text-blue-600 dark:text-blue-300">{t('contact.details.telegram.description')}</p>
							</div>
							<FiExternalLink className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
					</motion.div>

					{/* Calendly Booking */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="group cursor-pointer"
						onClick={handleCalendlyClick}
					>
						<div className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300">
							<div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
								<FiCalendar className="text-white text-xl" />
							</div>
							<div className="flex-1 text-left">
								<h3 className="font-semibold text-purple-800 dark:text-purple-200">{t('contact.details.calendly.title')}</h3>
								<p className="text-sm text-purple-600 dark:text-purple-300">{t('contact.details.calendly.description')}</p>
							</div>
							<FiExternalLink className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
					</motion.div>
				</div>

				{/* Traditional Contact Info */}
				<div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
					<h3 className="font-general-medium text-lg text-primary-dark dark:text-primary-light mb-4">
						{t('contact.details.otherWays')}
					</h3>
					<ul className="space-y-3">
						<li className="flex items-center gap-3">
							<FiMail className="text-gray-500 dark:text-gray-400" />
							<a 
								href="mailto:sheharzad.salahuddin9000@outlook.com"
								className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
							>
								sheharzad.salahuddin9000@outlook.com
							</a>
						</li>
						<li className="flex items-center gap-3">
							<FiPhone className="text-gray-500 dark:text-gray-400" />
							<a 
								href="tel:+923160144176"
								className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
							>
								+92 316 0144176
							</a>
						</li>
						<li className="flex items-center gap-3">
							<FiMapPin className="text-gray-500 dark:text-gray-400" />
							<span className="text-gray-700 dark:text-gray-300">Lahore, Pakistan</span>
						</li>
					</ul>
				</div>

				{/* Social Links */}
				<div className="mb-8">
					<h3 className="font-general-medium text-lg text-primary-dark dark:text-primary-light mb-4">
					{t('contact.info.connectWithMe')}
				</h3>
					<div className="flex gap-4 justify-center lg:justify-start">
						<motion.a
							href="https://www.linkedin.com/in/sheharzad-salahuddin-frontend-developer/"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
						>
							<FaLinkedin className="text-xl" />
						</motion.a>
						<motion.a
							href="https://github.com/sheharzad-developer"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
						>
							<FaGithub className="text-xl" />
						</motion.a>
					</div>
				</div>

				{/* Hire Me Section */}
				<div className="pt-6 border-t border-ternary-light dark:border-ternary-dark">
					<h3 className="font-general-medium text-lg sm:text-xl text-primary-dark dark:text-primary-light mb-4 text-center lg:text-left">
						{t('contact.details.hireMe.title')}
					</h3>
					<motion.button
						onClick={showHireMeModal}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="w-full lg:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-general-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
						aria-label="Hire Me"
					>
						<FiBriefcase className="text-lg" />
						{t('contact.details.hireMe.button')}
					</motion.button>
				</div>
			</div>

			{/* Hire Me Modal */}
			{showModal && (
				<HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
			)}
		</motion.div>
	);
};

export default ContactDetails;
