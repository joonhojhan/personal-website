import React, { useState } from 'react';
import './App.css';
import './util.css';
import Routes from './routes';
import { Navbar, NavbarMenu } from './components';

function App() {
	const [toggleModal, setToggleModal] = useState(false);

	return (
		<div className="App">
			<Navbar toggleModal={toggleModal} setToggleModal={setToggleModal} />
			<NavbarMenu toggleModal={toggleModal} setToggleModal={setToggleModal} />
			<div className="nav--margin">
				<Routes />
			</div>
		</div>
	);
}

export default App;
