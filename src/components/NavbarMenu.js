import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function NavbarMenu(props) {
	const { toggleModal } = props;

	return (
		<div
			className={`nav--margin nav--menu${toggleModal ? ' nav--menu-active' : ''}`}
		>
			<Link to="/home" className="nav--menu-link">
				{'<Home />'}
			</Link>
			<Link to="/about" className="nav--menu-link">
				{'<About />'}
			</Link>
			<Link to="/projects" className="nav--menu-link">
				{'<Projects />'}
			</Link>
			<Link to="/contact" className="nav--menu-link">
				{'<Contact />'}
			</Link>
		</div>
	);
}
