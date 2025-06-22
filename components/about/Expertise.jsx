import { expertiseData } from '../../data/expertiseData';
import ExpertiseCard from './ExpertiseCard';

const Expertise = () => {
    return (
        <section className="mt-10 sm:mt-20 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {expertiseData.map((service, index) => (
                    <ExpertiseCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        items={service.items}
                        iconBgColor={service.iconBgColor}
                    />
                ))}
            </div>
        </section>
    );
};

export default Expertise; 