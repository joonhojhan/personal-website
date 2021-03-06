import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="home">
			<div className="home--container">
				<div className="home--image-container">
					<img className="home--image" src="JoonhoHan1.png" alt="" />
				</div>
				<div className="flex flex-col flex-space-between">
					<div className="home--text">
						Hey! My name is
						<br />
						<br />
						<span
							className="home--text-name"
							style={{ fontWeight: 'bold', color: 'green' }}
						>
							Joonho Han.
						</span>
						<br />
						<br />
						I'm a Software Engineer.
					</div>
					<br />
					<br />
					<div className="flex flex-row flex-center">
						<Link className="home--link" to="/projects">
							{'<View Projects />'}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
