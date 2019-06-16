import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
	fab,
	faGithub,
	faTwitter,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Body from './containers/Body';

library.add(fab, faGithub, faTwitter, faLinkedin, faEnvelope);
dom.watch();
ReactDOM.render(
	<Router>
		<Body />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
