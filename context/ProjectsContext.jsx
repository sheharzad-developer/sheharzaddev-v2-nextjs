// context/ProjectsContext.js
import React, { createContext, useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [searchProject, setSearchProject] = useState('');
  const [selectProject, setSelectProject] = useState(null);

  const searchProjectsByTitle = projects.filter(project => 
    project.title.toLowerCase().includes(searchProject.toLowerCase())
  );

  const selectProjectsByCategory = projects.filter(project => 
    project.category === selectProject
  );

  return (
    <ProjectsContext.Provider value={{
      projects,
      setProjects,
      searchProject,
      setSearchProject,
      searchProjectsByTitle,
      selectProject,
      setSelectProject,
      selectProjectsByCategory,
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};
