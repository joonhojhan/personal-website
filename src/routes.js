import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Projects, Contact, About } from './components';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	);
}
