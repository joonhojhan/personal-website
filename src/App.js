import React from 'react';
import './App.css';
import Routes from './routes';
import { Navbar } from './components';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="nav--margin">
				<Routes />
			</div>
		</div>
	);
}

export default App;
