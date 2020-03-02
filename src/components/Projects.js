import React from 'react';
import Project from './Project';
import projectList from '../projectList';

export default function Projects() {
	return (
		<div className="projects">
			{projectList.map(proj => (
				<Project
					key={proj.name}
					name={proj.name}
					imageUrl={proj.imageUrl}
					description={proj.description}
					technologies={proj.technologies}
					github={proj.github}
					deployed={proj.deployed}
				/>
			))}
		</div>
	);
}
