import React, { Component } from 'react';
// Local dependencides
import Header from './containers/Header';
import Body from './containers/Body';
import Footer from './containers/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Body />
			</div>
		);
	}
}

export default App;
