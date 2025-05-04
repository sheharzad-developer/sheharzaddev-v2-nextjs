import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

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
			</div>
		</div>
	);
};

export default ContactDetails;
