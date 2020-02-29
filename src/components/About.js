import React from 'react';

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
						Prior to my career in software engineering, I had many experiences in
						teaching. I taught kids at summer camps topics ranging from English and
						Math to Engineering and Programming. I attended Rochester Institute of
						Technology (RIT) where I studied Computer Engineering and Math. I
						attended Fullstack Academy for software engineering and web development
						where I learned the ins and outs of software engineering, developing
						full-stack applications, and working in a team. I loved it so much that I
						applied for and completed the fellowship program at Fullstack Academy. I
						led teams to completion of projects, led white boarding sessions for
						algorithms, and realized how much I love software engineering.
					</p>
				</div>
			</div>
		</div>
	);
}
