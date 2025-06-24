import { FiPhone, FiMapPin, FiMail, FiBriefcase } from 'react-icons/fi';
import { useState } from 'react';
import HireMeModal from '../HireMeModal';

const contacts = [
	{
		id: 1,
		name: 'Lahore, Pakistan',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'sheharzad.salahuddin9000@outlook.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+92 316 0144176',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	const [showModal, setShowModal] = useState(false);

	function showHireMeModal() {
		setShowModal(!showModal);
	}

	return (
		<div className="w-full lg:w-1/2">
			<div className="text-center lg:text-left max-w-xl px-4 mx-auto lg:mx-0">
				<h2 className="font-general-medium text-xl sm:text-2xl text-primary-dark dark:text-primary-light mt-8 mb-6 text-center lg:text-left">
					Contact details
				</h2>
				<ul className="font-general-regular space-y-4">
					{contacts.map((contact) => (
						<li className="flex items-center justify-center lg:justify-start gap-3" key={contact.id}>
							<div className="flex items-center justify-center w-8 lg:justify-start">
								<i className="text-xl text-gray-500 dark:text-gray-400">
									{contact.icon}
								</i>
							</div>
							<span className="text-base sm:text-lg text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>

				{/* Hire Me Section */}
				<div className="mt-8 pt-6 border-t border-ternary-light dark:border-ternary-dark">
					<h3 className="font-general-medium text-lg sm:text-xl text-primary-dark dark:text-primary-light mb-4 text-center lg:text-left">
						Ready to start a project?
					</h3>
					<button
						onClick={showHireMeModal}
						className="w-full lg:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-general-medium px-6 py-3 rounded-md shadow-sm transition-colors duration-300 flex items-center justify-center gap-2"
						aria-label="Hire Me"
					>
						<FiBriefcase className="text-lg" />
						Hire Me
					</button>
				</div>
			</div>

			{/* Hire Me Modal */}
			{showModal && (
				<HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
			)}
		</div>
	);
};

export default ContactDetails;
