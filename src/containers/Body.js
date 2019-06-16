import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from './Footer';

import Header from './Header';

class Body extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={About} />
					<Route exact path="/work" component={Work} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Body;
