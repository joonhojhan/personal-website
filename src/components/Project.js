import React from 'react';

export default function Project(props) {
	const {
		name,
		description,
		imageUrl,
		technologies,
		github,
		deployed,
		presentation,
	} = props;
	return (
		<div className="home">
			<div className="home--container">
				<div className="project--image-container">
					<img src={imageUrl} alt="" className="project--image" />
				</div>
				<div className="flex flex-col flex-space-between">
					<div className="project--content">
						<div className="project--content-header">{name}</div>
						<div className="project--content-label">Description</div>
						<div className="project--content-description">{description}</div>
						<div className="project--content-label">Technologies</div>
						<div className="project--content-technologies">{technologies}</div>
						<div className="project--content-label">Links</div>

						<div className="project--content-github">
							Check out the codebase{' '}
							<a href={github} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.
						</div>

						{deployed && (
							<div className="project--content-deployed">
								Check out {name}{' '}
								<a href={deployed} target="_blank" rel="noopener noreferrer">
									here
								</a>
								.
							</div>
						)}
						{presentation && (
							<div className="project--content-presentation">
								Check out the presentation{' '}
								<a href={presentation} target="_blank" rel="noopener noreferrer">
									here
								</a>
								.
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
