import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';
import ParticlesBackground from '../shared/ParticlesBackground';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<ParticlesBackground />
			<PagesMetaHead />
			<AppHeader />
			<div className="relative z-10">{children}</div>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
