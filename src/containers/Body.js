import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';

const Body = () => (
	<div>
		<Switch>
			<Route exact path="/" component={About} />
			<Route exact path="/work" component={Work} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	</div>
);

export default Body;
