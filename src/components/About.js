import React from 'react';
import { css } from 'emotion';

import test5 from '../images/test5.jpg';

const aboutImage = css(`
	width: 100%;
	height: 325px;
    background-image: url('${test5}');
    background-repeat: no-repeat;
    background-size: cover;
	display: flex;
	justify-content: center;
    align-items: center;
    background-position: center;
	h1 {
        color: white;
        align-self: center;
        font-size: 48px;
        width: 70%;
        text-align: center;
	}
`);

const aboutContainer = css({
	display: 'flex',
	padding: '20px',
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center'
});

const techList = css({
	display: 'inline-flex',
	width: '100%',
	justifyContent: 'space-evenly',
	padding: 0
});

const About = () => (
	<div>
		<div className={aboutImage}>
			<h1>Hey, I'm Nathan.</h1>
		</div>
		<div className={aboutContainer}>
			<h1>HELLO!</h1>
			<p>
				I'm Nathan and I am a web developer based in Portland, Oregon
				currently working at Periscopic developing tools for Data
				Vizualization. I enjoy learning new languages and
				problem-solving in a collaborative and support environment. When
				I'm not coding, I love to running outside, drinking coffee, and
				reading my favorite books.
			</p>
			<ul className={techList}>
				<li>React + Javascript</li>
				<li>Typescript</li>
				<li>Python</li>
				<li>Node</li>
			</ul>
		</div>
	</div>
);

export default About;
