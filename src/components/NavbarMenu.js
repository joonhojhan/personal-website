import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function NavbarMenu(props) {
	const { toggleModal, setToggleModal } = props;

	return (
		<div
			className={`nav--margin nav--menu${toggleModal ? ' nav--menu-active' : ''}`}
		>
			<Link
				to="/projects"
				className="nav--menu-link"
				onClick={() => setToggleModal(false)}
			>
				{'<Projects />'}
			</Link>
			<Link
				to="/about"
				className="nav--menu-link"
				onClick={() => setToggleModal(false)}
			>
				{'<About />'}
			</Link>
			<Link
				to="/contact"
				className="nav--menu-link"
				onClick={() => setToggleModal(false)}
			>
				{'<Contact />'}
			</Link>
			<a
				href="https://linkedin.com/in/joonhojhan"
				className="nav--menu-link"
				target="_blank"
				rel="noopener noreferrer"
				onClick={() => setToggleModal(false)}
			>
				{'<LinkedIn />'}
			</a>
			<a
				href="https://github.com/joonhojhan"
				className="nav--menu-link"
				target="_blank"
				rel="noopener noreferrer"
				onClick={() => setToggleModal(false)}
			>
				{'<GitHub />'}
			</a>
		</div>
	);
}
