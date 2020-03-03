import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function Navbar(props) {
	const { toggleModal, setToggleModal } = props;

	return (
		<nav className="nav">
			<div className="flex flex-col flex-center">
				<Link to="/" className="nav--logo" onClick={() => setToggleModal(false)}>
					{'<Joonho />'}
				</Link>
			</div>
			<div className="flex flex-col flex-center">
				<div>
					<Link to="/projects" className="nav--link">
						{'<Projects />'}
					</Link>

					<Link to="/about" className="nav--link">
						{'<About />'}
					</Link>
					<Link to="/contact" className="nav--link">
						{'<Contact />'}
					</Link>
					<a
						href="https://linkedin.com/in/joonhojhan"
						className="nav--link"
						target="_blank"
						rel="noopener noreferrer"
					>
						{'<LinkedIn />'}
					</a>
					<a
						href="https://github.com/joonhojhan"
						className="nav--link"
						target="_blank"
						rel="noopener noreferrer"
					>
						{'<GitHub />'}
					</a>
					{!toggleModal ? (
						<i
							className="fas fa-bars nav--menu-icon"
							onClick={() => setToggleModal(!toggleModal)}
						></i>
					) : (
						<i
							className="fas fa-times nav--menu-icon"
							onClick={() => setToggleModal(!toggleModal)}
						></i>
					)}
				</div>
			</div>
		</nav>
	);
}
