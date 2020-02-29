import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="nav">
			<div className="flex flex-col flex-center">
				<Link to="/">
					<img className="nav--icon" src="JoonhoHan1.png" alt="logo" />
				</Link>
			</div>
			<div className="flex flex-col flex-center">
				<div>
					<Link to="/" className="nav--link">
						{'<Home/>'}
					</Link>
					<Link to="/about" className="nav--link">
						{'<About/>'}
					</Link>
					<Link to="/projects" className="nav--link">
						{'<Projects/>'}
					</Link>
					<Link to="/contact" className="nav--link">
						{'<Contact/>'}
					</Link>
				</div>
			</div>
		</nav>
	);
}
