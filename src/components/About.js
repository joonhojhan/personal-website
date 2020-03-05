import React from 'react';
import aboutDescription from '../aboutDescription';

export default function About() {
	return (
		<div className="home">
			<div className="home--container">
				<div className="home--image-container">
					<img className="about--image" src="JoonhoHan2.jpeg" alt="" />
				</div>
				<div className="flex flex-col flex-space-between">
					<p className="about--text">
						<span className="about--text-header">About Me</span>
						<br />
						{aboutDescription}
					</p>
					<div className="flex flex-row flex-center">
						<a
							href="/downloads/Joonho-Han-Software-Engineer-Resume.pdf"
							className="home--link"
							download
						>
							{'<Download Resume />'}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
