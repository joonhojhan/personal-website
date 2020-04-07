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
							href="https://drive.google.com/uc?export=download&id=1r9z08WF6_OBkRAtuR4gk4x33kb6PakiL"
							className="home--link"
						>
							{'<Download Resume />'}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
