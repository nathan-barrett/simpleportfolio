import React from 'react';
import { css } from 'emotion';

import books from '../images/books.jpg';

const aboutImage = css(`
	width: 100%;
	height: 400px;
    background-image: url('${books}');
    background-repeat: no-repeat;
    background-size: cover;
	display: flex;
	justify-content: center;
    align-items: cover;
	h2 {
        color: white;
        align-self: center;
        font-size: 48px;
        width: 70%;
        text-align: center;
	}
`);

const aboutContainer = css(`

    display: grid;
    padding: 40px 20px 40px 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`);

const aboutLeftColumn = css(`
    display: flex;
    flex-wrap: wrap;
    p {
        text-align: center;
        width: 100%;
        margin-bottom: 0;
        color: lightblue;
    }
    ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
        width: 100%;
        text-align: center;
        li {
            margin: 20px;
        }
    }
`);

const aboutRightColumn = css(`
    display: flex;
    justify-content: center;
    div{
        width: 80%;
    p:first-child {
        color: lightblue;
        text-align: center;
        }
    }
`);

const array = [
	'a hot cup of coffee',
	'learning with others',
	'starting a new book',
	'solving problems as a team',
	'exploring the pacific northwest'
];

const About = () => (
	<div>
		<div className={aboutImage}>
			<h2>
				I'm Nathan. <br /> I like to create thoughtful, <br />
				usable web sites.
			</h2>
		</div>
		<div className={aboutContainer}>
			<div className={aboutLeftColumn}>
				<p>I love</p>
				<ul>{array.map((i) => [<li key={i}>{i}</li>])}</ul>
			</div>
			<div className={aboutRightColumn}>
				<div>
					<p>Hi</p>
					<p>
						I took a bit of an unusual path into development. After I went to college for History and Education, I moved
						to Portland where I worked in both non-profits and retail in customer facing roles. I love being able to
						come up with solutions for complex problems, and it sparked my interest in development.
					</p>
					<p>
						I graduated from Epicodus, a vocational coding school, where I focused on JavaScript, React and CSS /
						Design. I beleive that the internet should be more accessable. I hope that to making thoughtful and usable
						websites will help.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default About;
