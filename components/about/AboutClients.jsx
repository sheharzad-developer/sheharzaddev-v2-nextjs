import { useState } from 'react';
import { clientsData } from '../../data/clientsData';
import { clientsHeading } from '../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';

function AboutClients() {
	const [clients, setClients] = useState(clientsData);

	return (
		<div className="mt-10 sm:mt-20 bg-primary-dark dark:bg-primary-dark py-12 rounded-lg">
			<h2 className="font-general-medium text-2xl sm:text-3xl text-center text-white mb-12">
				{clientsHeading}
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center items-center mt-10 sm:mt-14 gap-8">
				{clients.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
}

export default AboutClients;