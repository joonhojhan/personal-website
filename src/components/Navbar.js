import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function Navbar(props) {
	const { toggleModal, setToggleModal } = props;
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
						{'<Home />'}
					</Link>
					<Link to="/about" className="nav--link">
						{'<About />'}
					</Link>
					<Link to="/projects" className="nav--link">
						{'<Projects />'}
					</Link>
					<Link to="/contact" className="nav--link">
						{'<Contact />'}
					</Link>
					{!toggleModal ? (
						<i
							className="fas fa-bars nav--menu-icon"
							onClick={() => setToggleModal(!toggleModal)}
						></i>
					) : (
						<i
							class="fas fa-times nav--menu-icon"
							onClick={() => setToggleModal(!toggleModal)}
						></i>
					)}
				</div>
			</div>
		</nav>
	);
}
