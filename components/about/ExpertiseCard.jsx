const ExpertiseCard = ({ icon, title, description, items }) => {
    return (
        <div className="bg-secondary-dark dark:bg-ternary-dark p-8 rounded-2xl shadow-lg h-full flex flex-col space-y-4">
            <div className="bg-primary-dark dark:bg-secondary-dark w-16 h-16 flex items-center justify-center rounded-2xl mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary-light dark:text-white">{title}</h3>
            <p className="text-gray-300 dark:text-gray-400 text-base">{description}</p>
            <ul className="space-y-2 pt-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <span className="text-blue-400">&#x2022;</span>
                        <span className="text-primary-light dark:text-gray-300">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpertiseCard; 