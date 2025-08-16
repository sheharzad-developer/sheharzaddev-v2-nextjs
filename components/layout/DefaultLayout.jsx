import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';
import ParticlesBackground from '../shared/ParticlesBackground';
import CustomCursor from '../shared/CustomCursor';
import FloatingContactButton from '../shared/FloatingContactButton';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<ParticlesBackground />
			<CustomCursor />
			<FloatingContactButton />
			<PagesMetaHead />
			<AppHeader />
			<div className="relative z-10">{children}</div>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
