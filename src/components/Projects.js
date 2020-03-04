import React from 'react';
import Project from './Project';
import projectList from '../projectList';

export default function Projects() {
	return (
		<div className="projects">
			{projectList.map(proj => {
				const {
					name,
					imageUrl,
					description,
					technologies,
					github,
					deployed,
					presentation,
				} = proj;
				return (
					<Project
						key={name}
						name={name}
						imageUrl={imageUrl}
						description={description}
						technologies={technologies}
						github={github}
						deployed={deployed}
						presentation={presentation}
					/>
				);
			})}
		</div>
	);
}
