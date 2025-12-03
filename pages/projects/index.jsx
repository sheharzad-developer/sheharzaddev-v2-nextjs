import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Projects = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace('/en/projects');
	}, [router]);

	return null; 
};

function Index() {
  return null; 
}

export default Projects;
