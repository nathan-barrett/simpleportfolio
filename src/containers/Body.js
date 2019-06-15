import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from './Footer';
import Header from './Header';
import PropTypes from 'prop-types';

class Body extends React.Component {
	static propTypes = {
		location: PropTypes.object.isRequired
	};
	render() {
		const { location } = this.props;

		return (
			<div>
				<Header location={location.pathname} />
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

export default withRouter(Body);
